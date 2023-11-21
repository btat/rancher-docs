---
title: Managing HPAs with kubectl
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/manage-hpas-with-kubectl"/>
</head>

This section describes HPA management with `kubectl`. This document has instructions for how to:

- Create an HPA
- Get information on HPAs
- Delete an HPA
- Configure your HPAs to scale with CPU or memory utilization
- Configure your HPAs to scale using custom metrics, if you use a third-party tool such as Prometheus for metrics


You can create, view, and delete HPAs from the Rancher UI. You can also configure them to scale based on CPU or memory usage from the Rancher UI. For more information, refer to [Managing HPAs with the Rancher UI](manage-hpas-with-ui.md). For scaling HPAs based on other metrics than CPU or memory, you still need `kubectl`.

##### Basic kubectl Command for Managing HPAs

If you have an HPA manifest file, you can create, manage, and delete HPAs using `kubectl`:

- Creating HPA

  - With manifest: `kubectl create -f <HPA_MANIFEST>`

  - Without manifest (Just support CPU): `kubectl autoscale deployment hello-world --min=2 --max=5 --cpu-percent=50`

- Getting HPA info

  - Basic: `kubectl get hpa hello-world`

  - Detailed description: `kubectl describe hpa hello-world`

- Deleting HPA

  - `kubectl delete hpa hello-world`

##### HPA Manifest Definition Example

The HPA manifest is the config file used for managing an HPA with `kubectl`.

The following snippet demonstrates use of different directives in an HPA manifest. See the list below the sample to understand the purpose of each directive.

```yml
apiVersion: autoscaling/v2beta1
kind: HorizontalPodAutoscaler
metadata:
  name: hello-world
spec:
  scaleTargetRef:
    apiVersion: extensions/v1beta1
    kind: Deployment
    name: hello-world
  minReplicas: 1
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      targetAverageUtilization: 50
  - type: Resource
    resource:
      name: memory
      targetAverageValue: 100Mi
```


Directive | Description
---------|----------|
 `apiVersion: autoscaling/v2beta1` | The version of the Kubernetes `autoscaling` API group in use. This example manifest uses the beta version, so scaling by CPU and memory is enabled. |
 `name: hello-world` | Indicates that HPA is performing autoscaling for the `hello-word` deployment. |
 `minReplicas: 1` | Indicates that the minimum number of replicas running can't go below 1. |
 `maxReplicas: 10`  | Indicates the maximum number of replicas in the deployment can't go above 10.
 `targetAverageUtilization: 50` |  Indicates the deployment will scale pods up when the average running pod uses more than 50% of its requested CPU.
 `targetAverageValue: 100Mi`  |  Indicates the deployment will scale pods up when the average running pod uses more that 100Mi of memory.
<br/>

##### Configuring HPA to Scale Using Resource Metrics (CPU and Memory)

Clusters created in Rancher v2.0.7 and higher have all the requirements needed (metrics-server and Kubernetes cluster configuration) to use Horizontal Pod Autoscaler.

Run the following commands to check if metrics are available in your installation:

```
$ kubectl top nodes
NAME                              CPU(cores)   CPU%      MEMORY(bytes)   MEMORY%
node-controlplane   196m         9%        1623Mi          42%
node-etcd           80m          4%        1090Mi          28%
node-worker         64m          3%        1146Mi          29%
$ kubectl -n kube-system top pods
NAME                                   CPU(cores)   MEMORY(bytes)
canal-pgldr                            18m          46Mi
canal-vhkgr                            20m          45Mi
canal-x5q5v                            17m          37Mi
canal-xknnz                            20m          37Mi
kube-dns-7588d5b5f5-298j2              0m           22Mi
kube-dns-autoscaler-5db9bbb766-t24hw   0m           5Mi
metrics-server-97bc649d5-jxrlt         0m           12Mi
$ kubectl -n kube-system logs -l k8s-app=metrics-server
I1002 12:55:32.172841       1 heapster.go:71] /metrics-server --source=kubernetes.summary_api:https://kubernetes.default.svc?kubeletHttps=true&kubeletPort=10250&useServiceAccount=true&insecure=true
I1002 12:55:32.172994       1 heapster.go:72] Metrics Server version v0.2.1
I1002 12:55:32.173378       1 configs.go:61] Using Kubernetes client with master "https://kubernetes.default.svc" and version
I1002 12:55:32.173401       1 configs.go:62] Using kubelet port 10250
I1002 12:55:32.173946       1 heapster.go:128] Starting with Metric Sink
I1002 12:55:32.592703       1 serving.go:308] Generated self-signed cert (apiserver.local.config/certificates/apiserver.crt, apiserver.local.config/certificates/apiserver.key)
I1002 12:55:32.925630       1 heapster.go:101] Starting Heapster API server...
[restful] 2018/10/02 12:55:32 log.go:33: [restful/swagger] listing is available at https:///swaggerapi
[restful] 2018/10/02 12:55:32 log.go:33: [restful/swagger] https:///swaggerui/ is mapped to folder /swagger-ui/
I1002 12:55:32.928597       1 serve.go:85] Serving securely on 0.0.0.0:443
```
