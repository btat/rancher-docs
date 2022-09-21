"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[19510],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,v=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(v,i(i({ref:t},c),{},{components:r})):n.createElement(v,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9980:function(e,t,r){var n=r(67294),a=r(45697),o=function(e){var t=e.id;return n.createElement("div",{className:"video-responsive"},n.createElement("iframe",{width:"853",height:"480",src:"https://www.youtube.com/embed/"+t,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"Embedded youtube"}))};o.propTypes={embedId:r.n(a)().string.isRequired},t.Z=o},75330:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return v},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=r(9980),s=["components"],l={title:"Migrating from v1.6 to v2.x",weight:28,aliases:["/rancher/v2.x/en/v1.6-migration/"]},u=void 0,c={unversionedId:"pages-for-subheaders/migrate-from-v1.6-v2.x",id:"version-2.0-2.4/pages-for-subheaders/migrate-from-v1.6-v2.x",title:"Migrating from v1.6 to v2.x",description:"Rancher v2.x has been rearchitected and rewritten with the goal of providing a complete management solution for Kubernetes and Docker.  Due to these extensive changes, there is no direct upgrade path from v1.6 to v2.x, but rather a migration of your v1.6 services into v2.x as Kubernetes workloads.  In v1.6, the most common orchestration used was Rancher's own engine called Cattle. The following guide explains and educates our Cattle users on running workloads in a Kubernetes environment.",source:"@site/versioned_docs/version-2.0-2.4/pages-for-subheaders/migrate-from-v1.6-v2.x.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/migrate-from-v1.6-v2.x",permalink:"/v2.0-v2.4/pages-for-subheaders/migrate-from-v1.6-v2.x",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/pages-for-subheaders/migrate-from-v1.6-v2.x.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663710212,formattedLastUpdatedAt:"9/20/2022",frontMatter:{title:"Migrating from v1.6 to v2.x",weight:28,aliases:["/rancher/v2.x/en/v1.6-migration/"]},sidebar:"tutorialSidebar",previous:{title:"Rolling back to v2.0.0-v2.1.5",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher-launched-kubernetes-clusters-from-backup/roll-back-to-v2.0-v2.1"},next:{title:"Kubernetes Introduction",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/kubernetes-introduction"}},p={},m=[{value:"Video",id:"video",level:2},{value:"Migration Plan",id:"migration-plan",level:2},{value:"Migration Example Files",id:"migration-example-files",level:2},{value:"Next: Get Started",id:"next-get-started",level:3}],d={toc:m};function v(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Rancher v2.x has been rearchitected and rewritten with the goal of providing a complete management solution for Kubernetes and Docker.  Due to these extensive changes, there is no direct upgrade path from v1.6 to v2.x, but rather a migration of your v1.6 services into v2.x as Kubernetes workloads.  In v1.6, the most common orchestration used was Rancher's own engine called Cattle. The following guide explains and educates our Cattle users on running workloads in a Kubernetes environment."),(0,o.kt)("h2",{id:"video"},"Video"),(0,o.kt)("p",null,"This video demonstrates a complete walk through of migration from Rancher v1.6 to v2.x."),(0,o.kt)(i.Z,{id:"OIifcqj5Srw",mdxType:"YouTube"}),(0,o.kt)("h2",{id:"migration-plan"},"Migration Plan"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Want to more about Kubernetes before getting started?")," Read our ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/kubernetes-introduction"},"Kubernetes Introduction"),".")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/install-and-configure-rancher"},"1. Get Started")),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Already a Kubernetes user in v1.6?")),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"Get Started")," is the only section you need to review for migration to v2.x. You can skip everything else."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/migrate-services"},"2. Migrate Your Services"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/expose-services"},"3. Expose Your Services"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/monitor-apps"},"4. Configure Health Checks"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/schedule-services"},"5. Schedule Your Services"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/discover-services"},"6. Service Discovery"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/load-balancing"},"7. Load Balancing")))),(0,o.kt)("h2",{id:"migration-example-files"},"Migration Example Files"),(0,o.kt)("p",null,"Throughout this migration guide, we will reference several example services from Rancher v1.6 that we're migrating to v2.x. These services are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A service named ",(0,o.kt)("inlineCode",{parentName:"li"},"web"),", which runs ",(0,o.kt)("a",{parentName:"li",href:"http://sdelements.github.io/lets-chat/"},"Let's Chat"),", a self-hosted chat for small teams."),(0,o.kt)("li",{parentName:"ul"},"A service named ",(0,o.kt)("inlineCode",{parentName:"li"},"database"),", which runs ",(0,o.kt)("a",{parentName:"li",href:"https://www.mongodb.com/"},"Mongo DB"),", an open source document database."),(0,o.kt)("li",{parentName:"ul"},"A service named ",(0,o.kt)("inlineCode",{parentName:"li"},"webLB"),", which runs ",(0,o.kt)("a",{parentName:"li",href:"http://www.haproxy.org/"},"HAProxy"),", an open source load balancer used in Rancher v1.6.")),(0,o.kt)("p",null,"During migration, we'll export these services from Rancher v1.6.  The export generates a unique directory for each Rancher v1.6 environment and stack, and two files are output into each stack's directory:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")),(0,o.kt)("p",{parentName:"li"},"  A file that contains standard Docker directives for each service in your stack. We'll be converting these files to Kubernetes manifests that can be read by Rancher v2.x.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"rancher-compose.yml")),(0,o.kt)("p",{parentName:"li"},"  A file for Rancher-specific functionality such as health checks and load balancers. These files cannot be read by Rancher v2.x, so don't worry about their contents\u2014we're discarding them and recreating them using the v2.x UI."))),(0,o.kt)("h3",{id:"next-get-started"},(0,o.kt)("a",{parentName:"h3",href:"/v2.0-v2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/install-and-configure-rancher"},"Next: Get Started")))}v.isMDXComponent=!0}}]);