"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[91104],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,f=d["".concat(l,".").concat(h)]||d[h]||p[h]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96922:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],s={title:"RKE Cluster Configuration Reference"},l=void 0,c={unversionedId:"reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration",id:"version-2.6/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration",title:"RKE Cluster Configuration Reference",description:"When Rancher installs Kubernetes, it uses RKE or RKE2 as the Kubernetes distribution.",source:"@site/versioned_docs/version-2.6/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration.md",sourceDirName:"reference-guides/cluster-configuration/rancher-server-configuration",slug:"/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration",permalink:"/v2.6/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"11/14/2022",frontMatter:{title:"RKE Cluster Configuration Reference"},sidebar:"tutorialSidebar",previous:{title:"Rancher Server Configuration",permalink:"/v2.6/pages-for-subheaders/rancher-server-configuration"},next:{title:"RKE2 Cluster Configuration Reference",permalink:"/v2.6/reference-guides/cluster-configuration/rancher-server-configuration/rke2-cluster-configuration"}},u={},p=[{value:"Overview",id:"overview",level:2},{value:"Editing Clusters with a Form in the Rancher UI",id:"editing-clusters-with-a-form-in-the-rancher-ui",level:2},{value:"Editing Clusters with YAML",id:"editing-clusters-with-yaml",level:2},{value:"Configuration Options in the Rancher UI",id:"configuration-options-in-the-rancher-ui",level:2},{value:"Kubernetes Version",id:"kubernetes-version",level:3},{value:"Network Provider",id:"network-provider",level:3},{value:"Project Network Isolation",id:"project-network-isolation",level:3},{value:"Kubernetes Cloud Providers",id:"kubernetes-cloud-providers",level:3},{value:"Private Registries",id:"private-registries",level:3},{value:"Authorized Cluster Endpoint",id:"authorized-cluster-endpoint",level:3},{value:"Node Pools",id:"node-pools",level:3},{value:"NGINX Ingress",id:"nginx-ingress",level:3},{value:"Metrics Server Monitoring",id:"metrics-server-monitoring",level:3},{value:"Pod Security Policy Support",id:"pod-security-policy-support",level:3},{value:"Docker Version on Nodes",id:"docker-version-on-nodes",level:3},{value:"Docker Root Directory",id:"docker-root-directory",level:3},{value:"Default Pod Security Policy",id:"default-pod-security-policy",level:3},{value:"Node Port Range",id:"node-port-range",level:3},{value:"Recurring etcd Snapshots",id:"recurring-etcd-snapshots",level:3},{value:"Agent Environment Variables",id:"agent-environment-variables",level:3},{value:"Updating ingress-nginx",id:"updating-ingress-nginx",level:3},{value:"RKE Cluster Config File Reference",id:"rke-cluster-config-file-reference",level:2},{value:"Config File Structure in Rancher",id:"config-file-structure-in-rancher",level:3},{value:"Default DNS provider",id:"default-dns-provider",level:3},{value:"Rancher Specific Parameters in YAML",id:"rancher-specific-parameters-in-yaml",level:2},{value:"docker_root_dir",id:"docker_root_dir",level:3},{value:"enable_cluster_monitoring",id:"enable_cluster_monitoring",level:3},{value:"enable_network_policy",id:"enable_network_policy",level:3},{value:"local_cluster_auth_endpoint",id:"local_cluster_auth_endpoint",level:3},{value:"Custom Network Plug-in",id:"custom-network-plug-in",level:3}],d={toc:p};function h(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When Rancher installs Kubernetes, it uses ",(0,i.kt)("a",{parentName:"p",href:"/v2.6/pages-for-subheaders/launch-kubernetes-with-rancher"},"RKE")," or ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rke2.io/"},"RKE2")," as the Kubernetes distribution."),(0,i.kt)("p",null,"This section covers the configuration options that are available in Rancher for a new or existing RKE Kubernetes cluster."),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"You can configure the Kubernetes options one of two ways:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#rancher-ui-options"},"Rancher UI"),": Use the Rancher UI to select options that are commonly customized when setting up a Kubernetes cluster."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#cluster-config-file"},"Cluster Config File"),": Instead of using the Rancher UI to choose Kubernetes options for the cluster, advanced users can create an RKE config file. Using a config file allows you to set any of the options available in an RKE installation, except for system_images configuration, by specifying them in YAML.")),(0,i.kt)("p",null,"The RKE cluster config options are nested under the ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher_kubernetes_engine_config")," directive. For more information, see the section about the ",(0,i.kt)("a",{parentName:"p",href:"#cluster-config-file"},"cluster config file.")),(0,i.kt)("p",null,"In ",(0,i.kt)("a",{parentName:"p",href:"/v2.6/pages-for-subheaders/launch-kubernetes-with-rancher"},"clusters launched by RKE"),", you can edit any of the remaining options that follow."),(0,i.kt)("p",null,"For an example of RKE config file syntax, see the ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/example-yamls/"},"RKE documentation"),"."),(0,i.kt)("p",null,"The forms in the Rancher UI don't include all advanced options for configuring RKE. For the complete reference of configurable options for RKE Kubernetes clusters in YAML, see the ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/"},"RKE documentation.")),(0,i.kt)("h2",{id:"editing-clusters-with-a-form-in-the-rancher-ui"},"Editing Clusters with a Form in the Rancher UI"),(0,i.kt)("p",null,"To edit your cluster,"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,i.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,i.kt)("li",{parentName:"ol"},"Go to the cluster you want to configure and click ",(0,i.kt)("strong",{parentName:"li"},"\u22ee > Edit Config"),".")),(0,i.kt)("h2",{id:"editing-clusters-with-yaml"},"Editing Clusters with YAML"),(0,i.kt)("p",null,"Instead of using the Rancher UI to choose Kubernetes options for the cluster, advanced users can create an RKE config file. Using a config file allows you to set any of the options available in an RKE installation, except for system_images configuration, by specifying them in YAML."),(0,i.kt)("p",null,"RKE clusters (also called RKE1 clusters) are edited differently than RKE2 and K3s clusters."),(0,i.kt)("p",null,"To edit an RKE config file directly from the Rancher UI,"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,i.kt)("li",{parentName:"ol"},"Go to the RKE cluster you want to configure. Click and click ",(0,i.kt)("strong",{parentName:"li"},"\u22ee > Edit Config"),". This take you to the RKE configuration form. Note: Because cluster provisioning changed in Rancher 2.6, the ",(0,i.kt)("strong",{parentName:"li"},"\u22ee > Edit as YAML")," can be used for configuring RKE2 clusters, but it can't be used for editing RKE1 configuration."),(0,i.kt)("li",{parentName:"ol"},"In the configuration form, scroll down and click ",(0,i.kt)("strong",{parentName:"li"},"Edit as YAML"),"."),(0,i.kt)("li",{parentName:"ol"},"Edit the RKE options under the ",(0,i.kt)("inlineCode",{parentName:"li"},"rancher_kubernetes_engine_config")," directive.")),(0,i.kt)("h2",{id:"configuration-options-in-the-rancher-ui"},"Configuration Options in the Rancher UI"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Some advanced configuration options are not exposed in the Rancher UI forms, but they can be enabled by editing the RKE cluster configuration file in YAML. For the complete reference of configurable options for RKE Kubernetes clusters in YAML, see the ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/"},"RKE documentation.")))),(0,i.kt)("h3",{id:"kubernetes-version"},"Kubernetes Version"),(0,i.kt)("p",null,"The version of Kubernetes installed on your cluster nodes. Rancher packages its own version of Kubernetes based on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/hyperkube"},"hyperkube"),"."),(0,i.kt)("p",null,"For more detail, see ",(0,i.kt)("a",{parentName:"p",href:"/v2.6/getting-started/installation-and-upgrade/upgrade-and-roll-back-kubernetes"},"Upgrading Kubernetes"),"."),(0,i.kt)("h3",{id:"network-provider"},"Network Provider"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/cluster-administration/networking/"},"Network Provider")," that the cluster uses. For more details on the different networking providers, please view our ",(0,i.kt)("a",{parentName:"p",href:"/v2.6/faq/container-network-interface-providers"},"Networking FAQ"),"."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"After you launch the cluster, you cannot change your network provider. Therefore, choose which network provider you want to use carefully, as Kubernetes doesn't allow switching between network providers. Once a cluster is created with a network provider, changing network providers would require you  tear down the entire cluster and all its applications."))),(0,i.kt)("p",null,"Out of the box, Rancher is compatible with the following network providers:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/projectcalico/canal"},"Canal")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/coreos/flannel#flannel"},"Flannel")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.projectcalico.org/v3.11/introduction/"},"Calico")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/weaveworks/weave"},"Weave"))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Notes on Weave:")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"When Weave is selected as network provider, Rancher will automatically enable encryption by generating a random password. If you want to specify the password manually, please see how to configure your cluster using a ",(0,i.kt)("a",{parentName:"p",href:"#rke-cluster-config-file-reference"},"Config File")," and the ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/add-ons/network-plugins/#weave-network-plug-in-options"},"Weave Network Plug-in Options"),"."))),(0,i.kt)("h3",{id:"project-network-isolation"},"Project Network Isolation"),(0,i.kt)("p",null,"If your network provider allows project network isolation, you can choose whether to enable or disable inter-project communication."),(0,i.kt)("p",null,"Project network isolation is available if you are using any RKE network plugin that supports the enforcement of Kubernetes network policies, such as Canal or the Cisco ACI plugin."),(0,i.kt)("h3",{id:"kubernetes-cloud-providers"},"Kubernetes Cloud Providers"),(0,i.kt)("p",null,"You can configure a ",(0,i.kt)("a",{parentName:"p",href:"/v2.6/pages-for-subheaders/set-up-cloud-providers"},"Kubernetes cloud provider"),". If you want to use dynamically provisioned ",(0,i.kt)("a",{parentName:"p",href:"/v2.6/pages-for-subheaders/create-kubernetes-persistent-storage"},"volumes and storage")," in Kubernetes, typically you must select the specific cloud provider in order to use it. For example, if you want to use Amazon EBS, you would need to select the ",(0,i.kt)("inlineCode",{parentName:"p"},"aws")," cloud provider."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If the cloud provider you want to use is not listed as an option, you will need to use the ",(0,i.kt)("a",{parentName:"p",href:"#cluster-config-file"},"config file option")," to configure the cloud provider. Please reference the ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/cloud-providers/"},"RKE cloud provider documentation")," on how to configure the cloud provider."))),(0,i.kt)("h3",{id:"private-registries"},"Private Registries"),(0,i.kt)("p",null,"The cluster-level private registry configuration is only used for provisioning clusters."),(0,i.kt)("p",null,"There are two main ways to set up private registries in Rancher: by setting up the ",(0,i.kt)("a",{parentName:"p",href:"/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/global-default-private-registry"},"global default registry")," through the ",(0,i.kt)("strong",{parentName:"p"},"Settings")," tab in the global view, and by setting up a private registry in the advanced options in the cluster-level settings. The global default registry is intended to be used for air-gapped setups, for registries that do not require credentials. The cluster-level private registry is intended to be used in all setups in which the private registry requires credentials."),(0,i.kt)("p",null,"If your private registry requires credentials, you need to pass the credentials to Rancher by editing the cluster options for each cluster that needs to pull images from the registry."),(0,i.kt)("p",null,"The private registry configuration option tells Rancher where to pull the ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/system-images/"},"system images")," or ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/add-ons/"},"addon images")," that will be used in your cluster."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"System images")," are components needed to maintain the Kubernetes cluster."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Add-ons")," are used to deploy several cluster components, including network plug-ins, the ingress controller, the DNS provider, or the metrics server.")),(0,i.kt)("p",null,"For more information on setting up a private registry for components applied during the provisioning of the cluster, see the ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/private-registries/"},"RKE documentation on private registries"),"."),(0,i.kt)("p",null,"Rancher v2.6 introduced the ability to configure ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/private-registries/#amazon-elastic-container-registry-ecr-private-registry-setup"},"ECR registries for RKE clusters"),"."),(0,i.kt)("h3",{id:"authorized-cluster-endpoint"},"Authorized Cluster Endpoint"),(0,i.kt)("p",null,"Authorized Cluster Endpoint can be used to directly access the Kubernetes API server, without requiring communication through Rancher."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The authorized cluster endpoint only works on Rancher-launched Kubernetes clusters. In other words, it only works in clusters where Rancher ",(0,i.kt)("a",{parentName:"p",href:"/v2.6/pages-for-subheaders/rancher-manager-architecture#tools-for-provisioning-kubernetes-clusters"},"used RKE")," to provision the cluster. It is not available for clusters in a hosted Kubernetes provider, such as Amazon's EKS."))),(0,i.kt)("p",null,"This is enabled by default in Rancher-launched Kubernetes clusters, using the IP of the node with the ",(0,i.kt)("inlineCode",{parentName:"p"},"controlplane")," role and the default Kubernetes self signed certificates."),(0,i.kt)("p",null,"For more detail on how an authorized cluster endpoint works and why it is used, refer to the ",(0,i.kt)("a",{parentName:"p",href:"/v2.6/pages-for-subheaders/rancher-manager-architecture#4-authorized-cluster-endpoint"},"architecture section.")),(0,i.kt)("p",null,"We recommend using a load balancer with the authorized cluster endpoint. For details, refer to the ",(0,i.kt)("a",{parentName:"p",href:"/v2.6/reference-guides/rancher-manager-architecture/architecture-recommendations#architecture-for-an-authorized-cluster-endpoint"},"recommended architecture section.")),(0,i.kt)("h3",{id:"node-pools"},"Node Pools"),(0,i.kt)("p",null,"For information on using the Rancher UI to set up node pools in an RKE cluster, refer to ",(0,i.kt)("a",{parentName:"p",href:"/v2.6/pages-for-subheaders/use-new-nodes-in-an-infra-provider"},"this page.")),(0,i.kt)("h3",{id:"nginx-ingress"},"NGINX Ingress"),(0,i.kt)("p",null,"If you want to publish your applications in a high-availability configuration, and you're hosting your nodes with a cloud-provider that doesn't have a native load-balancing feature, enable this option to use NGINX Ingress within the cluster."),(0,i.kt)("h3",{id:"metrics-server-monitoring"},"Metrics Server Monitoring"),(0,i.kt)("p",null,"Option to enable or disable ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/add-ons/metrics-server/"},"Metrics Server"),"."),(0,i.kt)("p",null,"Each cloud provider capable of launching a cluster using RKE can collect metrics and monitor for your cluster nodes. Enable this option to view your node metrics from your cloud provider's portal."),(0,i.kt)("h3",{id:"pod-security-policy-support"},"Pod Security Policy Support"),(0,i.kt)("p",null,"Enables ",(0,i.kt)("a",{parentName:"p",href:"/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/create-pod-security-policies"},"pod security policies")," for the cluster. After enabling this option, choose a policy using the ",(0,i.kt)("strong",{parentName:"p"},"Default Pod Security Policy")," drop-down."),(0,i.kt)("p",null,"You must have an existing Pod Security Policy configured before you can use this option."),(0,i.kt)("h3",{id:"docker-version-on-nodes"},"Docker Version on Nodes"),(0,i.kt)("p",null,"Configures whether nodes are allowed to run versions of Docker that Rancher doesn't officially support."),(0,i.kt)("p",null,"If you choose to require a supported Docker version, Rancher will stop pods from running on nodes that don't have a supported Docker version installed."),(0,i.kt)("p",null,"For details on which Docker versions were tested with each Rancher version, refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/support-maintenance-terms/"},"support maintenance terms.")),(0,i.kt)("h3",{id:"docker-root-directory"},"Docker Root Directory"),(0,i.kt)("p",null,"If the nodes you are adding to the cluster have Docker configured with a non-default Docker Root Directory (default is ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/lib/docker"),"),  specify the correct Docker Root Directory in this option."),(0,i.kt)("h3",{id:"default-pod-security-policy"},"Default Pod Security Policy"),(0,i.kt)("p",null,"If you enable ",(0,i.kt)("strong",{parentName:"p"},"Pod Security Policy Support"),", use this drop-down to choose the pod security policy that's applied to the cluster."),(0,i.kt)("h3",{id:"node-port-range"},"Node Port Range"),(0,i.kt)("p",null,"Option to change the range of ports that can be used for ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/service/#nodeport"},"NodePort services"),". Default is ",(0,i.kt)("inlineCode",{parentName:"p"},"30000-32767"),"."),(0,i.kt)("h3",{id:"recurring-etcd-snapshots"},"Recurring etcd Snapshots"),(0,i.kt)("p",null,"Option to enable or disable ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/etcd-snapshots/#etcd-recurring-snapshots"},"recurring etcd snapshots"),"."),(0,i.kt)("h3",{id:"agent-environment-variables"},"Agent Environment Variables"),(0,i.kt)("p",null,"Option to set environment variables for ",(0,i.kt)("a",{parentName:"p",href:"/v2.6/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/about-rancher-agents"},"rancher agents"),". The environment variables can be set using key value pairs. If rancher agent requires use of proxy to communicate with Rancher server, ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTP_PROXY"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTPS_PROXY")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"NO_PROXY")," environment variables can be set using agent environment variables."),(0,i.kt)("h3",{id:"updating-ingress-nginx"},"Updating ingress-nginx"),(0,i.kt)("p",null,"Clusters that were created before Kubernetes 1.16 will have an ",(0,i.kt)("inlineCode",{parentName:"p"},"ingress-nginx")," ",(0,i.kt)("inlineCode",{parentName:"p"},"updateStrategy")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"OnDelete"),". Clusters that were created with Kubernetes 1.16 or newer will have ",(0,i.kt)("inlineCode",{parentName:"p"},"RollingUpdate"),"."),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"updateStrategy")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"ingress-nginx")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"OnDelete"),", you will need to delete these pods to get the correct version for your deployment."),(0,i.kt)("h2",{id:"rke-cluster-config-file-reference"},"RKE Cluster Config File Reference"),(0,i.kt)("p",null,"Instead of using the Rancher UI to choose Kubernetes options for the cluster, advanced users can create an RKE config file. Using a config file allows you to set any of the ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/"},"options available")," in an RKE installation, except for ",(0,i.kt)("inlineCode",{parentName:"p"},"system_images")," configuration. The ",(0,i.kt)("inlineCode",{parentName:"p"},"system_images")," option is not supported when creating a cluster with the Rancher UI or API."),(0,i.kt)("p",null,"For the complete reference for configurable options for RKE Kubernetes clusters in YAML, see the ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/"},"RKE documentation.")),(0,i.kt)("h3",{id:"config-file-structure-in-rancher"},"Config File Structure in Rancher"),(0,i.kt)("p",null,"RKE (Rancher Kubernetes Engine) is the tool that Rancher uses to provision Kubernetes clusters. Rancher's cluster config files used to have the same structure as ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/example-yamls/"},"RKE config files,")," but the structure changed so that in Rancher, RKE cluster config items are separated from non-RKE config items. Therefore, configuration for your cluster needs to be nested under the ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher_kubernetes_engine_config")," directive in the cluster config file. Cluster config files created with earlier versions of Rancher will need to be updated for this format. An example cluster config file is included below."),(0,i.kt)("details",{id:"v2.3.0-cluster-config-file"},(0,i.kt)("summary",null,"Example Cluster Config File"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"#\n# Cluster Config\n#\ndocker_root_dir: /var/lib/docker\nenable_cluster_alerting: false\nenable_cluster_monitoring: false\nenable_network_policy: false\nlocal_cluster_auth_endpoint:\n  enabled: true\n#\n# Rancher Config\n#\nrancher_kubernetes_engine_config: # Your RKE template config goes here.\n  addon_job_timeout: 30\n  authentication:\n    strategy: x509\n  ignore_docker_version: true\n#\n# # Currently only nginx ingress provider is supported.\n# # To disable ingress controller, set `provider: none`\n# # To enable ingress on specific nodes, use the node_selector, eg:\n#    provider: nginx\n#    node_selector:\n#      app: ingress\n#\n  ingress:\n    provider: nginx\n  kubernetes_version: v1.15.3-rancher3-1\n  monitoring:\n    provider: metrics-server\n#\n#   If you are using calico on AWS\n#\n#    network:\n#      plugin: calico\n#      calico_network_provider:\n#        cloud_provider: aws\n#\n# # To specify flannel interface\n#\n#    network:\n#      plugin: flannel\n#      flannel_network_provider:\n#      iface: eth1\n#\n# # To specify flannel interface for canal plugin\n#\n#    network:\n#      plugin: canal\n#      canal_network_provider:\n#        iface: eth1\n#\n  network:\n    options:\n      flannel_backend_type: vxlan\n    plugin: canal\n#\n#    services:\n#      kube-api:\n#        service_cluster_ip_range: 10.43.0.0/16\n#      kube-controller:\n#        cluster_cidr: 10.42.0.0/16\n#        service_cluster_ip_range: 10.43.0.0/16\n#      kubelet:\n#        cluster_domain: cluster.local\n#        cluster_dns_server: 10.43.0.10\n#\n  services:\n    etcd:\n      backup_config:\n        enabled: true\n        interval_hours: 12\n        retention: 6\n        safe_timestamp: false\n      creation: 12h\n      extra_args:\n        election-timeout: 5000\n        heartbeat-interval: 500\n      gid: 0\n      retention: 72h\n      snapshot: false\n      uid: 0\n    kube_api:\n      always_pull_images: false\n      pod_security_policy: false\n      service_node_port_range: 30000-32767\n  ssh_agent_auth: false\nwindows_prefered_cluster: false\n"))),(0,i.kt)("h3",{id:"default-dns-provider"},"Default DNS provider"),(0,i.kt)("p",null,"The table below indicates what DNS provider is deployed by default. See ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/add-ons/dns/"},"RKE documentation on DNS provider")," for more information how to configure a different DNS provider. CoreDNS can only be used on Kubernetes v1.12.0 and higher."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Rancher version"),(0,i.kt)("th",{parentName:"tr",align:null},"Kubernetes version"),(0,i.kt)("th",{parentName:"tr",align:null},"Default DNS provider"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"v2.2.5 and higher"),(0,i.kt)("td",{parentName:"tr",align:null},"v1.14.0 and higher"),(0,i.kt)("td",{parentName:"tr",align:null},"CoreDNS")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"v2.2.5 and higher"),(0,i.kt)("td",{parentName:"tr",align:null},"v1.13.x and lower"),(0,i.kt)("td",{parentName:"tr",align:null},"kube-dns")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"v2.2.4 and lower"),(0,i.kt)("td",{parentName:"tr",align:null},"any"),(0,i.kt)("td",{parentName:"tr",align:null},"kube-dns")))),(0,i.kt)("h2",{id:"rancher-specific-parameters-in-yaml"},"Rancher Specific Parameters in YAML"),(0,i.kt)("p",null,"Besides the RKE config file options, there are also Rancher specific settings that can be configured in the Config File (YAML):"),(0,i.kt)("h3",{id:"docker_root_dir"},"docker_root_dir"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"#docker-root-directory"},"Docker Root Directory"),"."),(0,i.kt)("h3",{id:"enable_cluster_monitoring"},"enable_cluster_monitoring"),(0,i.kt)("p",null,"Option to enable or disable ",(0,i.kt)("a",{parentName:"p",href:"/v2.6/pages-for-subheaders/monitoring-and-alerting"},"Cluster Monitoring"),"."),(0,i.kt)("h3",{id:"enable_network_policy"},"enable_network_policy"),(0,i.kt)("p",null,"Option to enable or disable Project Network Isolation."),(0,i.kt)("p",null,"Project network isolation is available if you are using any RKE network plugin that supports the enforcement of Kubernetes network policies, such as Canal or the Cisco ACI plugin."),(0,i.kt)("h3",{id:"local_cluster_auth_endpoint"},"local_cluster_auth_endpoint"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"#authorized-cluster-endpoint"},"Authorized Cluster Endpoint"),"."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'local_cluster_auth_endpoint:\n  enabled: true\n  fqdn: "FQDN"\n  ca_certs: |-\n    -----BEGIN CERTIFICATE-----\n    ...\n    -----END CERTIFICATE-----\n')),(0,i.kt)("h3",{id:"custom-network-plug-in"},"Custom Network Plug-in"),(0,i.kt)("p",null,"You can add a custom network plug-in by using the ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/add-ons/user-defined-add-ons/"},"user-defined add-on functionality")," of RKE. You define any add-on that you want deployed after the Kubernetes cluster is deployed."),(0,i.kt)("p",null,"There are two ways that you can specify an add-on:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/config-options/add-ons/user-defined-add-ons/#in-line-add-ons"},"In-line Add-ons")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/config-options/add-ons/user-defined-add-ons/#referencing-yaml-files-for-add-ons"},"Referencing YAML Files for Add-ons"))),(0,i.kt)("p",null,"For an example of how to configure a custom network plug-in by editing the ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster.yml"),", refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/add-ons/network-plugins/custom-network-plugin-example"},"RKE documentation.")))}h.isMDXComponent=!0}}]);