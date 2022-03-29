+++
title = "Dapper Build tool: consistent builds with docker"
date = 2022-03-29T13:47:55-07:00
tags = ["docker", "containers", "immutability", "programming", "go"]
+++

This articles shows how to use the [dapper](https://github.com/rancher/dapper) build tool from Rancher Labs.

The basic idea is to use Docker containers, copy&ast; your source files into the container environment, then compile, 
then copy the build artefacts out.

(&ast; on Linux you can also use the mount mode to avoid copying the files.)

How to use it: you start by installing [Go](https://golang.org) so you can compile Dapper. I know, I know, but 
if you will humor me, I will convince you that Go is the last programming language compiler you will need to 
install on your host.

1. Install Go: https://go.dev/dl/
2. Build Dapper: `go install github.com/rancher/dapper@latest`
3. Make a Dockerfile.dapper

The `Dockerfile.dapper` is a regular Dockerfile. As an example, create one with your favorite programming language 
you don't have installed, let's say it's OCaml.

```Dockerfile
FROM ocaml/opam:debian-10-ocaml-4.12
```

Then you can open a shell in that container by running `dapper -s`. Or if 
you wanted to run it as a one-liner, try running the opam compiler:

```shell
% dapper opam --version
...(docker build output)...
2.0.10
```

{{<favicon "nixos.org" "https://nixos.org/favicon.png">}}

Doesn't [Nix](https://nixos.org) do something like that? Why yes it does, 
although it takes some getting used to the functional programming language used to define 
nix packages. An obvious advantage of the dapper approach is familiarity of shell scripts 
and Dockerfiles. If your team is familiar with these things then Dapper will be a good fit 
for acheiving reproducible builds.

I haven't done enough of a deep dive on nix to have much of an opinion on 
how it compares to the dapper approach. If you are interested, post some comments below and 
I'll do comparison of Nix and Dapper.

On the Go language, one of it's virtues is producing self-contained single binary executable files.
Programs written in Go can be a single file you download and run. It's great. Also a large and 
quickly growing number of programs are written in [Go](https://golang.org): 
- Docker (Linux processes running in control groups with isolated, immutable layered filesystems)
- Kubernetes (Control system for clusters of machines running docker containers)
- [Rancher](https://github.com/rancher/rancher) (Kubernetes cluster manager)
- [Harvester](https://github.com/harvester/harvester) (Hyperconverged infrastructure)
- [etcd](https://github.com/etcd-io/etcd) (Distributed high-availability key-value store)
- [osin](https://github.com/openshift/osin) (OAuth2 server library)

Go binaries also don't need a virtual machine (like node/python/java/...etc). So Go programs can be 
really fast, compared to scripting languages like Python.

So, installing Go means you can build Dapper, and Dapper lets you achieve reproducible builds so 
you can say "works on my machine" and it will really work on another person's machine.
