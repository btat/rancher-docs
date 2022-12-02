"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[90490],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),l=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),m=a,h=p["".concat(o,".").concat(m)]||p[m]||d[m]||i;return t?r.createElement(h,c(c({ref:n},u),{},{components:t})):r.createElement(h,c({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,c=new Array(i);c[0]=p;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var l=2;l<i;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},20433:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=t(87462),a=(t(67294),t(3905));const i={title:"Uninstall Rancher CIS Benchmark"},c=void 0,s={unversionedId:"how-to-guides/advanced-user-guides/cis-scan-guides/uninstall-rancher-cis-benchmark",id:"version-2.6/how-to-guides/advanced-user-guides/cis-scan-guides/uninstall-rancher-cis-benchmark",title:"Uninstall Rancher CIS Benchmark",description:"1. From the Cluster Dashboard, go to the left navigation bar and click Apps & Marketplace > Installed Apps.",source:"@site/versioned_docs/version-2.6/how-to-guides/advanced-user-guides/cis-scan-guides/uninstall-rancher-cis-benchmark.md",sourceDirName:"how-to-guides/advanced-user-guides/cis-scan-guides",slug:"/how-to-guides/advanced-user-guides/cis-scan-guides/uninstall-rancher-cis-benchmark",permalink:"/v2.6/how-to-guides/advanced-user-guides/cis-scan-guides/uninstall-rancher-cis-benchmark",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/how-to-guides/advanced-user-guides/cis-scan-guides/uninstall-rancher-cis-benchmark.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"Nov 14, 2022",frontMatter:{title:"Uninstall Rancher CIS Benchmark"},sidebar:"tutorialSidebar",previous:{title:"Install Rancher CIS Benchmark",permalink:"/v2.6/how-to-guides/advanced-user-guides/cis-scan-guides/install-rancher-cis-benchmark"},next:{title:"Run a Scan",permalink:"/v2.6/how-to-guides/advanced-user-guides/cis-scan-guides/run-a-scan"}},o={},l=[],u={toc:l};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"From the ",(0,a.kt)("strong",{parentName:"li"},"Cluster Dashboard,")," go to the left navigation bar and click ",(0,a.kt)("strong",{parentName:"li"},"Apps & Marketplace > Installed Apps"),"."),(0,a.kt)("li",{parentName:"ol"},"Go to the ",(0,a.kt)("inlineCode",{parentName:"li"},"cis-operator-system")," namespace and check the boxes next to ",(0,a.kt)("inlineCode",{parentName:"li"},"rancher-cis-benchmark-crd")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"rancher-cis-benchmark"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Delete")," and confirm ",(0,a.kt)("strong",{parentName:"li"},"Delete"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," The ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher-cis-benchmark")," application is uninstalled."))}d.isMDXComponent=!0}}]);