"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[36849],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),u=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(r),d=n,k=m["".concat(i,".").concat(d)]||m[d]||p[d]||l;return r?a.createElement(k,o(o({ref:t},c),{},{components:r})):a.createElement(k,o({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var u=2;u<l;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},50423:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var a=r(87462),n=r(63366),l=(r(67294),r(3905)),o=["components"],s={title:"Cluster and Project Roles",weight:1127,aliases:["/rancher/v2.x/en/admin-settings/rbac/cluster-project-roles/"]},i=void 0,u={unversionedId:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles",id:"version-2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles",title:"Cluster and Project Roles",description:"Cluster and project roles define user authorization inside a cluster or project. You can manage these roles from the Global > Security > Roles page.",source:"@site/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles.md",sourceDirName:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac",slug:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles",permalink:"/rancher-docs/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles.md",tags:[],version:"2.5",lastUpdatedAt:1660949308,formattedLastUpdatedAt:"8/19/2022",frontMatter:{title:"Cluster and Project Roles",weight:1127,aliases:["/rancher/v2.x/en/admin-settings/rbac/cluster-project-roles/"]},sidebar:"tutorialSidebar",previous:{title:"Global Permissions",permalink:"/rancher-docs/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},next:{title:"Custom Roles",permalink:"/rancher-docs/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/custom-roles"}},c={},p=[{value:"Membership and Role Assignment",id:"membership-and-role-assignment",level:3},{value:"Cluster Roles",id:"cluster-roles",level:3},{value:"Custom Cluster Roles",id:"custom-cluster-roles",level:4},{value:"Cluster Role Reference",id:"cluster-role-reference",level:4},{value:"Giving a Custom Cluster Role to a Cluster Member",id:"giving-a-custom-cluster-role-to-a-cluster-member",level:3},{value:"Project Roles",id:"project-roles",level:3},{value:"Custom Project Roles",id:"custom-project-roles",level:4},{value:"Project Role Reference",id:"project-role-reference",level:4},{value:"Defining Custom Roles",id:"defining-custom-roles",level:3},{value:"Default Cluster and Project Roles",id:"default-cluster-and-project-roles",level:3},{value:"Configuring Default Roles for Cluster and Project Creators",id:"configuring-default-roles-for-cluster-and-project-creators",level:3},{value:"Cluster Membership Revocation Behavior",id:"cluster-membership-revocation-behavior",level:3}],m={toc:p};function d(e){var t=e.components,r=(0,n.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Cluster and project roles define user authorization inside a cluster or project. You can manage these roles from the ",(0,l.kt)("strong",{parentName:"p"},"Global > Security > Roles")," page."),(0,l.kt)("h3",{id:"membership-and-role-assignment"},"Membership and Role Assignment"),(0,l.kt)("p",null,"The projects and clusters accessible to non-administrative users is determined by ",(0,l.kt)("em",{parentName:"p"},"membership"),". Membership is a list of users who have access to a specific cluster or project based on the roles they were assigned in that cluster or project. Each cluster and project includes a tab that a user with the appropriate permissions can use to manage membership."),(0,l.kt)("p",null,"When you create a cluster or project, Rancher automatically assigns you as the ",(0,l.kt)("inlineCode",{parentName:"p"},"Owner")," for it. Users assigned the ",(0,l.kt)("inlineCode",{parentName:"p"},"Owner")," role can assign other users roles in the cluster or project."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note:")," Non-administrative users cannot access any existing projects/clusters by default. A user with appropriate permissions (typically the owner) must explicitly assign the project and cluster membership.")),(0,l.kt)("h3",{id:"cluster-roles"},"Cluster Roles"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Cluster roles")," are roles that you can assign to users, granting them access to a cluster. There are two primary cluster roles: ",(0,l.kt)("inlineCode",{parentName:"p"},"Owner")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Member"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Cluster Owner:")),(0,l.kt)("p",{parentName:"li"},"  These users have full control over the cluster and all resources in it.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Cluster Member:")),(0,l.kt)("p",{parentName:"li"},"  These users can view most cluster level resources and create new projects."))),(0,l.kt)("h4",{id:"custom-cluster-roles"},"Custom Cluster Roles"),(0,l.kt)("p",null,"Rancher lets you assign ",(0,l.kt)("em",{parentName:"p"},"custom cluster roles")," to a standard user instead of the typical ",(0,l.kt)("inlineCode",{parentName:"p"},"Owner")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"Member")," roles. These roles can be either a built-in custom cluster role or one defined by a Rancher administrator. They are convenient for defining narrow or specialized access for a standard user within a cluster. See the table below for a list of built-in custom cluster roles."),(0,l.kt)("h4",{id:"cluster-role-reference"},"Cluster Role Reference"),(0,l.kt)("p",null,"The following table lists each built-in custom cluster role available and whether that level of access is included in the default cluster-level permissions, ",(0,l.kt)("inlineCode",{parentName:"p"},"Cluster Owner")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Cluster Member"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Built-in Cluster Role"),(0,l.kt)("th",{parentName:"tr",align:null},"Owner"),(0,l.kt)("th",{parentName:"tr",align:null},"Member ",(0,l.kt)("a",{id:"clus-roles"})))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Create Projects"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Manage Cluster Backups\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Manage Cluster Catalogs"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Manage Cluster Members"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Manage Nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Manage Storage"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"View All Projects"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"View Cluster Catalogs"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"View Cluster Members"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"View Nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713")))),(0,l.kt)("p",null,"For details on how each cluster role can access Kubernetes resources, you can go to the ",(0,l.kt)("strong",{parentName:"p"},"Global")," view in the Rancher UI. Then click ",(0,l.kt)("strong",{parentName:"p"},"Security > Roles")," and go to the ",(0,l.kt)("strong",{parentName:"p"},"Clusters")," tab. If you click an individual role, you can refer to the ",(0,l.kt)("strong",{parentName:"p"},"Grant Resources")," table to see all of the operations and resources that are permitted by the role."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note:"),"\nWhen viewing the resources associated with default roles created by Rancher, if there are multiple Kubernetes API resources on one line item, the resource will have ",(0,l.kt)("inlineCode",{parentName:"p"},"(Custom)")," appended to it. These are not custom resources but just an indication that there are multiple Kubernetes API resources as one resource.")),(0,l.kt)("h3",{id:"giving-a-custom-cluster-role-to-a-cluster-member"},"Giving a Custom Cluster Role to a Cluster Member"),(0,l.kt)("p",null,"After an administrator ",(0,l.kt)("a",{parentName:"p",href:"/rancher-docs/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/custom-roles"},"sets up a custom cluster role,")," cluster owners and admins can then assign those roles to cluster members."),(0,l.kt)("p",null,"To assign a custom role to a new cluster member, you can use the Rancher UI. To modify the permissions of an existing member, you will need to use the Rancher API view."),(0,l.kt)("p",null,"To assign the role to a new cluster member,"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Go to the ",(0,l.kt)("strong",{parentName:"li"},"Cluster")," view, then go to the ",(0,l.kt)("strong",{parentName:"li"},"Members")," tab."),(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("strong",{parentName:"li"},"Add Member.")," Then in the ",(0,l.kt)("strong",{parentName:"li"},"Cluster Permissions")," section, choose the custom cluster role that should be assigned to the member."),(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("strong",{parentName:"li"},"Create."))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Result:")," The member has the assigned role."),(0,l.kt)("p",null,"To assign any custom role to an existing cluster member,"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Go to the member you want to give the role to. Click the ",(0,l.kt)("strong",{parentName:"li"},"\u22ee"," > View in API.")),(0,l.kt)("li",{parentName:"ol"},"In the ",(0,l.kt)("strong",{parentName:"li"},"roleTemplateId")," field, go to the drop-down menu and choose the role you want to assign to the member. Click ",(0,l.kt)("strong",{parentName:"li"},"Show Request")," and ",(0,l.kt)("strong",{parentName:"li"},"Send Request."))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Result:")," The member has the assigned role."),(0,l.kt)("h3",{id:"project-roles"},"Project Roles"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Project roles")," are roles that can be used to grant users access to a project. There are three primary project roles: ",(0,l.kt)("inlineCode",{parentName:"p"},"Owner"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Member"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"Read Only"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Project Owner:")),(0,l.kt)("p",{parentName:"li"},"  These users have full control over the project and all resources in it.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Project Member:")),(0,l.kt)("p",{parentName:"li"},"  These users can manage project-scoped resources like namespaces and workloads, but cannot manage other project members."),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note:")),(0,l.kt)("p",{parentName:"blockquote"},"By default, the Rancher role of ",(0,l.kt)("inlineCode",{parentName:"p"},"project-member")," inherits from the ",(0,l.kt)("inlineCode",{parentName:"p"},"Kubernetes-edit")," role, and the ",(0,l.kt)("inlineCode",{parentName:"p"},"project-owner")," role inherits from the ",(0,l.kt)("inlineCode",{parentName:"p"},"Kubernetes-admin")," role. As such, both ",(0,l.kt)("inlineCode",{parentName:"p"},"project-member")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"project-owner")," roles will allow for namespace management, including the ability to create and delete namespaces."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Read Only:")),(0,l.kt)("p",{parentName:"li"},"  These users can view everything in the project but cannot create, update, or delete anything."),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Caveat:")),(0,l.kt)("p",{parentName:"blockquote"},"Users assigned the ",(0,l.kt)("inlineCode",{parentName:"p"},"Owner")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"Member")," role for a project automatically inherit the ",(0,l.kt)("inlineCode",{parentName:"p"},"namespace creation")," role. However, this role is a ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/#role-and-clusterrole"},"Kubernetes ClusterRole"),", meaning its scope extends to all projects in the cluster. Therefore, users explicitly assigned the ",(0,l.kt)("inlineCode",{parentName:"p"},"owner")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"member")," role for a project can create namespaces in other projects they're assigned to, even with only the ",(0,l.kt)("inlineCode",{parentName:"p"},"Read Only")," role assigned.")))),(0,l.kt)("h4",{id:"custom-project-roles"},"Custom Project Roles"),(0,l.kt)("p",null,"Rancher lets you assign ",(0,l.kt)("em",{parentName:"p"},"custom project roles")," to a standard user instead of the typical ",(0,l.kt)("inlineCode",{parentName:"p"},"Owner"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Member"),", or ",(0,l.kt)("inlineCode",{parentName:"p"},"Read Only")," roles. These roles can be either a built-in custom project role or one defined by a Rancher administrator. They are convenient for defining narrow or specialized access for a standard user within a project. See the table below for a list of built-in custom project roles."),(0,l.kt)("h4",{id:"project-role-reference"},"Project Role Reference"),(0,l.kt)("p",null,"The following table lists each built-in custom project role available in Rancher and whether it is also granted by the ",(0,l.kt)("inlineCode",{parentName:"p"},"Owner"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Member"),", or ",(0,l.kt)("inlineCode",{parentName:"p"},"Read Only")," role."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Built-in Project Role"),(0,l.kt)("th",{parentName:"tr",align:null},"Owner"),(0,l.kt)("th",{parentName:"tr",align:null},"Member",(0,l.kt)("a",{id:"proj-roles"})),(0,l.kt)("th",{parentName:"tr",align:null},"Read Only"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Manage Project Members"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Create Namespaces"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Manage Config Maps"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Manage Ingress"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Manage Project Catalogs"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Manage Secrets"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Manage Service Accounts"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Manage Services"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Manage Volumes"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Manage Workloads"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"View Secrets"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"View Config Maps"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"View Ingress"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"View Project Members"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"View Project Catalogs"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"View Service Accounts"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"View Services"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"View Volumes"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"View Workloads"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2713")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Notes:")),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"Each project role listed above, including ",(0,l.kt)("inlineCode",{parentName:"li"},"Owner"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"Member"),", and ",(0,l.kt)("inlineCode",{parentName:"li"},"Read Only"),", is comprised of multiple rules granting access to various resources. You can view the roles and their rules on the Global > Security > Roles page."),(0,l.kt)("li",{parentName:"ul"},"When viewing the resources associated with default roles created by Rancher, if there are multiple Kubernetes API resources on one line item, the resource will have ",(0,l.kt)("inlineCode",{parentName:"li"},"(Custom)")," appended to it. These are not custom resources but just an indication that there are multiple Kubernetes API resources as one resource."),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"Manage Project Members")," role allows the project owner to manage any members of the project ",(0,l.kt)("strong",{parentName:"li"},"and")," grant them any project scoped role regardless of their access to the project resources. Be cautious when assigning this role out individually."))),(0,l.kt)("h3",{id:"defining-custom-roles"},"Defining Custom Roles"),(0,l.kt)("p",null,"As previously mentioned, custom roles can be defined for use at the cluster or project level. The context field defines whether the role will appear on the cluster member page, project member page, or both."),(0,l.kt)("p",null,"When defining a custom role, you can grant access to specific resources or specify roles from which the custom role should inherit. A custom role can be made up of a combination of specific grants and inherited roles. All grants are additive. This means that defining a narrower grant for a specific resource ",(0,l.kt)("strong",{parentName:"p"},"will not")," override a broader grant defined in a role that the custom role is inheriting from."),(0,l.kt)("h3",{id:"default-cluster-and-project-roles"},"Default Cluster and Project Roles"),(0,l.kt)("p",null,"By default, when a standard user creates a new cluster or project, they are automatically assigned an ownership role: either ",(0,l.kt)("a",{parentName:"p",href:"#cluster-roles"},"cluster owner")," or ",(0,l.kt)("a",{parentName:"p",href:"#project-roles"},"project owner"),". However, in some organizations, these roles may overextend administrative access. In this use case, you can change the default role to something more restrictive, such as a set of individual roles or a custom role."),(0,l.kt)("p",null,"There are two methods for changing default cluster/project roles:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Assign Custom Roles"),": Create a ",(0,l.kt)("a",{parentName:"p",href:"/rancher-docs/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/custom-roles"},"custom role")," for either your ",(0,l.kt)("a",{parentName:"p",href:"#custom-cluster-roles"},"cluster")," or ",(0,l.kt)("a",{parentName:"p",href:"#custom-project-roles"},"project"),", and then set the custom role as default.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Assign Individual Roles"),": Configure multiple ",(0,l.kt)("a",{parentName:"p",href:"#cluster-role-reference"},"cluster"),"/",(0,l.kt)("a",{parentName:"p",href:"#project-role-reference"},"project")," roles as default for assignment to the creating user."),(0,l.kt)("p",{parentName:"li"},"  For example, instead of assigning a role that inherits other roles (such as ",(0,l.kt)("inlineCode",{parentName:"p"},"cluster owner"),"), you can choose a mix of individual roles (such as ",(0,l.kt)("inlineCode",{parentName:"p"},"manage nodes")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"manage storage"),")."))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note:")),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"Although you can ",(0,l.kt)("a",{parentName:"li",href:"/rancher-docs/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/locked-roles"},"lock")," a default role, the system still assigns the role to users who create a cluster/project."),(0,l.kt)("li",{parentName:"ul"},"Only users that create clusters/projects inherit their roles. Users added to the cluster/project membership afterward must be explicitly assigned their roles."))),(0,l.kt)("h3",{id:"configuring-default-roles-for-cluster-and-project-creators"},"Configuring Default Roles for Cluster and Project Creators"),(0,l.kt)("p",null,"You can change the cluster or project role(s) that are automatically assigned to the creating user."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"From the ",(0,l.kt)("strong",{parentName:"p"},"Global")," view, select ",(0,l.kt)("strong",{parentName:"p"},"Security > Roles")," from the main menu. Select either the ",(0,l.kt)("strong",{parentName:"p"},"Cluster")," or ",(0,l.kt)("strong",{parentName:"p"},"Project")," tab.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Find the custom or individual role that you want to use as default. Then edit the role by selecting ",(0,l.kt)("strong",{parentName:"p"},"\u22ee"," > Edit"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Enable the role as default."))),(0,l.kt)("details",{id:"cluster"},(0,l.kt)("summary",null,"For Clusters"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"From ",(0,l.kt)("strong",{parentName:"li"},"Cluster Creator Default"),", choose ",(0,l.kt)("strong",{parentName:"li"},"Yes: Default role for new cluster creation"),"."),(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("strong",{parentName:"li"},"Save"),"."))),(0,l.kt)("details",{id:"project"},(0,l.kt)("summary",null,"For Projects"),"1. From **Project Creator Default**, choose **Yes: Default role for new project creation**. 1. Click **Save**."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"If you want to remove a default role, edit the permission and select ",(0,l.kt)("strong",{parentName:"li"},"No")," from the default roles option.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Result:")," The default roles are configured based on your changes. Roles assigned to cluster/project creators display a check in the ",(0,l.kt)("strong",{parentName:"p"},"Cluster/Project Creator Default")," column."),(0,l.kt)("h3",{id:"cluster-membership-revocation-behavior"},"Cluster Membership Revocation Behavior"),(0,l.kt)("p",null,"When you revoke the cluster membership for a standard user that's explicitly assigned membership to both the cluster ",(0,l.kt)("em",{parentName:"p"},"and")," a project within the cluster, that standard user ",(0,l.kt)("a",{parentName:"p",href:"#clus-roles"},"loses their cluster roles")," but ",(0,l.kt)("a",{parentName:"p",href:"#proj-roles"},"retains their project roles"),". In other words, although you have revoked the user's permissions to access the cluster and its nodes, the standard user can still:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Access the projects they hold membership in."),(0,l.kt)("li",{parentName:"ul"},"Exercise any ",(0,l.kt)("a",{parentName:"li",href:"#project-role-reference"},"individual project roles")," they are assigned.")),(0,l.kt)("p",null,"If you want to completely revoke a user's access within a cluster, revoke both their cluster and project memberships."))}d.isMDXComponent=!0}}]);