"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[73684],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,k=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(k,l(l({ref:t},s),{},{components:n})):r.createElement(k,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1909:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>k,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"NeuVector Integration"},l=void 0,i={unversionedId:"integrations-in-rancher/neuvector",id:"integrations-in-rancher/neuvector",title:"NeuVector Integration",description:"NeuVector Integration in Rancher",source:"@site/docs/integrations-in-rancher/neuvector.md",sourceDirName:"integrations-in-rancher",slug:"/integrations-in-rancher/neuvector",permalink:"/integrations-in-rancher/neuvector",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/integrations-in-rancher/neuvector.md",tags:[],version:"current",lastUpdatedAt:1670452794,formattedLastUpdatedAt:"Dec 7, 2022",frontMatter:{title:"NeuVector Integration"},sidebar:"tutorialSidebar",previous:{title:"PromQL Expression Reference",permalink:"/integrations-in-rancher/monitoring-and-alerting/promql-expressions"},next:{title:"OPA Gatekeeper",permalink:"/integrations-in-rancher/opa-gatekeeper"}},c={},p=[{value:"NeuVector Integration in Rancher",id:"neuvector-integration-in-rancher",level:3},{value:"Installing NeuVector with Rancher",id:"installing-neuvector-with-rancher",level:3},{value:"Accessing NeuVector from the Rancher UI",id:"accessing-neuvector-from-the-rancher-ui",level:3},{value:"Uninstalling NeuVector from the Rancher UI",id:"uninstalling-neuvector-from-the-rancher-ui",level:3},{value:"GitHub Repository",id:"github-repository",level:3},{value:"Documentation",id:"documentation",level:3},{value:"Architecture",id:"architecture",level:3},{value:"CPU and Memory Allocations",id:"cpu-and-memory-allocations",level:3},{value:"Hardened Cluster Support - Calico and Canal",id:"hardened-cluster-support---calico-and-canal",level:3},{value:"SELinux-enabled Cluster Support - Calico and Canal",id:"selinux-enabled-cluster-support---calico-and-canal",level:3},{value:"Cluster Support in an Air-Gapped Environment",id:"cluster-support-in-an-air-gapped-environment",level:3},{value:"Support Limitations",id:"support-limitations",level:3},{value:"Other Limitations",id:"other-limitations",level:3}],s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},u=s("Tabs"),m=s("TabItem"),d={toc:p};function k(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"neuvector-integration-in-rancher"},"NeuVector Integration in Rancher"),(0,a.kt)("p",null,"New in Rancher v2.6.5, ",(0,a.kt)("a",{parentName:"p",href:"https://open-docs.neuvector.com/"},"NeuVector 5.x")," is an open-source container-centric security platform that is now integrated into Rancher. NeuVector offers real-time compliance, visibility, and protection for critical applications and data during runtime. NeuVector provides a firewall, container process/file system monitoring, security auditing with CIS benchmarks, and vulnerability scanning. For more information on Rancher security, please see the ",(0,a.kt)("a",{parentName:"p",href:"/pages-for-subheaders/rancher-security"},"security documentation"),"."),(0,a.kt)("p",null,"NeuVector can be enabled through a Helm chart that may be installed either through ",(0,a.kt)("strong",{parentName:"p"},"Apps & Marketplace")," or through the ",(0,a.kt)("strong",{parentName:"p"},"Cluster Tools")," button in the Rancher UI. Once the Helm chart is installed, users can easily ",(0,a.kt)("a",{parentName:"p",href:"https://open-docs.neuvector.com/deploying/rancher#deploy-and-manage-neuvector-through-rancher-apps-marketplace"},"deploy and manage NeuVector clusters within Rancher"),"."),(0,a.kt)("h3",{id:"installing-neuvector-with-rancher"},"Installing NeuVector with Rancher"),(0,a.kt)("p",null,"The Harvester Helm Chart is used to manage access to the NeuVector UI in Rancher where users can navigate directly to deploy and manage their NeuVector clusters."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"To navigate to and install the NeuVector chart through Apps & Marketplace:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,a.kt)("li",{parentName:"ol"},"On the Clusters page, go to the cluster where you want to deploy NeuVector, and click ",(0,a.kt)("strong",{parentName:"li"},"Explore"),"."),(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("strong",{parentName:"li"},"Apps & Marketplace > Charts"),", and install ",(0,a.kt)("strong",{parentName:"li"},"NeuVector")," from the chart repo."),(0,a.kt)("li",{parentName:"ol"},"Different cluster types require different container runtimes. When configuring Helm chart values, go to the ",(0,a.kt)("strong",{parentName:"li"},"Container Runtime")," section, and select your runtime in accordance with the cluster type. Finally, click ",(0,a.kt)("strong",{parentName:"li"},"Install")," again.")),(0,a.kt)("p",null,"Some examples are as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"RKE1: ",(0,a.kt)("inlineCode",{parentName:"p"},"docker"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"K3s and RKE2: ",(0,a.kt)("inlineCode",{parentName:"p"},"k3scontainerd"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"AKS: ",(0,a.kt)("inlineCode",{parentName:"p"},"containerd")," for v1.19 and up")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"EKS: ",(0,a.kt)("inlineCode",{parentName:"p"},"docker")," for v1.22 and below; ",(0,a.kt)("inlineCode",{parentName:"p"},"containerd")," for v1.23 and up")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"GKE: ",(0,a.kt)("inlineCode",{parentName:"p"},"containerd")," (see the ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/concepts/using-containerd"},"Google docs")," for more)"),(0,a.kt)("admonition",{parentName:"li",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Only one container runtime engine may be selected at a time during installation.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"To navigate to and install the NeuVector chart through Cluster Tools:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,a.kt)("li",{parentName:"ol"},"On the Clusters page, go to the cluster where you want to deploy NeuVector, and click ",(0,a.kt)("strong",{parentName:"li"},"Explore"),"."),(0,a.kt)("li",{parentName:"ol"},"Click on ",(0,a.kt)("strong",{parentName:"li"},"Cluster Tools")," at the bottom of the left navigation bar."),(0,a.kt)("li",{parentName:"ol"},"Repeat step 4 above to select your container runtime accordingly, then click ",(0,a.kt)("strong",{parentName:"li"},"Install")," again.")),(0,a.kt)("h3",{id:"accessing-neuvector-from-the-rancher-ui"},"Accessing NeuVector from the Rancher UI"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Navigate to the cluster explorer of the cluster where NeuVector is installed. In the left navigation bar, click ",(0,a.kt)("strong",{parentName:"li"},"NeuVector"),"."),(0,a.kt)("li",{parentName:"ol"},"Click the external link to go to the NeuVector UI. Once the link is selected, users must accept the ",(0,a.kt)("inlineCode",{parentName:"li"},"END USER LICENSE AGREEMENT")," to access the NeuVector UI.")),(0,a.kt)("h3",{id:"uninstalling-neuvector-from-the-rancher-ui"},"Uninstalling NeuVector from the Rancher UI"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"To uninstall from Apps & Marketplace:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,a.kt)("li",{parentName:"ol"},"Under ",(0,a.kt)("strong",{parentName:"li"},"Apps & Marketplace"),", click ",(0,a.kt)("strong",{parentName:"li"},"Installed Apps"),"."),(0,a.kt)("li",{parentName:"ol"},"Under ",(0,a.kt)("inlineCode",{parentName:"li"},"cattle-neuvector-system"),", select both the NeuVector app (and the associated CRD if desired), then click ",(0,a.kt)("strong",{parentName:"li"},"Delete"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"To uninstall from Cluster Tools:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,a.kt)("li",{parentName:"ol"},"Click on ",(0,a.kt)("strong",{parentName:"li"},"Cluster Tools")," at the bottom-left of the screen, then click on the trash can icon under the NeuVector chart. Select ",(0,a.kt)("inlineCode",{parentName:"li"},"Delete the CRD associated with this app")," if desired, then click ",(0,a.kt)("strong",{parentName:"li"},"Delete"),".")),(0,a.kt)("h3",{id:"github-repository"},"GitHub Repository"),(0,a.kt)("p",null,"The NeuVector project is available ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/neuvector/neuvector"},"here"),"."),(0,a.kt)("h3",{id:"documentation"},"Documentation"),(0,a.kt)("p",null,"The NeuVector documentation is ",(0,a.kt)("a",{parentName:"p",href:"https://open-docs.neuvector.com/"},"here"),"."),(0,a.kt)("h3",{id:"architecture"},"Architecture"),(0,a.kt)("p",null,"The NeuVector security solution contains four types of security containers: Controllers, Enforcers, Managers, and Scanners. A special container called an All-in-One is also provided to combine the Controller, Enforcer, and Manager functions all in one container, primarily for Docker-native deployments. There is also an Updater which, when run, will update the CVE database."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Controller:")," Manages the NeuVector Enforcer container; provides REST APIs for the management console."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Enforcer:")," Enforces security policies."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Manager:")," Provides a web-UI and CLI console to manage the NeuVector platform."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"All-in-One:")," Includes the Controller, Enforcer, and Manager."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Scanner:")," Performs the vulnerability and compliance scanning for images, containers, and nodes."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Updater:")," Updates the CVE database for Neuvector (when run); redeploys scanner pods.")),(0,a.kt)("figcaption",null,"**NeuVector Security Containers:**"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"NeuVector Security Containers",src:n(22830).Z,width:"850",height:"395"})),(0,a.kt)("figcaption",null,"**NeuVector Architecture:**"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"NeuVector Architecture",src:n(28358).Z,width:"1243",height:"836"})),(0,a.kt)("p",null,"To learn more about NeuVector's architecture, please refer ",(0,a.kt)("a",{parentName:"p",href:"https://open-docs.neuvector.com/basics/overview#architecture"},"here"),"."),(0,a.kt)("h3",{id:"cpu-and-memory-allocations"},"CPU and Memory Allocations"),(0,a.kt)("p",null,"Below are the minimum recommended computing resources for the NeuVector chart installation in a default deployment. Note that the resource limit is not set."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Container"),(0,a.kt)("th",{parentName:"tr",align:null},"CPU - Request"),(0,a.kt)("th",{parentName:"tr",align:null},"Memory - Request"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Controller"),(0,a.kt)("td",{parentName:"tr",align:null},"3 (1GB 1vCPU needed per controller)"),(0,a.kt)("td",{parentName:"tr",align:null},"*")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Enforcer"),(0,a.kt)("td",{parentName:"tr",align:null},"On all nodes (500MB .5vCPU)"),(0,a.kt)("td",{parentName:"tr",align:null},"1GB")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Manager"),(0,a.kt)("td",{parentName:"tr",align:null},"1 (500MB .5vCPU)"),(0,a.kt)("td",{parentName:"tr",align:null},"*")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Scanner"),(0,a.kt)("td",{parentName:"tr",align:null},"3 (100MB .5vCPU)"),(0,a.kt)("td",{parentName:"tr",align:null},"*")))),(0,a.kt)("p",null,"*"," Minimum 1GB of memory total required for Controller, Manager, and Scanner containers combined."),(0,a.kt)("h3",{id:"hardened-cluster-support---calico-and-canal"},"Hardened Cluster Support - Calico and Canal"),(0,a.kt)(u,{mdxType:"Tabs"},(0,a.kt)(m,{value:"RKE1",mdxType:"TabItem"},(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"All NeuVector components are deployable if PSP is set to true."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"New in v2.6.7"))),(0,a.kt)("p",{parentName:"li"},"You will need to set additional configuration for your hardened cluster environment as follows:"))),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,a.kt)("li",{parentName:"ol"},"Go to the cluster that you created and click ",(0,a.kt)("strong",{parentName:"li"},"Explore"),"."),(0,a.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,a.kt)("strong",{parentName:"li"},"Apps & Marketplace"),"."),(0,a.kt)("li",{parentName:"ol"},"Install (or upgrade to) NeuVector version ",(0,a.kt)("inlineCode",{parentName:"li"},"100.0.1+up2.2.2"),".")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Under ",(0,a.kt)("strong",{parentName:"p"},"Edit Options")," > ",(0,a.kt)("strong",{parentName:"p"},"Other Configuration"),", enable ",(0,a.kt)("strong",{parentName:"p"},"Pod Security Policy")," by checking the box (no other config needed):"),(0,a.kt)("p",{parentName:"li"},"  ",(0,a.kt)("img",{alt:"Enable PSP for RKE1 Hardened Cluster",src:n(25475).Z,width:"946",height:"557"})))),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Install")," at the bottom-right to complete."))),(0,a.kt)(m,{value:"RKE2",mdxType:"TabItem"},(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"NeuVector components Controller and Enforcer are deployable if PSP is set to true.")),(0,a.kt)("p",null,"  ",(0,a.kt)("strong",{parentName:"p"},"Applicable to NeuVector chart version 100.0.0+up2.2.0 only:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"For Manager, Scanner, and Updater components, additional configuration is required as shown below:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'kubectl patch deploy neuvector-manager-pod -n cattle-neuvector-system --patch \'{"spec":{"template":{"spec":{"securityContext":{"runAsUser": 5400}}}}}\'\nkubectl patch deploy neuvector-scanner-pod -n cattle-neuvector-system --patch \'{"spec":{"template":{"spec":{"securityContext":{"runAsUser": 5400}}}}}\'\nkubectl patch cronjob neuvector-updater-pod -n cattle-neuvector-system --patch \'{"spec":{"jobTemplate":{"spec":{"template":{"spec":{"securityContext":{"runAsUser": 5400}}}}}}}\'\n')),(0,a.kt)("br",null),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"New in v2.6.7"))),(0,a.kt)("p",{parentName:"li"},"You will need to set additional configuration for your hardened cluster environment."),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," You must update your config in both RKE2 and K3s hardened clusters as shown below.")))),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,a.kt)("li",{parentName:"ol"},"Go to the cluster that you created and click ",(0,a.kt)("strong",{parentName:"li"},"Explore"),"."),(0,a.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,a.kt)("strong",{parentName:"li"},"Apps & Marketplace"),"."),(0,a.kt)("li",{parentName:"ol"},"Install (or upgrade to) NeuVector version ",(0,a.kt)("inlineCode",{parentName:"li"},"100.0.1+up2.2.2"),".")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Under ",(0,a.kt)("strong",{parentName:"p"},"Edit Options")," > ",(0,a.kt)("strong",{parentName:"p"},"Other Configuration"),", enable ",(0,a.kt)("strong",{parentName:"p"},"Pod Security Policy")," by checking the box. Note that you must also enter a value greater than ",(0,a.kt)("inlineCode",{parentName:"p"},"zero")," for ",(0,a.kt)("inlineCode",{parentName:"p"},"Manager runAsUser ID"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Scanner runAsUser ID"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"Updater runAsUser ID"),":"),(0,a.kt)("p",{parentName:"li"},"  ",(0,a.kt)("img",{alt:"Enable PSP for RKE2 and K3s Hardened Clusters",src:n(21447).Z,width:"942",height:"562"})))),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Install")," at the bottom-right to complete.")))),(0,a.kt)("h3",{id:"selinux-enabled-cluster-support---calico-and-canal"},"SELinux-enabled Cluster Support - Calico and Canal"),(0,a.kt)("p",null,"To enable SELinux on RKE2 clusters, follow the steps below:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"NeuVector components Controller and Enforcer are deployable if PSP is set to true.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Applicable to NeuVector chart version 100.0.0+up2.2.0 only:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For Manager, Scanner, and Updater components, additional configuration is required as shown below:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'kubectl patch deploy neuvector-manager-pod -n cattle-neuvector-system --patch \'{"spec":{"template":{"spec":{"securityContext":{"runAsUser": 5400}}}}}\'\nkubectl patch deploy neuvector-scanner-pod -n cattle-neuvector-system --patch \'{"spec":{"template":{"spec":{"securityContext":{"runAsUser": 5400}}}}}\'\nkubectl patch cronjob neuvector-updater-pod -n cattle-neuvector-system --patch \'{"spec":{"jobTemplate":{"spec":{"template":{"spec":{"securityContext":{"runAsUser": 5400}}}}}}}\'\n')),(0,a.kt)("h3",{id:"cluster-support-in-an-air-gapped-environment"},"Cluster Support in an Air-Gapped Environment"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"All NeuVector components are deployable on a cluster in an air-gapped environment without any additional configuration needed.")),(0,a.kt)("h3",{id:"support-limitations"},"Support Limitations"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Only admins and cluster owners are currently supported.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Fleet multi-cluster deployment is not supported.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"NeuVector is not supported on a Windows cluster."))),(0,a.kt)("h3",{id:"other-limitations"},"Other Limitations"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Currently, NeuVector feature chart installation fails when a NeuVector partner chart already exists. To work around this issue, uninstall the NeuVector partner chart and reinstall the NeuVector feature chart.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Sometimes when the controllers are not ready, the NeuVector UI is not accessible from the Rancher UI. During this time, controllers will try to restart, and it takes a few minutes for the controllers to be active.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Container runtime is not auto-detected for different cluster types when installing the NeuVector chart. To work around this, you can specify the runtime manually."))))}k.isMDXComponent=!0},28358:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/neuvector-architecture-a985ec6ea53faf5c7d808055f8d64be5.png"},22830:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/neuvector-security-containers-06d127dd89635663657feecb3310dfd5.png"},25475:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/psp-nv-rke-d87045c466a93d8487507a469d32d0db.png"},21447:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/psp-nv-rke2-a0eabc8b8a5e8d0476d885c29ca55017.png"}}]);