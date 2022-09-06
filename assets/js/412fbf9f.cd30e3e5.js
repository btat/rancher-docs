"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[89938],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return p}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(t),p=a,m=f["".concat(s,".").concat(p)]||f[p]||d[p]||o;return t?r.createElement(m,i(i({ref:n},u),{},{components:t})):r.createElement(m,i({ref:n},u))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9818:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return d}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],c={slug:"/",weight:1,title:"Rancher 2.6",shortTitle:"Rancher 2.6  (Latest)",description:"Rancher adds significant value on top of Kubernetes: managing hundreds of clusters from one interface, centralizing RBAC, enabling monitoring and alerting. Read more.",metaTitle:"Rancher 2.6 Docs: What is New?",metaDescription:"Rancher 2 adds significant value on top of Kubernetes: managing hundreds of clusters from one interface, centralizing RBAC, enabling monitoring and alerting. Read more.",insertOneSix:!1,ctaBanner:0,aliases:["/rancher/v2.x/en/"]},s=void 0,l={unversionedId:"rancher-manager",id:"rancher-manager",title:"Rancher 2.6",description:"Rancher adds significant value on top of Kubernetes: managing hundreds of clusters from one interface, centralizing RBAC, enabling monitoring and alerting. Read more.",source:"@site/docs/rancher-manager.md",sourceDirName:".",slug:"/",permalink:"/rancher-docs/",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/rancher-manager.md",tags:[],version:"current",lastUpdatedAt:1660752881,formattedLastUpdatedAt:"8/17/2022",frontMatter:{slug:"/",weight:1,title:"Rancher 2.6",shortTitle:"Rancher 2.6  (Latest)",description:"Rancher adds significant value on top of Kubernetes: managing hundreds of clusters from one interface, centralizing RBAC, enabling monitoring and alerting. Read more.",metaTitle:"Rancher 2.6 Docs: What is New?",metaDescription:"Rancher 2 adds significant value on top of Kubernetes: managing hundreds of clusters from one interface, centralizing RBAC, enabling monitoring and alerting. Read more.",insertOneSix:!1,ctaBanner:0,aliases:["/rancher/v2.x/en/"]},sidebar:"tutorialSidebar",next:{title:"Getting Started",permalink:"/rancher-docs/getting-started"}},u={},d=[],f={toc:d};function p(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Rancher was originally built to work with multiple orchestrators, and it included its own orchestrator called Cattle. With the rise of Kubernetes in the marketplace, Rancher 2 exclusively deploys and manages Kubernetes clusters running anywhere, on any provider."),(0,o.kt)("p",null,"Rancher can provision Kubernetes from a hosted provider, provision compute nodes and then install Kubernetes onto them, or import existing Kubernetes clusters running anywhere."),(0,o.kt)("p",null,"One Rancher server installation can manage thousands of Kubernetes clusters and thousands of nodes from the same user interface."),(0,o.kt)("p",null,"Rancher adds significant value on top of Kubernetes, first by centralizing authentication and role-based access control (RBAC) for all of the clusters, giving global admins the ability to control cluster access from one location."),(0,o.kt)("p",null,"It then enables detailed monitoring and alerting for clusters and their resources, ships logs to external providers, and integrates directly with Helm via the Application Catalog. If you have an external CI/CD system, you can plug it into Rancher, but if you don't, Rancher even includes Fleet to help you automatically deploy and upgrade workloads."),(0,o.kt)("p",null,"Rancher is a ",(0,o.kt)("em",{parentName:"p"},"complete")," container management platform for Kubernetes, giving you the tools to successfully run Kubernetes anywhere."))}p.isMDXComponent=!0}}]);