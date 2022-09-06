"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[60275],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return c}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=u(a),c=r,m=h["".concat(l,".").concat(c)]||h[c]||p[c]||o;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},41151:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],s={title:"Upgrading Kubernetes without Upgrading Rancher",weight:1120,aliases:["/rancher/v2.x/en/admin-settings/k8s-metadata/"]},l=void 0,u={unversionedId:"getting-started/installation-and-upgrade/upgrade-kubernetes-without-upgrading-rancher",id:"version-2.5/getting-started/installation-and-upgrade/upgrade-kubernetes-without-upgrading-rancher",title:"Upgrading Kubernetes without Upgrading Rancher",description:"The RKE metadata feature allows you to provision clusters with new versions of Kubernetes as soon as they are released, without upgrading Rancher. This feature is useful for taking advantage of patch versions of Kubernetes, for example, if you want to upgrade to Kubernetes v1.14.7 when your Rancher server originally supported v1.14.6.",source:"@site/versioned_docs/version-2.5/getting-started/installation-and-upgrade/upgrade-kubernetes-without-upgrading-rancher.md",sourceDirName:"getting-started/installation-and-upgrade",slug:"/getting-started/installation-and-upgrade/upgrade-kubernetes-without-upgrading-rancher",permalink:"/rancher-docs/v2.5/getting-started/installation-and-upgrade/upgrade-kubernetes-without-upgrading-rancher",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/getting-started/installation-and-upgrade/upgrade-kubernetes-without-upgrading-rancher.md",tags:[],version:"2.5",lastUpdatedAt:1660949308,formattedLastUpdatedAt:"8/19/2022",frontMatter:{title:"Upgrading Kubernetes without Upgrading Rancher",weight:1120,aliases:["/rancher/v2.x/en/admin-settings/k8s-metadata/"]},sidebar:"tutorialSidebar",previous:{title:"Upgrading and Rolling Back Kubernetes",permalink:"/rancher-docs/v2.5/getting-started/installation-and-upgrade/upgrade-and-roll-back-kubernetes"},next:{title:"Advanced",permalink:"/rancher-docs/v2.5/pages-for-subheaders/advanced-options"}},d={},p=[{value:"Refresh Kubernetes Metadata",id:"refresh-kubernetes-metadata",level:3},{value:"Configuring the Metadata Synchronization",id:"configuring-the-metadata-synchronization",level:3},{value:"Air Gap Setups",id:"air-gap-setups",level:3}],h={toc:p};function c(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The RKE metadata feature allows you to provision clusters with new versions of Kubernetes as soon as they are released, without upgrading Rancher. This feature is useful for taking advantage of patch versions of Kubernetes, for example, if you want to upgrade to Kubernetes v1.14.7 when your Rancher server originally supported v1.14.6."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," The Kubernetes API can change between minor versions. Therefore, we don't support introducing minor Kubernetes versions, such as introducing v1.15 when Rancher currently supports v1.14. You would need to upgrade Rancher to add support for minor Kubernetes versions.")),(0,o.kt)("p",null,"Rancher's Kubernetes metadata contains information specific to the Kubernetes version that Rancher uses to provision ",(0,o.kt)("a",{parentName:"p",href:"/rancher-docs/v2.5/pages-for-subheaders/launch-kubernetes-with-rancher"},"RKE clusters"),". Rancher syncs the data periodically and creates custom resource definitions (CRDs) for ",(0,o.kt)("strong",{parentName:"p"},"system images,")," ",(0,o.kt)("strong",{parentName:"p"},"service options")," and ",(0,o.kt)("strong",{parentName:"p"},"addon templates.")," Consequently, when a new Kubernetes version is compatible with the Rancher server version, the Kubernetes metadata makes the new version available to Rancher for provisioning clusters. The metadata gives you an overview of the information that the ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/"},"Rancher Kubernetes Engine")," (RKE) uses for deploying various Kubernetes versions."),(0,o.kt)("p",null,"This table below describes the CRDs that are affected by the periodic data sync. "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," Only administrators can edit metadata CRDs. It is recommended not to update existing objects unless explicitly advised.")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Resource"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Rancher API URL"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"System Images"),(0,o.kt)("td",{parentName:"tr",align:null},"List of system images used to deploy Kubernetes through RKE."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"<RANCHER_SERVER_URL>/v3/rkek8ssystemimages"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Service Options"),(0,o.kt)("td",{parentName:"tr",align:null},"Default options passed to Kubernetes components like ",(0,o.kt)("inlineCode",{parentName:"td"},"kube-api"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"scheduler"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"kubelet"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"kube-proxy"),", and ",(0,o.kt)("inlineCode",{parentName:"td"},"kube-controller-manager")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"<RANCHER_SERVER_URL>/v3/rkek8sserviceoptions"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Addon Templates"),(0,o.kt)("td",{parentName:"tr",align:null},"YAML definitions used to deploy addon components like Canal, Calico, Flannel, Weave, Kube-dns, CoreDNS, ",(0,o.kt)("inlineCode",{parentName:"td"},"metrics-server"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"nginx-ingress")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"<RANCHER_SERVER_URL>/v3/rkeaddons"))))),(0,o.kt)("p",null,"Administrators might configure the RKE metadata settings to do the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Refresh the Kubernetes metadata, if a new patch version of Kubernetes comes out and they want Rancher to provision clusters with the latest version of Kubernetes without having to upgrade Rancher"),(0,o.kt)("li",{parentName:"ul"},"Change the metadata URL that Rancher uses to sync the metadata, which is useful for air gap setups if you need to sync Rancher locally instead of with GitHub"),(0,o.kt)("li",{parentName:"ul"},"Prevent Rancher from auto-syncing the metadata, which is one way to prevent new and unsupported Kubernetes versions from being available in Rancher")),(0,o.kt)("h3",{id:"refresh-kubernetes-metadata"},"Refresh Kubernetes Metadata"),(0,o.kt)("p",null,"The option to refresh the Kubernetes metadata is available for administrators by default, or for any user who has the ",(0,o.kt)("strong",{parentName:"p"},"Manage Cluster Drivers")," ",(0,o.kt)("a",{parentName:"p",href:"/rancher-docs/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"global role.")),(0,o.kt)("p",null,"To force Rancher to refresh the Kubernetes metadata, a manual refresh action is available under ",(0,o.kt)("strong",{parentName:"p"},"Tools > Drivers > Refresh Kubernetes Metadata")," on the right side corner. "),(0,o.kt)("p",null,"You can configure Rancher to only refresh metadata when desired by setting ",(0,o.kt)("inlineCode",{parentName:"p"},"refresh-interval-minutes")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," (see below) and using this button to perform the metadata refresh manually when desired."),(0,o.kt)("h3",{id:"configuring-the-metadata-synchronization"},"Configuring the Metadata Synchronization"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Only administrators can change these settings.")),(0,o.kt)("p",null,"The RKE metadata config controls how often Rancher syncs metadata and where it downloads data from. You can configure the metadata from the settings in the Rancher UI, or through the Rancher API at the endpoint ",(0,o.kt)("inlineCode",{parentName:"p"},"v3/settings/rke-metadata-config"),"."),(0,o.kt)("p",null,"The way that the metadata is configured depends on the Rancher version."),(0,o.kt)("p",null,"To edit the metadata config in Rancher,"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to the ",(0,o.kt)("strong",{parentName:"li"},"Global")," view and click the ",(0,o.kt)("strong",{parentName:"li"},"Settings")," tab."),(0,o.kt)("li",{parentName:"ol"},"Go to the ",(0,o.kt)("strong",{parentName:"li"},"rke-metadata-config")," section. Click the ",(0,o.kt)("strong",{parentName:"li"},"\u22ee")," and click ",(0,o.kt)("strong",{parentName:"li"},"Edit.")),(0,o.kt)("li",{parentName:"ol"},"You can optionally fill in the following parameters:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"refresh-interval-minutes"),": This is the amount of time that Rancher waits to sync the metadata. To disable the periodic refresh, set ",(0,o.kt)("inlineCode",{parentName:"li"},"refresh-interval-minutes")," to 0."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"url"),": This is the HTTP path that Rancher fetches data from. The path must be a direct path to a JSON file. For example, the default URL for Rancher v2.4 is ",(0,o.kt)("inlineCode",{parentName:"li"},"https://releases.rancher.com/kontainer-driver-metadata/release-v2.4/data.json"),".")),(0,o.kt)("p",null,"If you don't have an air gap setup, you don't need to specify the URL where Rancher gets the metadata, because the default setting is to pull from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher/kontainer-driver-metadata/blob/dev-v2.5/data/data.json"},"Rancher's metadata Git repository.")),(0,o.kt)("p",null,"However, if you have an ",(0,o.kt)("a",{parentName:"p",href:"#air-gap-setups"},"air gap setup,")," you will need to mirror the Kubernetes metadata repository in a location available to Rancher. Then you need to change the URL to point to the new location of the JSON file."),(0,o.kt)("h3",{id:"air-gap-setups"},"Air Gap Setups"),(0,o.kt)("p",null,"Rancher relies on a periodic refresh of the ",(0,o.kt)("inlineCode",{parentName:"p"},"rke-metadata-config")," to download new Kubernetes version metadata if it is supported with the current version of the Rancher server. For a table of compatible Kubernetes and Rancher versions, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/support-maintenance-terms/all-supported-versions/rancher-v2.2.8/"},"service terms section.")),(0,o.kt)("p",null,"If you have an air gap setup, you might not be able to get the automatic periodic refresh of the Kubernetes metadata from Rancher's Git repository. In that case, you should disable the periodic refresh to prevent your logs from showing errors. Optionally, you can configure your metadata settings so that Rancher can sync with a local copy of the RKE metadata."),(0,o.kt)("p",null,"To sync Rancher with a local mirror of the RKE metadata, an administrator would configure the ",(0,o.kt)("inlineCode",{parentName:"p"},"rke-metadata-config")," settings to point to the mirror. For details, refer to ",(0,o.kt)("a",{parentName:"p",href:"#configuring-the-metadata-synchronization"},"Configuring the Metadata Synchronization.")),(0,o.kt)("p",null,"After new Kubernetes versions are loaded into the Rancher setup, additional steps would be required in order to use them for launching clusters. Rancher needs access to updated system images. While the metadata settings can only be changed by administrators, any user can download the Rancher system images and prepare a private Docker registry for them."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"To download the system images for the private registry, click the Rancher server version at the bottom left corner of the Rancher UI."),(0,o.kt)("li",{parentName:"ol"},"Download the OS specific image lists for Linux or Windows."),(0,o.kt)("li",{parentName:"ol"},"Download ",(0,o.kt)("inlineCode",{parentName:"li"},"rancher-images.txt"),"."),(0,o.kt)("li",{parentName:"ol"},"Prepare the private registry using the same steps during the ",(0,o.kt)("a",{parentName:"li",href:"/rancher-docs/v2.5/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/publish-images"},"air gap install"),", but instead of using the ",(0,o.kt)("inlineCode",{parentName:"li"},"rancher-images.txt")," from the releases page, use the one obtained from the previous steps.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," The air gap installation of Rancher can now sync the Kubernetes metadata. If you update your private registry when new versions of Kubernetes are released, you can provision clusters with the new version without having to upgrade Rancher."))}c.isMDXComponent=!0}}]);