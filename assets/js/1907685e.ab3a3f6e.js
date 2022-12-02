"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[24836],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),c=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,u=d["".concat(o,".").concat(m)]||d[m]||h[m]||l;return a?r.createElement(u,i(i({ref:t},p),{},{components:a})):r.createElement(u,i({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<l;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},53091:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const l={title:"4. Install Rancher"},i=void 0,s={unversionedId:"getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-rancher-ha",id:"getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-rancher-ha",title:"4. Install Rancher",description:"This section is about how to deploy Rancher for your air gapped environment in a high-availability Kubernetes installation. An air gapped environment could be where Rancher server will be installed offline, behind a firewall, or behind a proxy.",source:"@site/docs/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-rancher-ha.md",sourceDirName:"getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install",slug:"/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-rancher-ha",permalink:"/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-rancher-ha",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-rancher-ha.md",tags:[],version:"current",lastUpdatedAt:1668039147,formattedLastUpdatedAt:"Nov 10, 2022",frontMatter:{title:"4. Install Rancher"},sidebar:"tutorialSidebar",previous:{title:"3. Install Kubernetes (Skip for Docker Installs)",permalink:"/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-kubernetes"},next:{title:"Docker Install Commands",permalink:"/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/docker-install-commands"}},o={},c=[{value:"Privileged Access for Rancher",id:"privileged-access-for-rancher",level:3},{value:"Docker Instructions",id:"docker-instructions",level:2},{value:"Kubernetes Instructions",id:"kubernetes-instructions",level:2},{value:"1. Add the Helm Chart Repository",id:"1-add-the-helm-chart-repository",level:3},{value:"2. Choose your SSL Configuration",id:"2-choose-your-ssl-configuration",level:3},{value:"Helm Chart Options for Air Gap Installations",id:"helm-chart-options-for-air-gap-installations",level:3},{value:"3. Fetch the Cert-Manager chart",id:"3-fetch-the-cert-manager-chart",level:3},{value:"Option A: Default Self-Signed Certificate",id:"option-a-default-self-signed-certificate",level:4},{value:"1. Add the cert-manager repo",id:"1-add-the-cert-manager-repo",level:5},{value:"2. Fetch the cert-manager chart",id:"2-fetch-the-cert-manager-chart",level:5},{value:"3. Retrieve the Cert-Manager CRDs",id:"3-retrieve-the-cert-manager-crds",level:5},{value:"4. Install Rancher",id:"4-install-rancher",level:3},{value:"1. Install Cert-Manager",id:"1-install-cert-manager",level:5},{value:"2. Install Rancher",id:"2-install-rancher",level:5},{value:"Option B: Certificates From Files using Kubernetes Secrets",id:"option-b-certificates-from-files-using-kubernetes-secrets",level:4},{value:"1. Create secrets",id:"1-create-secrets",level:5},{value:"2. Install Rancher",id:"2-install-rancher-1",level:5},{value:"Additional Resources",id:"additional-resources",level:2}],p={toc:c};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This section is about how to deploy Rancher for your air gapped environment in a high-availability Kubernetes installation. An air gapped environment could be where Rancher server will be installed offline, behind a firewall, or behind a proxy."),(0,n.kt)("h3",{id:"privileged-access-for-rancher"},"Privileged Access for Rancher"),(0,n.kt)("p",null,"When the Rancher server is deployed in the Docker container, a local Kubernetes cluster is installed within the container for Rancher to use. Because many features of Rancher run as deployments, and privileged mode is required to run containers within containers, you will need to install Rancher with the ",(0,n.kt)("inlineCode",{parentName:"p"},"--privileged")," option."),(0,n.kt)("h2",{id:"docker-instructions"},"Docker Instructions"),(0,n.kt)("p",null,"If you want to continue the air gapped installation using Docker commands, skip the rest of this page and follow the instructions on ",(0,n.kt)("a",{parentName:"p",href:"/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/docker-install-commands"},"this page.")),(0,n.kt)("h2",{id:"kubernetes-instructions"},"Kubernetes Instructions"),(0,n.kt)("p",null,"Rancher recommends installing Rancher on a Kubernetes cluster. A highly available Kubernetes install is comprised of three nodes running the Rancher server components on a Kubernetes cluster. The persistence layer (etcd) is also replicated on these three nodes, providing redundancy and data duplication in case one of the nodes fails."),(0,n.kt)("h3",{id:"1-add-the-helm-chart-repository"},"1. Add the Helm Chart Repository"),(0,n.kt)("p",null,"From a system that has access to the internet, fetch the latest Helm chart and copy the resulting manifests to a system that has access to the Rancher server cluster."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"If you haven't already, install ",(0,n.kt)("inlineCode",{parentName:"p"},"helm")," locally on a workstation that has internet access. Note: Refer to the ",(0,n.kt)("a",{parentName:"p",href:"/getting-started/installation-and-upgrade/resources/helm-version-requirements"},"Helm version requirements")," to choose a version of Helm to install Rancher.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use ",(0,n.kt)("inlineCode",{parentName:"p"},"helm repo add")," command to add the Helm chart repository that contains charts to install Rancher. For more information about the repository choices and which is best for your use case, see ",(0,n.kt)("a",{parentName:"p",href:"/getting-started/installation-and-upgrade/installation-references/helm-chart-options#helm-chart-repositories"},"Choosing a Version of Rancher"),"."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Latest: Recommended for trying out the newest features",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"helm repo add rancher-latest https://releases.rancher.com/server-charts/latest\n"))),(0,n.kt)("li",{parentName:"ul"},"Stable: Recommended for production environments",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"helm repo add rancher-stable https://releases.rancher.com/server-charts/stable\n"))),(0,n.kt)("li",{parentName:"ul"},"Alpha: Experimental preview of upcoming releases.",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"helm repo add rancher-alpha https://releases.rancher.com/server-charts/alpha\n")),"  Note: Upgrades are not supported to, from, or between Alphas."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Fetch the latest Rancher chart. This will pull down the chart and save it in the current directory as a ",(0,n.kt)("inlineCode",{parentName:"p"},".tgz")," file."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"helm fetch rancher-<CHART_REPO>/rancher\n")),(0,n.kt)("p",{parentName:"li"},"If you require a specific version of Rancher, you can fetch this with the Helm ",(0,n.kt)("inlineCode",{parentName:"p"},"--version")," parameter like in the following example:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"helm fetch rancher-stable/rancher --version=v2.4.8\n")))),(0,n.kt)("h3",{id:"2-choose-your-ssl-configuration"},"2. Choose your SSL Configuration"),(0,n.kt)("p",null,"Rancher Server is designed to be secure by default and requires SSL/TLS configuration."),(0,n.kt)("p",null,"When Rancher is installed on an air gapped Kubernetes cluster, there are two recommended options for the source of the certificate."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If you want terminate SSL/TLS externally, see ",(0,n.kt)("a",{parentName:"p",href:"/getting-started/installation-and-upgrade/installation-references/helm-chart-options#external-tls-termination"},"TLS termination on an External Load Balancer"),".")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Configuration"),(0,n.kt)("th",{parentName:"tr",align:null},"Chart option"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Requires cert-manager"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Rancher Generated Self-Signed Certificates"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"ingress.tls.source=rancher")),(0,n.kt)("td",{parentName:"tr",align:null},"Use certificates issued by Rancher's generated CA (self signed)",(0,n.kt)("br",null)," This is the ",(0,n.kt)("strong",{parentName:"td"},"default")," and does not need to be added when rendering the Helm template."),(0,n.kt)("td",{parentName:"tr",align:null},"yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Certificates from Files"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"ingress.tls.source=secret")),(0,n.kt)("td",{parentName:"tr",align:null},"Use your own certificate files by creating Kubernetes Secret(s). ",(0,n.kt)("br",null)," This option must be passed when rendering the Rancher Helm template."),(0,n.kt)("td",{parentName:"tr",align:null},"no")))),(0,n.kt)("h3",{id:"helm-chart-options-for-air-gap-installations"},"Helm Chart Options for Air Gap Installations"),(0,n.kt)("p",null,"When setting up the Rancher Helm template, there are several options in the Helm chart that are designed specifically for air gap installations."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Chart Option"),(0,n.kt)("th",{parentName:"tr",align:null},"Chart Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"certmanager.version")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"<version>")),(0,n.kt)("td",{parentName:"tr",align:null},"Configure proper Rancher TLS issuer depending of running cert-manager version.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"systemDefaultRegistry")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"<REGISTRY.YOURDOMAIN.COM:PORT>")),(0,n.kt)("td",{parentName:"tr",align:null},"Configure Rancher server to always pull from your private registry when provisioning clusters.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"useBundledSystemChart")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"true")),(0,n.kt)("td",{parentName:"tr",align:null},"Configure Rancher server to use the packaged copy of Helm system charts. The ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/rancher/system-charts"},"system charts")," repository contains all the catalog items required for features such as monitoring, logging, alerting and global DNS. These ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/rancher/system-charts"},"Helm charts")," are located in GitHub, but since you are in an air gapped environment, using the charts that are bundled within Rancher is much easier than setting up a Git mirror.")))),(0,n.kt)("h3",{id:"3-fetch-the-cert-manager-chart"},"3. Fetch the Cert-Manager chart"),(0,n.kt)("p",null,"Based on the choice your made in ",(0,n.kt)("a",{parentName:"p",href:"#2-choose-your-ssl-configuration"},"2. Choose your SSL Configuration"),", complete one of the procedures below."),(0,n.kt)("h4",{id:"option-a-default-self-signed-certificate"},"Option A: Default Self-Signed Certificate"),(0,n.kt)("p",null,"By default, Rancher generates a CA and uses cert-manager to issue the certificate for access to the Rancher server interface."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Recent changes to cert-manager require an upgrade. If you are upgrading Rancher and using a version of cert-manager older than v0.11.0, please see our ",(0,n.kt)("a",{parentName:"p",href:"/getting-started/installation-and-upgrade/resources/upgrade-cert-manager"},"upgrade cert-manager documentation"),".")),(0,n.kt)("h5",{id:"1-add-the-cert-manager-repo"},"1. Add the cert-manager repo"),(0,n.kt)("p",null,"From a system connected to the internet, add the cert-manager repo to Helm:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"helm repo add jetstack https://charts.jetstack.io\nhelm repo update\n")),(0,n.kt)("h5",{id:"2-fetch-the-cert-manager-chart"},"2. Fetch the cert-manager chart"),(0,n.kt)("p",null,"Fetch the latest cert-manager chart available from the ",(0,n.kt)("a",{parentName:"p",href:"https://artifacthub.io/packages/helm/cert-manager/cert-manager"},"Helm chart repository"),"."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"New in v2.6.4, cert-manager versions 1.6.2 and 1.7.1 are compatible. We recommend v1.7.x because v 1.6.x will reach end-of-life on March 30, 2022.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"helm fetch jetstack/cert-manager --version v1.7.1\n")),(0,n.kt)("h5",{id:"3-retrieve-the-cert-manager-crds"},"3. Retrieve the Cert-Manager CRDs"),(0,n.kt)("p",null,"Download the required CRD file for cert-manager:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"curl -L -o cert-manager/cert-manager-crd.yaml https://github.com/cert-manager/cert-manager/releases/download/v1.7.1/cert-manager.crds.yaml\n")),(0,n.kt)("h3",{id:"4-install-rancher"},"4. Install Rancher"),(0,n.kt)("p",null,"Copy the fetched charts to a system that has access to the Rancher server cluster to complete installation."),(0,n.kt)("h5",{id:"1-install-cert-manager"},"1. Install Cert-Manager"),(0,n.kt)("p",null,"Install cert-manager with the options you would like to use to install the chart. Remember to set the ",(0,n.kt)("inlineCode",{parentName:"p"},"image.repository")," option to pull the image from your private registry. This will create a ",(0,n.kt)("inlineCode",{parentName:"p"},"cert-manager")," directory with the Kubernetes manifest files."),(0,n.kt)("details",{id:"install-cert-manager"},(0,n.kt)("summary",null,"Click to expand"),(0,n.kt)("p",null,"If you are using self-signed certificates, install cert-manager:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create the namespace for cert-manager."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl create namespace cert-manager\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create the cert-manager CustomResourceDefinitions (CRDs). "),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl apply -f cert-manager/cert-manager-crd.yaml\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Install cert-manager."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"helm install cert-manager ./cert-manager-v1.7.1.tgz \\\n    --namespace cert-manager \\\n    --set image.repository=<REGISTRY.YOURDOMAIN.COM:PORT>/quay.io/jetstack/cert-manager-controller \\\n    --set webhook.image.repository=<REGISTRY.YOURDOMAIN.COM:PORT>/quay.io/jetstack/cert-manager-webhook \\\n    --set cainjector.image.repository=<REGISTRY.YOURDOMAIN.COM:PORT>/quay.io/jetstack/cert-manager-cainjector \\\n    --set startupapicheck.image.repository=<REGISTRY.YOURDOMAIN.COM:PORT>/quay.io/jetstack/cert-manager-ctl\n"))))),(0,n.kt)("h5",{id:"2-install-rancher"},"2. Install Rancher"),(0,n.kt)("p",null,"First, refer to ",(0,n.kt)("a",{parentName:"p",href:"/getting-started/installation-and-upgrade/resources/add-tls-secrets"},"Adding TLS Secrets")," to publish the certificate files so Rancher and the ingress controller can use them."),(0,n.kt)("p",null,"Then, create the namespace for Rancher using kubectl:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl create namespace cattle-system\n")),(0,n.kt)("p",null,"Next, install Rancher, declaring your chosen options. Use the reference table below to replace each placeholder. Rancher needs to be configured to use the private registry in order to provision any Rancher launched Kubernetes clusters or Rancher tools."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Placeholder"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"<VERSION>")),(0,n.kt)("td",{parentName:"tr",align:null},"The version number of the output tarball.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"<RANCHER.YOURDOMAIN.COM>")),(0,n.kt)("td",{parentName:"tr",align:null},"The DNS name you pointed at your load balancer.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"<REGISTRY.YOURDOMAIN.COM:PORT>")),(0,n.kt)("td",{parentName:"tr",align:null},"The DNS name for your private registry.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"<CERTMANAGER_VERSION>")),(0,n.kt)("td",{parentName:"tr",align:null},"Cert-manager version running on k8s cluster.")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"   helm install rancher ./rancher-<VERSION>.tgz \\\n    --namespace cattle-system \\\n    --set hostname=<RANCHER.YOURDOMAIN.COM> \\\n    --set certmanager.version=<CERTMANAGER_VERSION> \\\n    --set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \\\n    --set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \\ # Set a default private registry to be used in Rancher\n    --set useBundledSystemChart=true # Use the packaged Rancher system charts\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Optional"),": To install a specific Rancher version, set the ",(0,n.kt)("inlineCode",{parentName:"p"},"rancherImageTag")," value, example: ",(0,n.kt)("inlineCode",{parentName:"p"},"--set rancherImageTag=v2.5.8")),(0,n.kt)("h4",{id:"option-b-certificates-from-files-using-kubernetes-secrets"},"Option B: Certificates From Files using Kubernetes Secrets"),(0,n.kt)("h5",{id:"1-create-secrets"},"1. Create secrets"),(0,n.kt)("p",null,"Create Kubernetes secrets from your own certificates for Rancher to use. The common name for the cert will need to match the ",(0,n.kt)("inlineCode",{parentName:"p"},"hostname")," option in the command below, or the ingress controller will fail to provision the site for Rancher."),(0,n.kt)("h5",{id:"2-install-rancher-1"},"2. Install Rancher"),(0,n.kt)("p",null,"Install Rancher, declaring your chosen options. Use the reference table below to replace each placeholder. Rancher needs to be configured to use the private registry in order to provision any Rancher launched Kubernetes clusters or Rancher tools."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Placeholder"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"<VERSION>")),(0,n.kt)("td",{parentName:"tr",align:null},"The version number of the output tarball.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"<RANCHER.YOURDOMAIN.COM>")),(0,n.kt)("td",{parentName:"tr",align:null},"The DNS name you pointed at your load balancer.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"<REGISTRY.YOURDOMAIN.COM:PORT>")),(0,n.kt)("td",{parentName:"tr",align:null},"The DNS name for your private registry.")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"   helm install rancher ./rancher-<VERSION>.tgz --output-dir . \\\n    --namespace cattle-system \\\n    --set hostname=<RANCHER.YOURDOMAIN.COM> \\\n    --set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \\\n    --set ingress.tls.source=secret \\\n    --set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \\ # Set a default private registry to be used in Rancher\n    --set useBundledSystemChart=true # Use the packaged Rancher system charts\n")),(0,n.kt)("p",null,"If you are using a Private CA signed cert, add ",(0,n.kt)("inlineCode",{parentName:"p"},"--set privateCA=true")," following ",(0,n.kt)("inlineCode",{parentName:"p"},"--set ingress.tls.source=secret"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"   helm install rancher ./rancher-<VERSION>.tgz --output-dir . \\\n    --namespace cattle-system \\\n    --set hostname=<RANCHER.YOURDOMAIN.COM> \\\n    --set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \\\n    --set ingress.tls.source=secret \\\n    --set privateCA=true \\\n    --set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \\ # Set a default private registry to be used in Rancher\n    --set useBundledSystemChart=true # Use the packaged Rancher system charts\n")),(0,n.kt)("p",null,"The installation is complete."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"If you don't intend to send telemetry data, opt out ",(0,n.kt)("a",{parentName:"p",href:"/faq/telemetry"},"telemetry")," during the initial login. Leaving this active in an air-gapped environment can cause issues if the sockets cannot be opened successfully.")),(0,n.kt)("h2",{id:"additional-resources"},"Additional Resources"),(0,n.kt)("p",null,"These resources could be helpful when installing Rancher:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/getting-started/installation-and-upgrade/installation-references/helm-chart-options"},"Rancher Helm chart options")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/getting-started/installation-and-upgrade/resources/add-tls-secrets"},"Adding TLS secrets")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/troubleshooting"},"Troubleshooting Rancher Kubernetes Installations"))))}h.isMDXComponent=!0}}]);