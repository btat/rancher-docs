"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[98958],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=i.createContext({}),l=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return i.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=l(n),m=a,d=g["".concat(u,".").concat(m)]||g[m]||p[m]||r;return n?i.createElement(d,o(o({ref:t},c),{},{components:n})):i.createElement(d,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=g;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},38498:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=n(87462),a=(n(67294),n(3905));const r={title:"Configure GitHub"},o=void 0,s={unversionedId:"how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-github",id:"version-2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-github",title:"Configure GitHub",description:"In environments using GitHub, you can configure Rancher to allow sign on using GitHub credentials.",source:"@site/versioned_docs/version-2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-github.md",sourceDirName:"how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config",slug:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-github",permalink:"/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-github",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-github.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"Nov 14, 2022",frontMatter:{title:"Configure GitHub"},sidebar:"tutorialSidebar",previous:{title:"Configure Azure AD",permalink:"/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-azure-ad"},next:{title:"Configure Keycloak (OIDC)",permalink:"/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-keycloak-oidc"}},u={},l=[],c={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In environments using GitHub, you can configure Rancher to allow sign on using GitHub credentials."),(0,a.kt)("admonition",{title:"Prerequisites:",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Read ",(0,a.kt)("a",{parentName:"p",href:"/v2.6/pages-for-subheaders/authentication-config#external-authentication-configuration-and-principal-users"},"External Authentication Configuration and Principal Users"),".")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Sign into Rancher using a local user assigned the ",(0,a.kt)("inlineCode",{parentName:"p"},"administrator")," role (i.e., the ",(0,a.kt)("em",{parentName:"p"},"local principal"),").")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the top left corner, click ",(0,a.kt)("strong",{parentName:"p"},"\u2630 > Users & Authentication"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the left navigation menu, click ",(0,a.kt)("strong",{parentName:"p"},"Auth Provider"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"GitHub"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Follow the directions displayed to set up a GitHub Application. Rancher redirects you to GitHub to complete registration."),(0,a.kt)("admonition",{parentName:"li",title:"What's an Authorization Callback URL?",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The Authorization Callback URL is the URL where users go to begin using your application (i.e. the splash screen)."),(0,a.kt)("p",{parentName:"admonition"},"When you use external authentication, authentication does not actually take place in your application. Instead, authentication takes place externally (in this case, GitHub). After this external authentication completes successfully, the Authorization Callback URL is the location where the user re-enters your application."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From GitHub, copy the ",(0,a.kt)("strong",{parentName:"p"},"Client ID")," and ",(0,a.kt)("strong",{parentName:"p"},"Client Secret"),". Paste them into Rancher."),(0,a.kt)("admonition",{parentName:"li",title:"Where do I find the Client ID and Client Secret?",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"From GitHub, select Settings > Developer Settings > OAuth Apps. The Client ID and Client Secret are displayed prominently."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Authenticate with GitHub"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Use the ",(0,a.kt)("strong",{parentName:"p"},"Site Access")," options to configure the scope of user authorization."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Allow any valid Users")),(0,a.kt)("p",{parentName:"li"},"  ",(0,a.kt)("em",{parentName:"p"},"Any")," GitHub user can access Rancher. We generally discourage use of this setting!")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Allow members of Clusters, Projects, plus Authorized Users and Organizations")),(0,a.kt)("p",{parentName:"li"},"  Any GitHub user or group added as a ",(0,a.kt)("strong",{parentName:"p"},"Cluster Member")," or ",(0,a.kt)("strong",{parentName:"p"},"Project Member")," can log in to Rancher. Additionally, any GitHub user or group you add to the ",(0,a.kt)("strong",{parentName:"p"},"Authorized Users and Organizations")," list may log in to Rancher.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Restrict access to only Authorized Users and Organizations")),(0,a.kt)("p",{parentName:"li"},"  Only GitHub users or groups added to the Authorized Users and Organizations can log in to Rancher."),(0,a.kt)("br",null)))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Enable"),"."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"GitHub authentication is configured."),(0,a.kt)("li",{parentName:"ul"},"You are signed into Rancher with your GitHub account (i.e., the ",(0,a.kt)("em",{parentName:"li"},"external principal"),").")))}p.isMDXComponent=!0}}]);