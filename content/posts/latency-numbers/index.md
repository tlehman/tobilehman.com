+++
title = "Latency Numbers Every Programmer Should Know"
date = 2022-02-28T16:28:45-08:00
tags = ["programming", "go", "time"]
+++

There's an indispensible file called [Latency Numbers Every Programmer Should Know](https://gist.github.com/jboner/2841832), originally by 
Jeff Dean of Google. I use a [Roam Research](http://roamresearch.com) plugin to do spaced repetition and memorize these numbers. But memorizing them is not good enough, I should also measure these numbers and see how close the values are in practice.

I created a Repl in [Go](https://golang.org) to directly measure these numbers. I started with mutex lock/unlock. Locally, I get about 19ns, but the repl gives me between 12-14ns.

Try (or fork) the repl [here](https://replit.com/@tlehman/LatencyNumbersEveryProgrammerShouldKnow)

{{<favicon "golang.org" "https://golang.org/favicon.ico">}}
{{<favicon "replit.com" "https://replit.com/public/icons/icon-rounded-192x192.png">}}
{{<favicon "roamresearch.com" "https://roamresearch.com/favicon.ico">}}
