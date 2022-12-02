"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[30382],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return t?n.createElement(h,s(s({ref:r},c),{},{components:t})):n.createElement(h,s({ref:r},c))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=p;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=t[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},85162:(e,r,t)=>{t.d(r,{Z:()=>s});var n=t(67294),a=t(86010);const o="tabItem_Ymn6";function s(e){let{children:r,hidden:t,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,s),hidden:t},r)}},65488:(e,r,t)=>{t.d(r,{Z:()=>m});var n=t(87462),a=t(67294),o=t(86010),s=t(72389),i=t(67392),l=t(7094),u=t(12466);const c="tabList__CuJ",d="tabItem_LNqP";function p(e){const{lazy:r,block:t,defaultValue:s,values:p,groupId:m,className:h}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=p??f.map((e=>{let{props:{value:r,label:t,attributes:n}}=e;return{value:r,label:t,attributes:n}})),g=(0,i.l)(b,((e,r)=>e.value===r.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===s?s:s??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==k&&!b.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:w}=(0,l.U)(),[y,N]=(0,a.useState)(k),x=[],{blockElementScrollPositionUntilNextRender:q}=(0,u.o5)();if(null!=m){const e=v[m];null!=e&&e!==y&&b.some((r=>r.value===e))&&N(e)}const C=e=>{const r=e.currentTarget,t=x.indexOf(r),n=b[t].value;n!==y&&(q(r),N(n),null!=m&&w(m,String(n)))},R=e=>{let r=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;r=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;r=x[t]??x[x.length-1];break}}r?.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},h)},b.map((e=>{let{value:r,label:t,attributes:s}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:y===r?0:-1,"aria-selected":y===r,key:r,ref:e=>x.push(e),onKeyDown:R,onClick:C},s,{className:(0,o.Z)("tabs__item",d,s?.className,{"tabs__item--active":y===r})}),t??r)}))),r?(0,a.cloneElement)(f.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==y})))))}function m(e){const r=(0,s.Z)();return a.createElement(p,(0,n.Z)({key:String(r)},e))}},99393:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var n=t(87462),a=(t(67294),t(3905)),o=t(65488),s=t(85162);const i={title:"Node Requirements for Rancher Managed Clusters"},l=void 0,u={unversionedId:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters",id:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters",title:"Node Requirements for Rancher Managed Clusters",description:"This page describes the requirements for the Rancher managed Kubernetes clusters where your apps and services will be installed. These downstream clusters should be separate from the three-node cluster running Rancher.",source:"@site/docs/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup",slug:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters",permalink:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters.md",tags:[],version:"current",lastUpdatedAt:1666730461,formattedLastUpdatedAt:"Oct 25, 2022",frontMatter:{title:"Node Requirements for Rancher Managed Clusters"},sidebar:"tutorialSidebar",previous:{title:"Setting up Kubernetes Clusters in Rancher",permalink:"/pages-for-subheaders/kubernetes-clusters-in-rancher-setup"},next:{title:"Checklist for Production-Ready Clusters",permalink:"/pages-for-subheaders/checklist-for-production-ready-clusters"}},c={},d=[{value:"Operating Systems and Container Runtime Requirements",id:"operating-systems-and-container-runtime-requirements",level:2},{value:"Oracle Linux and RHEL Derived Linux Nodes",id:"oracle-linux-and-rhel-derived-linux-nodes",level:3},{value:"SUSE Linux Nodes",id:"suse-linux-nodes",level:3},{value:"Flatcar Container Linux Nodes",id:"flatcar-container-linux-nodes",level:3},{value:"Windows Nodes",id:"windows-nodes",level:3},{value:"Hardware Requirements",id:"hardware-requirements",level:2},{value:"Networking Requirements",id:"networking-requirements",level:2},{value:"Optional: Security Considerations",id:"optional-security-considerations",level:2}],p={toc:d};function m(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This page describes the requirements for the Rancher managed Kubernetes clusters where your apps and services will be installed. These downstream clusters should be separate from the three-node cluster running Rancher."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If Rancher is installed on a high-availability Kubernetes cluster, the Rancher server three-node cluster and downstream clusters have different requirements. For Rancher installation requirements, refer to the node requirements in the ",(0,a.kt)("a",{parentName:"p",href:"/pages-for-subheaders/installation-requirements"},"installation section."))),(0,a.kt)("h2",{id:"operating-systems-and-container-runtime-requirements"},"Operating Systems and Container Runtime Requirements"),(0,a.kt)("p",null,"Rancher should work with any modern Linux distribution and any modern Docker version. Linux is required for the etcd and controlplane nodes of all downstream clusters. Worker nodes may run Linux or ",(0,a.kt)("a",{parentName:"p",href:"#windows-nodes"},"Windows Server.")),(0,a.kt)("p",null,"For details on which OS and Docker versions were tested with each Rancher version, refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/support-maintenance-terms/"},"support maintenance terms.")),(0,a.kt)("p",null,"All supported operating systems are 64-bit x86."),(0,a.kt)("p",null,"If you plan to use ARM64, see ",(0,a.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/enable-experimental-features/rancher-on-arm64"},"Running on ARM64 (Experimental).")),(0,a.kt)("p",null,"For information on how to install Docker, refer to the official ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/"},"Docker documentation.")),(0,a.kt)("h3",{id:"oracle-linux-and-rhel-derived-linux-nodes"},"Oracle Linux and RHEL Derived Linux Nodes"),(0,a.kt)("p",null,"Some distributions of Linux derived from RHEL, including Oracle Linux, may have default firewall rules that block communication with Helm. We recommend disabling firewalld. For Kubernetes 1.19, firewalld must be turned off."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"In RHEL 8.4, two extra services are included on the NetworkManager: ",(0,a.kt)("inlineCode",{parentName:"p"},"nm-cloud-setup.service")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"nm-cloud-setup.timer"),". These services add a routing table that interferes with the CNI plugin's configuration. If these services are enabled, you must disable them using the command below, and then reboot the node to restore connectivity:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"systemctl disable nm-cloud-setup.service nm-cloud-setup.timer\nreboot\n"))),(0,a.kt)("h3",{id:"suse-linux-nodes"},"SUSE Linux Nodes"),(0,a.kt)("p",null,"SUSE Linux may have a firewall that blocks all ports by default. In that situation, follow ",(0,a.kt)("a",{parentName:"p",href:"/getting-started/installation-and-upgrade/installation-requirements/port-requirements#opening-suse-linux-ports"},"these steps")," to open the ports needed for adding a host to a custom cluster."),(0,a.kt)("h3",{id:"flatcar-container-linux-nodes"},"Flatcar Container Linux Nodes"),(0,a.kt)("p",null,"When ",(0,a.kt)("a",{parentName:"p",href:"/pages-for-subheaders/launch-kubernetes-with-rancher"},"Launching Kubernetes with Rancher")," using Flatcar Container Linux nodes, it is required to use the following configuration in the ",(0,a.kt)("a",{parentName:"p",href:"/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration#rke-cluster-config-file-reference"},"Cluster Config File")),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"Canal",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"rancher_kubernetes_engine_config:\n  network:\n    plugin: canal\n    options:\n      canal_flex_volume_plugin_dir: /opt/kubernetes/kubelet-plugins/volume/exec/nodeagent~uds\n      flannel_backend_type: vxlan\n\n  services:\n    kube-controller:\n      extra_args:\n        flex-volume-plugin-dir: /opt/kubernetes/kubelet-plugins/volume/exec/\n"))),(0,a.kt)(s.Z,{value:"Calico",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"rancher_kubernetes_engine_config:\n  network:\n    plugin: calico\n    options:\n      calico_flex_volume_plugin_dir: /opt/kubernetes/kubelet-plugins/volume/exec/nodeagent~uds\n      flannel_backend_type: vxlan\n\n  services:\n    kube-controller:\n      extra_args:\n        flex-volume-plugin-dir: /opt/kubernetes/kubelet-plugins/volume/exec/\n")))),(0,a.kt)("p",null,"It is also required to enable the Docker service, you can enable the Docker service using the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"systemctl enable docker.service\n")),(0,a.kt)("p",null,"The Docker service is enabled automatically when using ",(0,a.kt)("a",{parentName:"p",href:"/pages-for-subheaders/about-provisioning-drivers#node-drivers"},"Node Drivers"),"."),(0,a.kt)("h3",{id:"windows-nodes"},"Windows Nodes"),(0,a.kt)("p",null,"Nodes with Windows Server must run Docker Enterprise Edition."),(0,a.kt)("p",null,"Windows nodes can be used for worker nodes only. See ",(0,a.kt)("a",{parentName:"p",href:"/pages-for-subheaders/use-windows-clusters"},"Configuring Custom Clusters for Windows")),(0,a.kt)("h2",{id:"hardware-requirements"},"Hardware Requirements"),(0,a.kt)("p",null,"The hardware requirements for nodes with the ",(0,a.kt)("inlineCode",{parentName:"p"},"worker")," role mostly depend on your workloads. The minimum to run the Kubernetes node components is 1 CPU (core) and 1GB of memory."),(0,a.kt)("p",null,"Regarding CPU and memory, it is recommended that the different planes of Kubernetes clusters (etcd, controlplane, and workers) should be hosted on different nodes so that they can scale separately from each other."),(0,a.kt)("p",null,"For hardware recommendations for large Kubernetes clusters, refer to the official Kubernetes documentation on ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/setup/best-practices/cluster-large/"},"building large clusters.")),(0,a.kt)("p",null,"For hardware recommendations for etcd clusters in production, refer to the official ",(0,a.kt)("a",{parentName:"p",href:"https://etcd.io/docs/v3.4.0/op-guide/hardware/"},"etcd documentation.")),(0,a.kt)("h2",{id:"networking-requirements"},"Networking Requirements"),(0,a.kt)("p",null,"For a production cluster, we recommend that you restrict traffic by opening only the ports defined in the port requirements below."),(0,a.kt)("p",null,"The ports required to be open are different depending on how the user cluster is launched. Each of the sections below list the ports that need to be opened for different ",(0,a.kt)("a",{parentName:"p",href:"/pages-for-subheaders/kubernetes-clusters-in-rancher-setup"},"cluster creation options"),"."),(0,a.kt)("p",null,"For a breakdown of the port requirements for etcd nodes, controlplane nodes, and worker nodes in a Kubernetes cluster, refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/os/#ports"},"port requirements for the Rancher Kubernetes Engine.")),(0,a.kt)("p",null,"Details on which ports are used in each situation are found under ",(0,a.kt)("a",{parentName:"p",href:"/getting-started/installation-and-upgrade/installation-requirements/port-requirements#downstream-kubernetes-cluster-nodes"},"Downstream Cluster Port Requirements"),"."),(0,a.kt)("h2",{id:"optional-security-considerations"},"Optional: Security Considerations"),(0,a.kt)("p",null,"If you want to provision a Kubernetes cluster that is compliant with the CIS (Center for Internet Security) Kubernetes Benchmark, we recommend to following our hardening guide to configure your nodes before installing Kubernetes."),(0,a.kt)("p",null,"For more information on the hardening guide and details on which version of the guide corresponds to your Rancher and Kubernetes versions, refer to the ",(0,a.kt)("a",{parentName:"p",href:"/pages-for-subheaders/rancher-security#rancher-hardening-guide"},"security section.")))}m.isMDXComponent=!0}}]);