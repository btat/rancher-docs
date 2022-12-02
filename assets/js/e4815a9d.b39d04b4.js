"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[73679],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(t),u=i,v=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return t?a.createElement(v,r(r({ref:n},c),{},{components:t})):a.createElement(v,r({ref:n},c))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},45550:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=t(87462),i=(t(67294),t(3905));const o={title:"3. Add Deployments and Services with the Istio Sidecar"},r=void 0,l={unversionedId:"how-to-guides/advanced-user-guides/istio-setup-guide/use-istio-sidecar",id:"how-to-guides/advanced-user-guides/istio-setup-guide/use-istio-sidecar",title:"3. Add Deployments and Services with the Istio Sidecar",description:"To enable Istio for a workload, the cluster and namespace must have the Istio app installed.",source:"@site/docs/how-to-guides/advanced-user-guides/istio-setup-guide/use-istio-sidecar.md",sourceDirName:"how-to-guides/advanced-user-guides/istio-setup-guide",slug:"/how-to-guides/advanced-user-guides/istio-setup-guide/use-istio-sidecar",permalink:"/how-to-guides/advanced-user-guides/istio-setup-guide/use-istio-sidecar",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/istio-setup-guide/use-istio-sidecar.md",tags:[],version:"current",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"Sep 23, 2022",frontMatter:{title:"3. Add Deployments and Services with the Istio Sidecar"},sidebar:"tutorialSidebar",previous:{title:"2. Enable Istio in a Namespace",permalink:"/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-namespace"},next:{title:"4. Set up the Istio Gateway",permalink:"/how-to-guides/advanced-user-guides/istio-setup-guide/set-up-istio-gateway"}},s={},p=[{value:"Add Deployments and Services",id:"add-deployments-and-services",level:3},{value:"Example Deployments and Services",id:"example-deployments-and-services",level:3},{value:"Resource YAML",id:"resource-yaml",level:3},{value:"Next: Set up the Istio Gateway",id:"next-set-up-the-istio-gateway",level:3}],c={toc:p};function d(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Prerequisite:",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"To enable Istio for a workload, the cluster and namespace must have the Istio app installed.")),(0,i.kt)("p",null,"Enabling Istio in a namespace only enables automatic sidecar injection for new workloads. To enable the Envoy sidecar for existing workloads, you need to enable it manually for each workload."),(0,i.kt)("p",null,"To inject the Istio sidecar on an existing workload in the namespace,"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,i.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,i.kt)("li",{parentName:"ol"},"On the ",(0,i.kt)("strong",{parentName:"li"},"Clusters")," page, go to the cluster where you want to see the visualizations and click ",(0,i.kt)("strong",{parentName:"li"},"Explore"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Workload"),"."),(0,i.kt)("li",{parentName:"ol"},"Go to the workload where you want to inject the Istio sidecar and click ",(0,i.kt)("strong",{parentName:"li"},"\u22ee > Redeploy"),". When the workload is redeployed, it will have the Envoy sidecar automatically injected.")),(0,i.kt)("p",null,"Wait a few minutes for the workload to upgrade to have the istio sidecar. Click it and go to the Containers section. You should be able to see ",(0,i.kt)("inlineCode",{parentName:"p"},"istio-proxy")," alongside your original workload. This means the Istio sidecar is enabled for the workload. Istio is doing all the wiring for the sidecar envoy. Now Istio can do all the features automatically if you enable them in the yaml."),(0,i.kt)("h3",{id:"add-deployments-and-services"},"Add Deployments and Services"),(0,i.kt)("p",null,"There are a few ways to add new ",(0,i.kt)("strong",{parentName:"p"},"Deployments")," in your namespace:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,i.kt)("li",{parentName:"ol"},"Go to the cluster that you created and click ",(0,i.kt)("strong",{parentName:"li"},"Explore"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Workload"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Create"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Deployment"),"."),(0,i.kt)("li",{parentName:"ol"},"Fill out the form, or ",(0,i.kt)("strong",{parentName:"li"},"Edit as Yaml"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Create"),".")),(0,i.kt)("p",null,"To add a ",(0,i.kt)("strong",{parentName:"p"},"Service")," to your namespace:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,i.kt)("li",{parentName:"ol"},"Go to the cluster that you created and click ",(0,i.kt)("strong",{parentName:"li"},"Explore"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Service Discovery > Services"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Create"),"."),(0,i.kt)("li",{parentName:"ol"},"Select the type of service that you want."),(0,i.kt)("li",{parentName:"ol"},"Fill out the form, or ",(0,i.kt)("strong",{parentName:"li"},"Edit as Yaml"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Create"))),(0,i.kt)("p",null,"You can also create deployments and services using the kubectl ",(0,i.kt)("strong",{parentName:"p"},"shell")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"kubectl create -f <name of service/deployment file>.yaml")," if your file is stored locally in the cluster"),(0,i.kt)("li",{parentName:"ol"},"Or run ",(0,i.kt)("inlineCode",{parentName:"li"},"cat<< EOF | kubectl apply -f -"),", paste the file contents into the terminal, then run ",(0,i.kt)("inlineCode",{parentName:"li"},"EOF")," to complete the command.")),(0,i.kt)("h3",{id:"example-deployments-and-services"},"Example Deployments and Services"),(0,i.kt)("p",null,"Next we add the Kubernetes resources for the sample deployments and services for the BookInfo app in Istio's documentation."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,i.kt)("li",{parentName:"ol"},"Go to the cluster that you created and click ",(0,i.kt)("strong",{parentName:"li"},"Explore"),"."),(0,i.kt)("li",{parentName:"ol"},"In the top navigation bar, open the kubectl shell."),(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"cat<< EOF | kubectl apply -f -")),(0,i.kt)("li",{parentName:"ol"},"Copy the below resources into the the shell."),(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"EOF"))),(0,i.kt)("p",null,"This will set up the following sample resources from Istio's example BookInfo app:"),(0,i.kt)("p",null,"Details service and deployment:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"details")," Service"),(0,i.kt)("li",{parentName:"ul"},"A ServiceAccount for ",(0,i.kt)("inlineCode",{parentName:"li"},"bookinfo-details")),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"details-v1")," Deployment")),(0,i.kt)("p",null,"Ratings service and deployment:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"ratings")," Service"),(0,i.kt)("li",{parentName:"ul"},"A ServiceAccount for ",(0,i.kt)("inlineCode",{parentName:"li"},"bookinfo-ratings")),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"ratings-v1")," Deployment")),(0,i.kt)("p",null,"Reviews service and deployments (three versions):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"reviews")," Service"),(0,i.kt)("li",{parentName:"ul"},"A ServiceAccount for ",(0,i.kt)("inlineCode",{parentName:"li"},"bookinfo-reviews")),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"reviews-v1")," Deployment"),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"reviews-v2")," Deployment"),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"reviews-v3")," Deployment")),(0,i.kt)("p",null,"Productpage service and deployment:"),(0,i.kt)("p",null,"This is the main page of the app, which will be visible from a web browser. The other services will be called from this page."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"productpage")," service"),(0,i.kt)("li",{parentName:"ul"},"A ServiceAccount for ",(0,i.kt)("inlineCode",{parentName:"li"},"bookinfo-productpage")),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"productpage-v1")," Deployment")),(0,i.kt)("h3",{id:"resource-yaml"},"Resource YAML"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'# Copyright 2017 Istio Authors\n#\n#   Licensed under the Apache License, Version 2.0 (the "License");\n#   you may not use this file except in compliance with the License.\n#   You may obtain a copy of the License at\n#\n#       http://www.apache.org/licenses/LICENSE-2.0\n#\n#   Unless required by applicable law or agreed to in writing, software\n#   distributed under the License is distributed on an "AS IS" BASIS,\n#   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n#   See the License for the specific language governing permissions and\n#   limitations under the License.\n\n##################################################################################################\n# Details service\n##################################################################################################\napiVersion: v1\nkind: Service\nmetadata:\n  name: details\n  labels:\n    app: details\n    service: details\nspec:\n  ports:\n  - port: 9080\n    name: http\n  selector:\n    app: details\n---\napiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: bookinfo-details\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: details-v1\n  labels:\n    app: details\n    version: v1\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: details\n      version: v1\n  template:\n    metadata:\n      labels:\n        app: details\n        version: v1\n    spec:\n      serviceAccountName: bookinfo-details\n      containers:\n      - name: details\n        image: docker.io/istio/examples-bookinfo-details-v1:1.15.0\n        imagePullPolicy: IfNotPresent\n        ports:\n        - containerPort: 9080\n---\n##################################################################################################\n# Ratings service\n##################################################################################################\napiVersion: v1\nkind: Service\nmetadata:\n  name: ratings\n  labels:\n    app: ratings\n    service: ratings\nspec:\n  ports:\n  - port: 9080\n    name: http\n  selector:\n    app: ratings\n---\napiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: bookinfo-ratings\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: ratings-v1\n  labels:\n    app: ratings\n    version: v1\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: ratings\n      version: v1\n  template:\n    metadata:\n      labels:\n        app: ratings\n        version: v1\n    spec:\n      serviceAccountName: bookinfo-ratings\n      containers:\n      - name: ratings\n        image: docker.io/istio/examples-bookinfo-ratings-v1:1.15.0\n        imagePullPolicy: IfNotPresent\n        ports:\n        - containerPort: 9080\n---\n##################################################################################################\n# Reviews service\n##################################################################################################\napiVersion: v1\nkind: Service\nmetadata:\n  name: reviews\n  labels:\n    app: reviews\n    service: reviews\nspec:\n  ports:\n  - port: 9080\n    name: http\n  selector:\n    app: reviews\n---\napiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: bookinfo-reviews\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: reviews-v1\n  labels:\n    app: reviews\n    version: v1\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: reviews\n      version: v1\n  template:\n    metadata:\n      labels:\n        app: reviews\n        version: v1\n    spec:\n      serviceAccountName: bookinfo-reviews\n      containers:\n      - name: reviews\n        image: docker.io/istio/examples-bookinfo-reviews-v1:1.15.0\n        imagePullPolicy: IfNotPresent\n        ports:\n        - containerPort: 9080\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: reviews-v2\n  labels:\n    app: reviews\n    version: v2\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: reviews\n      version: v2\n  template:\n    metadata:\n      labels:\n        app: reviews\n        version: v2\n    spec:\n      serviceAccountName: bookinfo-reviews\n      containers:\n      - name: reviews\n        image: docker.io/istio/examples-bookinfo-reviews-v2:1.15.0\n        imagePullPolicy: IfNotPresent\n        ports:\n        - containerPort: 9080\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: reviews-v3\n  labels:\n    app: reviews\n    version: v3\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: reviews\n      version: v3\n  template:\n    metadata:\n      labels:\n        app: reviews\n        version: v3\n    spec:\n      serviceAccountName: bookinfo-reviews\n      containers:\n      - name: reviews\n        image: docker.io/istio/examples-bookinfo-reviews-v3:1.15.0\n        imagePullPolicy: IfNotPresent\n        ports:\n        - containerPort: 9080\n---\n##################################################################################################\n# Productpage services\n##################################################################################################\napiVersion: v1\nkind: Service\nmetadata:\n  name: productpage\n  labels:\n    app: productpage\n    service: productpage\nspec:\n  ports:\n  - port: 9080\n    name: http\n  selector:\n    app: productpage\n---\napiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: bookinfo-productpage\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: productpage-v1\n  labels:\n    app: productpage\n    version: v1\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: productpage\n      version: v1\n  template:\n    metadata:\n      labels:\n        app: productpage\n        version: v1\n    spec:\n      serviceAccountName: bookinfo-productpage\n      containers:\n      - name: productpage\n        image: docker.io/istio/examples-bookinfo-productpage-v1:1.15.0\n        imagePullPolicy: IfNotPresent\n        ports:\n        - containerPort: 9080\n---\n')),(0,i.kt)("h3",{id:"next-set-up-the-istio-gateway"},(0,i.kt)("a",{parentName:"h3",href:"/how-to-guides/advanced-user-guides/istio-setup-guide/set-up-istio-gateway"},"Next: Set up the Istio Gateway")))}d.isMDXComponent=!0}}]);