"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[1962],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),b=o,m=d["".concat(l,".").concat(b)]||d[b]||p[b]||s;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<s;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44129:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const s={title:"Kubernetes Components"},a=void 0,i={unversionedId:"pages-for-subheaders/kubernetes-components",id:"version-2.6/pages-for-subheaders/kubernetes-components",title:"Kubernetes Components",description:"The commands and steps listed in this section apply to the core Kubernetes components on Rancher Launched Kubernetes clusters.",source:"@site/versioned_docs/version-2.6/pages-for-subheaders/kubernetes-components.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/kubernetes-components",permalink:"/v2.6/pages-for-subheaders/kubernetes-components",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/pages-for-subheaders/kubernetes-components.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"Nov 14, 2022",frontMatter:{title:"Kubernetes Components"},sidebar:"tutorialSidebar",previous:{title:"General Troubleshooting",permalink:"/v2.6/troubleshooting/general-troubleshooting"},next:{title:"Troubleshooting etcd Nodes",permalink:"/v2.6/troubleshooting/kubernetes-components/troubleshooting-etcd-nodes"}},l={},u=[{value:"Kubernetes Component Diagram",id:"kubernetes-component-diagram",level:2}],c={toc:u};function p(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The commands and steps listed in this section apply to the core Kubernetes components on ",(0,o.kt)("a",{parentName:"p",href:"/v2.6/pages-for-subheaders/launch-kubernetes-with-rancher"},"Rancher Launched Kubernetes")," clusters."),(0,o.kt)("p",null,"This section includes troubleshooting tips in the following categories:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v2.6/troubleshooting/kubernetes-components/troubleshooting-etcd-nodes"},"Troubleshooting etcd Nodes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v2.6/troubleshooting/kubernetes-components/troubleshooting-controlplane-nodes"},"Troubleshooting Controlplane Nodes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v2.6/troubleshooting/kubernetes-components/troubleshooting-nginx-proxy"},"Troubleshooting nginx-proxy Nodes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v2.6/troubleshooting/kubernetes-components/troubleshooting-worker-nodes-and-generic-components"},"Troubleshooting Worker Nodes and Generic Components"))),(0,o.kt)("h2",{id:"kubernetes-component-diagram"},"Kubernetes Component Diagram"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Cluster diagram",src:n(56492).Z,width:"772",height:"1145"}),(0,o.kt)("br",null)),(0,o.kt)("sup",null,"Lines show the traffic flow between components. Colors are used purely for visual aid"))}p.isMDXComponent=!0},56492:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/clusterdiagram-2b66ee124fed594265b3bc07fa1f145d.svg"}}]);