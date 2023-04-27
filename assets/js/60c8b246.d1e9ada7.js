"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[89103],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),h=s(a),m=r,d=h["".concat(l,".").concat(m)]||h[m]||c[m]||i;return a?n.createElement(d,o(o({ref:t},u),{},{components:a})):n.createElement(d,o({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},12727:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={title:"Configure Azure AD"},o=void 0,p={unversionedId:"how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-azure-ad",id:"version-2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-azure-ad",title:"Configure Azure AD",description:"Microsoft Graph API",source:"@site/versioned_docs/version-2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-azure-ad.md",sourceDirName:"how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config",slug:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-azure-ad",permalink:"/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-azure-ad",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-azure-ad.md",tags:[],version:"2.6",lastUpdatedAt:1680088482,formattedLastUpdatedAt:"Mar 29, 2023",frontMatter:{title:"Configure Azure AD"},sidebar:"tutorialSidebar",previous:{title:"Configure FreeIPA",permalink:"/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-freeipa"},next:{title:"Configure GitHub",permalink:"/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-github"}},l={},s=[{value:"Microsoft Graph API",id:"microsoft-graph-api",level:2},{value:"New User Setup",id:"new-user-setup",level:3},{value:"Azure Active Directory Configuration Outline",id:"azure-active-directory-configuration-outline",level:4},{value:"1. Register Rancher with Azure",id:"1-register-rancher-with-azure",level:4},{value:"2. Create a new client secret",id:"2-create-a-new-client-secret",level:4},{value:"3. Set Required Permissions for Rancher",id:"3-set-required-permissions-for-rancher",level:4},{value:"4. Copy Azure Application Data",id:"4-copy-azure-application-data",level:4},{value:"5. Configure Azure AD in Rancher",id:"5-configure-azure-ad-in-rancher",level:4},{value:"Migrating from Azure AD Graph API to Microsoft Graph API",id:"migrating-from-azure-ad-graph-api-to-microsoft-graph-api",level:3},{value:"Updating Endpoints in the Rancher UI",id:"updating-endpoints-in-the-rancher-ui",level:4},{value:"Air-Gapped Environments",id:"air-gapped-environments",level:4},{value:"Rolling Back the Migration",id:"rolling-back-the-migration",level:4},{value:"Global:",id:"global",level:4},{value:"China:",id:"china",level:4},{value:"Deprecated Azure AD Graph API",id:"deprecated-azure-ad-graph-api",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},c=u("Tabs"),h=u("TabItem"),m={toc:s};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(c,{mdxType:"Tabs"},(0,r.kt)(h,{value:"Rancher v2.6.7+",mdxType:"TabItem"},(0,r.kt)("h2",{id:"microsoft-graph-api"},"Microsoft Graph API"),(0,r.kt)("p",null,"Microsoft Graph API is now the flow through which you will set up Azure AD. The below sections will assist ",(0,r.kt)("a",{parentName:"p",href:"#new-user-setup"},"new users")," in configuring Azure AD with a new instance as well as assist existing Azure app owners in ",(0,r.kt)("a",{parentName:"p",href:"#migrating-from-azure-ad-graph-api-to-microsoft-graph-api"},"migrating to the new flow"),"."),(0,r.kt)("p",null,"The Microsoft Graph API flow in Rancher is constantly evolving. We recommend that you use the latest patched version of 2.6, as it is still in active development and will continue to receive new features and improvements."),(0,r.kt)("h3",{id:"new-user-setup"},"New User Setup"),(0,r.kt)("p",null,"If you have an instance of Active Directory (AD) hosted in Azure, you can configure Rancher to allow your users to log in using their AD accounts. Configuration of Azure AD external authentication requires you to make configurations in both Azure and Rancher."),(0,r.kt)("admonition",{title:"Notes",type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Azure AD integration only supports Service Provider initiated logins."),(0,r.kt)("li",{parentName:"ul"},"Most of this procedure takes place from the ",(0,r.kt)("a",{parentName:"li",href:"https://portal.azure.com/"},"Microsoft Azure Portal"),"."))),(0,r.kt)("h4",{id:"azure-active-directory-configuration-outline"},"Azure Active Directory Configuration Outline"),(0,r.kt)("p",null,"Configuring Rancher to allow your users to authenticate with their Azure AD accounts involves multiple procedures. Review the outline below before getting started."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Before you start, open two browser tabs: one for Rancher, and one for the Azure portal. This will help with copying and pasting configuration values from the portal to Rancher.")),(0,r.kt)("h4",{id:"1-register-rancher-with-azure"},"1. Register Rancher with Azure"),(0,r.kt)("p",null,"Before enabling Azure AD within Rancher, you must register Rancher with Azure."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Log in to ",(0,r.kt)("a",{parentName:"p",href:"https://portal.azure.com/"},"Microsoft Azure")," as an administrative user. Configuration in future steps requires administrative access rights.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use search to open the ",(0,r.kt)("strong",{parentName:"p"},"App registrations")," service.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"New registration")," and complete the form."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"New App Registration",src:a(89099).Z,width:"1966",height:"1690"})),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter a ",(0,r.kt)("strong",{parentName:"p"},"Name")," (something like ",(0,r.kt)("inlineCode",{parentName:"p"},"Rancher"),")."),(0,r.kt)("a",{id:"3.2"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From ",(0,r.kt)("strong",{parentName:"p"},"Supported account types"),', select "Accounts in this organizational directory only (AzureADTest only - Single tenant)" This corresponds to the legacy app registration options.'),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"In the updated Azure portal, Redirect URIs are synonymous with Reply URLs. In order to use Azure AD with Rancher, you must whitelist Rancher with Azure (previously done through Reply URLs). Therefore, you must ensure to fill in the Redirect URI with your Rancher server URL, to include the verification path as listed below."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/reply-url"},(0,r.kt)("strong",{parentName:"a"},"Redirect URI"))," section, make sure ",(0,r.kt)("strong",{parentName:"p"},"Web")," is selected from the dropdown and enter the URL of your Rancher Server in the text box next to the dropdown. This Rancher server URL should be appended with the verification path: ",(0,r.kt)("inlineCode",{parentName:"p"},"<MY_RANCHER_URL>/verify-auth-azure"),"."),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can find your personalized Azure Redirect URI (reply URL) in Rancher on the Azure AD Authentication page (Global View > Authentication > Web)."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Register"),"."))))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"It can take up to five minutes for this change to take affect, so don't be alarmed if you can't authenticate immediately after Azure AD configuration.")),(0,r.kt)("h4",{id:"2-create-a-new-client-secret"},"2. Create a new client secret"),(0,r.kt)("p",null,"From the Azure portal, create a client secret. Rancher will use this key to authenticate with Azure AD."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use search to open ",(0,r.kt)("strong",{parentName:"p"},"App registrations")," services. Then open the entry for Rancher that you created in the last procedure."),(0,r.kt)("p",{parentName:"li"}," ",(0,r.kt)("img",{alt:"Open Rancher Registration",src:a(54197).Z,width:"827",height:"544"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From the navigation pane, click ",(0,r.kt)("strong",{parentName:"p"},"Certificates & secrets"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"New client secret"),".\n",(0,r.kt)("img",{alt:"Create new client secret",src:a(45103).Z,width:"2878",height:"1100"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter a ",(0,r.kt)("strong",{parentName:"p"},"Description")," (something like ",(0,r.kt)("inlineCode",{parentName:"p"},"Rancher"),").")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the duration from the options under ",(0,r.kt)("strong",{parentName:"p"},"Expires"),". This drop-down menu sets the expiration date for the key. Shorter durations are more secure, but require you to create a new key more frequently.\nNote that users won't be able to log in to Rancher if it detects that the application secret has expired. To avoid this problem, rotate the secret in Azure and update it in Rancher before it expires.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Add")," (you don't need to enter a value\u2014it will automatically populate after you save)."),(0,r.kt)("a",{id:"secret"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You'll enter this key into the Rancher UI later as your ",(0,r.kt)("strong",{parentName:"p"},"Application Secret"),". Since you won't be able to access the key value again within the Azure UI, keep this window open for the rest of the setup process."))),(0,r.kt)("h4",{id:"3-set-required-permissions-for-rancher"},"3. Set Required Permissions for Rancher"),(0,r.kt)("p",null,"Next, set API permissions for Rancher within Azure."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Ensure that you set Application permissions, and ",(0,r.kt)("em",{parentName:"p"},"not")," Delegated permissions. Otherwise, you won't be able to login to Azure AD.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From the navigation pane on, select ",(0,r.kt)("strong",{parentName:"p"},"API permissions"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Add a permission"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From the Microsoft Graph API, select the following ",(0,r.kt)("strong",{parentName:"p"},"Application Permissions"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Directory.Read.All")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Select API Permissions",src:a(7588).Z,width:"1848",height:"1524"})))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"In Rancher versions 2.6.7-2.6.10, you'll need to use ",(0,r.kt)("inlineCode",{parentName:"p"},"User.Read.All")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Group.Read.All")," for permissions. This was changed to allow for lower-scoped permissions (such as ",(0,r.kt)("inlineCode",{parentName:"p"},"Directory.Read.All"),") in v2.6.11.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Return to ",(0,r.kt)("strong",{parentName:"li"},"API permissions")," in the nav bar. From there, click ",(0,r.kt)("strong",{parentName:"li"},"Grant admin consent"),". Then click ",(0,r.kt)("strong",{parentName:"li"},"Yes"),". The app's permissions should look like the following:")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Open Required Permissions",src:a(37919).Z,width:"2242",height:"1012"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Rancher doesn't validate the permissions you grant to the app in Azure. You're free to try any permissions you want, as long as they allow Rancher to work with AD users and groups."),(0,r.kt)("p",{parentName:"admonition"}," Specifically, Rancher needs permissions that allow the following actions:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Get a user.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"List all users.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"List groups of which a given user is a member.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Get a group.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"List all groups."),(0,r.kt)("p",{parentName:"li"},"Rancher performs these actions either to log in a user or to run a user/group search. Keep in mind that the permissions must be of type ",(0,r.kt)("inlineCode",{parentName:"p"},"Application"),"."),(0,r.kt)("p",{parentName:"li"},"Here are a few examples of permission combinations that satisfy Rancher's needs:")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Directory.Read.All"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"User.Read.All")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"GroupMember.Read.All"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"User.Read.All")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Group.Read.All"))))),(0,r.kt)("h4",{id:"4-copy-azure-application-data"},"4. Copy Azure Application Data"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Application ID",src:a(20313).Z,width:"1600",height:"590"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Obtain your Rancher ",(0,r.kt)("strong",{parentName:"p"},"Tenant ID"),"."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use search to open ",(0,r.kt)("strong",{parentName:"p"},"App registrations"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Find the entry you created for Rancher.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the ",(0,r.kt)("strong",{parentName:"p"},"Directory ID")," and paste it into Rancher as your ",(0,r.kt)("strong",{parentName:"p"},"Tenant ID"),".")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Obtain your Rancher ",(0,r.kt)("strong",{parentName:"p"},"Application (Client) ID"),"."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you aren't already there, use search to open ",(0,r.kt)("strong",{parentName:"p"},"App registrations"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In ",(0,r.kt)("strong",{parentName:"p"},"Overview"),", find the entry you created for Rancher.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the ",(0,r.kt)("strong",{parentName:"p"},"Application (Client) ID")," and paste it into Rancher as your ",(0,r.kt)("strong",{parentName:"p"},"Application ID"),".")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In most cases, your endpoint options will either be ",(0,r.kt)("a",{parentName:"p",href:"#global"},"Standard")," or ",(0,r.kt)("a",{parentName:"p",href:"#china"},"China"),". For either of these options, you only need to enter the ",(0,r.kt)("strong",{parentName:"p"},"Tenant ID"),", ",(0,r.kt)("strong",{parentName:"p"},"Application ID"),", and ",(0,r.kt)("strong",{parentName:"p"},"Application Secret"),"."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Standard Endpoint Options",src:a(5809).Z,width:"3574",height:"1866"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For Custom Endpoints:")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Warning:")," Custom Endpoints are not tested or fully supported by Rancher."),(0,r.kt)("p",null,"You'll also need to manually enter the Graph, Token, and Auth Endpoints."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"From ",(0,r.kt)("b",null,"App registrations"),", click ",(0,r.kt)("b",null,"Endpoints"),":")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Click Endpoints",src:a(77887).Z,width:"1296",height:"272"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The following endpoints will be your Rancher endpoint values. Make sure to use the v1 version of these endpoints:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Microsoft Graph API endpoint")," (Graph Endpoint)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"OAuth 2.0 token endpoint (v1)")," (Token Endpoint)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"OAuth 2.0 authorization endpoint (v1)")," (Auth Endpoint)")))),(0,r.kt)("h4",{id:"5-configure-azure-ad-in-rancher"},"5. Configure Azure AD in Rancher"),(0,r.kt)("p",null,"From the Rancher UI, enter information about your AD instance hosted in Azure to complete configuration."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Log into Rancher.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the top left corner, click ",(0,r.kt)("strong",{parentName:"p"},"\u2630 > Users & Authentication"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the left navigation menu, click ",(0,r.kt)("strong",{parentName:"p"},"Auth Provider"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"AzureAD"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Complete the ",(0,r.kt)("strong",{parentName:"p"},"Configure Azure AD Account")," form using the information you copied while completing ",(0,r.kt)("a",{parentName:"p",href:"#4-copy-azure-application-data"},"Copy Azure Application Data"),"."),(0,r.kt)("admonition",{parentName:"li",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The Azure AD account will be granted administrator privileges, since its details will be mapped to the Rancher local principal account. Make sure that this level of privilege is appropriate before you continue.")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"For Standard or China Endpoints:")),(0,r.kt)("p",{parentName:"li"},"The following table maps the values you copied in the Azure portal to the fields in Rancher:"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Rancher Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Azure Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Tenant ID"),(0,r.kt)("td",{parentName:"tr",align:null},"Directory ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Application ID"),(0,r.kt)("td",{parentName:"tr",align:null},"Application ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Application Secret"),(0,r.kt)("td",{parentName:"tr",align:null},"Key Value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Endpoint"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://login.microsoftonline.com/"},"https://login.microsoftonline.com/"))))),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"For Custom Endpoints:")),(0,r.kt)("p",{parentName:"li"},"The following table maps the custom config values you copied in the Azure portal to the fields in Rancher:"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Rancher Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Azure Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Graph Endpoint"),(0,r.kt)("td",{parentName:"tr",align:null},"Microsoft Graph API Endpoint")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Token Endpoint"),(0,r.kt)("td",{parentName:"tr",align:null},"OAuth 2.0 Token Endpoint")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Auth Endpoint"),(0,r.kt)("td",{parentName:"tr",align:null},"OAuth 2.0 Authorization Endpoint")))),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Important:")," When entering the Graph Endpoint in a custom config, remove the tenant ID from the URL:"),(0,r.kt)("code",null,"http",(0,r.kt)("span",null,"s://g"),"raph.microsoft.com",(0,r.kt)("del",null,"/abb5adde-bee8-4821-8b03-e63efdc7701c"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Enable"),"."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," Azure Active Directory authentication is configured."),(0,r.kt)("h3",{id:"migrating-from-azure-ad-graph-api-to-microsoft-graph-api"},"Migrating from Azure AD Graph API to Microsoft Graph API"),(0,r.kt)("p",null,"Since the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/graph/migrate-azure-ad-graph-overview"},"Azure AD Graph API")," is deprecated and slated to retire in June 2023, admins should update their Azure AD App to use the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/graph/use-the-api"},"Microsoft Graph API")," in Rancher.\nThis needs to be done well in advance of the endpoint being retired.\nIf Rancher is still configured to use the Azure AD Graph API when it is retired, users may not be able to log into Rancher using Azure AD."),(0,r.kt)("h4",{id:"updating-endpoints-in-the-rancher-ui"},"Updating Endpoints in the Rancher UI"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Admins should create a ",(0,r.kt)("a",{parentName:"p",href:"/v2.6/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher"},"Rancher backup")," before they commit to the endpoint migration described below.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#3-set-required-permissions-for-rancher"},"Update")," the permissions of your Azure AD app registration. This is critical.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Log into Rancher.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the Rancher UI homepage, make note of the banner at the top of screen that advises users to update their Azure AD authentication. Click on the link provided to do so."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Rancher UI Banner",src:a(53809).Z,width:"2532",height:"616"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To complete the move to the new Microsoft Graph API, click ",(0,r.kt)("strong",{parentName:"p"},"Update Endpoint"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Note:")," Ensure that your Azure app has a ",(0,r.kt)("a",{parentName:"p",href:"#3-set-required-permissions-for-rancher"},"new set of permissions")," before starting the update."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Update Endpoint",src:a(80162).Z,width:"2558",height:"1126"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"When you receive the pop-up warning message, click ",(0,r.kt)("strong",{parentName:"p"},"Update"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Azure Update Pop-up",src:a(65572).Z,width:"2720",height:"1276"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Refer to the ",(0,r.kt)("a",{parentName:"p",href:"#global"},"tables")," below for the full list of endpoint changes that Rancher performs. Admins do not need to do this manually."))),(0,r.kt)("h4",{id:"air-gapped-environments"},"Air-Gapped Environments"),(0,r.kt)("p",null,"In air-gapped environments, admins should ensure that their endpoints are ",(0,r.kt)("a",{parentName:"p",href:"#3.2"},"whitelisted")," since the Graph Endpoint URL is changing."),(0,r.kt)("h4",{id:"rolling-back-the-migration"},"Rolling Back the Migration"),(0,r.kt)("p",null,"If you need to roll back your migration, please note the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Admins are encouraged to use the proper restore process if they want to go back. Please see ",(0,r.kt)("a",{parentName:"p",href:"/v2.6/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher"},"backup docs"),", ",(0,r.kt)("a",{parentName:"p",href:"/v2.6/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher"},"restore docs"),", and ",(0,r.kt)("a",{parentName:"p",href:"/v2.6/reference-guides/backup-restore-configuration/examples"},"examples")," for reference.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Azure app owners who want to rotate the Application Secret will need to also rotate it in Rancher as Rancher does not automatically update the Application Secret when it is changed in Azure. In Rancher, note that it is stored in a Kubernetes secret called ",(0,r.kt)("inlineCode",{parentName:"p"},"azureadconfig-applicationsecret")," which is in the ",(0,r.kt)("inlineCode",{parentName:"p"},"cattle-global-data")," namespace."))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you upgrade to Rancher v2.6.7+ with an existing Azure AD setup, and choose to disable the auth provider, you won't be able to restore the previous setup. You also won't be able to set up Azure AD using the old flow. You'll need to re-register with the new auth flow. Since Rancher now uses the Graph API, users need set up the ",(0,r.kt)("a",{parentName:"p",href:"#3-set-required-permissions-for-rancher"},"proper permissions in the Azure portal"),".")),(0,r.kt)("h4",{id:"global"},"Global:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Rancher Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Deprecated Endpoints"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Auth Endpoint"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://login.microsoftonline.com/%7BtenantID%7D/oauth2/authorize"},"https://login.microsoftonline.com/{tenantID}/oauth2/authorize"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Endpoint"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://login.microsoftonline.com/"},"https://login.microsoftonline.com/"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Graph Endpoint"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://graph.windows.net/"},"https://graph.windows.net/"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Token Endpoint"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://login.microsoftonline.com/%7BtenantID%7D/oauth2/token"},"https://login.microsoftonline.com/{tenantID}/oauth2/token"))))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Rancher Field"),(0,r.kt)("th",{parentName:"tr",align:null},"New Endpoints"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Auth Endpoint"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://login.microsoftonline.com/%7BtenantID%7D/oauth2/v2.0/authorize"},"https://login.microsoftonline.com/{tenantID}/oauth2/v2.0/authorize"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Endpoint"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://login.microsoftonline.com/"},"https://login.microsoftonline.com/"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Graph Endpoint"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://graph.microsoft.com"},"https://graph.microsoft.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Token Endpoint"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://login.microsoftonline.com/%7BtenantID%7D/oauth2/v2.0/token"},"https://login.microsoftonline.com/{tenantID}/oauth2/v2.0/token"))))),(0,r.kt)("h4",{id:"china"},"China:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Rancher Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Deprecated Endpoints"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Auth Endpoint"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://login.chinacloudapi.cn/%7BtenantID%7D/oauth2/authorize"},"https://login.chinacloudapi.cn/{tenantID}/oauth2/authorize"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Endpoint"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://login.chinacloudapi.cn/"},"https://login.chinacloudapi.cn/"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Graph Endpoint"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://graph.chinacloudapi.cn/"},"https://graph.chinacloudapi.cn/"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Token Endpoint"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://login.chinacloudapi.cn/%7BtenantID%7D/oauth2/token"},"https://login.chinacloudapi.cn/{tenantID}/oauth2/token"))))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Rancher Field"),(0,r.kt)("th",{parentName:"tr",align:null},"New Endpoints"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Auth Endpoint"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://login.partner.microsoftonline.cn/%7BtenantID%7D/oauth2/v2.0/authorize"},"https://login.partner.microsoftonline.cn/{tenantID}/oauth2/v2.0/authorize"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Endpoint"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://login.partner.microsoftonline.cn/"},"https://login.partner.microsoftonline.cn/"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Graph Endpoint"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://microsoftgraph.chinacloudapi.cn"},"https://microsoftgraph.chinacloudapi.cn"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Token Endpoint"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://login.partner.microsoftonline.cn/%7BtenantID%7D/oauth2/v2.0/token"},"https://login.partner.microsoftonline.cn/{tenantID}/oauth2/v2.0/token")))))),(0,r.kt)(h,{value:"Rancher v2.6.0 - v2.6.6",mdxType:"TabItem"},(0,r.kt)("h2",{id:"deprecated-azure-ad-graph-api"},"Deprecated Azure AD Graph API"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Important:")),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/graph/migrate-azure-ad-graph-overview"},"Azure AD Graph API")," is deprecated and will be retired by Microsoft at any time after June 30, 2023, without advance notice. We will update our docs to advise the community when it is retired. Rancher now uses the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/graph/use-the-api"},"Microsoft Graph API")," as the new flow to set up Azure AD as the external auth provider.")),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"If you're a new user, or wish to migrate, refer to the new flow instructions for ",(0,r.kt)("a",{href:"#microsoft-graph-api/",target:"_blank"},"Rancher v2.6.7+"),".")),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"If you don't  wish to upgrade to v2.6.7+ after the Azure AD Graph API is retired, you'll need to either:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Use the built-in Rancher auth or"),(0,r.kt)("li",{parentName:"ul"},"Use another third-party auth system and set that up in Rancher. Please see the ",(0,r.kt)("a",{parentName:"li",href:"/v2.6/pages-for-subheaders/authentication-config"},"authentication docs")," to learn how to configure other open authentication providers."))))))))}d.isMDXComponent=!0},7588:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/api-permissions-bbec1fbc67990a297b9401f5892d30b8.png"},20313:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/app-configuration-287289a3380340c46b6c413c202b96af.png"},65572:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/azure-update-popup-b45a735aebc6c2768e602f4028867c72.png"},77887:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/endpoints-a84e7e422cf92a96a602bf189985508f.png"},89099:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/new-app-registration-59bd7ed40c2a28a68136c698fa6ead86.png"},45103:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/new-client-secret-0b15bf6a6882b115021ee92df3b63adc.png"},54197:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/open-rancher-app-reg-5b20da33433cbef42e010c94d1fcf334.png"},80162:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/rancher-button-to-update-192a6ebc55a50b8fcfd5acc5d17c7f9b.png"},53809:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/rancher-ui-azure-update-ff6ad0b948cef1983d8327e56300fabf.png"},37919:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/select-req-permissions-575ef9d493f6f5414b65b0ff7eb14c03.png"},5809:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tenant-application-id-secret-94a4ceccec0454d98ae6543f732857cb.png"}}]);