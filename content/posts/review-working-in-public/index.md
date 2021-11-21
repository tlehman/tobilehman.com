+++
title = "Review of Working in Public"
date = 2020-10-20T21:22:39-07:00
tags = ["programming", "open-source", "history", "economics", "stewardship", "book-review", "books"]
+++

The story of open source software most of us believe is wrong. The production of open source software isn't like some egalitarian commune, it's driven mostly by a few individuals. Through analyzing git commit frequency distributions and interviewing prominent open source contributors and maintainers, [Nadia Eghbal](https://www.amazon.com/Nadia-Eghbal/e/B08BDZQ7XJ/ref=dp_byline_cont_pop_book_1) captures the living history of open source software.

In addition, she also analyses the main problems of maintenance that threaten the long term sustainability of open source software. As an example of the importance of individuals, look at the command line tool `curl`:

```shell
curl % git log --pretty="%an" | sort | uniq -c | sort -n | tail -5
 483 Gisle Vanem
1094 Dan Fandrich
1915 Steve Holme
2587 Yang Tse
15073 Daniel Stenberg
```

This is one of several representative examples the author gives. The driving force behind open source projects is a small number of individuals. Initially, people tend to be intrinsically motivated, and then many will carry on with maintenance out of a sense of duty, but that is rarely sustainable. Later in the book, [Working in Public](https://www.amazon.com/gp/product/B08BDGXVK9/ref=dbs_a_def_rwt_hsch_vapi_tkin_p1_i0) dives deep into issues around maintenance.

## The four quadrant model of open source projects
To add more precision to the analysis, the book introduces a four-part categorization of open source project types. The two dimensions are contributor growth and user growth.

Projects with low contributor growth and low user growth are **Toys**, an example is my [2D physics simulator](https://github.com/tlehman/newtonian), it's not a serious simulation project and it only has 10 stars on github.
Projects with low contributor growth and high user growth are **Stadiums**. An example of a stadium is the command line tool `curl`, which is used very widely, bundled in most operating systems by default, but only a small number of people work on the code.

Projects with high contributor growth but low user growth are called **Clubs**.  These are things like academic codebases where lots of graduate students write code as a running example of some theoretical work they are doing, but almost no one uses it because it's purpose is for research.

Finally, there are **Federations**, which are big, complex projects with high user growth and high contributor growth. These are things like Linux, the Rails framework, the Rust language, etc. There aren't many federations, but they usually serve as the go-to examples for "open source".
These four categories help add resolution to the discussion, and it's a unique frame this book offers.

### Governance of open source
For Stadiums, the small number of contributors drastically simplifies governance. Many stadiums, like the programming language Clojure or Ruby, have BDFLs, or Benevolent Dictators for Life, who do almost all of the work of production, and make almost all the rules for what gets merged and what doesn't. Governance in that case is just simple dictatorship.
But for Federations, things can get much more complicated. The book talks about [Codes of Conduct](https://docs.github.com/en/free-pro-team@latest/github/building-a-strong-community/adding-a-code-of-conduct-to-your-project), which list out the rules for how contributors should treat other contributors. My thinking on these documents has evolved. Originally, my exposure to Codes of Conduct was in 2013, when I thought they were a distraction. My view at that time was that code was code. And if the code worked, it didn't matter if the author was a jerk, it's free labor, accept the code and ignore the asshole behind it.
However, there is no a priori reason to assume that the jerks are the best or most prolific contributors. And for Federations specifically, if 80% of the commits come from 20% of your contributors, and some small number of jerks are alienating that 20%, then the project will suffer. This is a problem that needs a robust solution. The solution involves contributors policing other contributors' behavior, but that can easily go awry. **The role of the Code of Conduct is a way to build legitimacy in policing of bad behavior in the contributor community.**
This is something that Working in Public spelled out very eloquently, and it explains why I've come to appreciate these documents.
## Economics of open source
The most interesting chapter is "Roles, Incentives and relationships" which applies ideas from economics to try and analyze the production of open source software.
The book mentions Ronald Coase, who wrote The Nature of the Firm in 1937. The Nature of the Firm asks __why do firms even exist__? Economic theory says that markets are [efficient](https://en.wikipedia.org/wiki/Economic_efficiency), but if that's true, then why isn't every single person an atomized buyer and seller of goods and services?
Coase's answer to this question is that transaction costs make it too expensive for individuals to operate in markets, since they would have to read and write contracts, and spend time negotiating terms of those contracts. Coase reasons that, as market transaction costs go up, the optimal size of firms goes up. Another way to think of this theory is that groups of people try to save on transaction costs, so they internalize some parts of production they might have otherwise outsourced. As they internalize more and more, there are diminishing marginal returns to internalization, so at some point it becomes cheaper to outsource the rest of their production process.

The book points out that this doesn't apply to open source production, because groups of open source developers aren't drafting up contracts, they are usually just stoked about a project and want to work on it.
The work of Yochai Benkler might explain this, the book alludes to a [2002 paper](https://web.archive.org/web/20101010152105/http://www.yale.edu/yalelj/112/BenklerWEB.pdf) he wrote that suggests that the removal of property and contracts lowers coordination costs. Those lower coordination costs might explain why open source projects seem to work as well as they do, without a business model.
## Maintenance of open source
Many projects have been created by a small number of passionate individuals, and then that passion fades and the project is abandoned. Even modern commercial software depends on a large number of open source projects, so the maintenance of open source is arguably the more important thing to understand.

In Working in Public, Nadia Eghbal notes that most software developers spend most of their career doing maintenance. This is sustainable because software developers get paid to do that maintenance. Open source doesn't have that reliable income stream, so how to fund open source software is a question the book begins to grapple with.
Personally, I lucked out early in my career, in 2005, while still in high school, I taught myself C# and SQL while working a job doing "IT specialist" work for a company that did telemarketing for insurance agents. The telemarketers were gathering leads on possible insurance converts. Those leads were sold to insurance agents. That whole operation was manual when I started out. I helped them automate much of the process. They bought an autodialer, but the consultants that built the application kept charging for extra features, so it was cheaper for my employers to ask me how to "scrape the autodialer database". That was so much fun :)

I wrote several applications, one janky VBA application embedded in an Excel document. Then a C#/.NET GUI application that did SQL queries, handled data entry input, and compiled and sent the leads over SMTP to  our clients. I also wrote an application that helped manage the search for leads over all the zip codes in the country.
While building these applications, I got to design and write them myself, with no oversight, no code reviews, no "best practices", and no Stack Overflow. The code sucked, but it worked. It was incredibly empowering. Programming today is way easier, and even more fun. But my point with this story is that I was fortunate in having a "green field" start to my programming career, I got to experience the joy of creating something from scratch instead of inheriting someone else's creation. That's a rare privilege and I want to acknowledge it.

Later in my career, I spent years maintaining code I didn't write, and wasn't in a position to replace, or change dramatically, and the frustrated high schooler in me wanted to __just, rewrite the damn thing__. Growing up is hard.

Back to the book, maintenance is the Hard Problem, because no one wants to do it. Once written, distributing code has zero [marginal cost](https://www.investopedia.com/terms/m/marginalcostofproduction.asp), because copying code is free. However, the attention of maintainers is a scarce resource. So the normal analytical tools of economics are useful here. Maintenance has positive [marginal cost](https://www.investopedia.com/terms/m/marginalcostofproduction.asp).

{{<favicon "brookings.edu" "https://www.brookings.edu/wp-content/themes/brookings/favicon.ico">}}
{{<favicon "golang.org" "https://golang.org/favicon.ico">}}
{{<favicon "git-scm.com" "https://git-scm.com/favicon.ico">}}
{{<favicon "gnu.org" "https://www.gnu.org/graphics/gnu-head-mini.png">}}

While reading the chapter on maintenance, I ran into this [rant by the author of wiringPi](http://wiringpi.com/news/), a library I use on the Raspberry Pi to do hobby robotics projects. In there he unloads on all the requests he has gotten to do things the code wasn't intended to do, the thankless, free work he does for people, and also the absurd threats he has gotten from people who want to violate the [GPL license](https://www.gnu.org/licenses/licenses.en.html) he is using.
I got the sense that he made this library for personal use, and because it was fun, and then after publishing it, others started depending on it, and then emailing him with requests for free work and other nonsense. I haven't been in that position personally, but I can sympathize.
While it is theoretically true that anyone can fork wiringPi and maintain it, in reality, almost no one has both the ability and the willingness to do so, so people reinvent the wheel in other languages, because it's fun to build things from scratch.

## Conclusion

When first hearing about open source, it's common to confuse it with communism. But a closer examination of the reality of open source shows that it is not like communism at all. Communist production works on the principal of "from each according to their ability, to each according to their need". But if I need software to do X, the open source community doesn't create feature X. And even if I'm able to make software Y, I can choose not to create Y. Open source software is voluntary, which is what makes it fundamentally non-communist. Communism is coercive.

The maintenance of open source is going to either be socialistic or capitalistic, [funded through the state](https://www.brookings.edu/techstream/why-congress-should-invest-in-open-source-software/) or funded through voluntary transactions like donations or Github Sponsorships.

Given that I am writing this on a computer running an operating system based on an [open source BSD kernel](https://en.wikipedia.org/wiki/Berkeley_Software_Distribution), on a browser built from the [open source KHTML](https://en.wikipedia.org/wiki/KHTML) rendering engine, compiled from open source [Markdown formatting language](https://en.wikipedia.org/wiki/Markdown) using a static blog compiler written in the open source [Go](https://golang.org/) language, and published the web using open source [Git](https://git-scm.com/) version control, it should be obvious how much modern computing depends on open source software. This dependency warrants a deep and comprehensive study of how this free code is built and maintained. Working in Public is the first serious attempt I've seen to do this, and it should spawn a new field of study that comes to understand how best to sustain the maintenance and stewardship of our open source heritage.




