"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[31584],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return t?a.createElement(h,o(o({ref:n},u),{},{components:t})):a.createElement(h,o({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},12844:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=t(87462),r=(t(67294),t(3905));const i={title:"K3s Hardening Guide with CIS Benchmark"},o=void 0,s={unversionedId:"reference-guides/rancher-security/rancher-v2.7-hardening-guides/k3s-hardening-guide-with-cis-benchmark",id:"reference-guides/rancher-security/rancher-v2.7-hardening-guides/k3s-hardening-guide-with-cis-benchmark",title:"K3s Hardening Guide with CIS Benchmark",description:"This document provides prescriptive guidance for hardening a production installation of a K3s cluster to be provisioned with Rancher v2.7. It outlines the configurations and controls required to address Kubernetes benchmark controls from the Center for Information Security (CIS).",source:"@site/docs/reference-guides/rancher-security/rancher-v2.7-hardening-guides/k3s-hardening-guide-with-cis-benchmark.md",sourceDirName:"reference-guides/rancher-security/rancher-v2.7-hardening-guides",slug:"/reference-guides/rancher-security/rancher-v2.7-hardening-guides/k3s-hardening-guide-with-cis-benchmark",permalink:"/zh/reference-guides/rancher-security/rancher-v2.7-hardening-guides/k3s-hardening-guide-with-cis-benchmark",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/rancher-security/rancher-v2.7-hardening-guides/k3s-hardening-guide-with-cis-benchmark.md",tags:[],version:"current",lastUpdatedAt:1664960242,formattedLastUpdatedAt:"2022\u5e7410\u67085\u65e5",frontMatter:{title:"K3s Hardening Guide with CIS Benchmark"},sidebar:"tutorialSidebar",previous:{title:"Rancher v2.7 \u7684\u81ea\u6211\u8bc4\u4f30\u548c\u5f3a\u5316\u6307\u5357",permalink:"/zh/pages-for-subheaders/rancher-v2.7-hardening-guides"},next:{title:"K3s CIS v1.20 Benchmark - Self-Assessment Guide - Rancher v2.7",permalink:"/zh/reference-guides/rancher-security/rancher-v2.7-hardening-guides/k3s-self-assessment-guide-with-cis-v1.20-benchmark"}},l={},c=[{value:"Overview",id:"overview",level:3},{value:"Host-level Requirements",id:"host-level-requirements",level:2},{value:"Ensure <code>protect-kernel-defaults</code> is set (control 4.2.6)",id:"ensure-protect-kernel-defaults-is-set-control-426",level:3},{value:"Set kernel parameters",id:"set-kernel-parameters",level:4},{value:"Kubernetes Runtime Requirements",id:"kubernetes-runtime-requirements",level:2},{value:"Pod Security Policies (control 5.2)",id:"pod-security-policies-control-52",level:3},{value:"Network Policies (control 5.3.2)",id:"network-policies-control-532",level:3},{value:"API Server audit configuration",id:"api-server-audit-configuration",level:3},{value:"Known Issues",id:"known-issues",level:2},{value:"Control CIS v1.20 - 1.2.13 / CIS v1.23 - 1.2.14",id:"control-cis-v120---1213--cis-v123---1214",level:3},{value:"Control CIS v1.20 1.2.26 and CIS v1.23 1.2.23",id:"control-cis-v120-1226-and-cis-v123-1223",level:3},{value:"Control CIS v1.23 1.2.24",id:"control-cis-v123-1224",level:3},{value:"CIS v1.20 1.2.32 and CIS v1.23 1.2.30",id:"cis-v120-1232-and-cis-v123-1230",level:3},{value:"Control CIS v1.20 1.2.33 and CIS v1.23 1.2.31",id:"control-cis-v120-1233-and-cis-v123-1231",level:3},{value:"Control 4.2.7",id:"control-427",level:3},{value:"Control 5.1.5",id:"control-515",level:3},{value:"Reference Hardened K3s Template Configuration",id:"reference-hardened-k3s-template-configuration",level:3},{value:"Conclusion",id:"conclusion",level:3}],u={toc:c};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document provides prescriptive guidance for hardening a production installation of a K3s cluster to be provisioned with Rancher v2.7. It outlines the configurations and controls required to address Kubernetes benchmark controls from the Center for Information Security (CIS)."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This hardening guide describes how to secure the nodes in your cluster, and it is recommended to follow this guide before installing Kubernetes.")),(0,r.kt)("p",null,"This hardening guide is intended to be used for K3s clusters and associated with specific versions of the CIS Kubernetes Benchmark, Kubernetes, and Rancher:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Rancher Version"),(0,r.kt)("th",{parentName:"tr",align:null},"CIS Benchmark Version"),(0,r.kt)("th",{parentName:"tr",align:null},"Kubernetes Version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rancher v2.7"),(0,r.kt)("td",{parentName:"tr",align:null},"Benchmark v1.20"),(0,r.kt)("td",{parentName:"tr",align:null},"Kubernetes v1.21")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rancher v2.7"),(0,r.kt)("td",{parentName:"tr",align:null},"Benchmark v1.23"),(0,r.kt)("td",{parentName:"tr",align:null},"Kubernetes v1.22 up to v1.24")))),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,"For more details about evaluating a hardened K3s cluster against the official CIS benchmark, refer to K3s - CIS Benchmark - Self-Assessment Guide - Rancher v2.7 for ",(0,r.kt)("a",{parentName:"p",href:"/zh/reference-guides/rancher-security/rancher-v2.7-hardening-guides/k3s-self-assessment-guide-with-cis-v1.20-benchmark"},"CIS v1.20")," and ",(0,r.kt)("a",{parentName:"p",href:"/zh/reference-guides/rancher-security/rancher-v2.7-hardening-guides/k3s-self-assessment-guide-with-cis-v1.23-benchmark"},"CIS v1.23"),"."),(0,r.kt)("p",null,"K3s has a number of security mitigations applied and turned on by default and will pass a number of the Kubernetes CIS controls without modification. There are some notable exceptions to this that require manual intervention to fully comply with the CIS Benchmark:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"K3s will not modify the host operating system. Any host-level modifications will need to be done manually."),(0,r.kt)("li",{parentName:"ol"},"Certain CIS policy controls for ",(0,r.kt)("inlineCode",{parentName:"li"},"PodSecurityPolicies")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"NetworkPolicies")," will restrict the functionality of the cluster. You must opt into having K3s configure these by adding the appropriate options (enabling of admission plugins) to your command-line flags or configuration file as well as manually applying appropriate policies. Further details are presented in the sections below.")),(0,r.kt)("p",null,"The first section (1.1) of the CIS Benchmark concerns itself primarily with pod manifest permissions and ownership. K3s doesn't utilize these for the core components since everything is packaged into a single binary."),(0,r.kt)("h2",{id:"host-level-requirements"},"Host-level Requirements"),(0,r.kt)("h3",{id:"ensure-protect-kernel-defaults-is-set-control-426"},"Ensure ",(0,r.kt)("inlineCode",{parentName:"h3"},"protect-kernel-defaults")," is set (control 4.2.6)"),(0,r.kt)("p",null,"This is a kubelet flag that will cause the kubelet to exit if the required kernel parameters are unset or are set to values that are different from the kubelet's defaults."),(0,r.kt)("p",null,"This can be remediated by adding the following argument line to K3s cluster configuration file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  rkeConfig:\n    machineSelectorConfig:\n    - config:\n        protect-kernel-defaults: true          # Control 4.2.6\n")),(0,r.kt)("h4",{id:"set-kernel-parameters"},"Set kernel parameters"),(0,r.kt)("p",null,"Create a file called ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/sysctl.d/90-kubelet.conf")," and add the snippet below. Then run ",(0,r.kt)("inlineCode",{parentName:"p"},"sysctl -p /etc/sysctl.d/90-kubelet.conf"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vm.panic_on_oom=0\nvm.overcommit_memory=1\nkernel.panic=10\nkernel.panic_on_oops=1\n")),(0,r.kt)("p",null,"This configuration needs to be done before setting the kubelet flag, otherwise K3s will fail to start."),(0,r.kt)("h2",{id:"kubernetes-runtime-requirements"},"Kubernetes Runtime Requirements"),(0,r.kt)("p",null,"The runtime requirements to comply with the CIS Benchmark are centered around pod security policies (PSPs) and its admission control plugin, network policies and API Server auditing logs. These are outlined in this section. K3s doesn't apply any default PSPs or network policies. However, K3s ships with a controller that is meant to apply a given set of network policies. By default, K3s runs with the ",(0,r.kt)("inlineCode",{parentName:"p"},"NodeRestriction")," admission controller. To enable PSPs, add the following line to K3s cluster configuration file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  rkeConfig:\n    machineGlobalConfig:\n      kube-apiserver-arg:\n      - enable-admission-plugins=NodeRestriction,PodSecurityPolicy    # CIS 1.2.16 and CIS 5.2\n")),(0,r.kt)("p",null,"This will have the effect of maintaining the ",(0,r.kt)("inlineCode",{parentName:"p"},"NodeRestriction")," plugin as well as enabling the ",(0,r.kt)("inlineCode",{parentName:"p"},"PodSecurityPolicy"),"."),(0,r.kt)("h3",{id:"pod-security-policies-control-52"},"Pod Security Policies (control 5.2)"),(0,r.kt)("p",null,"When PSPs are enabled, a policy can be applied to satisfy the necessary controls described in section 5.2 of the CIS Benchmark."),(0,r.kt)("p",null,"Here is an example of a compliant PSP."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: policy/v1beta1\nkind: PodSecurityPolicy\nmetadata:\n  name: restricted-psp\nspec:\n  privileged: false                # CIS - 5.2.1\n  allowPrivilegeEscalation: false  # CIS - 5.2.5\n  requiredDropCapabilities:        # CIS - 5.2.7/8/9\n    - ALL\n  volumes:\n    - 'configMap'\n    - 'emptyDir'\n    - 'projected'\n    - 'secret'\n    - 'downwardAPI'\n    - 'csi'\n    - 'persistentVolumeClaim'\n    - 'ephemeral'\n  hostNetwork: false               # CIS - 5.2.4\n  hostIPC: false                   # CIS - 5.2.3\n  hostPID: false                   # CIS - 5.2.2\n  runAsUser:\n    rule: 'MustRunAsNonRoot'       # CIS - 5.2.6\n  seLinux:\n    rule: 'RunAsAny'\n  supplementalGroups:\n    rule: 'MustRunAs'\n    ranges:\n      - min: 1\n        max: 65535\n  fsGroup:\n    rule: 'MustRunAs'\n    ranges:\n      - min: 1\n        max: 65535\n  readOnlyRootFilesystem: false\n")),(0,r.kt)("p",null,"For the above PSP to be effective, we need to create a ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterRole")," and a ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterRoleBinding"),'. We also need to include a "system unrestricted policy" which is needed for system-level pods that require additional privileges, as exemplified below.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: policy/v1beta1\nkind: PodSecurityPolicy\nmetadata:\n  name: restricted-psp\nspec:\n  privileged: false\n  allowPrivilegeEscalation: false\n  requiredDropCapabilities:\n    - ALL\n  volumes:\n    - 'configMap'\n    - 'emptyDir'\n    - 'projected'\n    - 'secret'\n    - 'downwardAPI'\n    - 'csi'\n    - 'persistentVolumeClaim'\n    - 'ephemeral'\n  hostNetwork: false\n  hostIPC: false\n  hostPID: false\n  runAsUser:\n    rule: 'MustRunAsNonRoot'\n  seLinux:\n    rule: 'RunAsAny'\n  supplementalGroups:\n    rule: 'MustRunAs'\n    ranges:\n      - min: 1\n        max: 65535\n  fsGroup:\n    rule: 'MustRunAs'\n    ranges:\n      - min: 1\n        max: 65535\n  readOnlyRootFilesystem: false\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  name: psp:restricted-psp\n  labels:\n    addonmanager.kubernetes.io/mode: EnsureExists\nrules:\n- apiGroups: ['extensions']\n  resources: ['podsecuritypolicies']\n  verbs:     ['use']\n  resourceNames:\n  - restricted-psp\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: default:restricted-psp\n  labels:\n    addonmanager.kubernetes.io/mode: EnsureExists\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: psp:restricted-psp\nsubjects:\n- kind: Group\n  name: system:authenticated\n  apiGroup: rbac.authorization.k8s.io\n---\napiVersion: policy/v1beta1\nkind: PodSecurityPolicy\nmetadata:\n  name: system-unrestricted-psp\nspec:\n  allowPrivilegeEscalation: true\n  allowedCapabilities:\n  - '*'\n  fsGroup:\n    rule: RunAsAny\n  hostIPC: true\n  hostNetwork: true\n  hostPID: true\n  hostPorts:\n  - max: 65535\n    min: 0\n  privileged: true\n  runAsUser:\n    rule: RunAsAny\n  seLinux:\n    rule: RunAsAny\n  supplementalGroups:\n    rule: RunAsAny\n  volumes:\n  - '*'\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: system-unrestricted-node-psp-rolebinding\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: system-unrestricted-psp-role\nsubjects:\n- apiGroup: rbac.authorization.k8s.io\n  kind: Group\n  name: system:nodes\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  name: system-unrestricted-psp-role\nrules:\n- apiGroups:\n  - policy\n  resourceNames:\n  - system-unrestricted-psp\n  resources:\n  - podsecuritypolicies\n  verbs:\n  - use\n")),(0,r.kt)("p",null,"The policy file ",(0,r.kt)("inlineCode",{parentName:"p"},"policy.yaml")," can be placed in the ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/k3s/server/manifests")," directory. Both the policy file and the its directory hierarchy, ideally, must be created before starting K3s. A restrictive access permission is recommended to avoid leaking potential sensitive information."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mkdir -p -m 700 /var/lib/rancher/k3s/server/manifests\n")),(0,r.kt)("h3",{id:"network-policies-control-532"},"Network Policies (control 5.3.2)"),(0,r.kt)("p",null,"CIS requires that all namespaces have a network policy applied that reasonably limits traffic into namespaces and pods."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This is a manual check in the CIS Benchmark. The CIS scan will flag the result as ",(0,r.kt)("inlineCode",{parentName:"p"},"warning"),", because manual inspection is necessary by the cluster operator.")),(0,r.kt)("p",null,"Here is an example of a compliant network policy."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"kind: NetworkPolicy\napiVersion: networking.k8s.io/v1\nmetadata:\n  name: intra-namespace\n  namespace: kube-system\nspec:\n  podSelector: {}\n  ingress:\n    - from:\n      - namespaceSelector:\n          matchLabels:\n            name: kube-system\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Kubernetes' additions such as CNI, DNS, and Ingress are ran as pods in the ",(0,r.kt)("inlineCode",{parentName:"p"},"kube-system")," namespace. Therefore, this namespace will have a policy that is less restrictive so that these components can run properly.")),(0,r.kt)("p",null,"With the applied restrictions, DNS will be blocked unless purposely allowed. Below is a network policy that will allow DNS related traffic."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  name: default-network-dns-policy\n  namespace: <NAMESPACE>\nspec:\n  ingress:\n  - ports:\n    - port: 53\n      protocol: TCP\n    - port: 53\n      protocol: UDP\n  podSelector:\n    matchLabels:\n      k8s-app: kube-dns\n  policyTypes:\n  - Ingress\n")),(0,r.kt)("p",null,"The metrics-server and Traefik ingress controller will be blocked by default if network policies are not created to allow access."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  name: allow-all-metrics-server\n  namespace: kube-system\nspec:\n  podSelector:\n    matchLabels:\n      k8s-app: metrics-server\n  ingress:\n  - {}\n  policyTypes:\n  - Ingress\n---\napiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  name: allow-all-svclbtraefik-ingress\n  namespace: kube-system\nspec:\n  podSelector: \n    matchLabels:\n      svccontroller.k3s.cattle.io/svcname: traefik\n  ingress:\n  - {}\n  policyTypes:\n  - Ingress\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Operators must manage network policies as normal for additional namespaces that are created.")),(0,r.kt)("p",null,"The network policies can be added in the same policy file used for PSPs in ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/k3s/server/manifests/policy.yaml")," or on its own file."),(0,r.kt)("h3",{id:"api-server-audit-configuration"},"API Server audit configuration"),(0,r.kt)("p",null,"CIS requirements v1.20 - 1.2.22 to 1.2.25 and v1.23 - 1.2.19 to 1.2.22 are related to configuring audit logs for the API Server. K3s doesn't create by default the log directory and audit policy, as auditing requirements are specific to each user's policies and environment."),(0,r.kt)("p",null,"The log directory, ideally, must be created before starting K3s. A restrictive access permission is recommended to avoid leaking potential sensitive information."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mkdir -p -m 700 /var/lib/rancher/k3s/server/logs\n")),(0,r.kt)("p",null,"A starter audit policy to log request metadata is provided below. The policy should be written to a file named ",(0,r.kt)("inlineCode",{parentName:"p"},"audit.yaml")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/k3s/server")," directory. Detailed information about policy configuration for the API server can be found in the Kubernetes ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/"},"documentation"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: audit.k8s.io/v1\nkind: Policy\nrules:\n- level: Metadata\n")),(0,r.kt)("p",null,"Further configurations, as described below, are also needed to pass CIS checks and are not configured by default in K3s, because they vary depending on the users' environment and needs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ensure that the ",(0,r.kt)("inlineCode",{parentName:"li"},"--audit-log-path")," argument is set."),(0,r.kt)("li",{parentName:"ul"},"Ensure that the ",(0,r.kt)("inlineCode",{parentName:"li"},"--audit-log-maxage")," argument is set to 30 or as appropriate."),(0,r.kt)("li",{parentName:"ul"},"Ensure that the ",(0,r.kt)("inlineCode",{parentName:"li"},"--audit-log-maxbackup")," argument is set to 10 or as appropriate."),(0,r.kt)("li",{parentName:"ul"},"Ensure that the ",(0,r.kt)("inlineCode",{parentName:"li"},"--audit-log-maxsize")," argument is set to 100 or as appropriate.")),(0,r.kt)("p",null,"To enable and configure audit logs, add the following line to K3s cluster configuration file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  rkeConfig:\n    machineGlobalConfig:\n      kube-apiserver-arg:\n      - audit-policy-file=/var/lib/rancher/k3s/server/audit.yaml    # CIS v1.20/v1.23 3.2.1\n      - audit-log-path=/var/lib/rancher/k3s/server/logs/audit.log   # CIS v1.20 1.2.21 and CIS v1.23 1.2.19\n      - audit-log-maxage=30                                         # CIS v1.20 1.2.22 and CIS v1.23 1.2.20\n      - audit-log-maxbackup=10                                      # CIS v1.20 1.2.23 and CIS v1.23 1.2.21\n      - audit-log-maxsize=100                                       # CIS v1.20 1.2.24 and CIS v1.23 1.2.22\n")),(0,r.kt)("h2",{id:"known-issues"},"Known Issues"),(0,r.kt)("p",null,"The following are controls that K3s currently does not pass by default. Each gap will be explained, along with a note clarifying whether it can be passed through manual operator intervention, or if it will be addressed in a future release of K3s."),(0,r.kt)("h3",{id:"control-cis-v120---1213--cis-v123---1214"},"Control CIS v1.20 - 1.2.13 / CIS v1.23 - 1.2.14"),(0,r.kt)("p",null,"Ensure that the admission control plugin ",(0,r.kt)("inlineCode",{parentName:"p"},"ServiceAccount")," is set"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Rationale"),"Follow the documentation and create `ServiceAccount` objects as per your environment. Then, edit the API server pod specification file $apiserverconf on the control plane node and ensure that the `--disable-admission-plugins` parameter is set to a value that does not include `ServiceAccount`.",(0,r.kt)("p",null,"This can be remediated by adding the following argument line to K3s cluster configuration file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  rkeConfig:\n    machineGlobalConfig:\n      kube-apiserver-arg:\n      kube-apiserver-arg:\n        - enable-admission-plugins=ServiceAccount    # CIS v1.20 - 1.2.13 / CIS v1.23 - 1.2.14\n"))),(0,r.kt)("h3",{id:"control-cis-v120-1226-and-cis-v123-1223"},"Control CIS v1.20 1.2.26 and CIS v1.23 1.2.23"),(0,r.kt)("p",null,"Ensure that the ",(0,r.kt)("inlineCode",{parentName:"p"},"--request-timeout")," argument is set as appropriate."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Rationale"),"Setting global request timeout allows extending the API server request timeout limit to a duration appropriate to the user's connection speed. By default, it is set to 60 seconds which might be problematic on slower connections making cluster resources inaccessible once the data volume for requests exceeds what can be transmitted in 60 seconds. But, setting this timeout limit to be too large can exhaust the API server resources making it prone to Denial-of-Service attack. Hence, it is recommended to set this limit as appropriate and change the default limit of 60 seconds only if needed.",(0,r.kt)("p",null,"This can be remediated by adding the following argument line to K3s cluster configuration file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  rkeConfig:\n    machineGlobalConfig:\n      kube-apiserver-arg:\n      - request-timeout=300s          # Control CIS v1.20 1.2.26 and CIS v1.23 1.2.23\n"))),(0,r.kt)("h3",{id:"control-cis-v123-1224"},"Control CIS v1.23 1.2.24"),(0,r.kt)("p",null,"Ensure that the ",(0,r.kt)("inlineCode",{parentName:"p"},"--service-account-lookup")," argument is set to true."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Rationale"),"If `--service-account-lookup` is not enabled, the apiserver only verifies that the authentication token is valid, and does not validate that the service account token mentioned in the request is actually present in etcd. This allows using a service account token even after the corresponding service account is deleted. This is an example of time of check to time of use security issue.",(0,r.kt)("p",null,"This can be remediated by adding the following argument line to K3s cluster configuration file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  rkeConfig:\n    machineGlobalConfig:\n      kube-apiserver-arg:\n      - service-account-lookup=true   # Control CIS v1.23 1.2.24\n"))),(0,r.kt)("h3",{id:"cis-v120-1232-and-cis-v123-1230"},"CIS v1.20 1.2.32 and CIS v1.23 1.2.30"),(0,r.kt)("p",null,"Ensure that the ",(0,r.kt)("inlineCode",{parentName:"p"},"--encryption-provider-config")," argument is set as appropriate."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Rationale"),"`etcd` is a highly available key-value store used by Kubernetes deployments for persistent storage of all of its REST API objects. These objects are sensitive in nature and should be encrypted at rest to avoid any disclosures.",(0,r.kt)("p",null,"Detailed steps on how to configure secrets encryption in K3s are available in ",(0,r.kt)("a",{parentName:"p",href:"https://docs.k3s.io/security/secrets-encryption"},"K3s Secrets Encryption Config"),".")),(0,r.kt)("h3",{id:"control-cis-v120-1233-and-cis-v123-1231"},"Control CIS v1.20 1.2.33 and CIS v1.23 1.2.31"),(0,r.kt)("p",null,"Ensure that encryption providers are appropriately configured."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Rationale"),"Where `etcd` encryption is used, it is important to ensure that the appropriate set of encryption providers is used. Currently, the `aescbc`, `kms` and `secretbox` are likely to be appropriate options.",(0,r.kt)("p",null,"This can be remediated by passing a valid configuration to ",(0,r.kt)("inlineCode",{parentName:"p"},"k3s")," as outlined above. Detailed steps on how to configure secrets encryption in K3s are available in ",(0,r.kt)("a",{parentName:"p",href:"https://docs.k3s.io/security/secrets-encryption"},"K3s Secrets Encryption Config"),".")),(0,r.kt)("h3",{id:"control-427"},"Control 4.2.7"),(0,r.kt)("p",null,"Ensure that the ",(0,r.kt)("inlineCode",{parentName:"p"},"--make-iptables-util-chains")," argument is set to true."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Rationale"),"Kubelets can automatically manage the required changes to iptables based on how you choose your networking options for the pods. It is recommended to let kubelets manage the changes to iptables. This ensures that the iptables configuration remains in sync with pods networking configuration. Manually configuring iptables with dynamic pod network configuration changes might hamper the communication between pods/containers and to the outside world. You might have iptables rules too restrictive or too open.",(0,r.kt)("p",null,"This can be remediated by adding the following argument line to K3s cluster configuration file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  rkeConfig:\n    machineSelectorConfig:\n    - config:\n        kubelet-arg:\n        - make-iptables-util-chains=true          # Control 4.2.7\n"))),(0,r.kt)("h3",{id:"control-515"},"Control 5.1.5"),(0,r.kt)("p",null,"Ensure that default service accounts are not actively used"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Rationale"),"Kubernetes provides a `default` service account which is used by cluster workloads where no specific service account is assigned to the pod.",(0,r.kt)("p",null,"Where access to the Kubernetes API from a pod is required, a specific service account should be created for that pod, and rights granted to that service account."),(0,r.kt)("p",null,"The default service account should be configured such that it does not provide a service account token and does not have any explicit rights assignments."),(0,r.kt)("p",null,"This can be remediated by updating the ",(0,r.kt)("inlineCode",{parentName:"p"},"automountServiceAccountToken")," field to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," for the ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," service account in each namespace."),(0,r.kt)("p",null,"For ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," service accounts in the built-in namespaces (",(0,r.kt)("inlineCode",{parentName:"p"},"kube-system"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"kube-public"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"kube-node-lease"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"default"),"), K3s does not automatically do this. You can manually update this field on these service accounts to pass the control or use the script below to automate this task."),(0,r.kt)("p",null,"Save the follow configuration to a file called ",(0,r.kt)("inlineCode",{parentName:"p"},"account_update.yaml"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: default\nautomountServiceAccountToken: false\n")),(0,r.kt)("p",null,"Create a bash script file called ",(0,r.kt)("inlineCode",{parentName:"p"},"account_update.sh"),". Be sure to ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo chmod +x account_update.sh")," so the script has execute permissions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash -e\n\nfor namespace in $(kubectl get namespaces -A -o=jsonpath="{.items[*][\'metadata.name\']}"); do\n  echo -n "Patching namespace $namespace - "\n  kubectl patch serviceaccount default -n ${namespace} -p "$(cat account_update.yaml)"\ndone\n')),(0,r.kt)("p",null,"Execute the script to update the default service account in each namespace.")),(0,r.kt)("h3",{id:"reference-hardened-k3s-template-configuration"},"Reference Hardened K3s Template Configuration"),(0,r.kt)("p",null,"The reference template configuration below is used in Rancher to create a hardened K3s custom cluster based on each CIS control presented in this guide. This reference does not include other required ",(0,r.kt)("strong",{parentName:"p"},"cluster configuration")," directives which will vary depending on your environment."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: provisioning.cattle.io/v1\nkind: Cluster\nmetadata:\n  name: # Define cluster name\n  annotations:\nspec:\n  defaultPodSecurityPolicyTemplateName: '' # Define the PSP policy to use\n  enableNetworkPolicy: true\n  kubernetesVersion: # Define K3s version\n  rkeConfig:\n    machineGlobalConfig:\n      kube-apiserver-arg:\n        - enable-admission-plugins=NodeRestriction,PodSecurityPolicy,ServiceAccount    # CIS 1.2.16, CIS 5.2 and CIS v1.20 - 1.2.13 / CIS v1.23 - 1.2.14\n        - audit-policy-file=/var/lib/rancher/k3s/server/audit.yaml    # CIS v1.20/v1.23 3.2.1\n        - audit-log-path=/var/lib/rancher/k3s/server/logs/audit.log   # CIS v1.20 1.2.21 and CIS v1.23 1.2.19\n        - audit-log-maxage=30                                         # CIS v1.20 1.2.22 and CIS v1.23 1.2.20\n        - audit-log-maxbackup=10                                      # CIS v1.20 1.2.23 and CIS v1.23 1.2.21\n        - audit-log-maxsize=100                                       # CIS v1.20 1.2.24 and CIS v1.23 1.2.22\n        - request-timeout=300s                                        # Control CIS v1.20 1.2.26 and CIS v1.23 1.2.23\n        - service-account-lookup=true                                 # Control CIS v1.23 1.2.24\n      secrets-encryption: true\n    machineSelectorConfig:\n      - config:\n          kubelet-arg:\n            - make-iptables-util-chains=true                          # Control 4.2.7\n          protect-kernel-defaults: true                               # Control 4.2.6\n")),(0,r.kt)("h3",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"If you have followed this guide, your K3s custom cluster provisioned by Rancher will be configured to pass the CIS Kubernetes Benchmark. You can review our K3s CIS Benchmark Self-Assessment Guide for ",(0,r.kt)("a",{parentName:"p",href:"/zh/reference-guides/rancher-security/rancher-v2.7-hardening-guides/k3s-self-assessment-guide-with-cis-v1.20-benchmark"},"CIS v1.20")," and ",(0,r.kt)("a",{parentName:"p",href:"/zh/reference-guides/rancher-security/rancher-v2.7-hardening-guides/k3s-self-assessment-guide-with-cis-v1.23-benchmark"},"CIS v1.23")," to understand how we verified each of the benchmarks and how you can do the same on your cluster."))}d.isMDXComponent=!0}}]);