+++
title = "Moving to SUSE"
date = 2022-03-18T13:13:42-07:00
tags = ["open-source", "history", "hyperconverged", "linux", "k8s", "kubernetes"]
card = "https://tobilehman.com/posts/moving-to-suse/img/suse-9.0.png"
+++

After 3.6 years at Amazon, I've decided to move to another company to work on open source software. The company is [SUSE](https://suse.com), they make a Linux distribution and sell cloud computing services, among other things.

At Amazon I worked on AWS Elemental's Live (video streaming software), a small video encoding [device](https://aws.amazon.com/medialive/features/link/), and the Amazon Scout robotics project. At Scout I built software that controls the robots when autonomy fails, and I worked on safety features and performance optimization of a distributed application that ran on a cluster of servers managed by [AWS Fargate](https://docs.aws.amazon.com/AmazonECS/latest/userguide/what-is-fargate.html).

At SUSE I will be working on the [Harvester HCI](https://harvesterhci.io) project. HCI stands for [Hyperconverged Infrastructure](https://en.wikipedia.org/wiki/Hyper-converged_infrastructure). I will explain more about what this means in my blog as I work on the project and help build this system. The gist is that this is a software control layer for managing multiple clusters of computers. Cloud providers like Amazon Web Services and Microsoft Azure will do this for you for a fee. But if you want to own your hardware and own your availability, then you can manage your own clusters with Harvester.

Another reason SUSE stuck out to me is that the SUSE Linux distribution has special significance for me. In 2003, my uncle's friend heard that I was interested in computers and gave me a linux CD. It was SuSE Linux 9, and it was my first Linux distribution.

In September 1992, Roland Dyroff, Burchild Steinbild, Hubert Mantel, and Thomas Fehr founded the Software and Systems Development Corporation, which became known as S.u.S.E. (in German: Software- und System-Entwicklung). This company was the first to build a business around Linux, which had only been written a year before in 1991, by the college student Linus Torvalds.

When I started using Linux in 2003, it was still pretty flaky and primitive, but it was awesome in a way that MacOS and Windows wasn't. I could hack it, I could tweak it and configure it and make it my own. Also, the SuSE KDE desktop absolutely popped.

{{<img "img/suse-9.0.png">}}

I will post more about Linux, Kubernetes, clusters, distributed systems and hyperconverged infrastructure as I start down the path of doing this all in the open. All my code will be published on [github](https://github.com/harvester/harvester), visible to anyone who cares. I am looking forward to starting on this team, and to working in public to enable people to own their cloud infrastructure.
