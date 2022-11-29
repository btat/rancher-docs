"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[79360],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return k}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(r),k=o,m=p["".concat(c,".").concat(k)]||p[k]||d[k]||a;return r?n.createElement(m,s(s({ref:t},l),{},{components:r})):n.createElement(m,s({ref:t},l))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},77102:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return d}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),s=["components"],i={title:"Kubernetes \u4e2d\u8282\u70b9\u7684\u89d2\u8272"},c=void 0,u={unversionedId:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/checklist-for-production-ready-clusters/roles-for-nodes-in-kubernetes",id:"version-2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/checklist-for-production-ready-clusters/roles-for-nodes-in-kubernetes",title:"Kubernetes \u4e2d\u8282\u70b9\u7684\u89d2\u8272",description:"\u672c\u8282\u4ecb\u7ecd Kubernetes \u4e2d etcd \u8282\u70b9\u3001controlplane \u8282\u70b9\u548c worker \u8282\u70b9\u7684\u89d2\u8272\uff0c\u4ee5\u53ca\u8fd9\u4e9b\u89d2\u8272\u5982\u4f55\u5728\u96c6\u7fa4\u4e2d\u534f\u540c\u5de5\u4f5c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/checklist-for-production-ready-clusters/roles-for-nodes-in-kubernetes.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/checklist-for-production-ready-clusters",slug:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/checklist-for-production-ready-clusters/roles-for-nodes-in-kubernetes",permalink:"/zh/v2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/checklist-for-production-ready-clusters/roles-for-nodes-in-kubernetes",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/checklist-for-production-ready-clusters/roles-for-nodes-in-kubernetes.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"2022/11/14",frontMatter:{title:"Kubernetes \u4e2d\u8282\u70b9\u7684\u89d2\u8272"},sidebar:"tutorialSidebar",previous:{title:"\u63a8\u8350\u7684\u96c6\u7fa4\u67b6\u6784",permalink:"/zh/v2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/checklist-for-production-ready-clusters/recommended-cluster-architecture"},next:{title:"\u901a\u8fc7\u6258\u7ba1 Kubernetes \u63d0\u4f9b\u5546\u8bbe\u7f6e\u96c6\u7fa4",permalink:"/zh/v2.6/pages-for-subheaders/set-up-clusters-from-hosted-kubernetes-providers"}},l={},d=[{value:"etcd",id:"etcd",level:2},{value:"controlplane",id:"controlplane",level:2},{value:"kube-apiserver",id:"kube-apiserver",level:3},{value:"kube-controller-manager",id:"kube-controller-manager",level:3},{value:"kube-scheduler",id:"kube-scheduler",level:3},{value:"worker",id:"worker",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],p={toc:d};function k(e){var t=e.components,i=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u8282\u4ecb\u7ecd Kubernetes \u4e2d etcd \u8282\u70b9\u3001controlplane \u8282\u70b9\u548c worker \u8282\u70b9\u7684\u89d2\u8272\uff0c\u4ee5\u53ca\u8fd9\u4e9b\u89d2\u8272\u5982\u4f55\u5728\u96c6\u7fa4\u4e2d\u534f\u540c\u5de5\u4f5c\u3002"),(0,a.kt)("p",null,"\u6b64\u56fe\u9002\u7528\u4e8e ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.6/pages-for-subheaders/launch-kubernetes-with-rancher"},"Rancher \u901a\u8fc7 RKE \u90e8\u7f72\u7684 Kubernetes \u96c6\u7fa4"),"\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u96c6\u7fa4\u56fe",src:r(56492).Z,width:"772",height:"1145"}),(0,a.kt)("br",null)),(0,a.kt)("sup",null,"\u7ebf\u6761\u8868\u793a\u7ec4\u4ef6\u4e4b\u95f4\u7684\u901a\u4fe1\u3002\u800c\u989c\u8272\u7eaf\u7cb9\u7528\u4e8e\u89c6\u89c9\u8f85\u52a9\u3002"),(0,a.kt)("h2",{id:"etcd"},"etcd"),(0,a.kt)("p",null,"\u5177\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd")," \u89d2\u8272\u7684\u8282\u70b9\u8fd0\u884c etcd\uff0c\u8fd9\u662f\u4e00\u4e2a\u4e00\u81f4\u4e14\u9ad8\u53ef\u7528\u7684\u952e\u503c\u5b58\u50a8\uff0c\u7528\u4f5c Kubernetes \u6240\u6709\u96c6\u7fa4\u6570\u636e\u7684\u540e\u5907\u5b58\u50a8\u3002etcd \u5c06\u6570\u636e\u590d\u5236\u5230\u6bcf\u4e2a\u8282\u70b9\u3002"),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u5177\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd")," \u89d2\u8272\u7684\u8282\u70b9\u5728 UI \u4e2d\u663e\u793a\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"\u4e0d\u53ef\u8c03\u5ea6"),"\uff0c\u5373\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4e0d\u4f1a\u5c06 Pod \u8c03\u5ea6\u5230\u8fd9\u4e9b\u8282\u70b9\u3002"))),(0,a.kt)("h2",{id:"controlplane"},"controlplane"),(0,a.kt)("p",null,"\u5177\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"controlplane")," \u89d2\u8272\u7684\u8282\u70b9\u8fd0\u884c Kubernetes \u4e3b\u7ec4\u4ef6\uff08\u4e0d\u5305\u62ec ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd"),"\uff0c\u56e0\u4e3a\u5b83\u662f\u4e00\u4e2a\u5355\u72ec\u7684\u89d2\u8272\uff09\u3002\u6709\u5173\u7ec4\u4ef6\u7684\u8be6\u7ec6\u5217\u8868\uff0c\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/components/#master-components"},"Kubernetes\uff1a\u4e3b\u7ec4\u4ef6"),"\u3002"),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u5177\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"controlplane")," \u89d2\u8272\u7684\u8282\u70b9\u5728 UI \u4e2d\u663e\u793a\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"\u4e0d\u53ef\u8c03\u5ea6"),"\uff0c\u5373\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4e0d\u4f1a\u5c06 Pod \u8c03\u5ea6\u5230\u8fd9\u4e9b\u8282\u70b9\u3002"))),(0,a.kt)("h3",{id:"kube-apiserver"},"kube-apiserver"),(0,a.kt)("p",null,"Kubernetes API Server (",(0,a.kt)("inlineCode",{parentName:"p"},"kube-apiserver"),") \u80fd\u6c34\u5e73\u6269\u5c55\u3002\u5982\u679c\u8282\u70b9\u5177\u6709\u9700\u8981\u8bbf\u95ee Kubernetes API Server \u7684\u7ec4\u4ef6\uff0c\u5219\u6bcf\u4e2a\u5177\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"controlplane")," \u89d2\u8272\u7684\u8282\u70b9\u90fd\u5c06\u88ab\u6dfb\u52a0\u5230\u8282\u70b9\u4e0a\u7684 NGINX \u4ee3\u7406\u4e2d\u3002\u8fd9\u610f\u5473\u7740\u5982\u679c\u4e00\u4e2a\u8282\u70b9\u53d8\u5f97\u4e0d\u53ef\u8bbf\u95ee\uff0c\u8be5\u8282\u70b9\u4e0a\u7684\u672c\u5730 NGINX \u4ee3\u7406\u4f1a\u5c06\u8bf7\u6c42\u8f6c\u53d1\u5230\u5217\u8868\u4e2d\u7684\u53e6\u4e00\u4e2a Kubernetes API Server\u3002"),(0,a.kt)("h3",{id:"kube-controller-manager"},"kube-controller-manager"),(0,a.kt)("p",null,"Kubernetes Controller Manager \u4f7f\u7528 Kubernetes \u4e2d\u7684\u7aef\u70b9\u8fdb\u884c Leader \u9009\u4e3e\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"kube-controller-manager")," \u7684\u4e00\u4e2a\u5b9e\u4f8b\u5c06\u5728 Kubernetes \u7aef\u70b9\u4e2d\u521b\u5efa\u4e00\u4e2a\u6761\u76ee\uff0c\u5e76\u5728\u914d\u7f6e\u7684\u65f6\u95f4\u95f4\u9694\u5185\u66f4\u65b0\u8be5\u6761\u76ee\u3002\u5176\u4ed6\u5b9e\u4f8b\u5c06\u770b\u5230\u4e00\u4e2a\u72b6\u6001\u4e3a Active \u7684 Leader\uff0c\u5e76\u7b49\u5f85\u8be5\u6761\u76ee\u8fc7\u671f\uff08\u4f8b\u5982\u8282\u70b9\u65e0\u54cd\u5e94\uff09\u3002"),(0,a.kt)("h3",{id:"kube-scheduler"},"kube-scheduler"),(0,a.kt)("p",null,"Kubernetes \u8c03\u5ea6\u5668\u4f7f\u7528 Kubernetes \u4e2d\u7684\u7aef\u70b9\u8fdb\u884c Leader \u9009\u4e3e\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"kube-scheduler")," \u7684\u4e00\u4e2a\u5b9e\u4f8b\u5c06\u5728 Kubernetes \u7aef\u70b9\u4e2d\u521b\u5efa\u4e00\u4e2a\u6761\u76ee\uff0c\u5e76\u5728\u914d\u7f6e\u7684\u65f6\u95f4\u95f4\u9694\u5185\u66f4\u65b0\u8be5\u6761\u76ee\u3002\u5176\u4ed6\u5b9e\u4f8b\u5c06\u770b\u5230\u4e00\u4e2a\u72b6\u6001\u4e3a Active \u7684 Leader\uff0c\u5e76\u7b49\u5f85\u8be5\u6761\u76ee\u8fc7\u671f\uff08\u4f8b\u5982\u8282\u70b9\u65e0\u54cd\u5e94\uff09\u3002"),(0,a.kt)("h2",{id:"worker"},"worker"),(0,a.kt)("p",null,"\u5177\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"worker")," \u89d2\u8272\u7684\u8282\u70b9\u8fd0\u884c Kubernetes \u8282\u70b9\u7ec4\u4ef6\u3002\u6709\u5173\u7ec4\u4ef6\u7684\u8be6\u7ec6\u5217\u8868\uff0c\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/components/#node-components"},"Kubernetes\uff1a\u8282\u70b9\u7ec4\u4ef6"),"\u3002"),(0,a.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/overview/components/#node-components"},"Kubernetes\uff1a\u8282\u70b9\u7ec4\u4ef6"))))}k.isMDXComponent=!0},56492:function(e,t,r){t.Z=r.p+"assets/images/clusterdiagram-2b66ee124fed594265b3bc07fa1f145d.svg"}}]);