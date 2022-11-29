"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[53586],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,v=d["".concat(p,".").concat(m)]||d[m]||c[m]||a;return r?n.createElement(v,i(i({ref:t},u),{},{components:r})):n.createElement(v,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},27497:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],l={title:"\u914d\u7f6e\u6811\u5916 vSphere \u4e91\u63d0\u4f9b\u5546"},p=void 0,s={unversionedId:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/configure-out-of-tree-vsphere",id:"version-2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/configure-out-of-tree-vsphere",title:"\u914d\u7f6e\u6811\u5916 vSphere \u4e91\u63d0\u4f9b\u5546",description:"Kubernetes \u6b63\u5728\u9010\u6e10\u4e0d\u5728\u6811\u5185\u7ef4\u62a4\u4e91\u63d0\u4f9b\u5546\u3002vSphere \u6709\u4e00\u4e2a\u6811\u5916\u4e91\u63d0\u4f9b\u5546\uff0c\u53ef\u901a\u8fc7\u5b89\u88c5 vSphere \u4e91\u63d0\u4f9b\u5546\u548c\u4e91\u5b58\u50a8\u63d2\u4ef6\u6765\u4f7f\u7528\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/configure-out-of-tree-vsphere.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers",slug:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/configure-out-of-tree-vsphere",permalink:"/zh/v2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/configure-out-of-tree-vsphere",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/configure-out-of-tree-vsphere.md",tags:[],version:"2.6",lastUpdatedAt:1669187684,formattedLastUpdatedAt:"2022/11/23",frontMatter:{title:"\u914d\u7f6e\u6811\u5916 vSphere \u4e91\u63d0\u4f9b\u5546"},sidebar:"tutorialSidebar",previous:{title:"\u914d\u7f6e\u6811\u5185 vSphere \u4e91\u63d0\u4f9b\u5546",permalink:"/zh/v2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/configure-in-tree-vsphere"},next:{title:"\u5c06 vSphere \u6811\u5185\u5377\u8fc1\u79fb\u5230 CSI",permalink:"/zh/v2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/migrate-from-in-tree-to-out-of-tree"}},u={},c=[{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"1. \u521b\u5efa vSphere \u96c6\u7fa4",id:"1-\u521b\u5efa-vsphere-\u96c6\u7fa4",level:3},{value:"2. \u5b89\u88c5 CPI \u63d2\u4ef6",id:"2-\u5b89\u88c5-cpi-\u63d2\u4ef6",level:3},{value:"3. \u5b89\u88c5 CSI \u63d2\u4ef6",id:"3-\u5b89\u88c5-csi-\u63d2\u4ef6",level:3},{value:"\u4f7f\u7528 CSI \u9a71\u52a8\u6765\u7f6e\u5907\u5377",id:"\u4f7f\u7528-csi-\u9a71\u52a8\u6765\u7f6e\u5907\u5377",level:2}],d={toc:c};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Kubernetes \u6b63\u5728\u9010\u6e10\u4e0d\u5728\u6811\u5185\u7ef4\u62a4\u4e91\u63d0\u4f9b\u5546\u3002vSphere \u6709\u4e00\u4e2a\u6811\u5916\u4e91\u63d0\u4f9b\u5546\uff0c\u53ef\u901a\u8fc7\u5b89\u88c5 vSphere \u4e91\u63d0\u4f9b\u5546\u548c\u4e91\u5b58\u50a8\u63d2\u4ef6\u6765\u4f7f\u7528\u3002"),(0,a.kt)("p",null,"\u672c\u9875\u4ecb\u7ecd\u5982\u4f55\u5728\u542f\u52a8\u96c6\u7fa4\u540e\u5b89\u88c5 Cloud Provider Interface (CPI) \u548c Cloud Storage Interface (CSI) \u63d2\u4ef6\u3002"),(0,a.kt)("h2",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,a.kt)("p",null,"\u652f\u6301\u7684 vSphere \u7248\u672c\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"6.7u3"),(0,a.kt)("li",{parentName:"ul"},"7.0u1 \u6216\u66f4\u9ad8\u7248\u672c\u3002")),(0,a.kt)("p",null,"Kubernetes \u7248\u672c\u5fc5\u987b\u4e3a 1.19 \u6216\u66f4\u9ad8\u7248\u672c\u3002"),(0,a.kt)("p",null,"\u6811\u5916 vSphere \u4e91\u63d0\u4f9b\u5546\u8981\u6c42\u4f7f\u7528 Linux \u8282\u70b9\uff0c\u4e0d\u652f\u6301 Windows \u8282\u70b9\u3002"),(0,a.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,a.kt)("p",null,"\u5728\u5b89\u88c5\u4e91\u5b58\u50a8\u63a5\u53e3 (CSI) \u4e4b\u524d\uff0c\u5e94\u5148\u5b89\u88c5\u4e91\u63d0\u4f9b\u5546\u63a5\u53e3 (CPI)\u3002"),(0,a.kt)("h3",{id:"1-\u521b\u5efa-vsphere-\u96c6\u7fa4"},"1. \u521b\u5efa vSphere \u96c6\u7fa4"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5728",(0,a.kt)("strong",{parentName:"li"},"\u96c6\u7fa4"),"\u9875\u9762\u4e0a\uff0c\u5355\u51fb",(0,a.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"VMware vSphere")," \u6216 ",(0,a.kt)("strong",{parentName:"li"},"\u81ea\u5b9a\u4e49"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5728",(0,a.kt)("strong",{parentName:"li"},"\u96c6\u7fa4\u914d\u7f6e"),"\u7684",(0,a.kt)("strong",{parentName:"li"},"\u57fa\u672c\u4fe1\u606f"),"\u9009\u9879\u5361\u4e2d\uff0c\u5c06",(0,a.kt)("strong",{parentName:"li"},"\u4e91\u63d0\u4f9b\u5546"),"\u8bbe\u7f6e\u4e3a ",(0,a.kt)("strong",{parentName:"li"},"vSphere"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5728",(0,a.kt)("strong",{parentName:"li"},"\u9644\u52a0\u914d\u7f6e"),"\u9009\u9879\u5361\u4e2d\uff0c\u8bbe\u7f6e vSphere Cloud Provider (CPI) \u548c Storage Provider (CSI) \u9009\u9879\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5b8c\u6210\u96c6\u7fa4\u521b\u5efa\u3002")),(0,a.kt)("h3",{id:"2-\u5b89\u88c5-cpi-\u63d2\u4ef6"},"2. \u5b89\u88c5 CPI \u63d2\u4ef6"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u70b9\u51fb ",(0,a.kt)("strong",{parentName:"p"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u8f6c\u5230\u5c06\u5b89\u88c5 vSphere CPI \u63d2\u4ef6\u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,a.kt)("strong",{parentName:"p"},"Explore"),"\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5355\u51fb",(0,a.kt)("strong",{parentName:"p"},"\u5e94\u7528 & \u5e94\u7528\u5e02\u573a > Chart"),"\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5355\u51fb ",(0,a.kt)("strong",{parentName:"p"},"vSphere CPI"),"\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u586b\u5199\u6240\u9700\u7684 vCenter \u8be6\u7ec6\u4fe1\u606f\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"vSphere CPI \u4f7f\u7528 vSphere CSI \u9a71\u52a8\u6240\u9700\u7684 ProviderID \u6765\u521d\u59cb\u5316\u6240\u6709\u8282\u70b9\u3002\u5728\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88c5 CSI \u9a71\u52a8\u4e4b\u524d\uff0c\u68c0\u67e5\u662f\u5426\u6240\u6709\u8282\u70b9\u90fd\u4f7f\u7528 ProviderID \u8fdb\u884c\u4e86\u521d\u59cb\u5316\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'kubectl describe nodes | grep "ProviderID"\n')))),(0,a.kt)("h3",{id:"3-\u5b89\u88c5-csi-\u63d2\u4ef6"},"3. \u5b89\u88c5 CSI \u63d2\u4ef6"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u8f6c\u5230\u5c06\u5b89\u88c5 vSphere CSI \u63d2\u4ef6\u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,a.kt)("strong",{parentName:"li"},"\u5e94\u7528 & \u5e94\u7528\u5e02\u573a > Chart"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"vSphere CSI"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,a.kt)("strong",{parentName:"li"},"\u5b89\u88c5"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u586b\u5199\u6240\u9700\u7684 vCenter \u8be6\u7ec6\u4fe1\u606f\u3002\u5728",(0,a.kt)("strong",{parentName:"li"},"\u529f\u80fd"),"\u9009\u9879\u5361\u4e2d\uff0c\u5c06",(0,a.kt)("strong",{parentName:"li"},"\u542f\u7528 CSI \u8fc1\u79fb"),"\u8bbe\u7f6e\u4e3a ",(0,a.kt)("strong",{parentName:"li"},"false"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5728",(0,a.kt)("strong",{parentName:"li"},"\u5b58\u50a8"),"\u9009\u9879\u5361\u4e2d\uff0c\u586b\u5199 StorageClass \u7684\u8be6\u7ec6\u4fe1\u606f\u3002\u6b64 Chart \u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"csi.vsphere.vmware.com")," \u4f5c\u4e3a\u7f6e\u5907\u7a0b\u5e8f\u6765\u521b\u5efa\u4e00\u4e2a StorageClass\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,a.kt)("strong",{parentName:"li"},"\u5b89\u88c5"),"\u3002")),(0,a.kt)("h2",{id:"\u4f7f\u7528-csi-\u9a71\u52a8\u6765\u7f6e\u5907\u5377"},"\u4f7f\u7528 CSI \u9a71\u52a8\u6765\u7f6e\u5907\u5377"),(0,a.kt)("p",null,"CSI chart \u9ed8\u8ba4\u521b\u5efa\u4e00\u4e2a storageClass\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u5728\u542f\u52a8 chart \u65f6\u672a\u9009\u62e9\u8be5\u9009\u9879\uff0c\u8bf7\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"csi.vsphere.vmware.com")," \u4f5c\u4e3a\u7f6e\u5907\u7a0b\u5e8f\u6765\u521b\u5efa\u4e00\u4e2a storageClass\u3002"),(0,a.kt)("p",null,"\u4f7f\u7528\u6b64 StorageClass \u7f6e\u5907\u7684\u6240\u6709\u5377\u90fd\u5c06\u7531 CSI \u9a71\u52a8\u914d\u7f6e\u3002"))}m.isMDXComponent=!0}}]);