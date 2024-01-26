"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[82763],{3975:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>l});var i=s(24246),o=s(71670);const t={title:"Sharing workspace configuration"},r=void 0,a={id:"guides/sharing-config",title:"Sharing workspace configuration",description:"For large companies, open source maintainers, and those that love reusability, more often than not",source:"@site/docs/guides/sharing-config.mdx",sourceDirName:"guides",slug:"/guides/sharing-config",permalink:"/docs/guides/sharing-config",draft:!1,unlisted:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/guides/sharing-config.mdx",tags:[],version:"current",frontMatter:{title:"Sharing workspace configuration"},sidebar:"guides",previous:{title:"Root-level project",permalink:"/docs/guides/root-project"},next:{title:"WASM plugins",permalink:"/docs/guides/wasm-plugins"}},c={},l=[{value:"Versioning",id:"versioning",level:2},{value:"Using versioned filenames",id:"using-versioned-filenames",level:3},{value:"Using branches, tags, or commits",id:"using-branches-tags-or-commits",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"For large companies, open source maintainers, and those that love reusability, more often than not\nyou'll want to use the same configuration across all repositories for consistency. This helps reduce\nthe maintenance burden while ensuring a similar developer experience."}),"\n",(0,i.jsxs)(n.p,{children:["To help streamline this process, moon provides an ",(0,i.jsx)(n.code,{children:"extends"})," setting in both\n",(0,i.jsx)(n.a,{href:"../config/workspace#extends",children:(0,i.jsx)(n.code,{children:".moon/workspace.yml"})}),",\n",(0,i.jsx)(n.a,{href:"../config/toolchain#extends",children:(0,i.jsx)(n.code,{children:".moon/toolchain.yml"})}),", and\n",(0,i.jsx)(n.a,{href:"../config/tasks#extends",children:(0,i.jsx)(n.code,{children:".moon/tasks.yml"})}),". This setting requires a HTTPS URL ",(0,i.jsx)(n.em,{children:"or"})," relative file\nsystem path that points to a valid YAML document for the configuration in question."]}),"\n",(0,i.jsxs)(n.p,{children:['A great way to share configuration is by using GitHub\'s "raw file view", as demonstrated below using\nour very own ',(0,i.jsx)(n.a,{href:"https://github.com/moonrepo/examples",children:"examples repository"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title=".moon/tasks.yml"',children:"extends: 'https://raw.githubusercontent.com/moonrepo/examples/master/.moon/tasks.yml'\n"})}),"\n",(0,i.jsx)(n.h2,{id:"versioning",children:"Versioning"}),"\n",(0,i.jsx)(n.p,{children:'Inheriting an upstream configuration can be dangerous, as the settings may change at any point,\nresulting in broken builds. To mitigate this, you can used a "versioned" upstream configuration,\nwhich is ideally a fixed point in time. How this is implemented is up to you or your company, but we\nsuggest the following patterns:'}),"\n",(0,i.jsx)(n.h3,{id:"using-versioned-filenames",children:"Using versioned filenames"}),"\n",(0,i.jsx)(n.p,{children:"A rudimentary solution is to append a version to the upstream filename. When the file is modified, a\nnew version should be created, while the previous version remains untouched."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-diff",children:"-extends: '../shared/project.yml'\n+extends: '../shared/project-v1.yml'\n"})}),"\n",(0,i.jsx)(n.h3,{id:"using-branches-tags-or-commits",children:"Using branches, tags, or commits"}),"\n",(0,i.jsx)(n.p,{children:"When using a version control platform, like GitHub above, you can reference the upstream\nconfiguration through a branch, tag, commit, or sha. Since these are a reference point in time, they\nare relatively safe."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-diff",children:"-extends: 'https://raw.githubusercontent.com/moonrepo/examples/master/.moon/tasks.yml'\n+extends: 'https://raw.githubusercontent.com/moonrepo/examples/c3f10160bcd16b48b8d4d21b208bb50f6b09bd96/.moon/tasks.yml'\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},71670:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>r});var i=s(27378);const o={},t=i.createContext(o);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);