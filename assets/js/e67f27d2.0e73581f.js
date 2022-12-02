"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[29890],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),k=p(n),c=r,m=k["".concat(s,".").concat(c)]||k[c]||d[c]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},88992:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"API Tokens"},i=void 0,l={unversionedId:"reference-guides/about-the-api/api-tokens",id:"version-2.5/reference-guides/about-the-api/api-tokens",title:"API Tokens",description:"By default, some cluster-level API tokens are generated with infinite time-to-live (ttl=0). In other words, API tokens with ttl=0 never expire unless you invalidate them. Tokens are not invalidated by changing a password.",source:"@site/versioned_docs/version-2.5/reference-guides/about-the-api/api-tokens.md",sourceDirName:"reference-guides/about-the-api",slug:"/reference-guides/about-the-api/api-tokens",permalink:"/v2.5/reference-guides/about-the-api/api-tokens",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/reference-guides/about-the-api/api-tokens.md",tags:[],version:"2.5",lastUpdatedAt:1666742529,formattedLastUpdatedAt:"Oct 26, 2022",frontMatter:{title:"API Tokens"},sidebar:"tutorialSidebar",previous:{title:"API",permalink:"/v2.5/pages-for-subheaders/about-the-api"},next:{title:"Tools for Logging, Monitoring, and Visibility",permalink:"/v2.5/reference-guides/rancher-cluster-tools"}},s={},p=[{value:"Deleting tokens",id:"deleting-tokens",level:3},{value:"Setting TTL on Kubeconfig Tokens",id:"setting-ttl-on-kubeconfig-tokens",level:3}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"By default, some cluster-level API tokens are generated with infinite time-to-live (",(0,r.kt)("inlineCode",{parentName:"p"},"ttl=0"),"). In other words, API tokens with ",(0,r.kt)("inlineCode",{parentName:"p"},"ttl=0")," never expire unless you invalidate them. Tokens are not invalidated by changing a password."),(0,r.kt)("p",null,"You can deactivate API tokens by deleting them or by deactivating the user account."),(0,r.kt)("h3",{id:"deleting-tokens"},"Deleting tokens"),(0,r.kt)("p",null,"To delete a token,"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to the list of all tokens in the Rancher API view at ",(0,r.kt)("inlineCode",{parentName:"p"},"https://<Rancher-Server-IP>/v3/tokens"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Access the token you want to delete by its ID. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"https://<Rancher-Server-IP>/v3/tokens/kubectl-shell-user-vqkqt"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Delete.")))),(0,r.kt)("p",null,"Here is the complete list of tokens that are generated with ",(0,r.kt)("inlineCode",{parentName:"p"},"ttl=0"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Token"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"kubeconfig-*")),(0,r.kt)("td",{parentName:"tr",align:null},"Kubeconfig token")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"kubectl-shell-*")),(0,r.kt)("td",{parentName:"tr",align:null},"Access to ",(0,r.kt)("inlineCode",{parentName:"td"},"kubectl")," shell in the browser")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"agent-*")),(0,r.kt)("td",{parentName:"tr",align:null},"Token for agent deployment")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"compose-token-*")),(0,r.kt)("td",{parentName:"tr",align:null},"Token for compose")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"helm-token-*")),(0,r.kt)("td",{parentName:"tr",align:null},"Token for Helm chart deployment")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"telemetry-*")),(0,r.kt)("td",{parentName:"tr",align:null},"Telemetry token")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"drain-node-*")),(0,r.kt)("td",{parentName:"tr",align:null},"Token for drain (we use ",(0,r.kt)("inlineCode",{parentName:"td"},"kubectl")," for drain because there is no native Kubernetes API)")))),(0,r.kt)("h3",{id:"setting-ttl-on-kubeconfig-tokens"},"Setting TTL on Kubeconfig Tokens"),(0,r.kt)("p",null,"Admins can set a global TTL on Kubeconfig tokens. Once the token expires the kubectl command will require the user to authenticate to Rancher."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Disable the kubeconfig-generate-token setting in the Rancher API view at ",(0,r.kt)("inlineCode",{parentName:"p"},"https://<Rancher-Server-IP/v3/settings/kubeconfig-generate-token"),". This setting instructs Rancher to no longer automatically generate a token when a user clicks on download a kubeconfig file. The kubeconfig file will now provide a command to login to Rancher.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Edit the setting and set the value to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to setting kubeconfig-token-ttl-minutes in the Rancher API view at ",(0,r.kt)("inlineCode",{parentName:"p"},"https://<Rancher-Server-IP/v3/settings/kubeconfig-token-ttl-minutes"),". By default, kubeconfig-token-ttl-minutes is 960 (16 hours).")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Edit the setting and set the value to desired duration in minutes.\n",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"Note:"))," This value cannot exceed max-ttl of API tokens.(",(0,r.kt)("inlineCode",{parentName:"p"},"https://<Rancher-Server-IP/v3/settings/auth-token-max-ttl-minutes"),"). ",(0,r.kt)("inlineCode",{parentName:"p"},"auth-token-max-ttl-minutes")," is set to 1440 (24 hours) by default.  ",(0,r.kt)("inlineCode",{parentName:"p"},"auth-token-max-ttl-minutes would default to 0 allowing tokens to never expire"),"."))))}d.isMDXComponent=!0}}]);