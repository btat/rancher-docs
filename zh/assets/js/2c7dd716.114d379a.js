"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[4225],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(t),m=l,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return t?a.createElement(g,i(i({ref:n},p),{},{components:t})):a.createElement(g,i({ref:n},p))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=u;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var d=2;d<r;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},93831:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=t(87462),l=(t(67294),t(3905));const r={title:"\u542f\u7528 API \u5ba1\u8ba1\u65e5\u5fd7\u4ee5\u8bb0\u5f55\u7cfb\u7edf\u4e8b\u4ef6"},i=void 0,o={unversionedId:"how-to-guides/advanced-user-guides/enable-api-audit-log",id:"how-to-guides/advanced-user-guides/enable-api-audit-log",title:"\u542f\u7528 API \u5ba1\u8ba1\u65e5\u5fd7\u4ee5\u8bb0\u5f55\u7cfb\u7edf\u4e8b\u4ef6",description:"\u4f60\u53ef\u4ee5\u542f\u7528 API \u5ba1\u8ba1\u65e5\u5fd7\u6765\u8bb0\u5f55\u5404\u4e2a\u7528\u6237\u53d1\u8d77\u7684\u7cfb\u7edf\u4e8b\u4ef6\u7684\u987a\u5e8f\u3002\u901a\u8fc7\u67e5\u770b\u65e5\u5fd7\uff0c\u4f60\u53ef\u4ee5\u4e86\u89e3\u53d1\u751f\u4e86\u4ec0\u4e48\u4e8b\u4ef6\u3001\u4e8b\u4ef6\u53d1\u751f\u7684\u65f6\u95f4\uff0c\u4e8b\u4ef6\u53d1\u8d77\u4eba\uff0c\u4ee5\u53ca\u4e8b\u4ef6\u5f71\u54cd\u7684\u96c6\u7fa4\u3002\u542f\u7528\u6b64\u529f\u80fd\u540e\uff0c\u6240\u6709 Rancher API \u7684\u8bf7\u6c42\u548c\u54cd\u5e94\u90fd\u4f1a\u5199\u5165\u65e5\u5fd7\u4e2d\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/advanced-user-guides/enable-api-audit-log.md",sourceDirName:"how-to-guides/advanced-user-guides",slug:"/how-to-guides/advanced-user-guides/enable-api-audit-log",permalink:"/zh/how-to-guides/advanced-user-guides/enable-api-audit-log",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/enable-api-audit-log.md",tags:[],version:"current",lastUpdatedAt:1666730466,formattedLastUpdatedAt:"2022\u5e7410\u670825\u65e5",frontMatter:{title:"\u542f\u7528 API \u5ba1\u8ba1\u65e5\u5fd7\u4ee5\u8bb0\u5f55\u7cfb\u7edf\u4e8b\u4ef6"},sidebar:"tutorialSidebar",previous:{title:"\u4e3a\u5927\u578b\u5b89\u88c5\u8fdb\u884c etcd \u8c03\u4f18",permalink:"/zh/how-to-guides/advanced-user-guides/tune-etcd-for-large-installs"},next:{title:"7 \u5c42 NGINX \u8d1f\u8f7d\u5747\u8861\u5668\u4e0a\u7684 TLS \u7ec8\u6b62\uff08Docker \u5b89\u88c5\uff09",permalink:"/zh/how-to-guides/advanced-user-guides/configure-layer-7-nginx-load-balancer"}},s={},d=[{value:"\u542f\u7528 API \u5ba1\u8ba1\u65e5\u5fd7",id:"\u542f\u7528-api-\u5ba1\u8ba1\u65e5\u5fd7",level:2},{value:"API \u5ba1\u8ba1\u65e5\u5fd7\u9009\u9879",id:"api-\u5ba1\u8ba1\u65e5\u5fd7\u9009\u9879",level:2},{value:"\u5ba1\u6838\u65e5\u5fd7\u7ea7\u522b",id:"\u5ba1\u6838\u65e5\u5fd7\u7ea7\u522b",level:3},{value:"\u67e5\u770b API \u5ba1\u8ba1\u65e5\u5fd7",id:"\u67e5\u770b-api-\u5ba1\u8ba1\u65e5\u5fd7",level:2},{value:"Docker \u5b89\u88c5",id:"docker-\u5b89\u88c5",level:3},{value:"Kubernetes \u5b89\u88c5",id:"kubernetes-\u5b89\u88c5",level:3},{value:"CLI",id:"cli",level:4},{value:"\u53d1\u9001\u5ba1\u8ba1\u65e5\u5fd7",id:"\u53d1\u9001\u5ba1\u8ba1\u65e5\u5fd7",level:4},{value:"\u5ba1\u8ba1\u65e5\u5fd7\u793a\u4f8b",id:"\u5ba1\u8ba1\u65e5\u5fd7\u793a\u4f8b",level:2},{value:"\u5143\u6570\u636e\u65e5\u5fd7\u7ea7\u522b",id:"\u5143\u6570\u636e\u65e5\u5fd7\u7ea7\u522b",level:3},{value:"\u5143\u6570\u636e\u548c\u8bf7\u6c42\u4f53\u65e5\u5fd7\u7ea7\u522b",id:"\u5143\u6570\u636e\u548c\u8bf7\u6c42\u4f53\u65e5\u5fd7\u7ea7\u522b",level:3},{value:"\u5143\u6570\u636e\u3001\u8bf7\u6c42\u4f53\u548c\u54cd\u5e94\u4f53\u65e5\u5fd7\u7ea7\u522b",id:"\u5143\u6570\u636e\u8bf7\u6c42\u4f53\u548c\u54cd\u5e94\u4f53\u65e5\u5fd7\u7ea7\u522b",level:3},{value:"\u8bf7\u6c42",id:"\u8bf7\u6c42",level:4},{value:"\u54cd\u5e94",id:"\u54cd\u5e94",level:4}],p={toc:d};function c(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u542f\u7528 API \u5ba1\u8ba1\u65e5\u5fd7\u6765\u8bb0\u5f55\u5404\u4e2a\u7528\u6237\u53d1\u8d77\u7684\u7cfb\u7edf\u4e8b\u4ef6\u7684\u987a\u5e8f\u3002\u901a\u8fc7\u67e5\u770b\u65e5\u5fd7\uff0c\u4f60\u53ef\u4ee5\u4e86\u89e3\u53d1\u751f\u4e86\u4ec0\u4e48\u4e8b\u4ef6\u3001\u4e8b\u4ef6\u53d1\u751f\u7684\u65f6\u95f4\uff0c\u4e8b\u4ef6\u53d1\u8d77\u4eba\uff0c\u4ee5\u53ca\u4e8b\u4ef6\u5f71\u54cd\u7684\u96c6\u7fa4\u3002\u542f\u7528\u6b64\u529f\u80fd\u540e\uff0c\u6240\u6709 Rancher API \u7684\u8bf7\u6c42\u548c\u54cd\u5e94\u90fd\u4f1a\u5199\u5165\u65e5\u5fd7\u4e2d\u3002"),(0,l.kt)("p",null,"API \u5ba1\u8ba1\u53ef\u4ee5\u5728 Rancher \u5b89\u88c5\u6216\u5347\u7ea7\u671f\u95f4\u542f\u7528\u3002"),(0,l.kt)("h2",{id:"\u542f\u7528-api-\u5ba1\u8ba1\u65e5\u5fd7"},"\u542f\u7528 API \u5ba1\u8ba1\u65e5\u5fd7"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u5c06\u73af\u5883\u53d8\u91cf\u4f20\u9012\u7ed9 Rancher Server \u5bb9\u5668\uff0c\u4ece\u800c\u542f\u7528\u548c\u914d\u7f6e\u5ba1\u8ba1\u65e5\u5fd7\u3002\u8bf7\u53c2\u89c1\u4ee5\u4e0b\u6587\u6863\uff0c\u5728\u5b89\u88c5\u65f6\u542f\u7528\u8be5\u529f\u80fd\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"/zh/reference-guides/single-node-rancher-in-docker/advanced-options#api-%E5%AE%A1%E8%AE%A1%E6%97%A5%E5%BF%97"},"Docker \u5b89\u88c5"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"/zh/getting-started/installation-and-upgrade/installation-references/helm-chart-options#api-%E5%AE%A1%E8%AE%A1%E6%97%A5%E5%BF%97"},"Kubernetes \u5b89\u88c5")))),(0,l.kt)("h2",{id:"api-\u5ba1\u8ba1\u65e5\u5fd7\u9009\u9879"},"API \u5ba1\u8ba1\u65e5\u5fd7\u9009\u9879"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u53c2\u6570\u5b9a\u4e49\u4e86\u5ba1\u8ba1\u65e5\u5fd7\u7684\u8bb0\u5f55\u89c4\u5219\uff0c\u5176\u4e2d\u5305\u62ec\u5e94\u8be5\u8bb0\u5f55\u4ec0\u4e48\u5185\u5bb9\u4ee5\u53ca\u5305\u62ec\u4ec0\u4e48\u6570\u636e\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{id:"audit-level"}),(0,l.kt)("inlineCode",{parentName:"td"},"AUDIT_LEVEL")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0")," - \u7981\u7528\u5ba1\u8ba1\u65e5\u5fd7\uff08\u9ed8\u8ba4\uff09",(0,l.kt)("br",null)," ",(0,l.kt)("inlineCode",{parentName:"td"},"1")," - \u65e5\u5fd7\u4e8b\u4ef6\u5143\u6570\u636e",(0,l.kt)("br",null)," ",(0,l.kt)("inlineCode",{parentName:"td"},"2")," - \u65e5\u5fd7\u4e8b\u4ef6\u5143\u6570\u636e\u548c\u8bf7\u6c42\u4f53",(0,l.kt)("br",null)," ",(0,l.kt)("inlineCode",{parentName:"td"},"3")," - \u65e5\u5fd7\u4e8b\u4ef6\u5143\u6570\u636e\uff0c\u8bf7\u6c42\u4f53\u548c\u54cd\u5e94\u4f53\u3002\u8bf7\u6c42/\u54cd\u5e94\u5bf9\u7684\u6bcf\u4e2a\u65e5\u5fd7\u4e8b\u52a1\u90fd\u4f7f\u7528\u540c\u4e00\u4e2a\u7684 ",(0,l.kt)("inlineCode",{parentName:"td"},"auditID"),"\u3002",(0,l.kt)("br",null)," \u5982\u9700\u4e86\u89e3\u6bcf\u4e2a\u8bbe\u7f6e\u8bb0\u5f55\u7684\u65e5\u5fd7\u5185\u5bb9\uff0c\u8bf7\u53c2\u89c1",(0,l.kt)("a",{parentName:"td",href:"#%E5%AE%A1%E6%A0%B8%E6%97%A5%E5%BF%97%E7%BA%A7%E5%88%AB"},"\u5ba1\u8ba1\u65e5\u5fd7\u7ea7\u522b"),"\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"AUDIT_LOG_PATH")),(0,l.kt)("td",{parentName:"tr",align:null},"Rancher Server API \u7684\u65e5\u5fd7\u8def\u5f84\u3002\u9ed8\u8ba4\u8def\u5f84\uff1a",(0,l.kt)("inlineCode",{parentName:"td"},"/var/log/auditlog/rancher-api-audit.log"),"\u3002\u4f60\u53ef\u4ee5\u5c06\u65e5\u5fd7\u76ee\u5f55\u6302\u8f7d\u5230\u4e3b\u673a\u3002",(0,l.kt)("br",null),(0,l.kt)("br",null),"\u793a\u4f8b\uff1a",(0,l.kt)("inlineCode",{parentName:"td"},"AUDIT_LOG_PATH=/my/custom/path/"),(0,l.kt)("br",null))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"AUDIT_LOG_MAXAGE")),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e7\u5ba1\u8ba1\u65e5\u5fd7\u6587\u4ef6\u53ef\u4fdd\u7559\u7684\u6700\u5927\u5929\u6570\u3002\u9ed8\u8ba4\u4e3a 10 \u5929\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"AUDIT_LOG_MAXBACKUP")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4fdd\u7559\u7684\u5ba1\u8ba1\u65e5\u5fd7\u6700\u5927\u6587\u4ef6\u4e2a\u6570\u3002\u9ed8\u8ba4\u503c\u4e3a 10\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"AUDIT_LOG_MAXSIZE")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5728\u5ba1\u8ba1\u65e5\u5fd7\u6587\u4ef6\u88ab\u8f6e\u6362\u524d\u7684\u6700\u5927\u5bb9\u91cf\uff0c\u5355\u4f4d\u662f MB\u3002\u9ed8\u8ba4\u5927\u5c0f\u4e3a 100MB\u3002")))),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"\u5ba1\u6838\u65e5\u5fd7\u7ea7\u522b"},"\u5ba1\u6838\u65e5\u5fd7\u7ea7\u522b"),(0,l.kt)("p",null,"\u4e0b\u8868\u4ecb\u7ecd\u4e86\u6bcf\u4e2a ",(0,l.kt)("a",{parentName:"p",href:"#audit-level"},(0,l.kt)("inlineCode",{parentName:"a"},"AUDIT_LEVEL"))," \u8bb0\u5f55\u7684 API \u4e8b\u52a1\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"AUDIT_LEVEL")," \u8bbe\u7f6e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf7\u6c42\u5143\u6570\u636e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf7\u6c42\u4f53"),(0,l.kt)("th",{parentName:"tr",align:null},"\u54cd\u5e94\u5143\u6570\u636e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u54cd\u5e94\u4f53"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"3")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713")))),(0,l.kt)("h2",{id:"\u67e5\u770b-api-\u5ba1\u8ba1\u65e5\u5fd7"},"\u67e5\u770b API \u5ba1\u8ba1\u65e5\u5fd7"),(0,l.kt)("h3",{id:"docker-\u5b89\u88c5"},"Docker \u5b89\u88c5"),(0,l.kt)("p",null,"\u4e0e\u4e3b\u673a\u7cfb\u7edf\u5171\u4eab ",(0,l.kt)("inlineCode",{parentName:"p"},"AUDIT_LOG_PATH")," \u76ee\u5f55\uff08\u9ed8\u8ba4\u76ee\u5f55\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"/var/log/auditlog"),"\uff09\u3002\u65e5\u5fd7\u53ef\u4ee5\u901a\u8fc7\u6807\u51c6 CLI \u5de5\u5177\u8fdb\u884c\u89e3\u6790\uff0c\u4e5f\u53ef\u4ee5\u8f6c\u53d1\u5230 Fluentd\u3001Filebeat\u3001Logstash \u7b49\u65e5\u5fd7\u6536\u96c6\u5de5\u5177\u3002"),(0,l.kt)("h3",{id:"kubernetes-\u5b89\u88c5"},"Kubernetes \u5b89\u88c5"),(0,l.kt)("p",null,"\u4f7f\u7528 Helm Chart \u5b89\u88c5 Rancher \u65f6\u542f\u52a8 API \u5ba1\u8ba1\u65e5\u5fd7\uff0c\u4f1a\u5728 Rancher Pod \u4e2d\u521b\u5efa\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"rancher-audit-log")," Sidecar \u5bb9\u5668\u3002\u8be5\u5bb9\u5668\u4f1a\u5c06\u65e5\u5fd7\u53d1\u9001\u5230\u6807\u51c6\u8f93\u51fa (stdout)\u3002\u4f60\u53ef\u4ee5\u50cf\u67e5\u770b\u5176\u4ed6\u5bb9\u5668\u7684\u65e5\u5fd7\u4e00\u6837\u67e5\u770b API \u5ba1\u8ba1\u65e5\u5fd7\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"rancher-audit-log")," \u5bb9\u5668\u4f4d\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"cattle-system")," \u547d\u540d\u7a7a\u95f4\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"rancher")," Pod \u4e2d\u3002"),(0,l.kt)("h4",{id:"cli"},"CLI"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n cattle-system logs -f rancher-84d886bdbb-s4s69 rancher-audit-log\n")),(0,l.kt)("h4",{id:"\u53d1\u9001\u5ba1\u8ba1\u65e5\u5fd7"},"\u53d1\u9001\u5ba1\u8ba1\u65e5\u5fd7"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u4e3a\u96c6\u7fa4\u542f\u7528 Rancher \u7684\u5185\u7f6e\u65e5\u5fd7\u6536\u96c6\u548c\u4f20\u9001\u529f\u80fd\uff0c\u5c06\u5ba1\u8ba1\u65e5\u5fd7\u548c\u5176\u4ed6\u670d\u52a1\u65e5\u5fd7\u53d1\u9001\u5230\u652f\u6301\u7684 endpoint\u3002\u8be6\u60c5\u8bf7\u53c2\u89c1 ",(0,l.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/logging"},"Rancher \u5de5\u5177 - Logging"),"\u3002"),(0,l.kt)("h2",{id:"\u5ba1\u8ba1\u65e5\u5fd7\u793a\u4f8b"},"\u5ba1\u8ba1\u65e5\u5fd7\u793a\u4f8b"),(0,l.kt)("p",null,"\u542f\u7528\u5ba1\u8ba1\u65e5\u5fd7\u540e\uff0cRancher \u4f1a\u4ee5 JSON \u683c\u5f0f\u8bb0\u5f55\u6bcf\u4e2a API \u7684\u8bf7\u6c42\u548c\u54cd\u5e94\u3002\u4e0b\u6587\u7684\u4ee3\u7801\u793a\u4f8b\u5c55\u793a\u4e86\u5982\u4f55\u67e5\u770b API \u4e8b\u52a1\u3002"),(0,l.kt)("h3",{id:"\u5143\u6570\u636e\u65e5\u5fd7\u7ea7\u522b"},"\u5143\u6570\u636e\u65e5\u5fd7\u7ea7\u522b"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"AUDIT_LEVEL")," \u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"1"),"\uff0cRancher \u53ea\u4f1a\u8bb0\u5f55\u6bcf\u4e2a API \u8bf7\u6c42\u7684\u5143\u6570\u636e\u6807\u5934\uff0c\u800c\u4e0d\u4f1a\u8bb0\u5f55\u8bf7\u6c42\u4f53\u3002\u6807\u5934\u8bb0\u5f55\u4e86 API \u4e8b\u52a1\u7684\u57fa\u672c\u4fe1\u606f\uff0c\u5305\u62ec ID\u3001\u53d1\u8d77\u4eba\u3001\u53d1\u8d77\u65f6\u95f4\u7b49\u3002\u4ee3\u7801\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "auditID": "30022177-9e2e-43d1-b0d0-06ef9d3db183",\n  "requestURI": "/v3/schemas",\n  "sourceIPs": ["::1"],\n  "user": {\n    "name": "user-f4tt2",\n    "group": ["system:authenticated"]\n  },\n  "verb": "GET",\n  "stage": "RequestReceived",\n  "stageTimestamp": "2018-07-20 10:22:43 +0800"\n}\n')),(0,l.kt)("h3",{id:"\u5143\u6570\u636e\u548c\u8bf7\u6c42\u4f53\u65e5\u5fd7\u7ea7\u522b"},"\u5143\u6570\u636e\u548c\u8bf7\u6c42\u4f53\u65e5\u5fd7\u7ea7\u522b"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"AUDIT_LEVEL")," \u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"2"),"\uff0cRancher \u4f1a\u8bb0\u5f55\u6bcf\u4e2a API \u8bf7\u6c42\u7684\u5143\u6570\u636e\u6807\u5934\u548c\u8bf7\u6c42\u4f53\u3002"),(0,l.kt)("p",null,"\u4e0b\u9762\u7684\u4ee3\u7801\u793a\u4f8b\u63cf\u8ff0\u4e86\u4e00\u4e2a API \u8bf7\u6c42\uff0c\u5305\u62ec\u5b83\u7684\u5143\u6570\u636e\u6807\u5934\u548c\u6b63\u6587\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "auditID": "ef1d249e-bfac-4fd0-a61f-cbdcad53b9bb",\n  "requestURI": "/v3/project/c-bcz5t:p-fdr4s/workloads/deployment:default:nginx",\n  "sourceIPs": ["::1"],\n  "user": {\n    "name": "user-f4tt2",\n    "group": ["system:authenticated"]\n  },\n  "verb": "PUT",\n  "stage": "RequestReceived",\n  "stageTimestamp": "2018-07-20 10:28:08 +0800",\n  "requestBody": {\n    "hostIPC": false,\n    "hostNetwork": false,\n    "hostPID": false,\n    "paused": false,\n    "annotations": {},\n    "baseType": "workload",\n    "containers": [\n      {\n        "allowPrivilegeEscalation": false,\n        "image": "nginx",\n        "imagePullPolicy": "Always",\n        "initContainer": false,\n        "name": "nginx",\n        "ports": [\n          {\n            "containerPort": 80,\n            "dnsName": "nginx-nodeport",\n            "kind": "NodePort",\n            "name": "80tcp01",\n            "protocol": "TCP",\n            "sourcePort": 0,\n            "type": "/v3/project/schemas/containerPort"\n          }\n        ],\n        "privileged": false,\n        "readOnly": false,\n        "resources": {\n          "type": "/v3/project/schemas/resourceRequirements",\n          "requests": {},\n          "limits": {}\n        },\n        "restartCount": 0,\n        "runAsNonRoot": false,\n        "stdin": true,\n        "stdinOnce": false,\n        "terminationMessagePath": "/dev/termination-log",\n        "terminationMessagePolicy": "File",\n        "tty": true,\n        "type": "/v3/project/schemas/container",\n        "environmentFrom": [],\n        "capAdd": [],\n        "capDrop": [],\n        "livenessProbe": null,\n        "volumeMounts": []\n      }\n    ],\n    "created": "2018-07-18T07:34:16Z",\n    "createdTS": 1531899256000,\n    "creatorId": null,\n    "deploymentConfig": {\n      "maxSurge": 1,\n      "maxUnavailable": 0,\n      "minReadySeconds": 0,\n      "progressDeadlineSeconds": 600,\n      "revisionHistoryLimit": 10,\n      "strategy": "RollingUpdate"\n    },\n    "deploymentStatus": {\n      "availableReplicas": 1,\n      "conditions": [\n        {\n          "lastTransitionTime": "2018-07-18T07:34:38Z",\n          "lastTransitionTimeTS": 1531899278000,\n          "lastUpdateTime": "2018-07-18T07:34:38Z",\n          "lastUpdateTimeTS": 1531899278000,\n          "message": "Deployment has minimum availability.",\n          "reason": "MinimumReplicasAvailable",\n          "status": "True",\n          "type": "Available"\n        },\n        {\n          "lastTransitionTime": "2018-07-18T07:34:16Z",\n          "lastTransitionTimeTS": 1531899256000,\n          "lastUpdateTime": "2018-07-18T07:34:38Z",\n          "lastUpdateTimeTS": 1531899278000,\n          "message": "ReplicaSet \\"nginx-64d85666f9\\" has successfully progressed.",\n          "reason": "NewReplicaSetAvailable",\n          "status": "True",\n          "type": "Progressing"\n        }\n      ],\n      "observedGeneration": 2,\n      "readyReplicas": 1,\n      "replicas": 1,\n      "type": "/v3/project/schemas/deploymentStatus",\n      "unavailableReplicas": 0,\n      "updatedReplicas": 1\n    },\n    "dnsPolicy": "ClusterFirst",\n    "id": "deployment:default:nginx",\n    "labels": {\n      "workload.user.cattle.io/workloadselector": "deployment-default-nginx"\n    },\n    "name": "nginx",\n    "namespaceId": "default",\n    "projectId": "c-bcz5t:p-fdr4s",\n    "publicEndpoints": [\n      {\n        "addresses": ["10.64.3.58"],\n        "allNodes": true,\n        "ingressId": null,\n        "nodeId": null,\n        "podId": null,\n        "port": 30917,\n        "protocol": "TCP",\n        "serviceId": "default:nginx-nodeport",\n        "type": "publicEndpoint"\n      }\n    ],\n    "restartPolicy": "Always",\n    "scale": 1,\n    "schedulerName": "default-scheduler",\n    "selector": {\n      "matchLabels": {\n        "workload.user.cattle.io/workloadselector": "deployment-default-nginx"\n      },\n      "type": "/v3/project/schemas/labelSelector"\n    },\n    "state": "active",\n    "terminationGracePeriodSeconds": 30,\n    "transitioning": "no",\n    "transitioningMessage": "",\n    "type": "deployment",\n    "uuid": "f998037d-8a5c-11e8-a4cf-0245a7ebb0fd",\n    "workloadAnnotations": {\n      "deployment.kubernetes.io/revision": "1",\n      "field.cattle.io/creatorId": "user-f4tt2"\n    },\n    "workloadLabels": {\n      "workload.user.cattle.io/workloadselector": "deployment-default-nginx"\n    },\n    "scheduling": {\n      "node": {}\n    },\n    "description": "my description",\n    "volumes": []\n  }\n}\n')),(0,l.kt)("h3",{id:"\u5143\u6570\u636e\u8bf7\u6c42\u4f53\u548c\u54cd\u5e94\u4f53\u65e5\u5fd7\u7ea7\u522b"},"\u5143\u6570\u636e\u3001\u8bf7\u6c42\u4f53\u548c\u54cd\u5e94\u4f53\u65e5\u5fd7\u7ea7\u522b"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"AUDIT_LEVEL")," \u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"3"),"\uff0cRancher \u4f1a\u8bb0\u5f55\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a API \u8bf7\u6c42\u7684\u5143\u6570\u636e\u6807\u5934\u548c\u8bf7\u6c42\u4f53\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a API \u54cd\u5e94\u7684\u5143\u6570\u636e\u6807\u5934\u548c\u54cd\u5e94\u4f53\u3002")),(0,l.kt)("h4",{id:"\u8bf7\u6c42"},"\u8bf7\u6c42"),(0,l.kt)("p",null,"\u4e0b\u9762\u7684\u4ee3\u7801\u793a\u4f8b\u63cf\u8ff0\u4e86\u4e00\u4e2a API \u8bf7\u6c42\uff0c\u5305\u62ec\u5b83\u7684\u5143\u6570\u636e\u6807\u5934\u548c\u6b63\u6587\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "auditID": "a886fd9f-5d6b-4ae3-9a10-5bff8f3d68af",\n  "requestURI": "/v3/project/c-bcz5t:p-fdr4s/workloads/deployment:default:nginx",\n  "sourceIPs": ["::1"],\n  "user": {\n    "name": "user-f4tt2",\n    "group": ["system:authenticated"]\n  },\n  "verb": "PUT",\n  "stage": "RequestReceived",\n  "stageTimestamp": "2018-07-20 10:33:06 +0800",\n  "requestBody": {\n    "hostIPC": false,\n    "hostNetwork": false,\n    "hostPID": false,\n    "paused": false,\n    "annotations": {},\n    "baseType": "workload",\n    "containers": [\n      {\n        "allowPrivilegeEscalation": false,\n        "image": "nginx",\n        "imagePullPolicy": "Always",\n        "initContainer": false,\n        "name": "nginx",\n        "ports": [\n          {\n            "containerPort": 80,\n            "dnsName": "nginx-nodeport",\n            "kind": "NodePort",\n            "name": "80tcp01",\n            "protocol": "TCP",\n            "sourcePort": 0,\n            "type": "/v3/project/schemas/containerPort"\n          }\n        ],\n        "privileged": false,\n        "readOnly": false,\n        "resources": {\n          "type": "/v3/project/schemas/resourceRequirements",\n          "requests": {},\n          "limits": {}\n        },\n        "restartCount": 0,\n        "runAsNonRoot": false,\n        "stdin": true,\n        "stdinOnce": false,\n        "terminationMessagePath": "/dev/termination-log",\n        "terminationMessagePolicy": "File",\n        "tty": true,\n        "type": "/v3/project/schemas/container",\n        "environmentFrom": [],\n        "capAdd": [],\n        "capDrop": [],\n        "livenessProbe": null,\n        "volumeMounts": []\n      }\n    ],\n    "created": "2018-07-18T07:34:16Z",\n    "createdTS": 1531899256000,\n    "creatorId": null,\n    "deploymentConfig": {\n      "maxSurge": 1,\n      "maxUnavailable": 0,\n      "minReadySeconds": 0,\n      "progressDeadlineSeconds": 600,\n      "revisionHistoryLimit": 10,\n      "strategy": "RollingUpdate"\n    },\n    "deploymentStatus": {\n      "availableReplicas": 1,\n      "conditions": [\n        {\n          "lastTransitionTime": "2018-07-18T07:34:38Z",\n          "lastTransitionTimeTS": 1531899278000,\n          "lastUpdateTime": "2018-07-18T07:34:38Z",\n          "lastUpdateTimeTS": 1531899278000,\n          "message": "Deployment has minimum availability.",\n          "reason": "MinimumReplicasAvailable",\n          "status": "True",\n          "type": "Available"\n        },\n        {\n          "lastTransitionTime": "2018-07-18T07:34:16Z",\n          "lastTransitionTimeTS": 1531899256000,\n          "lastUpdateTime": "2018-07-18T07:34:38Z",\n          "lastUpdateTimeTS": 1531899278000,\n          "message": "ReplicaSet \\"nginx-64d85666f9\\" has successfully progressed.",\n          "reason": "NewReplicaSetAvailable",\n          "status": "True",\n          "type": "Progressing"\n        }\n      ],\n      "observedGeneration": 2,\n      "readyReplicas": 1,\n      "replicas": 1,\n      "type": "/v3/project/schemas/deploymentStatus",\n      "unavailableReplicas": 0,\n      "updatedReplicas": 1\n    },\n    "dnsPolicy": "ClusterFirst",\n    "id": "deployment:default:nginx",\n    "labels": {\n      "workload.user.cattle.io/workloadselector": "deployment-default-nginx"\n    },\n    "name": "nginx",\n    "namespaceId": "default",\n    "projectId": "c-bcz5t:p-fdr4s",\n    "publicEndpoints": [\n      {\n        "addresses": ["10.64.3.58"],\n        "allNodes": true,\n        "ingressId": null,\n        "nodeId": null,\n        "podId": null,\n        "port": 30917,\n        "protocol": "TCP",\n        "serviceId": "default:nginx-nodeport",\n        "type": "publicEndpoint"\n      }\n    ],\n    "restartPolicy": "Always",\n    "scale": 1,\n    "schedulerName": "default-scheduler",\n    "selector": {\n      "matchLabels": {\n        "workload.user.cattle.io/workloadselector": "deployment-default-nginx"\n      },\n      "type": "/v3/project/schemas/labelSelector"\n    },\n    "state": "active",\n    "terminationGracePeriodSeconds": 30,\n    "transitioning": "no",\n    "transitioningMessage": "",\n    "type": "deployment",\n    "uuid": "f998037d-8a5c-11e8-a4cf-0245a7ebb0fd",\n    "workloadAnnotations": {\n      "deployment.kubernetes.io/revision": "1",\n      "field.cattle.io/creatorId": "user-f4tt2"\n    },\n    "workloadLabels": {\n      "workload.user.cattle.io/workloadselector": "deployment-default-nginx"\n    },\n    "scheduling": {\n      "node": {}\n    },\n    "description": "my decript",\n    "volumes": []\n  }\n}\n')),(0,l.kt)("h4",{id:"\u54cd\u5e94"},"\u54cd\u5e94"),(0,l.kt)("p",null,"\u4e0b\u9762\u7684\u4ee3\u7801\u793a\u4f8b\u63cf\u8ff0\u4e86\u4e00\u4e2a API \u54cd\u5e94\uff0c\u5305\u62ec\u5b83\u7684\u5143\u6570\u636e\u6807\u5934\u548c\u6b63\u6587\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "auditID": "a886fd9f-5d6b-4ae3-9a10-5bff8f3d68af",\n  "responseStatus": "200",\n  "stage": "ResponseComplete",\n  "stageTimestamp": "2018-07-20 10:33:06 +0800",\n  "responseBody": {\n    "actionLinks": {\n      "pause": "https://localhost:8443/v3/project/c-bcz5t:p-fdr4s/workloads/deployment:default:nginx?action=pause",\n      "resume": "https://localhost:8443/v3/project/c-bcz5t:p-fdr4s/workloads/deployment:default:nginx?action=resume",\n      "rollback": "https://localhost:8443/v3/project/c-bcz5t:p-fdr4s/workloads/deployment:default:nginx?action=rollback"\n    },\n    "annotations": {},\n    "baseType": "workload",\n    "containers": [\n      {\n        "allowPrivilegeEscalation": false,\n        "image": "nginx",\n        "imagePullPolicy": "Always",\n        "initContainer": false,\n        "name": "nginx",\n        "ports": [\n          {\n            "containerPort": 80,\n            "dnsName": "nginx-nodeport",\n            "kind": "NodePort",\n            "name": "80tcp01",\n            "protocol": "TCP",\n            "sourcePort": 0,\n            "type": "/v3/project/schemas/containerPort"\n          }\n        ],\n        "privileged": false,\n        "readOnly": false,\n        "resources": {\n          "type": "/v3/project/schemas/resourceRequirements"\n        },\n        "restartCount": 0,\n        "runAsNonRoot": false,\n        "stdin": true,\n        "stdinOnce": false,\n        "terminationMessagePath": "/dev/termination-log",\n        "terminationMessagePolicy": "File",\n        "tty": true,\n        "type": "/v3/project/schemas/container"\n      }\n    ],\n    "created": "2018-07-18T07:34:16Z",\n    "createdTS": 1531899256000,\n    "creatorId": null,\n    "deploymentConfig": {\n      "maxSurge": 1,\n      "maxUnavailable": 0,\n      "minReadySeconds": 0,\n      "progressDeadlineSeconds": 600,\n      "revisionHistoryLimit": 10,\n      "strategy": "RollingUpdate"\n    },\n    "deploymentStatus": {\n      "availableReplicas": 1,\n      "conditions": [\n        {\n          "lastTransitionTime": "2018-07-18T07:34:38Z",\n          "lastTransitionTimeTS": 1531899278000,\n          "lastUpdateTime": "2018-07-18T07:34:38Z",\n          "lastUpdateTimeTS": 1531899278000,\n          "message": "Deployment has minimum availability.",\n          "reason": "MinimumReplicasAvailable",\n          "status": "True",\n          "type": "Available"\n        },\n        {\n          "lastTransitionTime": "2018-07-18T07:34:16Z",\n          "lastTransitionTimeTS": 1531899256000,\n          "lastUpdateTime": "2018-07-18T07:34:38Z",\n          "lastUpdateTimeTS": 1531899278000,\n          "message": "ReplicaSet \\"nginx-64d85666f9\\" has successfully progressed.",\n          "reason": "NewReplicaSetAvailable",\n          "status": "True",\n          "type": "Progressing"\n        }\n      ],\n      "observedGeneration": 2,\n      "readyReplicas": 1,\n      "replicas": 1,\n      "type": "/v3/project/schemas/deploymentStatus",\n      "unavailableReplicas": 0,\n      "updatedReplicas": 1\n    },\n    "dnsPolicy": "ClusterFirst",\n    "hostIPC": false,\n    "hostNetwork": false,\n    "hostPID": false,\n    "id": "deployment:default:nginx",\n    "labels": {\n      "workload.user.cattle.io/workloadselector": "deployment-default-nginx"\n    },\n    "links": {\n      "remove": "https://localhost:8443/v3/project/c-bcz5t:p-fdr4s/workloads/deployment:default:nginx",\n      "revisions": "https://localhost:8443/v3/project/c-bcz5t:p-fdr4s/workloads/deployment:default:nginx/revisions",\n      "self": "https://localhost:8443/v3/project/c-bcz5t:p-fdr4s/workloads/deployment:default:nginx",\n      "update": "https://localhost:8443/v3/project/c-bcz5t:p-fdr4s/workloads/deployment:default:nginx",\n      "yaml": "https://localhost:8443/v3/project/c-bcz5t:p-fdr4s/workloads/deployment:default:nginx/yaml"\n    },\n    "name": "nginx",\n    "namespaceId": "default",\n    "paused": false,\n    "projectId": "c-bcz5t:p-fdr4s",\n    "publicEndpoints": [\n      {\n        "addresses": ["10.64.3.58"],\n        "allNodes": true,\n        "ingressId": null,\n        "nodeId": null,\n        "podId": null,\n        "port": 30917,\n        "protocol": "TCP",\n        "serviceId": "default:nginx-nodeport"\n      }\n    ],\n    "restartPolicy": "Always",\n    "scale": 1,\n    "schedulerName": "default-scheduler",\n    "selector": {\n      "matchLabels": {\n        "workload.user.cattle.io/workloadselector": "deployment-default-nginx"\n      },\n      "type": "/v3/project/schemas/labelSelector"\n    },\n    "state": "active",\n    "terminationGracePeriodSeconds": 30,\n    "transitioning": "no",\n    "transitioningMessage": "",\n    "type": "deployment",\n    "uuid": "f998037d-8a5c-11e8-a4cf-0245a7ebb0fd",\n    "workloadAnnotations": {\n      "deployment.kubernetes.io/revision": "1",\n      "field.cattle.io/creatorId": "user-f4tt2"\n    },\n    "workloadLabels": {\n      "workload.user.cattle.io/workloadselector": "deployment-default-nginx"\n    }\n  }\n}\n')))}c.isMDXComponent=!0}}]);