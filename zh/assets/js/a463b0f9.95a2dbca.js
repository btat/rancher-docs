"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[50177],{3905:(e,t,r)=>{r.d(t,{Zo:()=>h,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),p=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},h=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),c=p(r),d=n,m=c["".concat(i,".").concat(d)]||c[d]||u[d]||l;return r?a.createElement(m,o(o({ref:t},h),{},{components:r})):a.createElement(m,o({ref:t},h))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<l;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},18029:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const l={title:"Upgrades"},o=void 0,s={unversionedId:"getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades",id:"version-2.5/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades",title:"Upgrades",description:"The following instructions will guide you through upgrading a Rancher server that was installed on a Kubernetes cluster with Helm. These steps also apply to air gap installs with Helm.",source:"@site/versioned_docs/version-2.5/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades.md",sourceDirName:"getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster",slug:"/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades",permalink:"/zh/v2.5/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades.md",tags:[],version:"2.5",lastUpdatedAt:1685125139,formattedLastUpdatedAt:"2023\u5e745\u670826\u65e5",frontMatter:{title:"Upgrades"},sidebar:"tutorialSidebar",previous:{title:"Rollbacks",permalink:"/zh/v2.5/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rollbacks"},next:{title:"Rendering the Helm Template in an Air Gapped Environment",permalink:"/zh/v2.5/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/air-gapped-upgrades"}},i={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Access to kubeconfig",id:"access-to-kubeconfig",level:3},{value:"Review Known Issues",id:"review-known-issues",level:3},{value:"Helm Version",id:"helm-version",level:3},{value:"For air gap installs: Populate private registry",id:"for-air-gap-installs-populate-private-registry",level:3},{value:"For upgrades from a Rancher server with a hidden local cluster",id:"for-upgrades-from-a-rancher-server-with-a-hidden-local-cluster",level:3},{value:"For upgrades with cert-manager older than 0.8.0",id:"for-upgrades-with-cert-manager-older-than-080",level:3},{value:"Upgrade Outline",id:"upgrade-outline",level:2},{value:"1. Back up Your Kubernetes Cluster that is Running Rancher Server",id:"1-back-up-your-kubernetes-cluster-that-is-running-rancher-server",level:2},{value:"2. Update the Helm chart repository",id:"2-update-the-helm-chart-repository",level:2},{value:"3. Upgrade Rancher",id:"3-upgrade-rancher",level:2},{value:"Option A: Upgrading Rancher",id:"option-a-upgrading-rancher",level:3},{value:"Option B: Reinstalling Rancher and cert-manager",id:"option-b-reinstalling-rancher-and-cert-manager",level:3},{value:"4. Verify the Upgrade",id:"4-verify-the-upgrade",level:2},{value:"Known Upgrade Issues",id:"known-upgrade-issues",level:2}],h={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades"})),(0,n.kt)("p",null,"The following instructions will guide you through upgrading a Rancher server that was installed on a Kubernetes cluster with Helm. These steps also apply to air gap installs with Helm."),(0,n.kt)("p",null,"For the instructions to upgrade Rancher installed on Kubernetes with RancherD, refer to ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.5/getting-started/installation-and-upgrade/other-installation-methods/install-rancher-on-linux/upgrade-rancherd"},"this page.")),(0,n.kt)("p",null,"For the instructions to upgrade Rancher installed with Docker, refer to ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.5/getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker/upgrade-docker-installed-rancher"},"this page.")),(0,n.kt)("p",null,"To upgrade the components in your Kubernetes cluster, or the definition of the ",(0,n.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/services/"},"Kubernetes services")," or ",(0,n.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/add-ons/"},"add-ons"),", refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/upgrades/"},"upgrade documentation for RKE"),", the Rancher Kubernetes Engine."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#prerequisites"},"Prerequisites")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#upgrade-outline"},"Upgrade Outline")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#known-upgrade-issues"},"Known Upgrade Issues")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#rke-add-on-installs"},"RKE Add-on Installs"))),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("h3",{id:"access-to-kubeconfig"},"Access to kubeconfig"),(0,n.kt)("p",null,"Helm should be run from the same location as your kubeconfig file, or the same location where you run your kubectl commands from."),(0,n.kt)("p",null,"If you installed Kubernetes with RKE, the config will have been created in the directory you ran ",(0,n.kt)("inlineCode",{parentName:"p"},"rke up")," in."),(0,n.kt)("p",null,"The kubeconfig can also be manually targeted for the intended cluster with the ",(0,n.kt)("inlineCode",{parentName:"p"},"--kubeconfig")," tag (see: ",(0,n.kt)("a",{parentName:"p",href:"https://helm.sh/docs/helm/helm/"},"https://helm.sh/docs/helm/helm/"),")"),(0,n.kt)("h3",{id:"review-known-issues"},"Review Known Issues"),(0,n.kt)("p",null,"Review the list of known issues for each Rancher version, which can be found in the release notes on ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/releases"},"GitHub")," and on the ",(0,n.kt)("a",{parentName:"p",href:"https://forums.rancher.com/c/announcements/12"},"Rancher forums.")),(0,n.kt)("p",null,"Note that upgrades ",(0,n.kt)("em",{parentName:"p"},"to")," or ",(0,n.kt)("em",{parentName:"p"},"from")," any chart in the ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.5/reference-guides/installation-references/helm-chart-options#helm-chart-repositories/"},"rancher-alpha repository")," aren't supported."),(0,n.kt)("h3",{id:"helm-version"},"Helm Version"),(0,n.kt)("p",null,"The upgrade instructions assume you are using Helm 3."),(0,n.kt)("p",null,"For migration of installs started with Helm 2, refer to the official ",(0,n.kt)("a",{parentName:"p",href:"https://helm.sh/blog/migrate-from-helm-v2-to-helm-v3/"},"Helm 2 to 3 migration docs.")," The ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades/helm2"},"Helm 2 upgrade page here")," provides a copy of the older upgrade instructions that used Helm 2, and it is intended to be used if upgrading to Helm 3 is not feasible."),(0,n.kt)("h3",{id:"for-air-gap-installs-populate-private-registry"},"For air gap installs: Populate private registry"),(0,n.kt)("p",null,"For ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.5/pages-for-subheaders/air-gapped-helm-cli-install"},"air gap installs only,")," collect and populate images for the new Rancher server version. Follow the guide to ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.5/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/publish-images"},"populate your private registry")," with the images for the Rancher version that you want to upgrade to."),(0,n.kt)("h3",{id:"for-upgrades-from-a-rancher-server-with-a-hidden-local-cluster"},"For upgrades from a Rancher server with a hidden local cluster"),(0,n.kt)("p",null,"If you are upgrading to Rancher v2.5 from a Rancher server that was started with the Helm chart option ",(0,n.kt)("inlineCode",{parentName:"p"},"--add-local=false"),", you will need to drop that flag when upgrading. Otherwise, the Rancher server will not start. The ",(0,n.kt)("inlineCode",{parentName:"p"},"restricted-admin")," role can be used to continue restricting access to the local cluster. For more information, see ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions#upgrading-from-rancher-with-a-hidden-local-cluster"},"this section.")),(0,n.kt)("h3",{id:"for-upgrades-with-cert-manager-older-than-080"},"For upgrades with cert-manager older than 0.8.0"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://community.letsencrypt.org/t/blocking-old-cert-manager-versions/98753"},"Let's Encrypt will be blocking cert-manager instances older than 0.8.0 starting November 1st 2019.")," Upgrade cert-manager to the latest version by following ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.5/getting-started/installation-and-upgrade/resources/upgrade-cert-manager"},"these instructions.")),(0,n.kt)("h2",{id:"upgrade-outline"},"Upgrade Outline"),(0,n.kt)("p",null,"Follow the steps to upgrade Rancher server:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#1-back-up-your-kubernetes-cluster-that-is-running-rancher-server"},"1. Back up your Kubernetes cluster that is running Rancher server")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#2-update-the-helm-chart-repository"},"2. Update the Helm chart repository")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#3-upgrade-rancher"},"3. Upgrade Rancher")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#4-verify-the-upgrade"},"4. Verify the Upgrade"))),(0,n.kt)("h2",{id:"1-back-up-your-kubernetes-cluster-that-is-running-rancher-server"},"1. Back up Your Kubernetes Cluster that is Running Rancher Server"),(0,n.kt)("p",null,"Use the ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.5/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher"},"backup application")," to back up Rancher."),(0,n.kt)("p",null,"You'll use the backup as a restoration point if something goes wrong during upgrade."),(0,n.kt)("h2",{id:"2-update-the-helm-chart-repository"},"2. Update the Helm chart repository"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Update your local helm repo cache."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"helm repo update\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Get the repository name that you used to install Rancher."),(0,n.kt)("p",{parentName:"li"},"For information about the repos and their differences, see ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.5/reference-guides/installation-references/helm-chart-options#helm-chart-repositories"},"Helm Chart Repositories"),"."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Latest: Recommended for trying out the newest features",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"helm repo add rancher-latest https://releases.rancher.com/server-charts/latest\n"))),(0,n.kt)("li",{parentName:"ul"},"Stable: Recommended for production environments",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"helm repo add rancher-stable https://releases.rancher.com/server-charts/stable\n"))),(0,n.kt)("li",{parentName:"ul"},"Alpha: Experimental preview of upcoming releases.",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"helm repo add rancher-stable https://releases.rancher.com/server-charts/stable\n")),"  Note: Upgrades are not supported to, from, or between Alphas.")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"helm repo list\n\nNAME                   URL\nstable                 https://charts.helm.sh/stable\nrancher-<CHART_REPO>     https://releases.rancher.com/server-charts/<CHART_REPO>\n")),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:")," If you want to switch to a different Helm chart repository, please follow the ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.5/getting-started/installation-and-upgrade/resources/choose-a-rancher-version#switching-to-a-different-helm-chart-repository"},"steps on how to switch repositories"),". If you switch repositories, make sure to list the repositories again before continuing onto Step 3 to ensure you have the correct one added.")))),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Fetch the latest chart to install Rancher from the Helm chart repository."),(0,n.kt)("p",{parentName:"li"},"This command will pull down the latest charts and save it in the current directory as a ",(0,n.kt)("inlineCode",{parentName:"p"},".tgz")," file."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"helm fetch rancher-<CHART_REPO>/rancher\n")),(0,n.kt)("p",{parentName:"li"},"You can fetch the chart for the specific version you are upgrading to by adding in the ",(0,n.kt)("inlineCode",{parentName:"p"},"--version=")," tag.  For example:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"helm fetch rancher-<CHART_REPO>/rancher --version=2.5.16\n")))),(0,n.kt)("h2",{id:"3-upgrade-rancher"},"3. Upgrade Rancher"),(0,n.kt)("p",null,"This section describes how to upgrade normal (Internet-connected) or air gap installations of Rancher with Helm."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Air Gap Instructions:")," If you are installing Rancher in an air gapped environment, skip the rest of this page and render the Helm template by following the instructions on ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.5/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/air-gapped-upgrades"},"this page."))),(0,n.kt)("p",null,"Get the values, which were passed with ",(0,n.kt)("inlineCode",{parentName:"p"},"--set"),", from the current Rancher Helm chart that is installed."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"helm get values rancher -n cattle-system\n\nhostname: rancher.my.org\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:")," There will be more values that are listed with this command. This is just an example of one of the values.")),(0,n.kt)("p",null,"If you are also upgrading cert-manager to the latest version from a version older than 0.11.0, follow ",(0,n.kt)("a",{parentName:"p",href:"#option-b-reinstalling-rancher-and-cert-manager"},"Option B: Reinstalling Rancher and cert-manager.")),(0,n.kt)("p",null,"Otherwise, follow ",(0,n.kt)("a",{parentName:"p",href:"#option-a-upgrading-rancher"},"Option A: Upgrading Rancher.")),(0,n.kt)("h3",{id:"option-a-upgrading-rancher"},"Option A: Upgrading Rancher"),(0,n.kt)("p",null,"Upgrade Rancher to the latest version with all your settings."),(0,n.kt)("p",null,"Take all the values from the previous step and append them to the command using ",(0,n.kt)("inlineCode",{parentName:"p"},"--set key=value"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"helm upgrade rancher rancher-<CHART_REPO>/rancher \\\n  --namespace cattle-system \\\n  --set hostname=rancher.my.org\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:")," The above is an example, there may be more values from the previous step that need to be appended.")),(0,n.kt)("p",null,"Alternatively, it's possible to export the current values to a file and reference that file during upgrade. For example, to only change the Rancher version:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"helm get values rancher -n cattle-system -o yaml > values.yaml\n\nhelm upgrade rancher rancher-<CHART_REPO>/rancher \\\n  --namespace cattle-system \\\n  -f values.yaml \\\n  --version=2.5.16\n")),(0,n.kt)("h3",{id:"option-b-reinstalling-rancher-and-cert-manager"},"Option B: Reinstalling Rancher and cert-manager"),(0,n.kt)("p",null,"If you are currently running the cert-manager whose version is older than v0.11, and want to upgrade both Rancher and cert-manager to a newer version, then you need to reinstall both Rancher and cert-manager due to the API change in cert-manager v0.11."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Uninstall Rancher"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"helm delete rancher -n cattle-system\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Uninstall and reinstall ",(0,n.kt)("inlineCode",{parentName:"p"},"cert-manager")," according to the instructions on the ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.5/getting-started/installation-and-upgrade/resources/upgrade-cert-manager"},"Upgrading Cert-Manager")," page.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Reinstall Rancher to the latest version with all your settings. Take all the values from the step 1 and append them to the command using ",(0,n.kt)("inlineCode",{parentName:"p"},"--set key=value"),". Note: There will be many more options from the step 1 that need to be appended."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"helm install rancher rancher-<CHART_REPO>/rancher \\\n--namespace cattle-system \\\n--set hostname=rancher.my.org\n")))),(0,n.kt)("h2",{id:"4-verify-the-upgrade"},"4. Verify the Upgrade"),(0,n.kt)("p",null,"Log into Rancher to confirm that the upgrade succeeded."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Having network issues following upgrade?")),(0,n.kt)("p",{parentName:"blockquote"},"See ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades/namespace-migration"},"Restoring Cluster Networking"),".")),(0,n.kt)("h2",{id:"known-upgrade-issues"},"Known Upgrade Issues"),(0,n.kt)("p",null,"A list of known issues for each Rancher version can be found in the release notes on ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/releases"},"GitHub")," and on the ",(0,n.kt)("a",{parentName:"p",href:"https://forums.rancher.com/c/announcements/12"},"Rancher forums.")))}u.isMDXComponent=!0}}]);