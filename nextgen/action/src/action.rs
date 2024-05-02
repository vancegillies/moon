use crate::action_node::ActionNode;
use crate::attempt::Attempt;
use moon_common::color;
use moon_time::chrono::NaiveDateTime;
use moon_time::now_timestamp;
use serde::{Deserialize, Serialize};
use std::sync::Arc;
use std::time::{Duration, Instant};

#[derive(Copy, Clone, Debug, Default, Deserialize, Serialize)]
#[serde(rename_all = "kebab-case")]
pub enum ActionStatus {
    Cached,
    CachedFromRemote,
    Failed,
    FailedAndAbort,
    Invalid,
    Passed,
    #[default]
    Running,
    Skipped, // When nothing happened
}

#[derive(Debug, Default, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct Action {
    pub allow_failure: bool,

    pub attempts: Option<Vec<Attempt>>,

    pub created_at: NaiveDateTime,

    pub duration: Option<Duration>,

    pub error: Option<String>,

    #[serde(skip)]
    pub error_report: Option<miette::Report>,

    pub finished_at: Option<NaiveDateTime>,

    pub flaky: bool,

    pub label: String,

    pub node: Arc<ActionNode>,

    pub node_index: usize,

    pub started_at: Option<NaiveDateTime>,

    #[serde(skip)]
    pub start_time: Option<Instant>,

    pub status: ActionStatus,
}

impl Action {
    pub fn new(node: ActionNode) -> Self {
        Action {
            allow_failure: false,
            attempts: None,
            created_at: now_timestamp(),
            duration: None,
            error: None,
            error_report: None,
            finished_at: None,
            flaky: false,
            label: node.label(),
            node: Arc::new(node),
            node_index: 0,
            started_at: None,
            start_time: None,
            status: ActionStatus::Running,
        }
    }

    pub fn abort(&mut self) {
        self.status = ActionStatus::FailedAndAbort;
    }

    pub fn start(&mut self) {
        self.started_at = Some(now_timestamp());
        self.start_time = Some(Instant::now());
    }

    pub fn finish(&mut self, status: ActionStatus) {
        self.finished_at = Some(now_timestamp());
        self.status = status;

        if let Some(start) = &self.start_time {
            self.duration = Some(start.elapsed());
        }
    }

    pub fn fail(&mut self, error: miette::Report) {
        self.error = Some(error.to_string());
        self.error_report = Some(error);
        self.finish(ActionStatus::Failed);
    }

    pub fn has_failed(&self) -> bool {
        matches!(
            &self.status,
            ActionStatus::Failed | ActionStatus::FailedAndAbort
        )
    }

    pub fn get_error(&mut self) -> miette::Report {
        if let Some(report) = self.error_report.take() {
            return report;
        }

        if let Some(error) = &self.error {
            return miette::miette!("{error}");
        }

        miette::miette!("Unknown error!")
    }

    pub fn set_attempts(&mut self, attempts: Vec<Attempt>, command: &str) -> bool {
        let some_failed = attempts.iter().any(|attempt| attempt.has_failed());
        let mut passed = true;

        if let Some(last) = attempts.last() {
            if last.has_failed() {
                let mut message = format!("Failed to run {}", color::shell(command));

                if let Some(code) = last.exit_code {
                    message += " ";
                    message += color::muted_light(format!("(exit code {})", code)).as_str();
                }

                self.error = Some(message);
                passed = false;
            }
        }

        self.attempts = Some(attempts);
        self.flaky = some_failed && passed;

        passed
    }

    pub fn should_abort(&self) -> bool {
        matches!(self.status, ActionStatus::FailedAndAbort)
    }

    pub fn should_bail(&self) -> bool {
        !self.allow_failure && self.has_failed()
    }

    pub fn was_cached(&self) -> bool {
        matches!(
            self.status,
            ActionStatus::Cached | ActionStatus::CachedFromRemote
        )
    }
}
