+++
title = "How to boot over the network using PXE and OpenWRT"
date = 2022-03-25T14:11:54-07:00
tags = ["pxe", "standards", "protocols", "dhcp", "tftp"]
draft = true
+++

If you ever wondered about how computers boot up, then you are in 
good company. I have been installing operating systems and making 
bootable media for about 20 years, but I haven't dug into how the 
boot process really works. At work I have been onboarding to start 
building out the [Harvester HCI](https://harvesterhci.io) back-end.
The first part of getting to know the system has been installing it.
I have booted it in virtual machines, compiled the source code, but 
wanted to exercise the "bare metal" server install mode. 

It's possible to make a bootable USB drive or a DVD and have your 
server boot from that, but modern data centers usually have the 
machines boot over the network using **PXE (the Pre-execution Boot Environment)**, 
PXE is a standard that defines how the firmware of a motherboard should 
request the files it needs to boot. It includes a DHCP client, to obtain 
an IP address, and a basic TFTP (Trivial File Transfer Protocol) server, 
to fetch the files that it needs to boot.


<style>.hw { max-width: 200px }</style>

## Hardware I used
I booted a Dell computer over the network using a router that runs 
[OpenWRT](https://openwrt.org). I stored the files on an external 
hard drive, and plugged the hard drive directly into the router.
I plugged the computer directly into the router using ethernet.

- Dell Precision T7500
	- <div class="hw">{{<img "img/dell.png">}}</div>
- Linksys WRT32X 
	- <div class="hw">{{<img "img/linksys.png">}}</div>
- Western Digital 5TB Elements portable hard drive
	- <div class="hw">{{<img "img/wd.png">}}</div>


NOTE: You can use any computer, or any router that runs [OpenWRT](https://openwrt.org)

