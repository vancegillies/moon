"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4138],{5318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,k=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7915:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7378),r=n(5268),o=n(9619);function i(e){var t=e.text;return a.createElement(o.Z,{text:t,icon:r.SZw,variant:"success",className:"absolute right-0 top-1.5"})}},9634:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7378),r=n(1884),o=n(5773),i=n(808),s=n(7765),l=n(5268),c=n(8896),p=["name"],u={discord:s.omb,github:s.zhw,moon:l.Gp0,"new-project":l.g6h,"new-task":l.EQ8,project:l.pL1,"project-config":l.dhu,"project-config-global":l.YdP,"project-graph":l.Bkj,"run-task":l.sl_,task:l.diR,"task-config":l.o$R,token:l.BwA,toolchain:l.AlB,twitter:s.mdU,workspace:l.emM,"workspace-config":l.cRF};function m(e){var t=e.name,n=(0,i.Z)(e,p);return a.createElement(c.Z,(0,o.Z)({},n,{icon:u[t]}))}function d(e){var t=e.links;return a.createElement("div",{className:"grid grid-cols-1 gap-2 sm:grid-cols-2"},t.map((function(e){return a.createElement(r.Z,{key:e.url,href:e.url,className:"focus:outline-none"},a.createElement("div",{className:"relative rounded-lg px-3 py-3 flex items-center space-x-2 border-solid border border-t-0 border-b-2 bg-gray-50 hover:bg-gray-100/90 border-gray-200/75 dark:bg-slate-700 dark:hover:bg-slate-600 dark:border-slate-900/75"},a.createElement("div",{className:"flex-shrink-0"},a.createElement(m,{size:"lg",name:e.icon})),a.createElement("div",{className:"flex-1 min-w-0 text-gray-900 dark:text-gray-100"},e.label)))})))}},9619:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(7378),r=n(8944),o=n(8896),i={failure:"bg-red-100 text-red-900",info:"bg-pink-100 text-pink-900",success:"bg-green-100 text-green-900",warning:"bg-orange-100 text-orange-900"};function s(e){var t=e.className,n=e.icon,s=e.text,l=e.variant;return a.createElement("span",{className:(0,r.Z)("inline-flex items-center px-1 py-0.5 rounded text-xs font-bold uppercase",l?i[l]:"bg-gray-100 text-gray-800",t)},n&&a.createElement(o.Z,{icon:n,className:"mr-1"}),s)}},9944:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return d}});var a=n(5773),r=n(808),o=(n(7378),n(5318)),i=n(7915),s=n(9634),l=["components"],c={title:"Create a task"},p=void 0,u={unversionedId:"create-task",id:"create-task",title:"Create a task",description:"The primary focus of moon is a build system, and for it to operate in any capacity, it requires",source:"@site/docs/create-task.mdx",sourceDirName:".",slug:"/create-task",permalink:"/docs/create-task",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/create-task.mdx",tags:[],version:"current",frontMatter:{title:"Create a task"},sidebar:"docs",previous:{title:"Create a project",permalink:"/docs/create-project"},next:{title:"Run a task",permalink:"/docs/run-task"}},m={},d=[{value:"Configuring a task",id:"configuring-a-task",level:2},{value:"Inputs",id:"inputs",level:3},{value:"Outputs",id:"outputs",level:3},{value:"Depending on other tasks",id:"depending-on-other-tasks",level:2},{value:"Using file groups",id:"using-file-groups",level:2},{value:"Next steps",id:"next-steps",level:2}],k={toc:d};function f(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{text:"10 min",mdxType:"HeaderLabel"}),(0,o.kt)("p",null,"The primary focus of moon is a build system, and for it to operate in any capacity, it requires\ntasks to run. In moon, a task is an npm binary or system command that is ran as a child process\nwithin the context of a project (is the current working directory). Tasks are defined per project\nwith ",(0,o.kt)("a",{parentName:"p",href:"./config/project"},(0,o.kt)("inlineCode",{parentName:"a"},"project.yml")),", or inherited by all projects with\n",(0,o.kt)("a",{parentName:"p",href:"./config/global-project"},(0,o.kt)("inlineCode",{parentName:"a"},".moon/project.yml")),", but can also be inferred from ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," scripts\n(",(0,o.kt)("a",{parentName:"p",href:"./migrate-to-moon"},"we'll talk about this later"),")."),(0,o.kt)("h2",{id:"configuring-a-task"},"Configuring a task"),(0,o.kt)("p",null,"Most -- if not all projects -- utilize the same core tasks: linting, testing, code formatting, and\ntype-checking. Because these are so universal, let's implement the type-checking task in\n",(0,o.kt)("a",{parentName:"p",href:"./config/global-project"},(0,o.kt)("inlineCode",{parentName:"a"},".moon/project.yml")),", which will be inherited by all projects."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This section assumes that ",(0,o.kt)("inlineCode",{parentName:"p"},"typescript")," is installed as a dependency in your root, and that all\n",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," files have been setup correctly.")),(0,o.kt)("p",null,"Begin by adding a ",(0,o.kt)("inlineCode",{parentName:"p"},"typecheck")," field to the ",(0,o.kt)("a",{parentName:"p",href:"./config/project#tasks"},(0,o.kt)("inlineCode",{parentName:"a"},"tasks"))," setting. This task will\nuse ",(0,o.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript")," and run ",(0,o.kt)("inlineCode",{parentName:"p"},"tsc")," under the hood, since we defined the\n",(0,o.kt)("a",{parentName:"p",href:"./config/project#command"},(0,o.kt)("inlineCode",{parentName:"a"},"command"))," setting."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/project.yml" {2,3}',title:'".moon/project.yml"',"{2,3}":!0},"tasks:\n    typecheck:\n        command: 'tsc'\n")),(0,o.kt)("p",null,"By itself, this isn't doing much. So let's add some arguments with the\n",(0,o.kt)("a",{parentName:"p",href:"./config/project#args"},(0,o.kt)("inlineCode",{parentName:"a"},"args"))," setting. We encourage everyone to use\n",(0,o.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/project-references.html"},"TypeScript project references"),"\nfor project boundaries and strict encapsulation, and as such, we'll use it below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/project.yml" {4}',title:'".moon/project.yml"',"{4}":!0},"tasks:\n    typecheck:\n        command: 'tsc'\n        args: '--build --verbose'\n")),(0,o.kt)("p",null,"With this, the task can be ran from the command line with\n",(0,o.kt)("a",{parentName:"p",href:"./commands/run"},(0,o.kt)("inlineCode",{parentName:"a"},"moon run <project>:typecheck")),"! This is tasks in its most simplest form, but\ncontinue reading on how to take full advantage of our build system."),(0,o.kt)("h3",{id:"inputs"},"Inputs"),(0,o.kt)("p",null,"Our task above works, but isn't very efficient as it ",(0,o.kt)("em",{parentName:"p"},"always")," runs, regardless of what has changed\nsince the last time it has ran. This becomes problematic in continuous integration environments, not\njust locally."),(0,o.kt)("p",null,"To mitigate this problem, moon provides a system known as inputs, which are file paths and globs\nthat are used by the task when it's ran. moon will use and compare these inputs to calculate whether\nto run, or to return the previous run state from the cache."),(0,o.kt)("p",null,"If you're a bit confused, let's demonstrate this by expanding the task with the\n",(0,o.kt)("a",{parentName:"p",href:"./config/project#inputs"},(0,o.kt)("inlineCode",{parentName:"a"},"inputs"))," setting. Since this is TypeScript, we expect a ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),"\nto exist in the project, and probably in the workspace root too."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/project.yml" {5-11}',title:'".moon/project.yml"',"{5-11}":!0},"tasks:\n    typecheck:\n        command: 'tsc'\n        args: '--build --verbose'\n        inputs:\n            - 'src/**/*'\n            - 'tests/**/*'\n            - 'types/**/*'\n            - 'tsconfig.json'\n            - '/tsconfig.*.json'\n            - '/tsconfig.json'\n")),(0,o.kt)("p",null,"This list of inputs may look complicated, but they are merely run checks. For example, when moon\ndetects a change in..."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Any files within the ",(0,o.kt)("inlineCode",{parentName:"li"},"src"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"tests"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"types")," folders, relative from the project's root."),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("inlineCode",{parentName:"li"},"tsconfig.json")," in the project's root."),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("inlineCode",{parentName:"li"},"tsconfig.json")," or any ",(0,o.kt)("inlineCode",{parentName:"li"},"tsconfig.*.json")," in the workspace root (denoted by the leading ",(0,o.kt)("inlineCode",{parentName:"li"},"/"),").")),(0,o.kt)("p",null,"...the task will be ran! If the change occurs ",(0,o.kt)("em",{parentName:"p"},"outside")," of the project or ",(0,o.kt)("em",{parentName:"p"},"outside")," the list of\ninputs, the task will ",(0,o.kt)("em",{parentName:"p"},"not")," be ran."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Inputs are a powerful feature that can be fine-tuned to your project's need. Be as granular or open\nas you want, the choice is yours!"))),(0,o.kt)("h3",{id:"outputs"},"Outputs"),(0,o.kt)("p",null,"Outputs are the opposite of ",(0,o.kt)("a",{parentName:"p",href:"#inputs"},"inputs"),", as they are files and folders that are created as a\nresult of running the task. With that being said, outputs are ",(0,o.kt)("em",{parentName:"p"},"optional"),", as not all tasks require\nthem, and the ones that do are typically build related."),(0,o.kt)("p",null,"Now why is declaring outputs important? For incremental builds and smart caching! When moon\nencounters a build that has already been built, it hydrates all necessary outputs from the cache,\nthen immediately exits. No more waiting for long builds!"),(0,o.kt)("p",null,"Continuing our example, since we're using TypeScript project references and it generates declaration\nfiles, we'll write them to a project local ",(0,o.kt)("inlineCode",{parentName:"p"},"dts")," folder and mark it as an output. Let's expand our\ntask with the ",(0,o.kt)("a",{parentName:"p",href:"./config/project#outputs"},(0,o.kt)("inlineCode",{parentName:"a"},"outputs"))," setting."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/project.yml" {12,13}',title:'".moon/project.yml"',"{12,13}":!0},"tasks:\n    typecheck:\n        command: 'tsc'\n        args: '--build --verbose'\n        inputs:\n            - 'src/**/*'\n            - 'tests/**/*'\n            - 'types/**/*'\n            - 'tsconfig.json'\n            - '/tsconfig.*.json'\n            - '/tsconfig.json'\n        outputs:\n            - 'dts'\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="tsconfig.json"',title:'"tsconfig.json"'},'{\n    // ...\n    "compilerOptions": {\n        // ...\n        "outDir": "dts"\n    }\n}\n')),(0,o.kt)("h2",{id:"depending-on-other-tasks"},"Depending on other tasks"),(0,o.kt)("p",null,"While not relating to our TypeScript example above, but is important to talk about, is the concept\nof task dependencies. For scenarios where you need run a task ",(0,o.kt)("em",{parentName:"p"},"before")," another task, as you're\nexpecting some repository state or artifact to exist, can be achieved with the\n",(0,o.kt)("a",{parentName:"p",href:"./config/project#deps"},(0,o.kt)("inlineCode",{parentName:"a"},"deps"))," setting, which requires a list of ",(0,o.kt)("a",{parentName:"p",href:"./concepts/target"},"targets"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<project>:<task>")," - Full canonical target."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"~:<task>")," - A task within the current project."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"^:<task>")," - A task from all depended on projects (via ",(0,o.kt)("a",{parentName:"li",href:"./config/project#dependson"},(0,o.kt)("inlineCode",{parentName:"a"},"dependsOn")),").")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"dependsOn:\n    # ...\n\ntasks:\n    build:\n        # ...\n        deps:\n            - '^:build'\n")),(0,o.kt)("h2",{id:"using-file-groups"},"Using file groups"),(0,o.kt)("p",null,"Once you're familiar with configuring tasks, you may notice certain inputs being repeated\nconstantly, like source files, test files, and configuration. To reduce the amount of boilerplate\nrequired, moon provides a feature known as ",(0,o.kt)("a",{parentName:"p",href:"./concepts/file-group"},"file groups"),", which enables\ngrouping of similar file types within a project using\n",(0,o.kt)("a",{parentName:"p",href:"./concepts/file-pattern"},"file glob patterns or literal file paths"),"."),(0,o.kt)("p",null,"File groups are defined with the ",(0,o.kt)("a",{parentName:"p",href:"./config/project#filegroups"},(0,o.kt)("inlineCode",{parentName:"a"},"fileGroups"))," setting, which maps a\nlist of file paths/globs to a group, like so."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/project.yml"',title:'".moon/project.yml"'},"fileGroups:\n    configs:\n        - '*.config.js'\n        - 'tsconfig.json'\n        - '/tsconfig.*.json'\n        - '/tsconfig.json'\n    sources:\n        - 'src/**/*'\n        - 'types/**/*'\n    tests:\n        - 'tests/**/*'\n")),(0,o.kt)("p",null,"We can then replace the inputs in our task above with these new file groups using a syntax known as\n",(0,o.kt)("a",{parentName:"p",href:"./concepts/token"},"tokens"),", specifically the ",(0,o.kt)("a",{parentName:"p",href:"./concepts/token#globs"},(0,o.kt)("inlineCode",{parentName:"a"},"@globs"))," and\n",(0,o.kt)("a",{parentName:"p",href:"./concepts/token#files"},(0,o.kt)("inlineCode",{parentName:"a"},"@files"))," token functions. Tokens are an advanced feature, so please refer\nto their documentation for more information!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".moon/project.yml" {6-8}',title:'".moon/project.yml"',"{6-8}":!0},"tasks:\n    typecheck:\n        command: 'tsc'\n        args: '--build --verbose'\n        inputs:\n            - '@globs(sources)'\n            - '@globs(tests)'\n            - '@files(configs)'\n        outputs:\n            - 'dts'\n")),(0,o.kt)("p",null,"With file groups (and tokens), you're able to reduce the amount of configuration required ",(0,o.kt)("em",{parentName:"p"},"and"),"\nencourage certain file structures for consuming projects!"),(0,o.kt)("h2",{id:"next-steps"},"Next steps"),(0,o.kt)(s.Z,{links:[{icon:"run-task",label:"Run a task",url:"./run-task"},{icon:"project-config-global",label:(0,o.kt)("span",null,"Configure ",(0,o.kt)("code",null,".moon/project.yml")," further"),url:"./config/global-project"},{icon:"project-config",label:(0,o.kt)("span",null,"Configure ",(0,o.kt)("code",null,"project.yml")," further"),url:"./config/project"},{icon:"task",label:"Learn about tasks",url:"./concepts/task"},{icon:"token",label:"Learn about tokens",url:"./concepts/token"}],mdxType:"NextSteps"}))}f.isMDXComponent=!0}}]);