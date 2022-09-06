"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[76492],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),f=s(n),u=i,h=f["".concat(c,".").concat(u)]||f[u]||p[u]||a;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},24461:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],l={title:"Certificate Troubleshooting",weight:4},c=void 0,s={unversionedId:"getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker/certificate-troubleshooting",id:"getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker/certificate-troubleshooting",title:"Certificate Troubleshooting",description:"How Do I Know if My Certificates are in PEM Format?",source:"@site/docs/getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker/certificate-troubleshooting.md",sourceDirName:"getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker",slug:"/getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker/certificate-troubleshooting",permalink:"/rancher-docs/getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker/certificate-troubleshooting",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker/certificate-troubleshooting.md",tags:[],version:"current",lastUpdatedAt:1660752881,formattedLastUpdatedAt:"8/17/2022",frontMatter:{title:"Certificate Troubleshooting",weight:4},sidebar:"tutorialSidebar",previous:{title:"Rolling Back Rancher Installed with Docker",permalink:"/rancher-docs/getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker/roll-back-docker-installed-rancher"},next:{title:"Installing Rancher behind an HTTP Proxy",permalink:"/rancher-docs/pages-for-subheaders/rancher-behind-an-http-proxy"}},d={},p=[{value:"How Do I Know if My Certificates are in PEM Format?",id:"how-do-i-know-if-my-certificates-are-in-pem-format",level:3},{value:"Converting a Certificate Key From PKCS8 to PKCS1",id:"converting-a-certificate-key-from-pkcs8-to-pkcs1",level:3},{value:"What is the Order of Certificates if I Want to Add My Intermediate(s)?",id:"what-is-the-order-of-certificates-if-i-want-to-add-my-intermediates",level:3},{value:"How Do I Validate My Certificate Chain?",id:"how-do-i-validate-my-certificate-chain",level:3}],f={toc:p};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"how-do-i-know-if-my-certificates-are-in-pem-format"},"How Do I Know if My Certificates are in PEM Format?"),(0,a.kt)("p",null,"You can recognize the PEM format by the following traits:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The file begins with the following header:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"-----BEGIN CERTIFICATE-----\n"))),(0,a.kt)("li",{parentName:"ul"},"The header is followed by a long string of characters."),(0,a.kt)("li",{parentName:"ul"},"The file ends with a footer:\n-----END CERTIFICATE-----")),(0,a.kt)("p",null,"PEM Certificate Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"----BEGIN CERTIFICATE-----\nMIIGVDCCBDygAwIBAgIJAMiIrEm29kRLMA0GCSqGSIb3DQEBCwUAMHkxCzAJBgNV\n... more lines\nVWQqljhfacYPgp8KJUJENQ9h5hZ2nSCrI+W00Jcw4QcEdCI8HL5wmg==\n-----END CERTIFICATE-----\n")),(0,a.kt)("p",null,"PEM Certificate Key Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"-----BEGIN RSA PRIVATE KEY-----\nMIIGVDCCBDygAwIBAgIJAMiIrEm29kRLMA0GCSqGSIb3DQEBCwUAMHkxCzAJBgNV\n... more lines\nVWQqljhfacYPgp8KJUJENQ9h5hZ2nSCrI+W00Jcw4QcEdCI8HL5wmg==\n-----END RSA PRIVATE KEY-----\n")),(0,a.kt)("p",null,"If your key looks like the example below, see ",(0,a.kt)("a",{parentName:"p",href:"#converting-a-certificate-key-from-pkcs8-to-pkcs1"},"Converting a Certificate Key From PKCS8 to PKCS1.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"-----BEGIN PRIVATE KEY-----\nMIIGVDCCBDygAwIBAgIJAMiIrEm29kRLMA0GCSqGSIb3DQEBCwUAMHkxCzAJBgNV\n... more lines\nVWQqljhfacYPgp8KJUJENQ9h5hZ2nSCrI+W00Jcw4QcEdCI8HL5wmg==\n-----END PRIVATE KEY-----\n")),(0,a.kt)("h3",{id:"converting-a-certificate-key-from-pkcs8-to-pkcs1"},"Converting a Certificate Key From PKCS8 to PKCS1"),(0,a.kt)("p",null,"If you are using a PKCS8 certificate key file, Rancher will log the following line:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ListenConfigController cli-config [listener] failed with : failed to read private key: asn1: structure error: tags don't match (2 vs {class:0 tag:16 length:13 isCompound:true})\n")),(0,a.kt)("p",null,"To make this work, you will need to convert the key from PKCS8 to PKCS1 using the command below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"openssl rsa -in key.pem -out convertedkey.pem\n")),(0,a.kt)("p",null,"You can now use ",(0,a.kt)("inlineCode",{parentName:"p"},"convertedkey.pem")," as certificate key file for Rancher."),(0,a.kt)("h3",{id:"what-is-the-order-of-certificates-if-i-want-to-add-my-intermediates"},"What is the Order of Certificates if I Want to Add My Intermediate(s)?"),(0,a.kt)("p",null,"The order of adding certificates is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"-----BEGIN CERTIFICATE-----\n%YOUR_CERTIFICATE%\n-----END CERTIFICATE-----\n-----BEGIN CERTIFICATE-----\n%YOUR_INTERMEDIATE_CERTIFICATE%\n-----END CERTIFICATE-----\n")),(0,a.kt)("h3",{id:"how-do-i-validate-my-certificate-chain"},"How Do I Validate My Certificate Chain?"),(0,a.kt)("p",null,"You can validate the certificate chain by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"openssl")," binary. If the output of the command (see the command example below) ends with ",(0,a.kt)("inlineCode",{parentName:"p"},"Verify return code: 0 (ok)"),", your certificate chain is valid. The ",(0,a.kt)("inlineCode",{parentName:"p"},"ca.pem")," file must be the same as you added to the ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher/rancher")," container."),(0,a.kt)("p",null,"When using a certificate signed by a recognized Certificate Authority, you can omit the ",(0,a.kt)("inlineCode",{parentName:"p"},"-CAfile")," parameter."),(0,a.kt)("p",null,"Command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"openssl s_client -CAfile ca.pem -connect rancher.yourdomain.com:443\n...\n    Verify return code: 0 (ok)\n")))}u.isMDXComponent=!0}}]);