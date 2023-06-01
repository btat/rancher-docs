"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[57256],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6379:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={title:"Role-Based Access Control"},i=void 0,s={unversionedId:"reference-guides/prometheus-federator/rbac",id:"reference-guides/prometheus-federator/rbac",title:"Role-Based Access Control",description:"This section describes the expectations for Role-Based Access Control (RBAC) for Prometheus Federator.",source:"@site/docs/reference-guides/prometheus-federator/rbac.md",sourceDirName:"reference-guides/prometheus-federator",slug:"/reference-guides/prometheus-federator/rbac",permalink:"/reference-guides/prometheus-federator/rbac",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/prometheus-federator/rbac.md",tags:[],version:"current",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"Sep 23, 2022",frontMatter:{title:"Role-Based Access Control"},sidebar:"tutorialSidebar",previous:{title:"Prometheus Federator",permalink:"/pages-for-subheaders/prometheus-federator"},next:{title:"User Settings",permalink:"/pages-for-subheaders/user-settings"}},l={},c=[],p={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This section describes the expectations for Role-Based Access Control (RBAC) for Prometheus Federator."),(0,a.kt)("p",null,"As described in the section on ",(0,a.kt)("a",{parentName:"p",href:"/pages-for-subheaders/prometheus-federator#namespaces"},"namespaces"),", Prometheus Federator expects that Project Owners, Project Members, and other users in the cluster with Project-level permissions (e.g. permissions in a certain set of namespaces identified by a single label selector) have minimal permissions in any namespaces except the Project Registration Namespace (which is imported into the project by default) and those that already comprise their projects. Therefore, in order to allow Project Owners to assign specific chart permissions to other users in their Project namespaces, the Helm Project Operator will automatically watch the following bindings:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ClusterRoleBindings"),(0,a.kt)("li",{parentName:"ul"},"RoleBindings in the Project Release Namespace")),(0,a.kt)("p",null,"On observing a change to one of those types of bindings, the Helm Project Operator will check whether the ",(0,a.kt)("inlineCode",{parentName:"p"},"roleRef")," that the the binding points to matches a ClusterRole with the name provided under:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"helmProjectOperator.releaseRoleBindings.clusterRoleRefs.admin")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"helmProjectOperator.releaseRoleBindings.clusterRoleRefs.edit")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"helmProjectOperator.releaseRoleBindings.clusterRoleRefs.view"))),(0,a.kt)("p",null,"By default, these roleRefs will correspond to ",(0,a.kt)("inlineCode",{parentName:"p"},"admin"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"edit"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"view")," respectively, which are the ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles"},"default Kubernetes user-facing roles"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"For Rancher RBAC users, these ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles"},"default Kubernetes user-facing roles")," directly correlate to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Project Owner"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Project Member"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"Read-Only")," default Project Role Templates.")),(0,a.kt)("p",null,"If the ",(0,a.kt)("inlineCode",{parentName:"p"},"roleRef")," matches, the Helm Project Operator will filter the ",(0,a.kt)("inlineCode",{parentName:"p"},"subjects")," of the binding for all Users and Groups and use that to automatically construct a RoleBinding for each Role in the Project Release Namespace with the same name as the role and the following labels:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"helm.cattle.io/project-helm-chart-role: {{ .Release.Name }}")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"helm.cattle.io/project-helm-chart-role-aggregate-from: <admin|edit|view>"))),(0,a.kt)("p",null,"By default, ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher-project-monitoring"),", the underlying chart deployed by Prometheus Federator, creates three default Roles per Project Release Namespace that provide ",(0,a.kt)("inlineCode",{parentName:"p"},"admin"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"edit"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"view")," users to permissions to view the Prometheus, Alertmanager, and Grafana UIs of the Project Monitoring Stack to provide least privilege. However, if a Cluster Admin would like to assign additional permissions to certain users, they can either directly assign RoleBindings in the Project Release Namespace to certain users or create Roles with the above two labels on them to allow Project Owners to control assigning those RBAC roles to users in their Project Registration namespaces."))}d.isMDXComponent=!0}}]);