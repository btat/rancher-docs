"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[67751],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>h});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),u=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(i.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(t),h=o,m=d["".concat(i,".").concat(h)]||d[h]||p[h]||a;return t?n.createElement(m,s(s({ref:r},l),{},{components:t})):n.createElement(m,s({ref:r},l))}));function h(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=d;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var u=2;u<a;u++)s[u]=t[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},95453:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var n=t(87462),o=(t(67294),t(3905));const a={title:"Restoring Rancher"},s=void 0,c={unversionedId:"how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher",id:"version-2.5/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher",title:"Restoring Rancher",description:"A restore is performed by creating a Restore custom resource.",source:"@site/versioned_docs/version-2.5/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher.md",sourceDirName:"how-to-guides/new-user-guides/backup-restore-and-disaster-recovery",slug:"/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher",permalink:"/v2.5/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher.md",tags:[],version:"2.5",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"Sep 23, 2022",frontMatter:{title:"Restoring Rancher"},sidebar:"tutorialSidebar",previous:{title:"Backing up Rancher",permalink:"/v2.5/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher"},next:{title:"Migrating Rancher to a New Cluster",permalink:"/v2.5/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/migrate-rancher-to-new-cluster"}},i={},u=[{value:"Create the Restore Custom Resource",id:"create-the-restore-custom-resource",level:3},{value:"Logs",id:"logs",level:3},{value:"Cleanup",id:"cleanup",level:3},{value:"Known Issues",id:"known-issues",level:3}],l={toc:u};function p(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A restore is performed by creating a Restore custom resource."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Important")),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"Follow the instructions from this page for restoring rancher on the same cluster where it was backed up from. In order to migrate rancher to a new cluster, follow the steps to ",(0,o.kt)("a",{parentName:"li",href:"/v2.5/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/migrate-rancher-to-new-cluster"},"migrate rancher.")),(0,o.kt)("li",{parentName:"ul"},"While restoring rancher on the same setup, the operator will scale down the rancher deployment when restore starts, and it will scale back up the deployment once restore completes. So Rancher will be unavailable during the restore."),(0,o.kt)("li",{parentName:"ul"},"When restoring a backup into a new Rancher setup, the version of the new setup should be the same as the one where the backup is made."))),(0,o.kt)("h3",{id:"create-the-restore-custom-resource"},"Create the Restore Custom Resource"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("strong",{parentName:"p"},"Cluster Explorer,")," go to the dropdown menu in the upper left corner and click ",(0,o.kt)("strong",{parentName:"p"},"Rancher Backups."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Restore."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create the Restore with the form, or with YAML.  For creating the Restore resource using form, refer to the ",(0,o.kt)("a",{parentName:"p",href:"/v2.5/reference-guides/backup-restore-configuration/restore-configuration"},"configuration reference")," and to the ",(0,o.kt)("a",{parentName:"p",href:"/v2.5/reference-guides/backup-restore-configuration/examples"},"examples."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"For using the YAML editor, we can click ",(0,o.kt)("strong",{parentName:"p"},"Create > Create from YAML.")," Enter the Restore YAML."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: resources.cattle.io/v1\nkind: Restore\nmetadata:\n  name: restore-migration\nspec:\n  backupFilename: backup-b0450532-cee1-4aa1-a881-f5f48a007b1c-2020-09-15T07-27-09Z.tar.gz\n  encryptionConfigSecretName: encryptionconfig\n  storageLocation:\n    s3:\n      credentialSecretName: s3-creds\n      credentialSecretNamespace: default\n      bucketName: rancher-backups\n      folder: rancher\n      region: us-west-2\n      endpoint: s3.us-west-2.amazonaws.com\n")),(0,o.kt)("p",{parentName:"li"},"  For help configuring the Restore, refer to the ",(0,o.kt)("a",{parentName:"p",href:"/v2.5/reference-guides/backup-restore-configuration/restore-configuration"},"configuration reference")," and to the ",(0,o.kt)("a",{parentName:"p",href:"/v2.5/reference-guides/backup-restore-configuration/examples"},"examples."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Create.")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," The rancher-operator scales down the rancher deployment during restore, and scales it back up once the restore completes. The resources are restored in this order:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Custom Resource Definitions (CRDs)"),(0,o.kt)("li",{parentName:"ol"},"Cluster-scoped resources"),(0,o.kt)("li",{parentName:"ol"},"Namespaced resources")),(0,o.kt)("h3",{id:"logs"},"Logs"),(0,o.kt)("p",null,"To check how the restore is progressing, you can check the logs of the operator. Run this command to follow the logs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl logs -n cattle-resources-system -l app.kubernetes.io/name=rancher-backup -f\n")),(0,o.kt)("h3",{id:"cleanup"},"Cleanup"),(0,o.kt)("p",null,"If you created the restore resource with kubectl, remove the resource to prevent a naming conflict with future restores."),(0,o.kt)("h3",{id:"known-issues"},"Known Issues"),(0,o.kt)("p",null,"In some cases, after restoring the backup, Rancher logs will show errors similar to the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"2021/10/05 21:30:45 [ERROR] error syncing 'c-89d82/m-4067aa68dd78': handler rke-worker-upgrader: clusters.management.cattle.io \"c-89d82\" not found, requeuing\n")),(0,o.kt)("p",null,"This happens because one of the resources that was just restored has finalizers but the related resources have been deleted so the handler cannot find it."),(0,o.kt)("p",null,"To eliminate the errors, we need to find and delete the resource that causes the error. See more information ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/issues/35050#issuecomment-937968556"},"here")))}p.isMDXComponent=!0}}]);