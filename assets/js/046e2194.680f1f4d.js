"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8667],{6243:function(e,a,n){n.d(a,{Z:function(){return o}});var t=n(7378),r=n(8944),l="tabItem_lLGn";function o(e){var a=e.children,n=e.hidden,o=e.className;return t.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},a)}},637:function(e,a,n){n.d(a,{Z:function(){return d}});var t=n(5773),r=n(7378),l=n(6457),o=n(784),i=n(9947),s=n(3457),p=n(8944),c="tabList_lSCs",u="tabItem_WhCL";function m(e){var a,n,l,m=e.lazy,d=e.block,k=e.defaultValue,g=e.values,h=e.groupId,f=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=g?g:v.map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes}})),N=(0,o.l)(b,(function(e,a){return e.value===a.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===k?k:null!=(a=null!=k?k:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?a:null==(l=v[0])?void 0:l.props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,i.U)(),x=w.tabGroupChoices,C=w.setTabGroupChoices,Z=(0,r.useState)(y),I=Z[0],T=Z[1],E=[],j=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var L=x[h];null!=L&&L!==I&&b.some((function(e){return e.value===L}))&&T(L)}var z=function(e){var a=e.currentTarget,n=E.indexOf(a),t=b[n].value;t!==I&&(j(a),T(t),null!=h&&C(h,t))},D=function(e){var a,n=null;switch(e.key){case"ArrowRight":var t=E.indexOf(e.currentTarget)+1;n=E[t]||E[0];break;case"ArrowLeft":var r=E.indexOf(e.currentTarget)-1;n=E[r]||E[E.length-1]}null==(a=n)||a.focus()};return r.createElement("div",{className:(0,p.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":d},f)},b.map((function(e){var a=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,t.Z)({role:"tab",tabIndex:I===a?0:-1,"aria-selected":I===a,key:a,ref:function(e){return E.push(e)},onKeyDown:D,onFocus:z,onClick:z},l,{className:(0,p.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":I===a})}),null!=n?n:a)}))),m?(0,r.cloneElement)(v.filter((function(e){return e.props.value===I}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map((function(e,a){return(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==I})}))))}function d(e){var a=(0,l.Z)();return r.createElement(m,(0,t.Z)({key:String(a)},e))}},6642:function(e,a,n){n.d(a,{Z:function(){return p}});var t=n(7378),r=n(7518),l=n(6243),o=n(637);function i(e,a,n){var t=e.package?"yarn workspace "+e.package+" add ":"yarn add ";return e.dev?t+="--dev ":e.peer&&(t+="--peer "),n&&a&&!e.package&&(t+="-W "),t+=e.dep}function s(e,a){var n="pnpm add ";return e.dev?n+="--save-dev ":e.peer&&(n+="--save-peer "),e.package?n+="--filter "+e.package+" ":a&&(n+="-w "),n+=e.dep}function p(e){var a=i(e,!1,!0),n=s(e,!1);return e.package||(a+="\n\n# If using workspaces\n",n+="\n\n# If using workspaces\n",a+=i(e,!0,!0),n+=s(e,!0)),t.createElement(o.Z,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"Yarn (classic)",value:"yarn1"},{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"}]},t.createElement(l.Z,{value:"yarn"},t.createElement(r.Z,{language:"shell"},i(e,!1,!1))),t.createElement(l.Z,{value:"yarn1"},t.createElement(r.Z,{language:"shell"},a)),t.createElement(l.Z,{value:"npm"},t.createElement(r.Z,{language:"shell"},function(e){var a="npm install ";return e.dev?a+="--save-dev ":e.peer&&(a+="--save-peer "),e.package&&(a+="--workspace "+e.package+" "),a+e.dep}(e))),t.createElement(l.Z,{value:"pnpm"},t.createElement(r.Z,{language:"shell"},n)))}},7915:function(e,a,n){n.d(a,{Z:function(){return o}});var t=n(7378),r=n(5268),l=n(9619);function o(e){var a=e.text;return t.createElement(l.Z,{text:a,icon:r.SZw,variant:"success",className:"absolute right-0 top-1.5"})}},9634:function(e,a,n){n.d(a,{Z:function(){return d}});var t=n(7378),r=n(1884),l=n(5773),o=n(808),i=n(7765),s=n(5268),p=n(8896),c=["name"],u={discord:i.omb,github:i.zhw,moon:s.Gp0,"new-project":s.g6h,"new-task":s.EQ8,project:s.pL1,"project-config":s.dhu,"project-config-global":s.YdP,"project-graph":s.Bkj,"run-task":s.sl_,task:s.diR,"task-config":s.o$R,token:s.BwA,toolchain:s.AlB,twitter:i.mdU,workspace:s.emM,"workspace-config":s.cRF};function m(e){var a=e.name,n=(0,o.Z)(e,c);return t.createElement(p.Z,(0,l.Z)({},n,{icon:u[a]}))}function d(e){var a=e.links;return t.createElement("div",{className:"grid grid-cols-1 gap-2 sm:grid-cols-2"},a.map((function(e){return t.createElement(r.Z,{key:e.url,href:e.url,className:"focus:outline-none"},t.createElement("div",{className:"relative rounded-lg px-3 py-3 flex items-center space-x-2 border-solid border border-t-0 border-b-2 bg-gray-50 hover:bg-gray-100/90 border-gray-200/75 dark:bg-slate-700 dark:hover:bg-slate-600 dark:border-slate-900/75"},t.createElement("div",{className:"flex-shrink-0"},t.createElement(m,{size:"lg",name:e.icon})),t.createElement("div",{className:"flex-1 min-w-0 text-gray-900 dark:text-gray-100"},e.label)))})))}},9619:function(e,a,n){n.d(a,{Z:function(){return i}});var t=n(7378),r=n(8944),l=n(8896),o={failure:"bg-red-100 text-red-900",info:"bg-pink-100 text-pink-900",success:"bg-green-100 text-green-900",warning:"bg-orange-100 text-orange-900"};function i(e){var a=e.className,n=e.icon,i=e.text,s=e.variant;return t.createElement("span",{className:(0,r.Z)("inline-flex items-center px-1 py-0.5 rounded text-xs font-bold uppercase",s?o[s]:"bg-gray-100 text-gray-800",a)},n&&t.createElement(l.Z,{icon:n,className:"mr-1"}),i)}},6841:function(e,a,n){n.r(a),n.d(a,{assets:function(){return g},contentTitle:function(){return d},default:function(){return v},frontMatter:function(){return m},metadata:function(){return k},toc:function(){return h}});var t=n(5773),r=n(808),l=(n(7378),n(5318)),o=n(637),i=n(6243),s=n(7915),p=n(9634),c=n(6642),u=["components"],m={title:"Install moon"},d=void 0,k={unversionedId:"install",id:"install",title:"Install moon",description:"The following guide can be used for adding moon to an existing repository (with incremental",source:"@site/docs/install.mdx",sourceDirName:".",slug:"/install",permalink:"/docs/install",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/install.mdx",tags:[],version:"current",frontMatter:{title:"Install moon"},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"Setup workspace",permalink:"/docs/setup-workspace"}},g={},h=[{value:"Choosing a package manager",id:"choosing-a-package-manager",level:2},{value:"Enabling workspaces",id:"enabling-workspaces",level:3},{value:"Installing the CLI",id:"installing-the-cli",level:2},{value:"Accessing the <code>moon</code> binary",id:"accessing-the-moon-binary",level:3},{value:"Adding a package script",id:"adding-a-package-script",level:3},{value:"Supported targets",id:"supported-targets",level:3},{value:"Initializing moon",id:"initializing-moon",level:2},{value:"Next steps",id:"next-steps",level:2}],f={toc:h};function v(e){var a=e.components,n=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,t.Z)({},f,n,{components:a,mdxType:"MDXLayout"}),(0,l.kt)(s.Z,{text:"5 min",mdxType:"HeaderLabel"}),(0,l.kt)("p",null,"The following guide can be used for adding moon to an existing repository (with incremental\nadoption), or to a fresh repository. All that's required is..."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"Node.js")," and basic knowledge of the ecosystem"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://git-scm.com/"},"git"),", a version control system"),(0,l.kt)("li",{parentName:"ul"},"A ",(0,l.kt)("inlineCode",{parentName:"li"},"package.json")," in your repository root")),(0,l.kt)(o.Z,{groupId:"repo-type",defaultValue:"new",values:[{label:"New repo",value:"new"},{label:"Existing repo",value:"existing"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"new",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git init ./app\ncd ./app\nnpm init\n"))),(0,l.kt)(i.Z,{value:"existing",mdxType:"TabItem"},(0,l.kt)("p",null,"If you already have a root ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json"),", continue to the next section, otherwise..."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm init\n")))),(0,l.kt)("h2",{id:"choosing-a-package-manager"},"Choosing a package manager"),(0,l.kt)("p",null,'Before we install moon, we should briefly talk about Node.js package managers. To start, moon does\nnot replace a package manager, nor does it apply any "magic" for them to work differently. Instead,\nmoon builds upon a package manager to provide a robust build system, assumes a standard\n',(0,l.kt)("inlineCode",{parentName:"p"},"node_modules")," layout and module resolution algorithm, and supports any of the following 3 package\nmanagers."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.npmjs.com/"},"npm")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://pnpm.io/"},"pnpm")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://yarnpkg.com/"},"Yarn")," (v1, v2+ in ",(0,l.kt)("inlineCode",{parentName:"li"},"node-modules")," linker mode)")),(0,l.kt)("p",null,"We suggest Yarn 3 for its powerful workspaces implementation, extensive support for native binaries,\nbuilt-in package patching, and blazing speed, but feel free to choose the one that works best for\nyou!"),(0,l.kt)("h3",{id:"enabling-workspaces"},"Enabling workspaces"),(0,l.kt)("p",null,"moon was built with monorepos in mind, and as such, has first-class support for them through package\nworkspaces (but is not a requirement). To utilize workspaces, enable them for your chosen package\nmanager."),(0,l.kt)(o.Z,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"Yarn (classic)",value:"yarn1"},{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n    // ...\n    "workspaces": ["apps/*", "packages/*"]\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".yarnrc.yml"',title:'".yarnrc.yml"'},"# ...\nnodeLinker: 'node-modules'\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://yarnpkg.com/features/workspaces"},"Documentation")))),(0,l.kt)(i.Z,{value:"yarn1",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n    // ...\n    "workspaces": ["apps/*", "packages/*"]\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://classic.yarnpkg.com/en/docs/workspaces"},"Documentation")))),(0,l.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n    // ...\n    "workspaces": ["apps/*", "packages/*"]\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.npmjs.com/cli/v8/using-npm/workspaces"},"Documentation")))),(0,l.kt)(i.Z,{value:"pnpm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="pnpm-workspace.yaml"',title:'"pnpm-workspace.yaml"'},"packages:\n    - 'apps/*'\n    - 'packages/*'\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://pnpm.io/workspaces"},"Documentation"))))),(0,l.kt)("h2",{id:"installing-the-cli"},"Installing the CLI"),(0,l.kt)("p",null,"The entirety of moon is packaged and shipped as a single binary through the ",(0,l.kt)("inlineCode",{parentName:"p"},"@moonrepo/cli")," npm\npackage. Begin by installing this package at the root of the repository."),(0,l.kt)(c.Z,{dep:"@moonrepo/cli",dev:!0,mdxType:"AddDepsTabs"}),(0,l.kt)("h3",{id:"accessing-the-moon-binary"},"Accessing the ",(0,l.kt)("inlineCode",{parentName:"h3"},"moon")," binary"),(0,l.kt)("p",null,"For developers, we suggest installing the ",(0,l.kt)("inlineCode",{parentName:"p"},"@moonrepo/cli")," package globally, so that you can easily\nrun ",(0,l.kt)("inlineCode",{parentName:"p"},"moon")," commands from ",(0,l.kt)("em",{parentName:"p"},"any")," directory, instead of relying on ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," scripts. When using\nthis approach, the global must be installed with npm (not pnpm or yarn)!"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install -g @moonrepo/cli\n")),(0,l.kt)("p",null,"Don't worry though, when using the global binary, we ensure the same version of moon is being\nexecuted that was defined as a dependency in the repo."),(0,l.kt)("h3",{id:"adding-a-package-script"},"Adding a package script"),(0,l.kt)("p",null,"For other scenarios or environments, like CI, ",(0,l.kt)("inlineCode",{parentName:"p"},"moon")," can be ran with through a ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," script\n-- but this comes with a cost -- which is the overhead of launching Node.js and your chosen package\nmanager to execute the Rust binary, ",(0,l.kt)("em",{parentName:"p"},"instead of")," executing the Rust binary directly. If this is\nproblematic, feel free to use the global approach above."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n    // ...\n    "scripts": {\n        // ...\n        "moon": "moon",\n        // For Yarn 2+\n        "moon": "$(yarn bin moon)"\n    }\n}\n')),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Yarn 2+ does not support executing Rust binaries through package scripts\n(",(0,l.kt)("a",{parentName:"p",href:"https://github.com/yarnpkg/berry/issues/882"},"issue"),"), so we must access the full binary path and\nexecute on that."))),(0,l.kt)("p",null,"With this script, moon can then be run with ",(0,l.kt)("inlineCode",{parentName:"p"},"npm run moon ...")," (or ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn run"),", or ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm run"),"), but\ndo note that this pattern ",(0,l.kt)("em",{parentName:"p"},"will not")," work with package workspaces unless the script is ran from the\nrepository root."),(0,l.kt)("h3",{id:"supported-targets"},"Supported targets"),(0,l.kt)("p",null,"Because moon is written in Rust, we only support targets that are explicitly compiled for, which are\ncurrently:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"macOS 64-bit - Intel (",(0,l.kt)("inlineCode",{parentName:"li"},"x86_64-apple-darwin"),")"),(0,l.kt)("li",{parentName:"ul"},"macOS 64-bit - Silicon (",(0,l.kt)("inlineCode",{parentName:"li"},"aarch64-apple-darwin"),")"),(0,l.kt)("li",{parentName:"ul"},"Linux 64-bit - GNU (",(0,l.kt)("inlineCode",{parentName:"li"},"x86_64-unknown-linux-gnu"),")"),(0,l.kt)("li",{parentName:"ul"},"Linux 64-bit - musl (",(0,l.kt)("inlineCode",{parentName:"li"},"x86_64-unknown-linux-musl"),")"),(0,l.kt)("li",{parentName:"ul"},"Windows 64-bit (",(0,l.kt)("inlineCode",{parentName:"li"},"x86_64-pc-windows-msvc"),")")),(0,l.kt)("h2",{id:"initializing-moon"},"Initializing moon"),(0,l.kt)("p",null,"Now that we have the CLI installed, let's scaffold and initialize moon in a repository with the\n",(0,l.kt)("a",{parentName:"p",href:"./commands/init"},(0,l.kt)("inlineCode",{parentName:"a"},"moon init"))," command. Be sure to ",(0,l.kt)("a",{parentName:"p",href:"#accessing-the-moon-binary"},"access the binary"),"\nas mentioned above."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ moon init\n")),(0,l.kt)("p",null,"When executed, the following operations will be applied."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Creates a ",(0,l.kt)("inlineCode",{parentName:"li"},".moon")," folder with associated ",(0,l.kt)("a",{parentName:"li",href:"./config/workspace"},(0,l.kt)("inlineCode",{parentName:"a"},".moon/workspace.yml"))," and\n",(0,l.kt)("a",{parentName:"li",href:"./config/global-project"},(0,l.kt)("inlineCode",{parentName:"a"},".moon/project.yml"))," configuration files."),(0,l.kt)("li",{parentName:"ul"},"Appends necessary ignore patterns to the relative ",(0,l.kt)("inlineCode",{parentName:"li"},".gitignore"),"."),(0,l.kt)("li",{parentName:"ul"},"Infers the Node.js version from any ",(0,l.kt)("inlineCode",{parentName:"li"},".nvmrc")," or ",(0,l.kt)("inlineCode",{parentName:"li"},".node-version")," file."),(0,l.kt)("li",{parentName:"ul"},"Infers the package manager based on any existing config and lock files."),(0,l.kt)("li",{parentName:"ul"},"Infers the package manager version from the ",(0,l.kt)("inlineCode",{parentName:"li"},"packageManager")," field in ",(0,l.kt)("inlineCode",{parentName:"li"},"package.json"),"."),(0,l.kt)("li",{parentName:"ul"},"Infers projects from the ",(0,l.kt)("inlineCode",{parentName:"li"},"workspaces")," field in ",(0,l.kt)("inlineCode",{parentName:"li"},"package.json"),"."),(0,l.kt)("li",{parentName:"ul"},"Infers the version control system from the environment.")),(0,l.kt)("h2",{id:"next-steps"},"Next steps"),(0,l.kt)(p.Z,{links:[{icon:"workspace-config",label:"Setup workspace",url:"./setup-workspace"},{icon:"workspace",label:"Learn about the workspace",url:"./concepts/workspace"}],mdxType:"NextSteps"}))}v.isMDXComponent=!0}}]);