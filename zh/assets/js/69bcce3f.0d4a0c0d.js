"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[65990],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,g=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},78336:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"\u5f3a\u5236\u4f7f\u7528\u6a21\u677f"},i=void 0,l={unversionedId:"how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/enforce-templates",id:"how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/enforce-templates",title:"\u5f3a\u5236\u4f7f\u7528\u6a21\u677f",description:"\u672c\u8282\u4ecb\u7ecd\u6a21\u677f\u7ba1\u7406\u5458\u5982\u4f55\u5728 Rancher \u4e2d\u5f3a\u5236\u6267\u884c\u6a21\u677f\uff0c\u4ece\u800c\u9650\u5236\u7528\u6237\u5728\u6ca1\u6709\u6a21\u677f\u7684\u60c5\u51b5\u4e0b\u521b\u5efa\u96c6\u7fa4\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/enforce-templates.md",sourceDirName:"how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates",slug:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/enforce-templates",permalink:"/zh/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/enforce-templates",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/enforce-templates.md",tags:[],version:"current",lastUpdatedAt:1666730466,formattedLastUpdatedAt:"2022\u5e7410\u670825\u65e5",frontMatter:{title:"\u5f3a\u5236\u4f7f\u7528\u6a21\u677f"},sidebar:"tutorialSidebar",previous:{title:"\u521b\u5efa\u548c\u4fee\u6539 RKE \u6a21\u677f",permalink:"/zh/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/manage-rke1-templates"},next:{title:"\u8986\u76d6\u6a21\u677f\u8bbe\u7f6e",permalink:"/zh/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/override-template-settings"}},s={},p=[{value:"\u5f3a\u5236\u65b0\u96c6\u7fa4\u4f7f\u7528 RKE \u6a21\u677f",id:"\u5f3a\u5236\u65b0\u96c6\u7fa4\u4f7f\u7528-rke-\u6a21\u677f",level:2},{value:"\u7981\u7528 RKE \u6a21\u677f\u5f3a\u5236",id:"\u7981\u7528-rke-\u6a21\u677f\u5f3a\u5236",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u8282\u4ecb\u7ecd\u6a21\u677f\u7ba1\u7406\u5458\u5982\u4f55\u5728 Rancher \u4e2d\u5f3a\u5236\u6267\u884c\u6a21\u677f\uff0c\u4ece\u800c\u9650\u5236\u7528\u6237\u5728\u6ca1\u6709\u6a21\u677f\u7684\u60c5\u51b5\u4e0b\u521b\u5efa\u96c6\u7fa4\u3002"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cRancher \u4e2d\u7684\u4efb\u4f55\u666e\u901a\u7528\u6237\u90fd\u53ef\u4ee5\u521b\u5efa\u96c6\u7fa4\u3002\u4f46\u5f53\u5f00\u542f\u5f3a\u5236\u4f7f\u7528 RKE \u6a21\u677f\u65f6\uff0c\u6709\u4ee5\u4e0b\u7ea6\u675f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53ea\u6709\u7ba1\u7406\u5458\u624d\u80fd\u5728\u6ca1\u6709\u6a21\u677f\u7684\u60c5\u51b5\u4e0b\u521b\u5efa\u96c6\u7fa4\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6240\u6709\u666e\u901a\u7528\u6237\u5fc5\u987b\u4f7f\u7528 RKE \u6a21\u677f\u6765\u521b\u5efa\u65b0\u96c6\u7fa4\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u666e\u901a\u7528\u6237\u5728\u4e0d\u4f7f\u7528\u6a21\u677f\u7684\u60c5\u51b5\u4e0b\u65e0\u6cd5\u521b\u5efa\u96c6\u7fa4\u3002")),(0,a.kt)("p",null,"\u53ea\u6709\u7ba1\u200b\u200b\u7406\u5458",(0,a.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/creator-permissions#%E5%85%81%E8%AE%B8%E7%94%A8%E6%88%B7%E5%88%9B%E5%BB%BA%E6%A8%A1%E6%9D%BF"},"\u6388\u4e88\u6743\u9650"),"\u540e\uff0c\u7528\u6237\u624d\u80fd\u521b\u5efa\u65b0\u6a21\u677f\u3002"),(0,a.kt)("p",null,"\u4f7f\u7528 RKE \u6a21\u677f\u521b\u5efa\u96c6\u7fa4\u540e\uff0c\u96c6\u7fa4\u521b\u5efa\u8005\u65e0\u6cd5\u7f16\u8f91\u6a21\u677f\u4e2d\u5b9a\u4e49\u7684\u8bbe\u7f6e\u3002\u521b\u5efa\u96c6\u7fa4\u540e\u66f4\u6539\u8fd9\u4e9b\u8bbe\u7f6e\u7684\u552f\u4e00\u65b9\u6cd5\u662f",(0,a.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/apply-templates#%E6%9B%B4%E6%96%B0%E4%BD%BF%E7%94%A8-rke-%E6%A8%A1%E6%9D%BF%E5%88%9B%E5%BB%BA%E7%9A%84%E9%9B%86%E7%BE%A4"},"\u5c06\u96c6\u7fa4\u5347\u7ea7\u5230\u76f8\u540c\u6a21\u677f\u7684\u65b0\u4fee\u8ba2\u7248"),"\u3002\u5982\u679c\u96c6\u7fa4\u521b\u5efa\u8005\u60f3\u8981\u66f4\u6539\u6a21\u677f\u5b9a\u4e49\u7684\u8bbe\u7f6e\uff0c\u4ed6\u4eec\u9700\u8981\u8054\u7cfb\u6a21\u677f\u6240\u6709\u8005\u4ee5\u83b7\u53d6\u6a21\u677f\u7684\u65b0\u7248\u672c\u3002\u6709\u5173\u6a21\u677f\u4fee\u8ba2\u5982\u4f55\u5de5\u4f5c\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/manage-rke1-templates#%E6%9B%B4%E6%96%B0%E6%A8%A1%E6%9D%BF"},"\u4fee\u8ba2\u6a21\u677f"),"\u3002"),(0,a.kt)("h2",{id:"\u5f3a\u5236\u65b0\u96c6\u7fa4\u4f7f\u7528-rke-\u6a21\u677f"},"\u5f3a\u5236\u65b0\u96c6\u7fa4\u4f7f\u7528 RKE \u6a21\u677f"),(0,a.kt)("p",null,"\u8981\u6c42\u7528\u6237\u521b\u5efa\u65b0\u96c6\u7fa4\u65f6\u4f7f\u7528\u6a21\u677f\uff0c\u53ef\u4ee5\u786e\u4fdd",(0,a.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"\u666e\u901a\u7528\u6237"),"\u542f\u52a8\u7684\u4efb\u4f55\u96c6\u7fa4\u90fd\u4f7f\u7528\u7ecf\u8fc7\u7ba1\u7406\u5458\u5ba1\u6838\u7684 Kubernetes \u548c Rancher \u8bbe\u7f6e\u3002"),(0,a.kt)("p",null,"\u7ba1\u7406\u5458\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u6b65\u9aa4\u542f\u7528 RKE \u6a21\u677f\u5f3a\u5236\uff0c\u4ece\u800c\u8981\u6c42\u7528\u6237\u5fc5\u987b\u4f7f\u7528\u6a21\u677f\u521b\u5efa\u96c6\u7fa4\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5355\u51fb ",(0,a.kt)("strong",{parentName:"p"},"\u2630 > \u5168\u5c40\u8bbe\u7f6e"),"\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u8f6c\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster-template-enforcement")," \u8bbe\u7f6e\u3002\u5355\u51fb ",(0,a.kt)("strong",{parentName:"p"},"\u22ee > \u7f16\u8f91\u8bbe\u7f6e"),"\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5c06\u503c\u8bbe\u7f6e\u4e3a ",(0,a.kt)("strong",{parentName:"p"},"True")," \u5e76\u5355\u51fb",(0,a.kt)("strong",{parentName:"p"},"\u4fdd\u5b58"),"\u3002"),(0,a.kt)("admonition",{parentName:"li",title:"\u91cd\u8981\u63d0\u793a\uff1a",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u5982\u679c\u7ba1\u7406\u5458\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster-template-enforcement")," \u8bbe\u7f6e\u4e3a ",(0,a.kt)("b",null,"True"),"\uff0c\u8fd8\u9700\u8981\u4e0e\u7528\u6237\u5171\u4eab ",(0,a.kt)("inlineCode",{parentName:"p"},"clusterTemplates"),"\uff0c\u4ee5\u4fbf\u7528\u6237\u53ef\u4ee5\u9009\u62e9\u5176\u4e2d\u4e00\u4e2a\u6a21\u677f\u6765\u521b\u5efa\u96c6\u7fa4\u3002")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u9664\u975e\u521b\u5efa\u8005\u662f\u7ba1\u7406\u5458\uff0c\u5426\u5219 Rancher \u914d\u7f6e\u7684\u6240\u6709\u96c6\u7fa4\u90fd\u5fc5\u987b\u4f7f\u7528\u6a21\u677f\u3002"),(0,a.kt)("h2",{id:"\u7981\u7528-rke-\u6a21\u677f\u5f3a\u5236"},"\u7981\u7528 RKE \u6a21\u677f\u5f3a\u5236"),(0,a.kt)("p",null,"\u7ba1\u7406\u5458\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u6b65\u9aa4\u5173\u95ed RKE \u6a21\u677f\u5f3a\u5236\uff0c\u4ece\u800c\u5141\u8bb8\u7528\u6237\u5728\u6ca1\u6709 RKE \u6a21\u677f\u7684\u60c5\u51b5\u4e0b\u521b\u5efa\u65b0\u96c6\u7fa4\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > \u5168\u5c40\u8bbe\u7f6e"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u8f6c\u5230 ",(0,a.kt)("inlineCode",{parentName:"li"},"cluster-template-enforcement")," \u8bbe\u7f6e\u3002\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"\u22ee > \u7f16\u8f91\u8bbe\u7f6e"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5c06\u503c\u8bbe\u7f6e\u4e3a ",(0,a.kt)("strong",{parentName:"li"},"False")," \u5e76\u5355\u51fb",(0,a.kt)("strong",{parentName:"li"},"\u4fdd\u5b58"),"\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u5728 Rancher \u4e2d\u521b\u5efa\u96c6\u7fa4\u65f6\uff0c\u7528\u6237\u4e0d\u9700\u8981\u4f7f\u7528\u6a21\u677f\u3002"))}c.isMDXComponent=!0}}]);