"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[14114],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},46858:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],l={title:"Rancher DigitalOcean Quick Start Guide",description:"Read this step by step Rancher DigitalOcean guide to quickly deploy a Rancher Server with a single node cluster attached.",weight:100},s=void 0,c={unversionedId:"getting-started/quick-start-guides/deploy-rancher-manager/digitalocean",id:"version-2.0-2.4/getting-started/quick-start-guides/deploy-rancher-manager/digitalocean",title:"Rancher DigitalOcean Quick Start Guide",description:"Read this step by step Rancher DigitalOcean guide to quickly deploy a Rancher Server with a single node cluster attached.",source:"@site/versioned_docs/version-2.0-2.4/getting-started/quick-start-guides/deploy-rancher-manager/digitalocean.md",sourceDirName:"getting-started/quick-start-guides/deploy-rancher-manager",slug:"/getting-started/quick-start-guides/deploy-rancher-manager/digitalocean",permalink:"/v2.0-v2.4/getting-started/quick-start-guides/deploy-rancher-manager/digitalocean",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/getting-started/quick-start-guides/deploy-rancher-manager/digitalocean.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663710212,formattedLastUpdatedAt:"9/20/2022",frontMatter:{title:"Rancher DigitalOcean Quick Start Guide",description:"Read this step by step Rancher DigitalOcean guide to quickly deploy a Rancher Server with a single node cluster attached.",weight:100},sidebar:"tutorialSidebar",previous:{title:"Rancher Azure Quick Start Guide",permalink:"/v2.0-v2.4/getting-started/quick-start-guides/deploy-rancher-manager/azure"},next:{title:"Rancher GCP Quick Start Guide",permalink:"/v2.0-v2.4/getting-started/quick-start-guides/deploy-rancher-manager/gcp"}},p={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Result",id:"result",level:4},{value:"What&#39;s Next?",id:"whats-next",level:3},{value:"Destroying the Environment",id:"destroying-the-environment",level:2}],d={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The following steps will quickly deploy a Rancher Server on DigitalOcean with a single node cluster attached."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," The intent of these guides is to quickly launch a sandbox that you can use to evaluate Rancher. These guides are not intended for production environments. For comprehensive setup instructions, see ",(0,i.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/installation-and-upgrade"},"Installation"),".")),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note"),"\nDeploying to DigitalOcean will incur charges.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.digitalocean.com"},"DigitalOcean Account"),": You will require an account on DigitalOcean as this is where the server and cluster will run."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.digitalocean.com/community/tutorials/how-to-create-a-digitalocean-space-and-api-key"},"DigitalOcean Access Key"),": Use this link to create a DigitalOcean Access Key if you don't have one."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.terraform.io/downloads.html"},"Terraform"),": Used to provision the server and cluster to DigitalOcean.")),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Clone ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/quickstart"},"Rancher Quickstart")," to a folder using ",(0,i.kt)("inlineCode",{parentName:"p"},"git clone https://github.com/rancher/quickstart"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go into the DigitalOcean folder containing the terraform files by executing ",(0,i.kt)("inlineCode",{parentName:"p"},"cd quickstart/do"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Rename the ",(0,i.kt)("inlineCode",{parentName:"p"},"terraform.tfvars.example")," file to ",(0,i.kt)("inlineCode",{parentName:"p"},"terraform.tfvars"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Edit ",(0,i.kt)("inlineCode",{parentName:"p"},"terraform.tfvars")," and customize the following variables:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"do_token")," - DigitalOcean access key"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rancher_server_admin_password")," - Admin password for created Rancher server"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Optional:")," Modify optional variables within ",(0,i.kt)("inlineCode",{parentName:"p"},"terraform.tfvars"),".\nSee the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/quickstart"},"Quickstart Readme")," and the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/quickstart/tree/master/do"},"DO Quickstart Readme")," for more information.\nSuggestions include:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"- `do_region` - DigitalOcean region, choose the closest instead of the default\n- `prefix` - Prefix for all created resources\n- `droplet_size` - Droplet size used, minimum is `s-2vcpu-4gb` but `s-4vcpu-8gb` could be used if within budget\n- `ssh_key_file_name` - Use a specific SSH key instead of `~/.ssh/id_rsa` (public key is assumed to be `${ssh_key_file_name}.pub`)\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Run ",(0,i.kt)("inlineCode",{parentName:"p"},"terraform init"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"To initiate the creation of the environment, run ",(0,i.kt)("inlineCode",{parentName:"p"},"terraform apply --auto-approve"),". Then wait for output similar to the following:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"Apply complete! Resources: 15 added, 0 changed, 0 destroyed.\n\nOutputs:\n\nrancher_node_ip = xx.xx.xx.xx\nrancher_server_url = https://rancher.xx.xx.xx.xx.sslip.io\nworkload_node_ip = yy.yy.yy.yy\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Paste the ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher_server_url")," from the output above into the browser. Log in when prompted (default username is ",(0,i.kt)("inlineCode",{parentName:"p"},"admin"),", use the password set in ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher_server_admin_password"),")."))),(0,i.kt)("h4",{id:"result"},"Result"),(0,i.kt)("p",null,"Two Kubernetes clusters are deployed into your DigitalOcean account, one running Rancher Server and the other ready for experimentation deployments."),(0,i.kt)("h3",{id:"whats-next"},"What's Next?"),(0,i.kt)("p",null,"Use Rancher to create a deployment. For more information, see ",(0,i.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/deploy-rancher-workloads"},"Creating Deployments"),"."),(0,i.kt)("h2",{id:"destroying-the-environment"},"Destroying the Environment"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From the ",(0,i.kt)("inlineCode",{parentName:"p"},"quickstart/do")," folder, execute ",(0,i.kt)("inlineCode",{parentName:"p"},"terraform destroy --auto-approve"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Wait for confirmation that all resources have been destroyed."))))}m.isMDXComponent=!0}}]);