+++
title = "Bluesky and the AT Protocol"
date = 2023-04-12T08:54:47-07:00
card = "https://tobilehman.com/posts/bluesky-at-protocol/img/bluesky-profile.jpeg"
tags = ["dns", "protocols", "social-media"]
+++

A new social media platform called Bluesky just launched. It has the look and feel of [Twitter](https://twitter.com), but there's something unique about it. It uses the [AT Protocol](https://atproto.com/guides/overview). This is different from Mastodon, which is an open source Ruby on Rails app that provides some "instance to instance federation features". 

# How Mastodon federation works, and why AT is different

Anyone who wants to make a Mastodon instance just needs to check out a copy of [the code](https://github.com/mastodon/mastodon) and then deploy it with their own URL. For example, there's a Math-themed on called [Mathstodon.xyz](https://mathstodon.xyz/about). Then your username is this email address wearing a silly hat, mine is [@tlehman@mathstodon.xyz](https://mathstodon.xyz/@tlehman)

If you boot up a new Mastodon instance, it starts out as a silo, meaning it doesn't federate with any others by default. Then you manually link to another instance and start building out a network: So users post on the instance, and instances federate into the network below: ![](https://mastodon.help/imgs/federation-02.svg). 

Then as the blue cluster of instances start interacting wiht the new red instance, the network gets more densely interconnected: 

![](https://mastodon.help/imgs/federation-03.svg)

So that's Mastodon. The app is slow, it's awkward for new users, because you have to first choose an instance, and then you have to deal with a slow, poorly maintained code, and your username has this awkward connection to the instance. It won't replace Twitter, but it's a neat project.

How is Bluesky different? For starters, it's backed by Jack Dorsey, the co-founder of Twitter, and it uses a new protocol call AT. Twitter gives everyone a username that is like `@jack`, but it's bound to twitter.com. Mastodon has this awkward `@jack@mastodon.social` which is like an email address wearing a silly hat. The AT protocol uses DNS, the Domain Name System, which is what URLs use. What's brilliant about this is that domain names are already global! They can be resolved in a browser or a command line tool or an app. DNS exists already and is a great protocol to build identity on top of. The [OpenID Project](https://openid.net/) tried to do this but it never stuck. Given how much most of us use social media though, the AT protocol's answer to the identity problem might succeed where OpenID failed. 

The image below shows how the AT protocol addresses users, as an example, `@tobilehman.com` is live on Bluesky, and you can send AT protocol messages to me that way: 
![](https://atproto.com/img/identities.jpg)

What this means is that a client like [Bluesky](https://bsky.app) can tell that I control the domain tobilehman.com, because they can give me a unique value, and if I can write that unique value into tobilehman.com's DNS records, then I proved I own it. 

For everyone without a domain name, they get a subdomain of bsky.social. The awesome thing about DNS is that it's global and recursive. So you can arbitrarily create subdomains of a domain you own.

# Why migrating from Bluesky to a new AT client would be easier than switching Mastodon instances

The last point I wanted to make is about moving. If you ever wanted to move between Mastodon instances, you have to both change your name, and get the permission of the instance owner. But with Bluesky you can set up your own domain first (without permission from Bluesky), and then you can just move to another client, if you wanted to. Your domain is yours, and the AT protocol is open.

# The future of social media

I think that a good open protocol is always better than an application-level service. This is how email works, and it's how DNS/URLs and the web work. Social media should be built on top of a protocol that has identity as a first-class citizen. Instead of using OAuth to authenticate by allowing Google to vouch for you, the protocol should let you vouch for yourself. The AT protocol looks like a promising attempt to do this, and so far Bluesky has pretty excellent vibes. 

{{<img "img/bluesky-name.jpeg">}}

{{<favicon "atproto.com" "https://atproto.com/favicon-32x32.png">}}
{{<favicon "openid.net" "https://openid.net/images/logo/openid-icon-100x100.png">}}
{{<favicon "bsky.app" "https://bsky.app/img/favicon-32x32.png">}}