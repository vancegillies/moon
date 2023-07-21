"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1084],{35318:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>h});var n=o(27378);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(o),h=r,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||a;return o?n.createElement(m,i(i({ref:t},u),{},{components:o})):n.createElement(m,i({ref:t},u))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"},60716:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=o(25773),r=(o(27378),o(35318));const a={title:"FAQ"},i=void 0,l={unversionedId:"proto/faq",id:"proto/faq",title:"FAQ",description:"General",source:"@site/docs/proto/faq.mdx",sourceDirName:"proto",slug:"/proto/faq",permalink:"/docs/proto/faq",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/proto/faq.mdx",tags:[],version:"current",frontMatter:{title:"FAQ"},sidebar:"proto",previous:{title:"use",permalink:"/docs/proto/commands/use"}},s={},p=[{value:"General",id:"general",level:2},{value:"Where did the name &quot;proto&quot; come from?",id:"where-did-the-name-proto-come-from",level:3},{value:"Are you worried about confusion with other tools like protobufs?",id:"are-you-worried-about-confusion-with-other-tools-like-protobufs",level:3},{value:"Will you support more languages?",id:"will-you-support-more-languages",level:3},{value:"Will you support other kinds of tools?",id:"will-you-support-other-kinds-of-tools",level:3},{value:"Will you support &quot;build from source&quot;?",id:"will-you-support-build-from-source",level:3},{value:"Can I contribute a new language?",id:"can-i-contribute-a-new-language",level:3},{value:"How can I install a global binary for a language?",id:"how-can-i-install-a-global-binary-for-a-language",level:3},{value:"OS is unable to find an installed binary, how to resolve?",id:"os-is-unable-to-find-an-installed-binary-how-to-resolve",level:3}],u={toc:p};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"general"},"General"),(0,r.kt)("h3",{id:"where-did-the-name-proto-come-from"},'Where did the name "proto" come from?'),(0,r.kt)("p",null,"We wanted to keep with the space theme, and spent quite some time digging through Wikipedia and\nultimately landed on the page for ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Protostar"},"protostar"),' (this is why\nour logo\'s a star). We really liked the definition of protostar, as it basically means "the\nbeginning phase of a star". Even the the prefix proto means "first" or "earliest form of".'),(0,r.kt)("p",null,"This was great as that's the impression we had in mind for our tool. proto is the first piece\nrequired for setting up your developer environment. The toolchain is the first layer in the\nfoundation."),(0,r.kt)("p",null,"From an aesthetic standpoint, proto's typography works well with moon and moonbase, as most of the\nletters are circle shaped. Double points for proto having two o's like the other products!"),(0,r.kt)("h3",{id:"are-you-worried-about-confusion-with-other-tools-like-protobufs"},"Are you worried about confusion with other tools like protobufs?"),(0,r.kt)("p",null,"Nah."),(0,r.kt)("h3",{id:"will-you-support-more-languages"},"Will you support more languages?"),(0,r.kt)("p",null,"Yes! We'd love to support as many as possible. We're looking into supporting Python, Ruby, and PHP\nnext. Feel free to create a ",(0,r.kt)("a",{parentName:"p",href:"./plugins"},"plugin")," in the mean time."),(0,r.kt)("p",null,"If you'd like to help, join our Discord community!"),(0,r.kt)("h3",{id:"will-you-support-other-kinds-of-tools"},"Will you support other kinds of tools?"),(0,r.kt)("p",null,"No, we will only support languages and dependency managers. However, you can create a\n",(0,r.kt)("a",{parentName:"p",href:"./plugins"},"plugin")," to support other kinds of tools."),(0,r.kt)("h3",{id:"will-you-support-build-from-source"},'Will you support "build from source"?'),(0,r.kt)("p",null,"In the future we have plans to support building from source. For the time being, proto is built\naround pre-built archives for easier portability."),(0,r.kt)("h3",{id:"can-i-contribute-a-new-language"},"Can I contribute a new language?"),(0,r.kt)("p",null,"Yes, go for it! We have no official guide on how to do this, but the Rust code is rather straight\nforward. Feel free to copy another\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/moonrepo/proto/tree/master/crates"},"language crate"),"."),(0,r.kt)("h3",{id:"how-can-i-install-a-global-binary-for-a-language"},"How can I install a global binary for a language?"),(0,r.kt)("p",null,"You can install a global with the ",(0,r.kt)("a",{parentName:"p",href:"./commands/install-global"},(0,r.kt)("inlineCode",{parentName:"a"},"proto install-global"))," command. Most\nlanguages install a global to a shared location regardless of the language's version (Deno is\n",(0,r.kt)("inlineCode",{parentName:"p"},"~/.deno/bin"),", Rust is ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.cargo/bin"),", etc), so globals can also be installed ",(0,r.kt)("em",{parentName:"p"},"outside")," of proto\nusing language specific commands."),(0,r.kt)("p",null,"The exception to this is Node.js (and npm, pnpm, yarn). Each of these tools install global packages\n",(0,r.kt)("em",{parentName:"p"},"differently"),", and some are tied to the parent tools version. So if you install a new language\nversion, you lose your global packages. We suggest using ",(0,r.kt)("inlineCode",{parentName:"p"},"proto install-global")," for all Node.js\npackages, which installs everything to a shared location, ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.proto/tools/node/globals/bin"),". You'll\nalso need to manually add these global directories to your ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH"),"."),(0,r.kt)("p",null,"However, if you'd prefer to use the native non-proto workflow, you can disable the globals intercept\nusing the ",(0,r.kt)("a",{parentName:"p",href:"./config#settings"},(0,r.kt)("inlineCode",{parentName:"a"},"node-intercept-globals")," setting"),"."),(0,r.kt)("h3",{id:"os-is-unable-to-find-an-installed-binary-how-to-resolve"},"OS is unable to find an installed binary, how to resolve?"),(0,r.kt)("p",null,"To start, ensure that proto's binaries directory (",(0,r.kt)("inlineCode",{parentName:"p"},"~/.proto/bin"),") is listed first on ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH"),", and\ntakes precedence over other binaries of the same name that may collide."),(0,r.kt)("p",null,"Secondly, proto is powered entirely through shims, which means on Windows, we do not provide ",(0,r.kt)("inlineCode",{parentName:"p"},".exe"),"\nbinaries, and instead use ",(0,r.kt)("inlineCode",{parentName:"p"},".cmd"),". If you're attempting to run a script that uses a hard-coded binary\nname like ",(0,r.kt)("inlineCode",{parentName:"p"},"node.exe"),", this won't work in proto. You'll need to remove the ",(0,r.kt)("inlineCode",{parentName:"p"},".exe")," and simply run\n",(0,r.kt)("inlineCode",{parentName:"p"},"node")," instead. Windows will use the ",(0,r.kt)("inlineCode",{parentName:"p"},"PATHEXT")," environment variable to find the appropriate\nextension, which includes ",(0,r.kt)("inlineCode",{parentName:"p"},".cmd")," by default."))}d.isMDXComponent=!0}}]);