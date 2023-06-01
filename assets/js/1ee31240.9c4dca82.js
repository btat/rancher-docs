"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[64475],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),o=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=o(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=o(r),f=n,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||i;return r?a.createElement(m,s(s({ref:t},p),{},{components:r})):a.createElement(m,s({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var o=2;o<i;o++)s[o]=r[o];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},19069:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var a=r(87462),n=(r(67294),r(3905));const i={title:"Adding TLS Secrets"},s=void 0,c={unversionedId:"getting-started/installation-and-upgrade/resources/add-tls-secrets",id:"version-2.0-2.4/getting-started/installation-and-upgrade/resources/add-tls-secrets",title:"Adding TLS Secrets",description:"Kubernetes will create all the objects and services for Rancher, but it will not become available until we populate the tls-rancher-ingress secret in the cattle-system namespace with the certificate and key.",source:"@site/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/resources/add-tls-secrets.md",sourceDirName:"getting-started/installation-and-upgrade/resources",slug:"/getting-started/installation-and-upgrade/resources/add-tls-secrets",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/resources/add-tls-secrets",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/resources/add-tls-secrets.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1685049955,formattedLastUpdatedAt:"May 25, 2023",frontMatter:{title:"Adding TLS Secrets"},sidebar:"tutorialSidebar",previous:{title:"Helm Version Requirements",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/resources/helm-version-requirements"},next:{title:"About Custom CA Root Certificates",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/resources/custom-ca-root-certificates"}},l={},o=[{value:"Using a Private CA Signed Certificate",id:"using-a-private-ca-signed-certificate",level:2},{value:"Updating a Private CA Certificate",id:"updating-a-private-ca-certificate",level:2}],p={toc:o};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/resources/add-tls-secrets"})),(0,n.kt)("p",null,"Kubernetes will create all the objects and services for Rancher, but it will not become available until we populate the ",(0,n.kt)("inlineCode",{parentName:"p"},"tls-rancher-ingress")," secret in the ",(0,n.kt)("inlineCode",{parentName:"p"},"cattle-system")," namespace with the certificate and key."),(0,n.kt)("p",null,"Combine the server certificate followed by any intermediate certificate(s) needed into a file named ",(0,n.kt)("inlineCode",{parentName:"p"},"tls.crt"),". Copy your certificate key into a file named ",(0,n.kt)("inlineCode",{parentName:"p"},"tls.key"),"."),(0,n.kt)("p",null,"For example, ",(0,n.kt)("a",{parentName:"p",href:"https://acme.sh"},"acme.sh")," provides server certificate and CA chains in ",(0,n.kt)("inlineCode",{parentName:"p"},"fullchain.cer")," file.\nThis ",(0,n.kt)("inlineCode",{parentName:"p"},"fullchain.cer")," should be renamed to ",(0,n.kt)("inlineCode",{parentName:"p"},"tls.crt")," & certificate key file as ",(0,n.kt)("inlineCode",{parentName:"p"},"tls.key"),"."),(0,n.kt)("p",null,"Use ",(0,n.kt)("inlineCode",{parentName:"p"},"kubectl")," with the ",(0,n.kt)("inlineCode",{parentName:"p"},"tls")," secret type to create the secrets."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"kubectl -n cattle-system create secret tls tls-rancher-ingress \\\n  --cert=tls.crt \\\n  --key=tls.key\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:")," If you want to replace the certificate, you can delete the ",(0,n.kt)("inlineCode",{parentName:"p"},"tls-rancher-ingress")," secret using ",(0,n.kt)("inlineCode",{parentName:"p"},"kubectl -n cattle-system delete secret tls-rancher-ingress")," and add a new one using the command shown above. If you are using a private CA signed certificate, replacing the certificate is only possible if the new certificate is signed by the same CA as the certificate currently in use.")),(0,n.kt)("h2",{id:"using-a-private-ca-signed-certificate"},"Using a Private CA Signed Certificate"),(0,n.kt)("p",null,"If you are using a private CA, Rancher requires a copy of the private CA's root certificate or certificate chain, which the Rancher Agent uses to validate the connection to the server."),(0,n.kt)("p",null,"Create a file named ",(0,n.kt)("inlineCode",{parentName:"p"},"cacerts.pem")," that only contains the root CA certificate or certificate chain from your private CA, and use ",(0,n.kt)("inlineCode",{parentName:"p"},"kubectl")," to create the ",(0,n.kt)("inlineCode",{parentName:"p"},"tls-ca")," secret in the ",(0,n.kt)("inlineCode",{parentName:"p"},"cattle-system")," namespace."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"kubectl -n cattle-system create secret generic tls-ca \\\n  --from-file=cacerts.pem=./cacerts.pem\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:")," The configured ",(0,n.kt)("inlineCode",{parentName:"p"},"tls-ca")," secret is retrieved when Rancher starts. On a running Rancher installation the updated CA will take effect after new Rancher pods are started.")),(0,n.kt)("h2",{id:"updating-a-private-ca-certificate"},"Updating a Private CA Certificate"),(0,n.kt)("p",null,"Follow the steps on ",(0,n.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/resources/update-rancher-certificate"},"this page")," to update the SSL certificate of the ingress in a Rancher ",(0,n.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster"},"high availability Kubernetes installation")," or to switch from the default self-signed certificate to a custom certificate."))}d.isMDXComponent=!0}}]);