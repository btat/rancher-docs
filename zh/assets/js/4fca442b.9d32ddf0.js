"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[85800],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(n),m=o,g=s["".concat(c,".").concat(m)]||s[m]||d[m]||a;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},52266:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={title:"Logging"},l=void 0,i={unversionedId:"troubleshooting/other-troubleshooting-tips/logging",id:"version-2.6/troubleshooting/other-troubleshooting-tips/logging",title:"Logging",description:"\u65e5\u5fd7\u7ea7\u522b",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/troubleshooting/other-troubleshooting-tips/logging.md",sourceDirName:"troubleshooting/other-troubleshooting-tips",slug:"/troubleshooting/other-troubleshooting-tips/logging",permalink:"/zh/v2.6/troubleshooting/other-troubleshooting-tips/logging",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/troubleshooting/other-troubleshooting-tips/logging.md",tags:[],version:"2.6",lastUpdatedAt:1676523322,formattedLastUpdatedAt:"2023\u5e742\u670816\u65e5",frontMatter:{title:"Logging"},sidebar:"tutorialSidebar",previous:{title:"\u6ce8\u518c\u96c6\u7fa4",permalink:"/zh/v2.6/troubleshooting/other-troubleshooting-tips/registered-clusters"},next:{title:"\u5ba1\u8ba1\u65e5\u5fd7\u4e2d\u7684\u7528\u6237 ID \u8ddf\u8e2a",permalink:"/zh/v2.6/troubleshooting/other-troubleshooting-tips/user-id-tracking-in-audit-logs"}},c={},p=[{value:"\u65e5\u5fd7\u7ea7\u522b",id:"\u65e5\u5fd7\u7ea7\u522b",level:2},{value:"\u5982\u4f55\u914d\u7f6e\u65e5\u5fd7\u7ea7\u522b",id:"\u5982\u4f55\u914d\u7f6e\u65e5\u5fd7\u7ea7\u522b",level:3},{value:"Kubernetes \u5b89\u88c5",id:"kubernetes-\u5b89\u88c5",level:4},{value:"Docker \u5b89\u88c5",id:"docker-\u5b89\u88c5",level:4},{value:"Rancher \u4e3b\u673a\u8c03\u8bd5\u65e5\u5fd7",id:"rancher-\u4e3b\u673a\u8c03\u8bd5\u65e5\u5fd7",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u65e5\u5fd7\u7ea7\u522b"},"\u65e5\u5fd7\u7ea7\u522b"),(0,o.kt)("p",null,"Rancher \u4f7f\u7528\u4e86\u4ee5\u4e0b\u65e5\u5fd7\u7ea7\u522b\uff1a"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,o.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"info")),(0,o.kt)("td",{parentName:"tr",align:null},"\u8bb0\u5f55\u4fe1\u606f\u6027\u6d88\u606f\u3002\u8fd9\u662f\u9ed8\u8ba4\u7684\u65e5\u5fd7\u7ea7\u522b\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"debug")),(0,o.kt)("td",{parentName:"tr",align:null},"\u8bb0\u5f55\u53ef\u7528\u4e8e\u8c03\u8bd5\u7684\u66f4\u8be6\u7ec6\u6d88\u606f\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"trace")),(0,o.kt)("td",{parentName:"tr",align:null},"\u8bb0\u5f55\u5185\u90e8\u529f\u80fd\u7684\u975e\u5e38\u8be6\u7ec6\u7684\u6d88\u606f\u3002\u975e\u5e38\u5197\u957f\uff0c\u5e76\u4e14\u53ef\u80fd\u5305\u542b\u654f\u611f\u4fe1\u606f\u3002")))),(0,o.kt)("h3",{id:"\u5982\u4f55\u914d\u7f6e\u65e5\u5fd7\u7ea7\u522b"},"\u5982\u4f55\u914d\u7f6e\u65e5\u5fd7\u7ea7\u522b"),(0,o.kt)("h4",{id:"kubernetes-\u5b89\u88c5"},"Kubernetes \u5b89\u88c5"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u914d\u7f6e debug \u65e5\u5fd7\u7ea7\u522b")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ KUBECONFIG=./kube_config_cluster.yml\n$ kubectl -n cattle-system get pods -l app=rancher --no-headers -o custom-columns=name:.metadata.name | while read rancherpod; do kubectl -n cattle-system exec $rancherpod -c rancher -- loglevel --set debug; done\nOK\nOK\nOK\n$ kubectl -n cattle-system logs -l app=rancher -c rancher\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u914d\u7f6e info \u65e5\u5fd7\u7ea7\u522b")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ KUBECONFIG=./kube_config_cluster.yml\n$ kubectl -n cattle-system get pods -l app=rancher --no-headers -o custom-columns=name:.metadata.name | while read rancherpod; do kubectl -n cattle-system exec $rancherpod -c rancher -- loglevel --set info; done\nOK\nOK\nOK\n")),(0,o.kt)("h4",{id:"docker-\u5b89\u88c5"},"Docker \u5b89\u88c5"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u914d\u7f6e debug \u65e5\u5fd7\u7ea7\u522b")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ docker exec -ti <container_id> loglevel --set debug\nOK\n$ docker logs -f <container_id>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u914d\u7f6e info \u65e5\u5fd7\u7ea7\u522b")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ docker exec -ti <container_id> loglevel --set info\nOK\n")),(0,o.kt)("h2",{id:"rancher-\u4e3b\u673a\u8c03\u8bd5\u65e5\u5fd7"},"Rancher \u4e3b\u673a\u8c03\u8bd5\u65e5\u5fd7"),(0,o.kt)("p",null,"\u5982\u679c\u9700\u8981\u89e3\u51b3\u5728\u57fa\u7840\u8bbe\u65bd\u63d0\u4f9b\u5546\u4e2d\u521b\u5efa\u5bf9\u8c61\u7684\u95ee\u9898\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-machine")," \u8c03\u8bd5\u65e5\u5fd7\u3002"),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u542f\u52a8 Rancher \u65f6\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf\u6765\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-machine")," \u542f\u7528\u8c03\u8bd5\u65e5\u5fd7\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"CATTLE_WHITELIST_ENVVARS")," \u73af\u5883\u53d8\u91cf\u5141\u8bb8\u7528\u6237\u5c06\u7279\u5b9a\u73af\u5883\u53d8\u91cf\u5217\u5165\u767d\u540d\u5355\uff0c\u8ba9\u5b83\u4eec\u80fd\u5728\u914d\u7f6e\u671f\u95f4\u4f20\u9012\u7ed9 ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-machine"),"\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"MACHINE_DEBUG")," \u53d8\u91cf\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-machine")," \u4e2d\u542f\u7528\u8c03\u8bd5\u65e5\u5fd7\u3002"),(0,o.kt)("p",null,"\u56e0\u6b64\uff0c\u901a\u8fc7\u8bbe\u7f6e ",(0,o.kt)("inlineCode",{parentName:"p"},"MACHINE_DEBUG=true")," \u5e76\u5c06 ",(0,o.kt)("inlineCode",{parentName:"p"},"MACHINE_DEBUG")," \u6dfb\u52a0\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"CATTLE_WHITELIST_ENVVARS")," \u4e2d\u7684\u53d8\u91cf\u9ed8\u8ba4\u5217\u8868\uff08\u4f8b\u5982 ",(0,o.kt)("inlineCode",{parentName:"p"},"CATTLE_WHITELIST_ENVVARS=HTTP_PROXY,HTTPS_PROXY,NO_PROXY,MACHINE_DEBUG"),"\uff09\uff0c\u4f60\u53ef\u4ee5\u5728\u914d\u7f6e RKE1\u3001RKE2 \u548c K3s \u96c6\u7fa4\u65f6\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-machine")," \u4e2d\u542f\u7528\u8c03\u8bd5\u65e5\u5fd7\u3002"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"\u50cf\u4e0a\u9762\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"trace")," \u65e5\u5fd7\u7ea7\u522b\u4e00\u6837\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-machine")," \u8c03\u8bd5\u65e5\u5fd7\u53ef\u4ee5\u5305\u542b\u654f\u611f\u4fe1\u606f\u3002")))}d.isMDXComponent=!0}}]);