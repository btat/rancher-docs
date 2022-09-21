"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[68253],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return h}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),l=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=l(e.components);return n.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,c=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=l(t),h=a,m=f["".concat(u,".").concat(h)]||f[h]||p[h]||c;return t?n.createElement(m,o(o({ref:r},s),{},{components:t})):n.createElement(m,o({ref:r},s))}));function h(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var c=t.length,o=new Array(c);o[0]=f;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<c;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},71544:function(e,r,t){t.r(r),t.d(r,{assets:function(){return s},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var n=t(87462),a=t(63366),c=(t(67294),t(3905)),o=["components"],i={slug:"/",weight:1,title:"Rancher 2.6",shortTitle:"Rancher 2.6\uff08\u6700\u65b0\uff09",description:"Rancher \u5728 Kubernetes \u4e4b\u4e0a\u6dfb\u52a0\u4e86\u65b0\u7684\u529f\u80fd\uff0c\u8ba9\u4f60\u4e00\u7ad9\u5f0f\u7ba1\u7406\u4e0a\u767e\u4e2a\u96c6\u7fa4\uff0c\u7edf\u4e00 RBAC\uff0c\u5f00\u542f\u76d1\u63a7\u548c\u544a\u8b66\u3002\u4e86\u89e3\u66f4\u591a\u3002",metaTitle:"Rancher 2.6 \u6587\u6863\uff1a\u4e86\u89e3\u65b0\u529f\u80fd",metaDescription:"Rancher 2 \u5728 Kubernetes \u4e4b\u4e0a\u6dfb\u52a0\u4e86\u65b0\u7684\u529f\u80fd\uff0c\u8ba9\u4f60\u4e00\u7ad9\u5f0f\u7ba1\u7406\u4e0a\u767e\u4e2a\u96c6\u7fa4\uff0c\u7edf\u4e00 RBAC\uff0c\u5f00\u542f\u76d1\u63a7\u548c\u544a\u8b66\u3002\u4e86\u89e3\u66f4\u591a\u3002",insertOneSix:!1,ctaBanner:0,aliases:["/rancher/v2.x/en/"]},u=void 0,l={unversionedId:"rancher-manager",id:"rancher-manager",title:"Rancher 2.6",description:"Rancher \u5728 Kubernetes \u4e4b\u4e0a\u6dfb\u52a0\u4e86\u65b0\u7684\u529f\u80fd\uff0c\u8ba9\u4f60\u4e00\u7ad9\u5f0f\u7ba1\u7406\u4e0a\u767e\u4e2a\u96c6\u7fa4\uff0c\u7edf\u4e00 RBAC\uff0c\u5f00\u542f\u76d1\u63a7\u548c\u544a\u8b66\u3002\u4e86\u89e3\u66f4\u591a\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/rancher-manager.md",sourceDirName:".",slug:"/",permalink:"/zh/",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/rancher-manager.md",tags:[],version:"current",lastUpdatedAt:1663710212,formattedLastUpdatedAt:"2022/9/20",frontMatter:{slug:"/",weight:1,title:"Rancher 2.6",shortTitle:"Rancher 2.6\uff08\u6700\u65b0\uff09",description:"Rancher \u5728 Kubernetes \u4e4b\u4e0a\u6dfb\u52a0\u4e86\u65b0\u7684\u529f\u80fd\uff0c\u8ba9\u4f60\u4e00\u7ad9\u5f0f\u7ba1\u7406\u4e0a\u767e\u4e2a\u96c6\u7fa4\uff0c\u7edf\u4e00 RBAC\uff0c\u5f00\u542f\u76d1\u63a7\u548c\u544a\u8b66\u3002\u4e86\u89e3\u66f4\u591a\u3002",metaTitle:"Rancher 2.6 \u6587\u6863\uff1a\u4e86\u89e3\u65b0\u529f\u80fd",metaDescription:"Rancher 2 \u5728 Kubernetes \u4e4b\u4e0a\u6dfb\u52a0\u4e86\u65b0\u7684\u529f\u80fd\uff0c\u8ba9\u4f60\u4e00\u7ad9\u5f0f\u7ba1\u7406\u4e0a\u767e\u4e2a\u96c6\u7fa4\uff0c\u7edf\u4e00 RBAC\uff0c\u5f00\u542f\u76d1\u63a7\u548c\u544a\u8b66\u3002\u4e86\u89e3\u66f4\u591a\u3002",insertOneSix:!1,ctaBanner:0,aliases:["/rancher/v2.x/en/"]},sidebar:"tutorialSidebar",next:{title:"\u5f00\u59cb\u4f7f\u7528",permalink:"/zh/getting-started"}},s={},p=[],f={toc:p};function h(e){var r=e.components,t=(0,a.Z)(e,o);return(0,c.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Rancher \u662f\u4e00\u4e2a Kubernetes \u7ba1\u7406\u5de5\u5177\uff0c\u8ba9\u4f60\u80fd\u5728\u4efb\u4f55\u5730\u65b9\u548c\u4efb\u4f55\u63d0\u4f9b\u5546\u4e0a\u90e8\u7f72\u548c\u8fd0\u884c\u96c6\u7fa4\u3002"),(0,c.kt)("p",null,"Rancher \u53ef\u4ee5\u521b\u5efa\u6765\u81ea Kubernetes \u6258\u7ba1\u670d\u52a1\u63d0\u4f9b\u5546\u7684\u96c6\u7fa4\uff0c\u521b\u5efa\u8282\u70b9\u5e76\u5b89\u88c5 Kubernetes\uff0c\u6216\u8005\u5bfc\u5165\u5728\u4efb\u4f55\u5730\u65b9\u8fd0\u884c\u7684\u73b0\u6709 Kubernetes \u96c6\u7fa4\u3002"),(0,c.kt)("p",null,"Rancher \u57fa\u4e8e Kubernetes \u6dfb\u52a0\u4e86\u65b0\u7684\u529f\u80fd\uff0c\u5305\u62ec\u7edf\u4e00\u6240\u6709\u96c6\u7fa4\u7684\u8eab\u4efd\u9a8c\u8bc1\u548c RBAC\uff0c\u8ba9\u7cfb\u7edf\u7ba1\u7406\u5458\u4ece\u4e00\u4e2a\u4f4d\u7f6e\u63a7\u5236\u5168\u90e8\u96c6\u7fa4\u7684\u8bbf\u95ee\u3002"),(0,c.kt)("p",null,"\u6b64\u5916\uff0cRancher \u53ef\u4ee5\u4e3a\u96c6\u7fa4\u548c\u8d44\u6e90\u63d0\u4f9b\u66f4\u7cbe\u7ec6\u7684\u76d1\u63a7\u548c\u544a\u8b66\uff0c\u5c06\u65e5\u5fd7\u53d1\u9001\u5230\u5916\u90e8\u63d0\u4f9b\u5546\uff0c\u5e76\u901a\u8fc7\u5e94\u7528\u5546\u5e97\uff08Application Catalog\uff09\u76f4\u63a5\u96c6\u6210 Helm\u3002\u5982\u679c\u4f60\u62e5\u6709\u5916\u90e8 CI/CD \u7cfb\u7edf\uff0c\u4f60\u53ef\u4ee5\u5c06\u5176\u4e0e Rancher \u5bf9\u63a5\u3002\u6ca1\u6709\u7684\u8bdd\uff0c\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528 Rancher \u63d0\u4f9b\u7684 Fleet \u81ea\u52a8\u90e8\u7f72\u548c\u5347\u7ea7\u5de5\u4f5c\u8d1f\u8f7d\u3002"),(0,c.kt)("p",null,"Rancher \u662f\u4e00\u4e2a ",(0,c.kt)("em",{parentName:"p"},"\u5168\u6808\u5f0f")," \u7684 Kubernetes \u5bb9\u5668\u7ba1\u7406\u5e73\u53f0\uff0c\u4e3a\u4f60\u63d0\u4f9b\u5728\u4efb\u4f55\u5730\u65b9\u90fd\u80fd\u6210\u529f\u8fd0\u884c Kubernetes \u7684\u5de5\u5177\u3002"))}h.isMDXComponent=!0}}]);