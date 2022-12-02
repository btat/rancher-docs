"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[33550],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),h=n,g=u["".concat(l,".").concat(h)]||u[h]||d[h]||i;return a?r.createElement(g,o(o({ref:t},p),{},{components:a})):r.createElement(g,o({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},88485:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const i={title:"Setting up Local System Charts for Air Gapped Installations"},o=void 0,s={unversionedId:"getting-started/installation-and-upgrade/resources/local-system-charts",id:"version-2.5/getting-started/installation-and-upgrade/resources/local-system-charts",title:"Setting up Local System Charts for Air Gapped Installations",description:"The System Charts repository contains all the catalog items required for features such as monitoring, logging, alerting and global DNS.",source:"@site/versioned_docs/version-2.5/getting-started/installation-and-upgrade/resources/local-system-charts.md",sourceDirName:"getting-started/installation-and-upgrade/resources",slug:"/getting-started/installation-and-upgrade/resources/local-system-charts",permalink:"/zh/v2.5/getting-started/installation-and-upgrade/resources/local-system-charts",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/getting-started/installation-and-upgrade/resources/local-system-charts.md",tags:[],version:"2.5",lastUpdatedAt:1667002159,formattedLastUpdatedAt:"2022\u5e7410\u670829\u65e5",frontMatter:{title:"Setting up Local System Charts for Air Gapped Installations"},sidebar:"tutorialSidebar",previous:{title:"Updating the Rancher Certificate",permalink:"/zh/v2.5/getting-started/installation-and-upgrade/resources/update-rancher-certificate"},next:{title:"Upgrading and Rolling Back Kubernetes",permalink:"/zh/v2.5/getting-started/installation-and-upgrade/upgrade-and-roll-back-kubernetes"}},l={},c=[{value:"Using Local System Charts",id:"using-local-system-charts",level:2}],p={toc:c};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rancher/system-charts"},"System Charts")," repository contains all the catalog items required for features such as monitoring, logging, alerting and global DNS."),(0,n.kt)("p",null,"In an air gapped installation of Rancher, you will need to configure Rancher to use a local copy of the system charts. This section describes how to use local system charts using a CLI flag."),(0,n.kt)("h2",{id:"using-local-system-charts"},"Using Local System Charts"),(0,n.kt)("p",null,"A local copy of ",(0,n.kt)("inlineCode",{parentName:"p"},"system-charts")," has been packaged into the ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher/rancher")," container. To be able to use these features in an air gap install, you will need to run the Rancher install command with an extra environment variable, ",(0,n.kt)("inlineCode",{parentName:"p"},"CATTLE_SYSTEM_CATALOG=bundled"),", which tells Rancher to use the local copy of the charts instead of attempting to fetch them from GitHub."),(0,n.kt)("p",null,"Example commands for a Rancher installation with a bundled ",(0,n.kt)("inlineCode",{parentName:"p"},"system-charts")," are included in the ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.5/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-rancher-ha"},"air gap Docker installation")," instructions and the ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.5/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-rancher-ha"},"air gap Kubernetes installation")," instructions."))}d.isMDXComponent=!0}}]);