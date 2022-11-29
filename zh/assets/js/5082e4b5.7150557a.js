"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[13349],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=c(n),k=a,m=s["".concat(u,".").concat(k)]||s[k]||d[k]||l;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},36092:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=["components"],i={title:"Rancher Agent"},u=void 0,c={unversionedId:"how-to-guides/new-user-guides/launch-kubernetes-with-rancher/about-rancher-agents",id:"version-2.6/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/about-rancher-agents",title:"Rancher Agent",description:"Rancher \u7ba1\u7406\u7684\u96c6\u7fa4\u4e0a\u90e8\u7f72\u4e86\u4e24\u79cd\u4e0d\u540c\u7684 Agent \u8d44\u6e90\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/about-rancher-agents.md",sourceDirName:"how-to-guides/new-user-guides/launch-kubernetes-with-rancher",slug:"/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/about-rancher-agents",permalink:"/zh/v2.6/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/about-rancher-agents",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/about-rancher-agents.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"2022/11/14",frontMatter:{title:"Rancher Agent"},sidebar:"tutorialSidebar",previous:{title:"RKE1 \u548c RKE2 \u5dee\u200b\u200b\u5f02",permalink:"/zh/v2.6/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/rke1-vs-rke2-differences"},next:{title:"Kubernetes \u8d44\u6e90",permalink:"/zh/v2.6/pages-for-subheaders/kubernetes-resources-setup"}},p={},d=[{value:"cattle-cluster-agent",id:"cattle-cluster-agent",level:3},{value:"cattle-node-agent",id:"cattle-node-agent",level:3},{value:"\u8c03\u5ea6\u89c4\u5219",id:"\u8c03\u5ea6\u89c4\u5219",level:3}],s={toc:d};function k(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Rancher \u7ba1\u7406\u7684\u96c6\u7fa4\u4e0a\u90e8\u7f72\u4e86\u4e24\u79cd\u4e0d\u540c\u7684 Agent \u8d44\u6e90\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#cattle-cluster-agent"},"cattle-cluster-agent")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#cattle-node-agent"},"cattle-node-agent"))),(0,l.kt)("p",null,"\u6709\u5173 Rancher Server \u5982\u4f55\u914d\u7f6e\u96c6\u7fa4\u5e76\u4e0e\u96c6\u7fa4\u901a\u4fe1\u7684\u6982\u8ff0\uff0c\u8bf7\u53c2\u9605",(0,l.kt)("a",{parentName:"p",href:"/zh/v2.6/pages-for-subheaders/rancher-manager-architecture"},"\u4ea7\u54c1\u67b6\u6784"),"\u3002"),(0,l.kt)("h3",{id:"cattle-cluster-agent"},"cattle-cluster-agent"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"cattle-cluster-agent")," \u7528\u4e8e\u8fde\u63a5 ",(0,l.kt)("a",{parentName:"p",href:"/zh/v2.6/pages-for-subheaders/launch-kubernetes-with-rancher"},"Rancher \u542f\u52a8\u7684 Kubernetes")," \u96c6\u7fa4\u7684 Kubernetes API\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"cattle-cluster-agent")," \u4f7f\u7528 Deployment \u8d44\u6e90\u8fdb\u884c\u90e8\u7f72\u3002"),(0,l.kt)("h3",{id:"cattle-node-agent"},"cattle-node-agent"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"cattle-node-agent")," \u7528\u4e8e\u5728\u6267\u884c\u96c6\u7fa4\u64cd\u4f5c\u65f6\u4e0e ",(0,l.kt)("a",{parentName:"p",href:"/zh/v2.6/pages-for-subheaders/launch-kubernetes-with-rancher"},"Rancher \u542f\u52a8\u7684 Kubernetes")," \u96c6\u7fa4\u4e2d\u7684\u8282\u70b9\u8fdb\u884c\u4ea4\u4e92\u3002\u96c6\u7fa4\u64cd\u4f5c\u5305\u62ec\u5347\u7ea7 Kubernetes \u7248\u672c\u548c\u521b\u5efa/\u6062\u590d etcd \u5feb\u7167\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"cattle-node-agent")," \u4f7f\u7528 DaemonSet \u8d44\u6e90\u8fdb\u884c\u90e8\u7f72\uff0c\u4ee5\u786e\u4fdd\u80fd\u5728\u6bcf\u4e2a\u8282\u70b9\u4e0a\u8fd0\u884c\u3002\u5f53 ",(0,l.kt)("inlineCode",{parentName:"p"},"cattle-cluster-agent")," \u4e0d\u53ef\u7528\u65f6\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"cattle-node-agent")," \u53ef\u4ee5\u4f5c\u4e3a\u5907\u9009\u65b9\u6848\uff0c\u7528\u6765\u8fde\u63a5 ",(0,l.kt)("a",{parentName:"p",href:"/zh/v2.6/pages-for-subheaders/launch-kubernetes-with-rancher"},"Rancher \u542f\u52a8\u7684 Kubernetes")," \u96c6\u7fa4\u7684 Kubernetes API\u3002"),(0,l.kt)("h3",{id:"\u8c03\u5ea6\u89c4\u5219"},"\u8c03\u5ea6\u89c4\u5219"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"cattle-cluster-agent")," \u4f7f\u7528\u5982\u4e0b\u4e00\u7ec4\u56fa\u5b9a\u7684\u5bb9\u5fcd\u5ea6\uff08\u5982\u679c\u96c6\u7fa4\u4e2d\u6ca1\u6709\u53ef\u89c1\u7684 controlplane \u8282\u70b9\uff09\uff0c\u6216\u57fa\u4e8e\u5e94\u7528\u4e8e controlplane \u8282\u70b9\u7684\u6c61\u70b9\u52a8\u6001\u6dfb\u52a0\u7684\u5bb9\u5fcd\u5ea6\u3002\u8fd9\u79cd\u7ed3\u6784\u5141\u8bb8",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/#taint-based-evictions"},"\u57fa\u4e8e\u6c61\u70b9\u8fdb\u884c\u9a71\u9010"),"\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"cattle-cluster-agent")," \u6b63\u5e38\u5de5\u4f5c\u3002\u9ed8\u8ba4\u7684\u5bb9\u5fcd\u5ea6\u5982\u4e0b\u3002\u5982\u679c\u96c6\u7fa4\u4e2d\u5b58\u5728 controlplane \u8282\u70b9\uff0c\u5219\u5bb9\u5fcd\u5ea6\u5c06\u66ff\u6362\u4e3a\u4e0e controlplane \u8282\u70b9\u7684\u6c61\u70b9\u5339\u914d\u7684\u5bb9\u5fcd\u5ea6\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7ec4\u4ef6"),(0,l.kt)("th",{parentName:"tr",align:null},"nodeAffinity nodeSelectorTerms"),(0,l.kt)("th",{parentName:"tr",align:null},"nodeSelector"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5bb9\u5fcd\u5ea6"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"cattle-cluster-agent")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"beta.kubernetes.io/os:NotIn:windows")),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"\u6ce8\u610f"),"\uff1a\u8fd9\u4e9b\u662f\u9ed8\u8ba4\u5bb9\u5fcd\u5ea6\uff0c\u5e76\u5c06\u66ff\u6362\u4e3a\u4e0e controlplane \u8282\u70b9\u7684\u6c61\u70b9\u5339\u914d\u7684\u5bb9\u5fcd\u5ea6\u3002",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"effect:NoSchedule"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"key:node-role.kubernetes.io/controlplane"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"value:true"),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"effect:NoSchedule"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"key:node-role.kubernetes.io/control-plane"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"operator:Exists"),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"effect:NoSchedule"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"key:node-role.kubernetes.io/master"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"operator:Exists"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"cattle-node-agent")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"beta.kubernetes.io/os:NotIn:windows")),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"operator:Exists"))))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"cattle-cluster-agent")," Deployment \u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"preferredDuringSchedulingIgnoredDuringExecution")," \u7684\u9996\u9009\u8c03\u5ea6\u89c4\u5219\uff0c\u503e\u5411\u4e8e\u5728\u5177\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"controlplane")," \u8282\u70b9\u7684\u8282\u70b9\u4e0a\u8fdb\u884c\u8c03\u5ea6\u3002\u5f53\u96c6\u7fa4\u4e2d\u6ca1\u6709\u53ef\u89c1\u7684 controlplane \u8282\u70b9\u65f6\uff08\u901a\u5e38\u662f\u4f7f\u7528",(0,l.kt)("a",{parentName:"p",href:"/zh/v2.6/pages-for-subheaders/set-up-clusters-from-hosted-kubernetes-providers"},"\u63d0\u4f9b\u5546\u6258\u7ba1\u7684 Kubernetes \u7684\u96c6\u7fa4"),"\uff09\uff0c\u4f60\u53ef\u4ee5\u5728\u8282\u70b9\u4e0a\u6dfb\u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},"cattle.io/cluster-agent=true")," \u6807\u7b7e\uff0c\u4ece\u800c\u4f18\u5148\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"cattle-cluster-agent")," pod \u8c03\u5ea6\u5230\u8be5\u8282\u70b9\u3002"),(0,l.kt)("p",null,"\u6709\u5173\u8c03\u5ea6\u89c4\u5219\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/assign-pod-node/"},"Kubernetes\uff1a\u5c06 Pod \u5206\u914d\u7ed9\u8282\u70b9"),"\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"preferredDuringSchedulingIgnoredDuringExecution")," \u914d\u7f6e\u5982\u4e0b\u8868\u6240\u793a\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u6743\u91cd"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8868\u8fbe\u5f0f"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'node-role.kubernetes.io/controlplane:In:"true"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'node-role.kubernetes.io/control-plane:In:"true"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'node-role.kubernetes.io/master:In:"true"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'cattle.io/cluster-agent:In:"true"'))))))}k.isMDXComponent=!0}}]);