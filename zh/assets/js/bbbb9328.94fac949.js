"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[75476],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return l}});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(r),l=n,f=d["".concat(s,".").concat(l)]||d[l]||m[l]||i;return r?o.createElement(f,a(a({ref:t},p),{},{components:r})):o.createElement(f,a({ref:t},p))}));function l(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},40643:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return l},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return m}});var o=r(87462),n=r(63366),i=(r(67294),r(3905)),a=["components"],c={title:"ServiceMonitor \u548c PodMonitor \u914d\u7f6e",shortTitle:"ServiceMonitor \u548c PodMonitor",weight:7},s=void 0,u={unversionedId:"reference-guides/monitoring-v2-configuration/servicemonitors-and-podmonitors",id:"reference-guides/monitoring-v2-configuration/servicemonitors-and-podmonitors",title:"ServiceMonitor \u548c PodMonitor \u914d\u7f6e",description:"ServiceMonitor \u548c PodMonitor \u90fd\u662f\u4f2a CRD\uff0c\u5b83\u4eec\u6620\u5c04 Prometheus \u81ea\u5b9a\u4e49\u8d44\u6e90\u7684\u6293\u53d6\u914d\u7f6e\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/reference-guides/monitoring-v2-configuration/servicemonitors-and-podmonitors.md",sourceDirName:"reference-guides/monitoring-v2-configuration",slug:"/reference-guides/monitoring-v2-configuration/servicemonitors-and-podmonitors",permalink:"/zh/reference-guides/monitoring-v2-configuration/servicemonitors-and-podmonitors",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/monitoring-v2-configuration/servicemonitors-and-podmonitors.md",tags:[],version:"current",lastUpdatedAt:1663710212,formattedLastUpdatedAt:"2022/9/20",frontMatter:{title:"ServiceMonitor \u548c PodMonitor \u914d\u7f6e",shortTitle:"ServiceMonitor \u548c PodMonitor",weight:7},sidebar:"tutorialSidebar",previous:{title:"\u8def\u7531\u914d\u7f6e",permalink:"/zh/reference-guides/monitoring-v2-configuration/routes"},next:{title:"Helm Chart \u9009\u9879",permalink:"/zh/reference-guides/monitoring-v2-configuration/helm-chart-options"}},p={},m=[{value:"ServiceMonitor",id:"servicemonitor",level:3},{value:"PodMonitor",id:"podmonitor",level:3}],d={toc:m};function l(e){var t=e.components,r=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"ServiceMonitor \u548c PodMonitor \u90fd\u662f\u4f2a CRD\uff0c\u5b83\u4eec\u6620\u5c04 Prometheus \u81ea\u5b9a\u4e49\u8d44\u6e90\u7684\u6293\u53d6\u914d\u7f6e\u3002"),(0,i.kt)("p",null,"\u8fd9\u4e9b\u914d\u7f6e\u5bf9\u8c61\u4ee5\u58f0\u660e\u65b9\u5f0f\u6307\u5b9a Prometheus \u6293\u53d6\u6307\u6807\u7684\u7aef\u70b9\u3002"),(0,i.kt)("p",null,"ServiceMonitor \u6bd4 PodMonitor \u66f4\u5e38\u7528\uff0c\u63a8\u8350\u7528\u4e8e\u5927\u591a\u6570\u7528\u4f8b\u3002"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u672c\u8282\u53c2\u8003\u5047\u8bbe\u4f60\u5df2\u7ecf\u719f\u6089 Monitoring \u7ec4\u4ef6\u7684\u534f\u540c\u5de5\u4f5c\u65b9\u5f0f\u3002\u6709\u5173 Alertmanager \u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"/zh/explanations/integrations-in-rancher/monitoring-and-alerting/how-monitoring-works"},"\u672c\u8282"),"\u3002"))),(0,i.kt)("h3",{id:"servicemonitor"},"ServiceMonitor"),(0,i.kt)("p",null,"\u8fd9\u4e2a\u4f2a CRD \u6620\u5c04\u5230 Prometheus \u81ea\u5b9a\u4e49\u8d44\u6e90\u914d\u7f6e\u7684\u4e00\u90e8\u5206\u3002\u5b83\u4ee5\u58f0\u660e\u65b9\u5f0f\u6307\u5b9a\u5e94\u5982\u4f55\u76d1\u63a7 Kubernetes \u670d\u52a1\u7ec4\u3002"),(0,i.kt)("p",null,"\u521b\u5efa ServiceMonitor \u65f6\uff0cPrometheus Operator \u4f1a\u66f4\u65b0 Prometheus \u6293\u53d6\u914d\u7f6e\uff0c\u4ece\u800c\u5305\u542b ServiceMonitor \u914d\u7f6e\u3002\u7136\u540e Prometheus \u5f00\u59cb\u4ece ServiceMonitor \u4e2d\u5b9a\u4e49\u7684\u7aef\u70b9\u6293\u53d6\u6307\u6807\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u96c6\u7fa4\u4e2d\u7684\u4efb\u4f55 Service \u4e0e ServiceMonitor ",(0,i.kt)("inlineCode",{parentName:"p"},"selector")," \u5b57\u6bb5\u4e2d\u7684\u6807\u7b7e\u5339\u914d\uff0c\u5219\u4f1a\u6839\u636e ServiceMonitor \u6307\u5b9a\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"endpoints")," \u8fdb\u884c\u76d1\u63a7\u3002\u6709\u5173\u53ef\u4ee5\u6307\u5b9a\u7684\u5b57\u6bb5\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u67e5\u770b Prometheus Operator \u7684",(0,i.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator/blob/master/Documentation/api.md#servicemonitor"},"\u89c4\u8303"),"\u3002"),(0,i.kt)("p",null,"\u6709\u5173 ServiceMonitor \u5de5\u4f5c\u539f\u7406\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator/blob/master/Documentation/user-guides/running-exporters.md"},"Prometheus Operator \u6587\u6863"),"\u3002"),(0,i.kt)("h3",{id:"podmonitor"},"PodMonitor"),(0,i.kt)("p",null,"\u8fd9\u4e2a\u4f2a CRD \u6620\u5c04\u5230 Prometheus \u81ea\u5b9a\u4e49\u8d44\u6e90\u914d\u7f6e\u7684\u4e00\u90e8\u5206\u3002\u5b83\u4ee5\u58f0\u660e\u65b9\u5f0f\u6307\u5b9a\u5e94\u5982\u4f55\u76d1\u63a7 Pod \u7ec4\u3002"),(0,i.kt)("p",null,"\u521b\u5efa PodMonitor \u65f6\uff0cPrometheus Operator \u4f1a\u66f4\u65b0 Prometheus \u6293\u53d6\u914d\u7f6e\uff0c\u4ece\u800c\u5305\u542b PodMonitor \u914d\u7f6e\u3002\u7136\u540e Prometheus \u5f00\u59cb\u4ece PodMonitor \u4e2d\u5b9a\u4e49\u7684\u7aef\u70b9\u6293\u53d6\u6307\u6807\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u96c6\u7fa4\u4e2d\u7684\u4efb\u4f55 Pod \u4e0e PodMonitor ",(0,i.kt)("inlineCode",{parentName:"p"},"selector")," \u5b57\u6bb5\u4e2d\u7684\u6807\u7b7e\u5339\u914d\uff0c\u5219\u4f1a\u6839\u636e PodMonitor \u6307\u5b9a\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"podMetricsEndpoints")," \u8fdb\u884c\u76d1\u63a7\u3002\u6709\u5173\u53ef\u4ee5\u6307\u5b9a\u7684\u5b57\u6bb5\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u67e5\u770b Prometheus Operator \u7684",(0,i.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator/blob/master/Documentation/api.md#podmonitorspec"},"\u89c4\u8303"),"\u3002"))}l.isMDXComponent=!0}}]);