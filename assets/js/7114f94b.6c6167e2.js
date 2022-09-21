"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[27468],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return d}});var a=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(o),d=r,h=m["".concat(i,".").concat(d)]||m[d]||p[d]||n;return o?a.createElement(h,l(l({ref:t},c),{},{components:o})):a.createElement(h,l({ref:t},c))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,l=new Array(n);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<n;u++)l[u]=o[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},27112:function(e,t,o){o.r(t),o.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var a=o(87462),r=o(63366),n=(o(67294),o(3905)),l=["components"],s={title:"Custom Roles",weight:1128,aliases:["/rancher/v2.5/en/tasks/global-configuration/roles/","/rancher/v2.x/en/admin-settings/rbac/default-custom-roles/"]},i=void 0,u={unversionedId:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/custom-roles",id:"version-2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/custom-roles",title:"Custom Roles",description:"Within Rancher, roles determine what actions a user can make within a cluster or project.",source:"@site/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/custom-roles.md",sourceDirName:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac",slug:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/custom-roles",permalink:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/custom-roles",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/custom-roles.md",tags:[],version:"2.5",lastUpdatedAt:1663710212,formattedLastUpdatedAt:"9/20/2022",frontMatter:{title:"Custom Roles",weight:1128,aliases:["/rancher/v2.5/en/tasks/global-configuration/roles/","/rancher/v2.x/en/admin-settings/rbac/default-custom-roles/"]},sidebar:"tutorialSidebar",previous:{title:"Cluster and Project Roles",permalink:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles"},next:{title:"Locked Roles",permalink:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/locked-roles"}},c={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Creating A Custom Role for a Cluster or Project",id:"creating-a-custom-role-for-a-cluster-or-project",level:2},{value:"Creating a Custom Global Role",id:"creating-a-custom-global-role",level:2},{value:"Creating a Custom Global Role that Copies Rules from an Existing Role",id:"creating-a-custom-global-role-that-copies-rules-from-an-existing-role",level:3},{value:"Creating a Custom Global Role that Does Not Copy Rules from Another Role",id:"creating-a-custom-global-role-that-does-not-copy-rules-from-another-role",level:3},{value:"Deleting a Custom Global Role",id:"deleting-a-custom-global-role",level:2},{value:"Assigning a Custom Global Role to a Group",id:"assigning-a-custom-global-role-to-a-group",level:2},{value:"Privilege Escalation",id:"privilege-escalation",level:2}],m={toc:p};function d(e){var t=e.components,o=(0,r.Z)(e,l);return(0,n.kt)("wrapper",(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Within Rancher, ",(0,n.kt)("em",{parentName:"p"},"roles")," determine what actions a user can make within a cluster or project."),(0,n.kt)("p",null,"Note that ",(0,n.kt)("em",{parentName:"p"},"roles")," are different from ",(0,n.kt)("em",{parentName:"p"},"permissions"),", which determine what clusters and projects you can access."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"It is possible for a custom role to enable privilege escalation. For details, see ",(0,n.kt)("a",{parentName:"p",href:"#privilege-escalation"},"this section."))),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"To complete the tasks on this page, one of the following permissions are required:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"Administrator Global Permissions"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions#custom-global-permissions"},"Custom Global Permissions")," with the ",(0,n.kt)("a",{parentName:"li",href:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"Manage Roles")," role assigned.")),(0,n.kt)("h2",{id:"creating-a-custom-role-for-a-cluster-or-project"},"Creating A Custom Role for a Cluster or Project"),(0,n.kt)("p",null,"While Rancher comes out-of-the-box with a set of default user roles, you can also create default custom roles to provide users with very specific permissions within Rancher."),(0,n.kt)("p",null,"The steps to add custom roles differ depending on the version of Rancher."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the ",(0,n.kt)("strong",{parentName:"p"},"Global")," view, select ",(0,n.kt)("strong",{parentName:"p"},"Security > Roles")," from the main menu.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select a tab to determine the scope of the roles you're adding. The tabs are:"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Cluster:")," The role is valid for assignment when adding/managing members to ",(0,n.kt)("em",{parentName:"li"},"only")," clusters."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Project:")," The role is valid for assignment when adding/managing members to ",(0,n.kt)("em",{parentName:"li"},"only")," projects.")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Add Cluster/Project Role."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Name")," the role.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Optional: Choose the ",(0,n.kt)("strong",{parentName:"p"},"Cluster/Project Creator Default")," option to assign this role to a user when they create a new cluster or project. Using this feature, you can expand or restrict the default roles for cluster/project creators."),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"Out of the box, the Cluster Creator Default and the Project Creator Default roles are ",(0,n.kt)("inlineCode",{parentName:"p"},"Cluster Owner")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"Project Owner")," respectively."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use the ",(0,n.kt)("strong",{parentName:"p"},"Grant Resources")," options to assign individual ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/"},"Kubernetes API endpoints")," to the role."),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"When viewing the resources associated with default roles created by Rancher, if there are multiple Kubernetes API resources on one line item, the resource will have ",(0,n.kt)("inlineCode",{parentName:"p"},"(Custom)")," appended to it. These are not custom resources but just an indication that there are multiple Kubernetes API resources as one resource.")),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"The Resource text field provides a method to search for pre-defined Kubernetes API resources, or enter a custom resource name for the grant. The pre-defined or ",(0,n.kt)("inlineCode",{parentName:"p"},"(Custom)")," resource must be selected from the dropdown, after entering a resource name into this field.")),(0,n.kt)("p",{parentName:"li"},"You can also choose the individual cURL methods (",(0,n.kt)("inlineCode",{parentName:"p"},"Create"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Delete"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Get"),", etc.) available for use with each endpoint you assign.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use the ",(0,n.kt)("strong",{parentName:"p"},"Inherit from a Role")," options to assign individual Rancher roles to your custom roles. Note: When a custom role inherits from a parent role, the parent role cannot be deleted until the child role is deleted.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Create"),"."))),(0,n.kt)("h2",{id:"creating-a-custom-global-role"},"Creating a Custom Global Role"),(0,n.kt)("h3",{id:"creating-a-custom-global-role-that-copies-rules-from-an-existing-role"},"Creating a Custom Global Role that Copies Rules from an Existing Role"),(0,n.kt)("p",null,"If you have a group of individuals that need the same level of access in Rancher, it can save time to create a custom global role in which all of the rules from another role, such as the administrator role, are copied into a new role. This allows you to only configure the variations between the existing role and the new role."),(0,n.kt)("p",null,"The custom global role can then be assigned to a user or group so that the custom global role takes effect the first time the user or users sign into Rancher."),(0,n.kt)("p",null,"To create a custom global role based on an existing role,"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to the ",(0,n.kt)("strong",{parentName:"p"},"Global")," view and click ",(0,n.kt)("strong",{parentName:"p"},"Security > Roles."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On the ",(0,n.kt)("strong",{parentName:"p"},"Global")," tab, go to the role that the custom global role will be based on. Click ",(0,n.kt)("strong",{parentName:"p"},"\u22ee"," (\u2026) > Clone."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enter a name for the role.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Optional: To assign the custom role default for new users, go to the ",(0,n.kt)("strong",{parentName:"p"},"New User Default")," section and click ",(0,n.kt)("strong",{parentName:"p"},"Yes: Default role for new users."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the ",(0,n.kt)("strong",{parentName:"p"},"Grant Resources")," section, select the Kubernetes resource operations that will be enabled for users with the custom role."),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"The Resource text field provides a method to search for pre-defined Kubernetes API resources, or enter a custom resource name for the grant. The pre-defined or ",(0,n.kt)("inlineCode",{parentName:"p"},"(Custom)")," resource must be selected from the dropdown, after entering a resource name into this field."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Save.")))),(0,n.kt)("h3",{id:"creating-a-custom-global-role-that-does-not-copy-rules-from-another-role"},"Creating a Custom Global Role that Does Not Copy Rules from Another Role"),(0,n.kt)("p",null,"Custom global roles don't have to be based on existing roles. To create a custom global role by choosing the specific Kubernetes resource operations that should be allowed for the role, follow these steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to the ",(0,n.kt)("strong",{parentName:"p"},"Global")," view and click ",(0,n.kt)("strong",{parentName:"p"},"Security > Roles."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On the ",(0,n.kt)("strong",{parentName:"p"},"Global")," tab, click ",(0,n.kt)("strong",{parentName:"p"},"Add Global Role."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enter a name for the role.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Optional: To assign the custom role default for new users, go to the ",(0,n.kt)("strong",{parentName:"p"},"New User Default")," section and click ",(0,n.kt)("strong",{parentName:"p"},"Yes: Default role for new users."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the ",(0,n.kt)("strong",{parentName:"p"},"Grant Resources")," section, select the Kubernetes resource operations that will be enabled for users with the custom role."),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"The Resource text field provides a method to search for pre-defined Kubernetes API resources, or enter a custom resource name for the grant. The pre-defined or ",(0,n.kt)("inlineCode",{parentName:"p"},"(Custom)")," resource must be selected from the dropdown, after entering a resource name into this field."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Save.")))),(0,n.kt)("h2",{id:"deleting-a-custom-global-role"},"Deleting a Custom Global Role"),(0,n.kt)("p",null,"When deleting a custom global role, all global role bindings with this custom role are deleted."),(0,n.kt)("p",null,"If a user is only assigned one custom global role, and the role is deleted, the user would lose access to Rancher. For the user to regain access, an administrator would need to edit the user and apply new global permissions."),(0,n.kt)("p",null,"Custom global roles can be deleted, but built-in roles cannot be deleted."),(0,n.kt)("p",null,"To delete a custom global role,"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to the ",(0,n.kt)("strong",{parentName:"li"},"Global")," view and click ",(0,n.kt)("strong",{parentName:"li"},"Security > Roles.")),(0,n.kt)("li",{parentName:"ol"},"On the ",(0,n.kt)("strong",{parentName:"li"},"Global")," tab, go to the custom global role that should be deleted and click ",(0,n.kt)("strong",{parentName:"li"},"\u22ee"," (\u2026) > Delete.")),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Delete."))),(0,n.kt)("h2",{id:"assigning-a-custom-global-role-to-a-group"},"Assigning a Custom Global Role to a Group"),(0,n.kt)("p",null,"If you have a group of individuals that need the same level of access in Rancher, it can save time to create a custom global role. When the role is assigned to a group, the users in the group have the appropriate level of access the first time they sign into Rancher."),(0,n.kt)("p",null,"When a user in the group logs in, they get the built-in Standard User global role by default. They will also get the permissions assigned to their groups."),(0,n.kt)("p",null,"If a user is removed from the external authentication provider group, they would lose their permissions from the custom global role that was assigned to the group. They would continue to have their individual Standard User role."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Prerequisites:")," You can only assign a global role to a group if:"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"You have set up an ",(0,n.kt)("a",{parentName:"li",href:"/v2.5/pages-for-subheaders/about-authentication#external-vs-local-authentication"},"external authentication provider")),(0,n.kt)("li",{parentName:"ul"},"The external authentication provider supports ",(0,n.kt)("a",{parentName:"li",href:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/manage-users-and-groups"},"user groups")),(0,n.kt)("li",{parentName:"ul"},"You have already set up at least one user group with the authentication provider"))),(0,n.kt)("p",null,"To assign a custom global role to a group, follow these steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"From the ",(0,n.kt)("strong",{parentName:"li"},"Global")," view, go to ",(0,n.kt)("strong",{parentName:"li"},"Security > Groups.")),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Assign Global Role.")),(0,n.kt)("li",{parentName:"ol"},"In the ",(0,n.kt)("strong",{parentName:"li"},"Select Group To Add")," field, choose the existing group that will be assigned the custom global role."),(0,n.kt)("li",{parentName:"ol"},"In the ",(0,n.kt)("strong",{parentName:"li"},"Custom")," section, choose any custom global role that will be assigned to the group."),(0,n.kt)("li",{parentName:"ol"},"Optional: In the ",(0,n.kt)("strong",{parentName:"li"},"Global Permissions")," or ",(0,n.kt)("strong",{parentName:"li"},"Built-in")," sections, select any additional permissions that the group should have."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Create."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result:")," The custom global role will take effect when the users in the group log into Rancher."),(0,n.kt)("h2",{id:"privilege-escalation"},"Privilege Escalation"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"Configure Catalogs")," custom permission is powerful and should be used with caution. When an admin assigns the  ",(0,n.kt)("inlineCode",{parentName:"p"},"Configure Catalogs")," permission to a standard user, it could result in privilege escalation in which the user could give themselves admin access to Rancher provisioned clusters. Anyone with this permission should be considered equivalent to an admin."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"Manager Users")," role grants the ability to create, update, and delete ",(0,n.kt)("em",{parentName:"p"},"any")," user. This presents the risk of privilege escalation as even non-admin users with this role will be able to create, update, and delete admin users. Admins should take caution when assigning this role."))}d.isMDXComponent=!0}}]);