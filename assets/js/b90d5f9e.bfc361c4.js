"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[98958],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},38498:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],s={title:"Configure GitHub"},c=void 0,l={unversionedId:"how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-github",id:"version-2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-github",title:"Configure GitHub",description:"In environments using GitHub, you can configure Rancher to allow sign on using GitHub credentials.",source:"@site/versioned_docs/version-2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-github.md",sourceDirName:"how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config",slug:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-github",permalink:"/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-github",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-github.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"11/14/2022",frontMatter:{title:"Configure GitHub"},sidebar:"tutorialSidebar",previous:{title:"Configure Azure AD",permalink:"/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-azure-ad"},next:{title:"Configure Keycloak (OIDC)",permalink:"/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-keycloak-oidc"}},u={},p=[],d={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In environments using GitHub, you can configure Rancher to allow sign on using GitHub credentials."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Prerequisites:")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Read ",(0,r.kt)("a",{parentName:"p",href:"/v2.6/pages-for-subheaders/authentication-config#external-authentication-configuration-and-principal-users"},"External Authentication Configuration and Principal Users"),"."))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Sign into Rancher using a local user assigned the ",(0,r.kt)("inlineCode",{parentName:"p"},"administrator")," role (i.e., the ",(0,r.kt)("em",{parentName:"p"},"local principal"),").")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the top left corner, click ",(0,r.kt)("strong",{parentName:"p"},"\u2630 > Users & Authentication"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the left navigation menu, click ",(0,r.kt)("strong",{parentName:"p"},"Auth Provider"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"GitHub"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Follow the directions displayed to set up a GitHub Application. Rancher redirects you to GitHub to complete registration."),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"What's an Authorization Callback URL?")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The Authorization Callback URL is the URL where users go to begin using your application (i.e. the splash screen)."),(0,r.kt)("p",{parentName:"div"},"When you use external authentication, authentication does not actually take place in your application. Instead, authentication takes place externally (in this case, GitHub). After this external authentication completes successfully, the Authorization Callback URL is the location where the user re-enters your application.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From GitHub, copy the ",(0,r.kt)("strong",{parentName:"p"},"Client ID")," and ",(0,r.kt)("strong",{parentName:"p"},"Client Secret"),". Paste them into Rancher."),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Where do I find the Client ID and Client Secret?")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"From GitHub, select Settings > Developer Settings > OAuth Apps. The Client ID and Client Secret are displayed prominently.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Authenticate with GitHub"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use the ",(0,r.kt)("strong",{parentName:"p"},"Site Access")," options to configure the scope of user authorization."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Allow any valid Users")),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("em",{parentName:"p"},"Any")," GitHub user can access Rancher. We generally discourage use of this setting!")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Allow members of Clusters, Projects, plus Authorized Users and Organizations")),(0,r.kt)("p",{parentName:"li"},"  Any GitHub user or group added as a ",(0,r.kt)("strong",{parentName:"p"},"Cluster Member")," or ",(0,r.kt)("strong",{parentName:"p"},"Project Member")," can log in to Rancher. Additionally, any GitHub user or group you add to the ",(0,r.kt)("strong",{parentName:"p"},"Authorized Users and Organizations")," list may log in to Rancher.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Restrict access to only Authorized Users and Organizations")),(0,r.kt)("p",{parentName:"li"},"  Only GitHub users or groups added to the Authorized Users and Organizations can log in to Rancher."),(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Enable"),"."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GitHub authentication is configured."),(0,r.kt)("li",{parentName:"ul"},"You are signed into Rancher with your GitHub account (i.e., the ",(0,r.kt)("em",{parentName:"li"},"external principal"),").")))}m.isMDXComponent=!0}}]);