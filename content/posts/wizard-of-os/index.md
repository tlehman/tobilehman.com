+++
title = "The Wizard of OS 🌈"
date = 2020-05-29T11:53:29-07:00
tags = ["os", "movies"]
+++

This post was inspired by a tweet, by Swift on Security

<a href="https://twitter.com/SwiftOnSecurity/status/1230606797528064005">
{{<img "img/swiftonsecurity-os.png">}}
</a>

From [Modern Operating Systems](https://www.amazon.com/Modern-Operating-Systems-Andrew-Tanenbaum/dp/013359162X) , after a detailed discussion of all the esoteric details of Floppy Disk programming, Tanenbaum says something similar:

> The program that hides the truth about the hardware from the programmer and presents a nice, simple view of named files that can be read and written is, of course, the operating system.

In the 1939 movie The Wizard of Oz, the seemingly magical world of Oz was lorded over by the "Great and Powerful Wizard of Oz", who turned out to be a regular guy hiding behind a curtain. [Clip from the movie](https://www.youtube.com/watch?v=YWyCCJ6B2WE)

The Wizard was lying about his omnipotence, and was presenting a world that was simpler than the messy reality underneath. In the same way, operating systems do this. They present easy to use UIs and simple APIs, but the reality underneath is a mess of painfully complicated hardware.

### Memory management
When a process is started on a computer it gets it's own memory space that it has total control over. The OS hides the rest of the memory from the new process, so that the process is fooled into thinking it is master of all space. If the process needs more memory, it can make a [system call](https://en.wikipedia.org/wiki/System_call), like `malloc` at which point the operating system will allocate some free memory and give it to the process.
## Process scheduling
Since computers only have a fixed number of CPUs, but there can be more processes than CPU cores, the OS must pause processes and resume others. For example, if my computer has 4 CPU cores, and 5 processes, at least one of them is going to have to be asleep at any one time. The OS uses a scheduling algorithm to decide which processes to run. This fools me into thinking I have 5 simultaneous processes running, instead of 4.

## File systems

File systems seem simple. There is a tree, with a root `/` which has files and subdirectories. On Windows, you have multiple roots like `C:\` and `D:\`

All directories contain files or other directories. All files are contained in a directory.

But it's a lie, the operating system is hiding the maddening complexity of hardware that stores information. When a running program wants to read a file, like `/opt/astronomy/planets.txt` , it makes an `open` system call, then operating system does some magic and returns an object that the program can read from and write to. The `/opt` directory might be on a floppy disk, a CD-ROM, a USB key, a network partition using NFS or SMB, it might even be a program reading random bytes from `/dev/urandom` and exposing a filesystem-like interface. The operating system hides all this from the process. All that process has to do is read and write, and pray that the file is what the programmer expected.

## Conclusion

The operating system is the man behind the curtain. When Dorothy and her friends discovered the truth, they were able to do something they couldn't before. That is part of why it's important for anyone interesting in computing to study operating system fundamentals, it's easy to use an OS, but it's impossible to solve certain problems without understanding the lies it tells you.