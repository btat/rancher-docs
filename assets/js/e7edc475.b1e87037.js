"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[43366],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(n),h=a,k=c["".concat(s,".").concat(h)]||c[h]||p[h]||l;return n?r.createElement(k,o(o({ref:t},d),{},{components:n})):r.createElement(k,o({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},20704:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const l={title:"Rancher Agents"},o=void 0,i={unversionedId:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/about-rancher-agents",id:"version-2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/about-rancher-agents",title:"Rancher Agents",description:"There are two different agent resources deployed on Rancher managed clusters:",source:"@site/versioned_docs/version-2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/about-rancher-agents.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher",slug:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/about-rancher-agents",permalink:"/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/about-rancher-agents",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/about-rancher-agents.md",tags:[],version:"2.5",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"Sep 23, 2022",frontMatter:{title:"Rancher Agents"},sidebar:"tutorialSidebar",previous:{title:"Migrating vSphere In-tree Volumes to CSI",permalink:"/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/vsphere/migrate-from-in-tree-to-out-of-tree"},next:{title:"Registering Existing Clusters",permalink:"/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/register-existing-clusters"}},s={},u=[{value:"cattle-cluster-agent",id:"cattle-cluster-agent",level:3},{value:"cattle-node-agent",id:"cattle-node-agent",level:3},{value:"Scheduling rules",id:"scheduling-rules",level:3}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There are two different agent resources deployed on Rancher managed clusters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#cattle-cluster-agent"},"cattle-cluster-agent")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#cattle-node-agent"},"cattle-node-agent"))),(0,a.kt)("p",null,"For a conceptual overview of how the Rancher server provisions clusters and communicates with them, refer to the ",(0,a.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/rancher-manager-architecture"},"architecture")),(0,a.kt)("h3",{id:"cattle-cluster-agent"},"cattle-cluster-agent"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"cattle-cluster-agent")," is used to connect to the Kubernetes API of ",(0,a.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/launch-kubernetes-with-rancher"},"Rancher Launched Kubernetes")," clusters. The ",(0,a.kt)("inlineCode",{parentName:"p"},"cattle-cluster-agent")," is deployed using a Deployment resource."),(0,a.kt)("h3",{id:"cattle-node-agent"},"cattle-node-agent"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"cattle-node-agent")," is used to interact with nodes in a ",(0,a.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/launch-kubernetes-with-rancher"},"Rancher Launched Kubernetes")," cluster when performing cluster operations. Examples of cluster operations are upgrading Kubernetes version and creating/restoring etcd snapshots. The ",(0,a.kt)("inlineCode",{parentName:"p"},"cattle-node-agent")," is deployed using a DaemonSet resource to make sure it runs on every node. The ",(0,a.kt)("inlineCode",{parentName:"p"},"cattle-node-agent")," is used as fallback option to connect to the Kubernetes API of ",(0,a.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/launch-kubernetes-with-rancher"},"Rancher Launched Kubernetes")," clusters when ",(0,a.kt)("inlineCode",{parentName:"p"},"cattle-cluster-agent")," is unavailable."),(0,a.kt)("h3",{id:"scheduling-rules"},"Scheduling rules"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Applies to v2.5.4 and higher")),(0,a.kt)("p",null,"Starting with Rancher v2.5.4, the tolerations for the ",(0,a.kt)("inlineCode",{parentName:"p"},"cattle-cluster-agent")," changed from ",(0,a.kt)("inlineCode",{parentName:"p"},"operator:Exists")," (allowing all taints) to a fixed set of tolerations (listed below, if no controlplane nodes are visible in the cluster) or dynamically added tolerations based on taints applied to the controlplane nodes. This change was made to allow ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/#taint-based-evictions"},"Taint based Evictions")," to work properly for ",(0,a.kt)("inlineCode",{parentName:"p"},"cattle-cluster-agent"),". The default tolerations are described below. If controlplane nodes are present the cluster, the tolerations will be replaced with tolerations matching the taints on the controlplane nodes."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Component"),(0,a.kt)("th",{parentName:"tr",align:null},"nodeAffinity nodeSelectorTerms"),(0,a.kt)("th",{parentName:"tr",align:null},"nodeSelector"),(0,a.kt)("th",{parentName:"tr",align:null},"Tolerations"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"cattle-cluster-agent")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"beta.kubernetes.io/os:NotIn:windows")),(0,a.kt)("td",{parentName:"tr",align:null},"none"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Note:")," These are the default tolerations, and will be replaced by tolerations matching taints applied to controlplane nodes.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"td"},"effect:NoSchedule"),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"td"},"key:node-role.kubernetes.io/controlplane"),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"td"},"value:true"),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"td"},"effect:NoSchedule"),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"td"},"key:node-role.kubernetes.io/control-plane"),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"td"},"operator:Exists"),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"td"},"effect:NoSchedule"),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"td"},"key:node-role.kubernetes.io/master"),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"td"},"operator:Exists"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"cattle-node-agent")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"beta.kubernetes.io/os:NotIn:windows")),(0,a.kt)("td",{parentName:"tr",align:null},"none"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"operator:Exists"))))),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"cattle-cluster-agent")," Deployment has preferred scheduling rules using ",(0,a.kt)("inlineCode",{parentName:"p"},"preferredDuringSchedulingIgnoredDuringExecution"),", favoring to be scheduled on nodes with the ",(0,a.kt)("inlineCode",{parentName:"p"},"controlplane")," node. When there are no controlplane nodes visible in the cluster (this is usually the case when using ",(0,a.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/set-up-clusters-from-hosted-kubernetes-providers"},"Clusters from Hosted Kubernetes Providers"),"), you can add the label ",(0,a.kt)("inlineCode",{parentName:"p"},"cattle.io/cluster-agent=true")," on a node to prefer scheduling the ",(0,a.kt)("inlineCode",{parentName:"p"},"cattle-cluster-agent")," pod to that node."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/assign-pod-node/"},"Kubernetes: Assigning Pods to Nodes")," to find more information about scheduling rules."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"preferredDuringSchedulingIgnoredDuringExecution")," configuration is shown in the table below:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Weight"),(0,a.kt)("th",{parentName:"tr",align:null},"Expression"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"100"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'node-role.kubernetes.io/controlplane:In:"true"'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"100"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'node-role.kubernetes.io/control-plane:In:"true"'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"100"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'node-role.kubernetes.io/master:In:"true"'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'cattle.io/cluster-agent:In:"true"'))))),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Applies to v2.3.0 up to v2.5.3")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Component"),(0,a.kt)("th",{parentName:"tr",align:null},"nodeAffinity nodeSelectorTerms"),(0,a.kt)("th",{parentName:"tr",align:null},"nodeSelector"),(0,a.kt)("th",{parentName:"tr",align:null},"Tolerations"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"cattle-cluster-agent")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"beta.kubernetes.io/os:NotIn:windows")),(0,a.kt)("td",{parentName:"tr",align:null},"none"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"operator:Exists"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"cattle-node-agent")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"beta.kubernetes.io/os:NotIn:windows")),(0,a.kt)("td",{parentName:"tr",align:null},"none"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"operator:Exists"))))),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"cattle-cluster-agent")," Deployment has preferred scheduling rules using ",(0,a.kt)("inlineCode",{parentName:"p"},"preferredDuringSchedulingIgnoredDuringExecution"),", favoring to be scheduled on nodes with the ",(0,a.kt)("inlineCode",{parentName:"p"},"controlplane")," node. See ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/assign-pod-node/"},"Kubernetes: Assigning Pods to Nodes")," to find more information about scheduling rules."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"preferredDuringSchedulingIgnoredDuringExecution")," configuration is shown in the table below:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Weight"),(0,a.kt)("th",{parentName:"tr",align:null},"Expression"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"100"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'node-role.kubernetes.io/controlplane:In:"true"'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'node-role.kubernetes.io/etcd:In:"true"'))))))}p.isMDXComponent=!0}}]);