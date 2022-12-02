"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[21349],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),d=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(t),k=a,x=p["".concat(i,".").concat(k)]||p[k]||u[k]||l;return t?r.createElement(x,o(o({ref:n},c),{},{components:t})):r.createElement(x,o({ref:n},c))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=p;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<l;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},34826:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var r=t(87462),a=(t(67294),t(3905));const l={title:"Rancher Server Kubernetes \u96c6\u7fa4\u7684\u95ee\u9898\u6392\u67e5"},o=void 0,s={unversionedId:"getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/troubleshooting",id:"version-2.6/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/troubleshooting",title:"Rancher Server Kubernetes \u96c6\u7fa4\u7684\u95ee\u9898\u6392\u67e5",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5bf9\u5b89\u88c5\u5728 Kubernetes \u96c6\u7fa4\u4e0a\u7684 Rancher \u8fdb\u884c\u6545\u969c\u6392\u9664\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/troubleshooting.md",sourceDirName:"getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster",slug:"/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/troubleshooting",permalink:"/zh/v2.6/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/troubleshooting",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/troubleshooting.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"2022\u5e7411\u670814\u65e5",frontMatter:{title:"Rancher Server Kubernetes \u96c6\u7fa4\u7684\u95ee\u9898\u6392\u67e5"},sidebar:"tutorialSidebar",previous:{title:"\u5728 GKE \u96c6\u7fa4\u4e0a\u5b89\u88c5 Rancher",permalink:"/zh/v2.6/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-gke"},next:{title:"\u5176\u4ed6\u5b89\u88c5\u65b9\u5f0f",permalink:"/zh/v2.6/pages-for-subheaders/other-installation-methods"}},i={},d=[{value:"\u76f8\u5173\u547d\u540d\u7a7a\u95f4",id:"\u76f8\u5173\u547d\u540d\u7a7a\u95f4",level:3},{value:"&quot;default backend - 404&quot;",id:"default-backend---404",level:3},{value:"\u68c0\u67e5 Rancher \u662f\u5426\u6b63\u5728\u8fd0\u884c",id:"\u68c0\u67e5-rancher-\u662f\u5426\u6b63\u5728\u8fd0\u884c",level:3},{value:"\u68c0\u67e5 Rancher \u65e5\u5fd7",id:"\u68c0\u67e5-rancher-\u65e5\u5fd7",level:3},{value:"\u8bc1\u4e66\u7684 CN \u662f &quot;Kubernetes Ingress Controller Fake Certificate&quot;",id:"\u8bc1\u4e66\u7684-cn-\u662f-kubernetes-ingress-controller-fake-certificate",level:3},{value:"\u6392\u67e5 Cert-Manager \u9881\u53d1\u7684\u8bc1\u4e66\uff08Rancher \u6216 Let&#39;s Encrypt \u751f\u6210\u7684\uff09\u95ee\u9898",id:"\u6392\u67e5-cert-manager-\u9881\u53d1\u7684\u8bc1\u4e66rancher-\u6216-lets-encrypt-\u751f\u6210\u7684\u95ee\u9898",level:3},{value:"\u6392\u67e5\u4f60\u81ea\u5df1\u63d0\u4f9b\u7684 SSL \u8bc1\u4e66\u95ee\u9898",id:"\u6392\u67e5\u4f60\u81ea\u5df1\u63d0\u4f9b\u7684-ssl-\u8bc1\u4e66\u95ee\u9898",level:3},{value:"\u6ca1\u6709\u5339\u914d\u7684 &quot;Issuer&quot;",id:"\u6ca1\u6709\u5339\u914d\u7684-issuer",level:3},{value:"Canal Pod \u663e\u793a READY 2/3",id:"canal-pod-\u663e\u793a-ready-23",level:3},{value:"nginx-ingress-controller Pod \u663e\u793a RESTARTS",id:"nginx-ingress-controller-pod-\u663e\u793a-restarts",level:3},{value:"Failed to dial to /var/run/docker.sock: ssh: rejected: administratively prohibited (open failed)",id:"failed-to-dial-to-varrundockersock-ssh-rejected-administratively-prohibited-open-failed",level:3},{value:"Failed to dial ssh using address xxx.xxx.xxx.xxx:xx: Error configuring SSH: ssh: no key found",id:"failed-to-dial-ssh-using-address-xxxxxxxxxxxxxx-error-configuring-ssh-ssh-no-key-found",level:3},{value:"Failed to dial ssh using address xxx.xxx.xxx.xxx:xx: ssh: handshake failed: ssh: unable to authenticate, attempted methods none publickey, no supported methods remain",id:"failed-to-dial-ssh-using-address-xxxxxxxxxxxxxx-ssh-handshake-failed-ssh-unable-to-authenticate-attempted-methods-none-publickey-no-supported-methods-remain",level:3},{value:"Failed to dial ssh using address xxx.xxx.xxx.xxx:xx: Error configuring SSH: ssh: cannot decode encrypted private keys",id:"failed-to-dial-ssh-using-address-xxxxxxxxxxxxxx-error-configuring-ssh-ssh-cannot-decode-encrypted-private-keys",level:3},{value:"Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?",id:"cannot-connect-to-the-docker-daemon-at-unixvarrundockersock-is-the-docker-daemon-running",level:3}],c={toc:d};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5bf9\u5b89\u88c5\u5728 Kubernetes \u96c6\u7fa4\u4e0a\u7684 Rancher \u8fdb\u884c\u6545\u969c\u6392\u9664\u3002"),(0,a.kt)("h3",{id:"\u76f8\u5173\u547d\u540d\u7a7a\u95f4"},"\u76f8\u5173\u547d\u540d\u7a7a\u95f4"),(0,a.kt)("p",null,"\u6545\u969c\u6392\u9664\u4e3b\u8981\u9488\u5bf9\u4ee5\u4e0b 3 \u4e2a\u547d\u540d\u7a7a\u95f4\u4e2d\u7684\u5bf9\u8c61\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cattle-system"),"\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"rancher")," deployment \u548c Pod\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ingress-nginx"),"\uff1aIngress Controller Pod \u548c services\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cert-manager"),"\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"cert-manager")," Pod\u3002")),(0,a.kt)("h3",{id:"default-backend---404"},'"default backend - 404"'),(0,a.kt)("p",null,"\u5f88\u591a\u64cd\u4f5c\u90fd\u6709\u53ef\u80fd\u5bfc\u81f4 Ingress Controller \u65e0\u6cd5\u5c06\u6d41\u91cf\u8f6c\u53d1\u5230\u4f60\u7684 Rancher \u5b9e\u4f8b\u3002\u4f46\u662f\u5927\u591a\u6570\u60c5\u51b5\u4e0b\u90fd\u662f\u7531\u9519\u8bef\u7684 SSL \u914d\u7f6e\u5bfc\u81f4\u7684\u3002"),(0,a.kt)("p",null,"\u68c0\u67e5\u4e8b\u9879\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#%E6%A3%80%E6%9F%A5-rancher-%E6%98%AF%E5%90%A6%E6%AD%A3%E5%9C%A8%E8%BF%90%E8%A1%8C"},"Rancher \u662f\u5426\u6b63\u5728\u8fd0\u884c")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#%E8%AF%81%E4%B9%A6%E7%9A%84-cn-%E6%98%AF-kubernetes-ingress-controller-fake-certificate"},'\u8bc1\u4e66\u7684 Common Name\uff08CN\uff09\u662f "Kubernetes Ingress Controller Fake Certificate"'))),(0,a.kt)("h3",{id:"\u68c0\u67e5-rancher-\u662f\u5426\u6b63\u5728\u8fd0\u884c"},"\u68c0\u67e5 Rancher \u662f\u5426\u6b63\u5728\u8fd0\u884c"),(0,a.kt)("p",null,"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl")," \u68c0\u67e5 ",(0,a.kt)("inlineCode",{parentName:"p"},"cattle-system")," \u7cfb\u7edf\u547d\u540d\u7a7a\u95f4\uff0c\u5e76\u67e5\u770b Rancher Pod \u7684\u72b6\u6001\u662f\u5426\u662f ",(0,a.kt)("strong",{parentName:"p"},"Running"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl -n cattle-system get pods\n\nNAME                           READY     STATUS    RESTARTS   AGE\npod/rancher-784d94f59b-vgqzh   1/1       Running   0          10m\n")),(0,a.kt)("p",null,"\u5982\u679c\u72b6\u6001\u4e0d\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"Running"),"\uff0c\u5728 Pod \u4e0a\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"describe"),"\uff0c\u5e76\u68c0\u67e5 ",(0,a.kt)("strong",{parentName:"p"},"Events"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'kubectl -n cattle-system describe pod\n\n...\nEvents:\n  Type     Reason                 Age   From                Message\n  ----     ------                 ----  ----                -------\n  Normal   Scheduled              11m   default-scheduler   Successfully assigned rancher-784d94f59b-vgqzh to localhost\n  Normal   SuccessfulMountVolume  11m   kubelet, localhost  MountVolume.SetUp succeeded for volume "rancher-token-dj4mt"\n  Normal   Pulling                11m   kubelet, localhost  pulling image "rancher/rancher:v2.0.4"\n  Normal   Pulled                 11m   kubelet, localhost  Successfully pulled image "rancher/rancher:v2.0.4"\n  Normal   Created                11m   kubelet, localhost  Created container\n  Normal   Started                11m   kubelet, localhost  Started container\n')),(0,a.kt)("h3",{id:"\u68c0\u67e5-rancher-\u65e5\u5fd7"},"\u68c0\u67e5 Rancher \u65e5\u5fd7"),(0,a.kt)("p",null,"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl")," \u5217\u51fa Pod\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl -n cattle-system get pods\n\nNAME                           READY     STATUS    RESTARTS   AGE\npod/rancher-784d94f59b-vgqzh   1/1       Running   0          10m\n")),(0,a.kt)("p",null,"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl")," \u548c Pod \u540d\u79f0\u5217\u51fa\u8be5 Pod \u7684\u65e5\u5fd7\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl -n cattle-system logs -f rancher-784d94f59b-vgqzh\n")),(0,a.kt)("h3",{id:"\u8bc1\u4e66\u7684-cn-\u662f-kubernetes-ingress-controller-fake-certificate"},'\u8bc1\u4e66\u7684 CN \u662f "Kubernetes Ingress Controller Fake Certificate"'),(0,a.kt)("p",null,'\u4f7f\u7528\u6d4f\u89c8\u5668\u68c0\u67e5\u8bc1\u4e66\u7684\u8be6\u7ec6\u4fe1\u606f\u3002\u5982\u679c\u663e\u793a CN \u662f "Kubernetes Ingress Controller Fake Certificate"\uff0c\u5219\u8bf4\u660e\u8bfb\u53d6\u6216\u9881\u53d1 SSL \u8bc1\u4e66\u65f6\u51fa\u73b0\u4e86\u95ee\u9898\u3002'),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f Let's Encrypt \u8bc1\u4e66\uff0c\u8bc1\u4e66\u9881\u53d1\u7684\u8fc7\u7a0b\u53ef\u80fd\u9700\u8981\u51e0\u5206\u949f\u3002")),(0,a.kt)("h3",{id:"\u6392\u67e5-cert-manager-\u9881\u53d1\u7684\u8bc1\u4e66rancher-\u6216-lets-encrypt-\u751f\u6210\u7684\u95ee\u9898"},"\u6392\u67e5 Cert-Manager \u9881\u53d1\u7684\u8bc1\u4e66\uff08Rancher \u6216 Let's Encrypt \u751f\u6210\u7684\uff09\u95ee\u9898"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"cert-manager")," \u6709 3 \u90e8\u5206\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cert-manager")," \u547d\u540d\u7a7a\u95f4\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"cert-manager")," Pod\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cattle-system")," \u547d\u540d\u7a7a\u95f4\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"Issuer")," \u5bf9\u8c61\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cattle-system")," \u547d\u540d\u7a7a\u95f4\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"Certificate")," \u5bf9\u8c61\u3002")),(0,a.kt)("p",null,"\u5f80\u540e\u64cd\u4f5c\uff0c\u5bf9\u6bcf\u4e2a\u5bf9\u8c61\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl describe")," \u5e76\u68c0\u67e5\u4e8b\u4ef6\u3002\u8fd9\u6837\uff0c\u4f60\u53ef\u4ee5\u8ffd\u8e2a\u53ef\u80fd\u4e22\u5931\u7684\u5185\u5bb9\u3002"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u662f Issuer \u6709\u95ee\u9898\u7684\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl -n cattle-system describe certificate\n...\nEvents:\n  Type     Reason          Age                 From          Message\n  ----     ------          ----                ----          -------\n  Warning  IssuerNotReady  18s (x23 over 19m)  cert-manager  Issuer rancher not ready\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'kubectl -n cattle-system describe issuer\n...\nEvents:\n  Type     Reason         Age                 From          Message\n  ----     ------         ----                ----          -------\n  Warning  ErrInitIssuer  19m (x12 over 19m)  cert-manager  Error initializing issuer: secret "tls-rancher" not found\n  Warning  ErrGetKeyPair  9m (x16 over 19m)   cert-manager  Error getting keypair for CA issuer: secret "tls-rancher" not found\n')),(0,a.kt)("h3",{id:"\u6392\u67e5\u4f60\u81ea\u5df1\u63d0\u4f9b\u7684-ssl-\u8bc1\u4e66\u95ee\u9898"},"\u6392\u67e5\u4f60\u81ea\u5df1\u63d0\u4f9b\u7684 SSL \u8bc1\u4e66\u95ee\u9898"),(0,a.kt)("p",null,"\u4f60\u7684\u8bc1\u4e66\u76f4\u63a5\u5e94\u7528\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"cattle-system")," \u547d\u540d\u7a7a\u95f4\u4e2d\u7684 Ingress \u5bf9\u8c61\u3002"),(0,a.kt)("p",null,"\u68c0\u67e5 Ingress \u5bf9\u8c61\u7684\u72b6\u6001\uff0c\u5e76\u67e5\u770b\u5b83\u662f\u5426\u51c6\u5907\u5c31\u7eea\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl -n cattle-system describe ingress\n")),(0,a.kt)("p",null,"\u5982\u679c Ingress \u5bf9\u8c61\u5df2\u5c31\u7eea\uff0c\u4f46\u662f SSL \u4ecd\u7136\u65e0\u6cd5\u6b63\u5e38\u5de5\u4f5c\uff0c\u4f60\u7684\u8bc1\u4e66\u6216\u5bc6\u6587\u7684\u683c\u5f0f\u53ef\u80fd\u4e0d\u6b63\u786e\u3002"),(0,a.kt)("p",null,"\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u8bf7\u68c0\u67e5 nginx-ingress-controller \u7684\u65e5\u5fd7\u3002nginx-ingress-controller \u7684 Pod \u4e2d\u6709\u591a\u4e2a\u5bb9\u5668\uff0c\u56e0\u6b64\u4f60\u9700\u8981\u6307\u5b9a\u5bb9\u5668\u7684\u540d\u79f0\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl -n ingress-nginx logs -f nginx-ingress-controller-rfjrq nginx-ingress-controller\n...\nW0705 23:04:58.240571       7 backend_ssl.go:49] error obtaining PEM from secret cattle-system/tls-rancher-ingress: error retrieving secret cattle-system/tls-rancher-ingress: secret cattle-system/tls-rancher-ingress was not found\n")),(0,a.kt)("h3",{id:"\u6ca1\u6709\u5339\u914d\u7684-issuer"},'\u6ca1\u6709\u5339\u914d\u7684 "Issuer"'),(0,a.kt)("p",null,"\u4f60\u6240\u9009\u7684 SSL \u914d\u7f6e\u8981\u6c42\u5728\u5b89\u88c5 Rancher \u4e4b\u524d\u5148\u5b89\u88c5 Cert-Manager\uff0c\u5426\u5219\u4f1a\u51fa\u73b0\u4ee5\u4e0b\u9519\u8bef:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Error: validation failed: unable to recognize "": no matches for kind "Issuer" in version "certmanager.k8s.io/v1alpha1"\n')),(0,a.kt)("p",null,"\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5148\u5b89\u88c5 Cert-Manager\uff0c\u7136\u540e\u518d\u91cd\u65b0\u5b89\u88c5 Rancher\u3002"),(0,a.kt)("h3",{id:"canal-pod-\u663e\u793a-ready-23"},"Canal Pod \u663e\u793a READY 2/3"),(0,a.kt)("p",null,"\u6b64\u95ee\u9898\u7684\u6700\u5e38\u89c1\u539f\u56e0\u662f\u7aef\u53e3 8472/UDP \u5728\u8282\u70b9\u4e4b\u95f4\u672a\u6253\u5f00\u3002\u56e0\u6b64\uff0c\u4f60\u53ef\u4ee5\u68c0\u67e5\u4f60\u7684\u672c\u5730\u9632\u706b\u5899\u3001\u7f51\u7edc\u8def\u7531\u6216\u5b89\u5168\u7ec4\u3002"),(0,a.kt)("p",null,"\u89e3\u51b3\u7f51\u7edc\u95ee\u9898\u540e\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"canal")," Pod \u4f1a\u8d85\u65f6\u5e76\u91cd\u542f\u4ee5\u5efa\u7acb\u8fde\u63a5\u3002"),(0,a.kt)("h3",{id:"nginx-ingress-controller-pod-\u663e\u793a-restarts"},"nginx-ingress-controller Pod \u663e\u793a RESTARTS"),(0,a.kt)("p",null,"\u6b64\u95ee\u9898\u7684\u6700\u5e38\u89c1\u539f\u56e0\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"canal")," pod \u672a\u80fd\u5efa\u7acb\u8986\u76d6\u7f51\u7edc\u3002\u53c2\u89c1 ",(0,a.kt)("a",{parentName:"p",href:"#canal-pod-%E6%98%BE%E7%A4%BA-ready-2/3"},"canal Pod \u663e\u793a READY ",(0,a.kt)("inlineCode",{parentName:"a"},"2/3"))," \u8fdb\u884c\u6392\u67e5\u3002"),(0,a.kt)("h3",{id:"failed-to-dial-to-varrundockersock-ssh-rejected-administratively-prohibited-open-failed"},"Failed to dial to /var/run/docker.sock: ssh: rejected: administratively prohibited (open failed)"),(0,a.kt)("p",null,"\u6b64\u9519\u8bef\u7684\u539f\u56e0\u53ef\u80fd\u662f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6307\u5b9a\u8fde\u63a5\u7684\u7528\u6237\u65e0\u6743\u8bbf\u95ee Docker Socket\u3002\u5982\u679c\u662f\u8fd9\u4e2a\u539f\u56e0\uff0c\u4f60\u901a\u8fc7\u767b\u5f55\u4e3b\u673a\u5e76\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"li"},"docker ps")," \u547d\u4ee4\u6765\u68c0\u67e5\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ ssh user@server\nuser@server$ docker ps\nCONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                    NAMES\n")),(0,a.kt)("p",null,"\u5982\u679c\u9700\u8981\u4e86\u89e3\u5982\u4f55\u8fdb\u884c\u6b63\u786e\u8bbe\u7f6e\uff0c\u8bf7\u53c2\u89c1",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/install/linux/linux-postinstall/#manage-docker-as-a-non-root-user"},"\u4ee5\u975e root \u7528\u6237\u8eab\u4efd\u7ba1\u7406 Docker"),"\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4f60\u4f7f\u7528\u7684\u64cd\u4f5c\u7cfb\u7edf\u662f RedHat \u6216 CentOS\uff1a\u7531\u4e8e ",(0,a.kt)("a",{parentName:"p",href:"https://bugzilla.redhat.com/show_bug.cgi?id=1527565"},"Bugzilla #1527565"),"\uff0c\u4f60\u4e0d\u80fd\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"root")," \u7528\u6237\u8fde\u63a5\u5230\u8282\u70b9\u3002\u56e0\u6b64\uff0c\u4f60\u9700\u8981\u6dfb\u52a0\u4e00\u4e2a\u5355\u72ec\u7684\u7528\u6237\u5e76\u914d\u7f6e\u5176\u8bbf\u95ee Docker Socket\u3002\u5982\u679c\u9700\u8981\u4e86\u89e3\u5982\u4f55\u8fdb\u884c\u6b63\u786e\u8bbe\u7f6e\uff0c\u8bf7\u53c2\u89c1",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/install/linux/linux-postinstall/#manage-docker-as-a-non-root-user"},"\u4ee5\u975e root \u7528\u6237\u8eab\u4efd\u7ba1\u7406 Docker"),"\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"SSH \u670d\u52a1\u5668\u7248\u672c\u4e0d\u662f 6.7 \u6216\u66f4\u9ad8\u7248\u672c\uff1a\u9ad8\u7248\u672c\u662f Socket \u8f6c\u53d1\u6240\u5fc5\u987b\u7684\uff0c\u7528\u4e8e\u901a\u8fc7 SSH \u8fde\u63a5\u5230 Docker Socket\u3002\u4f60\u53ef\u4ee5\u5728\u4f60\u8981\u8fde\u63a5\u7684\u4e3b\u673a\u4e0a\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"sshd -V")," \u6216\u4f7f\u7528 netcat \u8fdb\u884c\u68c0\u67e5\uff1a"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ nc xxx.xxx.xxx.xxx 22\nSSH-2.0-OpenSSH_6.6.1p1 Ubuntu-2ubuntu2.10\n")),(0,a.kt)("h3",{id:"failed-to-dial-ssh-using-address-xxxxxxxxxxxxxx-error-configuring-ssh-ssh-no-key-found"},"Failed to dial ssh using address ","[xxx.xxx.xxx.xxx:xx]",": Error configuring SSH: ssh: no key found"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ssh_key_path")," \u5bc6\u94a5\u6587\u4ef6\u65e0\u6cd5\u8bbf\u95ee\uff1a\u8bf7\u786e\u4fdd\u4f60\u5df2\u7ecf\u6307\u5b9a\u4e86\u79c1\u94a5\u6587\u4ef6\uff08\u4e0d\u662f\u516c\u94a5 ",(0,a.kt)("inlineCode",{parentName:"p"},".pub"),"\uff09\uff0c\u800c\u4e14\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"rke")," \u547d\u4ee4\u7684\u7528\u6237\u53ef\u4ee5\u8bbf\u95ee\u8be5\u79c1\u94a5\u6587\u4ef6\u3002"),(0,a.kt)("h3",{id:"failed-to-dial-ssh-using-address-xxxxxxxxxxxxxx-ssh-handshake-failed-ssh-unable-to-authenticate-attempted-methods-none-publickey-no-supported-methods-remain"},"Failed to dial ssh using address ","[xxx.xxx.xxx.xxx:xx]",": ssh: handshake failed: ssh: unable to authenticate, attempted methods ","[none publickey]",", no supported methods remain"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ssh_key_path")," \u5bc6\u94a5\u6587\u4ef6\u4e0d\u662f\u8bbf\u95ee\u8282\u70b9\u7684\u6b63\u786e\u6587\u4ef6\uff1a\u8bf7\u4ed4\u7ec6\u68c0\u67e5\uff0c\u786e\u4fdd\u4f60\u5df2\u4e3a\u8282\u70b9\u6307\u5b9a\u4e86\u6b63\u786e\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"ssh_key_path")," \u548c\u8fde\u63a5\u7528\u6237\u3002"),(0,a.kt)("h3",{id:"failed-to-dial-ssh-using-address-xxxxxxxxxxxxxx-error-configuring-ssh-ssh-cannot-decode-encrypted-private-keys"},"Failed to dial ssh using address ","[xxx.xxx.xxx.xxx:xx]",": Error configuring SSH: ssh: cannot decode encrypted private keys"),(0,a.kt)("p",null,"\u5982\u9700\u4f7f\u7528\u52a0\u5bc6\u7684\u79c1\u94a5\uff0c\u8bf7\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"ssh-agent")," \u6765\u4f7f\u7528\u5bc6\u7801\u6765\u52a0\u8f7d\u5bc6\u94a5\u3002\u5982\u679c\u5728\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"rke")," \u547d\u4ee4\u7684\u73af\u5883\u4e2d\u627e\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"SSH_AUTH_SOCK")," \u73af\u5883\u53d8\u91cf\uff0c\u5b83\u5c06\u81ea\u52a8\u7528\u4e8e\u8fde\u63a5\u5230\u8282\u70b9\u3002"),(0,a.kt)("h3",{id:"cannot-connect-to-the-docker-daemon-at-unixvarrundockersock-is-the-docker-daemon-running"},"Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?"),(0,a.kt)("p",null,"\u8282\u70b9\u65e0\u6cd5\u901a\u8fc7\u914d\u7f6e\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"address")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"port")," \u8bbf\u95ee\u3002"))}u.isMDXComponent=!0}}]);