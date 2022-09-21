"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[81391],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),h=i(r),m=o,d=h["".concat(u,".").concat(m)]||h[m]||l[m]||a;return r?n.createElement(d,s(s({ref:t},c),{},{components:r})):n.createElement(d,s({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=h;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:o,s[1]=p;for(var i=2;i<a;i++)s[i]=r[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},22779:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return p},metadata:function(){return i},toc:function(){return l}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),s=["components"],p={title:"\u76d1\u63a7\u6700\u4f73\u5b9e\u8df5",weight:2},u=void 0,i={unversionedId:"reference-guides/best-practices/rancher-managed-clusters/monitoring-best-practices",id:"reference-guides/best-practices/rancher-managed-clusters/monitoring-best-practices",title:"\u76d1\u63a7\u6700\u4f73\u5b9e\u8df5",description:"\u914d\u7f6e\u5408\u7406\u7684\u76d1\u63a7\u548c\u544a\u8b66\u89c4\u5219\u5bf9\u4e8e\u5b89\u5168\u3001\u53ef\u9760\u5730\u8fd0\u884c\u751f\u4ea7\u73af\u5883\u4e2d\u7684\u5de5\u4f5c\u8d1f\u8f7d\u81f3\u5173\u91cd\u8981\u3002\u5728\u4f7f\u7528 Kubernetes \u548c Rancher \u65f6\u4e5f\u662f\u5982\u6b64\u3002\u5e78\u8fd0\u7684\u662f\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u96c6\u6210\u7684\u76d1\u63a7\u548c\u544a\u8b66\u529f\u80fd\u6765\u7b80\u5316\u6574\u4e2a\u8fc7\u7a0b\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/reference-guides/best-practices/rancher-managed-clusters/monitoring-best-practices.md",sourceDirName:"reference-guides/best-practices/rancher-managed-clusters",slug:"/reference-guides/best-practices/rancher-managed-clusters/monitoring-best-practices",permalink:"/zh/reference-guides/best-practices/rancher-managed-clusters/monitoring-best-practices",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/best-practices/rancher-managed-clusters/monitoring-best-practices.md",tags:[],version:"current",lastUpdatedAt:1663710212,formattedLastUpdatedAt:"2022/9/20",frontMatter:{title:"\u76d1\u63a7\u6700\u4f73\u5b9e\u8df5",weight:2},sidebar:"tutorialSidebar",previous:{title:"Logging \u6700\u4f73\u5b9e\u8df5",permalink:"/zh/reference-guides/best-practices/rancher-managed-clusters/logging-best-practices"},next:{title:"\u8bbe\u7f6e\u5bb9\u5668\u7684\u6280\u5de7",permalink:"/zh/reference-guides/best-practices/rancher-managed-clusters/tips-to-set-up-containers"}},c={},l=[{value:"\u76d1\u63a7\u5185\u5bb9",id:"\u76d1\u63a7\u5185\u5bb9",level:2},{value:"\u914d\u7f6e Prometheus \u8d44\u6e90\u4f7f\u7528",id:"\u914d\u7f6e-prometheus-\u8d44\u6e90\u4f7f\u7528",level:2},{value:"\u5b58\u50a8\u548c\u6570\u636e\u4fdd\u7559",id:"\u5b58\u50a8\u548c\u6570\u636e\u4fdd\u7559",level:3},{value:"CPU \u548c\u5185\u5b58\u7684\u8bf7\u6c42\u548c\u9650\u5236",id:"cpu-\u548c\u5185\u5b58\u7684\u8bf7\u6c42\u548c\u9650\u5236",level:3},{value:"\u957f\u671f\u50a8\u5b58",id:"\u957f\u671f\u50a8\u5b58",level:3},{value:"\u6293\u53d6\u81ea\u5b9a\u4e49\u5de5\u4f5c\u8d1f\u8f7d",id:"\u6293\u53d6\u81ea\u5b9a\u4e49\u5de5\u4f5c\u8d1f\u8f7d",level:2},{value:"\u5173\u4e8e Prometheus Exporters",id:"\u5173\u4e8e-prometheus-exporters",level:3},{value:"Prometheus \u7684\u7f16\u7a0b\u8bed\u8a00\u548c\u6846\u67b6\u652f\u6301",id:"prometheus-\u7684\u7f16\u7a0b\u8bed\u8a00\u548c\u6846\u67b6\u652f\u6301",level:3},{value:"ServiceMonitor \u548c PodMonitor",id:"servicemonitor-\u548c-podmonitor",level:3},{value:"Prometheus \u63a8\u9001\u7f51\u5173\uff08Pushgateway\uff09",id:"prometheus-\u63a8\u9001\u7f51\u5173pushgateway",level:3},{value:"Prometheus Blackbox \u76d1\u63a7",id:"prometheus-blackbox-\u76d1\u63a7",level:3},{value:"\u5728\uff08\u5fae\uff09\u670d\u52a1\u67b6\u6784\u4e2d\u8fdb\u884c\u76d1\u63a7",id:"\u5728\u5fae\u670d\u52a1\u67b6\u6784\u4e2d\u8fdb\u884c\u76d1\u63a7",level:2},{value:"\u771f\u5b9e\u7528\u6237\u76d1\u63a7",id:"\u771f\u5b9e\u7528\u6237\u76d1\u63a7",level:2},{value:"\u5b89\u5168\u76d1\u63a7",id:"\u5b89\u5168\u76d1\u63a7",level:2},{value:"\u8bbe\u7f6e\u544a\u8b66",id:"\u8bbe\u7f6e\u544a\u8b66",level:2}],h={toc:l};function m(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u914d\u7f6e\u5408\u7406\u7684\u76d1\u63a7\u548c\u544a\u8b66\u89c4\u5219\u5bf9\u4e8e\u5b89\u5168\u3001\u53ef\u9760\u5730\u8fd0\u884c\u751f\u4ea7\u73af\u5883\u4e2d\u7684\u5de5\u4f5c\u8d1f\u8f7d\u81f3\u5173\u91cd\u8981\u3002\u5728\u4f7f\u7528 Kubernetes \u548c Rancher \u65f6\u4e5f\u662f\u5982\u6b64\u3002\u5e78\u8fd0\u7684\u662f\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u96c6\u6210\u7684\u76d1\u63a7\u548c\u544a\u8b66\u529f\u80fd\u6765\u7b80\u5316\u6574\u4e2a\u8fc7\u7a0b\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/monitoring-and-alerting"},"Rancher \u76d1\u63a7\u6587\u6863"),"\u63cf\u8ff0\u4e86\u5982\u4f55\u8bbe\u7f6e\u5b8c\u6574\u7684 Prometheus \u548c Grafana\u3002\u8fd9\u662f\u5f00\u7bb1\u5373\u7528\u7684\u529f\u80fd\uff0c\u5b83\u5c06\u4ece\u96c6\u7fa4\u4e2d\u7684\u6240\u6709\u7cfb\u7edf\u548c Kubernetes \u7ec4\u4ef6\u4e2d\u6293\u53d6\u76d1\u63a7\u6570\u636e\uff0c\u5e76\u63d0\u4f9b\u5408\u7406\u7684\u4eea\u8868\u677f\u548c\u544a\u8b66\u3002\u4f46\u4e3a\u4e86\u5b9e\u73b0\u53ef\u9760\u7684\u8bbe\u7f6e\uff0c\u4f60\u8fd8\u9700\u8981\u76d1\u63a7\u4f60\u7684\u5de5\u4f5c\u8d1f\u8f7d\u5e76\u4f7f Prometheus \u548c Grafana \u9002\u5e94\u4f60\u7684\u7279\u5b9a\u7528\u4f8b\u548c\u96c6\u7fa4\u89c4\u6a21\u3002\u672c\u6587\u6863\u5c06\u4e3a\u4f60\u63d0\u4f9b\u8fd9\u65b9\u9762\u7684\u6700\u4f73\u5b9e\u8df5\u3002"),(0,a.kt)("h2",{id:"\u76d1\u63a7\u5185\u5bb9"},"\u76d1\u63a7\u5185\u5bb9"),(0,a.kt)("p",null,"Kubernetes \u672c\u8eab\u4ee5\u53ca\u8fd0\u884c\u5728\u5176\u5185\u90e8\u7684\u5e94\u7528\u6784\u6210\u4e86\u4e00\u4e2a\u5206\u5e03\u5f0f\u7cfb\u7edf\uff0c\u4e0d\u540c\u7684\u7ec4\u4ef6\u4e4b\u95f4\u80fd\u591f\u8fdb\u884c\u4ea4\u4e92\u3002\u5bf9\u4e8e\u6574\u4e2a\u7cfb\u7edf\u548c\u6bcf\u4e2a\u5355\u72ec\u7684\u7ec4\u4ef6\uff0c\u4f60\u5fc5\u987b\u786e\u4fdd\u5176\u6027\u80fd\u3001\u53ef\u7528\u6027\u3001\u53ef\u9760\u6027\u548c\u53ef\u6269\u5c55\u6027\u3002\u8be6\u60c5\u8bf7\u53c2\u89c1 Google \u514d\u8d39\u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://landing.google.com/sre/sre-book/"},"Site Reliability Engineering Book"),"\uff0c\u5c24\u5176\u662f\u5173\u4e8e ",(0,a.kt)("a",{parentName:"p",href:"https://landing.google.com/sre/sre-book/chapters/monitoring-distributed-systems/"},"Monitoring distributed systems")," \u7684\u7ae0\u8282\u3002"),(0,a.kt)("h2",{id:"\u914d\u7f6e-prometheus-\u8d44\u6e90\u4f7f\u7528"},"\u914d\u7f6e Prometheus \u8d44\u6e90\u4f7f\u7528"),(0,a.kt)("p",null,"\u5728\u5b89\u88c5\u96c6\u6210\u76d1\u63a7\u65f6\uff0cRancher \u5141\u8bb8\u8fdb\u884c\u4e00\u4e9b\u914d\u7f6e\uff0c\u8fd9\u4e9b\u914d\u7f6e\u53d6\u51b3\u4e8e\u4f60\u7684\u96c6\u7fa4\u89c4\u6a21\u548c\u5176\u4e2d\u8fd0\u884c\u7684\u5de5\u4f5c\u8d1f\u8f7d\u3002\u672c\u7ae0\u5c06\u66f4\u8be6\u7ec6\u5730\u4ecb\u7ecd\u8fd9\u4e9b\u5185\u5bb9\u3002"),(0,a.kt)("h3",{id:"\u5b58\u50a8\u548c\u6570\u636e\u4fdd\u7559"},"\u5b58\u50a8\u548c\u6570\u636e\u4fdd\u7559"),(0,a.kt)("p",null,"Prometheus \u6240\u9700\u7684\u5b58\u50a8\u7a7a\u95f4\u53d6\u51b3\u4e8e\u4f60\u5b58\u50a8\u7684\u65f6\u95f4\u5e8f\u5217\u548c\u6807\u7b7e\u7684\u6570\u91cf\uff0c\u4ee5\u53ca\u4f60\u914d\u7f6e\u7684\u6570\u636e\u4fdd\u7559\u91cf\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0cPrometheus \u5e76\u4e0d\u662f\u7528\u6765\u957f\u671f\u5b58\u50a8\u6307\u6807\u7684\u3002\u6570\u636e\u901a\u5e38\u53ea\u4fdd\u7559\u51e0\u5929\uff0c\u800c\u4e0d\u662f\u51e0\u5468\u6216\u51e0\u4e2a\u6708\u3002\u8fd9\u662f\u56e0\u4e3a Prometheus \u4e0d\u4f1a\u5bf9\u5b58\u50a8\u7684\u6307\u6807\u8fdb\u884c\u4efb\u4f55\u805a\u5408\u3002\u4e0d\u805a\u5408\u7684\u597d\u5904\u662f\u907f\u514d\u7a00\u91ca\u6570\u636e\uff0c\u4f46\u8fd9\u4e5f\u610f\u5473\u7740\u4e0d\u8bbe\u7f6e\u4fdd\u7559\u65f6\u957f\u7684\u8bdd\uff0c\u6240\u9700\u7684\u5b58\u50a8\u7a7a\u95f4\u968f\u7740\u65f6\u95f4\u7684\u63a8\u79fb\u7ebf\u6027\u589e\u957f\u3002"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u662f\u8ba1\u7b97\u6240\u9700\u5b58\u50a8\u7a7a\u95f4\u7684\u4e00\u79cd\u65b9\u6cd5\u3002\u9996\u5148\uff0c\u901a\u8fc7\u4ee5\u4e0b\u67e5\u8be2\u6765\u67e5\u770b Prometheus \u4e2d\u5b58\u50a8\u5757\u7684\u5e73\u5747\u5927\u5c0f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rate(prometheus_tsdb_compaction_chunk_size_bytes_sum[1h]) / rate(prometheus_tsdb_compaction_chunk_samples_sum[1h])\n")),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u627e\u51fa\u6bcf\u79d2\u7684\u6570\u636e\u5f15\u5165\u901f\u7387\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rate(prometheus_tsdb_head_samples_appended_total[1h])\n")),(0,a.kt)("p",null,"\u7136\u540e\u4e0e\u4fdd\u7559\u65f6\u95f4\u76f8\u4e58\uff0c\u5e76\u6dfb\u52a0\u51e0\u4e2a\u767e\u5206\u70b9\u4f5c\u4e3a\u7f13\u51b2\u533a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u5e73\u5747\u5757\u5927\u5c0f\uff08\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d\uff09x \u6bcf\u79d2\u7684\u6570\u636e\u5f15\u5165\u901f\u7387 x \u4fdd\u7559\u65f6\u95f4\uff08\u4ee5\u79d2\u4e3a\u5355\u4f4d\uff09x 1.1 = \u5fc5\u9700\u7684\u5b58\u50a8\u7a7a\u95f4\uff08\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d\uff09\n")),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u8bbf\u95ee",(0,a.kt)("a",{parentName:"p",href:"https://www.robustperception.io/how-much-disk-space-do-prometheus-blocks-use"},"\u8fd9\u7bc7\u535a\u5ba2"),"\u4e86\u89e3\u5173\u4e8e\u5982\u4f55\u8ba1\u7b97\u5fc5\u987b\u7684\u5b58\u50a8\u7a7a\u95f4\u7684\u66f4\u591a\u4fe1\u606f\u3002"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u53c2\u89c1 ",(0,a.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/prometheus/latest/storage"},"Prometheus \u5b98\u65b9\u6587\u6863"),"\u6765\u8fdb\u4e00\u6b65\u4e86\u89e3 Prometheus \u7684\u5b58\u50a8\u6982\u5ff5\u3002"),(0,a.kt)("h3",{id:"cpu-\u548c\u5185\u5b58\u7684\u8bf7\u6c42\u548c\u9650\u5236"},"CPU \u548c\u5185\u5b58\u7684\u8bf7\u6c42\u548c\u9650\u5236"),(0,a.kt)("p",null,"\u5728\u8f83\u5927\u7684 Kubernetes \u96c6\u7fa4\u4e2d\uff0cPrometheus \u4f1a\u6d88\u8017\u5927\u91cf\u5185\u5b58\u3002Prometheus \u9700\u8981\u7684\u5185\u5b58\u4e0e\u5b83\u5b58\u50a8\u7684\u65f6\u95f4\u5e8f\u5217\u548c\u6807\u7b7e\u7684\u6570\u91cf\u4ee5\u53ca\u6293\u53d6\u95f4\u9694\u6709\u5173\u3002"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u8bbf\u95ee",(0,a.kt)("a",{parentName:"p",href:"https://www.robustperception.io/how-much-ram-does-prometheus-2-x-need-for-cardinality-and-ingestion"},"\u8fd9\u7bc7\u535a\u5ba2"),"\u4e86\u89e3\u5173\u4e8e\u5982\u4f55\u8ba1\u7b97\u5fc5\u987b\u7684\u5185\u5b58\u7684\u66f4\u591a\u4fe1\u606f\u3002"),(0,a.kt)("p",null,"\u6240\u9700\u7684 CPU \u6570\u91cf\u4e0e\u4f60\u6b63\u5728\u6267\u884c\u7684\u67e5\u8be2\u6570\u91cf\u76f8\u5173\u3002"),(0,a.kt)("h3",{id:"\u957f\u671f\u50a8\u5b58"},"\u957f\u671f\u50a8\u5b58"),(0,a.kt)("p",null,"Prometheus \u4e0d\u662f\u7528\u4e8e\u957f\u671f\u5b58\u50a8\u6307\u6807\u7684\uff0c\u5b83\u53ea\u7528\u4e8e\u77ed\u671f\u5b58\u50a8\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u60f3\u8981\u957f\u65f6\u95f4\u5b58\u50a8\u90e8\u5206\u6216\u5168\u90e8\u6307\u6807\uff0c\u4f60\u53ef\u4ee5\u5229\u7528 Prometheus \u7684",(0,a.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/prometheus/latest/storage/#remote-storage-integrations"},"\u8fdc\u7a0b\u8bfb/\u5199"),"\u529f\u80fd\u5c06\u5176\u8fde\u63a5\u5230 ",(0,a.kt)("a",{parentName:"p",href:"https://thanos.io/"},"Thanos"),"\uff0c",(0,a.kt)("a",{parentName:"p",href:"https://www.influxdata.com/"},"InfluxDB")," \u6216 ",(0,a.kt)("a",{parentName:"p",href:"https://www.m3db.io/"},"M3DB")," \u7b49\u5b58\u50a8\u7cfb\u7edf\u3002\u4f60\u53ef\u4ee5\u8bbf\u95ee",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/blog/2020/prometheus-metric-federation"},"\u8fd9\u7bc7\u535a\u5ba2"),"\u627e\u5230\u8bbe\u7f6e\u793a\u4f8b\u3002"),(0,a.kt)("h2",{id:"\u6293\u53d6\u81ea\u5b9a\u4e49\u5de5\u4f5c\u8d1f\u8f7d"},"\u6293\u53d6\u81ea\u5b9a\u4e49\u5de5\u4f5c\u8d1f\u8f7d"),(0,a.kt)("p",null,"\u867d\u7136\u96c6\u6210\u7684 Rancher Monitoring \u5df2\u7ecf\u53ef\u4ee5\u4ece\u96c6\u7fa4\u7684\u8282\u70b9\u548c\u7cfb\u7edf\u7ec4\u4ef6\u4e2d\u6293\u53d6\u7cfb\u7edf\u6307\u6807\uff0c\u4f46\u4f60\u4e5f\u9700\u8981\u4e3a\u90e8\u7f72\u5728 Kubernetes \u4e0a\u7684\u81ea\u5b9a\u4e49\u5de5\u4f5c\u8d1f\u8f7d\u6293\u53d6\u6570\u636e\u3002\u4e3a\u6b64\uff0c\u4f60\u53ef\u4ee5\u914d\u7f6e Prometheus\uff0c\u8ba9\u5b83\u5728\u4e00\u5b9a\u7684\u65f6\u95f4\u95f4\u9694\u5185\u5bf9\u4f60\u5e94\u7528\u7684\u7aef\u70b9\u8fdb\u884c HTTP \u8bf7\u6c42\u3002\u7136\u540e\uff0c\u8fd9\u4e9b\u7aef\u70b9\u4f1a\u4ee5 Prometheus \u683c\u5f0f\u8fd4\u56de\u6307\u6807\u3002"),(0,a.kt)("p",null,"\u4e00\u822c\u6765\u8bf4\uff0c\u4f60\u4f1a\u4ece\u96c6\u7fa4\u4e2d\u8fd0\u884c\u7684\u6240\u6709\u5de5\u4f5c\u8d1f\u8f7d\u4e2d\u6293\u53d6\u6570\u636e\uff0c\u7136\u540e\u5c06\u6570\u636e\u7528\u4e8e\u544a\u8b66\u6216\u8c03\u8bd5\u95ee\u9898\u3002\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u4f60\u53ea\u6709\u5728\u5177\u4f53\u4e8b\u4ef6\u53d1\u751f\u540e\u624d\u9700\u8981\u67d0\u4e9b\u6307\u6807\u6570\u636e\u3002\u5982\u679c\u6570\u636e\u5df2\u7ecf\u88ab\u6293\u53d6\u5e76\u5b58\u50a8\u4e86\uff0c\u90a3\u5c31\u597d\u529e\u4e86\u3002\u7531\u4e8e Prometheus \u53ea\u662f\u77ed\u671f\u5b58\u50a8\u6307\u6807\uff0c\u56e0\u6b64\u6293\u53d6\u548c\u5b58\u50a8\u5927\u91cf\u6570\u636e\u7684\u6210\u672c\u5e76\u4e0d\u662f\u90a3\u4e48\u9ad8\u3002\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f Prometheus \u7684\u957f\u671f\u5b58\u50a8\u65b9\u6848\uff0c\u90a3\u4e48\u4f60\u4e5f\u53ef\u4ee5\u51b3\u5b9a\u6301\u4e45\u5b58\u50a8\u54ea\u4e9b\u6570\u636e\u3002"),(0,a.kt)("h3",{id:"\u5173\u4e8e-prometheus-exporters"},"\u5173\u4e8e Prometheus Exporters"),(0,a.kt)("p",null,"\u8bb8\u591a\u7b2c\u4e09\u65b9\u5de5\u4f5c\u8d1f\u8f7d\uff08\u5982\u6570\u636e\u5e93\u3001\u961f\u5217\u6216 Web \u670d\u52a1\u5668\uff09\u8981\u4e48\u5df2\u7ecf\u652f\u6301\u4ee5 Prometheus \u683c\u5f0f\u516c\u5f00\u6307\u6807\uff0c\u8981\u4e48\u6709\u6240\u8c13\u7684 exporter\uff0c\u6765\u5bf9\u5de5\u5177\u7684\u6307\u6807\u683c\u5f0f\u548c Prometheus \u7406\u89e3\u7684\u6307\u6807\u683c\u5f0f\u8fdb\u884c\u8f6c\u6362\u3002\u901a\u5e38\uff0c\u4f60\u53ef\u4ee5\u5c06\u8fd9\u4e9b exporter \u4f5c\u4e3a\u989d\u5916\u7684 Sidecar \u5bb9\u5668\u6dfb\u52a0\u5230\u5de5\u4f5c\u8d1f\u8f7d\u7684 Pod \u4e2d\u3002\u5f88\u591a Helm Chart \u5df2\u7ecf\u5305\u542b\u4e86\u90e8\u7f72 exporter \u7684\u9009\u9879\u3002\u6b64\u5916\uff0c\u4f60\u8fd8\u53ef\u4ee5\u5728 ",(0,a.kt)("a",{parentName:"p",href:"https://promcat.io/"},"promcat.io")," \u548c ",(0,a.kt)("a",{parentName:"p",href:"https://exporterhub.io/"},"ExporterHub")," \u4e0a\u627e\u5230\u4e00\u4e2a\u7531 SysDig \u7b56\u5212\u7684 exporter \u5217\u8868\u3002"),(0,a.kt)("h3",{id:"prometheus-\u7684\u7f16\u7a0b\u8bed\u8a00\u548c\u6846\u67b6\u652f\u6301"},"Prometheus \u7684\u7f16\u7a0b\u8bed\u8a00\u548c\u6846\u67b6\u652f\u6301"),(0,a.kt)("p",null,"\u8981\u60f3\u628a\u4f60\u7684\u81ea\u5b9a\u4e49\u5e94\u7528\u6307\u6807\u653e\u5230 Prometheus \u4e2d\uff0c\u4f60\u5fc5\u987b\u76f4\u63a5\u4ece\u4f60\u7684\u5e94\u7528\u4ee3\u7801\u4e2d\u6536\u96c6\u548c\u66b4\u9732\u8fd9\u4e9b\u6307\u6807\u3002\u5e78\u8fd0\u7684\u662f\uff0c\u5bf9\u4e8e\u5927\u591a\u6570\u6d41\u884c\u7684\u7f16\u7a0b\u8bed\u8a00\u548c\u6846\u67b6\u6765\u8bf4\uff0c\u5df2\u7ecf\u6709\u4e00\u4e9b\u5e93\u548c\u96c6\u6210\u6765\u5e2e\u52a9\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u3002\u5176\u4e2d\u4e00\u4e2a\u4f8b\u5b50\u662f ",(0,a.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-metrics/docs/current/public/prometheus"},"Spring \u6846\u67b6"),"\u4e2d\u7684 Prometheus \u652f\u6301\u3002"),(0,a.kt)("h3",{id:"servicemonitor-\u548c-podmonitor"},"ServiceMonitor \u548c PodMonitor"),(0,a.kt)("p",null,"\u4e00\u65e6\u6240\u6709\u5de5\u4f5c\u8d1f\u8f7d\u90fd\u4ee5 Prometheus \u683c\u5f0f\u516c\u5f00\u4e86\u6307\u6807\u540e\uff0c\u4f60\u5fc5\u987b\u914d\u7f6e Prometheus \u6765\u6293\u53d6\u6570\u636e\u3002Rancher \u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator"},"prometheus-operator"),"\uff0c\u8fd9\u4f7f\u5f97\u4f7f\u7528 ServiceMonitors \u548c PodMonitors \u6765\u6dfb\u52a0\u5176\u4ed6\u6293\u53d6\u76ee\u6807\u53d8\u5f97\u5bb9\u6613\u3002\u5f88\u591a Helm Chart \u5df2\u7ecf\u5305\u542b\u76f4\u63a5\u521b\u5efa\u8fd9\u4e9b\u76d1\u63a7\u5668\u7684\u9009\u9879\u3002\u4f60\u4e5f\u53ef\u4ee5\u5728 Rancher \u6587\u6863\u4e2d\u627e\u5230\u66f4\u591a\u4fe1\u606f\u3002"),(0,a.kt)("h3",{id:"prometheus-\u63a8\u9001\u7f51\u5173pushgateway"},"Prometheus \u63a8\u9001\u7f51\u5173\uff08Pushgateway\uff09"),(0,a.kt)("p",null,"\u6709\u4e9b\u5de5\u4f5c\u8d1f\u8f7d\u7684\u6307\u6807\u5f88\u96be\u88ab Prometheus \u6293\u53d6\uff0c\u5c31\u50cf Jobs \u548c CronJobs \u8fd9\u6837\u7684\u77ed\u671f\u5de5\u4f5c\u8d1f\u8f7d\uff0c\u6216\u8005\u662f\u4e0d\u5141\u8bb8\u5728\u5355\u4e2a\u5904\u7406\u7684\u4f20\u5165\u8bf7\u6c42\u4e4b\u95f4\u5171\u4eab\u6570\u636e\u7684\u5e94\u7528\uff0c\u5982 PHP \u5e94\u7528\u3002"),(0,a.kt)("p",null,"\u8981\u60f3\u83b7\u5f97\u8fd9\u4e9b\u7528\u4f8b\u7684\u6307\u6807\uff0c\u4f60\u53ef\u4ee5\u8bbe\u7f6e ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/prometheus/pushgateway"},"prometheus-pushgateways"),"\u3002CronJob \u6216 PHP \u5e94\u7528\u5c06\u628a\u6307\u6807\u66f4\u65b0\u63a8\u9001\u5230 pushgateway\u3002pushgateway \u6c47\u603b\u5e76\u901a\u8fc7 HTTP \u7aef\u70b9\u66b4\u9732\u5b83\u4eec\uff0c\u7136\u540e\u53ef\u4ee5\u7531 Prometheus \u6293\u53d6\u3002"),(0,a.kt)("h3",{id:"prometheus-blackbox-\u76d1\u63a7"},"Prometheus Blackbox \u76d1\u63a7"),(0,a.kt)("p",null,"\u6709\u65f6\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u4ece\u5916\u90e8\u76d1\u63a7\u5de5\u4f5c\u8d1f\u8f7d\u3002\u4e3a\u6b64\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/prometheus/blackbox_exporter"},"Prometheus blackbox-exporter"),"\uff0c\u5b83\u5141\u8bb8\u901a\u8fc7 HTTP\u3001HTTPS\u3001DNS\u3001TCP \u548c ICMP \u63a2\u6d4b\u4efb\u4f55\u7c7b\u578b\u7684\u7aef\u70b9\u3002"),(0,a.kt)("h2",{id:"\u5728\u5fae\u670d\u52a1\u67b6\u6784\u4e2d\u8fdb\u884c\u76d1\u63a7"},"\u5728\uff08\u5fae\uff09\u670d\u52a1\u67b6\u6784\u4e2d\u8fdb\u884c\u76d1\u63a7"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u6709\u4e00\u4e2a\uff08\u5fae\uff09\u670d\u52a1\u67b6\u6784\uff0c\u5728\u8be5\u67b6\u6784\u4e2d\u96c6\u7fa4\u7684\u591a\u4e2a\u5355\u72ec\u7684\u5de5\u4f5c\u8d1f\u8f7d\u76f8\u4e92\u901a\u4fe1\uff0c\u90a3\u4e48\u62e5\u6709\u8fd9\u4e9b\u6d41\u91cf\u7684\u8be6\u7ec6\u6307\u6807\u548c\u8ddf\u8e2a\u662f\u975e\u5e38\u91cd\u8981\u7684\uff0c\u56e0\u4e3a\u8fd9\u53ef\u4ee5\u5e2e\u52a9\u4f60\u4e86\u89e3\u6240\u6709\u8fd9\u4e9b\u5de5\u4f5c\u8d1f\u8f7d\u4e4b\u95f4\u7684\u901a\u4fe1\u65b9\u5f0f\uff0c\u4ee5\u53ca\u95ee\u9898\u6216\u74f6\u9888\u53ef\u80fd\u51fa\u73b0\u7684\u5730\u65b9\u3002"),(0,a.kt)("p",null,"\u5f53\u7136\uff0c\u4f60\u53ef\u4ee5\u76d1\u63a7\u6240\u6709\u5de5\u4f5c\u8d1f\u8f7d\u4e2d\u7684\u6240\u6709\u5185\u90e8\u6d41\u91cf\uff0c\u5e76\u5c06\u8fd9\u4e9b\u6307\u6807\u66b4\u9732\u7ed9 Prometheus\uff0c\u4f46\u8fd9\u76f8\u5f53\u8017\u8d39\u7cbe\u529b\u3002\u50cf Istio \u8fd9\u6837\u7684\u670d\u52a1\u7f51\u683c\uff08\u53ef\u4ee5\u901a\u8fc7",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/istio/"},"\u5355\u51fb"),"\u5728 Rancher \u4e2d\u5b89\u88c5\uff09\u53ef\u4ee5\u81ea\u52a8\u5b8c\u6210\u8fd9\u9879\u5de5\u4f5c\uff0c\u5e76\u63d0\u4f9b\u6240\u6709 Service \u4e4b\u95f4\u6d41\u91cf\u7684\u4e30\u5bcc\u7684\u9065\u6d4b\u6570\u636e\u3002"),(0,a.kt)("h2",{id:"\u771f\u5b9e\u7528\u6237\u76d1\u63a7"},"\u771f\u5b9e\u7528\u6237\u76d1\u63a7"),(0,a.kt)("p",null,"\u76d1\u63a7\u6240\u6709\u5185\u90e8\u5de5\u4f5c\u8d1f\u8f7d\u7684\u53ef\u7528\u6027\u548c\u6027\u80fd\u5bf9\u4e8e\u7a33\u5b9a\u3001\u53ef\u9760\u548c\u5feb\u901f\u5730\u8fd0\u884c\u5e94\u7528\u81f3\u5173\u91cd\u8981\u3002\u4f46\u8fd9\u4e9b\u6307\u6807\u53ea\u80fd\u5411\u4f60\u5c55\u793a\u90e8\u5206\u60c5\u51b5\u3002\u8981\u60f3\u83b7\u5f97\u4e00\u4e2a\u5b8c\u6574\u7684\u89c6\u56fe\uff0c\u8fd8\u5fc5\u987b\u77e5\u9053\u4f60\u7684\u6700\u7ec8\u7528\u6237\u662f\u5982\u4f55\u5b9e\u9645\u611f\u77e5\u7684\u3002\u4e3a\u6b64\uff0c\u4f60\u53ef\u4ee5\u7814\u7a76\u5404\u79cd",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Real_user_monitoring"},"\u771f\u5b9e\u7528\u6237\u76d1\u63a7\u89e3\u51b3\u65b9\u6848"),"\u3002"),(0,a.kt)("h2",{id:"\u5b89\u5168\u76d1\u63a7"},"\u5b89\u5168\u76d1\u63a7"),(0,a.kt)("p",null,"\u9664\u4e86\u901a\u8fc7\u76d1\u63a7\u5de5\u4f5c\u8d1f\u8f7d\u6765\u68c0\u6d4b\u6027\u80fd\u3001\u53ef\u7528\u6027\u6216\u53ef\u6269\u5c55\u6027\u4e4b\u5916\uff0c\u4f60\u8fd8\u5e94\u8be5\u76d1\u63a7\u96c6\u7fa4\u548c\u8fd0\u884c\u5728\u96c6\u7fa4\u4e2d\u7684\u5de5\u4f5c\u8d1f\u8f7d\uff0c\u6765\u53d1\u73b0\u6f5c\u5728\u7684\u5b89\u5168\u95ee\u9898\u3002\u4e00\u4e2a\u597d\u7684\u505a\u6cd5\u662f\u7ecf\u5e38\u8fd0\u884c ",(0,a.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/cis-scan-guides"},"CIS \u626b\u63cf"),"\u5e76\u53d1\u51fa\u544a\u8b66\uff0c\u6765\u68c0\u67e5\u96c6\u7fa4\u662f\u5426\u6309\u7167\u5b89\u5168\u6700\u4f73\u5b9e\u8df5\u8fdb\u884c\u914d\u7f6e\u3002"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u5de5\u4f5c\u8d1f\u8f7d\uff0c\u4f60\u53ef\u4ee5\u770b\u770b Kubernetes \u548c Container \u5b89\u5168\u89e3\u51b3\u65b9\u6848\uff0c\u6bd4\u5982 ",(0,a.kt)("a",{parentName:"p",href:"https://falco.org/"},"Falco"),"\uff0c",(0,a.kt)("a",{parentName:"p",href:"https://www.aquasec.com/solutions/kubernetes-container-security/"},"Aqua Kubernetes Security"),"\uff0c",(0,a.kt)("a",{parentName:"p",href:"https://sysdig.com/"},"SysDig")," \u7b49\u3002"),(0,a.kt)("h2",{id:"\u8bbe\u7f6e\u544a\u8b66"},"\u8bbe\u7f6e\u544a\u8b66"),(0,a.kt)("p",null,"\u5c06\u6240\u6709\u7684\u6307\u6807\u7eb3\u5165\u76d1\u63a7\u7cfb\u7edf\u5e76\u5728\u4eea\u8868\u677f\u4e2d\u53ef\u89c6\u5316\u662f\u5f88\u597d\u7684\u505a\u6cd5\uff0c\u4f46\u4f60\u4e5f\u5e0c\u671b\u5728\u51fa\u73b0\u95ee\u9898\u65f6\u80fd\u4e3b\u52a8\u6536\u5230\u63d0\u9192\u3002"),(0,a.kt)("p",null,"\u96c6\u6210\u7684 Rancher \u76d1\u63a7\u5df2\u7ecf\u914d\u7f6e\u4e86\u4e00\u5957\u5408\u7406\u7684\u544a\u8b66\uff0c\u8fd9\u4e9b\u544a\u8b66\u5728\u4efb\u4f55 Kubernetes \u96c6\u7fa4\u4e2d\u90fd\u662f\u53ef\u7528\u7684\u3002\u4f60\u53ef\u4ee5\u6269\u5c55\u544a\u8b66\uff0c\u6765\u8986\u76d6\u7279\u5b9a\u7684\u5de5\u4f5c\u8d1f\u8f7d\u548c\u7528\u4f8b\u3002"),(0,a.kt)("p",null,"\u5728\u8bbe\u7f6e\u544a\u8b66\u65f6\uff0c\u4f60\u9700\u8981\u4e3a\u5bf9\u4f60\u5e94\u7528\u975e\u5e38\u5173\u952e\u7684\u5de5\u4f5c\u8d1f\u8f7d\u914d\u7f6e\u544a\u8b66\uff0c\u4f46\u540c\u65f6\u4e5f\u8981\u786e\u4fdd\u544a\u8b66\u4e0d\u4f1a\u592a\u9891\u7e41\u3002\u7406\u60f3\u60c5\u51b5\u4e0b\uff0c\u4f60\u6536\u5230\u7684\u6bcf\u4e00\u4e2a\u544a\u8b66\u90fd\u5e94\u8be5\u662f\u4e00\u4e2a\u4f60\u9700\u8981\u5173\u6ce8\u5e76\u89e3\u51b3\u7684\u95ee\u9898\u3002\u5982\u679c\u4f60\u4e00\u76f4\u6536\u5230\u4e0d\u592a\u5173\u952e\u7684\u544a\u8b66\uff0c\u4f60\u5c31\u6709\u53ef\u80fd\u5f00\u59cb\u5b8c\u5168\u5ffd\u7565\u544a\u8b66\u4fe1\u606f\uff0c\u7136\u540e\u9519\u8fc7\u771f\u6b63\u91cd\u8981\u7684\u544a\u8b66\u3002\u56e0\u6b64\uff0c\u5c11\u91cf\u7684\u544a\u8b66\u53ef\u80fd\u4f1a\u66f4\u597d\u3002\u9996\u5148\uff0c\u4f60\u53ef\u4ee5\u5173\u6ce8\u771f\u6b63\u91cd\u8981\u7684\u6307\u6807\uff0c\u4f8b\u5982\u5e94\u7528\u79bb\u7ebf\u7b49\u3002\u4e4b\u540e\uff0c\u89e3\u51b3\u51fa\u73b0\u7684\u6240\u6709\u95ee\u9898\uff0c\u7136\u540e\u518d\u521b\u5efa\u66f4\u8be6\u7ec6\u7684\u544a\u8b66\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u544a\u8b66\u5f00\u59cb\u53d1\u9001\uff0c\u4f46\u4f60\u6682\u65f6\u65e0\u6cd5\u5904\u7406\uff0c\u4f60\u4e5f\u53ef\u4ee5\u5c06\u544a\u8b66\u9759\u9ed8\u4e00\u5b9a\u65f6\u95f4\uff0c\u4ee5\u4fbf\u4ee5\u540e\u67e5\u770b\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u9700\u8981\u4e86\u89e3\u66f4\u591a\u5173\u4e8e\u5982\u4f55\u8bbe\u7f6e\u544a\u8b66\u548c\u901a\u77e5\u901a\u9053\u7684\u4fe1\u606f\uff0c\u8bf7\u8bbf\u95ee ",(0,a.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/monitoring-and-alerting"},"Rancher \u6587\u6863\u4e2d\u5fc3"),"\u3002"))}m.isMDXComponent=!0}}]);