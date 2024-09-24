| 操作 | Rancher 启动的 Kubernetes 集群 | EKS、GKE 和 AKS 集群<sup>1</sup> | 其他托管的 Kubernetes 集群 | 非 EKS 或 GKE 注册集群 |
| --- | --- | ---| ---|----|
| [使用 kubectl 和 kubeconfig 文件来访问集群](../cluster-admin/manage-clusters/access-clusters/use-kubectl-and-kubeconfig.md) | ✓ | ✓ | ✓ | ✓ |
| [管理集群成员](../cluster-admin/manage-clusters/access-clusters/add-users-to-clusters.md) | ✓ | ✓ | ✓ | ✓ |
| [编辑和升级集群](../reference-guides/cluster-configuration/cluster-configuration.md) | ✓ | ✓ | ✓ | ✓<sup>2</sup> |
| [管理节点](../cluster-admin/manage-clusters/nodes-and-node-pools.md) | ✓ | ✓ | ✓ | ✓<sup>3</sup> |
| [管理持久卷和存储类](../cluster-admin/manage-clusters/persistent-storage/manage-persistent-storage.md) | ✓ | ✓ | ✓ | ✓ |
| [管理项目、命名空间和工作负载](../cluster-admin/manage-clusters/projects-and-namespaces.md) | ✓ | ✓ | ✓ | ✓ |
| [使用应用目录](../cluster-admin/helm-charts-in-rancher/helm-charts-in-rancher.md) | ✓ | ✓ | ✓ | ✓ |
| 配置工具（[Alerts、Notifiers、Monitoring](../observability/monitoring-and-dashboards/monitoring-and-alerting.md)、[Logging](../observability/logging/logging.md) 和 [Istio](../observability/istio/istio.md)） | ✓ | ✓ | ✓ | ✓ |
| [运行安全扫描](../security/cis-scans/how-to.md) | ✓ | ✓ | ✓ | ✓ |
| [轮换证书](../cluster-admin/manage-clusters/rotate-certificates.md) | ✓ | ✓ |  | |
| [备份](../cluster-admin/backups-and-restore/backups.md)和[恢复](../cluster-admin/backups-and-restore/restore.md) Rancher 启动的集群 | ✓ | ✓ |  | ✓<sup>4</sup> |
| [在 Rancher 无法访问集群时清理 Kubernetes 组件](../cluster-admin/manage-clusters/clean-cluster-nodes.md) | ✓ | | | |
| [配置 Pod 安全策略](../security/psp/add.md) | ✓ | ✓ |   |

1. 注册的 EKS、GKE 和 AKS 集群与从 Rancher UI 创建的 EKS、GKE 和 AKS 集群的可用选项一致。不同之处是，从 Rancher UI 中删除已注册的集群后，集群不会被销毁。

2. 无法编辑已注册的集群的集群配置选项（[K3s 和 RKE2 集群](../cluster-deployment/register-existing-clusters.md)除外）。

3. Rancher UI 为已注册的集群节点提供了封锁、清空和编辑节点的功能。

4. 对于使用 etcd 作为 controlplane 的注册集群，必须在 Rancher UI 之外手动创建快照以用于备份和恢复。
