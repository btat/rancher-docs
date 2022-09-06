"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[57559],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return f}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},l=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),l=u(t),f=a,h=l["".concat(s,".").concat(f)]||l[f]||d[f]||i;return t?n.createElement(h,c(c({ref:r},p),{},{components:t})):n.createElement(h,c({ref:r},p))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,c=new Array(i);c[0]=l;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var u=2;u<i;u++)c[u]=t[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}l.displayName="MDXCreateElement"},3679:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return d}});var n=t(87462),a=t(63366),i=(t(67294),t(3905)),c=["components"],o={title:"Deprecated Features in Rancher v2.5",weight:100,aliases:["/rancher/v2.x/en/faq/deprecated-features-25x/"]},s=void 0,u={unversionedId:"faq/deprecated-features-in-v2.5",id:"version-2.5/faq/deprecated-features-in-v2.5",title:"Deprecated Features in Rancher v2.5",description:"What is Rancher's Deprecation policy?",source:"@site/versioned_docs/version-2.5/faq/deprecated-features-in-v2.5.md",sourceDirName:"faq",slug:"/faq/deprecated-features-in-v2.5",permalink:"/rancher-docs/v2.5/faq/deprecated-features-in-v2.5",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/faq/deprecated-features-in-v2.5.md",tags:[],version:"2.5",lastUpdatedAt:1660949308,formattedLastUpdatedAt:"8/19/2022",frontMatter:{title:"Deprecated Features in Rancher v2.5",weight:100,aliases:["/rancher/v2.x/en/faq/deprecated-features-25x/"]},sidebar:"tutorialSidebar",previous:{title:"FAQ",permalink:"/rancher-docs/v2.5/faq"},next:{title:"Installing and Configuring kubectl",permalink:"/rancher-docs/v2.5/faq/install-and-configure-kubectl"}},p={},d=[{value:"What is Rancher&#39;s Deprecation policy?",id:"what-is-ranchers-deprecation-policy",level:3},{value:"Where can I find out which features have been deprecated in Rancher 2.5?",id:"where-can-i-find-out-which-features-have-been-deprecated-in-rancher-25",level:3},{value:"What can I expect when a feature is marked for deprecation?",id:"what-can-i-expect-when-a-feature-is-marked-for-deprecation",level:3}],l={toc:d};function f(e){var r=e.components,t=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"what-is-ranchers-deprecation-policy"},"What is Rancher's Deprecation policy?"),(0,i.kt)("p",null,"Starting in Rancher 2.5 we have published our official deprecation policy in the support ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/support-maintenance-terms"},"terms of service"),"."),(0,i.kt)("h3",{id:"where-can-i-find-out-which-features-have-been-deprecated-in-rancher-25"},"Where can I find out which features have been deprecated in Rancher 2.5?"),(0,i.kt)("p",null,"Rancher will publish deprecated features as part of the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/releases/tag/v2.5.0"},"release notes")," for Rancher found on GitHub."),(0,i.kt)("h3",{id:"what-can-i-expect-when-a-feature-is-marked-for-deprecation"},"What can I expect when a feature is marked for deprecation?"),(0,i.kt)("p",null,"In the release where functionality is marked as Deprecated it will still be available and supported allowing upgrades to follow the usual procedure. Once upgraded, users/admins should start planning to move away from the deprecated functionality before upgrading to the release it marked as removed. The recommendation for new deployments is to not use the deprecated feature."))}f.isMDXComponent=!0}}]);