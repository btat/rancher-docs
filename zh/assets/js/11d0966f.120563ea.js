"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[95621],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(i,".").concat(m)]||d[m]||l[m]||c;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<c;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},74275:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>l,frontMatter:()=>c,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const c={title:"\u8bbe\u7f6e\u5bb9\u5668\u7684\u6280\u5de7"},o=void 0,s={unversionedId:"reference-guides/best-practices/rancher-managed-clusters/tips-to-set-up-containers",id:"reference-guides/best-practices/rancher-managed-clusters/tips-to-set-up-containers",title:"\u8bbe\u7f6e\u5bb9\u5668\u7684\u6280\u5de7",description:"\u914d\u7f6e\u826f\u597d\u7684\u5bb9\u5668\u53ef\u4ee5\u6781\u5927\u5730\u63d0\u9ad8\u73af\u5883\u7684\u6574\u4f53\u6027\u80fd\u548c\u5b89\u5168\u6027\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/reference-guides/best-practices/rancher-managed-clusters/tips-to-set-up-containers.md",sourceDirName:"reference-guides/best-practices/rancher-managed-clusters",slug:"/reference-guides/best-practices/rancher-managed-clusters/tips-to-set-up-containers",permalink:"/zh/reference-guides/best-practices/rancher-managed-clusters/tips-to-set-up-containers",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/best-practices/rancher-managed-clusters/tips-to-set-up-containers.md",tags:[],version:"current",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"2022\u5e749\u670823\u65e5",frontMatter:{title:"\u8bbe\u7f6e\u5bb9\u5668\u7684\u6280\u5de7"},sidebar:"tutorialSidebar",previous:{title:"\u76d1\u63a7\u6700\u4f73\u5b9e\u8df5",permalink:"/zh/reference-guides/best-practices/rancher-managed-clusters/monitoring-best-practices"},next:{title:"Rancher \u7ba1\u7406 vSphere \u96c6\u7fa4\u7684\u6700\u4f73\u5b9e\u8df5",permalink:"/zh/reference-guides/best-practices/rancher-managed-clusters/rancher-managed-clusters-in-vsphere"}},i={},p=[{value:"\u4f7f\u7528\u901a\u7528\u5bb9\u5668\u64cd\u4f5c\u7cfb\u7edf",id:"\u4f7f\u7528\u901a\u7528\u5bb9\u5668\u64cd\u4f5c\u7cfb\u7edf",level:3},{value:"\u4f7f\u7528 From scratch \u5bb9\u5668",id:"\u4f7f\u7528-from-scratch-\u5bb9\u5668",level:3},{value:"\u4ee5\u975e\u7279\u6743\u65b9\u5f0f\u8fd0\u884c\u5bb9\u5668\u8fdb\u7a0b",id:"\u4ee5\u975e\u7279\u6743\u65b9\u5f0f\u8fd0\u884c\u5bb9\u5668\u8fdb\u7a0b",level:3},{value:"\u5b9a\u4e49\u8d44\u6e90\u9650\u5236",id:"\u5b9a\u4e49\u8d44\u6e90\u9650\u5236",level:3},{value:"\u5b9a\u4e49\u8d44\u6e90\u9700\u6c42",id:"\u5b9a\u4e49\u8d44\u6e90\u9700\u6c42",level:3},{value:"\u914d\u7f6e\u5b58\u6d3b\u548c\u5c31\u7eea\u63a2\u6d4b\u5668",id:"\u914d\u7f6e\u5b58\u6d3b\u548c\u5c31\u7eea\u63a2\u6d4b\u5668",level:3}],u={toc:p};function l(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u914d\u7f6e\u826f\u597d\u7684\u5bb9\u5668\u53ef\u4ee5\u6781\u5927\u5730\u63d0\u9ad8\u73af\u5883\u7684\u6574\u4f53\u6027\u80fd\u548c\u5b89\u5168\u6027\u3002"),(0,a.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u4e00\u4e9b\u8bbe\u7f6e\u5bb9\u5668\u7684\u6280\u5de7\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u9700\u8981\u4e86\u89e3\u5bb9\u5668\u5b89\u5168\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u4e5f\u53ef\u4ee5\u53c2\u89c1 Rancher \u7684",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/complete-guide-container-security"},"\u5bb9\u5668\u5b89\u5168\u6307\u5357"),"\u3002"),(0,a.kt)("h3",{id:"\u4f7f\u7528\u901a\u7528\u5bb9\u5668\u64cd\u4f5c\u7cfb\u7edf"},"\u4f7f\u7528\u901a\u7528\u5bb9\u5668\u64cd\u4f5c\u7cfb\u7edf"),(0,a.kt)("p",null,"\u5728\u53ef\u80fd\u7684\u60c5\u51b5\u4e0b\uff0c\u4f60\u5e94\u8be5\u5c3d\u91cf\u5728\u901a\u7528\u7684\u5bb9\u5668\u57fa\u7840\u64cd\u4f5c\u7cfb\u7edf\u4e0a\u8fdb\u884c\u6807\u51c6\u5316\u3002"),(0,a.kt)("p",null,"Alpine \u548c BusyBox \u7b49\u8f83\u5c0f\u7684\u53d1\u884c\u7248\u51cf\u5c11\u4e86\u5bb9\u5668\u955c\u50cf\u7684\u5927\u5c0f\uff0c\u5e76\u4e14\u901a\u5e38\u5177\u6709\u8f83\u5c0f\u7684\u6f0f\u6d1e\u3002"),(0,a.kt)("p",null,"\u6d41\u884c\u7684\u53d1\u884c\u7248\u5982 Ubuntu\u3001Fedora \u548c CentOS \u7b49\u90fd\u7ecf\u8fc7\u4e86\u5927\u91cf\u7684\u6d4b\u8bd5\uff0c\u5e76\u63d0\u4f9b\u4e86\u66f4\u591a\u7684\u529f\u80fd\u3002"),(0,a.kt)("h3",{id:"\u4f7f\u7528-from-scratch-\u5bb9\u5668"},"\u4f7f\u7528 From scratch \u5bb9\u5668"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u7684\u5fae\u670d\u52a1\u662f\u4e00\u4e2a\u72ec\u7acb\u7684\u9759\u6001\u4e8c\u8fdb\u5236\uff0c\u4f60\u5e94\u8be5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"From scratch")," \u5bb9\u5668\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"FROM scratch")," \u5bb9\u5668\u662f\u4e00\u4e2a",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/_/scratch"},"\u5b98\u65b9 Docker \u955c\u50cf"),"\uff0c\u5b83\u662f\u7a7a\u7684\uff0c\u8fd9\u6837\u4f60\u5c31\u53ef\u4ee5\u7528\u5b83\u6765\u8bbe\u8ba1\u6700\u5c0f\u7684\u955c\u50cf\u3002"),(0,a.kt)("p",null,"\u8fd9\u4e2a\u955c\u50cf\u8fd9\u5c06\u5177\u6709\u6700\u5c0f\u7684\u653b\u51fb\u5c42\u548c\u6700\u5c0f\u7684\u955c\u50cf\u5927\u5c0f\u3002"),(0,a.kt)("h3",{id:"\u4ee5\u975e\u7279\u6743\u65b9\u5f0f\u8fd0\u884c\u5bb9\u5668\u8fdb\u7a0b"},"\u4ee5\u975e\u7279\u6743\u65b9\u5f0f\u8fd0\u884c\u5bb9\u5668\u8fdb\u7a0b"),(0,a.kt)("p",null,"\u5728\u53ef\u80fd\u7684\u60c5\u51b5\u4e0b\uff0c\u5728\u5bb9\u5668\u5185\u8fd0\u884c\u8fdb\u7a0b\u65f6\u4f7f\u7528\u975e\u7279\u6743\u7528\u6237\u3002\u867d\u7136\u5bb9\u5668\u8fd0\u884c\u65f6\u63d0\u4f9b\u4e86\u9694\u79bb\uff0c\u4f46\u4ecd\u7136\u53ef\u80fd\u5b58\u5728\u6f0f\u6d1e\u548c\u653b\u51fb\u3002\u5982\u679c\u5bb9\u5668\u4ee5 root \u8eab\u4efd\u8fd0\u884c\uff0c\u65e0\u610f\u4e2d\u6216\u610f\u5916\u7684\u4e3b\u673a\u6302\u8f7d\u4e5f\u4f1a\u53d7\u5230\u5f71\u54cd\u3002\u6709\u5173\u4e3a Pod \u6216\u5bb9\u5668\u914d\u7f6e\u5b89\u5168\u4e0a\u4e0b\u6587\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1 ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/security-context/"},"Kubernetes \u6587\u6863"),"\u3002"),(0,a.kt)("h3",{id:"\u5b9a\u4e49\u8d44\u6e90\u9650\u5236"},"\u5b9a\u4e49\u8d44\u6e90\u9650\u5236"),(0,a.kt)("p",null,"\u4f60\u5e94\u8be5\u5c06 CPU \u548c\u5185\u5b58\u9650\u5236\u5e94\u7528\u5230\u4f60\u7684 Pod \u4e0a\u3002\u8fd9\u53ef\u4ee5\u5e2e\u52a9\u7ba1\u7406 worker \u8282\u70b9\u4e0a\u7684\u8d44\u6e90\uff0c\u5e76\u907f\u514d\u53d1\u751f\u6545\u969c\u7684\u5fae\u670d\u52a1\u5f71\u54cd\u5176\u4ed6\u5fae\u670d\u52a1\u3002"),(0,a.kt)("p",null,"\u5728\u6807\u51c6 Kubernetes \u4e2d\uff0c\u4f60\u53ef\u4ee5\u8bbe\u7f6e\u547d\u540d\u7a7a\u95f4\u7ea7\u522b\u7684\u8d44\u6e90\u9650\u5236\u3002\u5728 Rancher \u4e2d\uff0c\u4f60\u53ef\u4ee5\u8bbe\u7f6e\u9879\u76ee\u7ea7\u522b\u7684\u8d44\u6e90\u9650\u5236\uff0c\u9879\u76ee\u5185\u7684\u6240\u6709\u547d\u540d\u7a7a\u95f4\u90fd\u4f1a\u7ee7\u627f\u8fd9\u4e9b\u9650\u5236\u3002\u8be6\u60c5\u8bf7\u53c2\u89c1 Rancher \u5b98\u65b9\u6587\u6863\u3002"),(0,a.kt)("p",null,"\u5728\u8bbe\u7f6e\u8d44\u6e90\u914d\u989d\u65f6\uff0c\u5982\u679c\u4f60\u5728\u9879\u76ee\u6216\u547d\u540d\u7a7a\u95f4\u4e0a\u8bbe\u7f6e\u4e86\u4efb\u4f55\u4e0e CPU \u6216\u5185\u5b58\u76f8\u5173\u7684\u5185\u5bb9\uff08\u5373\u9650\u5236\u6216\u9884\u7559\uff09\uff0c\u6240\u6709\u5bb9\u5668\u90fd\u9700\u8981\u5728\u521b\u5efa\u671f\u95f4\u8bbe\u7f6e\u5404\u81ea\u7684 CPU \u6216\u5185\u5b58\u5b57\u6bb5\u3002\u4e3a\u4e86\u907f\u514d\u5728\u521b\u5efa\u5de5\u4f5c\u8d1f\u8f7d\u671f\u95f4\u5bf9\u6bcf\u4e2a\u5bb9\u5668\u8bbe\u7f6e\u8fd9\u4e9b\u9650\u5236\uff0c\u53ef\u4ee5\u5728\u547d\u540d\u7a7a\u95f4\u4e0a\u6307\u5b9a\u4e00\u4e2a\u9ed8\u8ba4\u7684\u5bb9\u5668\u8d44\u6e90\u9650\u5236\u3002"),(0,a.kt)("p",null,"\u6709\u5173\u5982\u4f55\u5728",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/#resource-requests-and-limits-of-pod-and-container"},"\u5bb9\u5668\u7ea7\u522b"),"\u548c\u547d\u540d\u7a7a\u95f4\u7ea7\u522b\u8bbe\u7f6e\u8d44\u6e90\u9650\u5236\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1 Kubernetes \u6587\u6863\u3002"),(0,a.kt)("h3",{id:"\u5b9a\u4e49\u8d44\u6e90\u9700\u6c42"},"\u5b9a\u4e49\u8d44\u6e90\u9700\u6c42"),(0,a.kt)("p",null,"\u4f60\u5e94\u8be5\u5c06 CPU \u548c\u5185\u5b58\u8981\u6c42\u5e94\u7528\u5230\u4f60\u7684 Pod \u4e0a\u3002\u8fd9\u5bf9\u4e8e\u901a\u77e5\u8c03\u5ea6\u5668\u9700\u8981\u5c06\u4f60\u7684 pod \u653e\u7f6e\u5728\u54ea\u79cd\u7c7b\u578b\u7684\u8ba1\u7b97\u8282\u70b9\u4e0a\uff0c\u5e76\u786e\u4fdd\u5b83\u4e0d\u4f1a\u8fc7\u5ea6\u914d\u7f6e\u8be5\u8282\u70b9\u8d44\u6e90\u81f3\u5173\u91cd\u8981\u3002\u5728 Kubernetes \u4e2d\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u5728 pod \u7684\u5bb9\u5668\u89c4\u8303\u7684\u8d44\u6e90\u8bf7\u6c42\u5b57\u6bb5\u4e2d\u5b9a\u4e49 ",(0,a.kt)("inlineCode",{parentName:"p"},"resources.requests")," \u6765\u8bbe\u7f6e\u8d44\u6e90\u9700\u6c42\u3002\u8be6\u60c5\u8bf7\u53c2\u89c1 ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/#resource-requests-and-limits-of-pod-and-container"},"Kubernetes \u6587\u6863"),"\u3002"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u4e3a pod \u6240\u90e8\u7f72\u7684\u547d\u540d\u7a7a\u95f4\u8bbe\u7f6e\u4e86\u8d44\u6e90\u9650\u5236\uff0c\u800c\u5bb9\u5668\u6ca1\u6709\u7279\u5b9a\u7684\u8d44\u6e90\u8bf7\u6c42\uff0c\u5219\u4e0d\u5141\u8bb8\u542f\u52a8 pod\u3002\u4e3a\u4e86\u907f\u514d\u5728\u521b\u5efa\u5de5\u4f5c\u8d1f\u8f7d\u671f\u95f4\u5bf9\u6bcf\u4e2a\u5bb9\u5668\u8bbe\u7f6e\u8fd9\u4e9b\u5b57\u6bb5\uff0c\u53ef\u4ee5\u5728\u547d\u540d\u7a7a\u95f4\u4e0a\u6307\u5b9a\u4e00\u4e2a\u9ed8\u8ba4\u7684\u5bb9\u5668\u8d44\u6e90\u9650\u5236\u3002")),(0,a.kt)("p",null,"\u5efa\u8bae\u5728\u5bb9\u5668\u7ea7\u522b\u4e0a\u5b9a\u4e49\u8d44\u6e90\u9700\u6c42\uff0c\u5426\u5219\uff0c\u8c03\u5ea6\u5668\u4f1a\u8ba4\u4e3a\u96c6\u7fa4\u52a0\u8f7d\u5bf9\u4f60\u7684\u5e94\u7528\u6ca1\u6709\u5e2e\u52a9\u3002"),(0,a.kt)("h3",{id:"\u914d\u7f6e\u5b58\u6d3b\u548c\u5c31\u7eea\u63a2\u6d4b\u5668"},"\u914d\u7f6e\u5b58\u6d3b\u548c\u5c31\u7eea\u63a2\u6d4b\u5668"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u4e3a\u4f60\u7684\u5bb9\u5668\u914d\u7f6e\u5b58\u6d3b\u63a2\u6d4b\u5668\u548c\u5c31\u7eea\u63a2\u6d4b\u5668\u3002\u5982\u679c\u4f60\u7684\u5bb9\u5668\u4e0d\u662f\u5b8c\u5168\u5d29\u6e83\uff0cKubernetes \u662f\u4e0d\u4f1a\u77e5\u9053\u5b83\u662f\u4e0d\u5065\u5eb7\u7684\uff0c\u9664\u975e\u4f60\u521b\u5efa\u4e00\u4e2a\u53ef\u4ee5\u62a5\u544a\u5bb9\u5668\u72b6\u6001\u7684\u7aef\u70b9\u6216\u673a\u5236\u3002\u6216\u8005\uff0c\u786e\u4fdd\u4f60\u7684\u5bb9\u5668\u5728\u4e0d\u5065\u5eb7\u7684\u60c5\u51b5\u4e0b\u505c\u6b62\u5e76\u5d29\u6e83\u3002"),(0,a.kt)("p",null,"Kubernetes \u6587\u6863\u5c55\u793a\u4e86\u5982\u4f55",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-probes/"},"\u4e3a\u5bb9\u5668\u914d\u7f6e\u5b58\u6d3b\u548c\u5c31\u7eea\u63a2\u6d4b\u5668"),"\u3002"))}l.isMDXComponent=!0}}]);