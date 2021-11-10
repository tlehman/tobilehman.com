+++
title = "History of Domain Names"
date = 2013-10-06T20:09:01-08:00
tags = ["history", "internet"]
+++

In trying to understand DNS better, I stumbled upon this little bit of history in RFC 1034:

> RFC 1034 Domain Concepts and Facilities November 1987
> 
> 2.1. The history of domain names
> 
> The impetus for the development of the domain system was growth in the Internet:
Host name to address mappings were maintained by the Network Information Center (NIC) in a single file (HOSTS.TXT) which was FTPed by all hosts [RFC-952, RFC-953]. The total network bandwidth consumed in distributing a new version by this scheme is proportional to the square of the number of hosts in the network, and even when multiple levels of FTP are used, the outgoing FTP load on the NIC host is considerable. Explosive growth in the number of hosts didn’t bode well for the future.
That is, there used to be a single file that mapped hostnames to IP addresses, and everyone on the network would fetch that file over ftp to stay up to date with the network.

To explain the quadratic growth (proportional to the square of the number of hosts), suppose there are N hosts on the network, then for each change that is made in a hostname, N hosts have to download a new copy of the file. That means that if each host in the network makes a change, then for each of those changes, all N of the hosts have to download a new copy, so N×N total FTP GETs.

