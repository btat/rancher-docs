"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[38296],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,d=m["".concat(l,".").concat(u)]||m[u]||k[u]||p;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,o=new Array(p);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<p;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},62541:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return k}});var a=n(87462),r=n(63366),p=(n(67294),n(3905)),o=["components"],i={title:"OPA Gatekeeper",weight:16},l=void 0,s={unversionedId:"explanations/integrations-in-rancher/opa-gatekeeper",id:"explanations/integrations-in-rancher/opa-gatekeeper",title:"OPA Gatekeeper",description:"\u4e3a\u4e86\u786e\u4fdd\u4e00\u81f4\u6027\u548c\u5408\u89c4\u6027\uff0c\u6bcf\u4e2a\u7ec4\u7ec7\u90fd\u9700\u8981\u80fd\u591f\u4ee5\u81ea\u52a8\u5316\u7684\u65b9\u5f0f\u5728\u73af\u5883\u4e2d\u5b9a\u4e49\u548c\u6267\u884c\u7b56\u7565\u3002OPA\uff08Open Policy Agent\uff09 \u662f\u4e00\u4e2a\u7b56\u7565\u5f15\u64ce\uff0c\u7528\u4e8e\u57fa\u4e8e\u7b56\u7565\u63a7\u5236\u4e91\u539f\u751f\u73af\u5883\u3002Rancher \u652f\u6301\u5728 Kubernetes \u96c6\u7fa4\u4e2d\u542f\u7528 OPA Gatekeeper\uff0c\u5e76\u4e14\u8fd8\u5b89\u88c5\u4e86\u4e00\u4e9b\u5185\u7f6e\u7684\u7b56\u7565\u5b9a\u4e49\uff08\u4e5f\u79f0\u4e3a\u7ea6\u675f\u6a21\u677f\uff09\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/explanations/integrations-in-rancher/opa-gatekeeper.md",sourceDirName:"explanations/integrations-in-rancher",slug:"/explanations/integrations-in-rancher/opa-gatekeeper",permalink:"/zh/explanations/integrations-in-rancher/opa-gatekeeper",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/explanations/integrations-in-rancher/opa-gatekeeper.md",tags:[],version:"current",lastUpdatedAt:1663710212,formattedLastUpdatedAt:"2022/9/20",frontMatter:{title:"OPA Gatekeeper",weight:16},sidebar:"tutorialSidebar",previous:{title:"NeuVector \u96c6\u6210",permalink:"/zh/explanations/integrations-in-rancher/neuvector"},next:{title:"\u5e38\u89c1\u95ee\u9898",permalink:"/zh/faq"}},c={},k=[{value:"OPA Gatekeeper \u96c6\u6210\u7684\u5de5\u4f5c\u539f\u7406",id:"opa-gatekeeper-\u96c6\u6210\u7684\u5de5\u4f5c\u539f\u7406",level:2},{value:"\u5728\u96c6\u7fa4\u4e2d\u542f\u7528 OPA Gatekeeper",id:"\u5728\u96c6\u7fa4\u4e2d\u542f\u7528-opa-gatekeeper",level:2},{value:"\u542f\u7528 OPA Gatekeeper",id:"\u542f\u7528-opa-gatekeeper",level:3},{value:"\u7ea6\u675f\u6a21\u677f",id:"\u7ea6\u675f\u6a21\u677f",level:2},{value:"\u521b\u5efa\u548c\u914d\u7f6e\u7ea6\u675f",id:"\u521b\u5efa\u548c\u914d\u7f6e\u7ea6\u675f",level:2},{value:"\u4f7f Rancher \u7684 System \u547d\u540d\u7a7a\u95f4\u4e0d\u53d7\u7ea6\u675f",id:"\u4f7f-rancher-\u7684-system-\u547d\u540d\u7a7a\u95f4\u4e0d\u53d7\u7ea6\u675f",level:3},{value:"\u5728\u96c6\u7fa4\u4e2d\u5b9e\u65bd\u7ea6\u675f",id:"\u5728\u96c6\u7fa4\u4e2d\u5b9e\u65bd\u7ea6\u675f",level:2},{value:"\u96c6\u7fa4\u4e2d\u7684\u5ba1\u8ba1\u548c\u8fdd\u89c4",id:"\u96c6\u7fa4\u4e2d\u7684\u5ba1\u8ba1\u548c\u8fdd\u89c4",level:2},{value:"\u7981\u7528 Gatekeeper",id:"\u7981\u7528-gatekeeper",level:2}],m={toc:k};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,p.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"\u4e3a\u4e86\u786e\u4fdd\u4e00\u81f4\u6027\u548c\u5408\u89c4\u6027\uff0c\u6bcf\u4e2a\u7ec4\u7ec7\u90fd\u9700\u8981\u80fd\u591f\u4ee5\u81ea\u52a8\u5316\u7684\u65b9\u5f0f\u5728\u73af\u5883\u4e2d\u5b9a\u4e49\u548c\u6267\u884c\u7b56\u7565\u3002",(0,p.kt)("a",{parentName:"p",href:"https://www.openpolicyagent.org/"},"OPA\uff08Open Policy Agent\uff09")," \u662f\u4e00\u4e2a\u7b56\u7565\u5f15\u64ce\uff0c\u7528\u4e8e\u57fa\u4e8e\u7b56\u7565\u63a7\u5236\u4e91\u539f\u751f\u73af\u5883\u3002Rancher \u652f\u6301\u5728 Kubernetes \u96c6\u7fa4\u4e2d\u542f\u7528 OPA Gatekeeper\uff0c\u5e76\u4e14\u8fd8\u5b89\u88c5\u4e86\u4e00\u4e9b\u5185\u7f6e\u7684\u7b56\u7565\u5b9a\u4e49\uff08\u4e5f\u79f0\u4e3a\u7ea6\u675f\u6a21\u677f\uff09\u3002"),(0,p.kt)("p",null,"OPA \u63d0\u4f9b\u4e86\u4e00\u79cd\u9ad8\u7ea7\u58f0\u660e\u6027\u8bed\u8a00\uff0c\u53ef\u4ee5\u8ba9\u4f60\u5c06\u7b56\u7565\u6307\u5b9a\u4e3a\u4ee3\u7801\uff0c\u8fd8\u80fd\u6269\u5c55\u7b80\u5355\u7684 API\uff0c\u4ece\u800c\u51cf\u8f7b\u7b56\u7565\u51b3\u7b56\u7684\u8d1f\u62c5\u3002"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/open-policy-agent/gatekeeper"},"OPA Gatekeeper")," \u662f\u4e00\u4e2a\u63d0\u4f9b OPA \u548c Kubernetes \u96c6\u6210\u7684\u9879\u76ee\u3002OPA Gatekeeper \u63d0\u4f9b\uff1a"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u53ef\u6269\u5c55\u7684\u53c2\u6570\u5316\u7b56\u7565\u5e93\u3002"),(0,p.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u5b9e\u4f8b\u5316\u7b56\u7565\u5e93\u7684\u539f\u751f Kubernetes CRD\uff0c\u4e5f\u79f0\u4e3a\u201c\u7ea6\u675f\u201d\u3002"),(0,p.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u6269\u5c55\u7b56\u7565\u5e93\u7684\u539f\u751f Kubernetes CRD\uff0c\u4e5f\u79f0\u4e3a\u201c\u7ea6\u675f\u6a21\u677f\u201d\u3002"),(0,p.kt)("li",{parentName:"ul"},"\u5ba1\u8ba1\u529f\u80fd\u3002")),(0,p.kt)("p",null,"\u8981\u4e86\u89e3\u66f4\u591a\u5173\u4e8e OPA \u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,p.kt)("a",{parentName:"p",href:"https://www.openpolicyagent.org/docs/latest/"},"\u5b98\u65b9\u6587\u6863"),"\u3002"),(0,p.kt)("h2",{id:"opa-gatekeeper-\u96c6\u6210\u7684\u5de5\u4f5c\u539f\u7406"},"OPA Gatekeeper \u96c6\u6210\u7684\u5de5\u4f5c\u539f\u7406"),(0,p.kt)("p",null,"Kubernetes \u652f\u6301\u901a\u8fc7\u51c6\u5165\u63a7\u5236\u5668\uff08\u51c6\u5165\u63a7\u5236\u5668\uff09webhook \u6765\u6269\u5c55 API Server \u7684\u529f\u80fd\uff0c\u521b\u5efa\u3001\u66f4\u65b0\u6216\u5220\u9664\u8d44\u6e90\u65f6\u90fd\u4f1a\u8c03\u7528\u8fd9\u4e9b webhook\u3002Gatekeeper \u4f5c\u4e3a\u9a8c\u8bc1 webhook \u5b89\u88c5\uff0c\u5e76\u6267\u884c\u7531 Kubernetes CRD\uff08Custom Resource Definition\uff09\u5b9a\u4e49\u7684\u7b56\u7565\u3002\u9664\u4e86\u4f7f\u7528\u51c6\u5165\u63a7\u5236\u4e4b\u5916\uff0cGatekeeper \u8fd8\u80fd\u5ba1\u8ba1 Kubernetes \u96c6\u7fa4\u4e2d\u7684\u73b0\u6709\u8d44\u6e90\uff0c\u5e76\u5bf9\u8fdd\u53cd\u5f53\u524d\u7b56\u7565\u7684\u60c5\u51b5\u8fdb\u884c\u6807\u8bb0\u3002"),(0,p.kt)("p",null,"OPA Gatekeeper \u7531 Rancher \u7684 Helm system Chart \u63d0\u4f9b\uff0c\u5b83\u5b89\u88c5\u5728\u540d\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"gatekeeper-system")," \u7684\u547d\u540d\u7a7a\u95f4\u4e2d\u3002"),(0,p.kt)("h2",{id:"\u5728\u96c6\u7fa4\u4e2d\u542f\u7528-opa-gatekeeper"},"\u5728\u96c6\u7fa4\u4e2d\u542f\u7528 OPA Gatekeeper"),(0,p.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,p.kt)("div",{parentName:"div",className:"admonition-heading"},(0,p.kt)("h5",{parentName:"div"},(0,p.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,p.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,p.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,p.kt)("div",{parentName:"div",className:"admonition-content"},(0,p.kt)("p",{parentName:"div"},"Rancher 2.5 \u6539\u8fdb\u4e86 OPA Gatekeeper \u5e94\u7528\u3002\u65e0\u6cd5\u4ece Rancher 2.4 \u5347\u7ea7\u5230 Rancher 2.5 \u4e2d\u7684\u65b0\u7248\u672c\u3002\u5982\u679c\u4f60\u5728 Rancher 2.4 \u4e2d\u5b89\u88c5\u4e86 OPA Gatekeeper\uff0c\u5219\u9700\u8981\u5728\u65e7 UI \u4e2d\u5378\u8f7d OPA Gatekeeper \u53ca\u5176 CRD\uff0c\u7136\u540e\u5728 Rancher 2.5 \u4e2d\u91cd\u65b0\u5b89\u88c5\u5b83\u3002\u5982\u9700\u5378\u8f7d CRD\uff0c\u8bf7\u5728 kubectl \u63a7\u5236\u53f0\u4e2d\u8fd0\u884c ",(0,p.kt)("inlineCode",{parentName:"p"},"kubectl delete crd configs.config.gatekeeper.sh constrainttemplates.templates.gatekeeper.sh")," \u547d\u4ee4\u3002"))),(0,p.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,p.kt)("div",{parentName:"div",className:"admonition-heading"},(0,p.kt)("h5",{parentName:"div"},(0,p.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,p.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,p.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u5148\u51b3\u6761\u4ef6\uff1a")),(0,p.kt)("div",{parentName:"div",className:"admonition-content"},(0,p.kt)("p",{parentName:"div"},"\u53ea\u6709\u7ba1\u7406\u5458\u548c\u96c6\u7fa4\u6240\u6709\u8005\u624d\u80fd\u542f\u7528 OPA Gatekeeper\u3002"))),(0,p.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728",(0,p.kt)("strong",{parentName:"p"},"\u5e94\u7528 & \u5e94\u7528\u5e02\u573a"),"\u9875\u9762\u5b89\u88c5 OPA Gatekeeper Helm Chart\u3002"),(0,p.kt)("h3",{id:"\u542f\u7528-opa-gatekeeper"},"\u542f\u7528 OPA Gatekeeper"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,p.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,p.kt)("li",{parentName:"ol"},"\u5728",(0,p.kt)("strong",{parentName:"li"},"\u96c6\u7fa4"),"\u9875\u9762\u4e2d\uff0c\u8f6c\u5230\u8981\u542f\u7528 OPA Gatekeeper \u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,p.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,p.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u70b9\u51fb",(0,p.kt)("strong",{parentName:"li"},"\u5e94\u7528 & \u5e94\u7528\u5e02\u573a"),"\u3002"),(0,p.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,p.kt)("strong",{parentName:"li"},"Charts")," \u5e76\u70b9\u51fb ",(0,p.kt)("strong",{parentName:"li"},"OPA Gatekeeper"),"\u3002"),(0,p.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,p.kt)("strong",{parentName:"li"},"\u5b89\u88c5"),"\u3002")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u5df2\u5c06 OPA Gatekeeper \u90e8\u7f72\u5230\u4f60\u7684 Kubernetes \u96c6\u7fa4\u3002"),(0,p.kt)("h2",{id:"\u7ea6\u675f\u6a21\u677f"},"\u7ea6\u675f\u6a21\u677f"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/open-policy-agent/gatekeeper#constraint-templates"},"\u7ea6\u675f\u6a21\u677f"),"\u662f Kubernetes \u81ea\u5b9a\u4e49\u8d44\u6e90\uff0c\u7528\u4e8e\u5b9a\u4e49\u8981\u7531 Gatekeeper \u5e94\u7528\u7684 OPA \u7b56\u7565\u7684\u67b6\u6784\u548c Rego \u903b\u8f91\u3002\u6709\u5173 Rego \u7b56\u7565\u8bed\u8a00\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,p.kt)("a",{parentName:"p",href:"https://www.openpolicyagent.org/docs/latest/policy-language/"},"\u5b98\u65b9\u6587\u6863"),"\u3002"),(0,p.kt)("p",null,"\u542f\u7528 OPA Gatekeeper \u540e\uff0cRancher \u9ed8\u8ba4\u4f1a\u5b89\u88c5\u4e00\u4e9b\u6a21\u677f\u3002"),(0,p.kt)("p",null,"\u8981\u5217\u51fa\u96c6\u7fa4\u4e2d\u5b89\u88c5\u7684\u7ea6\u675f\u6a21\u677f\uff0c\u8bf7\u8f6c\u5230 OPA Gatekeeper \u4e0b\u7684\u5de6\u4fa7\u83dc\u5355\uff0c\u7136\u540e\u5355\u51fb",(0,p.kt)("strong",{parentName:"p"},"\u6a21\u677f"),"\u3002"),(0,p.kt)("p",null,"Rancher \u8fd8\u652f\u6301\u901a\u8fc7\u5bfc\u5165 YAML \u5b9a\u4e49\u6765\u521b\u5efa\u4f60\u81ea\u5df1\u7684\u7ea6\u675f\u6a21\u677f\u3002"),(0,p.kt)("h2",{id:"\u521b\u5efa\u548c\u914d\u7f6e\u7ea6\u675f"},"\u521b\u5efa\u548c\u914d\u7f6e\u7ea6\u675f"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/open-policy-agent/gatekeeper#constraints"},"\u7ea6\u675f"),"\u662f Kubernetes \u81ea\u5b9a\u4e49\u8d44\u6e90\uff0c\u7528\u4e8e\u5b9a\u4e49\u8981\u5e94\u7528\u7ea6\u675f\u6a21\u677f\u7684\u5bf9\u8c61\u8303\u56f4\u3002\u7ea6\u675f\u6a21\u677f\u548c\u7ea6\u675f\u5171\u540c\u5b9a\u4e49\u4e00\u4e2a\u5b8c\u6574\u7684\u7b56\u7565\u3002"),(0,p.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,p.kt)("div",{parentName:"div",className:"admonition-heading"},(0,p.kt)("h5",{parentName:"div"},(0,p.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,p.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,p.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u5148\u51b3\u6761\u4ef6\uff1a")),(0,p.kt)("div",{parentName:"div",className:"admonition-content"},(0,p.kt)("p",{parentName:"div"},"\u96c6\u7fa4\u4e2d\u5df2\u542f\u7528 OPA Gatekeeper\u3002"))),(0,p.kt)("p",null,"\u8981\u5217\u51fa\u5df2\u5b89\u88c5\u7684\u7ea6\u675f\uff0c\u8bf7\u8f6c\u5230 OPA Gatekeeper \u4e0b\u7684\u5de6\u4fa7\u83dc\u5355\uff0c\u7136\u540e\u5355\u51fb",(0,p.kt)("strong",{parentName:"p"},"\u7ea6\u675f"),"\u3002"),(0,p.kt)("p",null,"\u53ef\u4ee5\u4ece\u7ea6\u675f\u6a21\u677f\u521b\u5efa\u65b0\u7684\u7ea6\u675f\u3002"),(0,p.kt)("p",null,"Rancher \u652f\u6301\u901a\u8fc7\u4f7f\u7528\u65b9\u4fbf\u7684\u8868\u5355\u6765\u521b\u5efa\u7ea6\u675f\uff0c\u4f60\u53ef\u4ee5\u5728\u8be5\u8868\u5355\u4e2d\u8f93\u5165\u5404\u79cd\u7ea6\u675f\u5b57\u6bb5\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u4ee5 YAML \u6587\u4ef6\u7f16\u8f91"),"\u9009\u9879\u4e5f\u53ef\u4ee5\u7528\u4e8e\u914d\u7f6e\u7ea6\u675f\u7684 YAML \u5b9a\u4e49\u3002"),(0,p.kt)("h3",{id:"\u4f7f-rancher-\u7684-system-\u547d\u540d\u7a7a\u95f4\u4e0d\u53d7\u7ea6\u675f"},"\u4f7f Rancher \u7684 System \u547d\u540d\u7a7a\u95f4\u4e0d\u53d7\u7ea6\u675f"),(0,p.kt)("p",null,"\u521b\u5efa\u7ea6\u675f\u65f6\uff0c\u8bf7\u786e\u4fdd\u8be5\u7ea6\u675f\u4e0d\u5e94\u7528\u4e8e\u4efb\u4f55 Rancher \u6216 Kubernetes System \u547d\u540d\u7a7a\u95f4\u3002\u5982\u679c\u4e0d\u6392\u9664 System \u547d\u540d\u7a7a\u95f4\uff0c\u5219\u53ef\u80fd\u4f1a\u51fa\u73b0 system \u547d\u540d\u7a7a\u95f4\u4e0b\u7684\u8bb8\u591a\u8d44\u6e90\u88ab\u6807\u8bb0\u4e3a\u8fdd\u53cd\u7ea6\u675f\u3002"),(0,p.kt)("p",null,"\u8981\u8ba9\u7ea6\u675f\u4ec5\u9650\u5236\u7528\u6237\u547d\u540d\u7a7a\u95f4\uff0c\u8bf7\u5728\u7ea6\u675f\u7684",(0,p.kt)("strong",{parentName:"p"},"\u5339\u914d"),"\u5b57\u6bb5\u4e0b\u6307\u5b9a\u8fd9\u4e9b\u547d\u540d\u7a7a\u95f4\u3002"),(0,p.kt)("p",null,"\u6b64\u5916\uff0c\u8be5\u7ea6\u675f\u53ef\u80fd\u4f1a\u5e72\u6270\u5176\u4ed6 Rancher \u529f\u80fd\u5e76\u62d2\u7edd\u90e8\u7f72\u7cfb\u7edf\u5de5\u4f5c\u8d1f\u8f7d\u3002\u4e3a\u907f\u514d\u8fd9\u79cd\u60c5\u51b5\uff0c\u8bf7\u4ece\u4f60\u7684\u7ea6\u675f\u4e2d\u6392\u9664\u6240\u6709 Rancher \u7279\u5b9a\u7684\u547d\u540d\u7a7a\u95f4\u3002"),(0,p.kt)("h2",{id:"\u5728\u96c6\u7fa4\u4e2d\u5b9e\u65bd\u7ea6\u675f"},"\u5728\u96c6\u7fa4\u4e2d\u5b9e\u65bd\u7ea6\u675f"),(0,p.kt)("p",null,"\u5982\u679c",(0,p.kt)("strong",{parentName:"p"},"\u6267\u884c\u52a8\u4f5c"),"\u4e3a ",(0,p.kt)("strong",{parentName:"p"},"Deny"),"\uff0c\u7ea6\u675f\u4f1a\u7acb\u5373\u542f\u7528\uff0c\u5e76\u62d2\u7edd\u4efb\u4f55\u8fdd\u53cd\u7b56\u7565\u7684\u8bf7\u6c42\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6267\u884c\u7684\u503c\u4e3a ",(0,p.kt)("strong",{parentName:"p"},"Deny"),"\u3002"),(0,p.kt)("p",null,"\u5982\u679c",(0,p.kt)("strong",{parentName:"p"},"\u6267\u884c\u52a8\u4f5c")," \u4e3a ",(0,p.kt)("strong",{parentName:"p"},"Dryrun"),"\uff0c\u8fdd\u53cd\u7b56\u7565\u7684\u8d44\u6e90\u4ec5\u4f1a\u8bb0\u5f55\u5728\u7ea6\u675f\u7684\u72b6\u6001\u5b57\u6bb5\u4e2d\u3002"),(0,p.kt)("p",null,"\u8981\u5f3a\u5236\u6267\u884c\u7ea6\u675f\uff0c\u8bf7\u4f7f\u7528\u8868\u5355\u521b\u5efa\u7ea6\u675f\u3002\u5728",(0,p.kt)("strong",{parentName:"p"},"\u6267\u884c\u52a8\u4f5c"),"\u5b57\u6bb5\u4e2d\uff0c\u9009\u62e9 ",(0,p.kt)("strong",{parentName:"p"},"Deny"),"\u3002"),(0,p.kt)("h2",{id:"\u96c6\u7fa4\u4e2d\u7684\u5ba1\u8ba1\u548c\u8fdd\u89c4"},"\u96c6\u7fa4\u4e2d\u7684\u5ba1\u8ba1\u548c\u8fdd\u89c4"),(0,p.kt)("p",null,"OPA Gatekeeper \u8fd0\u884c\u5b9a\u671f\u5ba1\u8ba1\uff0c\u4ee5\u68c0\u67e5\u73b0\u6709\u8d44\u6e90\u662f\u5426\u8fdd\u53cd\u5f3a\u5236\u6267\u884c\u7684\u7ea6\u675f\u3002\u4f60\u53ef\u4ee5\u5728\u5b89\u88c5 Gatekeeper \u65f6\u914d\u7f6e\u5ba1\u8ba1\u95f4\u9694\uff08\u9ed8\u8ba4 300 \u79d2\uff09\u3002"),(0,p.kt)("p",null,"Gatekeeper \u9875\u9762\u4e0a\u5217\u51fa\u4e86\u8fdd\u53cd\u5df2\u5b9a\u4e49\u7684\u7ea6\u675f\u7684\u60c5\u51b5\u3002"),(0,p.kt)("p",null,"\u6b64\u5916\uff0c\u4f60\u4e5f\u53ef\u4ee5\u5728",(0,p.kt)("strong",{parentName:"p"},"\u7ea6\u675f"),"\u9875\u9762\u4e2d\u627e\u5230\u8fdd\u53cd\u7ea6\u675f\u7684\u6570\u91cf\u3002"),(0,p.kt)("p",null,"\u6bcf\u4e2a\u7ea6\u675f\u7684\u8be6\u7ec6\u4fe1\u606f\u89c6\u56fe\u5217\u51fa\u4e86\u8fdd\u53cd\u7ea6\u675f\u7684\u8d44\u6e90\u7684\u4fe1\u606f\u3002"),(0,p.kt)("h2",{id:"\u7981\u7528-gatekeeper"},"\u7981\u7528 Gatekeeper"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},"\u5bfc\u822a\u5230\u96c6\u7fa4\u7684\u4eea\u8868\u677f\u89c6\u56fe\u3002"),(0,p.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4fa7\u83dc\u5355\u4e2d\uff0c\u5c55\u5f00\u96c6\u7fa4\u83dc\u5355\u5e76\u5355\u51fb ",(0,p.kt)("strong",{parentName:"li"},"OPA Gatekeeper"),"\u3002"),(0,p.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,p.kt)("strong",{parentName:"li"},"\u22ee > \u7981\u7528"),"\u3002")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u7981\u7528 OPA Gatekeeper \u540e\uff0c\u6240\u6709\u7ea6\u675f\u6a21\u677f\u548c\u7ea6\u675f\u4e5f\u5c06\u88ab\u5220\u9664\u3002"))}u.isMDXComponent=!0}}]);