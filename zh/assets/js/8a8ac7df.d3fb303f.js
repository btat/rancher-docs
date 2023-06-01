"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[70981],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),o=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=o(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=o(r),h=n,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return r?a.createElement(m,c(c({ref:t},p),{},{components:r})):a.createElement(m,c({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var o=2;o<i;o++)c[o]=r[o];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},70133:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var a=r(87462),n=(r(67294),r(3905));const i={title:"Updating the Rancher Certificate"},c=void 0,s={unversionedId:"getting-started/installation-and-upgrade/resources/update-rancher-certificate",id:"version-2.0-2.4/getting-started/installation-and-upgrade/resources/update-rancher-certificate",title:"Updating the Rancher Certificate",description:"Updating a Private CA Certificate",source:"@site/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/resources/update-rancher-certificate.md",sourceDirName:"getting-started/installation-and-upgrade/resources",slug:"/getting-started/installation-and-upgrade/resources/update-rancher-certificate",permalink:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/resources/update-rancher-certificate",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/resources/update-rancher-certificate.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1685049914,formattedLastUpdatedAt:"2023\u5e745\u670825\u65e5",frontMatter:{title:"Updating the Rancher Certificate"},sidebar:"tutorialSidebar",previous:{title:"Upgrading Cert-Manager with Helm 2",permalink:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/resources/upgrade-cert-manager-helm-2"},next:{title:"Setting up Local System Charts for Air Gapped Installations",permalink:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/resources/local-system-charts"}},l={},o=[{value:"Updating a Private CA Certificate",id:"updating-a-private-ca-certificate",level:2},{value:"1. Create/update the certificate secret resource",id:"1-createupdate-the-certificate-secret-resource",level:3},{value:"2. Create/update the CA certificate secret resource",id:"2-createupdate-the-ca-certificate-secret-resource",level:3},{value:"3. Reconfigure the Rancher deployment",id:"3-reconfigure-the-rancher-deployment",level:3},{value:"4. Reconfigure Rancher agents to trust the private CA",id:"4-reconfigure-rancher-agents-to-trust-the-private-ca",level:3},{value:"Why is this step required?",id:"why-is-this-step-required",level:4},{value:"Which method should I choose?",id:"which-method-should-i-choose",level:4},{value:"Method 1: Kubectl command",id:"method-1-kubectl-command",level:4},{value:"Method 2: Manually update checksum",id:"method-2-manually-update-checksum",level:4},{value:"Method 3: Recreate Rancher agents",id:"method-3-recreate-rancher-agents",level:4},{value:"Updating from a Private CA Certificate to a Common Certificate",id:"updating-from-a-private-ca-certificate-to-a-common-certificate",level:2},{value:"1. Create/update the certificate secret resource",id:"1-createupdate-the-certificate-secret-resource-1",level:3},{value:"2. Delete the CA certificate secret resource",id:"2-delete-the-ca-certificate-secret-resource",level:3},{value:"3. Reconfigure the Rancher deployment",id:"3-reconfigure-the-rancher-deployment-1",level:3},{value:"4. Reconfigure Rancher agents for the non-private/common certificate",id:"4-reconfigure-rancher-agents-for-the-non-privatecommon-certificate",level:3}],p={toc:o};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/resources/update-rancher-certificate"})),(0,n.kt)("h2",{id:"updating-a-private-ca-certificate"},"Updating a Private CA Certificate"),(0,n.kt)("p",null,"Follow these steps to update the SSL certificate of the ingress in a Rancher ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster"},"high availability Kubernetes installation")," or to switch from the default self-signed certificate to a custom certificate."),(0,n.kt)("p",null,"A summary of the steps is as follows:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Create or update the ",(0,n.kt)("inlineCode",{parentName:"li"},"tls-rancher-ingress")," Kubernetes secret resource with the new certificate and private key."),(0,n.kt)("li",{parentName:"ol"},"Create or update the ",(0,n.kt)("inlineCode",{parentName:"li"},"tls-ca")," Kubernetes secret resource with the root CA certificate (only required when using a private CA)."),(0,n.kt)("li",{parentName:"ol"},"Update the Rancher installation using the Helm CLI."),(0,n.kt)("li",{parentName:"ol"},"Reconfigure the Rancher agents to trust the new CA certificate.")),(0,n.kt)("p",null,"The details of these instructions are below."),(0,n.kt)("h3",{id:"1-createupdate-the-certificate-secret-resource"},"1. Create/update the certificate secret resource"),(0,n.kt)("p",null,"First, concatenate the server certificate followed by any intermediate certificate(s) to a file named ",(0,n.kt)("inlineCode",{parentName:"p"},"tls.crt")," and provide the corresponding certificate key in a file named ",(0,n.kt)("inlineCode",{parentName:"p"},"tls.key"),"."),(0,n.kt)("p",null,"If you are switching the install from using the Rancher self-signed certificate or Let\u2019s Encrypt issued certificates, use the following command to create the ",(0,n.kt)("inlineCode",{parentName:"p"},"tls-rancher-ingress")," secret resource in your Rancher HA cluster:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ kubectl -n cattle-system create secret tls tls-rancher-ingress \\\n  --cert=tls.crt \\\n  --key=tls.key\n")),(0,n.kt)("p",null,"Alternatively, to update an existing certificate secret:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ kubectl -n cattle-system create secret tls tls-rancher-ingress \\\n  --cert=tls.crt \\\n  --key=tls.key \\\n  --dry-run --save-config -o yaml | kubectl apply -f -\n")),(0,n.kt)("h3",{id:"2-createupdate-the-ca-certificate-secret-resource"},"2. Create/update the CA certificate secret resource"),(0,n.kt)("p",null,"If the new certificate was signed by a private CA, you will need to copy the corresponding root CA certificate into a file named ",(0,n.kt)("inlineCode",{parentName:"p"},"cacerts.pem")," and create or update the ",(0,n.kt)("inlineCode",{parentName:"p"},"tls-ca secret")," in the ",(0,n.kt)("inlineCode",{parentName:"p"},"cattle-system")," namespace. If the certificate was signed by an intermediate CA, then the ",(0,n.kt)("inlineCode",{parentName:"p"},"cacerts.pem")," must contain both the intermediate and root CA certificates (in this order)."),(0,n.kt)("p",null,"To create the initial secret:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ kubectl -n cattle-system create secret generic tls-ca \\\n  --from-file=cacerts.pem\n")),(0,n.kt)("p",null,"To update an existing ",(0,n.kt)("inlineCode",{parentName:"p"},"tls-ca")," secret:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ kubectl -n cattle-system create secret generic tls-ca \\\n  --from-file=cacerts.pem \\\n  --dry-run --save-config -o yaml | kubectl apply -f -\n")),(0,n.kt)("h3",{id:"3-reconfigure-the-rancher-deployment"},"3. Reconfigure the Rancher deployment"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Before proceeding, ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/reference-guides/user-settings/api-keys#creating-an-api-key"},"generate an API token in the Rancher UI")," (",(0,n.kt)("b",null,"User > API & Keys"),").")),(0,n.kt)("p",null,"This step is required if Rancher was initially installed with self-signed certificates (",(0,n.kt)("inlineCode",{parentName:"p"},"ingress.tls.source=rancher"),") or with a Let's Encrypt issued certificate (",(0,n.kt)("inlineCode",{parentName:"p"},"ingress.tls.source=letsEncrypt"),")."),(0,n.kt)("p",null,"It ensures that the Rancher pods and ingress resources are reconfigured to use the new server and optional CA certificate."),(0,n.kt)("p",null,"To update the Helm deployment you will need to use the same (",(0,n.kt)("inlineCode",{parentName:"p"},"--set"),") options that were used during initial installation. Check with:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ helm get values rancher -n cattle-system\n")),(0,n.kt)("p",null,"Also get the version string of the currently deployed Rancher chart:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ helm ls -A\n")),(0,n.kt)("p",null,"Upgrade the Helm application instance using the original configuration values and making sure to specify ",(0,n.kt)("inlineCode",{parentName:"p"},"ingress.tls.source=secret")," as well as the current chart version to prevent an application upgrade."),(0,n.kt)("p",null,"If the certificate was signed by a private CA, add the ",(0,n.kt)("inlineCode",{parentName:"p"},"set privateCA=true")," argument as well. Also make sure to read the documentation describing the initial installation using custom certificates."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"helm upgrade rancher rancher-stable/rancher \\\n  --namespace cattle-system \\\n  --version <DEPLOYED_CHART_VERSION> \\\n  --set hostname=rancher.my.org \\\n  --set ingress.tls.source=secret \\\n  --set ...\n")),(0,n.kt)("p",null,"When the upgrade is completed, navigate to ",(0,n.kt)("inlineCode",{parentName:"p"},"https://<Rancher_SERVER>/v3/settings/cacerts")," to verify that the value matches the CA certificate written in the ",(0,n.kt)("inlineCode",{parentName:"p"},"tls-ca")," secret earlier."),(0,n.kt)("h3",{id:"4-reconfigure-rancher-agents-to-trust-the-private-ca"},"4. Reconfigure Rancher agents to trust the private CA"),(0,n.kt)("p",null,"This section covers three methods to reconfigure Rancher agents to trust the private CA. This step is required if either of the following is true:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Rancher was initially configured to use the Rancher self-signed certificate (",(0,n.kt)("inlineCode",{parentName:"li"},"ingress.tls.source=rancher"),") or with a Let's Encrypt issued certificate (",(0,n.kt)("inlineCode",{parentName:"li"},"ingress.tls.source=letsEncrypt"),")"),(0,n.kt)("li",{parentName:"ul"},"The root CA certificate for the new custom certificate has changed")),(0,n.kt)("h4",{id:"why-is-this-step-required"},"Why is this step required?"),(0,n.kt)("p",null,"When Rancher is configured with a certificate signed by a private CA, the CA certificate chain is downloaded into Rancher agent containers. Agents compare the checksum of the downloaded certificate against the ",(0,n.kt)("inlineCode",{parentName:"p"},"CATTLE_CA_CHECKSUM")," environment variable. This means that, when the private CA certificate is changed on Rancher server side, the environvment variable ",(0,n.kt)("inlineCode",{parentName:"p"},"CATTLE_CA_CHECKSUM")," must be updated accordingly."),(0,n.kt)("h4",{id:"which-method-should-i-choose"},"Which method should I choose?"),(0,n.kt)("p",null,"Method 1 is the easiest one but requires all clusters to be connected to Rancher after the certificates have been rotated. This is usually the case if the process is performed right after updating the Rancher deployment (Step 3)."),(0,n.kt)("p",null,"If the clusters have lost connection to Rancher but you have ",(0,n.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.0-v2.4/en/cluster-admin/cluster-access/ace/"},"Authorized Cluster Endpoints")," enabled, then go with method 2."),(0,n.kt)("p",null,"Method 3 can be used as a fallback if method 1 and 2 are unfeasible."),(0,n.kt)("h4",{id:"method-1-kubectl-command"},"Method 1: Kubectl command"),(0,n.kt)("p",null,"For each cluster under Rancher management (including ",(0,n.kt)("inlineCode",{parentName:"p"},"local"),") run the following command using the Kubeconfig file of the Rancher management cluster (RKE or K3S)."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'kubectl patch clusters <REPLACE_WITH_CLUSTERID> -p \'{"status":{"agentImage":"dummy"}}\' --type merge\n')),(0,n.kt)("p",null,"This command will cause all Agent Kubernetes resources to be reconfigured with the checksum of the new certificate."),(0,n.kt)("h4",{id:"method-2-manually-update-checksum"},"Method 2: Manually update checksum"),(0,n.kt)("p",null,"Manually patch the agent Kubernetes resources by updating the ",(0,n.kt)("inlineCode",{parentName:"p"},"CATTLE_CA_CHECKSUM")," environment variable to the value matching the checksum of the new CA certificate. Generate the new checksum value like so:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ curl -k -s -fL <RANCHER_SERVER>/v3/settings/cacerts | jq -r .value > cacert.tmp\n$ sha256sum cacert.tmp | awk '{print $1}'\n")),(0,n.kt)("p",null,"Using a Kubeconfig for each downstream cluster update the environment variable for the two agent deployments."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ kubectl edit -n cattle-system ds/cattle-node-agent\n$ kubectl edit -n cattle-system deployment/cluster-agent\n")),(0,n.kt)("h4",{id:"method-3-recreate-rancher-agents"},"Method 3: Recreate Rancher agents"),(0,n.kt)("p",null,"With this method you are recreating the Rancher agents by running a set of commands on a controlplane node of each downstream cluster."),(0,n.kt)("p",null,"First, generate the agent definitions as described here: ",(0,n.kt)("a",{parentName:"p",href:"https://gist.github.com/superseb/076f20146e012f1d4e289f5bd1bd4971"},"https://gist.github.com/superseb/076f20146e012f1d4e289f5bd1bd4971")),(0,n.kt)("p",null,"Then, connect to a controlplane node of the downstream cluster via SSH, create a Kubeconfig and apply the definitions:\n",(0,n.kt)("a",{parentName:"p",href:"https://gist.github.com/superseb/b14ed3b5535f621ad3d2aa6a4cd6443b"},"https://gist.github.com/superseb/b14ed3b5535f621ad3d2aa6a4cd6443b")),(0,n.kt)("h2",{id:"updating-from-a-private-ca-certificate-to-a-common-certificate"},"Updating from a Private CA Certificate to a Common Certificate"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"It is possible to perform the opposite procedure as shown above: you may change from a private certificate to a common, or non-private, certificate. The steps involved are outlined below.")),(0,n.kt)("h3",{id:"1-createupdate-the-certificate-secret-resource-1"},"1. Create/update the certificate secret resource"),(0,n.kt)("p",null,"First, concatenate the server certificate followed by any intermediate certificate(s) to a file named ",(0,n.kt)("inlineCode",{parentName:"p"},"tls.crt")," and provide the corresponding certificate key in a file named ",(0,n.kt)("inlineCode",{parentName:"p"},"tls.key"),"."),(0,n.kt)("p",null,"If you are switching the install from using the Rancher self-signed certificate or Let\u2019s Encrypt issued certificates, use the following command to create the ",(0,n.kt)("inlineCode",{parentName:"p"},"tls-rancher-ingress")," secret resource in your Rancher HA cluster:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ kubectl -n cattle-system create secret tls tls-rancher-ingress \\\n  --cert=tls.crt \\\n  --key=tls.key\n")),(0,n.kt)("p",null,"Alternatively, to update an existing certificate secret:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ kubectl -n cattle-system create secret tls tls-rancher-ingress \\\n  --cert=tls.crt \\\n  --key=tls.key \\\n  --dry-run --save-config -o yaml | kubectl apply -f -\n")),(0,n.kt)("h3",{id:"2-delete-the-ca-certificate-secret-resource"},"2. Delete the CA certificate secret resource"),(0,n.kt)("p",null,"You will delete the ",(0,n.kt)("inlineCode",{parentName:"p"},"tls-ca secret")," in the ",(0,n.kt)("inlineCode",{parentName:"p"},"cattle-system")," namespace as it is no longer needed. You may also optionally save a copy of the ",(0,n.kt)("inlineCode",{parentName:"p"},"tls-ca secret")," if desired."),(0,n.kt)("p",null,"To save the existing secret:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"kubectl -n cattle-system get secret tls-ca -o yaml > tls-ca.yaml\n")),(0,n.kt)("p",null,"To delete the existing ",(0,n.kt)("inlineCode",{parentName:"p"},"tls-ca")," secret:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"kubectl -n cattle-system delete secret tls-ca\n")),(0,n.kt)("h3",{id:"3-reconfigure-the-rancher-deployment-1"},"3. Reconfigure the Rancher deployment"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Before proceeding, ",(0,n.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/user-settings/api-keys/#creating-an-api-key"},"generate an API token in the Rancher UI")," (",(0,n.kt)("b",null,"User > API & Keys"),") and save the Bearer Token which you might need in step 4.")),(0,n.kt)("p",null,"This step is required if Rancher was initially installed with self-signed certificates (",(0,n.kt)("inlineCode",{parentName:"p"},"ingress.tls.source=rancher"),") or with a Let's Encrypt issued certificate (",(0,n.kt)("inlineCode",{parentName:"p"},"ingress.tls.source=letsEncrypt"),")."),(0,n.kt)("p",null,"It ensures that the Rancher pods and ingress resources are reconfigured to use the new server and optional CA certificate."),(0,n.kt)("p",null,"To update the Helm deployment you will need to use the same (",(0,n.kt)("inlineCode",{parentName:"p"},"--set"),") options that were used during initial installation. Check with:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ helm get values rancher -n cattle-system\n")),(0,n.kt)("p",null,"Also get the version string of the currently deployed Rancher chart:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ helm ls -A\n")),(0,n.kt)("p",null,"Upgrade the Helm application instance using the original configuration values and making sure to specify the current chart version to prevent an application upgrade."),(0,n.kt)("p",null,"Also make sure to read the documentation describing the initial installation using custom certificates."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"helm upgrade rancher rancher-stable/rancher \\\n  --namespace cattle-system \\\n  --version <DEPLOYED_CHART_VERSION> \\\n  --set hostname=rancher.my.org \\\n  --set ...\n")),(0,n.kt)("p",null,"On upgrade, you can either"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"remove ",(0,n.kt)("inlineCode",{parentName:"p"},"--set ingress.tls.source=secret \\")," from the Helm upgrade command, as shown above, or")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"remove the ",(0,n.kt)("inlineCode",{parentName:"p"},"privateCA")," parameter or set it to ",(0,n.kt)("inlineCode",{parentName:"p"},"false")," because the CA is valid:"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"set privateCA=false\n")),(0,n.kt)("h3",{id:"4-reconfigure-rancher-agents-for-the-non-privatecommon-certificate"},"4. Reconfigure Rancher agents for the non-private/common certificate"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"CATTLE_CA_CHECKSUM"),' environment variable on the downstream cluster agents should be removed or set to "" (an empty string).'))}u.isMDXComponent=!0}}]);