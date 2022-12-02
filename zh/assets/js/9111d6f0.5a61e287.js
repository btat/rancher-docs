"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[35663],{3905:(e,t,a)=>{a.d(t,{Zo:()=>k,kt:()=>u});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},k=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),c=s(a),u=l,d=c["".concat(p,".").concat(u)]||c[u]||m[u]||r;return a?n.createElement(d,i(i({ref:t},k),{},{components:a})):n.createElement(d,i({ref:t},k))}));function u(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),l=a(86010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(87462),l=a(67294),r=a(86010),i=a(72389),o=a(67392),p=a(7094),s=a(12466);const k="tabList__CuJ",m="tabItem_LNqP";function c(e){const{lazy:t,block:a,defaultValue:i,values:c,groupId:u,className:d}=e,N=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=c??N.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),y=(0,o.l)(g,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===i?i:i??N.find((e=>e.props.default))?.props.value??N[0].props.value;if(null!==h&&!g.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:b}=(0,p.U)(),[v,w]=(0,l.useState)(h),C=[],{blockElementScrollPositionUntilNextRender:E}=(0,s.o5)();if(null!=u){const e=f[u];null!=e&&e!==v&&g.some((t=>t.value===e))&&w(e)}const K=e=>{const t=e.currentTarget,a=C.indexOf(t),n=g[a].value;n!==v&&(E(t),w(n),null!=u&&b(u,String(n)))},A=e=>{let t=null;switch(e.key){case"Enter":K(e);break;case"ArrowRight":{const a=C.indexOf(e.currentTarget)+1;t=C[a]??C[0];break}case"ArrowLeft":{const a=C.indexOf(e.currentTarget)-1;t=C[a]??C[C.length-1];break}}t?.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",k)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},d)},g.map((e=>{let{value:t,label:a,attributes:i}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,key:t,ref:e=>C.push(e),onKeyDown:A,onClick:K},i,{className:(0,r.Z)("tabs__item",m,i?.className,{"tabs__item--active":v===t})}),a??t)}))),t?(0,l.cloneElement)(N.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},N.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function u(e){const t=(0,i.Z)();return l.createElement(c,(0,n.Z)({key:String(t)},e))}},55229:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>k,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var n=a(87462),l=(a(67294),a(3905)),r=a(65488),i=a(85162);const o={title:"\u914d\u7f6e Keycloak (SAML)",description:"\u521b\u5efa Keycloak SAML \u5ba2\u6237\u7aef\u5e76\u914d\u7f6e Rancher \u4ee5\u4f7f\u7528 Keycloak\u3002\u4f60\u7684\u7528\u6237\u5c06\u80fd\u591f\u4f7f\u7528\u4ed6\u4eec\u7684 Keycloak \u767b\u5f55\u540d\u767b\u5f55 Rancher\u3002"},p=void 0,s={unversionedId:"how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-keycloak-saml",id:"version-2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-keycloak-saml",title:"\u914d\u7f6e Keycloak (SAML)",description:"\u521b\u5efa Keycloak SAML \u5ba2\u6237\u7aef\u5e76\u914d\u7f6e Rancher \u4ee5\u4f7f\u7528 Keycloak\u3002\u4f60\u7684\u7528\u6237\u5c06\u80fd\u591f\u4f7f\u7528\u4ed6\u4eec\u7684 Keycloak \u767b\u5f55\u540d\u767b\u5f55 Rancher\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-keycloak-saml.md",sourceDirName:"how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config",slug:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-keycloak-saml",permalink:"/zh/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-keycloak-saml",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-keycloak-saml.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"2022\u5e7411\u670814\u65e5",frontMatter:{title:"\u914d\u7f6e Keycloak (SAML)",description:"\u521b\u5efa Keycloak SAML \u5ba2\u6237\u7aef\u5e76\u914d\u7f6e Rancher \u4ee5\u4f7f\u7528 Keycloak\u3002\u4f60\u7684\u7528\u6237\u5c06\u80fd\u591f\u4f7f\u7528\u4ed6\u4eec\u7684 Keycloak \u767b\u5f55\u540d\u767b\u5f55 Rancher\u3002"},sidebar:"tutorialSidebar",previous:{title:"\u914d\u7f6e Keycloak (OIDC)",permalink:"/zh/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-keycloak-oidc"},next:{title:"\u914d\u7f6e PingIdentity (SAML)",permalink:"/zh/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-pingidentity"}},k={},m=[{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:2},{value:"\u83b7\u53d6 IDP \u5143\u6570\u636e",id:"\u83b7\u53d6-idp-\u5143\u6570\u636e",level:2},{value:"\u5728 Rancher \u4e2d\u914d\u7f6e Keycloak",id:"\u5728-rancher-\u4e2d\u914d\u7f6e-keycloak",level:2},{value:"\u914d\u7f6e\u53c2\u8003",id:"\u914d\u7f6e\u53c2\u8003",level:2},{value:"\u9644\u5f55\uff1a\u6545\u969c\u6392\u9664",id:"\u9644\u5f55\u6545\u969c\u6392\u9664",level:2},{value:"\u4e0d\u80fd\u91cd\u5b9a\u5411\u5230 Keycloak",id:"\u4e0d\u80fd\u91cd\u5b9a\u5411\u5230-keycloak",level:3},{value:"IdP \u767b\u5f55\u540e\u663e\u793a\u7981\u6b62\u6d88\u606f",id:"idp-\u767b\u5f55\u540e\u663e\u793a\u7981\u6b62\u6d88\u606f",level:3},{value:"\u8bbf\u95ee <code>/v1-saml/keycloak/saml/metadata</code> \u65f6\u8fd4\u56de HTTP 502",id:"\u8bbf\u95ee-v1-samlkeycloaksamlmetadata-\u65f6\u8fd4\u56de-http-502",level:3},{value:"Keycloak \u9519\u8bef\uff1a&quot;We&#39;re sorry, failed to process response&quot;",id:"keycloak-\u9519\u8befwere-sorry-failed-to-process-response",level:3},{value:"Keycloak \u9519\u8bef\uff1a&quot;We&#39;re sorry, invalid requester&quot;",id:"keycloak-\u9519\u8befwere-sorry-invalid-requester",level:3}],c={toc:m};function u(e){let{components:t,...o}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u7684\u7ec4\u7ec7\u4f7f\u7528 Keycloak Identity Provider (IdP) \u8fdb\u884c\u7528\u6237\u8eab\u4efd\u9a8c\u8bc1\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e Rancher \u6765\u5141\u8bb8\u7528\u6237\u4f7f\u7528 IdP \u51ed\u8bc1\u767b\u5f55\u3002"),(0,l.kt)("h2",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4f60\u5fc5\u987b\u914d\u7f6e\u4e86 ",(0,l.kt)("a",{parentName:"p",href:"https://www.keycloak.org/docs/latest/server_installation/"},"Keycloak IdP \u670d\u52a1\u5668"),"\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5728 Keycloak \u4e2d\uff0c\u4f7f\u7528\u4ee5\u4e0b\u8bbe\u7f6e\u521b\u5efa\u4e00\u4e2a",(0,l.kt)("a",{parentName:"p",href:"https://www.keycloak.org/docs/latest/server_admin/#saml-clients"},"\u65b0\u7684 SAML \u5ba2\u6237\u7aef"),"\u3002\u5982\u9700\u83b7\u53d6\u5e2e\u52a9\uff0c\u8bf7\u53c2\u89c1 ",(0,l.kt)("a",{parentName:"p",href:"https://www.keycloak.org/docs/latest/server_admin/#saml-clients"},"Keycloak \u6587\u6863"),"\u3002"),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u8bbe\u7f6e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Sign Documents")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ON")," ",(0,l.kt)("sup",null,"1"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Sign Assertions")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ON")," ",(0,l.kt)("sup",null,"1"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u6240\u6709\u5176\u4ed6 ",(0,l.kt)("inlineCode",{parentName:"td"},"ON/OFF")," \u8bbe\u7f6e"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"OFF"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Client ID")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8f93\u5165 ",(0,l.kt)("inlineCode",{parentName:"td"},"https://yourRancherHostURL/v1-saml/keycloak/saml/metadata"),"\uff0c\u6216\u5728 Rancher Keycloak \u914d\u7f6e",(0,l.kt)("sup",null,"2")," \u4e2d ",(0,l.kt)("inlineCode",{parentName:"td"},"Entry ID \u5b57\u6bb5"),"\u7684\u503c\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Client Name")),(0,l.kt)("td",{parentName:"tr",align:null},"<CLIENT_NAME> (\u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"td"},"rancher"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Client Protocol")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"SAML"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Valid Redirect URI")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"https://yourRancherHostURL/v1-saml/keycloak/saml/acs"))))),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("sup",null,"1"),"\uff1a\u53ef\u4ee5\u9009\u62e9\u542f\u7528\u8fd9\u4e9b\u8bbe\u7f6e\u4e2d\u7684\u4e00\u4e2a\u6216\u4e24\u4e2a\u3002",(0,l.kt)("sup",null,"2"),"\uff1a\u5728\u914d\u7f6e\u548c\u4fdd\u5b58 SAML \u8eab\u4efd\u63d0\u4f9b\u5546\u4e4b\u524d\uff0c\u4e0d\u4f1a\u751f\u6210 Rancher SAML \u5143\u6570\u636e\u3002"),(0,l.kt)("p",{parentName:"li"}," ",(0,l.kt)("img",{src:a(91906).Z,width:"1962",height:"2292"}))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5728\u65b0\u7684 SAML \u5ba2\u6237\u7aef\u4e2d\uff0c\u521b\u5efa Mappers \u6765\u516c\u5f00\u7528\u6237\u5b57\u6bb5\u3002"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},'\u6dfb\u52a0\u6240\u6709 "Builtin Protocol Mappers"\n',(0,l.kt)("img",{src:a(1051).Z,width:"2618",height:"898"})),(0,l.kt)("li",{parentName:"ul"},'\u521b\u5efa\u4e00\u4e2a "Group list" mapper\uff0c\u6765\u5c06\u6210\u5458\u5c5e\u6027\u6620\u5c04\u5230\u7528\u6237\u7684\u7ec4\uff1a\n',(0,l.kt)("img",{src:a(19640).Z,width:"1522",height:"1070"}))))),(0,l.kt)("h2",{id:"\u83b7\u53d6-idp-\u5143\u6570\u636e"},"\u83b7\u53d6 IDP \u5143\u6570\u636e"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"Keycloak 5 \u548c\u66f4\u65e9\u7684\u7248\u672c",mdxType:"TabItem"},(0,l.kt)("p",null,"\u8981\u83b7\u53d6 IDP \u5143\u6570\u636e\uff0c\u8bf7\u4ece Keycloak \u5ba2\u6237\u7aef\u5bfc\u51fa ",(0,l.kt)("inlineCode",{parentName:"p"},"metadata.xml")," \u6587\u4ef6\u3002\n\u5728",(0,l.kt)("strong",{parentName:"p"},"\u5b89\u88c5"),"\u9009\u9879\u5361\u4e2d\uff0c\u9009\u62e9",(0,l.kt)("strong",{parentName:"p"},"SAML \u5143\u6570\u636e IDPSSODescriptor")," \u683c\u5f0f\u9009\u9879\u5e76\u4e0b\u8f7d\u4f60\u7684\u6587\u4ef6\u3002")),(0,l.kt)(i.Z,{value:"Keycloak 6-13",mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5728",(0,l.kt)("strong",{parentName:"li"},"\u914d\u7f6e"),"\u4e2d\uff0c\u5355\u51fb ",(0,l.kt)("strong",{parentName:"li"},"Realm \u8bbe\u7f6e"),"\u9009\u9879\u5361\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,l.kt)("strong",{parentName:"li"},"\u901a\u7528"),"\u9009\u9879\u5361\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5728",(0,l.kt)("strong",{parentName:"li"},"\u7aef\u70b9"),"\u5b57\u6bb5\u4e2d\uff0c\u5355\u51fb ",(0,l.kt)("strong",{parentName:"li"},"SAML 2.0 \u8eab\u4efd\u63d0\u4f9b\u8005\u5143\u6570\u636e"),"\u3002")),(0,l.kt)("p",null,"\u9a8c\u8bc1 IDP \u5143\u6570\u636e\u662f\u5426\u5305\u542b\u4ee5\u4e0b\u5c5e\u6027\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'xmlns:md="urn:oasis:names:tc:SAML:2.0:metadata"\nxmlns:saml="urn:oasis:names:tc:SAML:2.0:assertion"\nxmlns:ds="http://www.w3.org/2000/09/xmldsig#"\n')),(0,l.kt)("p",null,"\u67d0\u4e9b\u6d4f\u89c8\u5668\uff08\u4f8b\u5982 Firefox\uff09\u53ef\u80fd\u4f1a\u6e32\u67d3/\u5904\u7406\u6587\u6863\uff0c\u4f7f\u5f97\u5185\u5bb9\u770b\u8d77\u6765\u5df2\u88ab\u4fee\u6539\uff0c\u5e76\u4e14\u67d0\u4e9b\u5c5e\u6027\u770b\u8d77\u6765\u53ef\u80fd\u6709\u7f3a\u5931\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u8bf7\u4f7f\u7528\u901a\u8fc7\u6d4f\u89c8\u5668\u627e\u5230\u7684\u539f\u59cb\u54cd\u5e94\u6570\u636e\u3002"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u662f Firefox \u7684\u793a\u4f8b\u6d41\u7a0b\uff0c\u5176\u4ed6\u6d4f\u89c8\u5668\u53ef\u80fd\u4f1a\u7565\u6709\u4e0d\u540c\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6309\u4e0b ",(0,l.kt)("strong",{parentName:"li"},"F12")," \u8bbf\u95ee\u5f00\u53d1\u8005\u63a7\u5236\u53f0\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,l.kt)("strong",{parentName:"li"},"Network")," \u9009\u9879\u5361\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u4ece\u8868\u4e2d\uff0c\u5355\u51fb\u5305\u542b ",(0,l.kt)("inlineCode",{parentName:"li"},"descriptor")," \u7684\u884c\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5728 details \u7a97\u683c\u4e2d\uff0c\u5355\u51fb ",(0,l.kt)("strong",{parentName:"li"},"Response")," \u9009\u9879\u5361\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u590d\u5236\u539f\u59cb\u54cd\u5e94\u6570\u636e\u3002")),(0,l.kt)("p",null,"\u83b7\u5f97\u7684 XML \u4ee5 ",(0,l.kt)("inlineCode",{parentName:"p"},"EntitiesDescriptor")," \u4f5c\u4e3a\u6839\u5143\u7d20\u3002\u7136\u800c\uff0cRancher \u5e0c\u671b\u6839\u5143\u7d20\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"EntityDescriptor")," \u800c\u4e0d\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"EntitiesDescriptor"),"\u3002\u56e0\u6b64\uff0c\u5728\u5c06\u8fd9\u4e2a XML \u4f20\u9012\u7ed9 Rancher \u4e4b\u524d\uff0c\u8bf7\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u8c03\u6574\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5c06\u6240\u6709\u4e0d\u5b58\u5728\u7684\u5c5e\u6027\u4ece ",(0,l.kt)("inlineCode",{parentName:"li"},"EntitiesDescriptor")," \u590d\u5236\u5230 ",(0,l.kt)("inlineCode",{parentName:"li"},"EntityDescriptor"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5220\u9664\u5f00\u5934\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"<EntitiesDescriptor>")," \u6807\u7b7e\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5220\u9664 xml \u672b\u5c3e\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"</EntitiesDescriptor>"),"\u3002")),(0,l.kt)("p",null,"\u6700\u540e\u7684\u4ee3\u7801\u4f1a\u662f\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'<EntityDescriptor xmlns="urn:oasis:names:tc:SAML:2.0:metadata" xmlns:dsig="http://www.w3.org/2000/09/xmldsig#" entityID="https://{KEYCLOAK-URL}/auth/realms/{REALM-NAME}">\n....\n</EntityDescriptor>\n'))),(0,l.kt)(i.Z,{value:"Keycloak 14+",mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5728",(0,l.kt)("strong",{parentName:"li"},"\u914d\u7f6e"),"\u4e2d\uff0c\u5355\u51fb ",(0,l.kt)("strong",{parentName:"li"},"Realm \u8bbe\u7f6e"),"\u9009\u9879\u5361\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,l.kt)("strong",{parentName:"li"},"\u901a\u7528"),"\u9009\u9879\u5361\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5728",(0,l.kt)("strong",{parentName:"li"},"\u7aef\u70b9"),"\u5b57\u6bb5\u4e2d\uff0c\u5355\u51fb ",(0,l.kt)("strong",{parentName:"li"},"SAML 2.0 \u8eab\u4efd\u63d0\u4f9b\u8005\u5143\u6570\u636e"),"\u3002")),(0,l.kt)("p",null,"\u9a8c\u8bc1 IDP \u5143\u6570\u636e\u662f\u5426\u5305\u542b\u4ee5\u4e0b\u5c5e\u6027\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'xmlns:md="urn:oasis:names:tc:SAML:2.0:metadata"\nxmlns:saml="urn:oasis:names:tc:SAML:2.0:assertion"\nxmlns:ds="http://www.w3.org/2000/09/xmldsig#"\n')),(0,l.kt)("p",null,"\u67d0\u4e9b\u6d4f\u89c8\u5668\uff08\u4f8b\u5982 Firefox\uff09\u53ef\u80fd\u4f1a\u6e32\u67d3/\u5904\u7406\u6587\u6863\uff0c\u4f7f\u5f97\u5185\u5bb9\u770b\u8d77\u6765\u5df2\u88ab\u4fee\u6539\uff0c\u5e76\u4e14\u67d0\u4e9b\u5c5e\u6027\u770b\u8d77\u6765\u53ef\u80fd\u6709\u7f3a\u5931\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u8bf7\u4f7f\u7528\u901a\u8fc7\u6d4f\u89c8\u5668\u627e\u5230\u7684\u539f\u59cb\u54cd\u5e94\u6570\u636e\u3002"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u662f Firefox \u7684\u793a\u4f8b\u6d41\u7a0b\uff0c\u5176\u4ed6\u6d4f\u89c8\u5668\u53ef\u80fd\u4f1a\u7565\u6709\u4e0d\u540c\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6309\u4e0b ",(0,l.kt)("strong",{parentName:"li"},"F12")," \u8bbf\u95ee\u5f00\u53d1\u8005\u63a7\u5236\u53f0\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,l.kt)("strong",{parentName:"li"},"Network")," \u9009\u9879\u5361\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u4ece\u8868\u4e2d\uff0c\u5355\u51fb\u5305\u542b ",(0,l.kt)("inlineCode",{parentName:"li"},"descriptor")," \u7684\u884c\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5728 details \u7a97\u683c\u4e2d\uff0c\u5355\u51fb ",(0,l.kt)("strong",{parentName:"li"},"Response")," \u9009\u9879\u5361\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u590d\u5236\u539f\u59cb\u54cd\u5e94\u6570\u636e\u3002")))),(0,l.kt)("h2",{id:"\u5728-rancher-\u4e2d\u914d\u7f6e-keycloak"},"\u5728 Rancher \u4e2d\u914d\u7f6e Keycloak"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,l.kt)("strong",{parentName:"p"},"\u2630 > \u7528\u6237 & \u8ba4\u8bc1"),"\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\uff0c\u5355\u51fb",(0,l.kt)("strong",{parentName:"p"},"\u8ba4\u8bc1"),"\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5355\u51fb ",(0,l.kt)("strong",{parentName:"p"},"Keycloak SAML"),"\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u586b\u5199",(0,l.kt)("strong",{parentName:"p"},"\u914d\u7f6e Keycloak \u8d26\u53f7"),"\u8868\u5355\u3002\u6709\u5173\u586b\u5199\u8868\u5355\u7684\u5e2e\u52a9\uff0c\u8bf7\u53c2\u89c1",(0,l.kt)("a",{parentName:"p",href:"#%E9%85%8D%E7%BD%AE%E5%8F%82%E8%80%83"},"\u914d\u7f6e\u53c2\u8003"),"\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5b8c\u6210",(0,l.kt)("strong",{parentName:"p"},"\u914d\u7f6e Keycloak \u8d26\u53f7"),"\u8868\u5355\u540e\uff0c\u5355\u51fb",(0,l.kt)("strong",{parentName:"p"},"\u542f\u7528"),"\u3002"),(0,l.kt)("p",{parentName:"li"},"Rancher \u4f1a\u5c06\u4f60\u91cd\u5b9a\u5411\u5230 IdP \u767b\u5f55\u9875\u9762\u3002\u8f93\u5165\u4f7f\u7528 Keycloak IdP \u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\u7684\u51ed\u8bc1\uff0c\u6765\u9a8c\u8bc1\u4f60\u7684 Rancher Keycloak \u914d\u7f6e\u3002"),(0,l.kt)("admonition",{parentName:"li",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\u4f60\u53ef\u80fd\u9700\u8981\u7981\u7528\u5f39\u51fa\u7a97\u53e3\u963b\u6b62\u7a0b\u5e8f\u624d\u80fd\u770b\u5230 IdP \u767b\u5f55\u9875\u9762\u3002")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u5df2\u5c06 Rancher \u914d\u7f6e\u4e3a\u4f7f\u7528 Keycloak\u3002\u4f60\u7684\u7528\u6237\u73b0\u5728\u53ef\u4ee5\u4f7f\u7528 Keycloak \u767b\u5f55\u540d\u767b\u5f55 Rancher\u3002"),(0,l.kt)("admonition",{title:"SAML \u8eab\u4efd\u63d0\u4f9b\u5546\u6ce8\u610f\u4e8b\u9879",type:"note"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"SAML \u534f\u8bae\u4e0d\u652f\u6301\u641c\u7d22\u6216\u67e5\u627e\u7528\u6237\u6216\u7ec4\u3002\u56e0\u6b64\uff0c\u5c06\u7528\u6237\u6216\u7ec4\u6dfb\u52a0\u5230 Rancher \u65f6\u4e0d\u4f1a\u5bf9\u5176\u8fdb\u884c\u9a8c\u8bc1\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u7528\u6237\u65f6\uff0c\u5fc5\u987b\u6b63\u786e\u8f93\u5165\u786e\u5207\u7684\u7528\u6237 ID\uff08\u5373 ",(0,l.kt)("inlineCode",{parentName:"li"},"UID")," \u5b57\u6bb5\uff09\u3002\u952e\u5165\u7528\u6237 ID \u65f6\uff0c\u5c06\u4e0d\u4f1a\u641c\u7d22\u53ef\u80fd\u5339\u914d\u7684\u5176\u4ed6\u7528\u6237 ID\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u7ec4\u65f6\uff0c\u5fc5\u987b\u4ece\u6587\u672c\u6846\u65c1\u8fb9\u7684\u4e0b\u62c9\u5217\u8868\u4e2d\u9009\u62e9\u7ec4\u3002Rancher \u5047\u5b9a\u6765\u81ea\u6587\u672c\u6846\u7684\u4efb\u4f55\u8f93\u5165\u90fd\u662f\u7528\u6237\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u7528\u6237\u7ec4\u4e0b\u62c9\u5217\u8868\u4ec5\u663e\u793a\u4f60\u6240\u5c5e\u7684\u7528\u6237\u7ec4\u3002\u5982\u679c\u4f60\u4e0d\u662f\u67d0\u4e2a\u7ec4\u7684\u6210\u5458\uff0c\u4f60\u5c06\u65e0\u6cd5\u6dfb\u52a0\u8be5\u7ec4\u3002"))),(0,l.kt)("h2",{id:"\u914d\u7f6e\u53c2\u8003"},"\u914d\u7f6e\u53c2\u8003"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u540d\u79f0\u5b57\u6bb5"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5305\u542b\u7528\u6237\u663e\u793a\u540d\u79f0\u7684\u5c5e\u6027\u3002",(0,l.kt)("br",null),(0,l.kt)("br",null),"\u793a\u4f8b\uff1a",(0,l.kt)("inlineCode",{parentName:"td"},"givenName"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u540d\u5b57\u6bb5"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5305\u542b\u7528\u6237\u540d/\u7ed9\u5b9a\u540d\u79f0\u7684\u5c5e\u6027\u3002",(0,l.kt)("br",null),(0,l.kt)("br",null),"\u793a\u4f8b\uff1a",(0,l.kt)("inlineCode",{parentName:"td"},"email"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UID \u5b57\u6bb5"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6bcf\u4e2a\u7528\u6237\u72ec\u6709\u7684\u5c5e\u6027\u3002",(0,l.kt)("br",null),(0,l.kt)("br",null),"\u793a\u4f8b\uff1a",(0,l.kt)("inlineCode",{parentName:"td"},"email"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u7ec4\u5b57\u6bb5"),(0,l.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u7528\u4e8e\u7ba1\u7406\u7ec4\u6210\u5458\u5173\u7cfb\u7684\u6761\u76ee\u3002",(0,l.kt)("br",null),(0,l.kt)("br",null),"\u793a\u4f8b\uff1a",(0,l.kt)("inlineCode",{parentName:"td"},"member"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Entity ID \u5b57\u6bb5"),(0,l.kt)("td",{parentName:"tr",align:null},"Keycloak \u5ba2\u6237\u7aef\u4e2d\u9700\u8981\u914d\u7f6e\u4e3a\u5ba2\u6237\u7aef\u7684 ID\u3002",(0,l.kt)("br",null),(0,l.kt)("br",null),"\u9ed8\u8ba4\u503c\uff1a",(0,l.kt)("inlineCode",{parentName:"td"},"https://yourRancherHostURL/v1-saml/keycloak/saml/metadata"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Rancher API \u4e3b\u673a"),(0,l.kt)("td",{parentName:"tr",align:null},"Rancher Server \u7684 URL\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u79c1\u94a5/\u8bc1\u4e66"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5728 Rancher \u548c\u4f60\u7684 IdP \u4e4b\u95f4\u521b\u5efa\u5b89\u5168\u5916\u58f3\uff08SSH\uff09\u7684\u5bc6\u94a5/\u8bc1\u4e66\u5bf9\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IDP \u5143\u6570\u636e"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ece IdP \u670d\u52a1\u5668\u5bfc\u51fa\u7684 ",(0,l.kt)("inlineCode",{parentName:"td"},"metadata.xml")," \u6587\u4ef6\u3002")))),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u4f60\u53ef\u4ee5\u4f7f\u7528 openssl \u547d\u4ee4\u751f\u6210\u4e00\u4e2a\u5bc6\u94a5/\u8bc1\u4e66\u5bf9\u3002\u4f8b\u5982\uff1a"),(0,l.kt)("p",{parentName:"admonition"},"openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout myservice.key -out myservice.cert")),(0,l.kt)("h2",{id:"\u9644\u5f55\u6545\u969c\u6392\u9664"},"\u9644\u5f55\uff1a\u6545\u969c\u6392\u9664"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u5728\u6d4b\u8bd5\u4e0e Keycloak \u670d\u52a1\u5668\u7684\u8fde\u63a5\u65f6\u9047\u5230\u95ee\u9898\uff0c\u8bf7\u5148\u68c0\u67e5 SAML \u5ba2\u6237\u7aef\u7684\u914d\u7f6e\u9009\u9879\u3002\u4f60\u8fd8\u53ef\u4ee5\u68c0\u67e5 Rancher \u65e5\u5fd7\u6765\u67e5\u660e\u95ee\u9898\u7684\u539f\u56e0\u3002\u8c03\u8bd5\u65e5\u5fd7\u53ef\u80fd\u5305\u542b\u6709\u5173\u9519\u8bef\u7684\u66f4\u8be6\u7ec6\u4fe1\u606f\u3002\u8be6\u60c5\u8bf7\u53c2\u89c1",(0,l.kt)("a",{parentName:"p",href:"/zh/v2.6/faq/technical-items#%E5%A6%82%E4%BD%95%E5%90%AF%E7%94%A8%E8%B0%83%E8%AF%95%E6%97%A5%E5%BF%97%E8%AE%B0%E5%BD%95%EF%BC%9F"},"\u5982\u4f55\u542f\u7528\u8c03\u8bd5\u65e5\u5fd7"),"\u3002"),(0,l.kt)("h3",{id:"\u4e0d\u80fd\u91cd\u5b9a\u5411\u5230-keycloak"},"\u4e0d\u80fd\u91cd\u5b9a\u5411\u5230 Keycloak"),(0,l.kt)("p",null,"\u70b9\u51fb",(0,l.kt)("strong",{parentName:"p"},"\u4f7f\u7528 Keycloak \u8ba4\u8bc1"),"\u65f6\uff0c\u6ca1\u6709\u91cd\u5b9a\u5411\u5230\u4f60\u7684 IdP\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9a8c\u8bc1\u4f60\u7684 Keycloak \u5ba2\u6237\u7aef\u914d\u7f6e\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u786e\u4fdd ",(0,l.kt)("inlineCode",{parentName:"li"},"Force Post Binding")," \u8bbe\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"OFF"),"\u3002")),(0,l.kt)("h3",{id:"idp-\u767b\u5f55\u540e\u663e\u793a\u7981\u6b62\u6d88\u606f"},"IdP \u767b\u5f55\u540e\u663e\u793a\u7981\u6b62\u6d88\u606f"),(0,l.kt)("p",null,"\u4f60\u5df2\u6b63\u786e\u91cd\u5b9a\u5411\u5230\u4f60\u7684 IdP \u767b\u5f55\u9875\u9762\uff0c\u5e76\u4e14\u53ef\u4ee5\u8f93\u5165\u51ed\u8bc1\uff0c\u4f46\u662f\u4e4b\u540e\u6536\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"Forbidden")," \u6d88\u606f\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u68c0\u67e5 Rancher \u8c03\u8bd5\u65e5\u5fd7\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u65e5\u5fd7\u663e\u793a ",(0,l.kt)("inlineCode",{parentName:"li"},"ERROR: either the Response or Assertion must be signed"),"\uff0c\u786e\u4fdd ",(0,l.kt)("inlineCode",{parentName:"li"},"Sign Documents")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"li"},"Sign assertions")," \u5728 Keycloak \u5ba2\u6237\u7aef\u4e2d\u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"ON"),"\u3002")),(0,l.kt)("h3",{id:"\u8bbf\u95ee-v1-samlkeycloaksamlmetadata-\u65f6\u8fd4\u56de-http-502"},"\u8bbf\u95ee ",(0,l.kt)("inlineCode",{parentName:"h3"},"/v1-saml/keycloak/saml/metadata")," \u65f6\u8fd4\u56de HTTP 502"),(0,l.kt)("p",null,"\u5e38\u89c1\u539f\u56e0\uff1a\u914d\u7f6e SAML \u63d0\u4f9b\u5546\u4e4b\u524d\u672a\u521b\u5efa\u5143\u6570\u636e\u3002\n\u5c1d\u8bd5\u914d\u7f6e Keycloak\uff0c\u5e76\u5c06\u5b83\u4fdd\u5b58\u4e3a\u4f60\u7684 SAML \u63d0\u4f9b\u5546\uff0c\u7136\u540e\u8bbf\u95ee\u5143\u6570\u636e\u3002"),(0,l.kt)("h3",{id:"keycloak-\u9519\u8befwere-sorry-failed-to-process-response"},'Keycloak \u9519\u8bef\uff1a"We\'re sorry, failed to process response"'),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u68c0\u67e5\u4f60\u7684 Keycloak \u65e5\u5fd7\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u65e5\u5fd7\u663e\u793a ",(0,l.kt)("inlineCode",{parentName:"li"},"failed: org.keycloak.common.VerificationException: Client does not have a public key"),"\uff0c\u8bf7\u5728 Keycloak \u5ba2\u6237\u7aef\u4e2d\u5c06 ",(0,l.kt)("inlineCode",{parentName:"li"},"Encrypt Assertions")," \u8bbe\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"OFF"),"\u3002")),(0,l.kt)("h3",{id:"keycloak-\u9519\u8befwere-sorry-invalid-requester"},'Keycloak \u9519\u8bef\uff1a"We\'re sorry, invalid requester"'),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u68c0\u67e5\u4f60\u7684 Keycloak \u65e5\u5fd7\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u65e5\u5fd7\u663e\u793a ",(0,l.kt)("inlineCode",{parentName:"li"},"request validation failed: org.keycloak.common.VerificationException: SigAlg was null"),"\uff0c\u8bf7\u5728 Keycloak \u5ba2\u6237\u7aef\u4e2d\u5c06 ",(0,l.kt)("inlineCode",{parentName:"li"},"Client Signature Required")," \u8bbe\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"OFF"),"\u3002")))}u.isMDXComponent=!0},1051:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/keycloak-saml-client-builtin-mappers-00ff9682000bed21181c493512aaac6f.png"},91906:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/keycloak-saml-client-configuration-c6ef99ce0f7510ce130ee88e940cc430.png"},19640:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/keycloak-saml-client-group-mapper-bc05499e6b7e1f429b0a97490c1d9ddd.png"}}]);