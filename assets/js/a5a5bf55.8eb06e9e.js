"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[61465],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return h}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),h=o,f=p["".concat(l,".").concat(h)]||p[h]||d[h]||i;return t?n.createElement(f,a(a({ref:r},u),{},{components:t})):n.createElement(f,a({ref:r},u))}));function h(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},46287:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var n=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],s={title:"Checklist for Production-Ready Clusters",weight:2,aliases:["/rancher/v2.x/en/cluster-provisioning/production/"]},l=void 0,c={unversionedId:"pages-for-subheaders/checklist-for-production-ready-clusters",id:"version-2.5/pages-for-subheaders/checklist-for-production-ready-clusters",title:"Checklist for Production-Ready Clusters",description:"In this section, we recommend best practices for creating the production-ready Kubernetes clusters that will run your apps and services.",source:"@site/versioned_docs/version-2.5/pages-for-subheaders/checklist-for-production-ready-clusters.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/checklist-for-production-ready-clusters",permalink:"/rancher-docs/v2.5/pages-for-subheaders/checklist-for-production-ready-clusters",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/pages-for-subheaders/checklist-for-production-ready-clusters.md",tags:[],version:"2.5",lastUpdatedAt:1662094798,formattedLastUpdatedAt:"9/1/2022",frontMatter:{title:"Checklist for Production-Ready Clusters",weight:2,aliases:["/rancher/v2.x/en/cluster-provisioning/production/"]},sidebar:"tutorialSidebar",previous:{title:"Node Requirements for Rancher Managed Clusters",permalink:"/rancher-docs/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters"},next:{title:"Recommended Cluster Architecture",permalink:"/rancher-docs/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/checklist-for-production-ready-clusters/recommended-cluster-architecture"}},u={},d=[{value:"Node Requirements",id:"node-requirements",level:3},{value:"Back up etcd",id:"back-up-etcd",level:3},{value:"Cluster Architecture",id:"cluster-architecture",level:3},{value:"Logging and Monitoring",id:"logging-and-monitoring",level:3},{value:"Reliability",id:"reliability",level:3},{value:"Networking",id:"networking",level:3}],p={toc:d};function h(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this section, we recommend best practices for creating the production-ready Kubernetes clusters that will run your apps and services."),(0,i.kt)("p",null,"For a list of requirements for your cluster, including the requirements for OS/Docker, hardware, and networking, refer to the section on ",(0,i.kt)("a",{parentName:"p",href:"/rancher-docs/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters"},"node requirements.")),(0,i.kt)("p",null,"This is a shortlist of best practices that we strongly recommend for all production clusters."),(0,i.kt)("p",null,"For a full list of all the best practices that we recommend, refer to the ",(0,i.kt)("a",{parentName:"p",href:"/rancher-docs/v2.5/pages-for-subheaders/best-practices"},"best practices section.")),(0,i.kt)("h3",{id:"node-requirements"},"Node Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Make sure your nodes fulfill all of the ",(0,i.kt)("a",{parentName:"li",href:"/rancher-docs/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters"},"node requirements,")," including the port requirements.")),(0,i.kt)("h3",{id:"back-up-etcd"},"Back up etcd"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Enable etcd snapshots. Verify that snapshots are being created, and run a disaster recovery scenario to verify the snapshots are valid. etcd is the location where the state of your cluster is stored, and losing etcd data means losing your cluster. Make sure you configure recurring snapshots of etcd for your cluster(s), and make sure the snapshots are stored externally (off the node) as well.")),(0,i.kt)("h3",{id:"cluster-architecture"},"Cluster Architecture"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Nodes should have one of the following role configurations:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"etcd")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"controlplane")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"etcd")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"controlplane")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"worker")," (the ",(0,i.kt)("inlineCode",{parentName:"li"},"worker")," role should not be used or added on nodes with the ",(0,i.kt)("inlineCode",{parentName:"li"},"etcd")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"controlplane")," role)"))),(0,i.kt)("li",{parentName:"ul"},"Have at least three nodes with the role ",(0,i.kt)("inlineCode",{parentName:"li"},"etcd")," to survive losing one node. Increase this count for higher node fault toleration, and spread them across (availability) zones to provide even better fault tolerance."),(0,i.kt)("li",{parentName:"ul"},"Assign two or more nodes the ",(0,i.kt)("inlineCode",{parentName:"li"},"controlplane")," role for master component high availability."),(0,i.kt)("li",{parentName:"ul"},"Assign two or more nodes the ",(0,i.kt)("inlineCode",{parentName:"li"},"worker")," role for workload rescheduling upon node failure.")),(0,i.kt)("p",null,"For more information on what each role is used for, refer to the ",(0,i.kt)("a",{parentName:"p",href:"/rancher-docs/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/checklist-for-production-ready-clusters/roles-for-nodes-in-kubernetes"},"section on roles for nodes in Kubernetes.")),(0,i.kt)("p",null,"For more information about the\nnumber of nodes for each Kubernetes role, refer to the section on ",(0,i.kt)("a",{parentName:"p",href:"/rancher-docs/v2.5/reference-guides/rancher-manager-architecture/architecture-recommendations"},"recommended architecture.")),(0,i.kt)("h3",{id:"logging-and-monitoring"},"Logging and Monitoring"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Configure alerts/notifiers for Kubernetes components (System Service)."),(0,i.kt)("li",{parentName:"ul"},"Configure logging for cluster analysis and post-mortems.")),(0,i.kt)("h3",{id:"reliability"},"Reliability"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Perform load tests on your cluster to verify that its hardware can support your workloads.")),(0,i.kt)("h3",{id:"networking"},"Networking"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Minimize network latency. Rancher recommends minimizing latency between the etcd nodes. The default setting for ",(0,i.kt)("inlineCode",{parentName:"li"},"heartbeat-interval")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"500"),", and the default setting for ",(0,i.kt)("inlineCode",{parentName:"li"},"election-timeout")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"5000"),". These ",(0,i.kt)("a",{parentName:"li",href:"https://coreos.com/etcd/docs/latest/tuning.html"},"settings for etcd tuning")," allow etcd to run in most networks (except really high latency networks)."),(0,i.kt)("li",{parentName:"ul"},"Cluster nodes should be located within a single region. Most cloud providers provide multiple availability zones within a region, which can be used to create higher availability for your cluster. Using multiple availability zones is fine for nodes with any role. If you are using ",(0,i.kt)("a",{parentName:"li",href:"/rancher-docs/v2.5/pages-for-subheaders/set-up-cloud-providers"},"Kubernetes Cloud Provider")," resources, consult the documentation for any restrictions (i.e. zone storage restrictions).")))}h.isMDXComponent=!0}}]);