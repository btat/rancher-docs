"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[90289],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(n),c=r,g=u["".concat(s,".").concat(c)]||u[c]||m[c]||i;return n?a.createElement(g,l(l({ref:t},p),{},{components:n})):a.createElement(g,l({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},62586:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const i={title:"Role-based Access Control"},l=void 0,o={unversionedId:"integrations-in-rancher/monitoring-and-alerting/rbac-for-monitoring",id:"integrations-in-rancher/monitoring-and-alerting/rbac-for-monitoring",title:"Role-based Access Control",description:"This section describes the expectations for RBAC for Rancher Monitoring.",source:"@site/docs/integrations-in-rancher/monitoring-and-alerting/rbac-for-monitoring.md",sourceDirName:"integrations-in-rancher/monitoring-and-alerting",slug:"/integrations-in-rancher/monitoring-and-alerting/rbac-for-monitoring",permalink:"/integrations-in-rancher/monitoring-and-alerting/rbac-for-monitoring",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/integrations-in-rancher/monitoring-and-alerting/rbac-for-monitoring.md",tags:[],version:"current",lastUpdatedAt:1683048492,formattedLastUpdatedAt:"May 2, 2023",frontMatter:{title:"Role-based Access Control"},sidebar:"tutorialSidebar",previous:{title:"How Monitoring Works",permalink:"/integrations-in-rancher/monitoring-and-alerting/how-monitoring-works"},next:{title:"Built-in Dashboards",permalink:"/integrations-in-rancher/monitoring-and-alerting/built-in-dashboards"}},s={},d=[{value:"Cluster Admins",id:"cluster-admins",level:2},{value:"Users with Kubernetes ClusterRole-based Permissions",id:"users-with-kubernetes-clusterrole-based-permissions",level:2},{value:"Users with Kubernetes Admin/Edit Permissions",id:"users-with-kubernetes-adminedit-permissions",level:3},{value:"Users with Kubernetes View Permissions",id:"users-with-kubernetes-view-permissions",level:3},{value:"Additional Monitoring Roles",id:"additional-monitoring-roles",level:3},{value:"Assigning Monitoring Roles through Custom Roles",id:"assigning-monitoring-roles-through-custom-roles",level:3},{value:"Additional Monitoring ClusterRoles",id:"additional-monitoring-clusterroles",level:3},{value:"Assigning Roles and ClusterRoles with kubectl",id:"assigning-roles-and-clusterroles-with-kubectl",level:3},{value:"Using <code>kubectl create</code>",id:"using-kubectl-create",level:4},{value:"Using YAML Files",id:"using-yaml-files",level:4},{value:"Users with Rancher Based Permissions",id:"users-with-rancher-based-permissions",level:2},{value:"Differences in 2.5.x",id:"differences-in-25x",level:3},{value:"Assigning Additional Access",id:"assigning-additional-access",level:3},{value:"Role-based Access Control for Grafana",id:"role-based-access-control-for-grafana",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},m=p("Tabs"),u=p("TabItem"),c={toc:d};function g(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This section describes the expectations for RBAC for Rancher Monitoring."),(0,r.kt)("h2",{id:"cluster-admins"},"Cluster Admins"),(0,r.kt)("p",null,"By default, only those with the cluster-admin ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterRole")," should be able to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install the ",(0,r.kt)("inlineCode",{parentName:"li"},"rancher-monitoring")," App onto a cluster and all other relevant configuration performed on the chart deploy",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"e.g. whether default dashboards are created, what exporters are deployed onto the cluster to collect metrics, etc."))),(0,r.kt)("li",{parentName:"ul"},"Create / modify / delete Prometheus deployments in the cluster via Prometheus CRs"),(0,r.kt)("li",{parentName:"ul"},"Create / modify / delete Alertmanager deployments in the cluster via Alertmanager CRs"),(0,r.kt)("li",{parentName:"ul"},"Persist new Grafana dashboards or datasources via creating ConfigMaps in the appropriate namespace"),(0,r.kt)("li",{parentName:"ul"},"Expose certain Prometheus metrics to the k8s Custom Metrics API for HPA via a Secret in the ",(0,r.kt)("inlineCode",{parentName:"li"},"cattle-monitoring-system")," namespace")),(0,r.kt)("h2",{id:"users-with-kubernetes-clusterrole-based-permissions"},"Users with Kubernetes ClusterRole-based Permissions"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"rancher-monitoring")," chart installs the following three ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterRoles"),". By default, they aggregate into the corresponding k8s ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterRoles"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ClusterRole"),(0,r.kt)("th",{parentName:"tr",align:null},"Aggregates To Default K8s ClusterRole"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"monitoring-admin")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"admin"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"monitoring-edit")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"edit"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"monitoring-view")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"view "))))),(0,r.kt)("p",null,"These ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterRoles")," provide different levels of access to the Monitoring CRDs based on the actions that can be performed:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"CRDs (monitoring.coreos.com)"),(0,r.kt)("th",{parentName:"tr",align:null},"Admin"),(0,r.kt)("th",{parentName:"tr",align:null},"Edit"),(0,r.kt)("th",{parentName:"tr",align:null},"View"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"prometheuses")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"alertmanagers")))),(0,r.kt)("td",{parentName:"tr",align:null},"Get, List, Watch"),(0,r.kt)("td",{parentName:"tr",align:null},"Get, List, Watch"),(0,r.kt)("td",{parentName:"tr",align:null},"Get, List, Watch")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"servicemonitors")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"podmonitors")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"prometheusrules")))),(0,r.kt)("td",{parentName:"tr",align:null},"*"),(0,r.kt)("td",{parentName:"tr",align:null},"*"),(0,r.kt)("td",{parentName:"tr",align:null},"Get, List, Watch")))),(0,r.kt)("p",null,"On a high level, the following permissions are assigned by default as a result."),(0,r.kt)("h3",{id:"users-with-kubernetes-adminedit-permissions"},"Users with Kubernetes Admin/Edit Permissions"),(0,r.kt)("p",null,"Only those with the the cluster-admin, admin or edit ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterRole")," should be able to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Modify the scrape configuration of Prometheus deployments via ServiceMonitor and PodMonitor CRs"),(0,r.kt)("li",{parentName:"ul"},"Modify the alerting / recording rules of a Prometheus deployment via PrometheusRules CRs")),(0,r.kt)("h3",{id:"users-with-kubernetes-view-permissions"},"Users with Kubernetes View Permissions"),(0,r.kt)("p",null,"Only those with who have some Kubernetes ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterRole")," should be able to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"View the configuration of Prometheuses that are deployed within the cluster"),(0,r.kt)("li",{parentName:"ul"},"View the configuration of Alertmanagers that are deployed within the cluster"),(0,r.kt)("li",{parentName:"ul"},"View the scrape configuration of Prometheus deployments via ServiceMonitor and PodMonitor CRs"),(0,r.kt)("li",{parentName:"ul"},"View the alerting/recording rules of a Prometheus deployment via PrometheusRules CRs")),(0,r.kt)("h3",{id:"additional-monitoring-roles"},"Additional Monitoring Roles"),(0,r.kt)("p",null,"Monitoring also creates additional ",(0,r.kt)("inlineCode",{parentName:"p"},"Roles")," that are not assigned to users by default but are created within the cluster. They can be bound to a namespace by deploying a ",(0,r.kt)("inlineCode",{parentName:"p"},"RoleBinding")," that references it. To define a ",(0,r.kt)("inlineCode",{parentName:"p"},"RoleBinding")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," instead of through Rancher, click ",(0,r.kt)("a",{parentName:"p",href:"#assigning-roles-and-clusterroles-with-kubectl"},"here"),"."),(0,r.kt)("p",null,"Admins should use these roles to provide more fine-grained access to users:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Role"),(0,r.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"monitoring-config-admin"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow admins to assign roles to users to be able to view / modify Secrets and ConfigMaps within the cattle-monitoring-system namespace. Modifying Secrets / ConfigMaps in this namespace could allow users to alter the cluster's Alertmanager configuration, Prometheus Adapter configuration, additional Grafana datasources, TLS secrets, etc.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"monitoring-config-edit"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow admins to assign roles to users to be able to view / modify Secrets and ConfigMaps within the cattle-monitoring-system namespace. Modifying Secrets / ConfigMaps in this namespace could allow users to alter the cluster's Alertmanager configuration, Prometheus Adapter configuration, additional Grafana datasources, TLS secrets, etc.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"monitoring-config-view"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow admins to assign roles to users to be able to view Secrets and ConfigMaps within the cattle-monitoring-system namespace. Viewing Secrets / ConfigMaps in this namespace could allow users to observe the cluster's Alertmanager configuration, Prometheus Adapter configuration, additional Grafana datasources, TLS secrets, etc.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"monitoring-dashboard-admin"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow admins to assign roles to users to be able to edit / view ConfigMaps within the cattle-dashboards namespace. ConfigMaps in this namespace will correspond to Grafana Dashboards that are persisted onto the cluster.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"monitoring-dashboard-edit"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow admins to assign roles to users to be able to edit / view ConfigMaps within the cattle-dashboards namespace. ConfigMaps in this namespace will correspond to Grafana Dashboards that are persisted onto the cluster.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"monitoring-dashboard-view"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow admins to assign roles to users to be able to view ConfigMaps within the cattle-dashboards namespace. ConfigMaps in this namespace will correspond to Grafana Dashboards that are persisted onto the cluster.")))),(0,r.kt)("h3",{id:"assigning-monitoring-roles-through-custom-roles"},"Assigning Monitoring Roles through Custom Roles"),(0,r.kt)("p",null,'Admins may assign custom roles in the Rancher UI for admin, editing, and viewing monitoring. These "roles" are created by default when the monitoring app is installed. Additionally, these roles are also deployed to the corresponding Kubernetes roles: admin, edit, and view ',(0,r.kt)("inlineCode",{parentName:"p"},"ClusterRoles"),"."),(0,r.kt)("admonition",{title:"Important",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The UI won't offer ",(0,r.kt)("inlineCode",{parentName:"p"},"monitoring-admin"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"monitoring-edit"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"monitoring-view")," options when users are being added to a cluster. These monitoring roles can only be assigned by manually creating a custom role that inherits from Project Owner and Project Monitoring View roles.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create the custom role:"),(0,r.kt)("p",{parentName:"li"},"1.1 Click ",(0,r.kt)("strong",{parentName:"p"},"\u2630 > Users & Authentication > Roles"),"."),(0,r.kt)("p",{parentName:"li"},"1.2 Select the appropriate tab, e.g., ",(0,r.kt)("strong",{parentName:"p"},"Cluster")," role. Then click ",(0,r.kt)("strong",{parentName:"p"},"Create Cluster Role"),"."),(0,r.kt)("p",{parentName:"li"},"1.3 In the ",(0,r.kt)("strong",{parentName:"p"},"Name")," field, create a custom role such as ",(0,r.kt)("inlineCode",{parentName:"p"},"View Monitoring"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Edit Monitoring"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"Admin Monitoring"),"."),(0,r.kt)("p",{parentName:"li"},"1.4 Click ",(0,r.kt)("strong",{parentName:"p"},"Inherit From > Add Resource"),", then select the Kubernetes role, as applicable, from the dropdown."),(0,r.kt)("p",{parentName:"li"},"1.5 Click ",(0,r.kt)("strong",{parentName:"p"},"Create"),"."))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Assign the custom role to a new user:"),(0,r.kt)("p",{parentName:"li"},"2.1 Click ",(0,r.kt)("strong",{parentName:"p"},"\u2630 > Cluster Management > Cluster Explore > Cluster > Cluster Members > Add"),"."),(0,r.kt)("p",{parentName:"li"},"2.2 Search for your new user name from ",(0,r.kt)("strong",{parentName:"p"},"Select Member")," options displayed."),(0,r.kt)("p",{parentName:"li"},"2.3 Assign the new custom role from ",(0,r.kt)("strong",{parentName:"p"},"Cluster Permissions")," to the new user."),(0,r.kt)("p",{parentName:"li"},"2.4 Click ",(0,r.kt)("strong",{parentName:"p"},"Create"),"."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," The new user should now be able to see the monitoring tools."),(0,r.kt)("h3",{id:"additional-monitoring-clusterroles"},"Additional Monitoring ClusterRoles"),(0,r.kt)("p",null,"Monitoring also creates additional ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterRoles")," that aren't assigned to users by default but are created within the cluster. They aren't aggregated by default but can be bound to a namespace by deploying a ",(0,r.kt)("inlineCode",{parentName:"p"},"RoleBinding")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterRoleBinding")," that references it. To define a ",(0,r.kt)("inlineCode",{parentName:"p"},"RoleBinding")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," instead of through Rancher, click ",(0,r.kt)("a",{parentName:"p",href:"#assigning-roles-and-clusterroles-with-kubectl"},"here"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Role"),(0,r.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"monitoring-ui-view"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{id:"monitoring-ui-view"}),(0,r.kt)("em",{parentName:"td"},"Available as of Monitoring v2 14.5.100+")," This ClusterRole allows users to view metrics graphs for the specified cluster in the Rancher UI. This is done by granting read-only access to external Monitoring UIs. Users with this role have permission to list the Prometheus, Alertmanager, and Grafana endpoints and make GET requests to Prometheus, Grafana, and Alertmanager UIs through the Rancher proxy.")))),(0,r.kt)("h3",{id:"assigning-roles-and-clusterroles-with-kubectl"},"Assigning Roles and ClusterRoles with kubectl"),(0,r.kt)("h4",{id:"using-kubectl-create"},"Using ",(0,r.kt)("inlineCode",{parentName:"h4"},"kubectl create")),(0,r.kt)("p",null,"One method is to use either ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl create clusterrolebinding")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl create rolebinding")," to assign a ",(0,r.kt)("inlineCode",{parentName:"p"},"Role")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterRole"),". This is shown in the following examples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Assign to a specific user:"),(0,r.kt)(m,{groupId:"role-type",mdxType:"Tabs"},(0,r.kt)(u,{value:"clusterrolebinding",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl create clusterrolebinding my-binding --clusterrole=monitoring-ui-view --user=u-l4npx\n"))),(0,r.kt)(u,{value:"rolebinding",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl create rolebinding my-binding --clusterrole=monitoring-ui-view --user=u-l4npx --namespace=my-namespace\n"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Assign to all authenticated users:"),(0,r.kt)(m,{groupId:"role-type",mdxType:"Tabs"},(0,r.kt)(u,{value:"clusterrolebinding",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl create clusterrolebinding my-binding --clusterrole=monitoring-ui-view --group=system:authenticated\n"))),(0,r.kt)(u,{value:"rolebinding",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl create rolebinding my-binding --clusterrole=monitoring-ui-view --group=system:authenticated --namespace=my-namespace\n")))))),(0,r.kt)("h4",{id:"using-yaml-files"},"Using YAML Files"),(0,r.kt)("p",null,"Another method is to define bindings in YAML files that you create. You must first configure the ",(0,r.kt)("inlineCode",{parentName:"p"},"RoleBinding")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterRoleBinding")," with a YAML file. Then, apply the configuration changes by running the ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl apply")," command."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Roles"),": Below is an example YAML file to help you configure ",(0,r.kt)("inlineCode",{parentName:"li"},"RoleBindings")," in Kubernetes. You'll need to fill in the name below.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Names are case-sensitive.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# monitoring-config-view-role-binding.yaml\napiVersion: rbac.authorization.k8s.io/v1\nkind: RoleBinding\nmetadata:\n  name: monitoring-config-view\n  namespace: cattle-monitoring-system\nroleRef:\n  kind: Role\n  name: monitoring-config-view\n  apiGroup: rbac.authorization.k8s.io\nsubjects:\n- kind: User\n  name: u-b4qkhsnliz # this can be found via `kubectl get users -A`\n  apiGroup: rbac.authorization.k8s.io\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"kubectl"),": Below is an example of a ",(0,r.kt)("inlineCode",{parentName:"li"},"kubectl")," command used to apply the binding you've created in the YAML file. Remember to fill in your YAML filename accordingly.",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl apply -f monitoring-config-view-role-binding.yaml\n")))),(0,r.kt)("h2",{id:"users-with-rancher-based-permissions"},"Users with Rancher Based Permissions"),(0,r.kt)("p",null,"The relationship between the default roles deployed by Rancher (i.e. cluster-owner, cluster-member, project-owner, project-member), the default Kubernetes roles, and the roles deployed by the rancher-monitoring chart are detailed in the table below:"),(0,r.kt)("figcaption",null,"Default Rancher Permissions and Corresponding Kubernetes ClusterRoles"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Rancher Role"),(0,r.kt)("th",{parentName:"tr",align:null},"Kubernetes Role"),(0,r.kt)("th",{parentName:"tr",align:null},"Monitoring ClusterRole / Role"),(0,r.kt)("th",{parentName:"tr",align:null},"ClusterRoleBinding or RoleBinding?"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cluster-owner"),(0,r.kt)("td",{parentName:"tr",align:null},"cluster-admin"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"ClusterRoleBinding")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cluster-member"),(0,r.kt)("td",{parentName:"tr",align:null},"admin"),(0,r.kt)("td",{parentName:"tr",align:null},"monitoring-admin"),(0,r.kt)("td",{parentName:"tr",align:null},"ClusterRoleBinding")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"project-owner"),(0,r.kt)("td",{parentName:"tr",align:null},"admin"),(0,r.kt)("td",{parentName:"tr",align:null},"monitoring-admin"),(0,r.kt)("td",{parentName:"tr",align:null},"RoleBinding within Project namespace")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"project-member"),(0,r.kt)("td",{parentName:"tr",align:null},"edit"),(0,r.kt)("td",{parentName:"tr",align:null},"monitoring-edit"),(0,r.kt)("td",{parentName:"tr",align:null},"RoleBinding within Project namespace")))),(0,r.kt)("p",null,"In addition to these default Roles, the following additional Rancher project roles can be applied to members of your Cluster to provide additional access to Monitoring. These Rancher Roles will be tied to ClusterRoles deployed by the Monitoring chart:"),(0,r.kt)("figcaption",null,"Non-default Rancher Permissions and Corresponding Kubernetes ClusterRoles"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Rancher Role"),(0,r.kt)("th",{parentName:"tr",align:null},"Kubernetes ClusterRole"),(0,r.kt)("th",{parentName:"tr",align:null},"Available In Rancher From"),(0,r.kt)("th",{parentName:"tr",align:null},"Available in Monitoring v2 From"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"View Monitoring*"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#monitoring-ui-view"},"monitoring-ui-view")),(0,r.kt)("td",{parentName:"tr",align:null},"2.4.8+"),(0,r.kt)("td",{parentName:"tr",align:null},"9.4.204+")))),(0,r.kt)("p",null,"*"," A User bound to the ",(0,r.kt)("strong",{parentName:"p"},"View Monitoring")," Rancher Role only has permissions to access external Monitoring UIs if provided links to those UIs. In order to access the Monitoring Pane to get those links, the User must be a Project Member of at least one Project."),(0,r.kt)("h3",{id:"differences-in-25x"},"Differences in 2.5.x"),(0,r.kt)("p",null,"Users with the project-member or project-owners roles assigned will not be given access to either Prometheus or Grafana in Rancher 2.5.x since we only create Grafana or Prometheus on a cluster-level."),(0,r.kt)("p",null,"In addition, while project owners will still be only able to add ServiceMonitors / PodMonitors that scrape resources within their project's namespace by default, PrometheusRules are not scoped to a single namespace / project. Therefore, any alert rules or recording rules created by project-owners within their project namespace will be applied across the entire cluster, although they will be unable to view / edit / delete any rules that were created outside the project's namespace."),(0,r.kt)("h3",{id:"assigning-additional-access"},"Assigning Additional Access"),(0,r.kt)("p",null,"If cluster-admins would like to provide additional admin/edit access to users outside of the roles offered by the rancher-monitoring chart, the following table identifies the potential impact:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"CRDs (monitoring.coreos.com)"),(0,r.kt)("th",{parentName:"tr",align:null},"Can it cause impact outside of a namespace / project?"),(0,r.kt)("th",{parentName:"tr",align:null},"Impact"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"prometheuses")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes, this resource can scrape metrics from any targets across the entire cluster (unless the Operator itself is otherwise configured)."),(0,r.kt)("td",{parentName:"tr",align:null},"User will be able to define the configuration of new cluster-level Prometheus deployments that should be created in the cluster.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"alertmanagers")),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"User will be able to define the configuration of new cluster-level Alertmanager deployments that should be created in the cluster. Note: if you just want to allow users to configure settings like Routes and Receivers, you should just provide access to the Alertmanager Config Secret instead.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"servicemonitors")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"podmonitors")))),(0,r.kt)("td",{parentName:"tr",align:null},"No, not by default; this is configurable via ",(0,r.kt)("inlineCode",{parentName:"td"},"ignoreNamespaceSelectors")," on the Prometheus CR."),(0,r.kt)("td",{parentName:"tr",align:null},"User will be able to set up scrapes by Prometheus on endpoints exposed by Services / Pods within the namespace they are given this permission in.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"prometheusrules")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes, PrometheusRules are cluster-scoped."),(0,r.kt)("td",{parentName:"tr",align:null},"User will be able to define alert or recording rules on Prometheus based on any series collected across the entire cluster.")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"k8s Resources"),(0,r.kt)("th",{parentName:"tr",align:null},"Namespace"),(0,r.kt)("th",{parentName:"tr",align:null},"Can it cause impact outside of a namespace / project?"),(0,r.kt)("th",{parentName:"tr",align:null},"Impact"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"secrets")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"configmaps")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"cattle-monitoring-system")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes, Configs and Secrets in this namespace can impact the entire monitoring / alerting pipeline."),(0,r.kt)("td",{parentName:"tr",align:null},"User will be able to create or edit Secrets / ConfigMaps such as the Alertmanager Config, Prometheus Adapter Config, TLS secrets, additional Grafana datasources, etc. This can have broad impact on all cluster monitoring / alerting.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"secrets")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"configmaps")))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"cattle-dashboards")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes, Configs and Secrets in this namespace can create dashboards that make queries on all metrics collected at a cluster-level."),(0,r.kt)("td",{parentName:"tr",align:null},"User will be able to create Secrets / ConfigMaps that persist new Grafana Dashboards only.")))),(0,r.kt)("h2",{id:"role-based-access-control-for-grafana"},"Role-based Access Control for Grafana"),(0,r.kt)("p",null,"Rancher allows any users who are authenticated by Kubernetes and have access the Grafana service deployed by the Rancher Monitoring chart to access Grafana via the Rancher Dashboard UI. By default, all users who are able to access Grafana are given the ",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/permissions/organization_roles/#viewer-role"},"Viewer")," role, which allows them to view any of the default dashboards deployed by Rancher."),(0,r.kt)("p",null,"However, users can choose to log in to Grafana as an ",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/permissions/organization_roles/#admin-role"},"Admin")," if necessary. The default Admin username and password for the Grafana instance will be ",(0,r.kt)("inlineCode",{parentName:"p"},"admin"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"prom-operator"),", but alternative credentials can also be supplied on deploying or upgrading the chart."),(0,r.kt)("p",null,"To see the Grafana UI, install ",(0,r.kt)("inlineCode",{parentName:"p"},"rancher-monitoring"),". Then:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,r.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,r.kt)("li",{parentName:"ol"},"On the ",(0,r.kt)("strong",{parentName:"li"},"Clusters")," page, go to the cluster where you want to see the visualizations and click ",(0,r.kt)("strong",{parentName:"li"},"Explore"),"."),(0,r.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,r.kt)("strong",{parentName:"li"},"Monitoring"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Grafana"),".")),(0,r.kt)("figcaption",null,"Cluster Compute Resources Dashboard in Grafana"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Cluster Compute Resources Dashboard in Grafana",src:n(20507).Z,width:"2234",height:"1718"})),(0,r.kt)("figcaption",null,"Default Dashboards in Grafana"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Default Dashboards in Grafana",src:n(89986).Z,width:"1305",height:"1106"})))}g.isMDXComponent=!0},20507:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cluster-compute-resources-dashboard-025b46a16d139fbae87db2a94461b808.png"},89986:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/grafana-default-dashboard-957af33a50c22962b8accddd50b2a85e.png"}}]);