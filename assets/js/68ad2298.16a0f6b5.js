"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[21705],{3905:function(e,r,t){t.d(r,{Zo:function(){return d},kt:function(){return p}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=n.createContext({}),u=function(e){var r=n.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=u(e.components);return n.createElement(o.Provider,{value:r},e.children)},h={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},l=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=u(t),p=a,f=l["".concat(o,".").concat(p)]||l[p]||h[p]||s;return t?n.createElement(f,i(i({ref:r},d),{},{components:t})):n.createElement(f,i({ref:r},d))}));function p(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=l;var c={};for(var o in r)hasOwnProperty.call(r,o)&&(c[o]=r[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<s;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}l.displayName="MDXCreateElement"},73601:function(e,r,t){t.r(r),t.d(r,{assets:function(){return d},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return h}});var n=t(87462),a=t(63366),s=(t(67294),t(3905)),i=["components"],c={title:"Best Practices for the Rancher Server",shortTitle:"Rancher Server",weight:1},o=void 0,u={unversionedId:"pages-for-subheaders/rancher-server",id:"pages-for-subheaders/rancher-server",title:"Best Practices for the Rancher Server",description:"This guide contains our recommendations for running the Rancher server, and is intended to be used in situations in which Rancher manages downstream Kubernetes clusters.",source:"@site/docs/pages-for-subheaders/rancher-server.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/rancher-server",permalink:"/rancher-docs/pages-for-subheaders/rancher-server",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/pages-for-subheaders/rancher-server.md",tags:[],version:"current",lastUpdatedAt:1660752881,formattedLastUpdatedAt:"8/17/2022",frontMatter:{title:"Best Practices for the Rancher Server",shortTitle:"Rancher Server",weight:1},sidebar:"tutorialSidebar",previous:{title:"Best Practices Guide",permalink:"/rancher-docs/pages-for-subheaders/best-practices"},next:{title:"Installing Rancher in a vSphere Environment",permalink:"/rancher-docs/reference-guides/best-practices/rancher-server/on-premises-rancher-in-vsphere"}},d={},h=[{value:"Recommended Architecture and Infrastructure",id:"recommended-architecture-and-infrastructure",level:3},{value:"Deployment Strategies",id:"deployment-strategies",level:3},{value:"Installing Rancher in a vSphere Environment",id:"installing-rancher-in-a-vsphere-environment",level:3}],l={toc:h};function p(e){var r=e.components,t=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This guide contains our recommendations for running the Rancher server, and is intended to be used in situations in which Rancher manages downstream Kubernetes clusters."),(0,s.kt)("h3",{id:"recommended-architecture-and-infrastructure"},"Recommended Architecture and Infrastructure"),(0,s.kt)("p",null,"Refer to this ",(0,s.kt)("a",{parentName:"p",href:"/rancher-docs/reference-guides/best-practices/rancher-server/tips-for-running-rancher"},"guide")," for our general advice for setting up the Rancher server on a high-availability Kubernetes cluster."),(0,s.kt)("h3",{id:"deployment-strategies"},"Deployment Strategies"),(0,s.kt)("p",null,"This ",(0,s.kt)("a",{parentName:"p",href:"/rancher-docs/reference-guides/best-practices/rancher-server/rancher-deployment-strategy"},"guide")," is designed to help you choose whether a regional deployment strategy or a hub-and-spoke deployment strategy is better for a Rancher server that manages downstream Kubernetes clusters."),(0,s.kt)("h3",{id:"installing-rancher-in-a-vsphere-environment"},"Installing Rancher in a vSphere Environment"),(0,s.kt)("p",null,"This ",(0,s.kt)("a",{parentName:"p",href:"/rancher-docs/reference-guides/best-practices/rancher-server/on-premises-rancher-in-vsphere"},"guide")," outlines a reference architecture for installing Rancher in a vSphere environment, in addition to standard vSphere best practices as documented by VMware."))}p.isMDXComponent=!0}}]);