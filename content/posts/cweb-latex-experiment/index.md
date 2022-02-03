+++
title = "CWEB LaTeX Experiment"
date = 2022-02-03T08:37:07-08:00
tags = ["physics", "tools", "literate-programming", "long-now"]
card = "https://tobilehman.com/posts/cweb-latex-experiment/img/lcp.png"
+++

I have written about [literate programming](/tags/literate-programming) a few times before. The big idea is to elevate documentation above the actual running source code. Source code is meant for humans to read, that's why it has higher-level abstractions and comments. Literate programming flips the roles of comments and source code. The comments come first, and the source code is stripped out and tangled into a compilable form.

I am still not totally sure what to think about it. The `lmt` (literate markdown tangle) tool is nice if you are going to write some markdown with embedded code. `lmt` lets you quickly output a running program from a README.md. It's easy to get started, but sometimes fails silently and adds an extra level of debugging on top of the code it tangles.

In the interest of getting to know literate style programming, I wanted to go back to the original `CWEB` tool that Donald Knuth himself worked on. `CWEB` is a pair of programs `cweave` and `ctangle`, which operate on a source file with a `.w` extension. The `.w` file contains \\( \TeX \\) explaining the code, and the C/C++ source code as well.

{{<img "img/cweave.jpg">}}

(This image taken from http://www.literateprogramming.com/)

I worked on this last night. I started writing a program that implements a classical physics simulation. All the bodies are spherical, rigid, and the only force is gravity.

Here's the woven result: [lcp.pdf](/pdf/lcp-0.1.pdf)

Here's the github repo with the `CWEB` source: [lcp](https://github.com/tlehman/literate-classical-physics)
## The good

Just look at how beautiful it is! TikZ pictures, beautiful math expressions. I just want to look at it.


{{<img "img/lcp.png">}}

## The bad

The [CWEB manual](http://tug.ctan.org/info/knuth/cwebman.pdf) hasn't been updated in 20 years. Also the only reason I was able to put together the `lcp.w` file was that I learned how to work with \\( \TeX \\) and \\( \LaTeX \\) in college.

Further, `CWEB` just outputs \\( \TeX \\), so it takes a little bit of work to get all the cool \\( \LaTeX \\). Fortunately, all this is exquisitely documented, albeit in a document that is 27 years old: [cweb-user.pdf](https://mirrors.concertpass.com/tex-archive/macros/latex/contrib/cweb/cweb-user.pdf)

Currently, I also haven't been able to add more than one major section with all the \\( \LaTeX \\) stuff I'm using, like AMS Fonts and TikZ. The flexibility of `CWEB` should be possible with \\( \LaTeX \\), but I'm just not sure how to structure it. If you are a `CWEB` genius and want to comment or fork the github repo, I would love to hear from you.

## The beautiful

I know I ranted about how the documentation hasn't been updated in 20+ years. However, all of the programs worked. They just ran and did what they said they would do.

Software is nearly free to copy, but the context that went into it's development gets lost. If you want to write software that lasts hundreds of years, it should be able to be printed out and stored on paper. The whole point of literate programming was to produce a beautiful description of a program that could be printed out and read on paper.

So when the inevitable coronal mass ejection corrupts all the bits, hopefully the [Arctic Code Vault](https://archiveprogram.github.com/arctic-vault/) can get us back to a reasonable starting point. For everything else, I think it's worth thinking about the [Long Now](/tags/long-now) and producing a permanent artifact that embodies the knowledge that went into a useful program.

For this reason, I am going to continue working on LCP as a test case to see if `CWEB` is the right tool for producing this kind of artifact.