+++
title = "K3s Cluster on Raspberry Pis"
date = 2022-07-28T12:34:44-07:00
tags = ["raspberry-pi", "k8s", "kubernetes"]
card = "https://tobilehman.com/posts/k3s-cluster-pis/img/pi-cluster.png"
+++

I wanted to build a HA (High Availability) [Kubernetes](https://kubernetes.io) 
cluster out of [Raspberry Pi](https://raspberrypi.org)s. I succeeded in doing so, 
here's how to make one of these:

{{<img "img/pi-cluster.png">}}

# List of hardware

- 3 [Raspberry Pi](https://raspberrypi.org) 3 Model B's 
- 1 [TPLink 5 Port 10/100 Mbps Ethernet Switch](https://www.amazon.com/gp/product/B000FNFSPY) (I had this laying around for 6 years and slapped a Kubernetes sticker on it)
- A bunch of short ethernet cables and USB micro cables

# Software

The latest version of k3s (a lightweight kubernetes distribution) supports an embedded etcd instance, instead of previous versions that depended on an external MySQL database. This is nice, because it simplifies the setup of an HA cluster. HA just means that there are at least 3 nodes, with at least 2 that are control-plane nodes

## How to install k3s

It's wicked easy. I used the standard Raspbian distribution on the pis, then named them `pi1`, `pi2` and `pi3`. 

<div class='yellow-note-noscroll'>
NOTE: Set the SECRET_TOKEN environment variable by 
typing <pre>export SECRET_TOKEN=(put your secret token here)</pre> 
Then subsequent commands in this article will work.
</div>

Then I sshed into `pi1` and ran this command:

```sh
curl -sfL https://get.k3s.io | \
  K3S_TOKEN=$SECRET_TOKEN \
  sh -s - server --cluster-init
```

Then when it was done, I ran this on pi1:

```sh
sudo k3s kubectl get nodes
```
which output: 
```
NAME   STATUS   ROLES                       AGE     VERSION
pi1    Ready    control-plane,etcd,master   0m32s   v1.24.3+k3s1
```

What this means is that pi1 is a single-node cluster. Now we need to add the other 
two nodes to the cluster.

Ssh into pi2 and pi3 and run:

```sh
curl -sfL https://get.k3s.io | \
    K3S_TOKEN=$SECRET_TOKEN \
    sh -s - server --server https://pi1:6443
```

Then wait a few minutes. You can ssh back into pi1 and run `sudo k3s kubectl get nodes`. Once it looks like this:


```
NAME   STATUS   ROLES                       AGE   VERSION
pi1    Ready    control-plane,etcd,master   19m   v1.24.3+k3s1
pi2    Ready    control-plane,etcd,master   13m   v1.24.3+k3s1
pi3    Ready    control-plane,etcd,master   10m   v1.24.3+k3s1
```

Then you are all done! You have an HA cluster.

## Getting the kubeconfig to use `kubectl` on machines outside the cluster

Ssh into pi1 and `sudo su` to become root. Then `cat /etc/rancher/k3s/k3s.yaml`, 
then copy that YAML into a local file called pi-cluster.yaml on your laptop or where ever you want 
to access your new cluster from.

Change the `server` field from `https://127.0.0.1:6443` to `https://pi1:6443`

Then you can run 
```sh
kubectl --kubeconfig pi-cluster.yaml get nodes
```

If you see your nodes, then you are ready to start deploying to and configuring your cluster! Otherwise, post some comments, or head over to the [Rancher Slack](https://slack.rancher.io/) to get some help


This k3s cluster is now both lightweight and highly available. That means that if one of the pis goes offline or dies, the other two can compensate without loss of data.
