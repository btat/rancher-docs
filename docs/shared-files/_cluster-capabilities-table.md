| Action | Rancher Launched Kubernetes Clusters |  EKS, GKE and AKS Clusters<sup>1</sup> | Other Hosted Kubernetes Clusters | Non-EKS or GKE Registered Clusters |
| --- | --- | ---| ---|----|
| [Using kubectl and a kubeconfig file to Access a Cluster](../cluster-admin/manage-clusters/access-clusters/use-kubectl-and-kubeconfig.md) | ✓ | ✓ | ✓ | ✓ |
| [Managing Cluster Members](../cluster-admin/manage-clusters/access-clusters/add-users-to-clusters.md) | ✓ | ✓ | ✓ | ✓ |
| [Editing and Upgrading Clusters](../reference-guides/cluster-configuration/cluster-configuration.md) | ✓ | ✓ | ✓ | ✓<sup>2</sup> |
| [Managing Nodes](../cluster-admin/manage-clusters/nodes-and-node-pools.md) | ✓ | ✓ | ✓ | ✓<sup>3</sup> |
| [Managing Persistent Volumes and Storage Classes](../cluster-admin/manage-clusters/persistent-storage/manage-persistent-storage.md) | ✓ | ✓ | ✓ | ✓ |
| [Managing Projects, Namespaces and Workloads](../cluster-admin/manage-clusters/projects-and-namespaces.md) | ✓ | ✓ | ✓ | ✓ |
| [Using App Catalogs](../cluster-admin/helm-charts-in-rancher/helm-charts-in-rancher.md) | ✓ | ✓ | ✓ | ✓ |
| Configuring Tools ([Alerts, Notifiers, Monitoring](../observability/monitoring-and-dashboards/monitoring-and-alerting.md), [Logging](../observability/logging/logging.md), [Istio](../observability/istio/istio.md)) | ✓ | ✓ | ✓ | ✓ |
| [Running Security Scans](../security/cis-scans/how-to.md) | ✓ | ✓ | ✓ | ✓ |
| [Ability to rotate certificates](../cluster-admin/manage-clusters/rotate-certificates.md) | ✓ | ✓  |  | |
| Ability to [backup](../cluster-admin/backups-and-restore/backups.md) and [restore](../cluster-admin/backups-and-restore/restore.md) Rancher-launched clusters | ✓ | ✓ |  | ✓<sup>4</sup> |
| [Cleaning Kubernetes components when clusters are no longer reachable from Rancher](../cluster-admin/manage-clusters/clean-cluster-nodes.md) | ✓ | | | |
| [Configuring Pod Security Policies](../security/psp/add.md) | ✓ | ✓ |  ||

1. Registered EKS, GKE and AKS clusters have the same options available as EKS, GKE and AKS clusters created from the Rancher UI. The  difference is that when a registered cluster is deleted from the Rancher UI, it is not destroyed.

2. Cluster configuration options can't be edited for registered clusters, except for [K3s and RKE2 clusters.](../cluster-deployment/register-existing-clusters.md)

3. For registered cluster nodes, the Rancher UI exposes the ability to cordon, drain, and edit the node.

4. For registered clusters using etcd as a control plane, snapshots must be taken manually outside of the Rancher UI to use for backup and recovery.
