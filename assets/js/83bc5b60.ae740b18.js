"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[96684],{3905:function(e,t,a){a.d(t,{Zo:function(){return h},kt:function(){return p}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},h=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),u=l(a),p=n,m=u["".concat(c,".").concat(p)]||u[p]||d[p]||i;return a?r.createElement(m,s(s({ref:t},h),{},{components:a})):r.createElement(m,s({ref:t},h))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var l=2;l<i;l++)s[l]=a[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},58340:function(e,t,a){a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return d}});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),s=["components"],o={title:"Security Advisories and CVEs",weight:300},c=void 0,l={unversionedId:"reference-guides/rancher-security/security-advisories-and-cves",id:"version-2.5/reference-guides/rancher-security/security-advisories-and-cves",title:"Security Advisories and CVEs",description:"Rancher is committed to informing the community of security issues in our products. Rancher will publish security advisories and CVEs (Common Vulnerabilities and Exposures) for issues we have resolved. New security advisories are also published in Rancher's GitHub security page.",source:"@site/versioned_docs/version-2.5/reference-guides/rancher-security/security-advisories-and-cves.md",sourceDirName:"reference-guides/rancher-security",slug:"/reference-guides/rancher-security/security-advisories-and-cves",permalink:"/v2.5/reference-guides/rancher-security/security-advisories-and-cves",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/reference-guides/rancher-security/security-advisories-and-cves.md",tags:[],version:"2.5",lastUpdatedAt:1663710212,formattedLastUpdatedAt:"9/20/2022",frontMatter:{title:"Security Advisories and CVEs",weight:300},sidebar:"tutorialSidebar",previous:{title:"Kubernetes Security Best Practices",permalink:"/v2.5/reference-guides/rancher-security/kubernetes-security-best-practices"},next:{title:"Explanations",permalink:"/v2.5/explanations"}},h={},d=[],u={toc:d};function p(e){var t=e.components,a=(0,n.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Rancher is committed to informing the community of security issues in our products. Rancher will publish security advisories and CVEs (Common Vulnerabilities and Exposures) for issues we have resolved. New security advisories are also published in Rancher's GitHub ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/security/advisories"},"security page"),"."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"ID"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Date"),(0,i.kt)("th",{parentName:"tr",align:null},"Resolution"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/security/advisories/GHSA-6x34-89p7-95wg"},"CVE-2022-31247")),(0,i.kt)("td",{parentName:"tr",align:null},"An issue was discovered in Rancher versions up to and including 2.5.15 and 2.6.6 where a flaw with authorization logic allows privilege escalation in downstream clusters through cluster role template binding (CRTB) and project role template binding (PRTB). The vulnerability can be exploited by any user who has permissions to create/edit CRTB or PRTB (such as ",(0,i.kt)("inlineCode",{parentName:"td"},"cluster-owner"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"manage cluster members"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"project-owner"),", and ",(0,i.kt)("inlineCode",{parentName:"td"},"manage project members"),") to gain owner permission in another project in the same cluster or in another project on a different downstream cluster."),(0,i.kt)("td",{parentName:"tr",align:null},"18 August 2022"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.6.7"},"Rancher v2.6.7")," and ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.5.16"},"Rancher v2.5.16"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/security/advisories/GHSA-8w87-58w6-hfv8"},"CVE-2021-36783")),(0,i.kt)("td",{parentName:"tr",align:null},"It was discovered that in Rancher versions up to and including 2.5.12 and 2.6.3, there is a failure to properly sanitize credentials in cluster template answers. This failure can lead to plaintext storage and exposure of credentials, passwords, and API tokens. The exposed credentials are visible in Rancher to authenticated ",(0,i.kt)("inlineCode",{parentName:"td"},"Cluster Owners"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Cluster Members"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Project Owners"),", and ",(0,i.kt)("inlineCode",{parentName:"td"},"Project Members")," on the endpoints ",(0,i.kt)("inlineCode",{parentName:"td"},"/v1/management.cattle.io.clusters"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"/v3/clusters"),", and ",(0,i.kt)("inlineCode",{parentName:"td"},"/k8s/clusters/local/apis/management.cattle.io/v3/clusters"),"."),(0,i.kt)("td",{parentName:"tr",align:null},"18 August 2022"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.6.7"},"Rancher v2.6.7")," and ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.5.16"},"Rancher v2.5.16"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/security/advisories/GHSA-g7j7-h4q8-8w2f"},"CVE-2021-36782")),(0,i.kt)("td",{parentName:"tr",align:null},"An issue was discovered in Rancher versions up to and including 2.5.15 and 2.6.6 where sensitive fields like passwords, API keys, and Rancher's service account token (used to provision clusters) were stored in plaintext directly on Kubernetes objects like ",(0,i.kt)("inlineCode",{parentName:"td"},"Clusters")," (e.g., ",(0,i.kt)("inlineCode",{parentName:"td"},"cluster.management.cattle.io"),"). Anyone with read access to those objects in the Kubernetes API could retrieve the plaintext version of those sensitive data. The issue was partially found and reported by Florian Struck (from ",(0,i.kt)("a",{parentName:"td",href:"https://www.continum.net/"},"Continum AG"),") and ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/fe-ax"},"Marco Stuurman")," (from ",(0,i.kt)("a",{parentName:"td",href:"https://www.shockmedia.nl/"},"Shock Media B.V."),")."),(0,i.kt)("td",{parentName:"tr",align:null},"18 August 2022"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.6.7"},"Rancher v2.6.7")," and ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.5.16"},"Rancher v2.5.16"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/security/advisories/GHSA-vrph-m5jj-c46c"},"CVE-2022-21951")),(0,i.kt)("td",{parentName:"tr",align:null},"This vulnerability only affects customers using ",(0,i.kt)("a",{parentName:"td",href:"https://rancher.com/docs/rancher/v2.6/en/faq/networking/cni-providers/#weave"},"Weave")," Container Network Interface (CNI) when configured through ",(0,i.kt)("a",{parentName:"td",href:"https://rancher.com/docs/rancher/v2.6/en/admin-settings/rke-templates/"},"RKE templates"),". A vulnerability was discovered in Rancher versions 2.5.0 up to and including 2.5.13, and 2.6.0 up to and including 2.6.4, where a user interface (UI) issue with RKE templates does not include a value for the Weave password when Weave is chosen as the CNI. If a cluster is created based on the mentioned template, and Weave is configured as the CNI, no password will be created for ",(0,i.kt)("a",{parentName:"td",href:"https://www.weave.works/docs/net/latest/tasks/manage/security-untrusted-networks/"},"network encryption")," in Weave; therefore, network traffic in the cluster will be sent unencrypted."),(0,i.kt)("td",{parentName:"tr",align:null},"24 May 2022"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.6.5"},"Rancher v2.6.5")," and ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.5.14"},"Rancher v2.5.14"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/security/advisories/GHSA-jwvr-vv7p-gpwq"},"CVE-2021-36784")),(0,i.kt)("td",{parentName:"tr",align:null},"A vulnerability was discovered in Rancher versions from 2.5.0 up to and including 2.5.12 and from 2.6.0 up to and including 2.6.3 which allows users who have create or update permissions on ",(0,i.kt)("a",{parentName:"td",href:"https://rancher.com/docs/rancher/v2.6/en/admin-settings/rbac/"},"Global Roles")," to escalate their permissions, or those of another user, to admin-level permissions. Global Roles grant users Rancher-wide permissions, such as the ability to create clusters. In the identified versions of Rancher, when users are given permission to edit or create Global Roles, they are not restricted to only granting permissions which they already posses. This vulnerability affects customers who utilize non-admin users that are able to create or edit Global Roles. The most common use case for this scenario is the ",(0,i.kt)("inlineCode",{parentName:"td"},"restricted-admin")," role."),(0,i.kt)("td",{parentName:"tr",align:null},"14 Apr 2022"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.6.4"},"Rancher v2.6.4")," and ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.5.13"},"Rancher v2.5.13"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/security/advisories/GHSA-hx8w-ghh8-r4xf"},"CVE-2021-4200")),(0,i.kt)("td",{parentName:"tr",align:null},"This vulnerability only affects customers using the ",(0,i.kt)("inlineCode",{parentName:"td"},"restricted-admin")," role in Rancher. A vulnerability was discovered in Rancher versions from 2.5.0 up to and including 2.5.12 and from 2.6.0 up to and including 2.6.3 where the ",(0,i.kt)("inlineCode",{parentName:"td"},"global-data")," role in ",(0,i.kt)("inlineCode",{parentName:"td"},"cattle-global-data")," namespace grants write access to the Catalogs. Since each user with any level of catalog access was bound to the ",(0,i.kt)("inlineCode",{parentName:"td"},"global-data")," role, this grants write access to templates (",(0,i.kt)("inlineCode",{parentName:"td"},"CatalogTemplates"),") and template versions (",(0,i.kt)("inlineCode",{parentName:"td"},"CatalogTemplateVersions"),") for any user with any level of catalog access. New users created in Rancher are by default assigned to the ",(0,i.kt)("inlineCode",{parentName:"td"},"user")," role (standard user), which is not designed to grant write catalog access. This vulnerability effectively elevates the privilege of any user to write access for the catalog template and catalog template version resources."),(0,i.kt)("td",{parentName:"tr",align:null},"14 Apr 2022"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.6.4"},"Rancher v2.6.4")," and ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.5.13"},"Rancher v2.5.13"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/security/advisories/GHSA-wm2r-rp98-8pmh"},"GHSA-wm2r-rp98-8pmh")),(0,i.kt)("td",{parentName:"tr",align:null},"This vulnerability only affects customers using ",(0,i.kt)("a",{parentName:"td",href:"https://rancher.com/docs/rancher/v2.6/en/deploy-across-clusters/fleet/"},"Fleet")," for continuous delivery with authenticated Git and/or Helm repositories. An issue was discovered in ",(0,i.kt)("inlineCode",{parentName:"td"},"go-getter")," library in versions prior to ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/hashicorp/go-getter/releases/tag/v1.5.11"},(0,i.kt)("inlineCode",{parentName:"a"},"v1.5.11"))," that exposes SSH private keys in base64 format due to a failure in redacting such information from error messages. The vulnerable version of this library is used in Rancher through Fleet in versions of Fleet prior to ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/fleet/releases/tag/v0.3.9"},(0,i.kt)("inlineCode",{parentName:"a"},"v0.3.9")),". This issue affects Rancher versions 2.5.0 up to and including 2.5.12 and from 2.6.0 up to and including 2.6.3. The issue was found and reported by Dagan Henderson from Raft Engineering."),(0,i.kt)("td",{parentName:"tr",align:null},"14 Apr 2022"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.6.4"},"Rancher v2.6.4")," and ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.5.13"},"Rancher v2.5.13"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/security/advisories/GHSA-4fc7-hc63-7fjg"},"CVE-2021-36778")),(0,i.kt)("td",{parentName:"tr",align:null},"A vulnerability was discovered in Rancher versions from 2.5.0 up to and including 2.5.11 and from 2.6.0 up to and including 2.6.2, where an insufficient check of the same-origin policy when downloading Helm charts from a configured private repository can lead to exposure of the repository credentials to a third-party provider. This issue only happens when the user configures access credentials to a private repository in Rancher inside ",(0,i.kt)("inlineCode",{parentName:"td"},"Apps & Marketplace > Repositories"),". The issue was found and reported by Martin Andreas Ullrich."),(0,i.kt)("td",{parentName:"tr",align:null},"14 Apr 2022"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.6.3"},"Rancher v2.6.3")," and ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.5.12"},"Rancher v2.5.12"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/security/advisories/GHSA-hwm2-4ph6-w6m5"},"GHSA-hwm2-4ph6-w6m5")),(0,i.kt)("td",{parentName:"tr",align:null},"A vulnerability was discovered in versions of Rancher starting 2.0 up to and including 2.6.3. The ",(0,i.kt)("inlineCode",{parentName:"td"},"restricted")," pod security policy (PSP) provided in Rancher deviated from the upstream ",(0,i.kt)("inlineCode",{parentName:"td"},"restricted")," policy provided in Kubernetes on account of which Rancher's PSP had ",(0,i.kt)("inlineCode",{parentName:"td"},"runAsUser")," set to ",(0,i.kt)("inlineCode",{parentName:"td"},"runAsAny"),", while upstream had ",(0,i.kt)("inlineCode",{parentName:"td"},"runAsUser")," set to ",(0,i.kt)("inlineCode",{parentName:"td"},"MustRunAsNonRoot"),". This allowed containers to run as any user, including a privileged user (",(0,i.kt)("inlineCode",{parentName:"td"},"root"),"), even when Rancher's ",(0,i.kt)("inlineCode",{parentName:"td"},"restricted")," policy was enforced on a project or at the cluster level."),(0,i.kt)("td",{parentName:"tr",align:null},"31 Mar 2022"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.6.4"},"Rancher v2.6.4"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/security/advisories/GHSA-28g7-896h-695v"},"CVE-2021-36775")),(0,i.kt)("td",{parentName:"tr",align:null},"A vulnerability was discovered in Rancher versions up to and including 2.4.17, 2.5.11 and 2.6.2. After removing a ",(0,i.kt)("inlineCode",{parentName:"td"},"Project Role")," associated with a group from the project, the bindings that granted access to cluster-scoped resources for those subjects were not deleted. This was due to an incomplete authorization logic check. A user who was a member of the affected group with authenticated access to Rancher could exploit this vulnerability to access resources they shouldn't have had access to. The exposure level would depend on the original permission level granted to the affected project role. This vulnerability only affected customers using group based authentication in Rancher."),(0,i.kt)("td",{parentName:"tr",align:null},"31 Mar 2022"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.6.3"},"Rancher v2.6.3"),", ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.5.12"},"Rancher v2.5.12")," and ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.4.18"},"Rancher v2.4.18"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/security/advisories/GHSA-gvh9-xgrq-r8hw"},"CVE-2021-36776")),(0,i.kt)("td",{parentName:"tr",align:null},"A vulnerability was discovered in Rancher versions starting 2.5.0 up to and including 2.5.9, that allowed an authenticated user to impersonate any user on a cluster through an API proxy, without requiring knowledge of the impersonated user's credentials. This was due to the API proxy not dropping the impersonation header before sending the request to the Kubernetes API. A malicious user with authenticated access to Rancher could use this to impersonate another user with administrator access in Rancher, thereby gaining administrator level access to the cluster."),(0,i.kt)("td",{parentName:"tr",align:null},"31 Mar 2022"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.6.0"},"Rancher v2.6.0")," and ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.5.10"},"Rancher v2.5.10"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-25318"},"CVE-2021-25318")),(0,i.kt)("td",{parentName:"tr",align:null},"A vulnerability was discovered in Rancher versions 2.0 through the aforementioned fixed versions, where users were granted access to resources regardless of the resource's API group. For example, Rancher should have allowed users access to ",(0,i.kt)("inlineCode",{parentName:"td"},"apps.catalog.cattle.io"),", but instead incorrectly gave access to ",(0,i.kt)("inlineCode",{parentName:"td"},"apps.*"),". Resources affected in the ",(0,i.kt)("strong",{parentName:"td"},"Downstream clusters")," and ",(0,i.kt)("strong",{parentName:"td"},"Rancher management cluster")," can be found ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/security/advisories/GHSA-f9xf-jq4j-vqw4"},"here"),". There is not a direct mitigation besides upgrading to the patched Rancher versions."),(0,i.kt)("td",{parentName:"tr",align:null},"14 Jul 2021"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.5.9"},"Rancher v2.5.9")," and ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.4.16"},"Rancher v2.4.16"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-31999"},"CVE-2021-31999")),(0,i.kt)("td",{parentName:"tr",align:null},'A vulnerability was discovered in Rancher 2.0.0 through the aforementioned patched versions, where a malicious Rancher user could craft an API request directed at the proxy for the Kubernetes API of a managed cluster to gain access to information they do not have access to. This is done by passing the "Impersonate-User" or "Impersonate-Group" header in the Connection header, which is then correctly removed by the proxy. At this point, instead of impersonating the user and their permissions, the request will act as if it was from the Rancher management server and incorrectly return the information. The vulnerability is limited to valid Rancher users with some level of permissions on the cluster. There is not a direct mitigation besides upgrading to the patched Rancher versions.'),(0,i.kt)("td",{parentName:"tr",align:null},"14 Jul 2021"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.5.9"},"Rancher v2.5.9")," and ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.4.16"},"Rancher v2.4.16"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-25320"},"CVE-2021-25320")),(0,i.kt)("td",{parentName:"tr",align:null},"A vulnerability was discovered in Rancher 2.2.0 through the aforementioned patched versions, where cloud credentials weren't being properly validated through the Rancher API. Specifically through a proxy designed to communicate with cloud providers. Any Rancher user that was logged-in and aware of a cloud-credential ID that was valid for a given cloud provider, could call that cloud provider's API through the proxy API, and the cloud-credential would be attached. The exploit is limited to valid Rancher users. There is not a direct mitigation outside of upgrading to the patched Rancher versions."),(0,i.kt)("td",{parentName:"tr",align:null},"14 Jul 2021"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.5.9"},"Rancher v2.5.9")," and ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.4.16"},"Rancher v2.4.16"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-25313"},"CVE-2021-25313")),(0,i.kt)("td",{parentName:"tr",align:null},"A security vulnerability was discovered on all Rancher 2 versions. When accessing the Rancher API with a browser, the URL was not properly escaped, making it vulnerable to an XSS attack. Specially crafted URLs to these API endpoints could include JavaScript which would be embedded in the page and execute in a browser. There is no direct mitigation. Avoid clicking on untrusted links to your Rancher server."),(0,i.kt)("td",{parentName:"tr",align:null},"2 Mar 2021"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.5.6"},"Rancher v2.5.6"),", ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.4.14"},"Rancher v2.4.14"),", and ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.3.11"},"Rancher v2.3.11"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-14435"},"CVE-2019-14435")),(0,i.kt)("td",{parentName:"tr",align:null},"This vulnerability allows authenticated users to potentially extract otherwise private data out of IPs reachable from system service containers used by Rancher. This can include but not only limited to services such as cloud provider metadata services. Although Rancher allow users to configure whitelisted domains for system service access, this flaw can still be exploited by a carefully crafted HTTP request. The issue was found and reported by Matt Belisle and Alex Stevenson at Workiva."),(0,i.kt)("td",{parentName:"tr",align:null},"5 Aug 2019"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.2.7"},"Rancher v2.2.7")," and ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.1.12"},"Rancher v2.1.12"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-14436"},"CVE-2019-14436")),(0,i.kt)("td",{parentName:"tr",align:null},"The vulnerability allows a member of a project that has access to edit role bindings to be able to assign themselves or others a cluster level role granting them administrator access to that cluster. The issue was found and reported by Michal Lipinski at Nokia."),(0,i.kt)("td",{parentName:"tr",align:null},"5 Aug 2019"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.2.7"},"Rancher v2.2.7")," and ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.1.12"},"Rancher v2.1.12"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-13209"},"CVE-2019-13209")),(0,i.kt)("td",{parentName:"tr",align:null},"The vulnerability is known as a ",(0,i.kt)("a",{parentName:"td",href:"https://www.christian-schneider.net/CrossSiteWebSocketHijacking.html"},"Cross-Site Websocket Hijacking attack"),". This attack allows an exploiter to gain access to clusters managed by Rancher with the roles/permissions of a victim. It requires that a victim to be logged into a Rancher server and then access a third-party site hosted by the exploiter. Once that is accomplished, the exploiter is able to execute commands against the Kubernetes API with the permissions and identity of the victim. Reported by Matt Belisle and Alex Stevenson from Workiva."),(0,i.kt)("td",{parentName:"tr",align:null},"15 Jul 2019"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.2.5"},"Rancher v2.2.5"),", ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.1.11"},"Rancher v2.1.11")," and ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.0.16"},"Rancher v2.0.16"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-12303"},"CVE-2019-12303")),(0,i.kt)("td",{parentName:"tr",align:null},"Project owners can inject extra fluentd logging configurations that makes it possible to read files or execute arbitrary commands inside the fluentd container. Reported by Tyler Welton from Untamed Theory."),(0,i.kt)("td",{parentName:"tr",align:null},"5 Jun 2019"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.2.4"},"Rancher v2.2.4"),", ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.1.10"},"Rancher v2.1.10")," and ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.0.15"},"Rancher v2.0.15"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-12274"},"CVE-2019-12274")),(0,i.kt)("td",{parentName:"tr",align:null},"Nodes using the built-in node drivers using a file path option allows the machine to read arbitrary files including sensitive ones from inside the Rancher server container."),(0,i.kt)("td",{parentName:"tr",align:null},"5 Jun 2019"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.2.4"},"Rancher v2.2.4"),", ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.1.10"},"Rancher v2.1.10")," and ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.0.15"},"Rancher v2.0.15"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-11202"},"CVE-2019-11202")),(0,i.kt)("td",{parentName:"tr",align:null},"The default admin, that is shipped with Rancher, will be re-created upon restart of Rancher despite being explicitly deleted."),(0,i.kt)("td",{parentName:"tr",align:null},"16 Apr 2019"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.2.2"},"Rancher v2.2.2"),", ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.1.9"},"Rancher v2.1.9")," and ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.0.14"},"Rancher v2.0.14"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-6287"},"CVE-2019-6287")),(0,i.kt)("td",{parentName:"tr",align:null},"Project members continue to get access to namespaces from projects that they were removed from if they were added to more than one project."),(0,i.kt)("td",{parentName:"tr",align:null},"29 Jan 2019"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.1.6"},"Rancher v2.1.6")," and ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.0.11"},"Rancher v2.0.11"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2018-20321"},"CVE-2018-20321")),(0,i.kt)("td",{parentName:"tr",align:null},"Any project member with access to the ",(0,i.kt)("inlineCode",{parentName:"td"},"default")," namespace can mount the ",(0,i.kt)("inlineCode",{parentName:"td"},"netes-default")," service account in a pod and then use that pod to execute administrative privileged commands against the Kubernetes cluster."),(0,i.kt)("td",{parentName:"tr",align:null},"29 Jan 2019"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.1.6"},"Rancher v2.1.6")," and ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.0.11"},"Rancher v2.0.11")," - Rolling back from these versions or greater have specific ",(0,i.kt)("a",{parentName:"td",href:"/v2.5/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/rollbacks"},"instructions"),".")))))}p.isMDXComponent=!0}}]);