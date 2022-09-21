"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[692],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,k=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(k,s(s({ref:t},p),{},{components:r})):n.createElement(k,s({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},42247:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return d}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),s=["components"],i={title:"Service Discovery",weight:3045,aliases:["/rancher/v2.5/en/tasks/workloads/add-a-dns-record/","/rancher/v2.5/en/k8s-in-rancher/service-discovery","/rancher/v2.x/en/k8s-in-rancher/service-discovery/"]},c=void 0,l={unversionedId:"how-to-guides/new-user-guides/kubernetes-resources-setup/create-services",id:"version-2.5/how-to-guides/new-user-guides/kubernetes-resources-setup/create-services",title:"Service Discovery",description:"For every workload created, a complementing Service Discovery entry is created. This Service Discovery entry enables DNS resolution for the workload's pods using the following naming convention:",source:"@site/versioned_docs/version-2.5/how-to-guides/new-user-guides/kubernetes-resources-setup/create-services.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-resources-setup",slug:"/how-to-guides/new-user-guides/kubernetes-resources-setup/create-services",permalink:"/v2.5/how-to-guides/new-user-guides/kubernetes-resources-setup/create-services",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/new-user-guides/kubernetes-resources-setup/create-services.md",tags:[],version:"2.5",lastUpdatedAt:1663710212,formattedLastUpdatedAt:"9/20/2022",frontMatter:{title:"Service Discovery",weight:3045,aliases:["/rancher/v2.5/en/tasks/workloads/add-a-dns-record/","/rancher/v2.5/en/k8s-in-rancher/service-discovery","/rancher/v2.x/en/k8s-in-rancher/service-discovery/"]},sidebar:"tutorialSidebar",previous:{title:"Adding Ingresses to Your Project",permalink:"/v2.5/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/add-ingresses"},next:{title:"Encrypting HTTP Communication",permalink:"/v2.5/how-to-guides/new-user-guides/kubernetes-resources-setup/encrypt-http-communication"}},p={},d=[{value:"Related Links",id:"related-links",level:2}],u={toc:d};function m(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"For every workload created, a complementing Service Discovery entry is created. This Service Discovery entry enables DNS resolution for the workload's pods using the following naming convention:\n",(0,o.kt)("inlineCode",{parentName:"p"},"<workload>.<namespace>.svc.cluster.local"),"."),(0,o.kt)("p",null,"However, you also have the option of creating additional Service Discovery records. You can use these additional records so that a given namespace resolves with one or more external IP addresses, an external hostname, an alias to another DNS record, other workloads, or a set of pods that match a selector that you create."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the ",(0,o.kt)("strong",{parentName:"p"},"Global")," view, open the project that you want to add a DNS record to.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Resources")," in the main navigation bar. Click the ",(0,o.kt)("strong",{parentName:"p"},"Service Discovery")," tab. Then click ",(0,o.kt)("strong",{parentName:"p"},"Add Record"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter a ",(0,o.kt)("strong",{parentName:"p"},"Name")," for the DNS record. This name is used for DNS resolution.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select a ",(0,o.kt)("strong",{parentName:"p"},"Namespace")," from the drop-down list. Alternatively, you can create a new namespace on the fly by clicking ",(0,o.kt)("strong",{parentName:"p"},"Add to a new namespace"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select one of the ",(0,o.kt)("strong",{parentName:"p"},"Resolves To")," options to route requests to the DNS record."),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"One or more external IP addresses")),(0,o.kt)("p",{parentName:"li"},"Enter an IP address in the ",(0,o.kt)("strong",{parentName:"p"},"Target IP Addresses")," field. Add more IP addresses by clicking ",(0,o.kt)("strong",{parentName:"p"},"Add Target IP"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"An external hostname")),(0,o.kt)("p",{parentName:"li"},"Enter a ",(0,o.kt)("strong",{parentName:"p"},"Target Hostname"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Alias of another DNS record's value")),(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Add Target Record")," and select another DNS record from the ",(0,o.kt)("strong",{parentName:"p"},"Value")," drop-down.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"One or more workloads")),(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Add Target Workload")," and select another workload from the ",(0,o.kt)("strong",{parentName:"p"},"Value")," drop-down.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"The set of pods which match a selector")),(0,o.kt)("p",{parentName:"li"},"Enter key value pairs of ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors"},"label selectors")," to create a record for all pods that match your parameters.")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Create")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," A new DNS record is created."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You can view the record by from the project's ",(0,o.kt)("strong",{parentName:"li"},"Service Discovery")," tab."),(0,o.kt)("li",{parentName:"ul"},"When you visit the new DNS name for the new record that you created (",(0,o.kt)("inlineCode",{parentName:"li"},"<recordname>.<namespace>.svc.cluster.local"),"), it resolves the chosen namespace.")),(0,o.kt)("h2",{id:"related-links"},"Related Links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/services-networking/add-entries-to-pod-etc-hosts-with-host-aliases/"},"Adding entries to Pod /etc/hosts with HostAliases"))))}m.isMDXComponent=!0}}]);