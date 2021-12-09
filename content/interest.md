---
title: "Notes on interest rates"
date: 2021-09-09T14:55:11-07:00
image: "/images/complex-interest-rates.gif"
---

{{<favicon "cnbc.com" "https://www.cnbc.com/favicon.ico">}}

This page is about interest rates, negative interest rates, and <mark>complex interest rates</mark>.
I think interest rates are interesting because they represent the value of [time](/tags/time/). 

## Table of Contents
1. [Interest rates](#positive)
   1. [Central Banking (The Federal Reserve)](#fed)
   1. [The long-term decline of interest rates](#decline)
2. [Negative interest rates](#negative)
3. [Complex interest rates](#complex)
   1. [Ethereum Smart Contract Implementation](#eth)

> "Compound interest is the eighth wonder of the world. He who understands it, earns it ... he who doesn't ... pays it."
― Albert Einstein

This quote is special because Einstein revolutionized our understanding of time, and interest is intimately related to the value of time. The interest rate is frequently used to [discount](https://www.investopedia.com/terms/d/discountrate.asp) money in the future. Another cool way to think about <mark>interest is that it's the price of sending money back in time</mark>.

Now let's get into the math.
<a id="positive"></a>
# Interest rates
In all of these notes, we assume that interest compounds. That means that interest is earned on interest, or from the other side of the transaction, 
interest is paid on interest.

The definition of an interest rate is a non-negative real number \\( r \in [0, \infty) \\).
Call the principal \\(P \in [0, \infty)\\).

Then, if the interest compounds annually, after t years, the total value of the investment is $$ P(1 + r)^{t} $$

As an example, assume you bought a $1000 bond that earned 5% interest compounded annually. P = $1000 and r = 0.05, after 20 years, the value would be ($1000)*(1 + 0.05)<sup>20</sup> = $2653.30

What about the really, really long term? How does the interest grow? Looking back at the formula:

$$ P(1 + r)^{t} $$

You can see that if the interest rate r is fixed over time, that it grows <mark>exponentially in t</mark>. This is what makes it 'the wonder of the world'. Saving $X dollars a year grows linearly, but interest compounds exponentially.

<img src="/images/linear-exponential.png" alt="graph of linear versus exponential growth" />

<a id="fed"></a>
### The Federal Reserve

The Federal Reserve is the central bank of the United States. It has a dual mandate to keep [inflation](https://fred.stlouisfed.org/series/FPCPITOTLZGUSA) low and also keep [unemployment](https://fred.stlouisfed.org/series/UNRATE) low. It's main tool for doing this are "Open Market Operations", which amount to buying bonds with newly printed money, or removing bonds from circulation. These buying and selling operations can guide the [federal funds rate](https://www.federalreserve.gov/monetarypolicy/openmarket.htm) to the Federal Reserve's goal. The federal funds rate is a minimum interest rate. If it's low, then borrowing is cheap and unemployment will fall, since it's cheaper for businesses to borrow and hire people. However, if it remains too low for too long, it's possible that all that cheap borrowed money could push up inflation.

The Federal Reserve has to set the interest rate low enough to encourage job creation, but not too low that it stokes more inflation than the target.


<a id="decline"></a>
### The long-term decline of interest rates

The Bank of England published an interesting document called [Eight centuries of global real interest rates, R-G, and the 'suprasecular' decline, 1311–2018](https://www.bankofengland.co.uk/-/media/boe/files/working-paper/2020/eight-centuries-of-global-real-interest-rates-r-g-and-the-suprasecular-decline-1311-2018.pdf). In it they find a -1.96bps (basis point, or 0.01%) per year trend. That means that <mark>for the last 800 years, real interest rates have been declining by -0.02% per year</mark>. 


<a id="negative"></a>
# Negative interest rates

After the crash of 2008, central banks around the world lowered their interest rates to 0 in order to prevent the financial crash from turning into a repeat of the [Great Depression](https://en.wikipedia.org/wiki/Great_Depression). This worked in the United States, but in the European Union, the ECB (European Central Bank) had to experiment with <mark>lowering their interest rates to below 0</mark>.

What does a negative interest rate mean? It means that the banks pay you to borrow money. Similarly, it charges savers for keeping their money in the bank. As an example, [a Danish bank offered negative interest rate mortgages](https://www.cnbc.com/2019/08/12/danish-bank-is-offering-10-year-mortgages-with-negative-interest-rates.html). The whole purpose of negative interest rates is to encourage money to circulate, instead of staying in bank accounts.

So, \\(r\\) can be any real number, negative, positive or zero. What about complex numbers? 

(For a primer on imaginary and complex numbers, see my post [Imaginary Numbers are Real](/posts/imaginary-numbers-are-real))

<a id="complex"></a>
# Complex interest rates

What would a complex interest rate mean? If you are comfortable with math, you might bust out the compound interest formula and just change them from being real variables to being complex variables. So, assume \\(P, r \in \mathbb{C}\\), the set of complex numbers. Then \\(P = A + iB\\) and \\(r = c + id\\), where \\( A, B, c, d \in \mathbb{R} \\).

Then \\( P(1 + r)^{t} \\) becomes

$$ (A + iB)(1 + (c + id))^{t} $$

But wait a minute, what does an imaginary amount of money mean? One way to imagine it is that the currency unit is actually a pair of units, like say, USD and DOGE. And there's this rule that if you multiply 1 DOGE * 1 DOGE it becomes worth -1 USD. This is equivalent to the complex number arithmetic. 

So all wallets in the economy would have US Dollars and Dogecoin, and the Federal Reserve would set the complex federal funds rate so that the compound interest grows in a spiral that doesn't diverge too quickly.

One way to see it is to convert the complex number to polar coordinates, then raising it to a power will cause it to grow in a spiral or shrink in a spiral. Here's an example I cooked up with [Mathematica](https://wolfram.com/mathematica):

![complex exponentiation spiral](/images/complex-interest-rates.gif)

__Update from 2021-10-12__:
When I wrote the first draft on 2021-09-09, I was unaware of any other attempt to define complex rates of return. I thought I had invented it, but I was wrong. Here's a paper from 2010 called "The Simple Meaning of Complex Rates of Return":

[Pierru, Axel. (2010). The Simple Meaning of Complex Rates of Return. Engineering Economist. 55. 10.1080/00137911003775081.](/pdf/2010-Pierru-ComplexInterest.pdf)

In Pierru 2010, the paper talks about the real and imaginary components representing two assets, A and B, with their own distinct rates of interest, &rho;<sub>A</sub> and &rho;<sub>B</sub>, and the imaginary unit i is interpreted as an exchange operator, exchanging some of A for B, or vice versa.

Then the paper defines a complex rate of return in terms of &rho;<sub>A</sub> and &rho;<sub>B</sub>, where the period over which the interest is accrued is followed by an exchange between asset A and B.

<a id="eth"></a>

[Ethereum](https://ethereum.org) smart contract implementing complex money: [ComplexMoney on Repl.it](https://replit.com/@tlehman/ComplexMoney#contract.sol)
