"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[46111],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,g=s["".concat(u,".").concat(d)]||s[d]||c[d]||l;return n?r.createElement(g,o(o({ref:t},m),{},{components:n})):r.createElement(g,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(87462),a=n(67294),l=n(86010),o=n(72389),i=n(67392),u=n(7094),p=n(12466);const m="tabList__CuJ",c="tabItem_LNqP";function s(e){const{lazy:t,block:n,defaultValue:o,values:s,groupId:d,className:g}=e,k=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=s??k.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),f=(0,i.l)(h,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===o?o:o??k.find((e=>e.props.default))?.props.value??k[0].props.value;if(null!==b&&!h.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:N}=(0,u.U)(),[y,w]=(0,a.useState)(b),E=[],{blockElementScrollPositionUntilNextRender:O}=(0,p.o5)();if(null!=d){const e=v[d];null!=e&&e!==y&&h.some((t=>t.value===e))&&w(e)}const T=e=>{const t=e.currentTarget,n=E.indexOf(t),r=h[n].value;r!==y&&(O(t),w(r),null!=d&&N(d,String(r)))},A=e=>{let t=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const n=E.indexOf(e.currentTarget)+1;t=E[n]??E[0];break}case"ArrowLeft":{const n=E.indexOf(e.currentTarget)-1;t=E[n]??E[E.length-1];break}}t?.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",m)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},g)},h.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>E.push(e),onKeyDown:A,onClick:T},o,{className:(0,l.Z)("tabs__item",c,o?.className,{"tabs__item--active":y===t})}),n??t)}))),t?(0,a.cloneElement)(k.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function d(e){const t=(0,o.Z)();return a.createElement(s,(0,r.Z)({key:String(t)},e))}},77215:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=n(87462),a=(n(67294),n(3905)),l=n(65488),o=n(85162);const i={title:"\u8def\u7531\u914d\u7f6e"},u=void 0,p={unversionedId:"reference-guides/monitoring-v2-configuration/routes",id:"reference-guides/monitoring-v2-configuration/routes",title:"\u8def\u7531\u914d\u7f6e",description:"\u8def\u7531\uff08Route\uff09\u914d\u7f6e\u662f Alertmanager \u81ea\u5b9a\u4e49\u8d44\u6e90\u7684\u4e00\u90e8\u5206\uff0c\u7528\u4e8e\u63a7\u5236 Prometheus \u89e6\u53d1\u7684\u544a\u8b66\u5728\u5230\u8fbe\u63a5\u6536\u5668\u4e4b\u524d\u7684\u5206\u7ec4\u548c\u8fc7\u6ee4\u65b9\u5f0f\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/reference-guides/monitoring-v2-configuration/routes.md",sourceDirName:"reference-guides/monitoring-v2-configuration",slug:"/reference-guides/monitoring-v2-configuration/routes",permalink:"/zh/reference-guides/monitoring-v2-configuration/routes",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/monitoring-v2-configuration/routes.md",tags:[],version:"current",lastUpdatedAt:1666730466,formattedLastUpdatedAt:"2022\u5e7410\u670825\u65e5",frontMatter:{title:"\u8def\u7531\u914d\u7f6e"},sidebar:"tutorialSidebar",previous:{title:"\u63a5\u6536\u5668\u914d\u7f6e",permalink:"/zh/reference-guides/monitoring-v2-configuration/receivers"},next:{title:"ServiceMonitor \u548c PodMonitor \u914d\u7f6e",permalink:"/zh/reference-guides/monitoring-v2-configuration/servicemonitors-and-podmonitors"}},m={},c=[{value:"\u8def\u7531\u9650\u5236",id:"\u8def\u7531\u9650\u5236",level:2},{value:"\u8def\u7531\u914d\u7f6e",id:"\u8def\u7531\u914d\u7f6e",level:2},{value:"\u6807\u7b7e\u548c\u6ce8\u91ca\u7684\u6ce8\u610f\u4e8b\u9879",id:"\u6807\u7b7e\u548c\u6ce8\u91ca\u7684\u6ce8\u610f\u4e8b\u9879",level:3},{value:"\u63a5\u6536\u5668",id:"\u63a5\u6536\u5668",level:3},{value:"\u5206\u7ec4",id:"\u5206\u7ec4",level:3},{value:"\u5339\u914d",id:"\u5339\u914d",level:3}],s={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u8def\u7531\uff08Route\uff09\u914d\u7f6e\u662f Alertmanager \u81ea\u5b9a\u4e49\u8d44\u6e90\u7684\u4e00\u90e8\u5206\uff0c\u7528\u4e8e\u63a7\u5236 Prometheus \u89e6\u53d1\u7684\u544a\u8b66\u5728\u5230\u8fbe\u63a5\u6536\u5668\u4e4b\u524d\u7684\u5206\u7ec4\u548c\u8fc7\u6ee4\u65b9\u5f0f\u3002"),(0,a.kt)("p",null,"\u5f53\u8def\u7531\u66f4\u6539\u65f6\uff0cPrometheus Operator \u4f1a\u91cd\u65b0\u751f\u6210 Alertmanager \u81ea\u5b9a\u4e49\u8d44\u6e90\u4ee5\u53cd\u6620\u66f4\u6539\u3002"),(0,a.kt)("p",null,"\u6709\u5173\u914d\u7f6e\u8def\u7531\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"https://www.prometheus.io/docs/alerting/latest/configuration/#route"},"\u5b98\u65b9 Alertmanager \u6587\u6863"),"\u3002"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u672c\u8282\u53c2\u8003\u5047\u8bbe\u4f60\u5df2\u7ecf\u719f\u6089 Monitoring \u7ec4\u4ef6\u7684\u534f\u540c\u5de5\u4f5c\u65b9\u5f0f\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"/zh/integrations-in-rancher/monitoring-and-alerting/how-monitoring-works"},"\u672c\u8282"),"\u3002")),(0,a.kt)("h2",{id:"\u8def\u7531\u9650\u5236"},"\u8def\u7531\u9650\u5236"),(0,a.kt)("p",null,"Alertmanager \u6839\u636e\u63a5\u6536\u5668\u548c\u8def\u7531\u6811\u6765\u4ee3\u7406 Prometheus \u7684\u544a\u8b66\uff0c\u8be5\u8def\u7531\u6811\u6839\u636e\u6807\u7b7e\u5c06\u544a\u8b66\u8fc7\u6ee4\u5230\u6307\u5b9a\u63a5\u6536\u5668\u3002"),(0,a.kt)("p",null,"Alerting Drivers \u4e3a Alertmanager \u5c06\u544a\u8b66\u4ee3\u7406\u5230\u975e\u539f\u751f\u63a5\u6536\u5668\uff0c\u4f8b\u5982 Microsoft Teams \u548c SMS\u3002"),(0,a.kt)("p",null,"\u5728\u914d\u7f6e\u8def\u7531\u548c\u63a5\u6536\u5668\u7684 Rancher UI \u4e2d\uff0c\u4f60\u53ef\u4ee5\u914d\u7f6e\u6709\u4e00\u4e2a\u6839\u7684\u8def\u7531\u6811\uff0c\u7136\u540e\u518d\u914d\u7f6e\u4e00\u4e2a\u6df1\u5ea6\uff0c\u8fd9\u6837\u7684\u6811\u5c31\u6709\u4e24\u4e2a\u6df1\u5ea6\u3002\u4f46\u662f\u5982\u679c\u5728\u76f4\u63a5\u914d\u7f6e Alertmanager \u65f6\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"continue")," \u8def\u7531\uff0c\u4f60\u53ef\u4ee5\u8ba9\u6811\u66f4\u6df1\u3002"),(0,a.kt)("p",null,"\u6bcf\u4e2a\u63a5\u6536\u5668\u7528\u4e8e\u4e00\u4e2a\u6216\u591a\u4e2a\u901a\u77e5\u63d0\u4f9b\u5546\u3002\u56e0\u6b64\uff0c\u5982\u679c\u4f60\u9700\u8981\u5c06\u53d1\u9001\u5230 Slack \u7684\u6bcf\u4e2a\u544a\u8b66\u4e5f\u53d1\u9001\u5230 PagerDuty\uff0c\u4f60\u53ef\u4ee5\u5728\u540c\u4e00\u4e2a\u63a5\u6536\u5668\u4e2d\u914d\u7f6e\u4e24\u8005\u3002"),(0,a.kt)("h2",{id:"\u8def\u7531\u914d\u7f6e"},"\u8def\u7531\u914d\u7f6e"),(0,a.kt)("h3",{id:"\u6807\u7b7e\u548c\u6ce8\u91ca\u7684\u6ce8\u610f\u4e8b\u9879"},"\u6807\u7b7e\u548c\u6ce8\u91ca\u7684\u6ce8\u610f\u4e8b\u9879"),(0,a.kt)("p",null,"\u6807\u7b7e\u7528\u4e8e\u8bc6\u522b\u53ef\u80fd\u5f71\u54cd\u901a\u77e5\u8def\u7531\u7684\u4fe1\u606f\u3002\u544a\u8b66\u7684\u6807\u8bc6\u4fe1\u606f\u53ef\u80fd\u5305\u62ec\u5bb9\u5668\u540d\u79f0\uff0c\u6216\u5e94\u63a5\u6536\u901a\u77e5\u7684\u56e2\u961f\u7684\u540d\u79f0\u3002"),(0,a.kt)("p",null,"\u6ce8\u91ca\u7528\u4e8e\u6807\u8bc6\u4e0d\u5f71\u54cd\u544a\u8b66\u63a5\u6536\u8005\u7684\u4fe1\u606f\uff0c\u4f8b\u5982 Runbook URL \u6216\u9519\u8bef\u6d88\u606f\u3002"),(0,a.kt)("h3",{id:"\u63a5\u6536\u5668"},"\u63a5\u6536\u5668"),(0,a.kt)("p",null,"\u8def\u7531\u9700\u8981\u5f15\u7528\u4e00\u4e2a\u5df2\u7ecf\u914d\u7f6e\u597d\u7684",(0,a.kt)("a",{parentName:"p",href:"#%E6%8E%A5%E6%94%B6%E5%99%A8%E9%85%8D%E7%BD%AE"},"\u63a5\u6536\u5668"),"\u3002"),(0,a.kt)("h3",{id:"\u5206\u7ec4"},"\u5206\u7ec4"),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Rancher v2.6.5+",mdxType:"TabItem"},(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u4ece Rancher 2.6.5 \u5f00\u59cb\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"\u5206\u7ec4\u4f9d\u636e"),"\u5f00\u59cb\u63a5\u53d7\u5b57\u7b26\u4e32\u5217\u8868\u800c\u4e0d\u662f\u952e\u503c\u5bf9\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/api.md#route"},"\u4e0a\u6e38\u6587\u6863"),"\u3002")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,a.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u5206\u7ec4\u4f9d\u636e"),(0,a.kt)("td",{parentName:"tr",align:null},"N/A"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u5206\u7ec4\u7684\u6807\u7b7e\u5217\u8868\u3002\u6807\u7b7e\u4e0d\u5f97\u91cd\u590d\uff08\u5728\u5217\u8868\u5185\uff09\u3002\u5982\u679c\u63d0\u4f9b\u4e86\u7279\u6b8a\u6807\u7b7e\u201c...\u201d\uff08\u7531\u6240\u6709\u53ef\u80fd\u7684\u6807\u7b7e\u805a\u5408\uff09\uff0c\u6807\u7b7e\u5fc5\u987b\u5728\u5217\u8868\u4e2d\u662f\u552f\u4e00\u7684\u5143\u7d20\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u7ec4\u7b49\u5f85\u65f6\u957f"),(0,a.kt)("td",{parentName:"tr",align:null},"30s"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5728\u53d1\u9001\u4e4b\u524d\uff0c\u7f13\u51b2\u540c\u4e00\u7ec4\u544a\u8b66\u7684\u7b49\u5f85\u65f6\u95f4\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u7ec4\u95f4\u9694"),(0,a.kt)("td",{parentName:"tr",align:null},"5m"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7b49\u5f85\u591a\u957f\u65f6\u95f4\u624d\u53d1\u9001\u5df2\u6dfb\u52a0\u5230\u544a\u8b66\u7ec4\u7684\u544a\u8b66\uff0c\u5176\u4e2d\u8be5\u544a\u8b66\u7ec4\u7684\u521d\u6b21\u901a\u77e5\u5df2\u88ab\u53d1\u9001\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u91cd\u590d\u95f4\u9694"),(0,a.kt)("td",{parentName:"tr",align:null},"4h"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7b49\u5f85\u591a\u957f\u65f6\u95f4\u540e\uff0c\u624d\u91cd\u65b0\u53d1\u9001\u5df2\u53d1\u9001\u7684\u544a\u8b66\u3002"))))),(0,a.kt)(o.Z,{value:"Rancher v2.6.5 \u4e4b\u524d\u7684\u7248\u672c",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,a.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u5206\u7ec4\u4f9d\u636e"),(0,a.kt)("td",{parentName:"tr",align:null},"N/A"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5c06\u4f20\u5165\u544a\u8b66\u8fdb\u884c\u5206\u7ec4\u7684\u6807\u7b7e\u3002\u4f8b\u5982\uff0c",(0,a.kt)("inlineCode",{parentName:"td"},"[ group_by: '[' <labelname>, ... ']' ]"),"\u3002\u9488\u5bf9 ",(0,a.kt)("inlineCode",{parentName:"td"},"cluster=A")," \u548c ",(0,a.kt)("inlineCode",{parentName:"td"},"alertname=LatencyHigh")," \u7b49\u6807\u7b7e\u7684\u591a\u4e2a\u544a\u8b66\u53ef\u4ee5\u6279\u5904\u7406\u5230\u4e00\u4e2a\u7ec4\u4e2d\u3002\u8981\u6309\u6240\u6709\u53ef\u80fd\u7684\u6807\u7b7e\u8fdb\u884c\u805a\u5408\uff0c\u8bf7\u4f7f\u7528\u7279\u6b8a\u503c ",(0,a.kt)("inlineCode",{parentName:"td"},"'...'")," \u4f5c\u4e3a\u552f\u4e00\u6807\u7b7e\u540d\u79f0\uff0c\u5982 ",(0,a.kt)("inlineCode",{parentName:"td"},"group_by: ['...']"),"\u3002\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"td"},"...")," \u8fdb\u884c\u5206\u7ec4\u80fd\u6709\u6548\u5730\u5b8c\u5168\u7981\u7528\u805a\u5408\uff0c\u5e76\u6309\u539f\u6837\u4f20\u9012\u6240\u6709\u544a\u8b66\u3002\u9664\u975e\u4f60\u7684\u544a\u8b66\u91cf\u975e\u5e38\u4f4e\u6216\u8005\u4f60\u7684\u4e0a\u6e38\u901a\u77e5\u7cfb\u7edf\u80fd\u6267\u884c\u5206\u7ec4\uff0c\u5426\u5219\u4f60\u4e0d\u592a\u9700\u8981\u8fd9\u6837\u505a\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u7ec4\u7b49\u5f85\u65f6\u957f"),(0,a.kt)("td",{parentName:"tr",align:null},"30s"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5728\u53d1\u9001\u4e4b\u524d\uff0c\u7f13\u51b2\u540c\u4e00\u7ec4\u544a\u8b66\u7684\u7b49\u5f85\u65f6\u95f4\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u7ec4\u95f4\u9694"),(0,a.kt)("td",{parentName:"tr",align:null},"5m"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7b49\u5f85\u591a\u957f\u65f6\u95f4\u624d\u53d1\u9001\u5df2\u6dfb\u52a0\u5230\u544a\u8b66\u7ec4\u7684\u544a\u8b66\uff0c\u5176\u4e2d\u8be5\u544a\u8b66\u7ec4\u7684\u521d\u6b21\u901a\u77e5\u5df2\u88ab\u53d1\u9001\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u91cd\u590d\u95f4\u9694"),(0,a.kt)("td",{parentName:"tr",align:null},"4h"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7b49\u5f85\u591a\u957f\u65f6\u95f4\u540e\uff0c\u624d\u91cd\u65b0\u53d1\u9001\u5df2\u53d1\u9001\u7684\u544a\u8b66\u3002")))))),(0,a.kt)("h3",{id:"\u5339\u914d"},"\u5339\u914d"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Match")," \u5b57\u6bb5\u6307\u4e00\u7ec4\u76f8\u7b49\u5339\u914d\u5668\uff0c\u7528\u4e8e\u6839\u636e\u544a\u8b66\u4e0a\u5b9a\u4e49\u7684\u6807\u7b7e\u6765\u8bc6\u522b\u8981\u53d1\u9001\u5230\u6307\u5b9a\u8def\u7531\u7684\u544a\u8b66\u3002\u5728 Rancher UI \u4e2d\u6dfb\u52a0\u952e\u503c\u5bf9\u65f6\uff0c\u5b83\u4eec\u5bf9\u5e94\u4e8e\u4ee5\u4e0b\u683c\u5f0f\u7684 YAML\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"match:\n  [ <labelname>: <labelvalue>, ... ]\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Match Regex")," \u5b57\u6bb5\u6307\u4e00\u7ec4\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d\u5668\uff0c\u7528\u4e8e\u6839\u636e\u5728\u8be5\u544a\u8b66\u4e0a\u5b9a\u4e49\u7684\u6807\u7b7e\u6765\u8bc6\u522b\u8981\u53d1\u9001\u5230\u6307\u5b9a\u8def\u7531\u7684\u544a\u8b66\u3002\u5728 Rancher UI \u4e2d\u6dfb\u52a0\u952e\u503c\u5bf9\u65f6\uff0c\u5b83\u4eec\u5bf9\u5e94\u4e8e\u4ee5\u4e0b\u683c\u5f0f\u7684 YAML\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"match_re:\n  [ <labelname>: <regex>, ... ]\n")))}d.isMDXComponent=!0}}]);