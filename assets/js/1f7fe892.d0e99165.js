"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[4583],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,g=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return n?o.createElement(g,r(r({ref:t},p),{},{components:n})):o.createElement(g,r({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},74402:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return m}});var o=n(87462),a=n(63366),i=(n(67294),n(3905)),r=["components"],s={title:"Selectors and Scrape Configs",weight:2},c=void 0,l={unversionedId:"explanations/integrations-in-rancher/istio/configuration-options/selectors-and-scrape-configurations",id:"explanations/integrations-in-rancher/istio/configuration-options/selectors-and-scrape-configurations",title:"Selectors and Scrape Configs",description:"The Monitoring app sets prometheus.prometheusSpec.ignoreNamespaceSelectors=false, which enables monitoring across all namespaces by default.",source:"@site/docs/explanations/integrations-in-rancher/istio/configuration-options/selectors-and-scrape-configurations.md",sourceDirName:"explanations/integrations-in-rancher/istio/configuration-options",slug:"/explanations/integrations-in-rancher/istio/configuration-options/selectors-and-scrape-configurations",permalink:"/rancher-docs/explanations/integrations-in-rancher/istio/configuration-options/selectors-and-scrape-configurations",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/explanations/integrations-in-rancher/istio/configuration-options/selectors-and-scrape-configurations.md",tags:[],version:"current",lastUpdatedAt:1660752881,formattedLastUpdatedAt:"8/17/2022",frontMatter:{title:"Selectors and Scrape Configs",weight:2},sidebar:"tutorialSidebar",previous:{title:"Enable Istio with Pod Security Policies",permalink:"/rancher-docs/explanations/integrations-in-rancher/istio/configuration-options/pod-security-policies"},next:{title:"Additional Steps for Installing Istio on an RKE2 Cluster",permalink:"/rancher-docs/explanations/integrations-in-rancher/istio/configuration-options/install-istio-on-rke2-cluster"}},p={},m=[{value:"Limiting Monitoring to Specific Namespaces by Setting ignoreNamespaceSelectors to True",id:"limiting-monitoring-to-specific-namespaces-by-setting-ignorenamespaceselectors-to-true",level:3},{value:"Enabling Prometheus to Detect Resources in Other Namespaces",id:"enabling-prometheus-to-detect-resources-in-other-namespaces",level:3},{value:"Monitoring Specific Namespaces: Create a Service Monitor or Pod Monitor",id:"monitoring-specific-namespaces-create-a-service-monitor-or-pod-monitor",level:3},{value:"Monitoring across namespaces: Set ignoreNamespaceSelectors to False",id:"monitoring-across-namespaces-set-ignorenamespaceselectors-to-false",level:3}],u={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Monitoring app sets ",(0,i.kt)("inlineCode",{parentName:"p"},"prometheus.prometheusSpec.ignoreNamespaceSelectors=false"),", which enables monitoring across all namespaces by default."),(0,i.kt)("p",null,"This ensures you can view traffic, metrics and graphs for resources deployed in a namespace with ",(0,i.kt)("inlineCode",{parentName:"p"},"istio-injection=enabled")," label. "),(0,i.kt)("p",null,"If you would like to limit Prometheus to specific namespaces, set ",(0,i.kt)("inlineCode",{parentName:"p"},"prometheus.prometheusSpec.ignoreNamespaceSelectors=true"),". Once you do this, you will need to add additional configuration to continue to monitor your resources."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#limiting-monitoring-to-specific-namespaces-by-setting-ignorenamespaceselectors-to-true"},"Limiting Monitoring to Specific Namespaces by Setting ignoreNamespaceSelectors to True")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#enabling-prometheus-to-detect-resources-in-other-namespaces"},"Enabling Prometheus to Detect Resources in Other Namespaces")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#monitoring-specific-namespaces-create-a-service-monitor-or-pod-monitor"},"Monitoring Specific Namespaces: Create a Service Monitor or Pod Monitor")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#monitoring-across-namespaces-set-ignorenamespaceselectors-to-false"},"Monitoring Across Namespaces: Set ignoreNamespaceSelectors to False"))),(0,i.kt)("h3",{id:"limiting-monitoring-to-specific-namespaces-by-setting-ignorenamespaceselectors-to-true"},"Limiting Monitoring to Specific Namespaces by Setting ignoreNamespaceSelectors to True"),(0,i.kt)("p",null,"To limit monitoring to specific namespaces, you will edit the ",(0,i.kt)("inlineCode",{parentName:"p"},"ignoreNamespaceSelectors")," Helm chart option. You will configure this option when installing or upgrading the Monitoring Helm chart:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"When installing or upgrading the Monitoring Helm chart, edit the values.yml and set",(0,i.kt)("inlineCode",{parentName:"li"},"prometheus.prometheusSpec.ignoreNamespaceSelectors=true"),"."),(0,i.kt)("li",{parentName:"ol"},"Complete the install or upgrade.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," Prometheus will be limited to specific namespaces  which means one of the following configurations will need to be set up to continue to view data in various dashboards"),(0,i.kt)("h3",{id:"enabling-prometheus-to-detect-resources-in-other-namespaces"},"Enabling Prometheus to Detect Resources in Other Namespaces"),(0,i.kt)("p",null,"There are two different ways to enable Prometheus to detect resources in other namespaces when ",(0,i.kt)("inlineCode",{parentName:"p"},"prometheus.prometheusSpec.ignoreNamespaceSelectors=true"),": "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Monitoring specific namespaces:")," Add a Service Monitor or Pod Monitor in the namespace with the targets you want to scrape."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Monitoring across namespaces:")," Add an ",(0,i.kt)("inlineCode",{parentName:"li"},"additionalScrapeConfig")," to your rancher-monitoring instance to scrape all targets in all namespaces.")),(0,i.kt)("h3",{id:"monitoring-specific-namespaces-create-a-service-monitor-or-pod-monitor"},"Monitoring Specific Namespaces: Create a Service Monitor or Pod Monitor"),(0,i.kt)("p",null,"This option allows you to define which specific services or pods you would like monitored in a specific namespace. "),(0,i.kt)("p",null,"The usability tradeoff is that you have to create the service monitor or pod monitor per namespace since you cannot monitor across namespaces."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Prerequisite:")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Define a ServiceMonitor or PodMonitor for ",(0,i.kt)("inlineCode",{parentName:"p"},"<your namespace>"),". An example ServiceMonitor is provided below. "))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,i.kt)("li",{parentName:"ol"},"Go to the cluster that you created and click ",(0,i.kt)("strong",{parentName:"li"},"Explore"),"."),(0,i.kt)("li",{parentName:"ol"},"In the top navigation bar, open the kubectl shell."),(0,i.kt)("li",{parentName:"ol"},"If the ServiceMonitor or PodMonitor file is stored locally in your cluster, in ",(0,i.kt)("inlineCode",{parentName:"li"},"kubectl create -f <name of service/pod monitor file>.yaml"),"."),(0,i.kt)("li",{parentName:"ol"},"If the ServiceMonitor or PodMonitor is not stored locally, run ",(0,i.kt)("inlineCode",{parentName:"li"},"cat<< EOF | kubectl apply -f -"),", paste the file contents into the terminal, then run ",(0,i.kt)("inlineCode",{parentName:"li"},"EOF")," to complete the command. "),(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"kubectl label namespace <your namespace> istio-injection=enabled")," to enable the envoy sidecar injection.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:"),"  ",(0,i.kt)("inlineCode",{parentName:"p"},"<your namespace>")," can be scraped by prometheus. "),(0,i.kt)("figcaption",null,"Example Service Monitor for Istio Proxies"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: monitoring.coreos.com/v1\nkind: ServiceMonitor\nmetadata:\n  name: envoy-stats-monitor\n  namespace: istio-system\n  labels:\n    monitoring: istio-proxies\nspec:\n  selector:\n    matchExpressions:\n    - {key: istio-prometheus-ignore, operator: DoesNotExist}\n  namespaceSelector:\n    any: true\n  jobLabel: envoy-stats\n  endpoints:\n  - path: /stats/prometheus\n    targetPort: 15090\n    interval: 15s\n    relabelings:\n    - sourceLabels: [__meta_kubernetes_pod_container_port_name]\n      action: keep\n      regex: '.*-envoy-prom'\n    - action: labeldrop\n      regex: \"__meta_kubernetes_pod_label_(.+)\"\n    - sourceLabels: [__meta_kubernetes_namespace]\n      action: replace\n      targetLabel: namespace\n    - sourceLabels: [__meta_kubernetes_pod_name]\n      action: replace\n      targetLabel: pod_name\n")),(0,i.kt)("h3",{id:"monitoring-across-namespaces-set-ignorenamespaceselectors-to-false"},"Monitoring across namespaces: Set ignoreNamespaceSelectors to False"),(0,i.kt)("p",null,"This enables monitoring across namespaces by giving Prometheus additional scrape configurations. "),(0,i.kt)("p",null,"The usability tradeoff is that  all of Prometheus' ",(0,i.kt)("inlineCode",{parentName:"p"},"additionalScrapeConfigs")," are maintained in a single Secret. This could make upgrading difficult if monitoring is already deployed with additionalScrapeConfigs before installing Istio. "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"When installing or upgrading the Monitoring Helm chart, edit the values.yml and set the ",(0,i.kt)("inlineCode",{parentName:"li"},"prometheus.prometheusSpec.additionalScrapeConfigs")," array to the ",(0,i.kt)("strong",{parentName:"li"},"Additional Scrape Config")," provided below. "),(0,i.kt)("li",{parentName:"ol"},"Complete the install or upgrade.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," All namespaces with the ",(0,i.kt)("inlineCode",{parentName:"p"},"istio-injection=enabled")," label will be scraped by prometheus."),(0,i.kt)("figcaption",null,"Additional Scrape Config"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- job_name: 'istio/envoy-stats'\n  scrape_interval: 15s\n  metrics_path: /stats/prometheus\n  kubernetes_sd_configs:\n    - role: pod\n  relabel_configs:\n    - source_labels: [__meta_kubernetes_pod_container_port_name]\n      action: keep\n      regex: '.*-envoy-prom'\n    - source_labels: [__address__, __meta_kubernetes_pod_annotation_prometheus_io_port]\n      action: replace\n      regex: ([^:]+)(?::\\d+)?;(\\d+)\n      replacement: $1:15090\n      target_label: __address__\n    - action: labelmap\n      regex: __meta_kubernetes_pod_label_(.+)\n    - source_labels: [__meta_kubernetes_namespace]\n      action: replace\n      target_label: namespace\n    - source_labels: [__meta_kubernetes_pod_name]\n      action: replace\n      target_label: pod_name\n")))}d.isMDXComponent=!0}}]);