"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[94019],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var g=r.createContext({}),c=function(e){var t=r.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(g.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,g=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(n),d=i,m=s["".concat(g,".").concat(d)]||s[d]||u[d]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=s;var l={};for(var g in t)hasOwnProperty.call(t,g)&&(l[g]=t[g]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},28945:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={title:"\u67b6\u6784"},o=void 0,l={unversionedId:"integrations-in-rancher/logging/logging-architecture",id:"version-2.6/integrations-in-rancher/logging/logging-architecture",title:"\u67b6\u6784",description:"\u672c\u8282\u4ecb\u7ecd\u4e86 Rancher Logging \u5e94\u7528\u7a0b\u5e8f\u7684\u67b6\u6784\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/integrations-in-rancher/logging/logging-architecture.md",sourceDirName:"integrations-in-rancher/logging",slug:"/integrations-in-rancher/logging/logging-architecture",permalink:"/zh/v2.6/integrations-in-rancher/logging/logging-architecture",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/integrations-in-rancher/logging/logging-architecture.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"2022\u5e7411\u670814\u65e5",frontMatter:{title:"\u67b6\u6784"},sidebar:"tutorialSidebar",previous:{title:"Rancher Logging \u96c6\u6210",permalink:"/zh/v2.6/pages-for-subheaders/logging"},next:{title:"\u8fc1\u79fb\u5230 Rancher 2.5 Logging",permalink:"/zh/v2.6/integrations-in-rancher/logging/migrate-to-rancher-v2.5+-logging"}},g={},c=[{value:"Banzai Cloud Logging Operator \u5de5\u4f5c\u539f\u7406",id:"banzai-cloud-logging-operator-\u5de5\u4f5c\u539f\u7406",level:3}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u672c\u8282\u4ecb\u7ecd\u4e86 Rancher Logging \u5e94\u7528\u7a0b\u5e8f\u7684\u67b6\u6784\u3002"),(0,i.kt)("p",null,"\u6709\u5173 Banzai Cloud Logging Operator \u5de5\u4f5c\u539f\u7406\u7684\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"https://banzaicloud.com/docs/one-eye/logging-operator/#architecture"},"\u5b98\u65b9\u6587\u6863"),"\u3002"),(0,i.kt)("h3",{id:"banzai-cloud-logging-operator-\u5de5\u4f5c\u539f\u7406"},"Banzai Cloud Logging Operator \u5de5\u4f5c\u539f\u7406"),(0,i.kt)("p",null,"Logging Operator \u81ea\u52a8\u90e8\u7f72\u548c\u914d\u7f6e Kubernetes \u65e5\u5fd7\u6d41\u6c34\u7ebf\u3002\u5b83\u4f1a\u5728\u6bcf\u4e2a\u8282\u70b9\u4e0a\u90e8\u7f72\u548c\u914d\u7f6e\u4e00\u4e2a Fluent Bit DaemonSet\uff0c\u4ece\u800c\u6536\u96c6\u8282\u70b9\u6587\u4ef6\u7cfb\u7edf\u4e2d\u7684\u5bb9\u5668\u548c\u5e94\u7528\u7a0b\u5e8f\u65e5\u5fd7\u3002"),(0,i.kt)("p",null,"Fluent Bit \u67e5\u8be2 Kubernetes API \u5e76\u4f7f\u7528 pod \u7684\u5143\u6570\u636e\u6765\u4e30\u5bcc\u65e5\u5fd7\uff0c\u7136\u540e\u5c06\u65e5\u5fd7\u548c\u5143\u6570\u636e\u90fd\u4f20\u8f93\u5230 Fluentd\u3002Fluentd \u4f1a\u63a5\u6536\u548c\u8fc7\u6ee4\u65e5\u5fd7\u5e76\u5c06\u65e5\u5fd7\u4f20\u8f93\u5230\u591a\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"Output"),"\u3002"),(0,i.kt)("p",null,"\u4ee5\u4e0b\u81ea\u5b9a\u4e49\u8d44\u6e90\u7528\u4e8e\u5b9a\u4e49\u4e86\u5982\u4f55\u8fc7\u6ee4\u65e5\u5fd7\u5e76\u5c06\u65e5\u5fd7\u53d1\u9001\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"Output"),"\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Flow")," \u662f\u4e00\u4e2a\u547d\u540d\u7a7a\u95f4\u81ea\u5b9a\u4e49\u8d44\u6e90\uff0c\u5b83\u4f7f\u7528\u8fc7\u6ee4\u5668\u548c\u9009\u62e9\u5668\u5c06\u65e5\u5fd7\u6d88\u606f\u8def\u7531\u5230\u5bf9\u5e94\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"Output"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ClusterFlow")," \u7528\u4e8e\u8def\u7531\u96c6\u7fa4\u7ea7\u522b\u7684\u65e5\u5fd7\u6d88\u606f\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Output")," \u662f\u4e00\u4e2a\u547d\u540d\u7a7a\u95f4\u8d44\u6e90\uff0c\u7528\u4e8e\u5b9a\u4e49\u53d1\u9001\u65e5\u5fd7\u6d88\u606f\u7684\u4f4d\u7f6e\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ClusterOutput")," \u5b9a\u4e49\u4e86\u4e00\u4e2a\u6240\u6709 ",(0,i.kt)("inlineCode",{parentName:"li"},"Flow")," \u548c ",(0,i.kt)("inlineCode",{parentName:"li"},"ClusterFlow")," \u90fd\u53ef\u7528\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"Output"),"\u3002")),(0,i.kt)("p",null,"\u6bcf\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"Flow")," \u90fd\u5fc5\u987b\u5f15\u7528\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"Output"),"\uff0c\u800c\u6bcf\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterFlow")," \u90fd\u5fc5\u987b\u5f15\u7528\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterOutput"),"\u3002"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://banzaicloud.com/docs/one-eye/logging-operator/#architecture"},"Banzai \u6587\u6863"),"\u4e2d\u7684\u4e0b\u56fe\u663e\u793a\u4e86\u65b0\u7684 Logging \u67b6\u6784\uff1a"),(0,i.kt)("figcaption",null,"Banzai Cloud Logging Operator \u5982\u4f55\u4e0e Fluentd \u548c Fluent Bit \u4e00\u8d77\u4f7f\u7528"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Banzai Cloud Logging Operator \u5982\u4f55\u4e0e Fluentd \u4e00\u8d77\u4f7f\u7528",src:n(87306).Z,width:"2835",height:"2732"})))}u.isMDXComponent=!0},87306:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/banzai-cloud-logging-operator-e275eba1f49ecdc1035cd63a54fdd576.png"}}]);