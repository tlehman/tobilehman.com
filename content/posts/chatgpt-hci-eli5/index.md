+++
title = "Asking ChatGPT to explain hyperconverged infrastructure"
date = 2023-02-10T12:15:19-08:00
tags = ["open-source", "llm", "ai", "hyperconverged"]
+++

In my post last year, [Moving to SUSE](/posts/moving-to-suse/) I said I would spend more time explaining what Hyperconverged Infrastructure (HCI) was.

The way I would describe HCI is that it's a way of structuring a data center so that the storage, compute, and networking resources are all bundled into 
the same boxes, and then software abstracts over it, allowing nodes to use resources of other machines.

An example of something that's _not_ HCI is a SAN, or a Storage-Area Network. SANs bundle all the storage into a large cluster of hard drives and controllers, 
and then only focus on storage. Another counterexample is a physical network switch. That's a piece of hardware that only does networking. HCI could hypothetically 
be built on top of a bunch of common PCs or rack servers, and then you can expand the storage by just adding another PC to the cluster. The HCI solution, like Harvester, 
would take the node and then expose the storage and compute on that node as part of the whole cluster's pool of allocatable resources.

Okay, that's HCI in a nutshell. But the last few weeks have been all about ChatGPT and LLMs (Large Language Models). I decided to ask it what HCI is:

- Me: Explain hyperconverged infrastructure like I'm 5
- GPT: Hyperconverged infrastructure is like a big, strong box that helps keep all the pieces of your computer stuff together and working well. Imagine you have a bunch of toys, like blocks, cars, and dolls, and you want to keep them all in one place so you can easily find and play with them. That's what hyperconverged infrastructure does for computers. It puts all the important parts, like the memory, storage, and processing, into one big box so it's easier for the computer to find what it needs and get things done faster. And just like how you can add more toys to your toy box as you get more, you can add more parts to the hyperconverged infrastructure box as you need more computer power.

Not bad for 5, I tried 15 next:

- Me: Explain hyperconverged infrastructure like I'm 15
- GPT: Hyperconverged infrastructure is a type of data center architecture where multiple IT components, such as computing, storage, and networking, are bundled together and managed as a single entity. In other words, instead of having separate systems for storage, computing, and networking, all these components are combined into a single, integrated solution. This makes it easier to manage and maintain the infrastructure, and it can also improve performance and reduce costs compared to a traditional data center setup. Think of it like a video game console, like an Xbox or PlayStation. All the necessary components, like the CPU, GPU, RAM, and storage, are integrated into one compact unit. In the same way, hyperconverged infrastructure integrates multiple IT components into a single, streamlined solution. This allows for greater efficiency, scalability, and ease of use.

Then I started asking it questions about HCI: 

- Me: So can I make hyperconverged infrastructure out of a bunch of common PCs?
- GPT: Yes, in theory, you could build a hyperconverged infrastructure using a group of common PCs, but it would likely not be as efficient or reliable as a commercially-available hyperconverged infrastructure solution. Commercially-available hyperconverged infrastructure solutions are specifically designed and optimized for this purpose, and they often use specialized hardware and software to improve performance, reliability, and manageability. For example, they may use shared storage systems and high-speed networks to ensure data is accessible to all components of the infrastructure, and they may use specialized software to manage and automate tasks such as data protection and resource allocation. Building a hyperconverged infrastructure from scratch using a group of common PCs would require a significant amount of time, expertise, and effort to set up and maintain, and it may not provide the level of performance, reliability, and manageability that you would expect from a commercial solution.
- Me: What about an open source hyperconverged infrastructure solution?
- GPT: Yes, there are open source hyperconverged infrastructure solutions available that you could use to build your own hyperconverged infrastructure. These solutions typically include software that allows you to manage and automate various aspects of the infrastructure, such as storage, computing, and networking. Using an open source hyperconverged infrastructure solution can be a cost-effective way to build your own hyperconverged infrastructure, as the software is often free to use. However, like building a hyperconverged infrastructure using a group of common PCs, using an open source solution requires a significant amount of technical expertise to set up and maintain, and may not provide the same level of performance, reliability, and manageability as a commercially-available hyperconverged infrastructure solution. Examples of open source hyperconverged infrastructure solutions include Kubernetes, OpenStack, and Proxmox. If you are considering using an open source solution, it's important to carefully assess your technical expertise and the resources available to you before making a decision.

I noticed it started naming actual solutions, so I asked it to compare my team's solution to the one it named (boldness emphasis is mine)

- Me: Another example is Harvester, compare Harvester and OpenStack

- GPT: Harvester and OpenStack are both open source software solutions for building and managing hyperconverged infrastructure. However, they have some differences in terms of their features and capabilities. **Harvester is a relatively new open source project** that aims to provide a **simple and easy-to-use solution** for building and managing hyperconverged infrastructure. It **focuses on ease of use and affordability**, making it a good option for small to medium-sized businesses and organizations with limited IT resources.  OpenStack, on the other hand, is a much larger and more established open source project with a broader range of features and capabilities. It is a highly flexible and scalable platform that can be used to build large-scale, enterprise-grade data centers. OpenStack is a good option for large businesses and organizations with extensive IT resources and a need for a more flexible and customizable solution. In terms of differences, **Harvester is designed to be more straightforward and easier to use, while OpenStack is designed to be more flexible and customizable**. Harvester also tends to have a smaller footprint and simpler installation process compared to OpenStack. On the other hand, OpenStack offers a wider range of features and capabilities, including support for a broader range of operating systems, and more advanced networking, storage, and security features. Ultimately, the choice between Harvester and OpenStack will depend on your specific needs and requirements, and it's important to carefully assess your technical expertise and the resources available to you before making a decision.

This is not bad for an LLM (Large Language Model), I was surprised at how well it did. I'm lookging forward to GPT-4 and the next generation of LLMs, these could be extremely useful.
