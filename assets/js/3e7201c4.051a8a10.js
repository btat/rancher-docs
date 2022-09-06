"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[89147],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),l=c(r),f=a,h=l["".concat(u,".").concat(f)]||l[f]||p[f]||i;return r?n.createElement(h,s(s({ref:t},d),{},{components:r})):n.createElement(h,s({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=l;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},2779:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),s=["components"],o={title:"Setup Guide",weight:2,aliases:["/rancher/v2.5/en/istio/setup","/rancher/v2.5/en/istio/v2.5/setup/","/rancher/v2.x/en/istio/v2.5/setup/"]},u=void 0,c={unversionedId:"pages-for-subheaders/istio-setup-guide",id:"version-2.5/pages-for-subheaders/istio-setup-guide",title:"Setup Guide",description:"This section describes how to enable Istio and start using it in your projects.",source:"@site/versioned_docs/version-2.5/pages-for-subheaders/istio-setup-guide.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/istio-setup-guide",permalink:"/rancher-docs/v2.5/pages-for-subheaders/istio-setup-guide",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/pages-for-subheaders/istio-setup-guide.md",tags:[],version:"2.5",lastUpdatedAt:1662076561,formattedLastUpdatedAt:"9/1/2022",frontMatter:{title:"Setup Guide",weight:2,aliases:["/rancher/v2.5/en/istio/setup","/rancher/v2.5/en/istio/v2.5/setup/","/rancher/v2.x/en/istio/v2.5/setup/"]},sidebar:"tutorialSidebar",previous:{title:"Configuring PrometheusRules",permalink:"/rancher-docs/v2.5/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/prometheusrules"},next:{title:"1. Enable Istio in the Cluster",permalink:"/rancher-docs/v2.5/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-cluster"}},d={},p=[],l={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This section describes how to enable Istio and start using it in your projects."),(0,i.kt)("p",null,"If you use Istio for traffic management, you will need to allow external traffic to the cluster. In that case, you will need to follow all of the steps below."),(0,i.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"This guide assumes you have already ",(0,i.kt)("a",{parentName:"p",href:"/rancher-docs/v2.5/pages-for-subheaders/installation-and-upgrade"},"installed Rancher,")," and you have already ",(0,i.kt)("a",{parentName:"p",href:"/rancher-docs/v2.5/pages-for-subheaders/kubernetes-clusters-in-rancher-setup"},"provisioned a separate Kubernetes cluster")," on which you will install Istio."),(0,i.kt)("p",null,"The nodes in your cluster must meet the ",(0,i.kt)("a",{parentName:"p",href:"/rancher-docs/v2.5/explanations/integrations-in-rancher/istio/cpu-and-memory-allocations"},"CPU and memory requirements.")),(0,i.kt)("p",null,"The workloads and services that you want to be controlled by Istio must meet ",(0,i.kt)("a",{parentName:"p",href:"https://istio.io/docs/setup/additional-setup/requirements/"},"Istio's requirements.")),(0,i.kt)("h1",{id:"install"},"Install"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Quick Setup")," If you don't need external traffic to reach Istio, and you just want to set up Istio for monitoring and tracing traffic within the cluster, skip the steps for ",(0,i.kt)("a",{parentName:"p",href:"/rancher-docs/v2.5/how-to-guides/advanced-user-guides/istio-setup-guide/set-up-istio-gateway"},"setting up the Istio gateway")," and ",(0,i.kt)("a",{parentName:"p",href:"/rancher-docs/v2.5/how-to-guides/advanced-user-guides/istio-setup-guide/set-up-traffic-management"},"setting up Istio's components for traffic management."))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/rancher-docs/v2.5/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-cluster"},"Enable Istio in the cluster.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/rancher-docs/v2.5/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-namespace"},"Enable Istio in all the namespaces where you want to use it.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/rancher-docs/v2.5/how-to-guides/advanced-user-guides/istio-setup-guide/use-istio-sidecar"},"Add deployments and services that have the Istio sidecar injected.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/rancher-docs/v2.5/how-to-guides/advanced-user-guides/istio-setup-guide/set-up-istio-gateway"},"Set up the Istio gateway. ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/rancher-docs/v2.5/how-to-guides/advanced-user-guides/istio-setup-guide/set-up-traffic-management"},"Set up Istio's components for traffic management.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/rancher-docs/v2.5/how-to-guides/advanced-user-guides/istio-setup-guide/generate-and-view-traffic"},"Generate traffic and see Istio in action."))))}f.isMDXComponent=!0}}]);