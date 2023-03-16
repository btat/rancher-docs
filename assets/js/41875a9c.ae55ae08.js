"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[30949],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(a),h=n,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return a?r.createElement(m,i(i({ref:t},c),{},{components:a})):r.createElement(m,i({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},28334:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const o={title:"1. Set up Infrastructure and Private Registry"},i=void 0,l={unversionedId:"getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/infrastructure-private-registry",id:"getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/infrastructure-private-registry",title:"1. Set up Infrastructure and Private Registry",description:"In this section, you will provision the underlying infrastructure for your Rancher management server in an air gapped environment. You will also set up the private container image registry that must be available to your Rancher node(s).",source:"@site/docs/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/infrastructure-private-registry.md",sourceDirName:"getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install",slug:"/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/infrastructure-private-registry",permalink:"/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/infrastructure-private-registry",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/infrastructure-private-registry.md",tags:[],version:"current",lastUpdatedAt:1673641462,formattedLastUpdatedAt:"Jan 13, 2023",frontMatter:{title:"1. Set up Infrastructure and Private Registry"},sidebar:"tutorialSidebar",previous:{title:"Air-Gapped Helm CLI Install",permalink:"/pages-for-subheaders/air-gapped-helm-cli-install"},next:{title:"2. Collect and Publish Images to your Private Registry",permalink:"/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/publish-images"}},s={},u=[{value:"1. Set up Linux Nodes",id:"1-set-up-linux-nodes",level:3},{value:"2. Set up External Datastore",id:"2-set-up-external-datastore",level:3},{value:"3. Set up the Load Balancer",id:"3-set-up-the-load-balancer",level:3},{value:"4. Set up the DNS Record",id:"4-set-up-the-dns-record",level:3},{value:"5. Set up a Private Image Registry",id:"5-set-up-a-private-image-registry",level:3},{value:"Why three nodes?",id:"why-three-nodes",level:3},{value:"1. Set up Linux Nodes",id:"1-set-up-linux-nodes-1",level:3},{value:"2. Set up the Load Balancer",id:"2-set-up-the-load-balancer",level:3},{value:"3. Set up the DNS Record",id:"3-set-up-the-dns-record",level:3},{value:"4. Set up a Private Image Registry",id:"4-set-up-a-private-image-registry",level:3},{value:"1. Set up a Linux Node",id:"1-set-up-a-linux-node",level:3},{value:"2. Set up a Private Docker Registry",id:"2-set-up-a-private-docker-registry",level:3},{value:"Next: Collect and Publish Images to your Private Registry",id:"next-collect-and-publish-images-to-your-private-registry",level:3}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},d=c("Tabs"),p=c("TabItem"),h={toc:u};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In this section, you will provision the underlying infrastructure for your Rancher management server in an air gapped environment. You will also set up the private container image registry that must be available to your Rancher node(s)."),(0,n.kt)("p",null,"An air gapped environment is an environment where the Rancher server is installed offline or behind a firewall."),(0,n.kt)("p",null,"The infrastructure depends on whether you are installing Rancher on a K3s Kubernetes cluster, an RKE Kubernetes cluster, or a single Docker container. For more information on each installation option, refer to ",(0,n.kt)("a",{parentName:"p",href:"/pages-for-subheaders/installation-and-upgrade"},"this page.")),(0,n.kt)("p",null,"Rancher can be installed on any Kubernetes cluster. The RKE and K3s Kubernetes infrastructure tutorials below are still included for convenience."),(0,n.kt)(d,{mdxType:"Tabs"},(0,n.kt)(p,{value:"K3s",mdxType:"TabItem"},(0,n.kt)("p",null,"We recommend setting up the following infrastructure for a high-availability installation:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Two Linux nodes,")," typically virtual machines, in the infrastructure provider of your choice."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"An external database")," to store the cluster data. PostgreSQL, MySQL, and etcd are supported."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"A load balancer")," to direct traffic to the two nodes."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"A DNS record")," to map a URL to the load balancer. This will become the Rancher server URL, and downstream Kubernetes clusters will need to reach it."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"A private image registry")," to distribute container images to your machines.")),(0,n.kt)("h3",{id:"1-set-up-linux-nodes"},"1. Set up Linux Nodes"),(0,n.kt)("p",null,"These hosts will be disconnected from the internet, but require being able to connect with your private registry."),(0,n.kt)("p",null,"Make sure that your nodes fulfill the general installation requirements for ",(0,n.kt)("a",{parentName:"p",href:"/pages-for-subheaders/installation-requirements"},"OS, container runtime, hardware, and networking.")),(0,n.kt)("p",null,"For an example of one way to set up Linux nodes, refer to this ",(0,n.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/infrastructure-setup/nodes-in-amazon-ec2"},"tutorial")," for setting up nodes as instances in Amazon EC2."),(0,n.kt)("h3",{id:"2-set-up-external-datastore"},"2. Set up External Datastore"),(0,n.kt)("p",null,"The ability to run Kubernetes using a datastore other than etcd sets K3s apart from other Kubernetes distributions. This feature provides flexibility to Kubernetes operators. The available options allow you to select a datastore that best fits your use case."),(0,n.kt)("p",null,"For a high-availability K3s installation, you will need to set up one of the following external databases:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.postgresql.org/"},"PostgreSQL")," (certified against versions 10.7 and 11.5)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.mysql.com/"},"MySQL")," (certified against version 5.7)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://etcd.io/"},"etcd")," (certified against version 3.3.15)")),(0,n.kt)("p",null,"When you install Kubernetes, you will pass in details for K3s to connect to the database."),(0,n.kt)("p",null,"For an example of one way to set up the database, refer to this ",(0,n.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/infrastructure-setup/mysql-database-in-amazon-rds"},"tutorial")," for setting up a MySQL database on Amazon's RDS service."),(0,n.kt)("p",null,"For the complete list of options that are available for configuring a K3s cluster datastore, refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/installation/datastore/"},"K3s documentation.")),(0,n.kt)("h3",{id:"3-set-up-the-load-balancer"},"3. Set up the Load Balancer"),(0,n.kt)("p",null,"You will also need to set up a load balancer to direct traffic to the Rancher replica on both nodes. That will prevent an outage of any single node from taking down communications to the Rancher management server."),(0,n.kt)("p",null,"When Kubernetes gets set up in a later step, the K3s tool will deploy a Traefik Ingress controller. This controller will listen on ports 80 and 443 of the worker nodes, answering traffic destined for specific hostnames."),(0,n.kt)("p",null,"When Rancher is installed (also in a later step), the Rancher system creates an Ingress resource. That Ingress tells the Traefik Ingress controller to listen for traffic destined for the Rancher hostname. The Traefik Ingress controller, when receiving traffic destined for the Rancher hostname, will forward that traffic to the running Rancher pods in the cluster."),(0,n.kt)("p",null,"For your implementation, consider if you want or need to use a Layer-4 or Layer-7 load balancer:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"A layer-4 load balancer")," is the simpler of the two choices, in which you are forwarding TCP traffic to your nodes. We recommend configuring your load balancer as a Layer 4 balancer, forwarding traffic to ports TCP/80 and TCP/443 to the Rancher management cluster nodes. The Ingress controller on the cluster will redirect HTTP traffic to HTTPS and terminate SSL/TLS on port TCP/443. The Ingress controller will forward traffic to port TCP/80 to the Ingress pod in the Rancher deployment."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"A layer-7 load balancer")," is a bit more complicated but can offer features that you may want. For instance, a layer-7 load balancer is capable of handling TLS termination at the load balancer, as opposed to Rancher doing TLS termination itself. This can be beneficial if you want to centralize your TLS termination in your infrastructure. Layer-7 load balancing also offers the capability for your load balancer to make decisions based on HTTP attributes such as cookies, etc. that a layer-4 load balancer is not able to concern itself with. If you decide to terminate the SSL/TLS traffic on a layer-7 load balancer, you will need to use the ",(0,n.kt)("inlineCode",{parentName:"li"},"--set tls=external")," option when installing Rancher in a later step. For more information, refer to the ",(0,n.kt)("a",{parentName:"li",href:"/getting-started/installation-and-upgrade/installation-references/helm-chart-options#external-tls-termination"},"Rancher Helm chart options."))),(0,n.kt)("p",null,"For an example showing how to set up an NGINX load balancer, refer to ",(0,n.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/infrastructure-setup/nginx-load-balancer"},"this page.")),(0,n.kt)("p",null,"For a how-to guide for setting up an Amazon ELB Network Load Balancer, refer to ",(0,n.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/infrastructure-setup/amazon-elb-load-balancer"},"this page.")),(0,n.kt)("admonition",{title:"Important:",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Do not use this load balancer (i.e, the ",(0,n.kt)("inlineCode",{parentName:"p"},"local")," cluster Ingress) to load balance applications other than Rancher following installation. Sharing this Ingress with other applications may result in websocket errors to Rancher following Ingress configuration reloads for other apps. We recommend dedicating the ",(0,n.kt)("inlineCode",{parentName:"p"},"local")," cluster to Rancher and no other applications.")),(0,n.kt)("h3",{id:"4-set-up-the-dns-record"},"4. Set up the DNS Record"),(0,n.kt)("p",null,"Once you have set up your load balancer, you will need to create a DNS record to send traffic to this load balancer."),(0,n.kt)("p",null,"Depending on your environment, this may be an A record pointing to the load balancer IP, or it may be a CNAME pointing to the load balancer hostname. In either case, make sure this record is the hostname that you intend Rancher to respond on."),(0,n.kt)("p",null,"You will need to specify this hostname in a later step when you install Rancher, and it is not possible to change it later. Make sure that your decision is a final one."),(0,n.kt)("p",null,"For a how-to guide for setting up a DNS record to route domain traffic to an Amazon ELB load balancer, refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-to-elb-load-balancer"},"official AWS documentation.")),(0,n.kt)("h3",{id:"5-set-up-a-private-image-registry"},"5. Set up a Private Image Registry"),(0,n.kt)("p",null,"Rancher supports air gap installs using a private registry. You must have your own private registry or other means of distributing container images to your machines."),(0,n.kt)("p",null,"In a later step, when you set up your K3s Kubernetes cluster, you will create a ",(0,n.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/installation/private-registry/"},"private registries configuration file")," with details from this registry."),(0,n.kt)("p",null,"If you need to create a private registry, refer to the documentation pages for your respective runtime:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/containerd/containerd/blob/main/docs/cri/config.md#registry-configuration"},"Containerd"),".",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/containerd/nerdctl/blob/main/docs/registry.md"},"Nerdctl commands and managed registry services"),". "))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.docker.com/registry/deploying/"},"Docker"),"."))),(0,n.kt)(p,{value:"RKE",mdxType:"TabItem"},(0,n.kt)("p",null,"To install the Rancher management server on a high-availability RKE cluster, we recommend setting up the following infrastructure:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Three Linux nodes,")," typically virtual machines, in an infrastructure provider such as Amazon's EC2, Google Compute Engine, or vSphere."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"A load balancer")," to direct front-end traffic to the three nodes."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"A DNS record")," to map a URL to the load balancer. This will become the Rancher server URL, and downstream Kubernetes clusters will need to reach it."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"A private image registry")," to distribute container images to your machines.")),(0,n.kt)("p",null,"These nodes must be in the same region/data center. You may place these servers in separate availability zones."),(0,n.kt)("h3",{id:"why-three-nodes"},"Why three nodes?"),(0,n.kt)("p",null,"In an RKE cluster, Rancher server data is stored on etcd. This etcd database runs on all three nodes."),(0,n.kt)("p",null,"The etcd database requires an odd number of nodes so that it can always elect a leader with a majority of the etcd cluster. If the etcd database cannot elect a leader, etcd can suffer from ",(0,n.kt)("a",{parentName:"p",href:"https://www.quora.com/What-is-split-brain-in-distributed-systems"},"split brain"),", requiring the cluster to be restored from backup. If one of the three etcd nodes fails, the two remaining nodes can elect a leader because they have the majority of the total number of etcd nodes."),(0,n.kt)("h3",{id:"1-set-up-linux-nodes-1"},"1. Set up Linux Nodes"),(0,n.kt)("p",null,"These hosts will be disconnected from the internet, but require being able to connect with your private registry."),(0,n.kt)("p",null,"Make sure that your nodes fulfill the general installation requirements for ",(0,n.kt)("a",{parentName:"p",href:"/pages-for-subheaders/installation-requirements"},"OS, container runtime, hardware, and networking.")),(0,n.kt)("p",null,"For an example of one way to set up Linux nodes, refer to this ",(0,n.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/infrastructure-setup/nodes-in-amazon-ec2"},"tutorial")," for setting up nodes as instances in Amazon EC2."),(0,n.kt)("h3",{id:"2-set-up-the-load-balancer"},"2. Set up the Load Balancer"),(0,n.kt)("p",null,"You will also need to set up a load balancer to direct traffic to the Rancher replica on both nodes. That will prevent an outage of any single node from taking down communications to the Rancher management server."),(0,n.kt)("p",null,"When Kubernetes gets set up in a later step, the RKE tool will deploy an NGINX Ingress controller. This controller will listen on ports 80 and 443 of the worker nodes, answering traffic destined for specific hostnames."),(0,n.kt)("p",null,"When Rancher is installed (also in a later step), the Rancher system creates an Ingress resource. That Ingress tells the NGINX Ingress controller to listen for traffic destined for the Rancher hostname. The NGINX Ingress controller, when receiving traffic destined for the Rancher hostname, will forward that traffic to the running Rancher pods in the cluster."),(0,n.kt)("p",null,"For your implementation, consider if you want or need to use a Layer-4 or Layer-7 load balancer:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"A layer-4 load balancer")," is the simpler of the two choices, in which you are forwarding TCP traffic to your nodes. We recommend configuring your load balancer as a Layer 4 balancer, forwarding traffic to ports TCP/80 and TCP/443 to the Rancher management cluster nodes. The Ingress controller on the cluster will redirect HTTP traffic to HTTPS and terminate SSL/TLS on port TCP/443. The Ingress controller will forward traffic to port TCP/80 to the Ingress pod in the Rancher deployment."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"A layer-7 load balancer")," is a bit more complicated but can offer features that you may want. For instance, a layer-7 load balancer is capable of handling TLS termination at the load balancer, as opposed to Rancher doing TLS termination itself. This can be beneficial if you want to centralize your TLS termination in your infrastructure. Layer-7 load balancing also offers the capability for your load balancer to make decisions based on HTTP attributes such as cookies, etc. that a layer-4 load balancer is not able to concern itself with. If you decide to terminate the SSL/TLS traffic on a layer-7 load balancer, you will need to use the ",(0,n.kt)("inlineCode",{parentName:"li"},"--set tls=external")," option when installing Rancher in a later step. For more information, refer to the ",(0,n.kt)("a",{parentName:"li",href:"/getting-started/installation-and-upgrade/installation-references/helm-chart-options#external-tls-termination"},"Rancher Helm chart options."))),(0,n.kt)("p",null,"For an example showing how to set up an NGINX load balancer, refer to ",(0,n.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/infrastructure-setup/nginx-load-balancer"},"this page.")),(0,n.kt)("p",null,"For a how-to guide for setting up an Amazon ELB Network Load Balancer, refer to ",(0,n.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/infrastructure-setup/amazon-elb-load-balancer"},"this page.")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Do not use this load balancer (i.e, the ",(0,n.kt)("inlineCode",{parentName:"p"},"local")," cluster Ingress) to load balance applications other than Rancher following installation. Sharing this Ingress with other applications may result in websocket errors to Rancher following Ingress configuration reloads for other apps. We recommend dedicating the ",(0,n.kt)("inlineCode",{parentName:"p"},"local")," cluster to Rancher and no other applications.")),(0,n.kt)("h3",{id:"3-set-up-the-dns-record"},"3. Set up the DNS Record"),(0,n.kt)("p",null,"Once you have set up your load balancer, you will need to create a DNS record to send traffic to this load balancer."),(0,n.kt)("p",null,"Depending on your environment, this may be an A record pointing to the LB IP, or it may be a CNAME pointing to the load balancer hostname. In either case, make sure this record is the hostname that you intend Rancher to respond on."),(0,n.kt)("p",null,"You will need to specify this hostname in a later step when you install Rancher, and it is not possible to change it later. Make sure that your decision is a final one."),(0,n.kt)("p",null,"For a how-to guide for setting up a DNS record to route domain traffic to an Amazon ELB load balancer, refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-to-elb-load-balancer"},"official AWS documentation.")),(0,n.kt)("h3",{id:"4-set-up-a-private-image-registry"},"4. Set up a Private Image Registry"),(0,n.kt)("p",null,"Rancher supports air gap installs using a secure private registry. You must have your own private registry or other means of distributing container images to your machines."),(0,n.kt)("p",null,"In a later step, when you set up your RKE Kubernetes cluster, you will create a ",(0,n.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/private-registries/"},"private registries configuration file")," with details from this registry."),(0,n.kt)("p",null,"If you need to create a private registry, refer to the documentation pages for your respective runtime:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/containerd/containerd/blob/main/docs/cri/config.md#registry-configuration"},"Containerd"),".",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/containerd/nerdctl/blob/main/docs/registry.md"},"Nerdctl commands and managed registry services"),". "))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.docker.com/registry/deploying/"},"Docker"),"."))),(0,n.kt)(p,{value:"Docker",mdxType:"TabItem"},(0,n.kt)("admonition",{title:"Notes:",type:"note"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The Docker installation is for Rancher users that are wanting to test out Rancher. Since there is only one node and a single Docker container, if the node goes down, you will lose all the data of your Rancher server.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The Rancher backup operator can be used to migrate Rancher from the single Docker container install to an installation on a high-availability Kubernetes cluster. For details, refer to the documentation on ",(0,n.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/migrate-rancher-to-new-cluster"},"migrating Rancher to a new cluster."))))),(0,n.kt)("h3",{id:"1-set-up-a-linux-node"},"1. Set up a Linux Node"),(0,n.kt)("p",null,"This host will be disconnected from the Internet, but needs to be able to connect to your private registry."),(0,n.kt)("p",null,"Make sure that your node fulfills the general installation requirements for ",(0,n.kt)("a",{parentName:"p",href:"/pages-for-subheaders/installation-requirements"},"OS, containers, hardware, and networking.")),(0,n.kt)("p",null,"For an example of one way to set up Linux nodes, refer to this ",(0,n.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/infrastructure-setup/nodes-in-amazon-ec2"},"tutorial")," for setting up nodes as instances in Amazon EC2."),(0,n.kt)("h3",{id:"2-set-up-a-private-docker-registry"},"2. Set up a Private Docker Registry"),(0,n.kt)("p",null,"Rancher supports air gap installs using a private registry on your bastion server. You must have your own private registry or other means of distributing container images to your machines."),(0,n.kt)("p",null,"If you need help with creating a private registry, please refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.docker.com/registry/"},"official Docker documentation."),"."))),(0,n.kt)("h3",{id:"next-collect-and-publish-images-to-your-private-registry"},(0,n.kt)("a",{parentName:"h3",href:"/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/publish-images"},"Next: Collect and Publish Images to your Private Registry")))}m.isMDXComponent=!0}}]);