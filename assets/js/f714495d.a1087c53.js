"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[60026],{74162:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=s(24246),t=s(71670);const o={title:"TOML plugin",sidebar_label:"TOML",toc_max_heading_level:5},r=void 0,l={id:"proto/toml-plugin",title:"TOML plugin",description:"The TOML plugin is by design, very simple. It's a TOML file that describes a schema for the tool,",source:"@site/docs/proto/toml-plugin.mdx",sourceDirName:"proto",slug:"/proto/toml-plugin",permalink:"/docs/proto/toml-plugin",draft:!1,unlisted:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/proto/toml-plugin.mdx",tags:[],version:"current",frontMatter:{title:"TOML plugin",sidebar_label:"TOML",toc_max_heading_level:5},sidebar:"proto",previous:{title:"Plugins",permalink:"/docs/proto/plugins"},next:{title:"WASM",permalink:"/docs/proto/wasm-plugin"}},a={},c=[{value:"Create a plugin",id:"create-a-plugin",level:2},{value:"Platform variations",id:"platform-variations",level:3},{value:"Downloading and installing",id:"downloading-and-installing",level:3},{value:"Primary executable",id:"primary-executable",level:4},{value:"Secondary executables",id:"secondary-executables",level:4},{value:"Global packages",id:"global-packages",level:4},{value:"Resolving versions",id:"resolving-versions",level:3},{value:"Git tags",id:"git-tags",level:4},{value:"JSON manifest",id:"json-manifest",level:4},{value:"Version patterns",id:"version-patterns",level:4},{value:"Detecting versions",id:"detecting-versions",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"The TOML plugin is by design, very simple. It's a TOML file that describes a schema for the tool,\nhow it should be installed, and how it should be invoked. Since this is a static configuration file,\nit does not support any logic or complex behavior, and is merely for simple and common use cases,\nlike CLIs."}),"\n",(0,i.jsx)(n.h2,{id:"create-a-plugin",children:"Create a plugin"}),"\n",(0,i.jsxs)(n.p,{children:["Let's start by creating a new plugin, and defining the ",(0,i.jsx)(n.code,{children:"name"})," and ",(0,i.jsx)(n.code,{children:"type"})," fields. The type can either\nbe ",(0,i.jsx)(n.code,{children:"language"}),", ",(0,i.jsx)(n.code,{children:"dependency-manager"}),", ",(0,i.jsx)(n.code,{children:"package-manager"}),", or ",(0,i.jsx)(n.code,{children:"cli"}),". For this example, we'll create a\nplugin for our fake product called Protostar, a CLI tool."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",metastring:'title="protostar.toml"',children:'name = "Protostar"\ntype = "cli"\n'})}),"\n",(0,i.jsx)(n.h3,{id:"platform-variations",children:"Platform variations"}),"\n",(0,i.jsxs)(n.p,{children:["Native tools are often platform specific, and proto supports this by allowing you to define\nvariations based on operating system using the ",(0,i.jsx)(n.code,{children:"[platform]"})," section. For non-native tools, this\nsection can typically be skipped."]}),"\n",(0,i.jsxs)(n.p,{children:["This section requires a mapping of Rust\n",(0,i.jsxs)(n.a,{href:"https://doc.rust-lang.org/std/env/consts/constant.OS.html",children:[(0,i.jsx)(n.code,{children:"OS"})," strings"]})," to platform settings. The\nfollowing settings are available:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"archs"})," - A list of architectures supported for this platform. If not provided, supports all\narchs."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"archive-prefix"})," - If the tool is distributed as an archive (zip, tar, etc), this is the name of\nthe direct folder within the archive that contains the tool, and will be removed when unpacking\nthe archive. If there is no prefix folder within the archive, this setting can be omitted."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"bin-path"})," - The path to the executable binary within the archive (without the prefix). If the\ntool is distributed as a single binary, this setting can be typically omitted."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"checksum-file"})," - Name of the checksum file to verify the downloaded file with. If the tool does\nnot support checksum verification, this setting can be omitted."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"download-file"})," (required) - Name of the file to download.\n",(0,i.jsx)(n.a,{href:"#downloading-and-installing",children:"Learn more about downloading"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",metastring:'title="protostar.toml"',children:'# ...\n\n[platform.linux]\narchive-prefix = "protostar-linux"\nbin-path = "bins/protostar"\nchecksum-file = "protostar-{arch}-unknown-linux-{libc}.sha256"\ndownload-file = "protostar-{arch}-unknown-linux-{libc}.tar.gz"\n\n[platform.macos]\narchive-prefix = "protostar-macos"\nbin-path = "bins/protostar"\nchecksum-file = "protostar-{arch}-apple-darwin.sha256"\ndownload-file = "protostar-{arch}-apple-darwin.tar.xz"\n\n[platform.windows]\narchive-prefix = "protostar-windows"\nbin-path = "bins/protostar.exe"\nchecksum-file = "protostar-{arch}-pc-windows-msvc.sha256"\ndownload-file = "protostar-{arch}-pc-windows-msvc.zip"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["You may have noticed tokens above, like ",(0,i.jsx)(n.code,{children:"{arch}"}),". These are special tokens that are replaced with a\ndynamic value at runtime, based on the current host machine executing the code. The following tokens\nare available:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"{version}"})," - The currently resolved version, as a fully-qualifed semantic version:\n",(0,i.jsx)(n.code,{children:"major.minor.patch"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"{arch}"})," - The architecture of the host machine, like ",(0,i.jsx)(n.code,{children:"x86_64"}),". These values map to Rust's\n",(0,i.jsxs)(n.a,{href:"https://doc.rust-lang.org/std/env/consts/constant.ARCH.html",children:[(0,i.jsx)(n.code,{children:"ARCH"})," constant"]}),", but can be\ncustomized with ",(0,i.jsx)(n.a,{href:"#downloading-and-installing",children:(0,i.jsx)(n.code,{children:"install.arch"})}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"{os}"})," - The operating system of the host machine, like ",(0,i.jsx)(n.code,{children:"windows"}),". These values map to Rust's\n",(0,i.jsxs)(n.a,{href:"https://doc.rust-lang.org/std/env/consts/constant.OS.html",children:[(0,i.jsx)(n.code,{children:"OS"})," constant"]}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"{libc}"})," - For Linux machines, this is the current libc implementation, either ",(0,i.jsx)(n.code,{children:"gnu"})," or ",(0,i.jsx)(n.code,{children:"musl"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"downloading-and-installing",children:"Downloading and installing"}),"\n",(0,i.jsxs)(n.p,{children:["A TOML plugin ",(0,i.jsx)(n.em,{children:"only"})," supports downloading pre-built tools, typically as an archive, and does ",(0,i.jsx)(n.em,{children:"not"}),"\nsupport building from source. The ",(0,i.jsx)(n.code,{children:"[install]"})," section can be used to configure how the tool should\nbe downloaded and installed into the toolchain. The following settings are available:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"arch"})," - A mapping of Rust\n",(0,i.jsxs)(n.a,{href:"https://doc.rust-lang.org/std/env/consts/constant.ARCH.html",children:[(0,i.jsx)(n.code,{children:"ARCH"})," strings"]})," to custom values for\nthe ",(0,i.jsx)(n.code,{children:"{arch}"})," token. This is useful if the tool has different terminology."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"libc"})," - A mapping of custom values for the ",(0,i.jsx)(n.code,{children:"{libc}"})," token."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"checksum-url"})," - A secure URL to download the checksum file for verification. If the tool does not\nsupport checksum verification, this setting can be omitted."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"checksum-url-canary"})," - A URL for canary releases."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"checksum-public-key"})," - Public key used for verifying checksums. Only used for ",(0,i.jsx)(n.code,{children:".minisig"})," files."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"download-url"})," (required) - A secure URL to download the tool/archive."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"download-url-canary"})," - A URL for canary releases."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"primary"})," - Configures the primary executable."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"secondary"})," - Configures secondary executables."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The URL settings support ",(0,i.jsx)(n.code,{children:"{checksum_file}"})," and ",(0,i.jsx)(n.code,{children:"{download_file}"})," tokens, which will be replaced with\nthe values from the ",(0,i.jsx)(n.code,{children:"[platform]"})," section."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",metastring:'title="protostar.toml"',children:'# ...\n\n[install]\nchecksum-url = "https://github.com/moonrepo/protostar/releases/download/v{version}/{checksum_file}"\ndownload-url = "https://github.com/moonrepo/protostar/releases/download/v{version}/{download_file}"\n\n[install.arch]\naarch64 = "arm64"\nx86_64 = "x64"\n'})}),"\n",(0,i.jsx)(n.h4,{id:"primary-executable",children:"Primary executable"}),"\n",(0,i.jsxs)(n.p,{children:["The primary executable can be customized with the ",(0,i.jsx)(n.code,{children:"[install.primary]"})," section, which is optional. If\nthis section is omitted, the primary executable will be named after the tool itself."]}),"\n",(0,i.jsx)(n.p,{children:"This setting supports the following options:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"exe-path"})," - The file to execute, relative from the tool directory. On Windows, the ",(0,i.jsx)(n.code,{children:".exe"}),"\nextension will automatically be appended. If you need more control over platform variance, use\n",(0,i.jsx)(n.code,{children:"[platform.*.bin-path]"})," instead."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"no-bin"})," - Do not symlink a binary in ",(0,i.jsx)(n.code,{children:"~/.proto/bin"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"no-shim"}),"- Do not generate a shim in ",(0,i.jsx)(n.code,{children:"~/.proto/shims"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"parent-exe-name"})," - Name of a parent executable required to execute the executable path. For\nexample, ",(0,i.jsx)(n.code,{children:"node"})," is required for ",(0,i.jsx)(n.code,{children:".js"})," files."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"shim-before-args"})," - Custom args to prepend to user-provided args within the generated shim."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"shim-after-args"})," - Custom args to append to user-provided args within the generated shim."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"shim-env-vars"})," - Custom environment variables to set when executing the shim."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",metastring:'title="protostar.toml"',children:'# ...\n\n[install.primary]\nexe-path = "bins/protostar"\nshim-before-args = ["--verbose"]\n'})}),"\n",(0,i.jsx)(n.h4,{id:"secondary-executables",children:"Secondary executables"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"[install.secondary]"})," section can be used to configure additional executables (bins or shims)\nalongside the primary executable. This setting requires a map, where the key is the executable file\nname, and the value is an object of options (the same as above)."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",metastring:'title="protostar.toml"',children:'# ...\n\n[install.secondary.protostar-debug]\nexe-path = "bins/protostar-debug"\nno-shim = true\n'})}),"\n",(0,i.jsx)(n.h4,{id:"global-packages",children:"Global packages"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"[packages]"})," sections can be configured that provides information about where global packages\nare stored."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"globals-lookup-dirs"})," - A list of directories where global binaries are stored. This setting\nsupports interpolating environment variables via the syntax ",(0,i.jsx)(n.code,{children:"$ENV_VAR"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"globals-prefix"})," - A string that all package names are prefixed with. For example, Cargo/Rust\nbinaries are prefixed wih ",(0,i.jsx)(n.code,{children:"cargo-"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",metastring:'title="protostar.toml"',children:'# ...\n\n[packages]\nglobals-lookup-dirs = ["$PROTOSTAR_HOME/bin", "$HOME/.protostar/bin"]\n'})}),"\n",(0,i.jsx)(n.h3,{id:"resolving-versions",children:"Resolving versions"}),"\n",(0,i.jsxs)(n.p,{children:["Now that the tool can be downloaded and installed, we must configure how to resolve available\nversions. Resolving is configured through the ",(0,i.jsx)(n.code,{children:"[resolve]"})," section, which supports 2 patterns to\nresolve with: Git tags or a JSON manifest."]}),"\n",(0,i.jsx)(n.h4,{id:"git-tags",children:"Git tags"}),"\n",(0,i.jsx)(n.p,{children:"To resolve a list of available versions using Git tags, the following settings are available:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"git-url"})," (required) - The remote URL to fetch tags from."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",metastring:'title="protostar.toml"',children:'# ...\n\n[resolve]\ngit-url = "https://github.com/moonrepo/protostar"\n'})}),"\n",(0,i.jsx)(n.h4,{id:"json-manifest",children:"JSON manifest"}),"\n",(0,i.jsx)(n.p,{children:"To resolve a list of available versions using a JSON manifest, the following settings are available:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"manifest-url"})," (required) - A URL that returns a JSON response of all versions. This response\n",(0,i.jsx)(n.em,{children:"must be"})," an array of strings, or an array of objects."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"manifest-version-key"})," - If the response is an array of objects, this is the key to extract the\nversion from. If the response is an array of strings, this setting can be omitted. Defaults to\n",(0,i.jsx)(n.code,{children:"version"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",metastring:'title="protostar.toml"',children:'# ...\n\n[resolve]\nmanifest-url = "https://someregistry.com/protostar/versions.json"\nmanifest-version-key = "latest_version"\n'})}),"\n",(0,i.jsx)(n.h4,{id:"version-patterns",children:"Version patterns"}),"\n",(0,i.jsxs)(n.p,{children:["When a version is found, either from a git tag or manifest key, we attempt to parse it into a valid\nsemantic version using a Rust based regex pattern and the ",(0,i.jsx)(n.code,{children:"version-pattern"})," setting."]}),"\n",(0,i.jsxs)(n.p,{children:["This pattern uses named regex capture groups (",(0,i.jsx)(n.code,{children:"(?<name>...)"}),") to build the semantic version, and to\nsupport found versions that are not fully-qualified (they may be missing patch or minor versions).\nThe following groups are supported:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"major"})," - The major version number. Defaults to ",(0,i.jsx)(n.code,{children:"0"})," if missing."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"minor"})," - The minor version number. Defaults to ",(0,i.jsx)(n.code,{children:"0"})," if missing."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"patch"})," - The patch version number. Defaults to ",(0,i.jsx)(n.code,{children:"0"})," if missing."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"pre"}),' - The pre-release identifier, like "rc.0" or "alpha.0". Supports an optional leading ',(0,i.jsx)(n.code,{children:"-"}),".\nDoes nothing if missing."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"build"})," - The build metadata, like a timestamp. Supports an optional leading ",(0,i.jsx)(n.code,{children:"+"}),". Does nothing if\nmissing."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",metastring:'title="protostar.toml"',children:'# ...\n\n[resolve]\nversion-pattern = "^@protostar/cli@((?<major>\\\\d+)\\\\.(?<minor>\\\\d+)\\\\.(?<patch>\\\\d+))"\n'})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["If no named capture groups are found, the match at index ",(0,i.jsx)(n.code,{children:"1"})," is used as the version."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"detecting-versions",children:"Detecting versions"}),"\n",(0,i.jsxs)(n.p,{children:["And lastly, we can configure how to ",(0,i.jsx)(n.a,{href:"./detection",children:"detect a version"})," contextually at runtime, using\nthe ",(0,i.jsx)(n.code,{children:"[detect]"})," setting. At this time, we only support 1 setting:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"version-files"})," - A list of version files to extract from. The contents of these files can ",(0,i.jsx)(n.em,{children:"only"}),"\nbe the version string itself."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",metastring:'title="protostar.toml"',children:'# ...\n\n[detect]\nversion-files = [".protostar-version", ".protostarrc"]\n'})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},71670:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>r});var i=s(27378);const t={},o=i.createContext(t);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);