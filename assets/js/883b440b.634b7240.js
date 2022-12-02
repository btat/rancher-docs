"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[67964],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),i=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=i(e.components);return n.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=i(t),f=o,b=d["".concat(u,".").concat(f)]||d[f]||p[f]||a;return t?n.createElement(b,s(s({ref:r},l),{},{components:t})):n.createElement(b,s({ref:r},l))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=d;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var i=2;i<a;i++)s[i]=t[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},47361:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var n=t(87462),o=(t(67294),t(3905));const a={title:"Restore"},s=void 0,c={unversionedId:"backups/restore/restore",id:"version-2.0-2.4/backups/restore/restore",title:"Restore",description:"If you lose the data on your Rancher Server, you can restore it if you have backups stored in a safe location.",source:"@site/versioned_docs/version-2.0-2.4/backups/restore/restore.md",sourceDirName:"backups/restore",slug:"/backups/restore/",permalink:"/v2.0-v2.4/backups/restore/",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/backups/restore/restore.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"Sep 23, 2022",frontMatter:{title:"Restore"}},u={},i=[],l={toc:i};function p(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you lose the data on your Rancher Server, you can restore it if you have backups stored in a safe location."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-docker-installed-rancher"},"Restoring backups for Rancher installed with Docker")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher-launched-kubernetes-clusters-from-backup"},"Restoring backups for Rancher installed on an RKE Kubernetes cluster")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-k3s-installed-rancher"},"Restoring backups for Rancher installed on a K3s Kubernetes cluster"))),(0,o.kt)("p",null,"If you are looking to restore your ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/launch-kubernetes-with-rancher"},"Rancher launched Kubernetes cluster"),", please refer to ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/restoring-etcd"},"this section"),"."))}p.isMDXComponent=!0}}]);