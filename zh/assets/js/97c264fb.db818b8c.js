"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[99235],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6473:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"RKE2 Hardening Guide"},o=void 0,s={unversionedId:"pages-for-subheaders/rke2-hardening-guide",id:"version-2.6/pages-for-subheaders/rke2-hardening-guide",title:"RKE2 Hardening Guide",description:"This document provides prescriptive guidance for how to harden an RKE2 cluster intended for production, before provisioning it with Rancher. It outlines the configurations and controls required for Center for Information Security (CIS) Kubernetes benchmark controls.",source:"@site/versioned_docs/version-2.6/pages-for-subheaders/rke2-hardening-guide.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/rke2-hardening-guide",permalink:"/zh/v2.6/pages-for-subheaders/rke2-hardening-guide",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/pages-for-subheaders/rke2-hardening-guide.md",tags:[],version:"2.6",frontMatter:{title:"RKE2 Hardening Guide"}},l={},c=[{value:"Host-level requirements",id:"host-level-requirements",level:2},{value:"Set kernel parameters",id:"set-kernel-parameters",level:3},{value:"Ensure etcd is configured properly",id:"ensure-etcd-is-configured-properly",level:3},{value:"Create the etcd user",id:"create-the-etcd-user",level:4},{value:"Kubernetes runtime requirements",id:"kubernetes-runtime-requirements",level:2},{value:"Ensure <code>protect-kernel-defaults</code> is set",id:"ensure-protect-kernel-defaults-is-set",level:3},{value:"PodSecurity",id:"podsecurity",level:3},{value:"NetworkPolicies",id:"networkpolicies",level:3},{value:"Configure <code>default</code> service account",id:"configure-default-service-account",level:3},{value:"API Server audit configuration",id:"api-server-audit-configuration",level:3},{value:"Reference Hardened RKE2 Template Configuration",id:"reference-hardened-rke2-template-configuration",level:2},{value:"Conclusion",id:"conclusion",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},d=u("Tabs"),p=u("TabItem"),m={toc:c};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This document provides prescriptive guidance for how to harden an RKE2 cluster intended for production, before provisioning it with Rancher. It outlines the configurations and controls required for Center for Information Security (CIS) Kubernetes benchmark controls."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This hardening guide describes how to secure the nodes in your cluster. We recommended that you follow this guide before you install Kubernetes.")),(0,a.kt)("p",null,"This hardening guide is intended to be used for RKE2 clusters and is associated with the following versions of the CIS Kubernetes Benchmark, Kubernetes, and Rancher:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Rancher Version"),(0,a.kt)("th",{parentName:"tr",align:null},"CIS Benchmark Version"),(0,a.kt)("th",{parentName:"tr",align:null},"Kubernetes Version"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rancher v2.7"),(0,a.kt)("td",{parentName:"tr",align:null},"Benchmark v1.23"),(0,a.kt)("td",{parentName:"tr",align:null},"Kubernetes v1.23 up to v1.25")))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"At the time of writing, the upstream CIS Kubernetes v1.25 benchmark is not yet available in Rancher. At this time Rancher is using the CIS v1.23 benchmark when scanning Kubernetes v1.25 clusters. Due to that, the CIS checks 5.2.2, 5.2.3, 5.2.5, 5.2.6, 5.2.7 and 5.2.8 might fail.")),(0,a.kt)("p",null,"For more details on how to evaluate a hardened RKE2 cluster against the official CIS benchmark, refer to the RKE2 self-assessment guides for specific Kubernetes and CIS benchmark versions."),(0,a.kt)("p",null,"RKE2 passes a number of the Kubernetes CIS controls without modification, as it applies several security mitigations by default. There are some notable exceptions to this that require manual intervention to fully comply with the CIS Benchmark:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"RKE2 will not modify the host operating system. Therefore, you, the operator, must make a few host-level modifications."),(0,a.kt)("li",{parentName:"ol"},"Certain CIS controls for Network Policies and Pod Security Standards (or Pod Security Policies (PSP) on RKE2 versions prior to v1.25) will restrict the functionality of the cluster. You must opt into having RKE2 configure these for you. To help ensure these requirements are met, RKE2 can be started with the profile flag set to ",(0,a.kt)("inlineCode",{parentName:"li"},"cis-1.23")," for v1.25 and newer or ",(0,a.kt)("inlineCode",{parentName:"li"},"cis-1.6")," for v1.24 and older.")),(0,a.kt)("h2",{id:"host-level-requirements"},"Host-level requirements"),(0,a.kt)("p",null,"There are two areas of host-level requirements: kernel parameters and etcd process/directory configuration. These are outlined in this section."),(0,a.kt)("h3",{id:"set-kernel-parameters"},"Set kernel parameters"),(0,a.kt)("p",null,"The following ",(0,a.kt)("inlineCode",{parentName:"p"},"sysctl")," configuration is recommended for all nodes type in the cluster. Set the following parameters in ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/sysctl.d/90-kubelet.conf"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"vm.panic_on_oom=0\nvm.overcommit_memory=1\nkernel.panic=10\nkernel.panic_on_oops=1\n")),(0,a.kt)("p",null,"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo sysctl -p /etc/sysctl.d/90-kubelet.conf")," to enable the settings."),(0,a.kt)("h3",{id:"ensure-etcd-is-configured-properly"},"Ensure etcd is configured properly"),(0,a.kt)("p",null,"The CIS Benchmark requires that the etcd data directory be owned by the ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd")," user and group. This implicitly requires the etcd process run as the host-level ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd")," user. To achieve this, RKE2 takes several steps when started with a valid ",(0,a.kt)("inlineCode",{parentName:"p"},"cis-1.xx")," profile:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Check that the ",(0,a.kt)("inlineCode",{parentName:"li"},"etcd")," user and group exists on the host. If they don't, exit with an error."),(0,a.kt)("li",{parentName:"ol"},"Create etcd's data directory with ",(0,a.kt)("inlineCode",{parentName:"li"},"etcd")," as the user and group owner."),(0,a.kt)("li",{parentName:"ol"},"Ensure the etcd process is ran as the ",(0,a.kt)("inlineCode",{parentName:"li"},"etcd")," user and group by setting the etcd static pod's ",(0,a.kt)("inlineCode",{parentName:"li"},"SecurityContext")," appropriately.")),(0,a.kt)("p",null,"To meet the above requirements, you must:"),(0,a.kt)("h4",{id:"create-the-etcd-user"},"Create the etcd user"),(0,a.kt)("p",null,"On some Linux distributions, the ",(0,a.kt)("inlineCode",{parentName:"p"},"useradd")," command will not create a group. The ",(0,a.kt)("inlineCode",{parentName:"p"},"-U")," flag is included below to account for that. This flag tells ",(0,a.kt)("inlineCode",{parentName:"p"},"useradd")," to create a group with the same name as the user."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'sudo useradd -r -c "etcd user" -s /sbin/nologin -M etcd -U\n')),(0,a.kt)("h2",{id:"kubernetes-runtime-requirements"},"Kubernetes runtime requirements"),(0,a.kt)("p",null,"The runtime requirements to pass the CIS Benchmark are centered around pod security, network policies and kernel parameters. Most of this is automatically handled by RKE2 when using a valid ",(0,a.kt)("inlineCode",{parentName:"p"},"cis-1.xx")," profile, but some additional operator intervention is required. These are outlined in this section."),(0,a.kt)("h3",{id:"ensure-protect-kernel-defaults-is-set"},"Ensure ",(0,a.kt)("inlineCode",{parentName:"h3"},"protect-kernel-defaults")," is set"),(0,a.kt)("p",null,"This is a kubelet flag that will cause the kubelet to exit if the required kernel parameters are unset or are set to values that are different from the kubelet's defaults."),(0,a.kt)("p",null,"Both ",(0,a.kt)("inlineCode",{parentName:"p"},"protect-kernel-defaults")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"profile")," flags can be set in the RKE2 template configuration file.\nWhen the ",(0,a.kt)("inlineCode",{parentName:"p"},"profile")," flag is set, RKE2 will set the flag to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," if it is unset."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  rkeConfig:\n    machineSelectorConfig:\n      - config:\n          profile: # use cis-1.23 or cis-1.6\n          protect-kernel-defaults: true\n")),(0,a.kt)("h3",{id:"podsecurity"},"PodSecurity"),(0,a.kt)("p",null,"RKE2 always runs with some amount of pod security."),(0,a.kt)(d,{groupId:"rke2-version",mdxType:"Tabs"},(0,a.kt)(p,{value:"v1.25 and Newer",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"On v1.25 and newer, ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/security/pod-security-admission/"},"Pod Security Admissions (PSAs)")," are used for pod security."),(0,a.kt)("p",null,"Below is the minimum necessary configuration needed for hardening RKE2 to pass CIS v1.23 hardened profile ",(0,a.kt)("inlineCode",{parentName:"p"},"rke2-cis-1.23-hardened")," available in Rancher."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  defaultPodSecurityAdmissionConfigurationTemplateName: rancher-restricted\n  rkeConfig:\n    machineSelectorConfig:\n      - config:\n          profile: cis-1.23\n")),(0,a.kt)("p",null,"When both the ",(0,a.kt)("inlineCode",{parentName:"p"},"defaultPodSecurityAdmissionConfigurationTemplateName")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"profile")," flags are set, Rancher and RKE2 does the following:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Checks that host-level requirements have been met. If they haven't, RKE2 will exit with a fatal error describing the unmet requirements."),(0,a.kt)("li",{parentName:"ol"},"Applies network policies that allow the cluster to pass associated controls."),(0,a.kt)("li",{parentName:"ol"},"Configures the Pod Security Admission Controller with the PSA configuration template ",(0,a.kt)("inlineCode",{parentName:"li"},"rancher-restricted"),", to enforce restricted mode in all namespaces, except the ones in the template's exemption list.\nThese namespaces are exempted to allow system pods to run without restrictions, which is required for proper operation of the cluster.")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If you intend to import an RKE cluster into Rancher, please consult the ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/psa-config-templates"},"documentation")," for how to configure the PSA to exempt Rancher system namespaces."))),(0,a.kt)(p,{value:"v1.24 and Older",mdxType:"TabItem"},(0,a.kt)("p",null,"On Kubernetes v1.24 and older, the ",(0,a.kt)("inlineCode",{parentName:"p"},"PodSecurityPolicy")," admission controller is always enabled."),(0,a.kt)("p",null,"Below is the minimum necessary configuration needed for hardening RKE2 to pass CIS v1.23 hardened profile ",(0,a.kt)("inlineCode",{parentName:"p"},"rke2-cis-1.23-hardened")," available in Rancher."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"In the following example the profile is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"cis-1.6")," which is the value defined in the upstream RKE2, but the cluster is actually configured to pass the CIS v1.23 hardened profile")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  defaultPodSecurityPolicyTemplateName: restricted-noroot\n  rkeConfig:\n    machineSelectorConfig:\n      - config:\n          profile: cis-1.6\n")),(0,a.kt)("p",null,"When both the ",(0,a.kt)("inlineCode",{parentName:"p"},"defaultPodSecurityPolicyTemplateName")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"profile")," flags are set, Rancher and RKE2 does the following:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Checks that host-level requirements have been met. If they haven't, RKE2 will exit with a fatal error describing the unmet requirements."),(0,a.kt)("li",{parentName:"ol"},"Applies network policies that allow the cluster to pass associated controls."),(0,a.kt)("li",{parentName:"ol"},"Configures runtime pod security policies that allow the cluster to pass associated controls.")))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The Kubernetes control plane components and critical additions such as CNI, DNS, and Ingress are ran as pods in the ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-system")," namespace. Therefore, this namespace will have a policy that is less restrictive so that these components can run properly.")),(0,a.kt)("h3",{id:"networkpolicies"},"NetworkPolicies"),(0,a.kt)("p",null,"When ran with a valid ",(0,a.kt)("inlineCode",{parentName:"p"},"cis-1.xx")," profile, RKE2 will put ",(0,a.kt)("inlineCode",{parentName:"p"},"NetworkPolicies")," in place that passes the CIS Benchmark for Kubernetes' built-in namespaces. These namespaces are: ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-system"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-public"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-node-lease"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"default"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"NetworkPolicy")," used will only allow pods within the same namespace to talk to each other. The notable exception to this is that it allows DNS requests to be resolved."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Operators must manage network policies as normal for additional namespaces that are created.")),(0,a.kt)("h3",{id:"configure-default-service-account"},"Configure ",(0,a.kt)("inlineCode",{parentName:"h3"},"default")," service account"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Set ",(0,a.kt)("inlineCode",{parentName:"strong"},"automountServiceAccountToken")," to ",(0,a.kt)("inlineCode",{parentName:"strong"},"false")," for ",(0,a.kt)("inlineCode",{parentName:"strong"},"default")," service accounts")),(0,a.kt)("p",null,"Kubernetes provides a ",(0,a.kt)("inlineCode",{parentName:"p"},"default")," service account which is used by cluster workloads where no specific service account is assigned to the pod. Where access to the Kubernetes API from a pod is required, a specific service account should be created for that pod, and rights granted to that service account. The ",(0,a.kt)("inlineCode",{parentName:"p"},"default")," service account should be configured such that it does not provide a service account token and does not have any explicit rights assignments."),(0,a.kt)("p",null,"For each namespace including ",(0,a.kt)("inlineCode",{parentName:"p"},"default")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-system")," on a standard RKE2 install, the ",(0,a.kt)("inlineCode",{parentName:"p"},"default")," service account must include this value:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"automountServiceAccountToken: false\n")),(0,a.kt)("p",null,"For namespaces created by the cluster operator, the following script and configuration file can be used to configure the ",(0,a.kt)("inlineCode",{parentName:"p"},"default")," service account."),(0,a.kt)("p",null,"The configuration bellow must be saved to a file called ",(0,a.kt)("inlineCode",{parentName:"p"},"account_update.yaml"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: default\nautomountServiceAccountToken: false\n")),(0,a.kt)("p",null,"Create a bash script file called ",(0,a.kt)("inlineCode",{parentName:"p"},"account_update.sh"),". Be sure to ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo chmod +x account_update.sh")," so the script has execute permissions."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash -e\n\nfor namespace in $(kubectl get namespaces -A -o=jsonpath="{.items[*][\'metadata.name\']}"); do\n  echo -n "Patching namespace $namespace - "\n  kubectl patch serviceaccount default -n ${namespace} -p "$(cat account_update.yaml)"\ndone\n')),(0,a.kt)("p",null,"Execute this script to apply the ",(0,a.kt)("inlineCode",{parentName:"p"},"account_update.yaml")," configuration to ",(0,a.kt)("inlineCode",{parentName:"p"},"default")," service account in all namespaces."),(0,a.kt)("h3",{id:"api-server-audit-configuration"},"API Server audit configuration"),(0,a.kt)("p",null,"CIS requirements 1.2.19 to 1.2.22 are related to configuring audit logs for the API Server. When RKE2 is started with the ",(0,a.kt)("inlineCode",{parentName:"p"},"profile")," flag set, it will automatically configure hardened ",(0,a.kt)("inlineCode",{parentName:"p"},"--audit-log-")," parameters in the API Server to pass those CIS checks."),(0,a.kt)("p",null,"RKE2's default audit policy is configured to not log requests in the API Server. This is done to allow cluster operators flexibility to customize an audit policy that suits their auditing requirements and needs, as these are specific to each users' environment and policies."),(0,a.kt)("p",null,"A default audit policy is created by RKE2 when started with the ",(0,a.kt)("inlineCode",{parentName:"p"},"profile")," flag set. The policy is defined in ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/rancher/rke2/audit-policy.yaml"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: audit.k8s.io/v1\nkind: Policy\nmetadata:\n  creationTimestamp: null\nrules:\n- level: None\n")),(0,a.kt)("h2",{id:"reference-hardened-rke2-template-configuration"},"Reference Hardened RKE2 Template Configuration"),(0,a.kt)("p",null,"The reference template configuration is used in Rancher to create a hardened RKE2 custom cluster. This reference does not include other required ",(0,a.kt)("strong",{parentName:"p"},"cluster configuration")," directives which will vary depending on your environment."),(0,a.kt)(d,{groupId:"rke2-version",mdxType:"Tabs"},(0,a.kt)(p,{value:"v1.25 and Newer",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: provisioning.cattle.io/v1\nkind: Cluster\nmetadata:\n  name: # Define cluster name\nspec:\n  defaultPodSecurityAdmissionConfigurationTemplateName: rancher-restricted\n  kubernetesVersion: # Define RKE2 version\n  rkeConfig:\n    machineSelectorConfig:\n      - config:\n          profile: cis-1.23\n          protect-kernel-defaults: true\n"))),(0,a.kt)(p,{value:"v1.24 and Older",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: provisioning.cattle.io/v1\nkind: Cluster\nmetadata:\n  name: # Define cluster name\nspec:\n  defaultPodSecurityPolicyTemplateName: restricted-noroot\n  kubernetesVersion: # Define RKE2 version\n  rkeConfig:\n    machineSelectorConfig:\n      - config:\n          profile: cis-1.6\n          protect-kernel-defaults: true\n")))),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"If you have followed this guide, your RKE2 custom cluster provisioned by Rancher will be configured to pass the CIS Kubernetes Benchmark. You can review our RKE2 self-assessment guides to understand how we verified each of the benchmarks and how you can do the same on your cluster."))}h.isMDXComponent=!0}}]);