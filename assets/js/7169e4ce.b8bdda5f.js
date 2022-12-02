"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[17459],{3905:(e,r,a)=>{a.d(r,{Zo:()=>c,kt:()=>h});var t=a(67294);function s(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function n(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?n(Object(a),!0).forEach((function(r){s(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function i(e,r){if(null==e)return{};var a,t,s=function(e,r){if(null==e)return{};var a,t,s={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],r.indexOf(a)>=0||(s[a]=e[a]);return s}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)a=n[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=t.createContext({}),u=function(e){var r=t.useContext(l),a=r;return e&&(a="function"==typeof e?e(r):o(o({},r),e)),a},c=function(e){var r=u(e.components);return t.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var a=e.components,s=e.mdxType,n=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(a),h=s,g=p["".concat(l,".").concat(h)]||p[h]||d[h]||n;return a?t.createElement(g,o(o({ref:r},c),{},{components:a})):t.createElement(g,o({ref:r},c))}));function h(e,r){var a=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var n=a.length,o=new Array(n);o[0]=p;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var u=2;u<n;u++)o[u]=a[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}p.displayName="MDXCreateElement"},69746:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>u});var t=a(87462),s=(a(67294),a(3905));const n={title:"Kubernetes Resources"},o=void 0,i={unversionedId:"pages-for-subheaders/kubernetes-resources-setup",id:"version-2.0-2.4/pages-for-subheaders/kubernetes-resources-setup",title:"Kubernetes Resources",description:"Workloads",source:"@site/versioned_docs/version-2.0-2.4/pages-for-subheaders/kubernetes-resources-setup.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/kubernetes-resources-setup",permalink:"/v2.0-v2.4/pages-for-subheaders/kubernetes-resources-setup",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/pages-for-subheaders/kubernetes-resources-setup.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"Sep 23, 2022",frontMatter:{title:"Kubernetes Resources"},sidebar:"tutorialSidebar",previous:{title:"Importing Existing Clusters",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/import-existing-clusters"},next:{title:"Kubernetes Workloads and Pods",permalink:"/v2.0-v2.4/pages-for-subheaders/workloads-and-pods"}},l={},u=[{value:"Workloads",id:"workloads",level:2},{value:"Load Balancing and Ingress",id:"load-balancing-and-ingress",level:2},{value:"Load Balancers",id:"load-balancers",level:3},{value:"Ingress",id:"ingress",level:4},{value:"Service Discovery",id:"service-discovery",level:2},{value:"Pipelines",id:"pipelines",level:2},{value:"Applications",id:"applications",level:2},{value:"Kubernetes Resources",id:"kubernetes-resources",level:2}],c={toc:u};function d(e){let{components:r,...a}=e;return(0,s.kt)("wrapper",(0,t.Z)({},c,a,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"workloads"},"Workloads"),(0,s.kt)("p",null,"Deploy applications to your cluster nodes using ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/workloads-and-pods"},"workloads"),", which are objects that contain pods that run your apps, along with metadata that set rules for the deployment's behavior. Workloads can be deployed within the scope of the entire clusters or within a namespace."),(0,s.kt)("p",null,"When deploying a workload, you can deploy from any image. There are a variety of ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/workloads-and-pods#workload-types"},"workload types")," to choose from which determine how your application should run."),(0,s.kt)("p",null,"Following a workload deployment, you can continue working with it. You can:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/upgrade-workloads"},"Upgrade")," the workload to a newer version of the application it's running."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/roll-back-workloads"},"Roll back")," a workload to a previous version, if an issue occurs during upgrade."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/add-a-sidecar"},"Add a sidecar"),", which is a workload that supports a primary workload.")),(0,s.kt)("h2",{id:"load-balancing-and-ingress"},"Load Balancing and Ingress"),(0,s.kt)("h3",{id:"load-balancers"},"Load Balancers"),(0,s.kt)("p",null,"After you launch an application, it's only available within the cluster. It can't be reached externally."),(0,s.kt)("p",null,"If you want your applications to be externally accessible, you must add a load balancer to your cluster. Load balancers create a gateway for external connections to access your cluster, provided that the user knows the load balancer's IP address and the application's port number."),(0,s.kt)("p",null,"Rancher supports two types of load balancers:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/layer-4-and-layer-7-load-balancing#layer-4-load-balancer"},"Layer-4 Load Balancers")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/layer-4-and-layer-7-load-balancing#layer-7-load-balancer"},"Layer-7 Load Balancers"))),(0,s.kt)("p",null,"For more information, see ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/layer-4-and-layer-7-load-balancing"},"load balancers"),"."),(0,s.kt)("h4",{id:"ingress"},"Ingress"),(0,s.kt)("p",null,"Load Balancers can only handle one IP address per service, which means if you run multiple services in your cluster, you must have a load balancer for each service. Running multiples load balancers can be expensive. You can get around this issue by using an ingress."),(0,s.kt)("p",null,"Ingress is a set of rules that act as a load balancer. Ingress works in conjunction with one or more ingress controllers to dynamically route service requests. When the ingress receives a request, the ingress controller(s) in your cluster program the load balancer to direct the request to the correct service based on service subdomains or path rules that you've configured."),(0,s.kt)("p",null,"For more information, see ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/add-ingresses"},"Ingress"),"."),(0,s.kt)("p",null,"When using ingresses in a project, you can program the ingress hostname to an external DNS by setting up a Global DNS entry."),(0,s.kt)("p",null,"For more information, see ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/globaldns"},"Global DNS"),"."),(0,s.kt)("h2",{id:"service-discovery"},"Service Discovery"),(0,s.kt)("p",null,"After you expose your cluster to external requests using a load balancer and/or ingress, it's only available by IP address. To create a resolveable hostname, you must create a service record, which is a record that maps an IP address, external hostname, DNS record alias, workload(s), or labelled pods to a specific hostname."),(0,s.kt)("p",null,"For more information, see ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/create-services"},"Service Discovery"),"."),(0,s.kt)("h2",{id:"pipelines"},"Pipelines"),(0,s.kt)("p",null,"After your project has been ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-projects/ci-cd-pipelines#1-configure-version-control-providers"},"configured to a version control provider"),", you can add the repositories and start configuring a pipeline for each repository."),(0,s.kt)("p",null,"For more information, see ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/pipelines"},"Pipelines"),"."),(0,s.kt)("h2",{id:"applications"},"Applications"),(0,s.kt)("p",null,"Besides launching individual components of an application, you can use the Rancher catalog to start launching applications, which are Helm charts."),(0,s.kt)("p",null,"For more information, see ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/helm-charts-in-rancher"},"Applications in a Project"),"."),(0,s.kt)("h2",{id:"kubernetes-resources"},"Kubernetes Resources"),(0,s.kt)("p",null,"Within the context of a Rancher project or namespace, ",(0,s.kt)("em",{parentName:"p"},"resources")," are files and data that support operation of your pods. Within Rancher, certificates, registries, and secrets are all considered resources. However, Kubernetes classifies resources as different types of ",(0,s.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/secret/"},"secrets"),". Therefore, within a single project or namespace, individual resources must have unique names to avoid conflicts. Although resources are primarily used to carry sensitive information, they have other uses as well."),(0,s.kt)("p",null,"Resources include:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/encrypt-http-communication"},"Certificates"),": Files used to encrypt/decrypt data entering or leaving the cluster."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/configmaps"},"ConfigMaps"),": Files that store general configuration information, such as a group of config files."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/secrets"},"Secrets"),": Files that store sensitive data like passwords, tokens, or keys."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/kubernetes-and-docker-registries"},"Registries"),": Files that carry credentials used to authenticate with private registries.")))}d.isMDXComponent=!0}}]);