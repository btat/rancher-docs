"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[98478],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(a),h=r,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||i;return a?n.createElement(m,o(o({ref:t},u),{},{components:a})):n.createElement(m,o({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},96145:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],l={title:"Creating a vSphere Virtual Machine Template",weight:4},s=void 0,c={unversionedId:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/create-a-vm-template",id:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/create-a-vm-template",title:"Creating a vSphere Virtual Machine Template",description:"Creating virtual machines in a repeatable and reliable fashion can often be difficult. VMware vSphere offers the ability to build one VM that can then be converted to a template. The template can then be used to create identically configured VMs. Rancher leverages this capability within node pools to create identical RKE1 and RKE2 nodes.",source:"@site/docs/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/create-a-vm-template.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere",slug:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/create-a-vm-template",permalink:"/rancher-docs/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/create-a-vm-template",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/create-a-vm-template.md",tags:[],version:"current",lastUpdatedAt:1660752881,formattedLastUpdatedAt:"8/17/2022",frontMatter:{title:"Creating a vSphere Virtual Machine Template",weight:4},sidebar:"tutorialSidebar",previous:{title:"Creating Credentials in the vSphere Console",permalink:"/rancher-docs/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/create-credentials"},next:{title:"Creating a Nutanix AOS Cluster",permalink:"/rancher-docs/pages-for-subheaders/nutanix"}},u={},p=[{value:"Linux Dependencies",id:"linux-dependencies",level:2},{value:"Windows Dependencies",id:"windows-dependencies",level:2},{value:"Manual Creation",id:"manual-creation",level:2},{value:"Alternatives to Manual Creation",id:"alternatives-to-manual-creation",level:2},{value:"Linux Preparation",id:"linux-preparation",level:2},{value:"Windows Preparation",id:"windows-preparation",level:2}],d={toc:p};function h(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Creating virtual machines in a repeatable and reliable fashion can often be difficult. VMware vSphere offers the ability to build one VM that can then be converted to a template. The template can then be used to create identically configured VMs. Rancher leverages this capability within node pools to create identical RKE1 and RKE2 nodes."),(0,i.kt)("p",null,"In order to leverage the template to create new VMs, Rancher has some ",(0,i.kt)("a",{parentName:"p",href:"#requirements"},"specific requirements")," that the VM must have pre-installed. After you configure the VM with these requirements, you will next need to ",(0,i.kt)("a",{parentName:"p",href:"#preparing-your-vm"},"prepare the VM")," before ",(0,i.kt)("a",{parentName:"p",href:"#creating-a-template"},"creating the template"),". Finally, once preparation is complete, the VM can be ",(0,i.kt)("a",{parentName:"p",href:"#converting-to-a-template"},"converted to a template")," and ",(0,i.kt)("a",{parentName:"p",href:"#moving-to-a-content-library"},"moved into a content library"),", ready for Rancher node pool usage."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#requirements"},"Requirements")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#creating-a-template"},"Creating a Template")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#preparing-your-vm"},"Preparing Your VM")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#converting-to-a-template"},"Converting to a Template")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#moving-to-a-content-library"},"Moving to a content library")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#other-resources"},"Other Resources"))),(0,i.kt)("h1",{id:"requirements"},"Requirements"),(0,i.kt)("p",null,"There is specific tooling required for both Linux and Windows VMs to be usable by the vSphere node driver. The most critical dependency is ",(0,i.kt)("a",{parentName:"p",href:"https://cloud-init.io/"},"cloud-init")," for Linux and ",(0,i.kt)("a",{parentName:"p",href:"https://cloudbase.it/cloudbase-init/"},"cloudbase-init")," for Windows. Both of these are used for provisioning the VMs by configuring the hostname and by setting up the SSH access and the default Rancher user. Users can add additional content to these as desired if other configuration is needed. In addition, other requirements are listed below for reference."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you have any specific firewall rules or configuration, you will need to add this to the VM before creating a template."))),(0,i.kt)("h2",{id:"linux-dependencies"},"Linux Dependencies"),(0,i.kt)("p",null,"The packages that need to be installed on the template are listed below. These will have slightly different names based on distribution; some distributions ship these by default, for example."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"curl "),(0,i.kt)("li",{parentName:"ul"},"wget"),(0,i.kt)("li",{parentName:"ul"},"git"),(0,i.kt)("li",{parentName:"ul"},"net-tools"),(0,i.kt)("li",{parentName:"ul"},"unzip"),(0,i.kt)("li",{parentName:"ul"},"apparmor-parser"),(0,i.kt)("li",{parentName:"ul"},"ca-certificates"),(0,i.kt)("li",{parentName:"ul"},"cloud-init"),(0,i.kt)("li",{parentName:"ul"},"cloud-guest-utils"),(0,i.kt)("li",{parentName:"ul"},"cloud-image-utils"),(0,i.kt)("li",{parentName:"ul"},"growpart"),(0,i.kt)("li",{parentName:"ul"},"cloud-initramfs-growroot"),(0,i.kt)("li",{parentName:"ul"},"open-iscsi"),(0,i.kt)("li",{parentName:"ul"},"openssh-server"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.vmware.com/en/VMware-Tools/11.3.0/com.vmware.vsphere.vmwaretools.doc/GUID-8B6EA5B7-453B-48AA-92E5-DB7F061341D1.html"},"open-vm-tools"))),(0,i.kt)("h2",{id:"windows-dependencies"},"Windows Dependencies"),(0,i.kt)("p",null,"The list of packages that need to be installed on the template is as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Windows Container Feature"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cloudbase.it/cloudbase-init/#download"},"cloudbase-init")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/virtualization/windowscontainers/quick-start/set-up-environment?tabs=Windows-Server#install-docker"},"Docker EE")," - RKE1 Only")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"About the configuration for Windows templates varies between RKE1 and RKE2:")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"RKE1 leverages Docker, so any RKE1 templates need to have Docker EE pre-installed as well"),(0,i.kt)("li",{parentName:"ul"},"RKE2 does not require Docker EE, and thus it does not need to be installed")))),(0,i.kt)("h1",{id:"creating-a-template"},"Creating a Template"),(0,i.kt)("p",null,"You may either manually create your VM or you can utilize ",(0,i.kt)("a",{parentName:"p",href:"#alternatives-to-manual-creation"},"other alternatives")," to create your VM."),(0,i.kt)("h2",{id:"manual-creation"},"Manual Creation"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Manually create your VM by following ",(0,i.kt)("a",{parentName:"li",href:"https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.vm_admin.doc/GUID-AE8AFBF1-75D1-4172-988C-378C35C9FAF2.html"},"these instructions")," from VMware. Once you have a VM running, you can manually install the dependencies listed above to configure the VM correctly for the vSphere node driver."),(0,i.kt)("li",{parentName:"ol"},"Customize as needed based on your specific environment and requirements."),(0,i.kt)("li",{parentName:"ol"},"Proceed with the final preparation before creating your template.")),(0,i.kt)("h2",{id:"alternatives-to-manual-creation"},"Alternatives to Manual Creation"),(0,i.kt)("p",null,"Other alternative options to create VMs are listed below:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.vmware.com/powercli"},"VMware PowerCLI")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.packer.io/"},"Packer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://saltproject.io/"},"SaltStack")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.ansible.com/"},"Ansible"))),(0,i.kt)("p",null,"Packer is a frequently-used alternative. Refer to this ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/vmware-samples/packer-examples-for-vsphere"},"reference")," for examples of its usage with vSphere."),(0,i.kt)("h1",{id:"preparing-your-vm"},"Preparing Your VM"),(0,i.kt)("p",null,"After creating a VM with all the required dependencies (and any additional required items), you must perform the most critical step next: preparing the VM to be turned into a template. This preparation will reset critical data such as the VM hostname, IPs, etc., to prevent that information from being brought into a new VM. If you fail to perform this step, you could create a VM with the same hostname, IP address, etc."),(0,i.kt)("p",null,"Note that these preparatory steps differ between Linux and Windows."),(0,i.kt)("h2",{id:"linux-preparation"},"Linux Preparation"),(0,i.kt)("p",null,"The commands below will reset your VM in Linux:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Bash"},"# Cleaning logs.\nif [ -f /var/log/audit/audit.log ]; then\n  cat /dev/null > /var/log/audit/audit.log\nfi\nif [ -f /var/log/wtmp ]; then\n  cat /dev/null > /var/log/wtmp\nfi\nif [ -f /var/log/lastlog ]; then\n  cat /dev/null > /var/log/lastlog\nfi\n\n# Cleaning udev rules.\nif [ -f /etc/udev/rules.d/70-persistent-net.rules ]; then\n  rm /etc/udev/rules.d/70-persistent-net.rules\nfi\n\n# Cleaning the /tmp directories\nrm -rf /tmp/*\nrm -rf /var/tmp/*\n\n# Cleaning the SSH host keys\nrm -f /etc/ssh/ssh_host_*\n\n# Cleaning the machine-id\ntruncate -s 0 /etc/machine-id\nrm /var/lib/dbus/machine-id\nln -s /etc/machine-id /var/lib/dbus/machine-id\n\n# Cleaning the shell history\nunset HISTFILE\nhistory -cw\necho > ~/.bash_history\nrm -fr /root/.bash_history\n\n# Truncating hostname, hosts, resolv.conf and setting hostname to localhost\ntruncate -s 0 /etc/{hostname,hosts,resolv.conf}\nhostnamectl set-hostname localhost\n\n# Clean cloud-init\ncloud-init clean -s -l\n")),(0,i.kt)("h2",{id:"windows-preparation"},"Windows Preparation"),(0,i.kt)("p",null,"Windows has a utility called ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows-hardware/manufacture/desktop/sysprep--generalize--a-windows-installation"},"sysprep")," that is used to generalize an image and reset the same items listed above for Linux. The command is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-PowerShell"},"sysprep.exe /generalize /shutdown /oobe\n")),(0,i.kt)("h1",{id:"converting-to-a-template"},"Converting to a Template"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Shut down and stop the VM."),(0,i.kt)("li",{parentName:"ol"},"Right-click on the VM in the inventory list and select ",(0,i.kt)("strong",{parentName:"li"},"Template"),"."),(0,i.kt)("li",{parentName:"ol"},"Click on ",(0,i.kt)("strong",{parentName:"li"},"Convert to Template"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," Once the process has completed, a template will be available for use."),(0,i.kt)("p",null,"For additional information on converting a VM to a template, see the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.vm_admin.doc/GUID-5B3737CC-28DB-4334-BD18-6E12011CDC9F.html"},"VMware guide"),"."),(0,i.kt)("h1",{id:"moving-to-a-content-library"},"Moving to a Content library"),(0,i.kt)("p",null,"Rancher has the ability to use templates provided by a content library. Content libraries store and manage content within vSphere, and they also offer the ability to publish and share that content."),(0,i.kt)("p",null,"Below are some helpful links on content libraries:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.vm_admin.doc/GUID-2A0F1C13-7336-45CE-B211-610D39A6E1F4.html"},"Create a content library")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.vm_admin.doc/GUID-AC1545F0-F8BA-4CD2-96EB-21B3DFAA1DC1.html"},"Clone the template to the content library"))),(0,i.kt)("h1",{id:"other-resources"},"Other Resources"),(0,i.kt)("p",null,"Here is a list of additional resources that may be useful:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/manage/hybrid/server/best-practices/vmware-ubuntu-template"},"Tutorial for creating a Linux template")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/manage/hybrid/server/best-practices/vmware-windows-template"},"Tutorial for creating a Windows template"))))}h.isMDXComponent=!0}}]);