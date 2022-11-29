"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[90166],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return s}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,c=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=u(n),s=i,b=f["".concat(o,".").concat(s)]||f[s]||k[s]||c;return n?r.createElement(b,a(a({ref:t},p),{},{components:n})):r.createElement(b,a({ref:t},p))}));function s(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=n.length,a=new Array(c);a[0]=f;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<c;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},42643:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return s},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return k}});var r=n(87462),i=n(63366),c=(n(67294),n(3905)),a=["components"],l={title:"kubectl \u5b9e\u7528\u7a0b\u5e8f"},o=void 0,u={unversionedId:"reference-guides/cli-with-rancher/kubectl-utility",id:"version-2.6/reference-guides/cli-with-rancher/kubectl-utility",title:"kubectl \u5b9e\u7528\u7a0b\u5e8f",description:"kubectl",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/reference-guides/cli-with-rancher/kubectl-utility.md",sourceDirName:"reference-guides/cli-with-rancher",slug:"/reference-guides/cli-with-rancher/kubectl-utility",permalink:"/zh/v2.6/reference-guides/cli-with-rancher/kubectl-utility",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/reference-guides/cli-with-rancher/kubectl-utility.md",tags:[],version:"2.6",lastUpdatedAt:1669187684,formattedLastUpdatedAt:"2022/11/23",frontMatter:{title:"kubectl \u5b9e\u7528\u7a0b\u5e8f"},sidebar:"tutorialSidebar",previous:{title:"Rancher CLI",permalink:"/zh/v2.6/reference-guides/cli-with-rancher/rancher-cli"},next:{title:"API",permalink:"/zh/v2.6/pages-for-subheaders/about-the-api"}},p={},k=[{value:"kubectl",id:"kubectl",level:2},{value:"kubectl \u5b9e\u7528\u7a0b\u5e8f",id:"kubectl-\u5b9e\u7528\u7a0b\u5e8f",level:3},{value:"\u4f7f\u7528 kubectl \u548c kubeconfig \u4ee4\u724c\u8fdb\u884c TTL \u8ba4\u8bc1",id:"\u4f7f\u7528-kubectl-\u548c-kubeconfig-\u4ee4\u724c\u8fdb\u884c-ttl-\u8ba4\u8bc1",level:3}],f={toc:k};function s(e){var t=e.components,n=(0,i.Z)(e,a);return(0,c.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"kubectl"},"kubectl"),(0,c.kt)("p",null,"kubectl \u7528\u4e8e\u4e0e Rancher \u8fdb\u884c\u4ea4\u4e92\u3002"),(0,c.kt)("h3",{id:"kubectl-\u5b9e\u7528\u7a0b\u5e8f"},"kubectl \u5b9e\u7528\u7a0b\u5e8f"),(0,c.kt)("p",null,"\u5b89\u88c5 ",(0,c.kt)("inlineCode",{parentName:"p"},"kubectl"),"\u3002\u8be6\u60c5\u8bf7\u53c2\u89c1",(0,c.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/"},"\u5b89\u88c5 kubectl"),"\u3002"),(0,c.kt)("p",null,"\u8981\u914d\u7f6e kubectl\uff0c\u901a\u8fc7 Rancher Web UI \u8bbf\u95ee\u4f60\u7684\u96c6\u7fa4\uff0c\u5355\u51fb ",(0,c.kt)("inlineCode",{parentName:"p"},"Kubeconfig"),"\uff0c\u7136\u540e\u590d\u5236\u5185\u5bb9\u5e76\u5c06\u5176\u7c98\u8d34\u5230\u4f60\u7684 ",(0,c.kt)("inlineCode",{parentName:"p"},"~/.kube/config")," \u6587\u4ef6\u4e2d\u3002"),(0,c.kt)("p",null,"\u68c0\u67e5\u662f\u5426\u53ef\u4ee5\u6210\u529f\u8fd0\u884c ",(0,c.kt)("inlineCode",{parentName:"p"},"kubectl cluster-info")," \u6216 ",(0,c.kt)("inlineCode",{parentName:"p"},"kubectl get pods")," \u547d\u4ee4\u3002"),(0,c.kt)("h3",{id:"\u4f7f\u7528-kubectl-\u548c-kubeconfig-\u4ee4\u724c\u8fdb\u884c-ttl-\u8ba4\u8bc1"},"\u4f7f\u7528 kubectl \u548c kubeconfig \u4ee4\u724c\u8fdb\u884c TTL \u8ba4\u8bc1"),(0,c.kt)("p",null,(0,c.kt)("em",{parentName:"p"},"\u8981\u6c42")),(0,c.kt)("p",null,"\u5982\u679c\u7ba1\u7406\u5458",(0,c.kt)("a",{parentName:"p",href:"/zh/v2.6/reference-guides/about-the-api/api-tokens#%E5%9C%A8%E7%94%9F%E6%88%90%E7%9A%84-kubeconfig-%E4%B8%AD%E7%A6%81%E7%94%A8%E4%BB%A4%E7%89%8C"},"\u5173\u95ed\u4e86 kubeconfig \u4ee4\u724c\u751f\u6210"),"\uff0c\u5f53\u4f60\u8fd0\u884c ",(0,c.kt)("inlineCode",{parentName:"p"},"kubectl")," \u65f6\uff0ckubeconfig \u6587\u4ef6\u9700\u8981 ",(0,c.kt)("a",{parentName:"p",href:"/zh/v2.6/reference-guides/cli-with-rancher/rancher-cli"},"Rancher CLI")," \u5b58\u5728\u4e8e\u4f60\u7684 PATH \u4e2d\u3002\u5426\u5219\uff0c\u4f60\u4f1a\u770b\u5230\u8fd9\u6837\u7684\u9519\u8bef\u4fe1\u606f\uff1a\n",(0,c.kt)("inlineCode",{parentName:"p"},'Unable to connect to the server: getting credentials: exec: exec: "rancher": executable file not found in $PATH'),"\u3002"),(0,c.kt)("p",null,"\u8be5\u529f\u80fd\u53ef\u4ee5\u8ba9 kubectl \u4e0e Rancher Server \u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\uff0c\u5e76\u5728\u9700\u8981\u65f6\u83b7\u5f97\u65b0\u7684 kubeconfig token\u3002\u76ee\u524d\u652f\u6301\u4ee5\u4e0b\u9a8c\u8bc1\u63d0\u4f9b\u7a0b\u5e8f\uff1a"),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},"\u672c\u5730"),(0,c.kt)("li",{parentName:"ol"},"Active Directory (\u4ec5\u9650 LDAP)"),(0,c.kt)("li",{parentName:"ol"},"FreeIPA"),(0,c.kt)("li",{parentName:"ol"},"OpenLDAP"),(0,c.kt)("li",{parentName:"ol"},"SAML \u8eab\u4efd\u63d0\u4f9b\u5546\uff1aPing\uff0cOkta\uff0cADFS\uff0cKeycloak \u548c Shibboleth")),(0,c.kt)("p",null,"\u5982\u679c\u4f60\u662f\u7b2c\u4e00\u6b21\u8fd0\u884c kubectl\uff08\u4f8b\u5982\uff0c",(0,c.kt)("inlineCode",{parentName:"p"},"kubectl get pods"),"\uff09\uff0c\u5b83\u4f1a\u8981\u6c42\u4f60\u9009\u62e9\u4e00\u4e2a\u9a8c\u8bc1\u63d0\u4f9b\u7a0b\u5e8f\u5e76\u4f7f\u7528 Rancher Server \u767b\u5f55\u3002kubeconfig token \u4f1a\u88ab\u7f13\u5b58\u5230 ",(0,c.kt)("inlineCode",{parentName:"p"},"./.cache/token")," \u4e0b\u4f60\u8fd0\u884c kubectl \u7684\u8def\u5f84\u4e2d\u3002\u8be5 Token \u5728",(0,c.kt)("a",{parentName:"p",href:"/zh/v2.6/reference-guides/about-the-api/api-tokens#%E5%9C%A8%E7%94%9F%E6%88%90%E7%9A%84-kubeconfig-%E4%B8%AD%E7%A6%81%E7%94%A8%E4%BB%A4%E7%89%8C"},"\u8fc7\u671f"),"\u6216",(0,c.kt)("a",{parentName:"p",href:"/zh/v2.6/reference-guides/about-the-api/api-tokens#%E5%88%A0%E9%99%A4%E4%BB%A4%E7%89%8C"},"\u4ece Rancher Server \u5220\u9664"),"\u4e4b\u524d\u90fd\u662f\u6709\u6548\u7684\u3002\u8fc7\u671f\u540e\uff0c\u4e0b\u4e00\u4e2a ",(0,c.kt)("inlineCode",{parentName:"p"},"kubectl get pods")," \u547d\u4ee4\u4f1a\u8981\u6c42\u4f60\u518d\u6b21\u4f7f\u7528 Rancher Server \u767b\u5f55\u3002"))}s.isMDXComponent=!0}}]);