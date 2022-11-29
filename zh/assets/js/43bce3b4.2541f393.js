"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[1549],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return g}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),c=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(a.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),g=o,m=d["".concat(a,".").concat(g)]||d[g]||s[g]||i;return t?r.createElement(m,p(p({ref:n},u),{},{components:t})):r.createElement(m,p({ref:n},u))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,p=new Array(i);p[0]=d;var l={};for(var a in n)hasOwnProperty.call(n,a)&&(l[a]=n[a]);l.originalType=e,l.mdxType="string"==typeof e?e:o,p[1]=l;for(var c=2;c<i;c++)p[c]=t[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},86683:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return a},default:function(){return g},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),p=["components"],l={title:"nginx-proxy \u6545\u969c\u6392\u9664"},a=void 0,c={unversionedId:"troubleshooting/kubernetes-components/troubleshooting-nginx-proxy",id:"troubleshooting/kubernetes-components/troubleshooting-nginx-proxy",title:"nginx-proxy \u6545\u969c\u6392\u9664",description:"\u6bcf\u4e2a\u6ca1\u6709 controlplane \u89d2\u8272\u7684\u8282\u70b9\u4e0a\u90fd\u90e8\u7f72\u4e86 nginx-proxy \u5bb9\u5668\u3002nginx-proxy \u57fa\u4e8e\u5177\u6709 controlplane \u89d2\u8272\u7684\u53ef\u7528\u8282\u70b9\u6765\u52a8\u6001\u751f\u6210 NGINX \u914d\u7f6e\uff0c\u4ece\u800c\u63d0\u4f9b\u5bf9\u8fd9\u4e9b controlplane \u89d2\u8272\u8282\u70b9\u7684\u8bbf\u95ee\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/troubleshooting/kubernetes-components/troubleshooting-nginx-proxy.md",sourceDirName:"troubleshooting/kubernetes-components",slug:"/troubleshooting/kubernetes-components/troubleshooting-nginx-proxy",permalink:"/zh/troubleshooting/kubernetes-components/troubleshooting-nginx-proxy",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/troubleshooting/kubernetes-components/troubleshooting-nginx-proxy.md",tags:[],version:"current",lastUpdatedAt:1669185570,formattedLastUpdatedAt:"2022/11/23",frontMatter:{title:"nginx-proxy \u6545\u969c\u6392\u9664"},sidebar:"tutorialSidebar",previous:{title:"Controlplane \u8282\u70b9\u6545\u969c\u6392\u9664",permalink:"/zh/troubleshooting/kubernetes-components/troubleshooting-controlplane-nodes"},next:{title:"Worker \u8282\u70b9\u548c\u901a\u7528\u7ec4\u4ef6\u6545\u969c\u6392\u9664",permalink:"/zh/troubleshooting/kubernetes-components/troubleshooting-worker-nodes-and-generic-components"}},u={},s=[{value:"\u68c0\u67e5\u5bb9\u5668\u662f\u5426\u6b63\u5728\u8fd0\u884c",id:"\u68c0\u67e5\u5bb9\u5668\u662f\u5426\u6b63\u5728\u8fd0\u884c",level:2},{value:"\u68c0\u67e5\u751f\u6210\u7684 NGINX \u914d\u7f6e",id:"\u68c0\u67e5\u751f\u6210\u7684-nginx-\u914d\u7f6e",level:2},{value:"nginx-proxy \u5bb9\u5668\u65e5\u5fd7\u8bb0\u5f55",id:"nginx-proxy-\u5bb9\u5668\u65e5\u5fd7\u8bb0\u5f55",level:2}],d={toc:s};function g(e){var n=e.components,t=(0,o.Z)(e,p);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u6bcf\u4e2a\u6ca1\u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},"controlplane")," \u89d2\u8272\u7684\u8282\u70b9\u4e0a\u90fd\u90e8\u7f72\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"nginx-proxy")," \u5bb9\u5668\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"nginx-proxy")," \u57fa\u4e8e\u5177\u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},"controlplane")," \u89d2\u8272\u7684\u53ef\u7528\u8282\u70b9\u6765\u52a8\u6001\u751f\u6210 NGINX \u914d\u7f6e\uff0c\u4ece\u800c\u63d0\u4f9b\u5bf9\u8fd9\u4e9b ",(0,i.kt)("inlineCode",{parentName:"p"},"controlplane")," \u89d2\u8272\u8282\u70b9\u7684\u8bbf\u95ee\u3002"),(0,i.kt)("h2",{id:"\u68c0\u67e5\u5bb9\u5668\u662f\u5426\u6b63\u5728\u8fd0\u884c"},"\u68c0\u67e5\u5bb9\u5668\u662f\u5426\u6b63\u5728\u8fd0\u884c"),(0,i.kt)("p",null,"\u8be5\u5bb9\u5668\u79f0\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"nginx-proxy"),"\uff0c\u5b83\u7684\u72b6\u6001\u5e94\u8be5\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"Up"),"\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"Up")," \u540e\u9762\u663e\u793a\u7684\u65f6\u95f4\u6307\u7684\u662f\u5bb9\u5668\u8fd0\u884c\u7684\u65f6\u95f4\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker ps -a -f=name=nginx-proxy\n")),(0,i.kt)("p",null,"\u8f93\u51fa\u793a\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'docker ps -a -f=name=nginx-proxy\nCONTAINER ID        IMAGE                       COMMAND                  CREATED             STATUS              PORTS               NAMES\nc3e933687c0e        rancher/rke-tools:v0.1.15   "nginx-proxy CP_HO..."   3 hours ago         Up 3 hours                              nginx-proxy\n')),(0,i.kt)("h2",{id:"\u68c0\u67e5\u751f\u6210\u7684-nginx-\u914d\u7f6e"},"\u68c0\u67e5\u751f\u6210\u7684 NGINX \u914d\u7f6e"),(0,i.kt)("p",null,"\u751f\u6210\u7684\u914d\u7f6e\u5305\u62ec\u4e86\u5177\u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},"controlplane")," \u89d2\u8272\u7684\u8282\u70b9\u7684 IP \u5730\u5740\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u6765\u68c0\u67e5\u914d\u7f6e\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker exec nginx-proxy cat /etc/nginx/nginx.conf\n")),(0,i.kt)("p",null,"\u8f93\u51fa\u793a\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"error_log stderr notice;\n\nworker_processes auto;\nevents {\n  multi_accept on;\n  use epoll;\n  worker_connections 1024;\n}\n\nstream {\n        upstream kube_apiserver {\n\n            server ip_of_controlplane_node1:6443;\n\n            server ip_of_controlplane_node2:6443;\n\n        }\n\n        server {\n            listen        6443;\n            proxy_pass    kube_apiserver;\n            proxy_timeout 30;\n            proxy_connect_timeout 2s;\n\n        }\n\n}\n")),(0,i.kt)("h2",{id:"nginx-proxy-\u5bb9\u5668\u65e5\u5fd7\u8bb0\u5f55"},"nginx-proxy \u5bb9\u5668\u65e5\u5fd7\u8bb0\u5f55"),(0,i.kt)("p",null,"\u5bb9\u5668\u7684\u65e5\u5fd7\u8bb0\u5f55\u53ef\u80fd\u5305\u542b\u95ee\u9898\u7684\u4fe1\u606f\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker logs nginx-proxy\n")))}g.isMDXComponent=!0}}]);