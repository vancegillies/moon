"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[730],{5318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,k=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9634:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(7378),a=n(1884),o=n(5773),i=n(808),s=n(7765),l=n(5268),p=n(8896),c=["name"],m={discord:s.omb,github:s.zhw,moon:l.Gp0,"new-project":l.g6h,"new-task":l.EQ8,project:l.pL1,"project-config":l.dhu,"project-config-global":l.YdP,"project-graph":l.Bkj,"run-task":l.sl_,task:l.diR,"task-config":l.o$R,token:l.BwA,toolchain:l.AlB,twitter:s.mdU,workspace:l.emM,"workspace-config":l.cRF};function u(e){var t=e.name,n=(0,i.Z)(e,c);return r.createElement(p.Z,(0,o.Z)({},n,{icon:m[t]}))}function d(e){var t=e.links;return r.createElement("div",{className:"grid grid-cols-1 gap-2 sm:grid-cols-2"},t.map((function(e){return r.createElement(a.Z,{key:e.url,href:e.url,className:"focus:outline-none"},r.createElement("div",{className:"relative rounded-lg px-3 py-3 flex items-center space-x-2 border-solid border border-t-0 border-b-2 bg-gray-50 hover:bg-gray-100/90 border-gray-200/75 dark:bg-slate-700 dark:hover:bg-slate-600 dark:border-slate-900/75"},r.createElement("div",{className:"flex-shrink-0"},r.createElement(u,{size:"lg",name:e.icon})),r.createElement("div",{className:"flex-1 min-w-0 text-gray-900 dark:text-gray-100"},e.label)))})))}},9151:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(5773),a=n(808),o=(n(7378),n(5318)),i=n(9634),s=["components"],l={title:"Migrate to moon"},p=void 0,c={unversionedId:"migrate-to-moon",id:"migrate-to-moon",title:"Migrate to moon",description:"Now that we've talked about the workspace, projects, tasks, and more, we must talk about something",source:"@site/docs/migrate-to-moon.mdx",sourceDirName:".",slug:"/migrate-to-moon",permalink:"/docs/migrate-to-moon",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/migrate-to-moon.mdx",tags:[],version:"current",frontMatter:{title:"Migrate to moon"},sidebar:"docs",previous:{title:"Run a task",permalink:"/docs/run-task"},next:{title:"Guides",permalink:"/docs/guides"}},m={},u=[{value:"Migrate to moon tasks",id:"migrate-to-moon-tasks",level:2},{value:"Keep using <code>package.json</code> scripts",id:"keep-using-packagejson-scripts",level:2},{value:"Next steps",id:"next-steps",level:2}],d={toc:u};function k(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Now that we've talked about the workspace, projects, tasks, and more, we must talk about something\nimportant... Should you embrace moon tasks? Or keep using ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," scripts? Or both\n(incremental adoption)?"),(0,o.kt)("h2",{id:"migrate-to-moon-tasks"},"Migrate to moon tasks"),(0,o.kt)("p",null,"We suggest using moon tasks (of course), as they provide far more granular control and configurable\noptions than scripts, and a ",(0,o.kt)("inlineCode",{parentName:"p"},"project.yml")," is a better\n",(0,o.kt)("a",{parentName:"p",href:"./faq#what-should-be-considered-the-source-of-truth"},"source of truth"),". Scripts aren't powerful\nenough to scale for large codebases."),(0,o.kt)("p",null,"To ease the migration process, we offer the\n",(0,o.kt)("a",{parentName:"p",href:"./commands/migrate/from-package-json"},(0,o.kt)("inlineCode",{parentName:"a"},"moon migrate from-package-json"))," command, which will convert\na project's ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," scripts into ",(0,o.kt)("inlineCode",{parentName:"p"},"project.yml")," tasks, while also determining project\ndependencies (",(0,o.kt)("a",{parentName:"p",href:"./config/project#dependsOn"},(0,o.kt)("inlineCode",{parentName:"a"},"dependsOn")),"). This needs to be ran ",(0,o.kt)("em",{parentName:"p"},"per project"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ moon migrate from-package-json app\n")),(0,o.kt)("p",null,"This command will do its best to parse and convert scripts, but this isn't always a simple 1:1\nconversion, especially when determining dependency chains. For this reason alone, we suggest\n",(0,o.kt)("em",{parentName:"p"},"manually curating")," tasks, but the migrate command well get you most of the way!"),(0,o.kt)("h2",{id:"keep-using-packagejson-scripts"},"Keep using ",(0,o.kt)("inlineCode",{parentName:"h2"},"package.json")," scripts"),(0,o.kt)("p",null,"As a frontend developer you're already familiar with the Node.js ecosystem, specifically around\ndefining and using ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," scripts, and you may not want to deviate from this. Don't worry,\nsimply enable the ",(0,o.kt)("a",{parentName:"p",href:"./config/workspace#infertasksfromscripts"},(0,o.kt)("inlineCode",{parentName:"a"},"node.inferTasksFromScripts"))," setting\nto automatically create moon tasks from a project's scripts! These can then be ran with\n",(0,o.kt)("a",{parentName:"p",href:"./commands/run"},(0,o.kt)("inlineCode",{parentName:"a"},"moon run")),"."),(0,o.kt)("p",null,"This implementation is a simple abstraction that runs ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run <script>")," (or pnpm/yarn) in the\nproject directory as a child process. While this works, relying on ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," scripts incurs the\nfollowing risks and disadvantages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./config/project#inputs"},"Inputs")," default to ",(0,o.kt)("inlineCode",{parentName:"li"},"**/*"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"A change to every project relative file will mark the task as affected, even those not necessary\nfor the task. Granular input control is lost."),(0,o.kt)("li",{parentName:"ul"},"A change to workspace relative files ",(0,o.kt)("em",{parentName:"li"},"will not")," mark the task as affected. For example, a change\nto ",(0,o.kt)("inlineCode",{parentName:"li"},"/prettier.config.js")," would not be detected for a ",(0,o.kt)("inlineCode",{parentName:"li"},"npm run format")," script."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./config/project#outputs"},"Outputs")," default to an empty list unless:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"moon will attempt to extract outputs from arguments, by looking for variations of ",(0,o.kt)("inlineCode",{parentName:"li"},"--out"),",\n",(0,o.kt)("inlineCode",{parentName:"li"},"--outFile"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"--dist-dir"),", etc."),(0,o.kt)("li",{parentName:"ul"},"If no output could be determined, builds will not be cached and hydrated."))),(0,o.kt)("li",{parentName:"ul"},"Tasks will always ",(0,o.kt)("a",{parentName:"li",href:"./config/project#runinci"},"run in CI")," unless:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"moon will attempt to determine invalid CI tasks by looking for popular command usage, for\nexample: ",(0,o.kt)("inlineCode",{parentName:"li"},"webpack serve"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"next dev"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"--watch")," usage, and more. This ",(0,o.kt)("em",{parentName:"li"},"is not")," an exhaustive\ncheck."),(0,o.kt)("li",{parentName:"ul"},"The script name contains variations of ",(0,o.kt)("inlineCode",{parentName:"li"},"dev"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"start"),", or ",(0,o.kt)("inlineCode",{parentName:"li"},"serve"),".")))),(0,o.kt)("h2",{id:"next-steps"},"Next steps"),(0,o.kt)("p",null,"By this point, you should have a better understanding behind moon's fundamentals! Why not adopt\nincrementally next? Jump into ",(0,o.kt)("a",{parentName:"p",href:"./guides"},"guides")," for advanced use cases or ",(0,o.kt)("a",{parentName:"p",href:"./concepts"},"concepts"),"\nfor a deeper understanding."),(0,o.kt)(i.Z,{links:[{icon:"discord",label:"Community help & support",url:"https://discord.gg/qCh9MEynv2"},{icon:"twitter",label:"Releases & updates",url:"https://twitter.com/tothemoonrepo"}],mdxType:"NextSteps"}))}k.isMDXComponent=!0}}]);