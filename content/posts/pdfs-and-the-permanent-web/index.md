+++
title = "PDFs and the Permanent Web"
date = 2022-02-13T23:22:38-08:00
tags = ["long-now", "standards", "protocols", "web"]
+++

I remember reading this article [Deurbanising the web](https://lab6.com/0) from January 2021. It argued that the web had gotten so bad that they wanted to do something drastic, so they converted the web pages on their site to PDF. The badness they were complaining about was familiar, too many ads, too much surveillance. Link rot, infinite scrolls, paywalls, GDPR cookie consent buttons, etc. The reason they chose PDFs?

## Reasons why Lab6 argued PDFs were a good format for web pages

- it's a file
- standard format
- still has media and links
- easy to copy and backup (avoids link rot and lost pages)
- freedom

At first I was skeptical. I love responsive pages that look nice on my phone as well as a desktop. I made this website with a responsive design for that reason. But three things changed my mind, and I think PDFs are a good medium for web pages.

The first thing was [IPFS](https://ipfs.io), the Interplanetary File System. IPFS is a protocol with ambitions to replace the World Wide Web. It combines the peer-to-peer nature of [BitTorrent](https://en.wikipedia.org/wiki/BitTorrent) with the cryptographic certainty of [Git](https://en.wikipedia.org/wiki/git). It aims to solve the problem of link-rot by changing the way web pages are addressed.

## How web pages are currently addressed

If I want to visit `https://plato.stanford.edu/entries/qm-manyworlds/`, here are the steps the browser takes to locate that page:

1. Do a DNS lookup of `plato.stanford.edu`, finding an IP address of `171.67.193.20`
2. Create a TCP socket to `171.67.193.20` 
3. Once the socket is connected, then the browser would send an HTTP Request: `GET /entries/qm-manyworlds/` and _whatever server happens to be at that address will start sending the response_

## How IPFS would prevent link-rot and page drift

IPFS addresses files based on their _content_, not based on _who is serving it_. IPFS uses a cryptographic hash function which takes the content of the page and produces a number as output, called the **hash** of the file. What this means is that if that file is changed, it's hash changes. So the paradigm with IPFS is the requester will get exactly what they asked for, if anyone has a copy of the exact file they are looking for. Anyone can **pin** a file and automatically participate in serving it. This has the effect of scaling up as demand for a file grows. Instead of a surge in interest causing a single web server to get overwhelmed and crash, the surge of interest creates a bunch of new servers which can reduce the load on the server who served the first copy.

The link-rot problem would be solved because the original server can go offline at any time after someone else pins the file. And the page drift problem is solved by the content-addressing. If someone changes the original file, it creates a new hash. The version is baked into the address of the file.

By contrast, the paradigm with WWW is that web servers will send you whatever they damn well please _at that moment_. And if the original link is gone? Go to [archive.org](https://archive.org) and pray that your page was archived. IPFS calls itself the **Permanent Web**.

The IPFS paradigm is more file-centric, and PDFs are better suited to that world. Most web pages have an HTML file, multiple CSS and JS files, external images, etc. All those dependent files would need IPFS hashes of their own. It's possible to compile a webpage into a self-contained html file, with inline CSS, inline JS, base64-encoded inline images, etc. But PDFs are simpler and more familiar as standalone files.

## Back to why I changed my mind

The second thing that changed my mind was [CWEB](/posts/cweb-latex-experiment), the literate programming tool that produces beautiful \\( \TeX \\)-typeset documentation that also generates running `C` code. CWEB forces you to understand the code, and to make your readers understand the code too. The end result is a beautiful [PDF documenting your program](/pdf/lcp-0.4.pdf). Remarkably, CWEB is basically done. The [manual](http://tug.ctan.org/info/knuth/cwebman.pdf) is correct because it was written to also compiled into the running code described by it.

The third thing happened today. My 7 year old son was asking about my polar graph I made in [Imaginary Numbers are Real](/posts/imaginary-numbers-are-real). It had only been 3 years, but I had already accidentally broken the polar graph code. If I had written that post as a literate program, the PDF couldn't be broken in that way. The main limitation with PDF is no responsive formatting on phones, and limited user interactivity. 

## Conclusion

I am not going to convert the whole site to PDF, at least not yet. I am getting rid of dependencies, like xterm.js, but it's still going to be a website. The main thing I am going to do differently is publish more articles and ideas in PDF form. Anything standalone, like a CWEB program, will definitely be a PDF and not HTML.

{{<favicon "ipfs.io" "https://ipfs.io/favicon.ico">}}
{{<favicon "lab6.com" "https://lab6.com/favicon.ico">}}
