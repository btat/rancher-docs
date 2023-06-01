"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[32288],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,g=d["".concat(s,".").concat(h)]||d[h]||p[h]||l;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98443:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const l={title:"Installing Rancher on a Google Kubernetes Engine Cluster"},o=void 0,i={unversionedId:"getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-gke",id:"version-2.6/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-gke",title:"Installing Rancher on a Google Kubernetes Engine Cluster",description:"In this section, you'll learn how to install Rancher using Google Kubernetes Engine.",source:"@site/versioned_docs/version-2.6/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-gke.md",sourceDirName:"getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster",slug:"/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-gke",permalink:"/v2.6/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-gke",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-gke.md",tags:[],version:"2.6",lastUpdatedAt:1685111429,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{title:"Installing Rancher on a Google Kubernetes Engine Cluster"},sidebar:"tutorialSidebar",previous:{title:"Installing Rancher on Azure Kubernetes Service",permalink:"/v2.6/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-aks"},next:{title:"Troubleshooting the Rancher Server Kubernetes Cluster",permalink:"/v2.6/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/troubleshooting"}},s={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"1. Enable the Kubernetes Engine API",id:"1-enable-the-kubernetes-engine-api",level:2},{value:"2. Open the Cloud Shell",id:"2-open-the-cloud-shell",level:2},{value:"Cloud Shell",id:"cloud-shell",level:3},{value:"Local Shell",id:"local-shell",level:3},{value:"3. Configure the gcloud CLI",id:"3-configure-the-gcloud-cli",level:2},{value:"4. Confirm that gcloud is configured correctly",id:"4-confirm-that-gcloud-is-configured-correctly",level:2},{value:"5. Create a GKE Cluster",id:"5-create-a-gke-cluster",level:2},{value:"6. Get Authentication Credentials",id:"6-get-authentication-credentials",level:2},{value:"7. Install an Ingress",id:"7-install-an-ingress",level:2},{value:"8. Get the Load Balancer IP",id:"8-get-the-load-balancer-ip",level:2},{value:"9. Set up DNS",id:"9-set-up-dns",level:2},{value:"10. Install the Rancher Helm chart",id:"10-install-the-rancher-helm-chart",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},p=c("Tabs"),d=c("TabItem"),h={toc:u};function g(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-gke"})),(0,a.kt)("p",null,"In this section, you'll learn how to install Rancher using Google Kubernetes Engine."),(0,a.kt)("p",null,"If you already have a GKE Kubernetes cluster, skip to the step about ",(0,a.kt)("a",{parentName:"p",href:"#7-install-an-ingress"},"installing an ingress.")," Then install the Rancher Helm chart following the instructions on ",(0,a.kt)("a",{parentName:"p",href:"/v2.6/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster#install-the-rancher-helm-chart"},"this page.")),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You will need a Google account."),(0,a.kt)("li",{parentName:"ul"},"You will need a Google Cloud billing account. You can manage your Cloud Billing accounts using the Google Cloud Console. For more information about the Cloud Console, visit ",(0,a.kt)("a",{parentName:"li",href:"https://support.google.com/cloud/answer/3465889?hl=en&ref_topic=3340599"},"General guide to the console.")),(0,a.kt)("li",{parentName:"ul"},"You will need a cloud quota for at least one in-use IP address and at least 2 CPUs. For more details about hardware requirements for the Rancher server, refer to ",(0,a.kt)("a",{parentName:"li",href:"/v2.6/pages-for-subheaders/installation-requirements#rke-and-hosted-kubernetes"},"this section."))),(0,a.kt)("h2",{id:"1-enable-the-kubernetes-engine-api"},"1. Enable the Kubernetes Engine API"),(0,a.kt)("p",null,"Take the following steps to enable the Kubernetes Engine API:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Visit the ",(0,a.kt)("a",{parentName:"li",href:"https://console.cloud.google.com/projectselector/kubernetes?_ga=2.169595943.767329331.1617810440-856599067.1617343886"},"Kubernetes Engine page")," in the Google Cloud Console."),(0,a.kt)("li",{parentName:"ol"},"Create or select a project."),(0,a.kt)("li",{parentName:"ol"},"Open the project and enable the Kubernetes Engine API for the project. Wait for the API and related services to be enabled. This can take several minutes."),(0,a.kt)("li",{parentName:"ol"},"Make sure that billing is enabled for your Cloud project. For information on how to enable billing for your project, refer to the ",(0,a.kt)("a",{parentName:"li",href:"https://cloud.google.com/billing/docs/how-to/modify-project#enable_billing_for_a_project"},"Google Cloud documentation."))),(0,a.kt)("h2",{id:"2-open-the-cloud-shell"},"2. Open the Cloud Shell"),(0,a.kt)("p",null,"Cloud Shell is a shell environment for managing resources hosted on Google Cloud. Cloud Shell comes preinstalled with the ",(0,a.kt)("inlineCode",{parentName:"p"},"gcloud")," command-line tool and kubectl command-line tool. The ",(0,a.kt)("inlineCode",{parentName:"p"},"gcloud")," tool provides the primary command-line interface for Google Cloud, and ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl")," provides the primary command-line interface for running commands against Kubernetes clusters."),(0,a.kt)("p",null,"The following sections describe how to launch the cloud shell from the Google Cloud Console or from your local workstation."),(0,a.kt)("h3",{id:"cloud-shell"},"Cloud Shell"),(0,a.kt)("p",null,"To launch the shell from the ",(0,a.kt)("a",{parentName:"p",href:"https://console.cloud.google.com"},"Google Cloud Console,")," go to the upper-right corner of the console and click the terminal button. When hovering over the button, it is labeled ",(0,a.kt)("strong",{parentName:"p"},"Activate Cloud Shell"),"."),(0,a.kt)("h3",{id:"local-shell"},"Local Shell"),(0,a.kt)("p",null,"To install ",(0,a.kt)("inlineCode",{parentName:"p"},"gcloud")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl"),", perform the following steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install the Cloud SDK by following ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/sdk/docs/install"},"these steps.")," The Cloud SDK includes the ",(0,a.kt)("inlineCode",{parentName:"p"},"gcloud")," command-line tool. The steps vary based on your OS.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"After installing Cloud SDK, install the ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl")," command-line tool by running the following command:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"gcloud components install kubectl\n")),(0,a.kt)("p",{parentName:"li"},"In a later step, ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl")," will be configured to use the new GKE cluster.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/install/"},"Install Helm 3")," if it is not already installed.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enable Helm experimental ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/helm/community/blob/master/hips/hip-0006.md"},"support for OCI images")," with the ",(0,a.kt)("inlineCode",{parentName:"p"},"HELM_EXPERIMENTAL_OCI")," variable. Add the following line to ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.bashrc")," (or ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.bash_profile")," in macOS, or wherever your shell stores environment variables):"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"export HELM_EXPERIMENTAL_OCI=1\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run the following command to load your updated ",(0,a.kt)("inlineCode",{parentName:"p"},".bashrc")," file:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"source ~/.bashrc\n")),(0,a.kt)("p",{parentName:"li"},"If you are running macOS, use this command:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"source ~/.bash_profile\n")))),(0,a.kt)("h2",{id:"3-configure-the-gcloud-cli"},"3. Configure the gcloud CLI"),(0,a.kt)("p",null," Set up default gcloud settings using one of the following methods:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Using gcloud init, if you want to be walked through setting defaults."),(0,a.kt)("li",{parentName:"ul"},"Using gcloud config, to individually set your project ID, zone, and region.")),(0,a.kt)(p,{mdxType:"Tabs"},(0,a.kt)(d,{value:"Using gcloud init",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run gcloud init and follow the directions:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"gcloud init\n")),(0,a.kt)("p",{parentName:"li"},"If you are using SSH on a remote server, use the --console-only flag to prevent the command from launching a browser:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"gcloud init --console-only\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Follow the instructions to authorize gcloud to use your Google Cloud account and select the new project that you created.")))),(0,a.kt)(d,{value:"Using gcloud config",mdxType:"TabItem"})),(0,a.kt)("h2",{id:"4-confirm-that-gcloud-is-configured-correctly"},"4. Confirm that gcloud is configured correctly"),(0,a.kt)("p",null,"Run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"gcloud config list\n")),(0,a.kt)("p",null,"The output should resemble the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[compute]\nregion = us-west1 # Your chosen region\nzone = us-west1-b # Your chosen zone\n[core]\naccount = <Your email>\ndisable_usage_reporting = True\nproject = <Your project ID>\n\nYour active configuration is: [default]\n")),(0,a.kt)("h2",{id:"5-create-a-gke-cluster"},"5. Create a GKE Cluster"),(0,a.kt)("p",null,"The following command creates a three-node cluster."),(0,a.kt)("p",null,"Replace ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster-name")," with the name of your new cluster."),(0,a.kt)("p",null,"When choosing a Kubernetes version, be sure to first consult the ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/support-matrix/"},"support matrix")," to find the highest version of Kubernetes that has been validated for your Rancher version."),(0,a.kt)("p",null,"To successfully create a GKE cluster with Rancher, your GKE must be in Standard mode. GKE has two modes of operation when creating a Kubernetes cluster, Autopilot and Standard mode. The cluster configuration for Autopilot mode has restrictions on editing the kube-system namespace. However, Rancher needs to create resources in the kube-system namespace during installation. As a result, you will not be able to install Rancher on a GKE cluster created in Autopilot mode. For more information about the difference between GKE Autopilot mode and Standard mode, visit ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/resources/autopilot-standard-feature-comparison"},"Compare GKE Autopilot and Standard.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," If you're updating from an older version of Kubernetes, to Kubernetes v1.22 or above, you also need to ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/user-guide/k8s-122-migration/"},"update")," ingress-nginx."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"gcloud container clusters create cluster-name --num-nodes=3 --cluster-version=<VERSION>\n")),(0,a.kt)("h2",{id:"6-get-authentication-credentials"},"6. Get Authentication Credentials"),(0,a.kt)("p",null,"After creating your cluster, you need to get authentication credentials to interact with the cluster:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"gcloud container clusters get-credentials cluster-name\n")),(0,a.kt)("p",null,"This command configures ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl")," to use the cluster you created."),(0,a.kt)("h2",{id:"7-install-an-ingress"},"7. Install an Ingress"),(0,a.kt)("p",null,"The cluster needs an Ingress so that Rancher can be accessed from outside the cluster."),(0,a.kt)("p",null,"The following command installs an ",(0,a.kt)("inlineCode",{parentName:"p"},"nginx-ingress-controller")," with a LoadBalancer service:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx\nhelm repo update\nhelm upgrade --install \\\n  ingress-nginx ingress-nginx/ingress-nginx \\\n  --namespace ingress-nginx \\\n  --set controller.service.type=LoadBalancer \\\n  --version 4.0.18 \\\n  --create-namespace\n")),(0,a.kt)("h2",{id:"8-get-the-load-balancer-ip"},"8. Get the Load Balancer IP"),(0,a.kt)("p",null,"To get the address of the load balancer, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl get service ingress-nginx-controller --namespace=ingress-nginx\n")),(0,a.kt)("p",null,"The result should look similar to the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"NAME                       TYPE           CLUSTER-IP     EXTERNAL-IP     PORT(S)                      AGE\ningress-nginx-controller   LoadBalancer   10.3.244.156   35.233.206.34   80:31876/TCP,443:32497/TCP   81s\n")),(0,a.kt)("p",null,"Save the ",(0,a.kt)("inlineCode",{parentName:"p"},"EXTERNAL-IP"),"."),(0,a.kt)("h2",{id:"9-set-up-dns"},"9. Set up DNS"),(0,a.kt)("p",null,"External traffic to the Rancher server will need to be directed at the load balancer you created."),(0,a.kt)("p",null,"Set up a DNS to point at the external IP that you saved. This DNS will be used as the Rancher server URL."),(0,a.kt)("p",null,"There are many valid ways to set up the DNS. For help, refer to the Google Cloud documentation about ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/dns/docs/records"},"managing DNS records.")),(0,a.kt)("h2",{id:"10-install-the-rancher-helm-chart"},"10. Install the Rancher Helm chart"),(0,a.kt)("p",null,"Next, install the Rancher Helm chart by following the instructions on ",(0,a.kt)("a",{parentName:"p",href:"/v2.6/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster#install-the-rancher-helm-chart"},"this page.")," The Helm instructions are the same for installing Rancher on any Kubernetes distribution."),(0,a.kt)("p",null,"Use the DNS name from the previous step as the Rancher server URL when you install Rancher. It can be passed in as a Helm option. For example, if the DNS name is ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher.my.org"),", you could run the Helm installation command with the option ",(0,a.kt)("inlineCode",{parentName:"p"},"--set hostname=rancher.my.org"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"New in v2.6.7"))),(0,a.kt)("p",null,"When installing Rancher on top of this setup, you will also need to pass the value below into the Rancher Helm install command in order to set the name of the ingress controller to be used with Rancher's ingress resource:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"--set ingress.ingressClassName=nginx\n")),(0,a.kt)("p",null,"Refer ",(0,a.kt)("a",{parentName:"p",href:"/v2.6/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster#5-install-rancher-with-helm-and-your-chosen-certificate-option"},"here for the Helm install command")," for your chosen certificate option."))}g.isMDXComponent=!0}}]);