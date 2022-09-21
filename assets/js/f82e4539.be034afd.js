"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[51869],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),g=c(n),d=o,m=g["".concat(u,".").concat(d)]||g[d]||p[d]||l;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=g;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},72998:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var r=n(87462),o=n(63366),l=(n(67294),n(3905)),a=["components"],i={title:"Logging",weight:110},u=void 0,c={unversionedId:"troubleshooting/other-troubleshooting-tips/logging",id:"version-2.0-2.4/troubleshooting/other-troubleshooting-tips/logging",title:"Logging",description:"The following log levels are used in Rancher:",source:"@site/versioned_docs/version-2.0-2.4/troubleshooting/other-troubleshooting-tips/logging.md",sourceDirName:"troubleshooting/other-troubleshooting-tips",slug:"/troubleshooting/other-troubleshooting-tips/logging",permalink:"/v2.0-v2.4/troubleshooting/other-troubleshooting-tips/logging",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/troubleshooting/other-troubleshooting-tips/logging.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663710212,formattedLastUpdatedAt:"9/20/2022",frontMatter:{title:"Logging",weight:110},sidebar:"tutorialSidebar",previous:{title:"Imported clusters",permalink:"/v2.0-v2.4/troubleshooting/other-troubleshooting-tips/registered-clusters"},next:{title:"Contributing to Rancher",permalink:"/v2.0-v2.4/contribute-to-rancher"}},s={},p=[{value:"How to configure a log level",id:"how-to-configure-a-log-level",level:3}],g={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The following log levels are used in Rancher:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"info")),(0,l.kt)("td",{parentName:"tr",align:null},"Logs informational messages. This is the default log level.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"debug")),(0,l.kt)("td",{parentName:"tr",align:null},"Logs more detailed messages that can be used to debug.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"trace")),(0,l.kt)("td",{parentName:"tr",align:null},"Logs very detailed messages on internal functions. This is very verbose and can contain sensitive information.")))),(0,l.kt)("h3",{id:"how-to-configure-a-log-level"},"How to configure a log level"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Kubernetes install"),(0,l.kt)("li",{parentName:"ul"},"Configure debug log level")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ KUBECONFIG=./kube_config_rancher-cluster.yml\n$ kubectl -n cattle-system get pods -l app=rancher --no-headers -o custom-columns=name:.metadata.name | while read rancherpod; do kubectl -n cattle-system exec $rancherpod -c rancher -- loglevel --set debug; done\nOK\nOK\nOK\n$ kubectl -n cattle-system logs -l app=rancher -c rancher\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Configure info log level")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ KUBECONFIG=./kube_config_rancher-cluster.yml\n$ kubectl -n cattle-system get pods -l app=rancher --no-headers -o custom-columns=name:.metadata.name | while read rancherpod; do kubectl -n cattle-system exec $rancherpod -c rancher -- loglevel --set info; done\nOK\nOK\nOK\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Docker Install"),(0,l.kt)("li",{parentName:"ul"},"Configure debug log level")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ docker exec -ti <container_id> loglevel --set debug\nOK\n$ docker logs -f <container_id>\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Configure info log level")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ docker exec -ti <container_id> loglevel --set info\nOK\n")))}d.isMDXComponent=!0}}]);