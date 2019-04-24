+++
title = "The Dream of the 90s is alive in WebAssembly"
date = 2019-04-23T19:59:57-07:00
categories = ["wasm", "history"]
draft = false
+++

The year is 1996, Bill Clinton is president, the World Wide Web is 7 years old, and 
Sun Microsystems releases Java 1.0.


{{<img "img/1995.png">}}

Sun Microsystems markets Java to the world as the ultimate in software portability, so that programmers
can 

> Write Once, Run Everywhere.

Assuming, of course, that you have first downloaded the Java Runtime, and enabled the Java plugin in your browser.

The dream is that Java will enable people to create portable programs, 
so that a person with a web browser could download a new application without having to wait for a 
CD to arrive in the mail.

This dream never really came to fruition at a large scale, one big bottleneck was internet speeds. In 1996, average 
modems were about 28.8Kbps to 33.6Kbps, which meant that it would take at least 7 hours to download a single 
CD's worth of information.

Around the same time Sun made Java, Netscape made a slower scripting language for the web called JavaScript, which was 
so named because Netscape wanted to capitalize on all the Java hype.

In 1997, JavaScript was standardized through the Ecma International standards organization, this made it possible for other vendors to make their own JavaScript interpreters, and ensure that they worked just like Netscape's.

Next year in 1998, a little startup called Google wrote some of their search engine code in Java, and continued to 
write Java code as it grew from a tiny dorm room startup to one of the largest companies on Earth. We will come back to Google.

{{<img "img/google-1998.png">}}

By 1999, web developers started building applications using JavaScript, using a technique called [AJAX](https://en.wikipedia.org/wiki/Ajax_(programming)), this was the beginning of JavaScript becoming a serious language for software engineering.

In 2005 I started working as a programmer at 17, and I remember how cool AJAX was, but it was still slow compared to writing 
native applications in C++, Java or C#. Around that time I started reading Jeff Atwood's blog [Coding Horror](https://blog.codinghorror.com/).

In 2007, Jeff Atwood stated **Atwood's Law**:

> any application that _can_ be written in JavaScript, _will_ eventually be written in JavaScript.

At that point in time, the main browsers were Internet Explorer and Mozilla Firefox, and JavaScript was still slow, but computers 
and connection speeds kept increasing, and the practice of building AJAX applications kept being refined.

https://blog.codinghorror.com/the-principle-of-least-power/

Next year, in 2008, something exciting happened, well, two exciting things happened:

1. Google releases the Chrome browser
2. Obama is elected

Chrome is so exciting because it has a JavaScript interpreter called V8 that makes JavaScript run significantly faster. V8 is 
so effective that [node.js](https://nodejs.org/en/) uses it to run JavaScript code outside the browser. 

In 2010, Oracle, the overpriced database company, buys Sun Microsystems, so they now own Java. They proceed to sue Google over their use of Java. The [court case](https://en.wikipedia.org/wiki/Oracle_America,_Inc._v._Google,_Inc.) has bounced between Google and Oracle, and might be settled by the Supreme Court in the future. At issue is whether APIs can be copyrighted. If you don't know what an API is, think of it like a user interface, where the user is a computer.

Meanwhile, Java still kind of sucks to use, not least because Oracle is feeling litiguous about their intellectual property.

2013 rolls around and [asm.js](https://en.wikipedia.org/wiki/Asm.js) is released, it is a subset of JavaScript that is 
_really fast_, and is designed to be a "target of compilers", which means you don't write it directly, you write code in a better 
language, and then the compiler converts your program into asm.js code, so it can be run efficiently in a browser. As soon as this
starts working, some really smart people compile [Quake](https://github.com/inolen/quakejs) so it runs in the browser!

By 2015, [wasm (WebAssembly)](https://webassembly.org/) is announced, it is to be an open standard compiler target that runs in a web browser. What makes wasm better than asm.js is that it has a binary format, instead of a text-encoded one. This means it can be more compact, and it doesn't need to be parsed by the browser that downloads it.

Finally, today, in 2019, Mozilla announces an effort to standardize wasi (WebAssembly System Interface), which would allow wasm binaries to be run outside the browser, similar to compiled Java programs running on the JVM, or in an applet in the browser. This is the original Dream of the 90's, applications that can be written once, and run anywhere. You should definitely take the time to check out Mozilla's [wasi explainer](https://hacks.mozilla.org/2019/03/standardizing-wasi-a-webassembly-system-interface/), there are lots of great illustrations of what problems wasi solves, and how it solves them. 

I'm optimistic that the dream will come true this time, because wasm is an open standard, and we have learned a lot since 1996, we can do it this time.

