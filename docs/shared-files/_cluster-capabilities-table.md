| Action | Rancher Launched Kubernetes Clusters |  EKS, GKE and AKS Clusters<sup>1</sup> | Other Hosted Kubernetes Clusters | Non-EKS or GKE Registered Clusters |
| --- | --- | ---| ---|----|
| [Using kubectl and a kubeconfig file to Access a Cluster](../../new_docs/cluster-administration/manage-clusters/access-clusters/use-kubectl-and-kubeconfig.md) | ✓ | ✓ | ✓ | ✓ |
| [Managing Cluster Members](../../new_docs/cluster-administration/manage-clusters/access-clusters/add-users-to-clusters.md) | ✓ | ✓ | ✓ | ✓ |
| [Editing and Upgrading Clusters](../reference-guides/cluster-configuration/cluster-configuration.md) | ✓ | ✓ | ✓ | ✓<sup>2</sup> |
| [Managing Nodes](../../new_docs/cluster-administration/manage-clusters/nodes-and-node-pools.md) | ✓ | ✓ | ✓ | ✓<sup>3</sup> |
| [Managing Persistent Volumes and Storage Classes](../../new_docs/cluster-administration/manage-clusters/create-kubernetes-persistent-storage/create-kubernetes-persistent-storage.md) | ✓ | ✓ | ✓ | ✓ |
| [Managing Projects, Namespaces and Workloads](../../new_docs/cluster-administration/manage-clusters/projects-and-namespaces.md) | ✓ | ✓ | ✓ | ✓ |
| [Using App Catalogs](../../new_docs/cluster-administration/helm-charts-in-rancher/helm-charts-in-rancher.md) | ✓ | ✓ | ✓ | ✓ |
| Configuring Tools ([Alerts, Notifiers, Monitoring](../../new_docs/observability/monitoring-and-dashboards/monitoring-and-alerting.md), [Logging](../../new_docs/observability/logging/logging.md), [Istio](../../new_docs/observability/istio/istio.md)) | ✓ | ✓ | ✓ | ✓ |
| [Running Security Scans](../how-to-guides/advanced-user-guides/cis-scan-guides/cis-scan-guides.md) | ✓ | ✓ | ✓ | ✓ |
| [Ability to rotate certificates](../../new_docs/cluster-administration/manage-clusters/rotate-certificates.md) | ✓ | ✓  |  | |
| Ability to [backup](../../new_docs/rancher-administration/backup-restore-and-disaster-recovery/back-up-rancher-launched-kubernetes-clusters.md) and [restore](../../new_docs/rancher-administration/backup-restore-and-disaster-recovery/restore-rancher-launched-kubernetes-clusters-from-backup.md) Rancher-launched clusters | ✓ | ✓ |  | ✓<sup>4</sup> |
| [Cleaning Kubernetes components when clusters are no longer reachable from Rancher](../../new_docs/cluster-administration/manage-clusters/clean-cluster-nodes.md) | ✓ | | | |
| [Configuring Pod Security Policies](../../new_docs/cluster-administration/manage-clusters/add-a-pod-security-policy.md) | ✓ | ✓ |  ||

1. Registered EKS, GKE and AKS clusters have the same options available as EKS, GKE and AKS clusters created from the Rancher UI. The  difference is that when a registered cluster is deleted from the Rancher UI, it is not destroyed.

2. Cluster configuration options can't be edited for registered clusters, except for [K3s and RKE2 clusters.](../../new_docs/cluster-administration/kubernetes-clusters-in-rancher-setup/register-existing-clusters.md)

3. For registered cluster nodes, the Rancher UI exposes the ability to cordon, drain, and edit the node.

4. For registered clusters using etcd as a control plane, snapshots must be taken manually outside of the Rancher UI to use for backup and recovery.
