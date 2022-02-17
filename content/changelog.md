---
title: "Changelog"
date: 2021-12-09T09:15:10-08:00
---

### February 2022

- 2022-02-16
    - Added [lcp-0.5.pdf](/pdf/lcp-0.5.pdf), I worked out the ray tracing math and reorganized the text to make the document flow better.
- 2022-02-13
    - Added [lcp-0.4.pdf](/pdf/lcp-0.4.pdf), I made a nice ray-tracing diagram to explain the rendering code: [diagram](/pdf/lcp-0.4.pdf#page=5)
- 2022-02-11
    - Removed the tobishell.js, it was too terminal-like to not want to keep adding features, but not worth all the effort. The removal will speed up page load times by 25%. This change also preserves the look and feel of the terminal, but without the interactivity.
- 2022-02-08
    - Added [lcp-0.3.pdf](/pdf/lcp-0.3.pdf)
- 2022-02-04
    - Added [lcp-0.2.pdf](/pdf/lcp-0.2.pdf)
    - Posted [CWEB LaTeX Experiment](/posts/cweb-latex-experiment)

### January 2022
- 2022-01-02
    - Added comments using [Commento.io](https://commento.io)
    - Added a Recent Posts section to the frontpage

### December 2021

- 2021-12-31
    - Added [OOO](/pdf/ooo.pdf) to frontpage, since it's kind of hidden
    - Added a [Blogroll](/#blogroll) and a [Non-Profits](/#non-profits) list to the front page
- 2021-12-30
    - Posted a [literate program](/tags/literate-programming).
    - Updated [front page](/) to list [deep dives](/tags/deep-dive) and [book reviews](/tags/book-review)
- 2021-12-29
    - Aligned terminal with main content
    - Fixed bug in terminal `cd` command. Now it errors properly when the destination is not found
        - Example: <a href="javascript:curr_line='cd bogus';term.write(curr_line)">Click to try</a> and then hit **enter**
- 2021-12-28
    - Wrote a [Book Review: Where's My Flying Car?](/posts/book-review-wheres-my-flying-car/)
    - Added **Dark Mode** to "More" link. Click <a id="dark-mode-toggle" href="javascript:activateDarkMode">Here to try Dark Mode</a>
- 2021-12-10
    - Added a tool for converting [Unix Epoch Times](/epoch) into ISO 8601 date strings and back
    - Updated the front page to include more information about what I believe and what I'm doing about it
- 2021-12-09
    - Added a [changelog](/changelog) page
    - Updated favicon to match my [twitter](https://twitter.com/tobi_lehman) avatar
    - Updated my [about](/about) page to include my physics sim from 2016
    - Updated my [notes on interest rates](/interest/#decline) with a new document about the long-term trend steadily declining interest rates over the last 800 years
    - Changed my font from <span style="font-family">Georgia</span> to [Source Serif Pro](https://fonts.adobe.com/fonts/source-serif)
    - Added new [tobishell.js](/js/tobishell.js) feature that evaluates JavaScript
        - Example: <a href="javascript:curr_line='js more()';term.write(curr_line)">Click to try</a> and then hit **enter**
- 2021-12-06
    - Added new [book club](/book-club) page
