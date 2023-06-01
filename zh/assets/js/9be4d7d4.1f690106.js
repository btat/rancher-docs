"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[60757],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,c=e.originalType,o=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=u(r),f=s,m=p["".concat(o,".").concat(f)]||p[f]||l[f]||c;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function f(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var c=r.length,i=new Array(c);i[0]=p;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a.mdxType="string"==typeof e?e:s,i[1]=a;for(var u=2;u<c;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},77906:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>l,frontMatter:()=>c,metadata:()=>a,toc:()=>u});var n=r(87462),s=(r(67294),r(3905));const c={title:"Kubernetes Security Best Practices"},i=void 0,a={unversionedId:"reference-guides/rancher-security/kubernetes-security-best-practices",id:"version-2.5/reference-guides/rancher-security/kubernetes-security-best-practices",title:"Kubernetes Security Best Practices",description:"Restricting cloud metadata API access",source:"@site/versioned_docs/version-2.5/reference-guides/rancher-security/kubernetes-security-best-practices.md",sourceDirName:"reference-guides/rancher-security",slug:"/reference-guides/rancher-security/kubernetes-security-best-practices",permalink:"/zh/v2.5/reference-guides/rancher-security/kubernetes-security-best-practices",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/reference-guides/rancher-security/kubernetes-security-best-practices.md",tags:[],version:"2.5",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"2022\u5e749\u670823\u65e5",frontMatter:{title:"Kubernetes Security Best Practices"},sidebar:"tutorialSidebar",previous:{title:"About rke2-selinux",permalink:"/zh/v2.5/reference-guides/rancher-security/selinux-rpm/about-rke2-selinux"},next:{title:"Security Advisories and CVEs",permalink:"/zh/v2.5/reference-guides/rancher-security/security-advisories-and-cves"}},o={},u=[{value:"Restricting cloud metadata API access",id:"restricting-cloud-metadata-api-access",level:3}],d={toc:u};function l(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h3",{id:"restricting-cloud-metadata-api-access"},"Restricting cloud metadata API access"),(0,s.kt)("p",null,"Cloud providers such as AWS, Azure, DigitalOcean or GCP often expose metadata services locally to instances. By default, this endpoint is accessible by pods running on a cloud instance, including pods in hosted Kubernetes providers such as EKS, AKS, DigitalOcean Kubernetes or GKE, and can contain cloud credentials for that node, provisioning data such as kubelet credentials, or other sensitive data. To mitigate this risk when running on a cloud platform, follow the ",(0,s.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/administer-cluster/securing-a-cluster/#restricting-cloud-metadata-api-access"},"Kubernetes security recommendations"),": limit permissions given to instance credentials, use network policies to restrict pod access to the metadata API, and avoid using provisioning data to deliver secrets."),(0,s.kt)("p",null,"It is advised to consult your cloud provider's security best practices for further recommendations and specific details on how to restrict access to cloud instance metadata API."),(0,s.kt)("p",null,"Further references: MITRE ATT&CK knowledge base on - ",(0,s.kt)("a",{parentName:"p",href:"https://attack.mitre.org/techniques/T1552/005/"},"Unsecured Credentials: Cloud Instance Metadata API"),"."))}l.isMDXComponent=!0}}]);