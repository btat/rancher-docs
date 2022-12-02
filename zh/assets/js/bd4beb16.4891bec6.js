"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[41144],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),i=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=i(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=i(r),h=n,f=d["".concat(l,".").concat(h)]||d[h]||c[h]||o;return r?a.createElement(f,s(s({ref:t},p),{},{components:r})):a.createElement(f,s({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:n,s[1]=u;for(var i=2;i<o;i++)s[i]=r[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},83745:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>u,toc:()=>i});var a=r(87462),n=(r(67294),r(3905));const o={title:"Horizontal Pod Autoscaler",description:"\u4e86\u89e3 Pod \u6c34\u5e73\u81ea\u52a8\u6269\u7f29 (HPA)\u3002\u5982\u4f55\u7ba1\u7406 HPA \u4ee5\u53ca\u5982\u4f55\u4f7f\u7528\u670d\u52a1\u90e8\u7f72\u6765\u8fdb\u884c\u6d4b\u8bd5"},s=void 0,u={unversionedId:"pages-for-subheaders/horizontal-pod-autoscaler",id:"pages-for-subheaders/horizontal-pod-autoscaler",title:"Horizontal Pod Autoscaler",description:"\u4e86\u89e3 Pod \u6c34\u5e73\u81ea\u52a8\u6269\u7f29 (HPA)\u3002\u5982\u4f55\u7ba1\u7406 HPA \u4ee5\u53ca\u5982\u4f55\u4f7f\u7528\u670d\u52a1\u90e8\u7f72\u6765\u8fdb\u884c\u6d4b\u8bd5",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/pages-for-subheaders/horizontal-pod-autoscaler.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/horizontal-pod-autoscaler",permalink:"/zh/pages-for-subheaders/horizontal-pod-autoscaler",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/pages-for-subheaders/horizontal-pod-autoscaler.md",tags:[],version:"current",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"2022\u5e749\u670823\u65e5",frontMatter:{title:"Horizontal Pod Autoscaler",description:"\u4e86\u89e3 Pod \u6c34\u5e73\u81ea\u52a8\u6269\u7f29 (HPA)\u3002\u5982\u4f55\u7ba1\u7406 HPA \u4ee5\u53ca\u5982\u4f55\u4f7f\u7528\u670d\u52a1\u90e8\u7f72\u6765\u8fdb\u884c\u6d4b\u8bd5"},sidebar:"tutorialSidebar",previous:{title:"\u6dfb\u52a0 Sidecar",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/add-a-sidecar"},next:{title:"Horizontal Pod Autoscaler \u4ecb\u7ecd",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/about-hpas"}},l={},i=[{value:"\u7ba1\u7406 HPA",id:"\u7ba1\u7406-hpa",level:2},{value:"\u4f7f\u7528\u670d\u52a1\u90e8\u7f72\u6d4b\u8bd5 HPA",id:"\u4f7f\u7528\u670d\u52a1\u90e8\u7f72\u6d4b\u8bd5-hpa",level:2}],p={toc:i};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/"},"Horizontal Pod Autoscaler\uff08HPA\uff09"),"\u662f\u4e00\u9879 Kubernetes \u529f\u80fd\uff0c\u7528\u4e8e\u5c06\u96c6\u7fa4\u914d\u7f6e\u4e3a\u81ea\u52a8\u6269\u7f29\u5176\u8fd0\u884c\u7684\u670d\u52a1\u3002"),(0,n.kt)("p",null,"Rancher \u63d0\u4f9b\u4e86\u4e00\u4e9b\u9644\u52a0\u529f\u80fd\u6765\u5e2e\u52a9\u7ba1\u7406 HPA\uff0c\u5177\u4f53\u53d6\u51b3\u4e8e Rancher \u7684\u7248\u672c\u3002"),(0,n.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 Rancher UI \u521b\u5efa\u3001\u7ba1\u7406\u548c\u5220\u9664 HPA\u3002\u4ec5\u5728 ",(0,n.kt)("inlineCode",{parentName:"p"},"autoscaling/v2beta2")," API \u4e2d\u652f\u6301 HPA\u3002"),(0,n.kt)("h2",{id:"\u7ba1\u7406-hpa"},"\u7ba1\u7406 HPA"),(0,n.kt)("p",null,"\u7ba1\u7406 HPA \u7684\u65b9\u5f0f\u56e0\u4f60\u7684 Kubernetes API \u7248\u672c\u800c\u5f02\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Kubernetes API \u7248\u672c autoscaling/V2beta1"),"\uff1a\u5141\u8bb8\u6839\u636e\u5e94\u7528\u7a0b\u5e8f\u7684 CPU \u548c\u5185\u5b58\u5229\u7528\u7387\u81ea\u52a8\u6269\u7f29 pod\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Kubernetes API \u7248\u672c autoscaling/V2beta2"),"\uff1a\u5141\u8bb8\u6839\u636e CPU \u548c\u5185\u5b58\u5229\u7528\u7387\u4ee5\u53ca\u81ea\u5b9a\u4e49\u6307\u6807\u81ea\u52a8\u6269\u7f29 pod\u3002")),(0,n.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 Rancher UI \u521b\u5efa\u3001\u7ba1\u7406\u548c\u5220\u9664 HPA\u3002\u5728 Rancher UI \u4e2d\uff0c\u4f60\u53ef\u4ee5\u5c06 HPA \u914d\u7f6e\u4e3a\u6839\u636e CPU \u548c\u5185\u5b58\u5229\u7528\u7387\u8fdb\u884c\u6269\u7f29\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,n.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/manage-hpas-with-ui"},"\u4f7f\u7528 Rancher UI \u7ba1\u7406 HPA"),"\u3002\u5982\u9700\u6839\u636e\u81ea\u5b9a\u4e49\u6307\u6807\u8fdb\u884c HPA\uff0c\u4f60\u4ecd\u7136\u9700\u8981\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"kubectl"),"\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,n.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/manage-hpas-with-kubectl#%E9%85%8D%E7%BD%AE-hpa-%E4%BB%A5%E4%BD%BF%E7%94%A8-prometheus-%E8%87%AA%E5%AE%9A%E4%B9%89%E6%8C%87%E6%A0%87%E8%BF%9B%E8%A1%8C%E6%89%A9%E7%BC%A9"},"\u914d\u7f6e HPA \u4ee5\u4f7f\u7528 Prometheus \u81ea\u5b9a\u4e49\u6307\u6807\u8fdb\u884c\u6269\u7f29"),"\u3002"),(0,n.kt)("p",null,"\u5728 Rancher 2.0.7 \u53ca\u66f4\u9ad8\u7248\u672c\u4e2d\u521b\u5efa\u7684\u96c6\u7fa4\u81ea\u52a8\u6ee1\u8db3\u4f7f\u7528 HPA \u7684\u6240\u6709\u8981\u6c42\uff08metrics-server \u548c Kubernetes \u96c6\u7fa4\u914d\u7f6e\uff09\u3002"),(0,n.kt)("h2",{id:"\u4f7f\u7528\u670d\u52a1\u90e8\u7f72\u6d4b\u8bd5-hpa"},"\u4f7f\u7528\u670d\u52a1\u90e8\u7f72\u6d4b\u8bd5 HPA"),(0,n.kt)("p",null,"\u4f60\u53ef\u4ee5\u8f6c\u5230\u4f60\u7684\u9879\u76ee\u5e76\u5355\u51fb",(0,n.kt)("strong",{parentName:"p"},"\u8d44\u6e90 > HPA"),"\u6765\u67e5\u770b\u200b\u200b HPA \u5f53\u524d\u7684\u526f\u672c\u6570\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,n.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/manage-hpas-with-ui"},"\u83b7\u53d6 HPA \u6307\u6807\u548c\u72b6\u6001"),"\u3002"),(0,n.kt)("p",null,"\u4f60\u8fd8\u53ef\u4ee5\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"kubectl")," \u6765\u83b7\u53d6\u4f60\u4f7f\u7528\u8d1f\u8f7d\u6d4b\u8bd5\u5de5\u5177\u6d4b\u8bd5\u7684 HPA \u7684\u72b6\u6001\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,n.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/test-hpas-with-kubectl"},"\u4f7f\u7528 kubectl \u6d4b\u8bd5 HPA"),"\u3002"))}c.isMDXComponent=!0}}]);