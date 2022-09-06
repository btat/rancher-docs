"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[70195],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(a),h=r,g=p["".concat(l,".").concat(h)]||p[h]||m[h]||i;return a?n.createElement(g,o(o({ref:t},c),{},{components:a})):n.createElement(g,o({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},6144:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return m}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],s={title:"Built-in Dashboards",weight:3},l=void 0,u={unversionedId:"explanations/integrations-in-rancher/monitoring-and-alerting/built-in-dashboards",id:"explanations/integrations-in-rancher/monitoring-and-alerting/built-in-dashboards",title:"Built-in Dashboards",description:"- Grafana UI",source:"@site/docs/explanations/integrations-in-rancher/monitoring-and-alerting/built-in-dashboards.md",sourceDirName:"explanations/integrations-in-rancher/monitoring-and-alerting",slug:"/explanations/integrations-in-rancher/monitoring-and-alerting/built-in-dashboards",permalink:"/rancher-docs/explanations/integrations-in-rancher/monitoring-and-alerting/built-in-dashboards",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/explanations/integrations-in-rancher/monitoring-and-alerting/built-in-dashboards.md",tags:[],version:"current",lastUpdatedAt:1660752881,formattedLastUpdatedAt:"8/17/2022",frontMatter:{title:"Built-in Dashboards",weight:3},sidebar:"tutorialSidebar",previous:{title:"Role-based Access Control",permalink:"/rancher-docs/explanations/integrations-in-rancher/monitoring-and-alerting/rbac-for-monitoring"},next:{title:"Windows Cluster Support for Monitoring V2",permalink:"/rancher-docs/explanations/integrations-in-rancher/monitoring-and-alerting/windows-support"}},c={},m=[{value:"Customizing Grafana",id:"customizing-grafana",level:3},{value:"Persistent Grafana Dashboards",id:"persistent-grafana-dashboards",level:3},{value:"Access to Grafana",id:"access-to-grafana",level:3},{value:"Accessing the Alertmanager UI",id:"accessing-the-alertmanager-ui",level:3},{value:"Viewing Default Alerts",id:"viewing-default-alerts",level:3},{value:"Viewing the Prometheus Targets",id:"viewing-the-prometheus-targets",level:3},{value:"Viewing the PrometheusRules",id:"viewing-the-prometheusrules",level:3}],p={toc:m};function h(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#grafana-ui"},"Grafana UI")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#alertmanager-ui"},"Alertmanager UI")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#prometheus-ui"},"Prometheus UI"))),(0,i.kt)("h1",{id:"grafana-ui"},"Grafana UI"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://grafana.com/grafana/"},"Grafana")," allows you to query, visualize, alert on and understand your metrics no matter where they are stored. Create, explore, and share dashboards with your team and foster a data driven culture."),(0,i.kt)("p",null,"To see the default dashboards for time series data visualization, go to the Grafana UI."),(0,i.kt)("h3",{id:"customizing-grafana"},"Customizing Grafana"),(0,i.kt)("p",null,"To view and customize the PromQL queries powering the Grafana dashboard, see ",(0,i.kt)("a",{parentName:"p",href:"/rancher-docs/how-to-guides/advanced-user-guides/monitoring-alerting-guides/customize-grafana-dashboard"},"this page.")),(0,i.kt)("h3",{id:"persistent-grafana-dashboards"},"Persistent Grafana Dashboards"),(0,i.kt)("p",null,"To create a persistent Grafana dashboard, see ",(0,i.kt)("a",{parentName:"p",href:"/rancher-docs/how-to-guides/advanced-user-guides/monitoring-alerting-guides/create-persistent-grafana-dashboard"},"this page.")),(0,i.kt)("h3",{id:"access-to-grafana"},"Access to Grafana"),(0,i.kt)("p",null,"For information about role-based access control for Grafana, see ",(0,i.kt)("a",{parentName:"p",href:"/rancher-docs/explanations/integrations-in-rancher/monitoring-and-alerting/rbac-for-monitoring#role-based-access-control-for-grafana"},"this section.")),(0,i.kt)("h1",{id:"alertmanager-ui"},"Alertmanager UI"),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-monitoring")," is installed, the Prometheus Alertmanager UI is deployed, allowing you to view your alerts and the current Alertmanager configuration."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This section assumes familiarity with how monitoring components work together. For more information about Alertmanager, see ",(0,i.kt)("a",{parentName:"p",href:"/rancher-docs/explanations/integrations-in-rancher/monitoring-and-alerting/how-monitoring-works#how-alertmanager-works"},"this section.")))),(0,i.kt)("h3",{id:"accessing-the-alertmanager-ui"},"Accessing the Alertmanager UI"),(0,i.kt)("p",null,"The Alertmanager UI lets you see the most recently fired alerts."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Prerequisite:")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-monitoring")," application must be installed."))),(0,i.kt)("p",null,"To see the Alertmanager UI,"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,i.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,i.kt)("li",{parentName:"ol"},"On the ",(0,i.kt)("strong",{parentName:"li"},"Clusters")," page, go to the cluster where you want to see the Alertmanager UI, click ",(0,i.kt)("strong",{parentName:"li"},"Explore"),"."),(0,i.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,i.kt)("strong",{parentName:"li"},"Monitoring"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Alertmanager"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," The Alertmanager UI opens in a new tab. For help with configuration, refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/alerting/latest/alertmanager/"},"official Alertmanager documentation.")),(0,i.kt)("p",null,"For more information on configuring Alertmanager in Rancher, see ",(0,i.kt)("a",{parentName:"p",href:"/rancher-docs/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/alertmanager"},"this page.")),(0,i.kt)("figcaption",null,"The Alertmanager UI"),"![Alertmanager UI](/img/alertmanager-ui.png)",(0,i.kt)("h3",{id:"viewing-default-alerts"},"Viewing Default Alerts"),(0,i.kt)("p",null,"To see alerts that are fired by default, go to the Alertmanager UI and click ",(0,i.kt)("strong",{parentName:"p"},"Expand all groups"),"."),(0,i.kt)("h1",{id:"prometheus-ui"},"Prometheus UI"),(0,i.kt)("p",null,"By default, the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/kube-state-metrics"},"kube-state-metrics service")," provides a wealth of information about CPU and memory utilization to the monitoring application. These metrics cover Kubernetes resources across namespaces. This means that in order to see resource metrics for a service, you don't need to create a new ServiceMonitor for it. Because the data is already in the time series database, you can go to the Prometheus UI and run a PromQL query to get the information. The same query can be used to configure a Grafana dashboard to show a graph of those metrics over time."),(0,i.kt)("p",null,"To see the Prometheus UI, install ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-monitoring"),". Then:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,i.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,i.kt)("li",{parentName:"ol"},"On the ",(0,i.kt)("strong",{parentName:"li"},"Clusters")," page, go to the cluster where you want to see the Prometheus UI and click ",(0,i.kt)("strong",{parentName:"li"},"Explore"),"."),(0,i.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,i.kt)("strong",{parentName:"li"},"Monitoring"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Prometheus Graph"),".")),(0,i.kt)("figcaption",null,"Prometheus Graph UI"),"![Prometheus Graph UI](/img/prometheus-graph-ui.png)",(0,i.kt)("h3",{id:"viewing-the-prometheus-targets"},"Viewing the Prometheus Targets"),(0,i.kt)("p",null,"To see what services you are monitoring, you will need to see your targets. Targets are set up by ServiceMonitors and PodMonitors as sources to scrape metrics from. You won't need to directly edit targets, but the Prometheus UI can be useful for giving you an overview of all of the sources of metrics that are being scraped."),(0,i.kt)("p",null,"To see the Prometheus Targets, install ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-monitoring"),". Then:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,i.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,i.kt)("li",{parentName:"ol"},"On the ",(0,i.kt)("strong",{parentName:"li"},"Clusters")," page, go to the cluster where you want to see the Prometheus targets and click ",(0,i.kt)("strong",{parentName:"li"},"Explore"),"."),(0,i.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,i.kt)("strong",{parentName:"li"},"Monitoring"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Prometheus Targets"),".")),(0,i.kt)("figcaption",null,"Targets in the Prometheus UI"),"![Prometheus Targets UI](/img/prometheus-targets-ui.png)",(0,i.kt)("h3",{id:"viewing-the-prometheusrules"},"Viewing the PrometheusRules"),(0,i.kt)("p",null,"When you define a Rule (which is declared within a RuleGroup in a PrometheusRule resource), the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator/blob/master/Documentation/api.md#rule"},"spec of the Rule itself")," contains labels that are used by Alertmanager to figure out which Route should receive a certain Alert."),(0,i.kt)("p",null,"To see the PrometheusRules, install ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-monitoring"),". Then:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,i.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,i.kt)("li",{parentName:"ol"},"On the ",(0,i.kt)("strong",{parentName:"li"},"Clusters")," page, go to the cluster where you want to see the visualizations and click ",(0,i.kt)("strong",{parentName:"li"},"Explore"),"."),(0,i.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,i.kt)("strong",{parentName:"li"},"Monitoring"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Prometheus Rules"),".")),(0,i.kt)("p",null,"You can also see the rules in the Prometheus UI:"),(0,i.kt)("figcaption",null,"Rules in the Prometheus UI"),"![PrometheusRules UI](/img/prometheus-rules-ui.png)",(0,i.kt)("p",null,"For more information on configuring PrometheusRules in Rancher, see ",(0,i.kt)("a",{parentName:"p",href:"/rancher-docs/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/prometheusrules"},"this page.")))}h.isMDXComponent=!0}}]);