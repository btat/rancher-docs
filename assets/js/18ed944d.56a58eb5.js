"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[18445],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=l,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,a=new Array(i);a[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,a[1]=o;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},66801:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var r=n(87462),l=n(63366),i=(n(67294),n(3905)),a=["components"],o={title:"Initialize Helm: Install the Tiller Service",description:"With Helm, you can create configurable deployments instead of using static files. In order to use Helm, the Tiller service needs to be installed on your cluster.",weight:195,aliases:["/rancher/v2.0-v2.4/en/installation/options/helm2/helm-init","/rancher/v2.x/en/installation/resources/advanced/helm2/helm-init/"]},s=void 0,c={unversionedId:"pages-for-subheaders/helm2-helm-init",id:"version-2.0-2.4/pages-for-subheaders/helm2-helm-init",title:"Initialize Helm: Install the Tiller Service",description:"With Helm, you can create configurable deployments instead of using static files. In order to use Helm, the Tiller service needs to be installed on your cluster.",source:"@site/versioned_docs/version-2.0-2.4/pages-for-subheaders/helm2-helm-init.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/helm2-helm-init",permalink:"/v2.0-v2.4/pages-for-subheaders/helm2-helm-init",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/pages-for-subheaders/helm2-helm-init.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663710212,formattedLastUpdatedAt:"9/20/2022",frontMatter:{title:"Initialize Helm: Install the Tiller Service",description:"With Helm, you can create configurable deployments instead of using static files. In order to use Helm, the Tiller service needs to be installed on your cluster.",weight:195,aliases:["/rancher/v2.0-v2.4/en/installation/options/helm2/helm-init","/rancher/v2.x/en/installation/resources/advanced/helm2/helm-init/"]},sidebar:"tutorialSidebar",previous:{title:"Troubleshooting",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/kubernetes-rke/troubleshooting"},next:{title:"Troubleshooting",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/helm-init/troubleshooting"}},u={},p=[{value:"Install Tiller on the Cluster",id:"install-tiller-on-the-cluster",level:3},{value:"Test your Tiller installation",id:"test-your-tiller-installation",level:3},{value:"Issues or errors?",id:"issues-or-errors",level:3},{value:"Next: Install Rancher",id:"next-install-rancher",level:3}],m={toc:p};function d(e){var t=e.components,n=(0,l.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'Helm is the package management tool of choice for Kubernetes. Helm "charts" provide templating syntax for Kubernetes YAML manifest documents. With Helm we can create configurable deployments instead of just using static files. For more information about creating your own catalog of deployments, check out the docs at ',(0,i.kt)("a",{parentName:"p",href:"https://helm.sh/"},"https://helm.sh/"),". To be able to use Helm, the server-side component ",(0,i.kt)("inlineCode",{parentName:"p"},"tiller")," needs to be installed on your cluster."),(0,i.kt)("p",null,"For systems without direct internet access, see ",(0,i.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/air-gapped-helm-cli-install"},"Helm - Air Gap")," for install details."),(0,i.kt)("p",null,"Refer to the ",(0,i.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/resources/helm-version-requirements"},"Helm version requirements")," to choose a version of Helm to install Rancher."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," The installation instructions assume you are using Helm 2. The instructions will be updated for Helm 3 soon. In the meantime, if you want to use Helm 3, refer to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ibrokethecloud/rancher-helm3"},"these instructions."))),(0,i.kt)("h3",{id:"install-tiller-on-the-cluster"},"Install Tiller on the Cluster"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Important:")," Due to an issue with Helm v2.12.0 and cert-manager, please use Helm v2.12.1 or higher.")),(0,i.kt)("p",null,"Helm installs the ",(0,i.kt)("inlineCode",{parentName:"p"},"tiller")," service on your cluster to manage charts. Since RKE enables RBAC by default we will need to use ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," to create a ",(0,i.kt)("inlineCode",{parentName:"p"},"serviceaccount")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"clusterrolebinding")," so ",(0,i.kt)("inlineCode",{parentName:"p"},"tiller")," has permission to deploy to the cluster."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create the ",(0,i.kt)("inlineCode",{parentName:"li"},"ServiceAccount")," in the ",(0,i.kt)("inlineCode",{parentName:"li"},"kube-system")," namespace."),(0,i.kt)("li",{parentName:"ul"},"Create the ",(0,i.kt)("inlineCode",{parentName:"li"},"ClusterRoleBinding")," to give the ",(0,i.kt)("inlineCode",{parentName:"li"},"tiller")," account access to the cluster."),(0,i.kt)("li",{parentName:"ul"},"Finally use ",(0,i.kt)("inlineCode",{parentName:"li"},"helm")," to install the ",(0,i.kt)("inlineCode",{parentName:"li"},"tiller")," service")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl -n kube-system create serviceaccount tiller\n\nkubectl create clusterrolebinding tiller \\\n  --clusterrole=cluster-admin \\\n  --serviceaccount=kube-system:tiller\n\nhelm init --service-account tiller\n\n# Users in China: You will need to specify a specific tiller-image in order to initialize tiller.\n# The list of tiller image tags are available here: https://dev.aliyun.com/detail.html?spm=5176.1972343.2.18.ErFNgC&repoId=62085.\n# When initializing tiller, you'll need to pass in --tiller-image\n\nhelm init --service-account tiller \\\n--tiller-image registry.cn-hangzhou.aliyuncs.com/google_containers/tiller:<tag>\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," This",(0,i.kt)("inlineCode",{parentName:"p"},"tiller"),"install has full cluster access, which should be acceptable if the cluster is dedicated to Rancher server. Check out the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.helm.sh/using_helm/#role-based-access-control"},"helm docs")," for restricting ",(0,i.kt)("inlineCode",{parentName:"p"},"tiller")," access to suit your security requirements.")),(0,i.kt)("h3",{id:"test-your-tiller-installation"},"Test your Tiller installation"),(0,i.kt)("p",null,"Run the following command to verify the installation of ",(0,i.kt)("inlineCode",{parentName:"p"},"tiller")," on your cluster:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'kubectl -n kube-system  rollout status deploy/tiller-deploy\nWaiting for deployment "tiller-deploy" rollout to finish: 0 of 1 updated replicas are available...\ndeployment "tiller-deploy" successfully rolled out\n')),(0,i.kt)("p",null,"And run the following command to validate Helm can talk to the ",(0,i.kt)("inlineCode",{parentName:"p"},"tiller")," service:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'helm version\nClient: &version.Version{SemVer:"v2.12.1", GitCommit:"02a47c7249b1fc6d8fd3b94e6b4babf9d818144e", GitTreeState:"clean"}\nServer: &version.Version{SemVer:"v2.12.1", GitCommit:"02a47c7249b1fc6d8fd3b94e6b4babf9d818144e", GitTreeState:"clean"}\n')),(0,i.kt)("h3",{id:"issues-or-errors"},"Issues or errors?"),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/helm-init/troubleshooting"},"Troubleshooting")," page."),(0,i.kt)("h3",{id:"next-install-rancher"},(0,i.kt)("a",{parentName:"h3",href:"/v2.0-v2.4/pages-for-subheaders/helm-rancher"},"Next: Install Rancher")))}d.isMDXComponent=!0}}]);