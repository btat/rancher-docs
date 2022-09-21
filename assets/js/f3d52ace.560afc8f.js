"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[80102],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return v}});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var a=o.createContext({}),l=function(e){var r=o.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},p=function(e){var r=l(e.components);return o.createElement(a.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},c=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(t),v=n,h=c["".concat(a,".").concat(v)]||c[v]||d[v]||i;return t?o.createElement(h,u(u({ref:r},p),{},{components:t})):o.createElement(h,u({ref:r},p))}));function v(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,u=new Array(i);u[0]=c;var s={};for(var a in r)hasOwnProperty.call(r,a)&&(s[a]=r[a]);s.originalType=e,s.mdxType="string"==typeof e?e:n,u[1]=s;for(var l=2;l<i;l++)u[l]=t[l];return o.createElement.apply(null,u)}return o.createElement.apply(null,t)}c.displayName="MDXCreateElement"},54039:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return a},default:function(){return v},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var o=t(87462),n=t(63366),i=(t(67294),t(3905)),u=["components"],s={title:"Setting up Cloud Providers",weight:2300,aliases:["/rancher/v2.5/en/concepts/clusters/cloud-providers/","/rancher/v2.5/en/cluster-provisioning/rke-clusters/options/cloud-providers","/rancher/v2.x/en/cluster-provisioning/rke-clusters/cloud-providers/"]},a=void 0,l={unversionedId:"pages-for-subheaders/set-up-cloud-providers",id:"version-2.5/pages-for-subheaders/set-up-cloud-providers",title:"Setting up Cloud Providers",description:"A cloud provider is a module in Kubernetes that provides an interface for managing nodes, load balancers, and networking routes.",source:"@site/versioned_docs/version-2.5/pages-for-subheaders/set-up-cloud-providers.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/set-up-cloud-providers",permalink:"/v2.5/pages-for-subheaders/set-up-cloud-providers",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/pages-for-subheaders/set-up-cloud-providers.md",tags:[],version:"2.5",lastUpdatedAt:1663710212,formattedLastUpdatedAt:"9/20/2022",frontMatter:{title:"Setting up Cloud Providers",weight:2300,aliases:["/rancher/v2.5/en/concepts/clusters/cloud-providers/","/rancher/v2.5/en/cluster-provisioning/rke-clusters/options/cloud-providers","/rancher/v2.x/en/cluster-provisioning/rke-clusters/cloud-providers/"]},sidebar:"tutorialSidebar",previous:{title:"Networking Requirements for Host Gateway (L2bridge)",permalink:"/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/network-requirements-for-host-gateway"},next:{title:"Other Cloud Providers",permalink:"/v2.5/pages-for-subheaders/other-cloud-providers"}},p={},d=[{value:"Setting up the Amazon Cloud Provider",id:"setting-up-the-amazon-cloud-provider",level:3},{value:"Setting up the Azure Cloud Provider",id:"setting-up-the-azure-cloud-provider",level:3},{value:"Setting up the GCE Cloud Provider",id:"setting-up-the-gce-cloud-provider",level:3},{value:"Setting up the vSphere Cloud Provider",id:"setting-up-the-vsphere-cloud-provider",level:3},{value:"Setting up a Custom Cloud Provider",id:"setting-up-a-custom-cloud-provider",level:3}],c={toc:d};function v(e){var r=e.components,t=(0,n.Z)(e,u);return(0,i.kt)("wrapper",(0,o.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A ",(0,i.kt)("em",{parentName:"p"},"cloud provider")," is a module in Kubernetes that provides an interface for managing nodes, load balancers, and networking routes."),(0,i.kt)("p",null,"When a cloud provider is set up in Rancher, the Rancher server can automatically provision new nodes, load balancers or persistent storage devices when launching Kubernetes definitions, if the cloud provider you're using supports such automation."),(0,i.kt)("p",null,"Your cluster will not provision correctly if you configure a cloud provider cluster of nodes that do not meet the prerequisites."),(0,i.kt)("p",null,"By default, the ",(0,i.kt)("strong",{parentName:"p"},"Cloud Provider")," option is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"None"),"."),(0,i.kt)("p",null,"The following cloud providers can be enabled:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Amazon"),(0,i.kt)("li",{parentName:"ul"},"Azure"),(0,i.kt)("li",{parentName:"ul"},"GCE (Google Compute Engine)"),(0,i.kt)("li",{parentName:"ul"},"vSphere")),(0,i.kt)("h3",{id:"setting-up-the-amazon-cloud-provider"},"Setting up the Amazon Cloud Provider"),(0,i.kt)("p",null,"For details on enabling the Amazon cloud provider, refer to ",(0,i.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/amazon"},"this page.")),(0,i.kt)("h3",{id:"setting-up-the-azure-cloud-provider"},"Setting up the Azure Cloud Provider"),(0,i.kt)("p",null,"For details on enabling the Azure cloud provider, refer to ",(0,i.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/azure"},"this page.")),(0,i.kt)("h3",{id:"setting-up-the-gce-cloud-provider"},"Setting up the GCE Cloud Provider"),(0,i.kt)("p",null,"For details on enabling the Google Compute Engine cloud provider, refer to ",(0,i.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/google-compute-engine"},"this page.")),(0,i.kt)("h3",{id:"setting-up-the-vsphere-cloud-provider"},"Setting up the vSphere Cloud Provider"),(0,i.kt)("p",null,"For details on enabling the vSphere cloud provider, refer to ",(0,i.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/vsphere-cloud-provider"},"this page.")),(0,i.kt)("h3",{id:"setting-up-a-custom-cloud-provider"},"Setting up a Custom Cloud Provider"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Custom")," cloud provider is available if you want to configure any Kubernetes cloud provider."),(0,i.kt)("p",null,"For the custom cloud provider option, you can refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/cloud-providers/"},"RKE docs")," on how to edit the yaml file for your specific cloud provider. There are specific cloud providers that have more detailed configuration:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/config-options/cloud-providercluster-provisioning/rke-clusters/cloud-providers/vsphere/"},"vSphere")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/config-options/cloud-providers/openstack/"},"OpenStack"))))}v.isMDXComponent=!0}}]);