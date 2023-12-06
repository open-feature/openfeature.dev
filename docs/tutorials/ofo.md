---
sidebar_position: 2
id: ofo
title: Cloud Native Flags with the OpenFeature Operator
---

# Cloud Native Feature-Flagging with the OpenFeature Operator

In the following tutorial, we'll see how to leverage _flagd_ and the OpenFeature Operator to enable cloud-native, self-hosted feature flags in your Kubernetes cluster. [flagd](https://github.com/open-feature/flagd) is a "feature flag daemon with a Unix philosophy".
Put another way, it's a small, self-contained binary that evaluates feature flags, uses standard interfaces, and runs just about anywhere.
It can be deployed in a central location serving multiple clients or embedded into a unit of deployment (such as a pod in Kubernetes).
The [OpenFeature Operator](https://github.com/open-feature/open-feature-operator) is a K8s-flavored solution for easily adding flagd to any relevant workloads.
It parses Kubernetes spec files and adds flagd and associated objects to the workloads based on annotations and custom resource definitions it understands.

## Let's do it

### Prerequisites

- If you don't have access to an existing K8s cluster, you have a few options:
  - [kind](https://kind.sigs.k8s.io/docs/user/quick-start/#installation) is similar to minikube (another solution for running a cluster locally you may be familiar with) but supports more than one node, so it makes for a slightly more realistic experience.
    If using kind, this tutorial provides a 3-node cluster definition with a forwarded containerPort for you (more on that later).
  - [MicroK8s](https://microk8s.io/) and [K3s](https://k3s.io/) are easily installable Kubernetes clusters you can use locally.
    The benefit of these is that they are the basically identical to a production environment.
    Configuration of `MicroK8s` and `K3s` is out of the scope of this tutorial.
- [kubectl](https://kubernetes.io/docs/tasks/tools/)
- [k9s](https://k9scli.io/) (optional, if you'd like to inspect your cluster visually)

### Show me the commands

#### Downloading assets

Download the file defining our demo deployment, service, and CRD, `end-to-end.yaml`:

```shell
curl -sfL curl -sfL https://raw.githubusercontent.com/open-feature/playground/main/config/k8s/end-to-end.yaml > end-to-end.yaml
```

#### Building our cluster

OK, let's get our cluster up and running!
We recommend using `kind` for this demo, but if you already have a K8s cluster, you can skip to [Install cert-manager](#install-cert-manager).

##### Using Kind

Download the cluster definition file, `kind-cluster.yaml`:

<!-- TODO: update this before merge to point to asset in main -->

```shell
curl -sfL curl -sfL https://raw.githubusercontent.com/open-feature/openfeature.dev/main/static/samples/kind-cluster.yaml > kind-cluster.yaml
```

Then, create our cluster using the `kind-cluster.yaml` file:

```shell
kind create cluster --config kind-cluster.yaml
```

This might take a minute or two.

#### Install cert-manager

Great!
Next, because our operator makes use of webhooks, we need some certificate infrastructure in our cluster.
If your cluster already has cert manager, or you're using another solution for certificate management, you can skip to [Create Namespace](#create-namespace).

Install cert-manager, and wait for it to be ready:

```shell
kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.13.2/cert-manager.yaml && \
kubectl wait --timeout=60s --for condition=Available=True deploy --all -n 'cert-manager'
```

#### Create namespace

Next, we need to create a namespace for the operator and our workload:

```shell
kubectl create namespace open-feature-operator-system
```

#### Install OpenFeature operator

And finally, let's install the operator itself:

```shell
kubectl apply -f https://github.com/open-feature/open-feature-operator/releases/download/v0.5.1/release.yaml && \
kubectl wait --timeout=60s --for condition=Available=True deploy --all -n 'open-feature-operator-system'
```

#### Deploy our workload

Now that the operator is ready to go, we can deploy our workload:

```shell
kubectl -n default apply -f end-to-end.yaml && \
kubectl wait --timeout=60s deployment --for condition=Available=True -l 'app=open-feature-demo' -n 'default'
```

If you're using `k9s` or some other means of visualization, your cluster should look something like this:

![k9s](@site/static/img/tutorials/k9s.png)

#### Forward the service (if not using kind)

⚠️ If you're using the [supplied `kind` config](#using-kind), ***you can skip to [Experiment with OpenFeature](#experiment-with-openfeature), this port is already forwarded.***

Forward the app service port:

```shell
kubectl port-forward svc/open-feature-demo-app-service -n default 30000:30000
```

Forward the UI flag evaluation service port:

```shell
kubectl port-forward svc/open-feature-demo-ui-service -n default 30002:30002
```

### Experiment with OpenFeature

Now you should see our fictional app at [http://localhost:30000](http://localhost:30000)

For this demo, we get flag definitions from the custom resource definition you applied to K8s above (`end-to-end.yaml`).
The resource type is `FeatureFlag` and is called `end-to-end` within the `default` namespace.
You can modify the flag values in the `FeatureFlag` and reapply the CRD to see the changes.

This file also contains service and deployment definitions, but these need not be modified as part of this demo.
You may be interested in the `openfeature.dev/*` annotations though, which the OpenFeature operator uses to detect which workloads require flagd.

- `openfeature.dev/enabled` - setting this to `true` make operator to inject flagd as a sidecar
- `openfeature.dev/featureflagsource` - refers to the `FeatureFlagSource` CRD which define flagd configurations, including its feature flag sources

In the given example, there's a `FeatureFlagSource` CRD named `end-to-end`, with configurations to source `FeatureFlag` CRD named `end-to-end` as flag source.
You can lean more about these configurations from [flag source configuration documentation](https://github.com/open-feature/open-feature-operator/blob/main/docs/feature_flag_source.md)

Next, let's get started learning how OpenFeature is helping Fib3r manage this landing page!

The company has been in the process of changing the name of our app, but legal hasn't quite finished the process yet.
Here, we've defined a simple feature flag that can be use to update the name instantly without redeploying our application.
Change the `"defaultVariant"` of the feature flag `new-welcome-message"` to `"on"` in the `featureFlagSpec`, then redeploy the change with:

```shell
kubectl apply -n default -f end-to-end.yaml
```

Great!
Now let's help the design team experiment with new color palette.
Let's change our landing page's color.
Change the `"defaultVariant"` of the `"hex-color"` within the `end-to-end.yaml` file and use `kubectl` to apply the change again.

Flag evaluations can take into account contextual information about the user, application, or action.
The `"fib-algo"` flag returns a different result if our email ends with `"@faas.com"`.

Let's run the fibonacci calculator once as a customer (without being logged in).
Then login (use any email ending in `...@faas.com`) and observe the impact.
This effect is driven by the rule defined in the `flagSpec`.
Feel free to experiment with your own flag values and rules!

### Cleaning up

If you used a kind cluster, you can clean everything up by running:

```shell
kind delete cluster
```
