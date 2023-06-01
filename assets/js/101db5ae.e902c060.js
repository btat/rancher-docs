"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[98806],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=u(r),h=i,g=d["".concat(s,".").concat(h)]||d[h]||c[h]||o;return r?n.createElement(g,l(l({ref:t},p),{},{components:r})):n.createElement(g,l({ref:t},p))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,l=new Array(o);l[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},31904:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var n=r(87462),i=(r(67294),r(3905));const o={title:"How to Configure Out-of-tree vSphere Cloud Provider"},l=void 0,a={unversionedId:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/configure-out-of-tree-vsphere",id:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/configure-out-of-tree-vsphere",title:"How to Configure Out-of-tree vSphere Cloud Provider",description:"Kubernetes is moving away from maintaining cloud providers in-tree. vSphere has an out-of-tree cloud provider that can be used by installing the vSphere cloud provider and cloud storage plugins.",source:"@site/docs/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/configure-out-of-tree-vsphere.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers",slug:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/configure-out-of-tree-vsphere",permalink:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/configure-out-of-tree-vsphere",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/configure-out-of-tree-vsphere.md",tags:[],version:"current",lastUpdatedAt:1670549188,formattedLastUpdatedAt:"Dec 9, 2022",frontMatter:{title:"How to Configure Out-of-tree vSphere Cloud Provider"},sidebar:"tutorialSidebar",previous:{title:"How to Configure In-tree vSphere Cloud Provider",permalink:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/configure-in-tree-vsphere"},next:{title:"Migrating vSphere In-tree Volumes to CSI",permalink:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/migrate-from-in-tree-to-out-of-tree"}},s={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"1. Create a vSphere cluster",id:"1-create-a-vsphere-cluster",level:3},{value:"2. Install the CPI plugin",id:"2-install-the-cpi-plugin",level:3},{value:"3. Installing the CSI plugin",id:"3-installing-the-csi-plugin",level:3},{value:"Using the CSI driver for provisioning volumes",id:"using-the-csi-driver-for-provisioning-volumes",level:2}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Kubernetes is moving away from maintaining cloud providers in-tree. vSphere has an out-of-tree cloud provider that can be used by installing the vSphere cloud provider and cloud storage plugins."),(0,i.kt)("p",null,"This page covers how to install the Cloud Provider Interface (CPI) and Cloud Storage Interface (CSI) plugins after bringing up a cluster."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"The vSphere versions supported:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"6.7u3"),(0,i.kt)("li",{parentName:"ul"},"7.0u1 or higher.")),(0,i.kt)("p",null,"The Kubernetes version must be 1.19 or higher."),(0,i.kt)("p",null,"Using the vSphere out-of-tree cloud provider requires Linux nodes and is not supported on Windows."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"The Cloud Provider Interface (CPI) should be installed first before installing the Cloud Storage Interface (CSI)."),(0,i.kt)("h3",{id:"1-create-a-vsphere-cluster"},"1. Create a vSphere cluster"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,i.kt)("li",{parentName:"ol"},"On the ",(0,i.kt)("strong",{parentName:"li"},"Clusters")," page, click ",(0,i.kt)("strong",{parentName:"li"},"Create"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"VMware vSphere")," or ",(0,i.kt)("strong",{parentName:"li"},"Custom"),"."),(0,i.kt)("li",{parentName:"ol"},"On the ",(0,i.kt)("strong",{parentName:"li"},"Basics")," tab in the ",(0,i.kt)("strong",{parentName:"li"},"Cluster Configuration")," section, set the ",(0,i.kt)("strong",{parentName:"li"},"Cloud Provider")," to ",(0,i.kt)("strong",{parentName:"li"},"vSphere"),"."),(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("strong",{parentName:"li"},"Add-On Config")," tab, the vSphere Cloud Provider (CPI) and Storage Provider (CSI) options."),(0,i.kt)("li",{parentName:"ol"},"Finish creating your cluster.")),(0,i.kt)("h3",{id:"2-install-the-cpi-plugin"},"2. Install the CPI plugin"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"\u2630 > Cluster Management"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to the cluster where the vSphere CPI plugin will be installed and click ",(0,i.kt)("strong",{parentName:"p"},"Explore"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Apps > Charts"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"vSphere CPI"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Fill out the required vCenter details.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"vSphere CPI initializes all nodes with ProviderID which is needed by the vSphere CSI driver. Check if all nodes are initialized with the ProviderID before installing CSI driver with the following command:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'kubectl describe nodes | grep "ProviderID"\n')))),(0,i.kt)("h3",{id:"3-installing-the-csi-plugin"},"3. Installing the CSI plugin"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,i.kt)("li",{parentName:"ol"},"Go to the cluster where the vSphere CSI plugin will be installed and click ",(0,i.kt)("strong",{parentName:"li"},"Explore"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Apps > Charts"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"vSphere CSI"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Install"),"."),(0,i.kt)("li",{parentName:"ol"},"Fill out the required vCenter details. On the ",(0,i.kt)("strong",{parentName:"li"},"Features")," tab, set ",(0,i.kt)("strong",{parentName:"li"},"Enable CSI Migration")," to ",(0,i.kt)("strong",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ol"},"On the ",(0,i.kt)("strong",{parentName:"li"},"Storage")," tab, fill out the details for the StorageClass. This chart creates a StorageClass with the ",(0,i.kt)("inlineCode",{parentName:"li"},"csi.vsphere.vmware.com")," as the provisioner."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Install"),".")),(0,i.kt)("h2",{id:"using-the-csi-driver-for-provisioning-volumes"},"Using the CSI driver for provisioning volumes"),(0,i.kt)("p",null,"The CSI chart by default creates a storageClass."),(0,i.kt)("p",null,"If that option was not selected while launching the chart, create a storageClass with the ",(0,i.kt)("inlineCode",{parentName:"p"},"csi.vsphere.vmware.com")," as the provisioner."),(0,i.kt)("p",null,"All volumes provisioned using this StorageClass will get provisioned by the CSI driver."))}c.isMDXComponent=!0}}]);