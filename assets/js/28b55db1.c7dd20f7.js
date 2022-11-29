"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[99982],{3905:function(e,n,r){r.d(n,{Zo:function(){return c},kt:function(){return p}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=t.createContext({}),l=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},c=function(e){var n=l(e.components);return t.createElement(u.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(r),p=o,m=d["".concat(u,".").concat(p)]||d[p]||h[p]||a;return r?t.createElement(m,s(s({ref:n},c),{},{components:r})):t.createElement(m,s({ref:n},c))}));function p(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},48952:function(e,n,r){r.r(n),r.d(n,{assets:function(){return c},contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return h}});var t=r(87462),o=r(63366),a=(r(67294),r(3905)),s=["components"],i={title:"Launching Kubernetes with Rancher"},u=void 0,l={unversionedId:"pages-for-subheaders/launch-kubernetes-with-rancher",id:"version-2.6/pages-for-subheaders/launch-kubernetes-with-rancher",title:"Launching Kubernetes with Rancher",description:"You can have Rancher launch a Kubernetes cluster using any nodes you want. When Rancher deploys Kubernetes onto these nodes, you can choose between Rancher Kubernetes Engine (RKE) or RKE2 distributions. Rancher can launch Kubernetes on any computers, including:",source:"@site/versioned_docs/version-2.6/pages-for-subheaders/launch-kubernetes-with-rancher.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/launch-kubernetes-with-rancher",permalink:"/v2.6/pages-for-subheaders/launch-kubernetes-with-rancher",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/pages-for-subheaders/launch-kubernetes-with-rancher.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"11/14/2022",frontMatter:{title:"Launching Kubernetes with Rancher"},sidebar:"tutorialSidebar",previous:{title:"Registering Existing Clusters",permalink:"/v2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/register-existing-clusters"},next:{title:"Launching Kubernetes on New Nodes in an Infrastructure Provider",permalink:"/v2.6/pages-for-subheaders/use-new-nodes-in-an-infra-provider"}},c={},h=[{value:"RKE",id:"rke",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Launching Kubernetes on New Nodes in an Infrastructure Provider",id:"launching-kubernetes-on-new-nodes-in-an-infrastructure-provider",level:3},{value:"Launching Kubernetes on Existing Custom Nodes",id:"launching-kubernetes-on-existing-custom-nodes",level:3},{value:"Programmatically Creating RKE Clusters",id:"programmatically-creating-rke-clusters",level:3},{value:"RKE2",id:"rke2",level:2},{value:"Requirements",id:"requirements-1",level:3},{value:"Launching Kubernetes on New Nodes in an Infrastructure Provider",id:"launching-kubernetes-on-new-nodes-in-an-infrastructure-provider-1",level:3},{value:"Launching Kubernetes on Existing Custom Nodes",id:"launching-kubernetes-on-existing-custom-nodes-1",level:3},{value:"Programmatically Creating RKE2 Clusters",id:"programmatically-creating-rke2-clusters",level:3}],d={toc:h};function p(e){var n=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can have Rancher launch a Kubernetes cluster using any nodes you want. When Rancher deploys Kubernetes onto these nodes, you can choose between ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/"},"Rancher Kubernetes Engine")," (RKE) or ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rke2.io"},"RKE2")," distributions. Rancher can launch Kubernetes on any computers, including:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Bare-metal servers"),(0,a.kt)("li",{parentName:"ul"},"On-premise virtual machines"),(0,a.kt)("li",{parentName:"ul"},"Virtual machines hosted by an infrastructure provider")),(0,a.kt)("p",null,"Rancher can install Kubernetes on existing nodes, or it can dynamically provision nodes in an infrastructure provider and install Kubernetes on them."),(0,a.kt)("p",null,"Rancher can also create pools of nodes. One benefit of installing Kubernetes on node pools hosted by an infrastructure provider is that if a node loses connectivity with the cluster, Rancher can automatically create another node to join the cluster to ensure that the count of the node pool is as expected."),(0,a.kt)("h2",{id:"rke"},"RKE"),(0,a.kt)("h3",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,"If you use RKE to set up a cluster, your nodes must meet the ",(0,a.kt)("a",{parentName:"p",href:"/v2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters"},"requirements")," for nodes in downstream user clusters."),(0,a.kt)("h3",{id:"launching-kubernetes-on-new-nodes-in-an-infrastructure-provider"},"Launching Kubernetes on New Nodes in an Infrastructure Provider"),(0,a.kt)("p",null,"Using Rancher, you can create pools of nodes based on a ",(0,a.kt)("a",{parentName:"p",href:"/v2.6/pages-for-subheaders/use-new-nodes-in-an-infra-provider#node-templates"},"node template"),". This node template defines the parameters you want to use to launch nodes in your cloud providers."),(0,a.kt)("p",null,"One benefit of installing Kubernetes on node pools hosted by an infrastructure provider is that if a node loses connectivity with the cluster, Rancher can automatically create another node to join the cluster to ensure that the count of the node pool is as expected."),(0,a.kt)("p",null,"For more information, refer to the section on ",(0,a.kt)("a",{parentName:"p",href:"/v2.6/pages-for-subheaders/use-new-nodes-in-an-infra-provider"},"launching Kubernetes on new nodes.")),(0,a.kt)("h3",{id:"launching-kubernetes-on-existing-custom-nodes"},"Launching Kubernetes on Existing Custom Nodes"),(0,a.kt)("p",null,"In this scenario, you want to install Kubernetes on bare-metal servers, on-prem virtual machines, or virtual machines that already exist in a cloud provider. With this option, you will run a Rancher agent Docker container on the machine."),(0,a.kt)("p",null,"If you want to reuse a node from a previous custom cluster, ",(0,a.kt)("a",{parentName:"p",href:"/v2.6/how-to-guides/new-user-guides/manage-clusters/clean-cluster-nodes"},"clean the node")," before using it in a cluster again. If you reuse a node that hasn't been cleaned, cluster provisioning may fail."),(0,a.kt)("p",null,"For more information, refer to the section on ",(0,a.kt)("a",{parentName:"p",href:"/v2.6/pages-for-subheaders/use-existing-nodes"},"custom nodes.")),(0,a.kt)("h3",{id:"programmatically-creating-rke-clusters"},"Programmatically Creating RKE Clusters"),(0,a.kt)("p",null,"The most common way to programmatically deploy RKE clusters through Rancher is by using the Rancher2 Terraform provider. The documentation for creating clusters with Terraform is ",(0,a.kt)("a",{parentName:"p",href:"https://registry.terraform.io/providers/rancher/rancher2/latest/docs/resources/cluster"},"here.")),(0,a.kt)("h2",{id:"rke2"},"RKE2"),(0,a.kt)("p",null,"Rancher v2.6 introduced provisioning for ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rke2.io/"},"RKE2")," clusters directly from the Rancher UI. RKE2, also known as RKE Government, is a fully conformant Kubernetes distribution that focuses on security and compliance within the U.S. Federal Government sector. In Rancher v.2.6.4 and earlier, RKE2 provisioning was in tech preview."),(0,a.kt)("p",null,"Note that in Rancher v2.6.5, RKE2 provisioning became GA."),(0,a.kt)("h3",{id:"requirements-1"},"Requirements"),(0,a.kt)("p",null,"If you use RKE2 to set up a cluster, your nodes must meet the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rke2.io/install/requirements/"},"requirements")," for nodes in downstream user clusters."),(0,a.kt)("h3",{id:"launching-kubernetes-on-new-nodes-in-an-infrastructure-provider-1"},"Launching Kubernetes on New Nodes in an Infrastructure Provider"),(0,a.kt)("p",null,"RKE2 provisioning is built on top of a new provisioning framework that leverages the upstream ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/cluster-api"},"Cluster API")," project. With this new provisioning framework, you can:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Provision RKE2 clusters onto any provider for which Rancher has a node driver"),(0,a.kt)("li",{parentName:"ul"},"Fully configure RKE2 clusters within Rancher"),(0,a.kt)("li",{parentName:"ul"},"Choose CNI options Calico, Cilium, and Multus in addition to Canal")),(0,a.kt)("p",null,"RKE2 provisioning also includes installing RKE2 on clusters with Windows nodes."),(0,a.kt)("p",null,"Windows features for RKE2 include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Windows supports the vSphere node driver"),(0,a.kt)("li",{parentName:"ul"},"Calico CNI for Windows RKE2 custom clusters"),(0,a.kt)("li",{parentName:"ul"},"Project Network Isolation (PNI) for Calico"),(0,a.kt)("li",{parentName:"ul"},"Windows Containers with RKE2 powered by containerd"),(0,a.kt)("li",{parentName:"ul"},"Provisioning of Windows RKE2 clusters through Terraform"),(0,a.kt)("li",{parentName:"ul"},"Provisioning of Windows RKE2 custom clusters directly from the Rancher UI")),(0,a.kt)("p",null,"Windows Support for RKE2 Custom Clusters requires choosing Calico as the CNI."),(0,a.kt)("h3",{id:"launching-kubernetes-on-existing-custom-nodes-1"},"Launching Kubernetes on Existing Custom Nodes"),(0,a.kt)("p",null,"RKE2 provisioning also allows you to install custom clusters on pre-provisioned VMs or bare-metal nodes."),(0,a.kt)("p",null,"If you want to reuse a node from a previous custom cluster, clean the node before using it in a cluster again. If you reuse a node that hasn't been cleaned, cluster provisioning may fail."),(0,a.kt)("h3",{id:"programmatically-creating-rke2-clusters"},"Programmatically Creating RKE2 Clusters"),(0,a.kt)("p",null,"The most common way to programmatically deploy RKE2 clusters through Rancher is by using the Rancher2 Terraform provider. The documentation for creating clusters with Terraform is ",(0,a.kt)("a",{parentName:"p",href:"https://registry.terraform.io/providers/rancher/rancher2/latest/docs/resources/cluster_v2"},"here.")))}p.isMDXComponent=!0}}]);