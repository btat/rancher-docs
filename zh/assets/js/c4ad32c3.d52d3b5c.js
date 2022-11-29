"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[4472],{3905:function(e,r,t){t.d(r,{Zo:function(){return o},kt:function(){return h}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},o=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),p=u(t),h=a,v=p["".concat(s,".").concat(h)]||p[h]||d[h]||i;return t?n.createElement(v,c(c({ref:r},o),{},{components:t})):n.createElement(v,c({ref:r},o))}));function h(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,c=new Array(i);c[0]=p;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var u=2;u<i;u++)c[u]=t[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},56659:function(e,r,t){t.r(r),t.d(r,{assets:function(){return o},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var n=t(87462),a=t(63366),i=(t(67294),t(3905)),c=["components"],l={title:"Rancher \u7ba1\u7406 vSphere \u96c6\u7fa4\u7684\u6700\u4f73\u5b9e\u8df5"},s=void 0,u={unversionedId:"reference-guides/best-practices/rancher-managed-clusters/rancher-managed-clusters-in-vsphere",id:"version-2.6/reference-guides/best-practices/rancher-managed-clusters/rancher-managed-clusters-in-vsphere",title:"Rancher \u7ba1\u7406 vSphere \u96c6\u7fa4\u7684\u6700\u4f73\u5b9e\u8df5",description:"\u672c\u6307\u5357\u6982\u8ff0\u4e86\u5728 vSphere \u73af\u5883\u4e2d\u914d\u7f6e\u4e0b\u6e38 Rancher \u96c6\u7fa4\u7684\u53c2\u8003\u67b6\u6784\uff0c\u4ee5\u53ca VMware \u8bb0\u5f55\u7684\u6807\u51c6 vSphere \u6700\u4f73\u5b9e\u8df5\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/reference-guides/best-practices/rancher-managed-clusters/rancher-managed-clusters-in-vsphere.md",sourceDirName:"reference-guides/best-practices/rancher-managed-clusters",slug:"/reference-guides/best-practices/rancher-managed-clusters/rancher-managed-clusters-in-vsphere",permalink:"/zh/v2.6/reference-guides/best-practices/rancher-managed-clusters/rancher-managed-clusters-in-vsphere",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/reference-guides/best-practices/rancher-managed-clusters/rancher-managed-clusters-in-vsphere.md",tags:[],version:"2.6",lastUpdatedAt:1669187684,formattedLastUpdatedAt:"2022/11/23",frontMatter:{title:"Rancher \u7ba1\u7406 vSphere \u96c6\u7fa4\u7684\u6700\u4f73\u5b9e\u8df5"},sidebar:"tutorialSidebar",previous:{title:"\u8bbe\u7f6e\u5bb9\u5668\u7684\u6280\u5de7",permalink:"/zh/v2.6/reference-guides/best-practices/rancher-managed-clusters/tips-to-set-up-containers"},next:{title:"\u67b6\u6784",permalink:"/zh/v2.6/pages-for-subheaders/rancher-manager-architecture"}},o={},d=[{value:"1. \u865a\u62df\u673a\u6ce8\u610f\u4e8b\u9879",id:"1-\u865a\u62df\u673a\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u5229\u7528\u865a\u62df\u673a\u6a21\u677f\u6765\u6784\u5efa\u73af\u5883",id:"\u5229\u7528\u865a\u62df\u673a\u6a21\u677f\u6765\u6784\u5efa\u73af\u5883",level:3},{value:"\u5229\u7528 DRS \u53cd\u4eb2\u548c\u89c4\u5219\uff08\u53ef\u80fd\u7684\u8bdd\uff09\u5728 ESXi \u4e3b\u673a\u4e0a\u5206\u79bb\u4e0b\u6e38\u96c6\u7fa4\u8282\u70b9",id:"\u5229\u7528-drs-\u53cd\u4eb2\u548c\u89c4\u5219\u53ef\u80fd\u7684\u8bdd\u5728-esxi-\u4e3b\u673a\u4e0a\u5206\u79bb\u4e0b\u6e38\u96c6\u7fa4\u8282\u70b9",level:3},{value:"\u5229\u7528 DRS \u53cd\u4eb2\u548c\u89c4\u5219\uff08\u53ef\u80fd\u7684\u8bdd\uff09\u5728 Datastore \u4e0a\u5206\u79bb\u4e0b\u6e38\u96c6\u7fa4\u8282\u70b9",id:"\u5229\u7528-drs-\u53cd\u4eb2\u548c\u89c4\u5219\u53ef\u80fd\u7684\u8bdd\u5728-datastore-\u4e0a\u5206\u79bb\u4e0b\u6e38\u96c6\u7fa4\u8282\u70b9",level:3},{value:"\u4e3a Kubernetes \u914d\u7f6e\u5408\u9002\u7684\u865a\u62df\u673a",id:"\u4e3a-kubernetes-\u914d\u7f6e\u5408\u9002\u7684\u865a\u62df\u673a",level:3},{value:"2. \u7f51\u7edc\u6ce8\u610f\u4e8b\u9879",id:"2-\u7f51\u7edc\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u5229\u7528 ETCD \u8282\u70b9\u4e4b\u95f4\u7684\u4f4e\u5ef6\u8fdf\u548c\u9ad8\u5e26\u5bbd\u8fde\u63a5",id:"\u5229\u7528-etcd-\u8282\u70b9\u4e4b\u95f4\u7684\u4f4e\u5ef6\u8fdf\u548c\u9ad8\u5e26\u5bbd\u8fde\u63a5",level:3},{value:"\u4e3a\u865a\u62df\u673a\u63d0\u4f9b\u56fa\u5b9a\u7684 IP \u5730\u5740",id:"\u4e3a\u865a\u62df\u673a\u63d0\u4f9b\u56fa\u5b9a\u7684-ip-\u5730\u5740",level:3},{value:"3. \u5b58\u50a8\u6ce8\u610f\u4e8b\u9879",id:"3-\u5b58\u50a8\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u5728 ETCD \u8282\u70b9\u4e0a\u4f7f\u7528 SSD \u78c1\u76d8",id:"\u5728-etcd-\u8282\u70b9\u4e0a\u4f7f\u7528-ssd-\u78c1\u76d8",level:3},{value:"4. \u5907\u4efd\u548c\u707e\u96be\u6062\u590d",id:"4-\u5907\u4efd\u548c\u707e\u96be\u6062\u590d",level:2},{value:"\u5b9a\u671f\u5907\u4efd\u4e0b\u6e38\u96c6\u7fa4",id:"\u5b9a\u671f\u5907\u4efd\u4e0b\u6e38\u96c6\u7fa4",level:3},{value:"\u5907\u4efd\u4e0b\u6e38\u8282\u70b9\u865a\u62df\u673a",id:"\u5907\u4efd\u4e0b\u6e38\u8282\u70b9\u865a\u62df\u673a",level:3}],p={toc:d};function h(e){var r=e.components,l=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},p,l,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u672c\u6307\u5357\u6982\u8ff0\u4e86\u5728 vSphere \u73af\u5883\u4e2d\u914d\u7f6e\u4e0b\u6e38 Rancher \u96c6\u7fa4\u7684\u53c2\u8003\u67b6\u6784\uff0c\u4ee5\u53ca VMware \u8bb0\u5f55\u7684\u6807\u51c6 vSphere \u6700\u4f73\u5b9e\u8df5\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#1-%E8%99%9A%E6%8B%9F%E6%9C%BA%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9"},"1. \u865a\u62df\u673a\u6ce8\u610f\u4e8b\u9879")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#2-%E7%BD%91%E7%BB%9C%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9"},"2. \u7f51\u7edc\u6ce8\u610f\u4e8b\u9879")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#3-%E5%AD%98%E5%82%A8%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9"},"3. \u5b58\u50a8\u6ce8\u610f\u4e8b\u9879")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#4-%E5%A4%87%E4%BB%BD%E5%92%8C%E7%81%BE%E9%9A%BE%E6%81%A2%E5%A4%8D"},"4. \u5907\u4efd\u548c\u707e\u96be\u6062\u590d"))),(0,i.kt)("figcaption",null,"\u89e3\u51b3\u65b9\u6848\u6982\u8ff0"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u89e3\u51b3\u65b9\u6848\u6982\u8ff0",src:t(16181).Z,width:"576",height:"362"})),(0,i.kt)("h2",{id:"1-\u865a\u62df\u673a\u6ce8\u610f\u4e8b\u9879"},"1. \u865a\u62df\u673a\u6ce8\u610f\u4e8b\u9879"),(0,i.kt)("h3",{id:"\u5229\u7528\u865a\u62df\u673a\u6a21\u677f\u6765\u6784\u5efa\u73af\u5883"},"\u5229\u7528\u865a\u62df\u673a\u6a21\u677f\u6765\u6784\u5efa\u73af\u5883"),(0,i.kt)("p",null,"\u4e3a\u4e86\u4fdd\u8bc1\u8de8\u73af\u5883\u90e8\u7f72\u7684\u865a\u62df\u673a\u7684\u4e00\u81f4\u6027\uff0c\u4f60\u53ef\u4ee5\u8003\u8651\u4f7f\u7528\u865a\u62df\u673a\u6a21\u677f\u5f62\u5f0f\u7684\u9ec4\u91d1\u955c\u50cf\uff08golden image\uff09\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528 Packer \u6765\u5b9e\u73b0\uff0c\u4ece\u800c\u589e\u52a0\u66f4\u591a\u81ea\u5b9a\u4e49\u9009\u9879\u3002"),(0,i.kt)("h3",{id:"\u5229\u7528-drs-\u53cd\u4eb2\u548c\u89c4\u5219\u53ef\u80fd\u7684\u8bdd\u5728-esxi-\u4e3b\u673a\u4e0a\u5206\u79bb\u4e0b\u6e38\u96c6\u7fa4\u8282\u70b9"},"\u5229\u7528 DRS \u53cd\u4eb2\u548c\u89c4\u5219\uff08\u53ef\u80fd\u7684\u8bdd\uff09\u5728 ESXi \u4e3b\u673a\u4e0a\u5206\u79bb\u4e0b\u6e38\u96c6\u7fa4\u8282\u70b9"),(0,i.kt)("p",null,"\u8fd9\u6837\u53ef\u4ee5\u786e\u4fdd\u8282\u70b9\u865a\u62df\u673a\u5206\u5e03\u5728\u591a\u53f0 ESXi \u4e3b\u673a\u4e0a\uff0c\u4ece\u800c\u9632\u6b62\u4e3b\u673a\u7ea7\u522b\u7684\u5355\u70b9\u6545\u969c\u3002"),(0,i.kt)("h3",{id:"\u5229\u7528-drs-\u53cd\u4eb2\u548c\u89c4\u5219\u53ef\u80fd\u7684\u8bdd\u5728-datastore-\u4e0a\u5206\u79bb\u4e0b\u6e38\u96c6\u7fa4\u8282\u70b9"},"\u5229\u7528 DRS \u53cd\u4eb2\u548c\u89c4\u5219\uff08\u53ef\u80fd\u7684\u8bdd\uff09\u5728 Datastore \u4e0a\u5206\u79bb\u4e0b\u6e38\u96c6\u7fa4\u8282\u70b9"),(0,i.kt)("p",null,"\u8fd9\u6837\u53ef\u4ee5\u786e\u4fdd\u8282\u70b9\u865a\u62df\u673a\u5206\u5e03\u5728\u591a\u4e2a Datastore \u4e0a\uff0c\u4ece\u800c\u9632\u6b62 Datastore \u7ea7\u522b\u7684\u5355\u70b9\u6545\u969c\u3002"),(0,i.kt)("h3",{id:"\u4e3a-kubernetes-\u914d\u7f6e\u5408\u9002\u7684\u865a\u62df\u673a"},"\u4e3a Kubernetes \u914d\u7f6e\u5408\u9002\u7684\u865a\u62df\u673a"),(0,i.kt)("p",null,"\u5728\u90e8\u7f72\u8282\u70b9\u65f6\uff0c\u8bf7\u9075\u5faa K8s \u548c etcd \u7684\u6700\u4f73\u5b9e\u8df5\uff0c\u5176\u4e2d\u5305\u62ec\u7981\u7528 swap\uff0c\u68c0\u67e5\u96c6\u7fa4\u4e2d\u7684\u6240\u6709\u4e3b\u673a\u4e4b\u95f4\u662f\u5426\u6709\u826f\u597d\u7684\u7f51\u7edc\u8fde\u63a5\uff0c\u4e3a\u6bcf\u4e2a\u8282\u70b9\u4f7f\u7528\u552f\u4e00\u7684\u4e3b\u673a\u540d\u3001MAC \u5730\u5740\u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"product_uuids"),"\u3002"),(0,i.kt)("h2",{id:"2-\u7f51\u7edc\u6ce8\u610f\u4e8b\u9879"},"2. \u7f51\u7edc\u6ce8\u610f\u4e8b\u9879"),(0,i.kt)("h3",{id:"\u5229\u7528-etcd-\u8282\u70b9\u4e4b\u95f4\u7684\u4f4e\u5ef6\u8fdf\u548c\u9ad8\u5e26\u5bbd\u8fde\u63a5"},"\u5229\u7528 ETCD \u8282\u70b9\u4e4b\u95f4\u7684\u4f4e\u5ef6\u8fdf\u548c\u9ad8\u5e26\u5bbd\u8fde\u63a5"),(0,i.kt)("p",null,"\u5c3d\u53ef\u80fd\u5728\u5355\u4e2a\u6570\u636e\u4e2d\u5fc3\u5185\u90e8\u7f72 etcd \u6210\u5458\uff0c\u6765\u907f\u514d\u5ef6\u8fdf\u5f00\u9500\u5e76\u51cf\u5c11\u7f51\u7edc\u5206\u533a\u7684\u53ef\u80fd\u6027\u3002\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c1Gb \u7684\u8fde\u63a5\u5c31\u8db3\u591f\u4e86\u3002\u5bf9\u4e8e\u5927\u578b\u96c6\u7fa4\uff0c10Gb \u7684\u8fde\u63a5\u53ef\u4ee5\u7f29\u77ed\u6062\u590d\u5907\u4efd\u6240\u9700\u7684\u65f6\u95f4\u3002"),(0,i.kt)("h3",{id:"\u4e3a\u865a\u62df\u673a\u63d0\u4f9b\u56fa\u5b9a\u7684-ip-\u5730\u5740"},"\u4e3a\u865a\u62df\u673a\u63d0\u4f9b\u56fa\u5b9a\u7684 IP \u5730\u5740"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u4e3a\u4f7f\u7528\u7684\u6240\u6709\u8282\u70b9\u90fd\u914d\u7f6e\u4e00\u4e2a\u9759\u6001 IP\u3002\u5982\u679c\u4f7f\u7528 DHCP\uff0c\u5219\u6bcf\u4e2a\u8282\u70b9\u90fd\u5e94\u8be5\u6709\u4e00\u4e2a DHCP \u9884\u7559\uff0c\u4ee5\u786e\u4fdd\u8282\u70b9\u5206\u914d\u5230\u76f8\u540c\u7684 IP \u5730\u5740\u3002"),(0,i.kt)("h2",{id:"3-\u5b58\u50a8\u6ce8\u610f\u4e8b\u9879"},"3. \u5b58\u50a8\u6ce8\u610f\u4e8b\u9879"),(0,i.kt)("h3",{id:"\u5728-etcd-\u8282\u70b9\u4e0a\u4f7f\u7528-ssd-\u78c1\u76d8"},"\u5728 ETCD \u8282\u70b9\u4e0a\u4f7f\u7528 SSD \u78c1\u76d8"),(0,i.kt)("p",null,"ETCD \u5bf9\u5199\u5165\u5ef6\u8fdf\u975e\u5e38\u654f\u611f\u3002\u56e0\u6b64\uff0c\u4f60\u53ef\u4ee5\u5c3d\u91cf\u4f7f\u7528 SSD \u78c1\u76d8\u6765\u63d0\u9ad8\u5199\u5165\u6027\u80fd\u3002"),(0,i.kt)("h2",{id:"4-\u5907\u4efd\u548c\u707e\u96be\u6062\u590d"},"4. \u5907\u4efd\u548c\u707e\u96be\u6062\u590d"),(0,i.kt)("h3",{id:"\u5b9a\u671f\u5907\u4efd\u4e0b\u6e38\u96c6\u7fa4"},"\u5b9a\u671f\u5907\u4efd\u4e0b\u6e38\u96c6\u7fa4"),(0,i.kt)("p",null,"Kubernetes \u4f7f\u7528 etcd \u6765\u5b58\u50a8\u5176\u6240\u6709\u6570\u636e\uff0c\u5305\u62ec\u914d\u7f6e\u3001\u72b6\u6001\u548c\u5143\u6570\u636e\u3002\u5728\u707e\u96be\u6062\u590d\u7684\u60c5\u51b5\u4e0b\uff0c\u5907\u4efd\u8fd9\u4e9b\u6570\u636e\u662f\u81f3\u5173\u91cd\u8981\u7684\u3002"),(0,i.kt)("h3",{id:"\u5907\u4efd\u4e0b\u6e38\u8282\u70b9\u865a\u62df\u673a"},"\u5907\u4efd\u4e0b\u6e38\u8282\u70b9\u865a\u62df\u673a"),(0,i.kt)("p",null,"\u5c06 Rancher \u4e0b\u6e38\u8282\u70b9\u7684\u865a\u62df\u673a\u7eb3\u5165\u6807\u51c6\u7684\u865a\u62df\u673a\u5907\u4efd\u7b56\u7565\u4e2d\u3002"))}h.isMDXComponent=!0},16181:function(e,r,t){r.Z=t.p+"assets/images/solution_overview.drawio-5d3e9895c0317dc2fb485bb57ddd6cbc.svg"}}]);