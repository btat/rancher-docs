"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[28543],{3905:function(e,n,t){t.d(n,{Zo:function(){return i},kt:function(){return u}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},i=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),m=p(t),u=a,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return t?r.createElement(h,s(s({ref:n},i),{},{components:t})):r.createElement(h,s({ref:n},i))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var p=2;p<o;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},59537:function(e,n,t){t.r(n),t.d(n,{assets:function(){return i},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return d}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),s=["components"],c={title:"\u4f7f\u7528\u5916\u90e8 Ceph \u9a71\u52a8"},l=void 0,p={unversionedId:"how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/use-external-ceph-driver",id:"version-2.6/how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/use-external-ceph-driver",title:"\u4f7f\u7528\u5916\u90e8 Ceph \u9a71\u52a8",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5728 RKE2 \u96c6\u7fa4\u4e2d\u4f7f\u7528\u5916\u90e8 Ceph \u9a71\u52a8\u3002\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f RKE\uff0c\u5219\u9700\u8981\u6267\u884c\u5176\u4ed6\u6b65\u9aa4\u3002\u8be6\u60c5\u8bf7\u53c2\u9605\u672c\u8282\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/use-external-ceph-driver.md",sourceDirName:"how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage",slug:"/how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/use-external-ceph-driver",permalink:"/zh/v2.6/how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/use-external-ceph-driver",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/use-external-ceph-driver.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"2022/11/14",frontMatter:{title:"\u4f7f\u7528\u5916\u90e8 Ceph \u9a71\u52a8"},sidebar:"tutorialSidebar",previous:{title:"\u5728 Rancher \u4e2d\u52a8\u6001\u914d\u7f6e\u65b0\u5b58\u50a8",permalink:"/zh/v2.6/how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/dynamically-provision-new-storage"},next:{title:"GlusterFS \u5377",permalink:"/zh/v2.6/how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/about-glusterfs-volumes"}},i={},d=[{value:"\u8981\u6c42",id:"\u8981\u6c42",level:2},{value:"\u5728 RKE \u4e2d\u4f7f\u7528 Ceph \u9a71\u52a8",id:"\u5728-rke-\u4e2d\u4f7f\u7528-ceph-\u9a71\u52a8",level:2},{value:"\u5728 RKE2 \u96c6\u7fa4\u4e0a\u5b89\u88c5 ceph-csi \u9a71\u52a8",id:"\u5728-rke2-\u96c6\u7fa4\u4e0a\u5b89\u88c5-ceph-csi-\u9a71\u52a8",level:2},{value:"\u4f7f\u7528 Helm \u5b89\u88c5 ceph-csi \u9a71\u52a8",id:"\u4f7f\u7528-helm-\u5b89\u88c5-ceph-csi-\u9a71\u52a8",level:2},{value:"\u521b\u5efa RBD Ceph \u8d44\u6e90",id:"\u521b\u5efa-rbd-ceph-\u8d44\u6e90",level:2},{value:"\u914d\u7f6e RBD Ceph \u8bbf\u95ee\u5bc6\u94a5",id:"\u914d\u7f6e-rbd-ceph-\u8bbf\u95ee\u5bc6\u94a5",level:2},{value:"\u7528\u6237\u8d26\u53f7",id:"\u7528\u6237\u8d26\u53f7",level:3},{value:"\u7ba1\u7406\u5458\u8d26\u53f7",id:"\u7ba1\u7406\u5458\u8d26\u53f7",level:3},{value:"\u521b\u5efa RBD \u6d4b\u8bd5\u8d44\u6e90",id:"\u521b\u5efa-rbd-\u6d4b\u8bd5\u8d44\u6e90",level:2},{value:"\u5728 Pod \u4e2d\u4f7f\u7528 RBD",id:"\u5728-pod-\u4e2d\u4f7f\u7528-rbd",level:3},{value:"\u5728\u6301\u4e45\u5377\u4e2d\u4f7f\u7528 RBD",id:"\u5728\u6301\u4e45\u5377\u4e2d\u4f7f\u7528-rbd",level:3},{value:"\u5728\u5b58\u50a8\u7c7b\u4e2d\u4f7f\u7528 RBD",id:"\u5728\u5b58\u50a8\u7c7b\u4e2d\u4f7f\u7528-rbd",level:3},{value:"RKE2 Server/Master \u914d\u7f6e",id:"rke2-servermaster-\u914d\u7f6e",level:3},{value:"RKE2 Agent/Worker \u914d\u7f6e",id:"rke2-agentworker-\u914d\u7f6e",level:3},{value:"\u6d4b\u8bd5\u7248\u672c",id:"\u6d4b\u8bd5\u7248\u672c",level:2},{value:"\u6545\u969c\u6392\u9664",id:"\u6545\u969c\u6392\u9664",level:2}],m={toc:d};function u(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5728 RKE2 \u96c6\u7fa4\u4e2d\u4f7f\u7528\u5916\u90e8 Ceph \u9a71\u52a8\u3002\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f RKE\uff0c\u5219\u9700\u8981\u6267\u884c\u5176\u4ed6\u6b65\u9aa4\u3002\u8be6\u60c5\u8bf7\u53c2\u9605",(0,o.kt)("a",{parentName:"p",href:"#%E5%9C%A8-rke-%E4%B8%AD%E4%BD%BF%E7%94%A8-ceph-%E9%A9%B1%E5%8A%A8"},"\u672c\u8282"),"\u3002"),(0,o.kt)("h2",{id:"\u8981\u6c42"},"\u8981\u6c42"),(0,o.kt)("p",null,"\u786e\u4fdd ceph-common \u548c xfsprogs \u8f6f\u4ef6\u5305\u5b89\u88c5\u5728 SLE worker \u8282\u70b9\u4e0a\u3002"),(0,o.kt)("h2",{id:"\u5728-rke-\u4e2d\u4f7f\u7528-ceph-\u9a71\u52a8"},"\u5728 RKE \u4e2d\u4f7f\u7528 Ceph \u9a71\u52a8"),(0,o.kt)("p",null,"\u4ee5\u4e0b\u8d44\u6e90\u4e0e RKE \u96c6\u7fa4\u5b8c\u5168\u517c\u5bb9\uff0c\u4f46\u9700\u8981\u4e3a RKE \u6267\u884c\u989d\u5916\u7684 kubelet \u914d\u7f6e\u3002"),(0,o.kt)("p",null,"\u5728 RKE \u96c6\u7fa4\u4e0a\uff0ckubelet \u7ec4\u4ef6\u5728 Docker \u5bb9\u5668\u4e2d\u8fd0\u884c\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u65e0\u6cd5\u50cf rbd \u548c libceph \u4e00\u6837\u8bbf\u95ee\u4e3b\u673a\u7684\u5185\u6838\u6a21\u5757\u3002"),(0,o.kt)("p",null,"\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u9650\u5236\uff0c\u4f60\u53ef\u4ee5\u5728 worker \u8282\u70b9\u4e0a\u8fd0\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"modprobe rbd"),"\uff0c\u6216\u8005\u914d\u7f6e kubelet \u5bb9\u5668\u4ee5\u5c06\u4e3b\u673a\u4e2d\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"/lib/modules")," \u76ee\u5f55\u81ea\u52a8\u6302\u8f7d\u5230\u5bb9\u5668\u4e2d\u3002"),(0,o.kt)("p",null,"\u5bf9\u4e8e kubelet \u914d\u7f6e\uff0c\u5728 RKE \u96c6\u7fa4\u914d\u7f6e\u4e4b\u524d\uff0c\u5c06\u4ee5\u4e0b\u5185\u5bb9\u653e\u5165 ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster.yml")," \u6587\u4ef6\u4e2d\u3002\u4f60\u7a0d\u540e\u8fd8\u53ef\u4ee5\u5728 Rancher UI \u4e2d\u901a\u8fc7\u5355\u51fb",(0,o.kt)("strong",{parentName:"p"},"\u7f16\u8f91\u96c6\u7fa4 > \u4ee5 YAML \u6587\u4ef6\u7f16\u8f91"),"\u5e76\u91cd\u65b0\u542f\u52a8 worker \u8282\u70b9\u6765\u4fee\u6539 ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster.yml"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"services:\n  kubelet:\n    extra_binds:\n      - '/lib/modules:/lib/modules:ro'\n")),(0,o.kt)("p",null,"\u6709\u5173 ",(0,o.kt)("inlineCode",{parentName:"p"},"extra_binds")," \u6307\u4ee4\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/services/services-extras/#extra-binds"},"\u672c\u8282"),"\u3002"),(0,o.kt)("h2",{id:"\u5728-rke2-\u96c6\u7fa4\u4e0a\u5b89\u88c5-ceph-csi-\u9a71\u52a8"},"\u5728 RKE2 \u96c6\u7fa4\u4e0a\u5b89\u88c5 ceph-csi \u9a71\u52a8"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u53ea\u6709\u52a8\u6001 RBD \u914d\u7f6e\u9700\u8981\u6267\u884c\u8fd9\u4e9b\u6b65\u9aa4\u3002"))),(0,o.kt)("p",null,"\u6709\u5173 ",(0,o.kt)("inlineCode",{parentName:"p"},"ceph-csi-rbd")," chart \u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ceph/ceph-csi/blob/devel/charts/ceph-csi-rbd/README.md"},"\u6b64\u9875\u9762"),"\u3002"),(0,o.kt)("p",null,"\u8981\u83b7\u53d6\u6709\u5173 SES \u96c6\u7fa4\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u8fd0\u884c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ceph mon dump\n")),(0,o.kt)("p",null,"\u67e5\u770b\u8f93\u51fa\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"dumped monmap epoch 3\nepoch 3\nfsid 79179d9d-98d8-4976-ab2e-58635caa7235\nlast_changed 2021-02-11T10:56:42.110184+0000\ncreated 2021-02-11T10:56:22.913321+0000\nmin_mon_release 15 (octopus)\n0: [v2:10.85.8.118:3300/0,v1:10.85.8.118:6789/0] mon.a\n1: [v2:10.85.8.123:3300/0,v1:10.85.8.123:6789/0] mon.b\n2: [v2:10.85.8.124:3300/0,v1:10.85.8.124:6789/0] mon.c\n")),(0,o.kt)("p",null,"\u7a0d\u540e\u4f60\u5c06\u9700\u8981 fsid \u548c mon \u5730\u5740\u503c\u3002"),(0,o.kt)("h2",{id:"\u4f7f\u7528-helm-\u5b89\u88c5-ceph-csi-\u9a71\u52a8"},"\u4f7f\u7528 Helm \u5b89\u88c5 ceph-csi \u9a71\u52a8"),(0,o.kt)("p",null,"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"helm repo add ceph-csi https://ceph.github.io/csi-charts\nhelm repo update\nhelm search repo ceph-csi -l\nhelm inspect values ceph-csi/ceph-csi-rbd > ceph-csi-rbd-values.yaml\n")),(0,o.kt)("p",null,"\u4fee\u6539 ",(0,o.kt)("inlineCode",{parentName:"p"},"ceph-csi-rbd-values.yaml")," \u6587\u4ef6\u5e76\u53ea\u4fdd\u7559\u6240\u9700\u7684\u66f4\u6539\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# ceph-csi-rbd-values.yaml\ncsiConfig:\n  - clusterID: "79179d9d-98d8-4976-ab2e-58635caa7235"\n    monitors:\n      - "10.85.8.118:6789"\n      - "10.85.8.123:6789"\n      - "10.85.8.124:6789"\nprovisioner:\n  name: provisioner\n  replicaCount: 2\n')),(0,o.kt)("p",null,"\u786e\u4fdd\u53ef\u4ee5\u4ece RKE2 \u96c6\u7fa4\u8bbf\u95ee ceph \u76d1\u89c6\u5668\uff08\u4f8b\u5982\u901a\u8fc7 ping\uff09\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl create namespace ceph-csi-rbd\nhelm install --namespace ceph-csi-rbd ceph-csi-rbd ceph-csi/ceph-csi-rbd --values ceph-csi-rbd-values.yaml\nkubectl rollout status deployment ceph-csi-rbd-provisioner -n ceph-csi-rbd\nhelm status ceph-csi-rbd -n ceph-csi-rbd\n")),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u76f4\u63a5\u901a\u8fc7 Helm \u4fee\u6539\u914d\u7f6e\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"ceph-csi-rbd-values.yaml")," \u6587\u4ef6\u5e76\u8c03\u7528\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"helm upgrade \\\n  --namespace ceph-csi-rbd ceph-csi-rbd ceph-csi/ceph-csi-rbd --values ceph-csi-rbd-values.yaml\n")),(0,o.kt)("h2",{id:"\u521b\u5efa-rbd-ceph-\u8d44\u6e90"},"\u521b\u5efa RBD Ceph \u8d44\u6e90"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# \u521b\u5efa\u4e00\u4e2a ceph \u6c60\uff1a\nceph osd pool create myPool 64 64\n\n# \u521b\u5efa\u4e00\u4e2a\u5757\u8bbe\u5907\u6c60\uff1a\nrbd pool init myPool\n\n# \u521b\u5efa\u4e00\u4e2a\u5757\u8bbe\u5907\u955c\u50cf\uff1a\nrbd create -s 2G myPool/image\n\n# \u521b\u5efa\u4e00\u4e2a\u5757\u8bbe\u5907\u7528\u6237\u5e76\u8bb0\u5f55\u5bc6\u94a5\uff1a\nceph auth get-or-create-key client.myPoolUser mon \"allow r\" osd \"allow class-read object_prefix rbd_children, allow rwx pool=myPool\" | tr -d '\\n' | base64\nQVFDZ0R5VmdyRk9KREJBQTJ5b2s5R1E2NUdSWExRQndhVVBwWXc9PQ==\n\n# Base64 \u52a0\u5bc6 ceph \u7528\u6237 myPoolUser\uff1a\necho \"myPoolUser\" | tr -d '\\n' | base64\nbXlQb29sVXNlcg==\n\n# \u521b\u5efa\u4e00\u4e2a\u5757\u8bbe\u5907\u7ba1\u7406\u5458\u5e76\u8bb0\u5f55\u5bc6\u94a5\uff1a\nceph auth get-or-create-key client.myPoolAdmin mds 'allow *' mgr 'allow *' mon 'allow *' osd 'allow * pool=myPool' | tr -d '\\n' | base64\nQVFCK0hDVmdXSjQ1T0JBQXBrc0VtcVhlZFpjc0JwaStIcmU5M3c9PQ==\n\n# Base64 \u52a0\u5bc6 ceph \u7528\u6237 myPoolAdmin\uff1a\necho \"myPoolAdmin\" | tr -d '\\n' | base64\nbXlQb29sQWRtaW4=\n")),(0,o.kt)("h2",{id:"\u914d\u7f6e-rbd-ceph-\u8bbf\u95ee\u5bc6\u94a5"},"\u914d\u7f6e RBD Ceph \u8bbf\u95ee\u5bc6\u94a5"),(0,o.kt)("h3",{id:"\u7528\u6237\u8d26\u53f7"},"\u7528\u6237\u8d26\u53f7"),(0,o.kt)("p",null,"\u5bf9\u4e8e\u9759\u6001 RBD \u914d\u7f6e\uff08ceph \u6c60\u4e2d\u7684\u955c\u50cf\u5fc5\u987b\u5b58\u5728\uff09\uff0c\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cat > ceph-user-secret.yaml << EOF\napiVersion: v1\nkind: Secret\nmetadata:\n  name: ceph-user\n  namespace: default\ntype: kubernetes.io/rbd\ndata:\n  userID: bXlQb29sVXNlcg==\n  userKey: QVFDZ0R5VmdyRk9KREJBQTJ5b2s5R1E2NUdSWExRQndhVVBwWXc9PQ==\nEOF\n\nkubectl apply -f ceph-user-secret.yaml\n")),(0,o.kt)("h3",{id:"\u7ba1\u7406\u5458\u8d26\u53f7"},"\u7ba1\u7406\u5458\u8d26\u53f7"),(0,o.kt)("p",null,"\u5bf9\u4e8e\u52a8\u6001 RBD \u914d\u7f6e\uff08\u7528\u4e8e\u5728\u7ed9\u5b9a ceph \u6c60\u4e2d\u81ea\u52a8\u521b\u5efa\u955c\u50cf\uff09\uff0c\u8bf7\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cat > ceph-admin-secret.yaml << EOF\napiVersion: v1\nkind: Secret\nmetadata:\n  name: ceph-admin\n  namespace: default\ntype: kubernetes.io/rbd\ndata:\n  userID: bXlQb29sQWRtaW4=\n  userKey: QVFCK0hDVmdXSjQ1T0JBQXBrc0VtcVhlZFpjc0JwaStIcmU5M3c9PQ==\nEOF\n\nkubectl apply -f ceph-admin-secret.yaml\n")),(0,o.kt)("h2",{id:"\u521b\u5efa-rbd-\u6d4b\u8bd5\u8d44\u6e90"},"\u521b\u5efa RBD \u6d4b\u8bd5\u8d44\u6e90"),(0,o.kt)("h3",{id:"\u5728-pod-\u4e2d\u4f7f\u7528-rbd"},"\u5728 Pod \u4e2d\u4f7f\u7528 RBD"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# pod\ncat > ceph-rbd-pod-inline.yaml << EOF\napiVersion: v1\nkind: Pod\nmetadata:\n  name: ceph-rbd-pod-inline\nspec:\n  containers:\n  - name: ceph-rbd-pod-inline\n    image: busybox\n    command: ["sleep", "infinity"]\n    volumeMounts:\n    - mountPath: /mnt/ceph_rbd\n      name: volume\n  volumes:\n  - name: volume\n    rbd:\n      monitors:\n      - 10.85.8.118:6789\n      - 10.85.8.123:6789\n      - 10.85.8.124:6789\n      pool: myPool\n      image: image\n      user: myPoolUser\n      secretRef:\n        name: ceph-user\n      fsType: ext4\n      readOnly: false\nEOF\n\nkubectl apply -f ceph-rbd-pod-inline.yaml\nkubectl get pod\nkubectl exec pod/ceph-rbd-pod-inline -- df -k | grep rbd\n')),(0,o.kt)("h3",{id:"\u5728\u6301\u4e45\u5377\u4e2d\u4f7f\u7528-rbd"},"\u5728\u6301\u4e45\u5377\u4e2d\u4f7f\u7528 RBD"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# pod-pvc-pv\ncat > ceph-rbd-pod-pvc-pv-allinone.yaml << EOF\napiVersion: v1\nkind: PersistentVolume\nmetadata:\n  name: ceph-rbd-pv\nspec:\n  capacity:\n    storage: 2Gi\n  accessModes:\n    - ReadWriteOnce\n  rbd:\n    monitors:\n    - 10.85.8.118:6789\n    - 10.85.8.123:6789\n    - 10.85.8.124:6789\n    pool: myPool\n    image: image\n    user: myPoolUser\n    secretRef:\n      name: ceph-user\n    fsType: ext4\n    readOnly: false\n---\nkind: PersistentVolumeClaim\napiVersion: v1\nmetadata:\n  name: ceph-rbd-pvc\nspec:\n  accessModes:\n  - ReadWriteOnce\n  resources:\n    requests:\n      storage: 2Gi\n---\napiVersion: v1\nkind: Pod\nmetadata:\n  name: ceph-rbd-pod-pvc-pv\nspec:\n  containers:\n  - name: ceph-rbd-pod-pvc-pv\n    image: busybox\n    command: ["sleep", "infinity"]\n    volumeMounts:\n    - mountPath: /mnt/ceph_rbd\n      name: volume\n  volumes:\n  - name: volume\n    persistentVolumeClaim:\n      claimName: ceph-rbd-pvc\nEOF\n\nkubectl apply -f ceph-rbd-pod-pvc-pv-allinone.yaml\nkubectl get pv,pvc,pod\nkubectl exec pod/ceph-rbd-pod-pvc-pv -- df -k | grep rbd\n')),(0,o.kt)("h3",{id:"\u5728\u5b58\u50a8\u7c7b\u4e2d\u4f7f\u7528-rbd"},"\u5728\u5b58\u50a8\u7c7b\u4e2d\u4f7f\u7528 RBD"),(0,o.kt)("p",null,"\u6b64\u793a\u4f8b\u7528\u4e8e\u52a8\u6001\u914d\u7f6e\u3002\u9700\u8981 ceph-csi \u9a71\u52a8\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# pod-pvc-sc\ncat > ceph-rbd-pod-pvc-sc-allinone.yaml <<EOF\napiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  name: ceph-rbd-sc\n  annotations:\n    storageclass.kubernetes.io/is-default-class: "true"\nprovisioner: rbd.csi.ceph.com\nparameters:\n   clusterID: 79179d9d-98d8-4976-ab2e-58635caa7235\n   pool: myPool\n   imageFeatures: layering\n   csi.storage.k8s.io/provisioner-secret-name: ceph-admin\n   csi.storage.k8s.io/provisioner-secret-namespace: default\n   csi.storage.k8s.io/controller-expand-secret-name: ceph-admin\n   csi.storage.k8s.io/controller-expand-secret-namespace: default\n   csi.storage.k8s.io/node-stage-secret-name: ceph-admin\n   csi.storage.k8s.io/node-stage-secret-namespace: default\nreclaimPolicy: Delete\nallowVolumeExpansion: true\nmountOptions:\n   - discard\n---\nkind: PersistentVolumeClaim\napiVersion: v1\nmetadata:\n  name: ceph-rbd-sc-pvc\nspec:\n  accessModes:\n    - ReadWriteOnce\n  resources:\n    requests:\n      storage: 2Gi\n  storageClassName: ceph-rbd-sc\n---\napiVersion: v1\nkind: Pod\nmetadata:\n  name: ceph-rbd-pod-pvc-sc\nspec:\n  containers:\n  - name:  ceph-rbd-pod-pvc-sc\n    image: busybox\n    command: ["sleep", "infinity"]\n    volumeMounts:\n    - mountPath: /mnt/ceph_rbd\n      name: volume\n  volumes:\n  - name: volume\n    persistentVolumeClaim:\n      claimName: ceph-rbd-sc-pvc\nEOF\n\nkubectl apply -f ceph-rbd-pod-pvc-sc-allinone.yaml\nkubectl get pv,pvc,sc,pod\nkubectl exec pod/ceph-rbd-pod-pvc-sc -- df -k | grep rbd\n')),(0,o.kt)("h3",{id:"rke2-servermaster-\u914d\u7f6e"},"RKE2 Server/Master \u914d\u7f6e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo su\ncurl -sfL https://get.rke2.io | sh -\nsystemctl enable --now rke2-server\n\ncat > /root/.bashrc << EOF\nexport PATH=$PATH:/var/lib/rancher/rke2/bin/\nexport KUBECONFIG=/etc/rancher/rke2/rke2.yaml\nEOF\n\ncat /var/lib/rancher/rke2/server/node-token\ntoken: K10ca0c38d4ff90d8b80319ab34092e315a8b732622e6adf97bc9eb0536REDACTED::server:ec0308000b8a6b595da000efREDACTED\n")),(0,o.kt)("h3",{id:"rke2-agentworker-\u914d\u7f6e"},"RKE2 Agent/Worker \u914d\u7f6e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'mkdir -p /etc/rancher/rke2/\n\ncat > /etc/rancher/rke2/config.yaml << EOF\nserver: https://10.100.103.23:9345\ntoken: K10ca0c38d4ff90d8b80319ab34092e315a8b732622e6adf97bc9eb0536REDACTED::server:ec0308000b8a6b595da000efREDACTED\nEOF\n\ncurl -sfL https://get.rke2.io | INSTALL_RKE2_TYPE="agent" sh -\nsystemctl enable --now rke2-agent.service\n')),(0,o.kt)("p",null,"\u8981\u5c06\u96c6\u7fa4\u5bfc\u5165 Rancher\uff0c\u8bf7\u5355\u51fb ",(0,o.kt)("strong",{parentName:"p"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002\u7136\u540e\u5728",(0,o.kt)("strong",{parentName:"p"},"\u96c6\u7fa4"),"\u9875\u9762\u4e0a\uff0c\u5355\u51fb",(0,o.kt)("strong",{parentName:"p"},"\u5bfc\u5165\u5df2\u6709\u96c6\u7fa4"),"\u3002\u7136\u540e\u5728 server/master \u4e0a\u8fd0\u884c\u63d0\u4f9b\u7684 kubectl \u547d\u4ee4\u3002"),(0,o.kt)("h2",{id:"\u6d4b\u8bd5\u7248\u672c"},"\u6d4b\u8bd5\u7248\u672c"),(0,o.kt)("p",null,"\u8fd0\u884c RKE2 \u8282\u70b9\u7684\u64cd\u4f5c\u7cfb\u7edf\uff1a\u5b89\u88c5\u4e86 kernel-default-5.3.18-24.49 \u7684 JeOS SLE15-SP2"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'kubectl version\nClient Version: version.Info{Major:"1", Minor:"18", GitVersion:"v1.18.4", GitCommit:"c96aede7b5205121079932896c4ad89bb93260af", GitTreeState:"clean", BuildDate:"2020-06-22T12:00:00Z", GoVersion:"go1.13.11", Compiler:"gc", Platform:"linux/amd64"}\nServer Version: version.Info{Major:"1", Minor:"19", GitVersion:"v1.19.7+rke2r1", GitCommit:"1dd5338295409edcfff11505e7bb246f0d325d15", GitTreeState:"clean", BuildDate:"2021-01-20T01:50:52Z", GoVersion:"go1.15.5b5", Compiler:"gc", Platform:"linux/amd64"}\n\nhelm version\nversion.BuildInfo{Version:"3.4.1", GitCommit:"c4e74854886b2efe3321e185578e6db9be0a6e29", GitTreeState:"clean", GoVersion:"go1.14.12"}\n')),(0,o.kt)("p",null,"RKE2 \u96c6\u7fa4\u4e0a\u7684 Kubernetes \u7248\u672c\uff1av1.19.7+rke2r1"),(0,o.kt)("h2",{id:"\u6545\u969c\u6392\u9664"},"\u6545\u969c\u6392\u9664"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f\u57fa\u4e8e SES7 \u7684 SUSE ceph-rook\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u7f16\u8f91 ",(0,o.kt)("inlineCode",{parentName:"p"},"rook-1.4.5/ceph/cluster.yaml")," \u5e76\u8bbe\u7f6e ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.network.hostNetwork=true")," \u6765\u516c\u5f00 hostNetwork \u4e0a\u7684\u76d1\u89c6\u5668\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u8981\u64cd\u4f5c ceph-rook \u96c6\u7fa4\uff0c\u5219\u53ef\u4ee5\u5728 Kubernetes \u96c6\u7fa4\u4e0a\u90e8\u7f72\u4e00\u4e2a\u5de5\u5177\u7bb1\uff0c\u5176\u4e2d ceph-rook \u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl apply -f rook-1.4.5/ceph/toolbox.yaml")," \u914d\u7f6e\u3002\u7136\u540e\u6240\u6709\u4e0e ceph \u76f8\u5173\u7684\u547d\u4ee4\u90fd\u53ef\u4ee5\u5728 toolbox pod \u4e2d\u6267\u884c\uff0c\u4f8b\u5982\uff0c\u8fd0\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl exec -it -n rook-ceph rook-ceph-tools-686d8b8bfb-2nvqp -- bash"),"\u3002"),(0,o.kt)("p",null,"ceph \u64cd\u4f5c - \u57fa\u672c\u547d\u4ee4\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ceph osd pool stats\nceph osd pool delete myPool myPool --yes-i-really-really-mean-it\nrbd list -p myPool\n> csi-vol-f5d3766c-7296-11eb-b32a-c2b045952d38\n> image\n")),(0,o.kt)("p",null,"\u5220\u9664\u955c\u50cf\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"rbd rm csi-vol-f5d3766c-7296-11eb-b32a-c2b045952d38 -p myPool")),(0,o.kt)("p",null,"rook \u5de5\u5177\u7bb1\u4e2d\u7684 CephFS \u547d\u4ee4\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ceph -s\nceph fs ls\nceph fs fail cephfs\nceph fs rm cephfs --yes-i-really-mean-it\nceph osd pool delete cephfs_data cephfs_data --yes-i-really-really-mean-it\nceph osd pool delete cephfs_metadata cephfs_metadata --yes-i-really-really-mean-it\n")),(0,o.kt)("p",null,"\u8981\u51c6\u5907 cephfs \u6587\u4ef6\u7cfb\u7edf\uff0c\u4f60\u53ef\u4ee5\u5728 rook \u96c6\u7fa4\u4e0a\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl apply -f rook-1.4.5/ceph/filesystem.yaml\n")))}u.isMDXComponent=!0}}]);