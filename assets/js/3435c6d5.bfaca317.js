"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[73318],{3905:function(e,t,n){n.d(t,{Zo:function(){return g},kt:function(){return u}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},g=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),c=d(n),u=i,m=c["".concat(s,".").concat(u)]||c[u]||p[u]||o;return n?a.createElement(m,r(r({ref:t},g),{},{components:n})):a.createElement(m,r({ref:t},g))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},21193:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),r=["components"],l={title:"rancher-logging Helm Chart Options",shortTitle:"Helm Chart Options",weight:4},s=void 0,d={unversionedId:"explanations/integrations-in-rancher/logging/logging-helm-chart-options",id:"explanations/integrations-in-rancher/logging/logging-helm-chart-options",title:"rancher-logging Helm Chart Options",description:"- Enable/Disable Windows Node Logging",source:"@site/docs/explanations/integrations-in-rancher/logging/logging-helm-chart-options.md",sourceDirName:"explanations/integrations-in-rancher/logging",slug:"/explanations/integrations-in-rancher/logging/logging-helm-chart-options",permalink:"/rancher-docs/explanations/integrations-in-rancher/logging/logging-helm-chart-options",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/explanations/integrations-in-rancher/logging/logging-helm-chart-options.md",tags:[],version:"current",lastUpdatedAt:1660752881,formattedLastUpdatedAt:"8/17/2022",frontMatter:{title:"rancher-logging Helm Chart Options",shortTitle:"Helm Chart Options",weight:4},sidebar:"tutorialSidebar",previous:{title:"Role-based Access Control for Logging",permalink:"/rancher-docs/explanations/integrations-in-rancher/logging/rbac-for-logging"},next:{title:"Working with Taints and Tolerations",permalink:"/rancher-docs/explanations/integrations-in-rancher/logging/taints-and-tolerations"}},g={},p=[{value:"Enable/Disable Windows Node Logging",id:"enabledisable-windows-node-logging",level:3},{value:"Working with a Custom Docker Root Directory",id:"working-with-a-custom-docker-root-directory",level:3},{value:"Adding NodeSelector Settings and Tolerations for Custom Taints",id:"adding-nodeselector-settings-and-tolerations-for-custom-taints",level:3},{value:"Enabling the Logging Application to Work with SELinux",id:"enabling-the-logging-application-to-work-with-selinux",level:3},{value:"Additional Logging Sources",id:"additional-logging-sources",level:3},{value:"Systemd Configuration",id:"systemd-configuration",level:3}],c={toc:p};function u(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#enable-disable-windows-node-logging"},"Enable/Disable Windows Node Logging")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#working-with-a-custom-docker-root-directory"},"Working with a Custom Docker Root Directory")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#adding-nodeselector-settings-and-tolerations-for-custom-taints"},"Adding NodeSelector Settings and Tolerations for Custom Taints")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#enabling-the-logging-application-to-work-with-selinux"},"Enabling the Logging Application to Work with SELinux")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#additional-logging-sources"},"Additional Logging Sources")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#systemd-configuration"},"Systemd Configuration"))),(0,o.kt)("h3",{id:"enabledisable-windows-node-logging"},"Enable/Disable Windows Node Logging"),(0,o.kt)("p",null,"You can enable or disable Windows node logging by setting ",(0,o.kt)("inlineCode",{parentName:"p"},"global.cattle.windows.enabled")," to either ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"values.yaml"),"."),(0,o.kt)("p",null,"By default, Windows node logging will be enabled if the Cluster Dashboard UI is used to install the logging application on a Windows cluster."),(0,o.kt)("p",null,"In this scenario, setting ",(0,o.kt)("inlineCode",{parentName:"p"},"global.cattle.windows.enabled")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," will disable Windows node logging on the cluster.\nWhen disabled, logs will still be collected from Linux nodes within the Windows cluster."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Currently an ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/issues/32325"},"issue")," exists where Windows nodeAgents are not deleted when performing a ",(0,o.kt)("inlineCode",{parentName:"p"},"helm upgrade")," after disabling Windows logging in a Windows cluster. In this scenario, users may need to manually remove the Windows nodeAgents if they are already installed."))),(0,o.kt)("h3",{id:"working-with-a-custom-docker-root-directory"},"Working with a Custom Docker Root Directory"),(0,o.kt)("p",null,"If using a custom Docker root directory, you can set ",(0,o.kt)("inlineCode",{parentName:"p"},"global.dockerRootDirectory")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"values.yaml"),"."),(0,o.kt)("p",null,"This will ensure that the Logging CRs created will use your specified path rather than the default Docker ",(0,o.kt)("inlineCode",{parentName:"p"},"data-root")," location."),(0,o.kt)("p",null,"Note that this only affects Linux nodes."),(0,o.kt)("p",null,"If there are any Windows nodes in the cluster, the change will not be applicable to those nodes."),(0,o.kt)("h3",{id:"adding-nodeselector-settings-and-tolerations-for-custom-taints"},"Adding NodeSelector Settings and Tolerations for Custom Taints"),(0,o.kt)("p",null,"You can add your own ",(0,o.kt)("inlineCode",{parentName:"p"},"nodeSelector")," settings and add ",(0,o.kt)("inlineCode",{parentName:"p"},"tolerations")," for additional taints by editing the logging Helm chart values. For details, see ",(0,o.kt)("a",{parentName:"p",href:"/rancher-docs/explanations/integrations-in-rancher/logging/taints-and-tolerations"},"this page.")),(0,o.kt)("h3",{id:"enabling-the-logging-application-to-work-with-selinux"},"Enabling the Logging Application to Work with SELinux"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Requirements:")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Logging v2 was tested with SELinux on RHEL/CentOS 7 and 8."))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Security-Enhanced_Linux"},"Security-Enhanced Linux (SELinux)")," is a security enhancement to Linux. After being historically used by government agencies, SELinux is now industry standard and is enabled by default on CentOS 7 and 8."),(0,o.kt)("p",null,"To use Logging v2 with SELinux, we recommend installing the ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-selinux")," RPM according to the instructions on ",(0,o.kt)("a",{parentName:"p",href:"/rancher-docs/pages-for-subheaders/selinux-rpm#installing-the-rancher-selinux-rpm"},"this page.")),(0,o.kt)("p",null,"Then, when installing the logging application, configure the chart to be SELinux aware by changing ",(0,o.kt)("inlineCode",{parentName:"p"},"global.seLinux.enabled")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"values.yaml"),"."),(0,o.kt)("h3",{id:"additional-logging-sources"},"Additional Logging Sources"),(0,o.kt)("p",null,"By default, Rancher collects logs for ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/components/#control-plane-components"},"control plane components")," and ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/components/#node-components"},"node components")," for all cluster types."),(0,o.kt)("p",null,"In some cases, Rancher may be able to collect additional logs."),(0,o.kt)("p",null,"The following table summarizes the sources where additional logs may be collected for each node types:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Logging Source"),(0,o.kt)("th",{parentName:"tr",align:null},"Linux Nodes (including in Windows cluster)"),(0,o.kt)("th",{parentName:"tr",align:null},"Windows Nodes"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"RKE"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"RKE2"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"K3s"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"AKS"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"EKS"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"GKE"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("p",null,"To enable hosted Kubernetes providers as additional logging sources, enable ",(0,o.kt)("strong",{parentName:"p"},"Enable enhanced cloud provider logging")," option when installing or upgrading the Logging Helm chart."),(0,o.kt)("p",null,"When enabled, Rancher collects all additional node and control plane logs the provider has made available, which may vary between providers"),(0,o.kt)("p",null,"If you're already using a cloud provider's own logging solution such as AWS CloudWatch or Google Cloud operations suite (formerly Stackdriver), it is not necessary to enable this option as the native solution will have unrestricted access to all logs."),(0,o.kt)("h3",{id:"systemd-configuration"},"Systemd Configuration"),(0,o.kt)("p",null,"In Rancher logging, ",(0,o.kt)("inlineCode",{parentName:"p"},"SystemdLogPath")," must be configured for K3s and RKE2 Kubernetes distributions. "),(0,o.kt)("p",null,"K3s and RKE2 Kubernetes distributions log to journald, which is the subsystem of systemd that is used for logging. In order to collect these logs, the ",(0,o.kt)("inlineCode",{parentName:"p"},"systemdLogPath")," needs to be defined. While the ",(0,o.kt)("inlineCode",{parentName:"p"},"run/log/journal")," directory is used by default, some Linux distributions do not default to this path. For example, Ubuntu defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"var/log/journal"),". To determine your ",(0,o.kt)("inlineCode",{parentName:"p"},"systemdLogPath")," configuration, see steps below."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Steps for Systemd Configuration:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Run  ",(0,o.kt)("inlineCode",{parentName:"li"},'cat /etc/systemd/journald.conf | grep -E ^\\#?Storage | cut -d"=" -f2')," on one of your nodes."),(0,o.kt)("li",{parentName:"ul"},"If ",(0,o.kt)("inlineCode",{parentName:"li"},"persistent")," is returned, your ",(0,o.kt)("inlineCode",{parentName:"li"},"systemdLogPath")," should be ",(0,o.kt)("inlineCode",{parentName:"li"},"/var/log/journal"),"."),(0,o.kt)("li",{parentName:"ul"},"If ",(0,o.kt)("inlineCode",{parentName:"li"},"volatile")," is returned, your ",(0,o.kt)("inlineCode",{parentName:"li"},"systemdLogPath")," should be ",(0,o.kt)("inlineCode",{parentName:"li"},"/run/log/journal"),". "),(0,o.kt)("li",{parentName:"ul"},"If ",(0,o.kt)("inlineCode",{parentName:"li"},"auto")," is returned, check if ",(0,o.kt)("inlineCode",{parentName:"li"},"/var/log/journal")," exists. ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If ",(0,o.kt)("inlineCode",{parentName:"li"},"/var/log/journal")," exists, then use ",(0,o.kt)("inlineCode",{parentName:"li"},"/var/log/journal"),". "),(0,o.kt)("li",{parentName:"ul"},"If ",(0,o.kt)("inlineCode",{parentName:"li"},"/var/log/journal")," does not exist, then use ",(0,o.kt)("inlineCode",{parentName:"li"},"/run/log/journal"),". ")))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Notes:")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If any value not described above is returned, Rancher Logging will not be able to collect control plane logs. To address this issue, you will need to perform the following actions on every control plane node:"),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"Set ",(0,o.kt)("inlineCode",{parentName:"li"},"Storage=volatile")," in  journald.conf."),(0,o.kt)("li",{parentName:"ul"},"Reboot your machine."),(0,o.kt)("li",{parentName:"ul"},"Set ",(0,o.kt)("inlineCode",{parentName:"li"},"systemdLogPath")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"/run/log/journal"),".")))))}u.isMDXComponent=!0}}]);