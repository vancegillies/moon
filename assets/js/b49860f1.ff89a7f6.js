"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2700],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=p(n),m=r,d=g["".concat(s,".").concat(m)]||g[m]||c[m]||a;return n?o.createElement(d,i(i({ref:t},u),{},{components:n})):o.createElement(d,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},79353:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=n(25773),r=(n(27378),n(35318));const a={title:"Plugins"},i=void 0,l={unversionedId:"proto/plugins",id:"proto/plugins",title:"Plugins",description:"proto supports a pluggable architecture as a means for consumers to integrate and manage custom",source:"@site/docs/proto/plugins.mdx",sourceDirName:"proto",slug:"/proto/plugins",permalink:"/docs/proto/plugins",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/proto/plugins.mdx",tags:[],version:"current",frontMatter:{title:"Plugins"},sidebar:"proto",previous:{title:"Supported tools",permalink:"/docs/proto/tools"},next:{title:"TOML",permalink:"/docs/proto/toml-plugin"}},s={},p=[{value:"Enabling plugins",id:"enabling-plugins",level:2},{value:"<code>source:</code>",id:"source",level:3},{value:"<code>github:</code>",id:"github",level:3},{value:"Creating plugins",id:"creating-plugins",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"proto supports a pluggable architecture as a means for consumers to integrate and manage custom\ntools (languages, CLIs, etc) within proto's toolchain. It's not possible for proto to support\n",(0,r.kt)("em",{parentName:"p"},"everything")," in core directly, so plugins are a way for the community to extend the toolchain to\ntheir needs."),(0,r.kt)("h2",{id:"enabling-plugins"},"Enabling plugins"),(0,r.kt)("p",null,"Plugins can be enabled by configuring them in\n",(0,r.kt)("a",{parentName:"p",href:"./config#plugins"},(0,r.kt)("inlineCode",{parentName:"a"},".prototools")," or ",(0,r.kt)("inlineCode",{parentName:"a"},"~/.proto/config.toml"))," files, within the ",(0,r.kt)("inlineCode",{parentName:"p"},"[plugins]")," section,\nwhich maps a plugin to a locator string. The map key is the plugin name ",(0,r.kt)("em",{parentName:"p"},"in kebab-case"),", which is\nused as the binary/tool name in proto, and also the name for configuration and cache purposes. The\nmap value is a locator string that defines a scope and source location."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title=".prototools"',title:'".prototools"'},'[plugins]\n<id> = "<scope>:<location>"\n')),(0,r.kt)("p",null,"The following locator patterns are supported:"),(0,r.kt)("h3",{id:"source"},(0,r.kt)("inlineCode",{parentName:"h3"},"source:")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"source:")," locator scope supports both secure URLs and file system paths (relative from the\nconfig file). Files will be used as-is, while URLs will be downloaded to ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.proto/plugins"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title=".prototools"',title:'".prototools"'},'[plugins]\nfile-tool = "source:plugins/example.wasm"\nurl-tool = "source:https://domain.com/path/to/plugins/example.wasm"\n')),(0,r.kt)("h3",{id:"github"},(0,r.kt)("inlineCode",{parentName:"h3"},"github:")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"github:")," locator scope can be used to target and download an asset from a specific GitHub\nrelease. The location must be an organization + repository slug (owner/repo), and the release ",(0,r.kt)("em",{parentName:"p"},"must\nhave")," a ",(0,r.kt)("inlineCode",{parentName:"p"},".wasm")," asset available to download."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title=".prototools"',title:'".prototools"'},'[plugins]\ngithub-tool = "github:moonrepo/example-repo"\n')),(0,r.kt)("p",null,"By default, the latest release will be used and cached for 7 days. If you'd prefer to target a\nspecific release, append the release tag to the end of the location."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title=".prototools"',title:'".prototools"'},'[plugins]\ngithub-tool = "github:moonrepo/example-repo@v1.2.3"\n')),(0,r.kt)("p",null,"This strategy is powered by the ",(0,r.kt)("a",{parentName:"p",href:"https://api.github.com/"},"GitHub API")," and is subject to rate\nlimiting. If running in a CI environment, we suggesting setting a ",(0,r.kt)("inlineCode",{parentName:"p"},"GITHUB_TOKEN")," environment\nvariable to authorize API requests with. If using GitHub Actions, it's as simple as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# In some job or step...\nenv:\n    GITHUB_TOKEN: '${{ secrets.GITHUB_TOKEN }}'\n")),(0,r.kt)("h2",{id:"creating-plugins"},"Creating plugins"),(0,r.kt)("p",null,"To ease the plugin development process, proto supports 2 types of plugins, a\n",(0,r.kt)("a",{parentName:"p",href:"./toml-plugin"},"TOML based plugin")," for basic use cases, and a ",(0,r.kt)("a",{parentName:"p",href:"./wasm-plugin"},"WASM based plugin")," for\nadvanced use cases."))}c.isMDXComponent=!0}}]);