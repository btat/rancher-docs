"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[28612],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var s=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,s,n=function(e,t){if(null==e)return{};var r,s,n={},o=Object.keys(e);for(s=0;s<o.length;s++)r=o[s],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)r=o[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=s.createContext({}),i=function(e){var t=s.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=i(e.components);return s.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=i(r),f=n,y=d["".concat(p,".").concat(f)]||d[f]||u[f]||o;return r?s.createElement(y,a(a({ref:t},c),{},{components:r})):s.createElement(y,a({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var i=2;i<o;i++)a[i]=r[i];return s.createElement.apply(null,a)}return s.createElement.apply(null,r)}d.displayName="MDXCreateElement"},21559:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var s=r(87462),n=(r(67294),r(3905));const o={title:"Deploying Applications across Clusters"},a=void 0,l={unversionedId:"pages-for-subheaders/deploy-apps-across-clusters",id:"version-2.6/pages-for-subheaders/deploy-apps-across-clusters",title:"Deploying Applications across Clusters",description:"Fleet",source:"@site/versioned_docs/version-2.6/pages-for-subheaders/deploy-apps-across-clusters.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/deploy-apps-across-clusters",permalink:"/v2.6/pages-for-subheaders/deploy-apps-across-clusters",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/pages-for-subheaders/deploy-apps-across-clusters.md",tags:[],version:"2.6",lastUpdatedAt:1680627802,formattedLastUpdatedAt:"Apr 4, 2023",frontMatter:{title:"Deploying Applications across Clusters"},sidebar:"tutorialSidebar",previous:{title:"Creating Apps",permalink:"/v2.6/how-to-guides/new-user-guides/helm-charts-in-rancher/create-apps"},next:{title:"Continuous Delivery with Fleet",permalink:"/v2.6/how-to-guides/new-user-guides/deploy-apps-across-clusters/fleet"}},p={},i=[{value:"Fleet",id:"fleet",level:3},{value:"Multi-cluster Apps",id:"multi-cluster-apps",level:3}],c={toc:i};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,s.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"fleet"},"Fleet"),(0,n.kt)("p",null,"Rancher v2.5 introduced Fleet, a new way to deploy applications across clusters."),(0,n.kt)("p",null,"Continuous Delivery with Fleet is GitOps at scale. For more information, refer to the ",(0,n.kt)("a",{parentName:"p",href:"/v2.6/how-to-guides/new-user-guides/deploy-apps-across-clusters/fleet"},"Fleet section.")),(0,n.kt)("h3",{id:"multi-cluster-apps"},"Multi-cluster Apps"),(0,n.kt)("p",null,"In Rancher before v2.5, the multi-cluster apps feature was used to deploy applications across clusters. The multi-cluster apps feature is deprecated, but still available in Rancher v2.5."),(0,n.kt)("p",null,"Refer to the documentation ",(0,n.kt)("a",{parentName:"p",href:"/v2.6/how-to-guides/new-user-guides/deploy-apps-across-clusters/multi-cluster-apps"},"here.")))}u.isMDXComponent=!0}}]);