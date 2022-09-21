"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[26075],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},16676:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"Installing Rancher on a Single Node Using Docker",description:"For development and testing environments only, use a Docker install. Install Docker on a single Linux host, and deploy Rancher with a single Docker container.",weight:2,aliases:["/rancher/v2.0-v2.4/en/installation/single-node-install/","/rancher/v2.0-v2.4/en/installation/single-node","/rancher/v2.0-v2.4/en/installation/other-installation-methods/single-node"]},s=void 0,c={unversionedId:"pages-for-subheaders/rancher-on-a-single-node-with-docker",id:"version-2.0-2.4/pages-for-subheaders/rancher-on-a-single-node-with-docker",title:"Installing Rancher on a Single Node Using Docker",description:"For development and testing environments only, use a Docker install. Install Docker on a single Linux host, and deploy Rancher with a single Docker container.",source:"@site/versioned_docs/version-2.0-2.4/pages-for-subheaders/rancher-on-a-single-node-with-docker.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/rancher-on-a-single-node-with-docker",permalink:"/zh/v2.0-v2.4/pages-for-subheaders/rancher-on-a-single-node-with-docker",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/pages-for-subheaders/rancher-on-a-single-node-with-docker.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663710212,formattedLastUpdatedAt:"2022/9/20",frontMatter:{title:"Installing Rancher on a Single Node Using Docker",description:"For development and testing environments only, use a Docker install. Install Docker on a single Linux host, and deploy Rancher with a single Docker container.",weight:2,aliases:["/rancher/v2.0-v2.4/en/installation/single-node-install/","/rancher/v2.0-v2.4/en/installation/single-node","/rancher/v2.0-v2.4/en/installation/other-installation-methods/single-node"]},sidebar:"tutorialSidebar",previous:{title:"4. Install Rancher",permalink:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-rancher-ha"},next:{title:"Upgrading Rancher Installed with Docker",permalink:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker/upgrade-docker-installed-rancher"}},u={},p=[{value:"Option A: Default Rancher-generated Self-signed Certificate",id:"option-a-default-rancher-generated-self-signed-certificate",level:3},{value:"Option B: Bring Your Own Certificate, Self-signed",id:"option-b-bring-your-own-certificate-self-signed",level:3},{value:"Option C: Bring Your Own Certificate, Signed by a Recognized CA",id:"option-c-bring-your-own-certificate-signed-by-a-recognized-ca",level:3},{value:"Option D: Let&#39;s Encrypt Certificate",id:"option-d-lets-encrypt-certificate",level:3},{value:"Advanced Options",id:"advanced-options",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"What&#39;s Next?",id:"whats-next",level:2}],d={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Rancher can be installed by running a single Docker container."),(0,i.kt)("p",null,"In this installation scenario, you'll install Docker on a single Linux host, and then deploy Rancher on your host using a single Docker container."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Want to use an external load balancer?"),"\nSee ",(0,i.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/configure-layer-7-nginx-load-balancer"},"Docker Install with an External Load Balancer")," instead.")),(0,i.kt)("p",null,"A Docker installation of Rancher is recommended only for development and testing purposes."),(0,i.kt)("p",null,"For Rancher v2.0-v2.4, there is no migration path from a Docker installation to a high-availability installation. Therefore, you may want to use a Kubernetes installation from the start."),(0,i.kt)("h1",{id:"requirements-for-os-docker-hardware-and-networking"},"Requirements for OS, Docker, Hardware, and Networking"),(0,i.kt)("p",null,"Make sure that your node fulfills the general ",(0,i.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/installation-requirements"},"installation requirements.")),(0,i.kt)("h1",{id:"1-provision-linux-host"},"1. Provision Linux Host"),(0,i.kt)("p",null,"Provision a single Linux host according to our ",(0,i.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/installation-requirements"},"Requirements")," to launch your Rancher server."),(0,i.kt)("h1",{id:"2-choose-an-ssl-option-and-install-rancher"},"2. Choose an SSL Option and Install Rancher"),(0,i.kt)("p",null,"For security purposes, SSL (Secure Sockets Layer) is required when using Rancher. SSL secures all Rancher network communication, like when you login or interact with a cluster."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Do you want to...")),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"Use a proxy? See ",(0,i.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/reference-guides/single-node-rancher-in-docker/http-proxy-configuration"},"HTTP Proxy Configuration")),(0,i.kt)("li",{parentName:"ul"},"Configure custom CA root certificate to access your services? See ",(0,i.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/reference-guides/single-node-rancher-in-docker/advanced-options#custom-ca-certificate"},"Custom CA root certificate")),(0,i.kt)("li",{parentName:"ul"},"Complete an Air Gap Installation? See ",(0,i.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/pages-for-subheaders/air-gap-helm2"},"Air Gap: Docker Install")),(0,i.kt)("li",{parentName:"ul"},"Record all transactions with the Rancher API? See ",(0,i.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/reference-guides/single-node-rancher-in-docker/advanced-options#api-audit-log"},"API Auditing")))),(0,i.kt)("p",null,"Choose from the following options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#option-a-default-rancher-generated-self-signed-certificate"},"Option A: Default Rancher-generated Self-signed Certificate")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#option-b-bring-your-own-certificate-self-signed"},"Option B: Bring Your Own Certificate, Self-signed")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#option-c-bring-your-own-certificate-signed-by-a-recognized-ca"},"Option C: Bring Your Own Certificate, Signed by a Recognized CA")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#option-d-let-s-encrypt-certificate"},"Option D: Let's Encrypt Certificate"))),(0,i.kt)("h3",{id:"option-a-default-rancher-generated-self-signed-certificate"},"Option A: Default Rancher-generated Self-signed Certificate"),(0,i.kt)("p",null,"If you are installing Rancher in a development or testing environment where identity verification isn't a concern, install Rancher using the self-signed certificate that it generates. This installation option omits the hassle of generating a certificate yourself."),(0,i.kt)("p",null,"Log into your Linux host, and then run the minimum installation command below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d --restart=unless-stopped \\\n  -p 80:80 -p 443:443 \\\n  rancher/rancher:latest\n")),(0,i.kt)("h3",{id:"option-b-bring-your-own-certificate-self-signed"},"Option B: Bring Your Own Certificate, Self-signed"),(0,i.kt)("p",null,"In development or testing environments where your team will access your Rancher server, create a self-signed certificate for use with your install so that your team can verify they're connecting to your instance of Rancher."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Prerequisites:"),"\nCreate a self-signed certificate using ",(0,i.kt)("a",{parentName:"p",href:"https://www.openssl.org/"},"OpenSSL")," or another method of your choice."),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"The certificate files must be in PEM format."),(0,i.kt)("li",{parentName:"ul"},"In your certificate file, include all intermediate certificates in the chain. Order your certificates with your certificate first, followed by the intermediates. For an example, see ",(0,i.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker/certificate-troubleshooting"},"Certificate Troubleshooting.")))),(0,i.kt)("p",null,"After creating your certificate, run the Docker command below to install Rancher. Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"-v")," flag and provide the path to your certificates to mount them in your container."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Placeholder"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<CERT_DIRECTORY>")),(0,i.kt)("td",{parentName:"tr",align:null},"The path to the directory containing your certificate files.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<FULL_CHAIN.pem>")),(0,i.kt)("td",{parentName:"tr",align:null},"The path to your full certificate chain.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<PRIVATE_KEY.pem>")),(0,i.kt)("td",{parentName:"tr",align:null},"The path to the private key for your certificate.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<CA_CERTS.pem>")),(0,i.kt)("td",{parentName:"tr",align:null},"The path to the certificate authority's certificate.")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d --restart=unless-stopped \\\n  -p 80:80 -p 443:443 \\\n  -v /<CERT_DIRECTORY>/<FULL_CHAIN.pem>:/etc/rancher/ssl/cert.pem \\\n  -v /<CERT_DIRECTORY>/<PRIVATE_KEY.pem>:/etc/rancher/ssl/key.pem \\\n  -v /<CERT_DIRECTORY>/<CA_CERTS.pem>:/etc/rancher/ssl/cacerts.pem \\\n  rancher/rancher:latest\n")),(0,i.kt)("h3",{id:"option-c-bring-your-own-certificate-signed-by-a-recognized-ca"},"Option C: Bring Your Own Certificate, Signed by a Recognized CA"),(0,i.kt)("p",null,"In production environments where you're exposing an app publicly, use a certificate signed by a recognized CA so that your user base doesn't encounter security warnings."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Prerequisites:")),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"The certificate files must be in PEM format."),(0,i.kt)("li",{parentName:"ul"},"In your certificate file, include all intermediate certificates provided by the recognized CA. Order your certificates with your certificate first, followed by the intermediates. For an example, see ",(0,i.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker/certificate-troubleshooting"},"Certificate Troubleshooting.")))),(0,i.kt)("p",null,"After obtaining your certificate, run the Docker command below."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use the ",(0,i.kt)("inlineCode",{parentName:"li"},"-v")," flag and provide the path to your certificates to mount them in your container. Because your certificate is signed by a recognized CA, mounting an additional CA certificate file is unnecessary."),(0,i.kt)("li",{parentName:"ul"},"Use the ",(0,i.kt)("inlineCode",{parentName:"li"},"--no-cacerts")," as argument to the container to disable the default CA certificate generated by Rancher.")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Placeholder"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<CERT_DIRECTORY>")),(0,i.kt)("td",{parentName:"tr",align:null},"The path to the directory containing your certificate files.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<FULL_CHAIN.pem>")),(0,i.kt)("td",{parentName:"tr",align:null},"The path to your full certificate chain.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<PRIVATE_KEY.pem>")),(0,i.kt)("td",{parentName:"tr",align:null},"The path to the private key for your certificate.")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d --restart=unless-stopped \\\n  -p 80:80 -p 443:443 \\\n  -v /<CERT_DIRECTORY>/<FULL_CHAIN.pem>:/etc/rancher/ssl/cert.pem \\\n  -v /<CERT_DIRECTORY>/<PRIVATE_KEY.pem>:/etc/rancher/ssl/key.pem \\\n  rancher/rancher:latest \\\n  --no-cacerts\n")),(0,i.kt)("h3",{id:"option-d-lets-encrypt-certificate"},"Option D: Let's Encrypt Certificate"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Remember:")," Let's Encrypt provides rate limits for requesting new certificates. Therefore, limit how often you create or destroy the container. For more information, see ",(0,i.kt)("a",{parentName:"p",href:"https://letsencrypt.org/docs/rate-limits/"},"Let's Encrypt documentation on rate limits"),".")),(0,i.kt)("p",null,"For production environments, you also have the option of using ",(0,i.kt)("a",{parentName:"p",href:"https://letsencrypt.org/"},"Let's Encrypt")," certificates. Let's Encrypt uses an http-01 challenge to verify that you have control over your domain. You can confirm that you control the domain by pointing the hostname that you want to use for Rancher access (for example, ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher.mydomain.com"),") to the IP of the machine it is running on. You can bind the hostname to the IP address by creating an A record in DNS."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Prerequisites:")),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"Let's Encrypt is an Internet service. Therefore, this option cannot be used in an internal/air gapped network."),(0,i.kt)("li",{parentName:"ul"},"Create a record in your DNS that binds your Linux host IP address to the hostname that you want to use for Rancher access (",(0,i.kt)("inlineCode",{parentName:"li"},"rancher.mydomain.com")," for example)."),(0,i.kt)("li",{parentName:"ul"},"Open port ",(0,i.kt)("inlineCode",{parentName:"li"},"TCP/80")," on your Linux host. The Let's Encrypt http-01 challenge can come from any source IP address, so port ",(0,i.kt)("inlineCode",{parentName:"li"},"TCP/80")," must be open to all IP addresses."))),(0,i.kt)("p",null,"After you fulfill the prerequisites, you can install Rancher using a Let's Encrypt certificate by running the following command."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Placeholder"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<YOUR.DNS.NAME>")),(0,i.kt)("td",{parentName:"tr",align:null},"Your domain address")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker run -d --restart=unless-stopped \\\n  -p 80:80 -p 443:443 \\\n  rancher/rancher:latest \\\n  --acme-domain <YOUR.DNS.NAME>\n")),(0,i.kt)("h2",{id:"advanced-options"},"Advanced Options"),(0,i.kt)("p",null,"When installing Rancher on a single node with Docker, there are several advanced options that can be enabled:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Custom CA Certificate"),(0,i.kt)("li",{parentName:"ul"},"API Audit Log"),(0,i.kt)("li",{parentName:"ul"},"TLS Settings"),(0,i.kt)("li",{parentName:"ul"},"Air Gap"),(0,i.kt)("li",{parentName:"ul"},"Persistent Data"),(0,i.kt)("li",{parentName:"ul"},"Running ",(0,i.kt)("inlineCode",{parentName:"li"},"rancher/rancher")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"rancher/rancher-agent")," on the Same Node")),(0,i.kt)("p",null,"Refer to ",(0,i.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/reference-guides/single-node-rancher-in-docker/advanced-options"},"this page")," for details."),(0,i.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("p",null,"Refer to ",(0,i.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker/certificate-troubleshooting"},"this page")," for frequently asked questions and troubleshooting tips."),(0,i.kt)("h2",{id:"whats-next"},"What's Next?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Recommended:")," Review Single Node ",(0,i.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-docker-installed-rancher"},"Backup")," and ",(0,i.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-docker-installed-rancher"},"Restore"),". Although you don't have any data you need to back up right now, we recommend creating backups after regular Rancher use."),(0,i.kt)("li",{parentName:"ul"},"Create a Kubernetes cluster: ",(0,i.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/pages-for-subheaders/kubernetes-clusters-in-rancher-setup"},"Provisioning Kubernetes Clusters"),".")))}h.isMDXComponent=!0}}]);