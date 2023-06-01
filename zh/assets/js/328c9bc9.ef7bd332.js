"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[6513],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),o=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=o(n),k=a,d=m["".concat(p,".").concat(k)]||m[k]||c[k]||l;return n?r.createElement(d,s(s({ref:t},u),{},{components:n})):r.createElement(d,s({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var o=2;o<l;o++)s[o]=n[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19818:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var r=n(87462),a=(n(67294),n(3905));const l={title:"\u5728 Amazon EKS \u4e0a\u5b89\u88c5 Rancher"},s=void 0,i={unversionedId:"getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-amazon-eks",id:"getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-amazon-eks",title:"\u5728 Amazon EKS \u4e0a\u5b89\u88c5 Rancher",description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5728 EKS \u4e0a\u5b89\u88c5 Rancher \u7684\u4e24\u79cd\u65b9\u6cd5\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-amazon-eks.md",sourceDirName:"getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster",slug:"/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-amazon-eks",permalink:"/zh/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-amazon-eks",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-amazon-eks.md",tags:[],version:"current",lastUpdatedAt:1683884717,formattedLastUpdatedAt:"2023\u5e745\u670812\u65e5",frontMatter:{title:"\u5728 Amazon EKS \u4e0a\u5b89\u88c5 Rancher"},sidebar:"tutorialSidebar",previous:{title:"\u5728\u79bb\u7ebf\u73af\u5883\u4e2d\u6e32\u67d3 Helm \u6a21\u677f",permalink:"/zh/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/air-gapped-upgrades"},next:{title:"\u5728 Azure Kubernetes Service \u4e0a\u5b89\u88c5 Rancher",permalink:"/zh/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rancher-on-aks"}},p={},o=[{value:"\u4f7f\u7528 AWS \u6700\u4f73\u5b9e\u8df5\u7684\u5feb\u901f\u5165\u95e8",id:"\u4f7f\u7528-aws-\u6700\u4f73\u5b9e\u8df5\u7684\u5feb\u901f\u5165\u95e8",level:2},{value:"\u4e3a Rancher Server \u521b\u5efa EKS \u96c6\u7fa4",id:"\u4e3a-rancher-server-\u521b\u5efa-eks-\u96c6\u7fa4",level:2},{value:"1. \u51c6\u5907\u4f60\u7684\u5de5\u4f5c\u7ad9",id:"1-\u51c6\u5907\u4f60\u7684\u5de5\u4f5c\u7ad9",level:3},{value:"2. \u914d\u7f6e AWS CLI",id:"2-\u914d\u7f6e-aws-cli",level:3},{value:"3. \u521b\u5efa EKS \u96c6\u7fa4",id:"3-\u521b\u5efa-eks-\u96c6\u7fa4",level:3},{value:"4. \u6d4b\u8bd5\u96c6\u7fa4",id:"4-\u6d4b\u8bd5\u96c6\u7fa4",level:3},{value:"5. \u5b89\u88c5 Ingress",id:"5-\u5b89\u88c5-ingress",level:3},{value:"6. \u83b7\u53d6\u8d1f\u8f7d\u5747\u8861\u5668\u7684 IP",id:"6-\u83b7\u53d6\u8d1f\u8f7d\u5747\u8861\u5668\u7684-ip",level:3},{value:"7. \u8bbe\u7f6e DNS",id:"7-\u8bbe\u7f6e-dns",level:3},{value:"8. \u5b89\u88c5 Rancher Helm Chart",id:"8-\u5b89\u88c5-rancher-helm-chart",level:3}],u={toc:o};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u4e86\u5728 EKS \u4e0a\u5b89\u88c5 Rancher \u7684\u4e24\u79cd\u65b9\u6cd5\u3002"),(0,a.kt)("p",null,"\u7b2c\u4e00\u79cd\u65b9\u6cd5\u662f\u4f7f\u7528 CloudFormation \u5728 EKS \u96c6\u7fa4\u4e0a\u90e8\u7f72 Rancher Server\u3002\u8be5\u65b9\u6cd5\u7684\u6307\u5357\u662f\u4e0e Amazon Web Services \u5408\u4f5c\u521b\u5efa\u7684\uff0c\u65e8\u5728\u5c55\u793a\u5982\u4f55\u6309\u7167\u6700\u4f73\u5b9e\u8df5\u90e8\u7f72 Rancher\u3002"),(0,a.kt)("p",null,"\u7b2c\u4e8c\u79cd\u65b9\u6cd5\u662f\u4f7f\u7528\u547d\u4ee4\u884c\u5de5\u5177\u5b89\u88c5\u5e26\u6709 Ingress \u7684 EKS \u96c6\u7fa4\u3002\u5982\u679c\u4f60\u60f3\u5728 EKS \u4e0a\u4f7f\u7528 Rancher \u65f6\u4f7f\u7528\u8f83\u5c11\u7684\u8d44\u6e90\uff0c\u8bf7\u4f7f\u7528\u6b64\u65b9\u6cd5\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u5df2\u7ecf\u6709\u4e00\u4e2a EKS Kubernetes \u96c6\u7fa4\uff0c\u8bf7\u76f4\u63a5\u8df3\u8f6c\u5230",(0,a.kt)("a",{parentName:"p",href:"#5-%E5%AE%89%E8%A3%85-ingress"},"\u5b89\u88c5 Ingress"),"\u8fd9\u4e2a\u6b65\u9aa4\u3002\u7136\u540e\u6309\u7167",(0,a.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster#%E5%AE%89%E8%A3%85-rancher-helm-chart"},"\u6b64\u5904"),"\u7684\u6b65\u9aa4\u5b89\u88c5 Rancher Helm Chart\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528-aws-\u6700\u4f73\u5b9e\u8df5\u7684\u5feb\u901f\u5165\u95e8"},"\u4f7f\u7528 AWS \u6700\u4f73\u5b9e\u8df5\u7684\u5feb\u901f\u5165\u95e8"),(0,a.kt)("p",null,"Rancher \u548c Amazon Web Services \u5408\u4f5c\u7f16\u5199\u4e86\u4e00\u4efd\u5feb\u901f\u5165\u95e8\u6307\u5357\uff0c\u7528\u4e8e\u6309\u7167 AWS \u7684\u6700\u4f73\u5b9e\u8df5\uff0c\u5728 EKS \u96c6\u7fa4\u4e0a\u90e8\u7f72 Rancher\u3002\u8be6\u60c5\u8bf7\u53c2\u89c1",(0,a.kt)("a",{parentName:"p",href:"https://aws-quickstart.github.io/quickstart-eks-rancher/"},"\u90e8\u7f72\u6307\u5357"),"\u3002"),(0,a.kt)("p",null,"\u5feb\u901f\u5165\u95e8\u6307\u5357\u63d0\u4f9b\u4e86\u5728 EKS \u4e0a\u90e8\u7f72 Rancher \u7684\u4e09\u4e2a\u9009\u9879\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u5c06 Rancher \u90e8\u7f72\u5230\u65b0\u7684 VPC \u548c\u65b0\u7684 Amazon EKS \u96c6\u7fa4\u4e2d"),"\uff1a\u8be5\u9009\u9879\u6784\u5efa\u4e86\u4e00\u4e2a\u7531 VPC\u3001\u5b50\u7f51\u3001NAT \u7f51\u5173\u3001\u5b89\u5168\u7ec4\u3001\u5821\u5792\u4e3b\u673a\u3001Amazon EKS \u96c6\u7fa4\u548c\u5176\u4ed6\u57fa\u7840\u8bbe\u65bd\u7ec4\u4ef6\u7ec4\u6210\u7684\u5168\u65b0 AWS \u73af\u5883\u3002\u7136\u540e\u5c06 Rancher \u90e8\u7f72\u5230\u8fd9\u4e2a\u65b0\u7684 EKS \u96c6\u7fa4\u4e2d\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u5c06 Rancher \u90e8\u7f72\u5230\u73b0\u6709 VPC \u548c\u65b0\u7684 Amazon EKS \u96c6\u7fa4\u4e2d"),"\uff1a\u6b64\u9009\u9879\u5728\u73b0\u6709 AWS \u57fa\u7840\u67b6\u6784\u4e2d\u914d\u7f6e Rancher\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u5c06 Rancher \u90e8\u7f72\u5230\u73b0\u6709\u7684 VPC \u548c\u73b0\u6709\u7684 Amazon EKS \u96c6\u7fa4\u4e2d"),"\u3002\u6b64\u9009\u9879\u5728\u73b0\u6709 AWS \u57fa\u7840\u67b6\u6784\u4e2d\u914d\u7f6e Rancher\u3002")),(0,a.kt)("p",null,"\u4f7f\u7528\u9ed8\u8ba4\u53c2\u6570\u4e3a\u65b0\u7684 Virtual Private Cloud\uff08VPC\uff09\u548c\u65b0\u7684 Amazon EKS \u96c6\u7fa4\u6309\u7167\u6b64\u5feb\u901f\u5165\u95e8\u90e8\u7f72\uff0c\u4f1a\u5728 AWS Cloud \u4e2d\u6784\u5efa\u4ee5\u4e0b Rancher \u73af\u5883\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8de8\u8d8a\u4e09\u4e2a\u53ef\u7528\u533a\u7684\u9ad8\u53ef\u7528\u67b6\u6784\u3002","*"),(0,a.kt)("li",{parentName:"ul"},"\u6839\u636e AWS \u6700\u4f73\u5b9e\u8df5\uff0c\u914d\u7f6e\u6709\u516c\u5171\u548c\u79c1\u6709\u5b50\u7f51\u7684 VPC\uff0c\u4e3a\u4f60\u63d0\u4f9b AWS \u4e0a\u4f60\u81ea\u5df1\u7684\u865a\u62df\u7f51\u7edc\u3002","*"),(0,a.kt)("li",{parentName:"ul"},"\u5728\u516c\u5171\u5b50\u7f51\u4e2d\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u7ba1\u7406\u7f51\u7edc\u5730\u5740\u8f6c\u6362\uff08NAT\uff09\u7f51\u5173\uff0c\u4ee5\u5141\u8bb8\u8d44\u6e90\u7684\u51fa\u7ad9\u4e92\u8054\u7f51\u8bbf\u95ee\u3002","*"),(0,a.kt)("li",{parentName:"ul"},"\u81ea\u52a8\u6269\u7f29\u7ec4\u4e2d\u7684 Linux \u5821\u5792\u4e3b\u673a\uff0c\u5141\u8bb8\u5bf9\u516c\u5171\u548c\u79c1\u6709\u5b50\u7f51\u4e2d\u7684 Amazon Elastic Compute Cloud (Amazon EC2) \u5b9e\u4f8b\u8fdb\u884c\u5165\u7ad9\u5b89\u5168 Shell (SSH) \u8bbf\u95ee\u3002","*"))),(0,a.kt)("li",{parentName:"ul"},"\u79c1\u6709\u5b50\u7f51\u4e2d\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u81ea\u52a8\u6269\u7f29\u7ec4\u4e2d\u7684 Kubernetes \u8282\u70b9\u3002","*"),(0,a.kt)("li",{parentName:"ul"},"\u7f51\u7edc\u8d1f\u8f7d\u5747\u8861\u5668\uff08\u672a\u663e\u793a\uff09\uff0c\u7528\u4e8e\u8bbf\u95ee Rancher \u63a7\u5236\u53f0\u3002"))),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528 AWS Systems Manager \u81ea\u52a8\u5316\u8fdb\u884c Rancher \u90e8\u7f72\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7528\u4e8e EKS \u96c6\u7fa4\u7684 Amazon EKS \u670d\u52a1\uff0c\u5b83\u63d0\u4f9b\u4e86 Kubernetes controlplane\u3002","*"),(0,a.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u8bbf\u95ee Rancher \u90e8\u7f72\u7684 Amazon Route 53 DNS \u8bb0\u5f55\u3002")),(0,a.kt)("p",null,"*"," \u5c06\u5feb\u901f\u542f\u52a8\u90e8\u7f72\u5230\u73b0\u6709 Amazon EKS \u96c6\u7fa4\u4e2d\u7684 CloudForm \u6a21\u677f\u4f1a\u8df3\u8fc7\u6807\u6709\u661f\u53f7\uff08","*","\uff09\u7684\u7ec4\u4ef6\uff0c\u5e76\u63d0\u793a\u4f60\u67e5\u770b\u73b0\u6709 VPC \u914d\u7f6e\u3002"),(0,a.kt)("h2",{id:"\u4e3a-rancher-server-\u521b\u5efa-eks-\u96c6\u7fa4"},"\u4e3a Rancher Server \u521b\u5efa EKS \u96c6\u7fa4"),(0,a.kt)("p",null,"\u5728\u672c\u8282\u4e2d\uff0c\u4f60\u5c06\u4f7f\u7528\u547d\u4ee4\u884c\u5de5\u5177\u5b89\u88c5\u4e00\u4e2a\u5e26\u6709 Ingress \u7684 EKS \u96c6\u7fa4\u3002\u5982\u679c\u4f60\u60f3\u5728 EKS \u4e0a\u4f7f\u7528 Rancher \u65f6\u4f7f\u7528\u8f83\u5c11\u7684\u8d44\u6e90\uff0c\u8bf7\u4f7f\u7528\u6b64\u65b9\u6cd5\u3002"),(0,a.kt)("admonition",{title:"\u5148\u51b3\u6761\u4ef6\uff1a",type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u5df2\u6709\u4e00\u4e2a AWS \u8d26\u6237\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5efa\u8bae\u4f7f\u7528 IAM \u7528\u6237\u800c\u4e0d\u662f AWS \u6839\u8d26\u6237\u3002\u4f60\u5c06\u9700\u8981 IAM \u7528\u6237\u7684\u8bbf\u95ee\u5bc6\u94a5 (access key) \u548c\u5bc6\u6587\u79d8\u94a5 (secret key) \u6765\u914d\u7f6e AWS \u547d\u4ee4\u884c\u754c\u9762\u3002"),(0,a.kt)("li",{parentName:"ul"},"IAM \u7528\u6237\u9700\u8981\u5177\u5907",(0,a.kt)("a",{parentName:"li",href:"https://eksctl.io/usage/minimum-iam-policies/"},"eksctl \u6587\u6863"),"\u4e2d\u63cf\u8ff0\u7684\u6700\u4f4e IAM \u7b56\u7565\u3002"))),(0,a.kt)("h3",{id:"1-\u51c6\u5907\u4f60\u7684\u5de5\u4f5c\u7ad9"},"1. \u51c6\u5907\u4f60\u7684\u5de5\u4f5c\u7ad9"),(0,a.kt)("p",null,"\u5728\u5de5\u4f5c\u7ad9\u4e0a\u5b89\u88c5\u4ee5\u4e0b\u547d\u4ee4\u884c\u5de5\u5177\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"AWS CLI v2"),"\uff1a\u5982\u9700\u83b7\u53d6\u5e2e\u52a9\uff0c\u8bf7\u53c2\u89c1",(0,a.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html"},"\u5b89\u88c5\u6b65\u9aa4"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"eksctl"),"\uff1a\u5982\u9700\u83b7\u53d6\u5e2e\u52a9\uff0c\u8bf7\u53c2\u89c1",(0,a.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/eks/latest/userguide/eksctl.html"},"\u5b89\u88c5\u6b65\u9aa4"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"kubectl"),"\uff1a\u5982\u9700\u83b7\u5f97\u5e2e\u52a9\uff0c\u8bf7\u53c2\u89c1",(0,a.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/eks/latest/userguide/install-kubectl.html"},"\u5b89\u88c5\u6b65\u9aa4"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"helm"),"\uff1a\u5982\u9700\u83b7\u53d6\u5e2e\u52a9\uff0c\u8bf7\u53c2\u89c1",(0,a.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/"},"\u5b89\u88c5\u6b65\u9aa4"),"\u3002")),(0,a.kt)("h3",{id:"2-\u914d\u7f6e-aws-cli"},"2. \u914d\u7f6e AWS CLI"),(0,a.kt)("p",null,"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u914d\u7f6e AWS CLI\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"aws configure\n")),(0,a.kt)("p",null,"\u8f93\u5165\u4ee5\u4e0b\u53c2\u6570\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"AWS Access Key ID"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5177\u6709 EKS \u6743\u9650\u7684 IAM \u7528\u6237\u7684\u8bbf\u95ee\u5bc6\u94a5\u51ed\u8bc1\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"AWS Secret Access Key"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5177\u6709 EKS \u6743\u9650\u7684 IAM \u7528\u6237\u7684\u5bc6\u6587\u5bc6\u94a5\u51ed\u8bc1\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Default region name"),(0,a.kt)("td",{parentName:"tr",align:null},"\u96c6\u7fa4\u8282\u70b9\u6240\u5728\u7684 ",(0,a.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html#Concepts.RegionsAndAvailabilityZones.Regions"},"AWS \u533a\u57df"),"\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Default output format"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8f93\u5165 ",(0,a.kt)("inlineCode",{parentName:"td"},"json"),"\u3002")))),(0,a.kt)("h3",{id:"3-\u521b\u5efa-eks-\u96c6\u7fa4"},"3. \u521b\u5efa EKS \u96c6\u7fa4"),(0,a.kt)("p",null,"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u521b\u5efa\u4e00\u4e2a EKS \u96c6\u7fa4\u3002\u4f7f\u7528\u9002\u7528\u4e8e\u4f60\u7684\u7528\u4f8b\u7684 AWS \u533a\u57df\u3002\u5728\u9009\u62e9 Kubernetes \u7248\u672c\u65f6\uff0c\u8bf7\u52a1\u5fc5\u5148\u67e5\u9605",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/support-matrix/"},"\u652f\u6301\u77e9\u9635"),"\uff0c\u4ee5\u627e\u51fa\u5df2\u9488\u5bf9\u4f60\u7684 Rancher \u7248\u672c\u9a8c\u8bc1\u7684\u6700\u65b0 Kubernetes \u7248\u672c\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u5982\u679c\u4f60\u8981\u4ece\u65e7\u7684 Kubernetes \u7248\u672c\u66f4\u65b0\u5230 Kubernetes v1.22 \u6216\u66f4\u9ad8\u7248\u672c\uff0c\u4f60\u8fd8\u9700\u8981",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/user-guide/k8s-122-migration/"},"\u66f4\u65b0")," ingress-nginx\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"eksctl create cluster \\\n  --name rancher-server \\\n  --version <VERSION> \\\n  --region us-west-2 \\\n  --nodegroup-name ranchernodes \\\n  --nodes 3 \\\n  --nodes-min 1 \\\n  --nodes-max 4 \\\n  --managed\n")),(0,a.kt)("p",null,"\u4f7f\u7528 CloudFormation \u8fdb\u884c\u7684\u96c6\u7fa4\u90e8\u7f72\u53ef\u80fd\u9700\u8981\u4e00\u4e9b\u65f6\u95f4\u624d\u80fd\u5b8c\u6210\u3002"),(0,a.kt)("h3",{id:"4-\u6d4b\u8bd5\u96c6\u7fa4"},"4. \u6d4b\u8bd5\u96c6\u7fa4"),(0,a.kt)("p",null,"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6d4b\u8bd5\u96c6\u7fa4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"eksctl get cluster\n")),(0,a.kt)("p",null,"\u8fd4\u56de\u7684\u7ed3\u679c\u5e94\u4e0e\u4ee5\u4e0b\u5185\u5bb9\u7c7b\u4f3c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"eksctl get cluster\n2021-03-18 15:09:35 [\u2139]  eksctl version 0.40.0\n2021-03-18 15:09:35 [\u2139]  using region us-west-2\nNAME        REGION      EKSCTL CREATED\nrancher-server-cluster      us-west-2   True\n")),(0,a.kt)("h3",{id:"5-\u5b89\u88c5-ingress"},"5. \u5b89\u88c5 Ingress"),(0,a.kt)("p",null,"\u96c6\u7fa4\u9700\u8981\u4e00\u4e2a Ingress\uff0c\u4ee5\u4ece\u96c6\u7fa4\u5916\u90e8\u8bbf\u95ee Rancher\u3002"),(0,a.kt)("p",null,"\u4e3a\u786e\u4fdd\u4f60\u9009\u62e9\u4e86\u6b63\u786e\u7684 Ingress-NGINX Helm Chart\uff0c\u9996\u5148\u5728 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/ingress-nginx#supported-versions-table"},"Kubernetes/ingress-nginx \u652f\u6301\u8868"),"\u4e2d\u627e\u5230\u4e0e\u4f60\u7684 Kubernetes \u7248\u672c\u517c\u5bb9\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Ingress-NGINX \u7248\u672c"),"\u3002"),(0,a.kt)("p",null,"\u7136\u540e\uff0c\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u5217\u51fa\u53ef\u7528\u7684 Helm Chart\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx\nhelm repo update\nhelm search repo ingress-nginx -l\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"helm search")," \u547d\u4ee4\u7684\u8f93\u51fa\u5305\u542b\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"APP VERSION")," \u5217\u3002\u6b64\u5217\u4e0b\u7684\u7248\u672c\u7b49\u540c\u4e8e\u4f60\u4e4b\u524d\u9009\u62e9\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Ingress-NGINX \u7248\u672c"),"\u3002\u4f7f\u7528\u5e94\u7528\u7a0b\u5e8f\u7248\u672c\uff0c\u9009\u62e9\u4e00\u4e2a Chart \u7248\u672c\uff0c\u8be5\u7248\u672c\u6253\u5305\u4e86\u4e0e\u4f60\u7684 Kubernetes \u517c\u5bb9\u7684\u5e94\u7528\u7a0b\u5e8f\u3002\u4f8b\u5982\uff0c\u5982\u679c\u4f7f\u7528\u7684\u662f Kubernetes v1.23\uff0c\u5219\u53ef\u4ee5\u9009\u62e9 v4.6.0 Helm Chart\uff0c\u56e0\u4e3a Ingress-NGINX v1.7.0 \u4e0e\u8be5 Chart \u6253\u5305\u5728\u4e00\u8d77\uff0c\u800c v1.7.0 \u4e0e Kubernetes v1.23 \u517c\u5bb9\u3002\u5982\u6709\u7591\u95ee\uff0c\u8bf7\u9009\u62e9\u6700\u65b0\u7684\u517c\u5bb9\u7248\u672c\u3002"),(0,a.kt)("p",null,"\u4e86\u89e3\u4f60\u9700\u8981\u7684 Helm chart ",(0,a.kt)("inlineCode",{parentName:"p"},"\u7248\u672c"),"\u540e\uff0c\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u3002\u5b83\u5b89\u88c5\u4e00\u4e2a\u5e26\u6709 Kubernetes \u8d1f\u8f7d\u5747\u8861\u5668\u670d\u52a1\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"nginx-ingress-controller"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"helm upgrade --install \\\n  ingress-nginx ingress-nginx/ingress-nginx \\\n  --namespace ingress-nginx \\\n  --set controller.service.type=LoadBalancer \\\n  --version 4.6.0 \\\n  --create-namespace\n")),(0,a.kt)("h3",{id:"6-\u83b7\u53d6\u8d1f\u8f7d\u5747\u8861\u5668\u7684-ip"},"6. \u83b7\u53d6\u8d1f\u8f7d\u5747\u8861\u5668\u7684 IP"),(0,a.kt)("p",null,"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u83b7\u53d6\u8d1f\u8f7d\u5747\u8861\u5668\u7684 IP \u5730\u5740\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl get service ingress-nginx-controller --namespace=ingress-nginx\n")),(0,a.kt)("p",null,"\u8fd4\u56de\u7684\u7ed3\u679c\u5e94\u4e0e\u4ee5\u4e0b\u5185\u5bb9\u7c7b\u4f3c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"NAME                       TYPE           CLUSTER-IP     EXTERNAL-IP                                                              PORT(S)\n AGE\ningress-nginx-controller   LoadBalancer   10.100.90.18   a904a952c73bf4f668a17c46ac7c56ab-962521486.us-west-2.elb.amazonaws.com   80:31229/TCP,443:31050/TCP\n 27m\n")),(0,a.kt)("p",null,"\u4fdd\u5b58 ",(0,a.kt)("inlineCode",{parentName:"p"},"EXTERNAL-IP"),"\u3002"),(0,a.kt)("h3",{id:"7-\u8bbe\u7f6e-dns"},"7. \u8bbe\u7f6e DNS"),(0,a.kt)("p",null,"\u5230 Rancher Server \u7684\u5916\u90e8\u6d41\u91cf\u9700\u8981\u91cd\u5b9a\u5411\u5230\u4f60\u521b\u5efa\u7684\u8d1f\u8f7d\u5747\u8861\u5668\u3002"),(0,a.kt)("p",null,"\u521b\u5efa\u6307\u5411\u4f60\u4fdd\u5b58\u7684\u5916\u90e8 IP \u5730\u5740\u7684 DNS\u3002\u8fd9\u4e2a DNS \u4f1a\u7528\u4f5c Rancher Server \u7684 URL\u3002"),(0,a.kt)("p",null,"\u8bbe\u7f6e DNS \u7684\u6709\u6548\u65b9\u6cd5\u6709\u5f88\u591a\u3002\u5982\u9700\u83b7\u5f97\u5e2e\u52a9\uff0c\u8bf7\u53c2\u89c1 AWS \u6587\u6863\u4e2d\u5fc3\u7684",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-to-elb-load-balancer.html"},"\u8f6c\u53d1\u6d41\u91cf\u5230 ELB \u8d1f\u8f7d\u5747\u8861\u5668"),"\u3002"),(0,a.kt)("h3",{id:"8-\u5b89\u88c5-rancher-helm-chart"},"8. \u5b89\u88c5 Rancher Helm Chart"),(0,a.kt)("p",null,"\u6309\u7167",(0,a.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster#%E5%AE%89%E8%A3%85-rancher-helm-chart"},"\u672c\u9875"),"\u7684\u8bf4\u660e\u5b89\u88c5 Rancher Helm Chart\u3002\u4efb\u4f55 Kubernetes \u53d1\u884c\u7248\u4e0a\u5b89\u88c5\u7684 Rancher \u7684 Helm \u8bf4\u660e\u90fd\u662f\u4e00\u6837\u7684\u3002"),(0,a.kt)("p",null,"\u5b89\u88c5 Rancher \u65f6\uff0c\u4f7f\u7528\u4e0a\u4e00\u6b65\u83b7\u53d6\u7684 DNS \u540d\u79f0\u4f5c\u4e3a Rancher Server \u7684 URL\u3002\u5b83\u53ef\u4ee5\u4f5c\u4e3a Helm \u9009\u9879\u4f20\u9012\u8fdb\u6765\u3002\u4f8b\u5982\uff0c\u5982\u679c DNS \u540d\u79f0\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher.my.org"),"\uff0c\u4f60\u9700\u8981\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"--set hostname=rancher.my.org")," \u9009\u9879\u6765\u8fd0\u884c Helm \u5b89\u88c5\u547d\u4ee4\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"v2.6.7 \u65b0\u529f\u80fd"))),(0,a.kt)("p",null,"\u5728\u6b64\u8bbe\u7f6e\u4e4b\u4e0a\u5b89\u88c5 Rancher \u65f6\uff0c\u4f60\u8fd8\u9700\u8981\u5c06\u4ee5\u4e0b\u503c\u4f20\u9012\u5230 Rancher Helm \u5b89\u88c5\u547d\u4ee4\uff0c\u4ee5\u8bbe\u7f6e\u4e0e Rancher \u7684 Ingress \u8d44\u6e90\u4e00\u8d77\u4f7f\u7528\u7684 Ingress Controller \u7684\u540d\u79f0\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"--set ingress.ingressClassName=nginx\n")),(0,a.kt)("p",null,"\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster#5-%E6%A0%B9%E6%8D%AE%E4%BD%A0%E9%80%89%E6%8B%A9%E7%9A%84%E8%AF%81%E4%B9%A6%E9%80%89%E9%A1%B9%EF%BC%8C%E9%80%9A%E8%BF%87-helm-%E5%AE%89%E8%A3%85-rancher"},"Helm \u5b89\u88c5\u547d\u4ee4"),"\u4e86\u89e3\u4f60\u7684\u8bc1\u4e66\u9009\u9879\u3002"))}c.isMDXComponent=!0}}]);