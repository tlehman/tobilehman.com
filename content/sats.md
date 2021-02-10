---
title: "sats"
---

There are at most 21 million [Bitcoin](https://bitcoin.org), the currency code for it is BTC, and the Unicode character for it is ₿

By definition, 1 bitcoin is 100 million "sats", short for Satoshi. Sats are labeled with §

<div style="border: 1px; border-style: solid; border-color: gray; padding: 10px; margin: 10px;">

₿ 1 = §100,000,000 = <span id="usd" style="color: green"></span>

1¢ = <span id="sats-per-cent" style="color: #cc9900"></span>

</div>
<br>

<div>
If you think this is valuable, then tip me some <a href="bitcoin:bc1qwkyzvqe94apjheknz2k9zspxswx23nkptyqy40?amount=0.0001">sats</a> or <a href="https://basicattentiontoken.org/">BATs</a>. (BAT works if you are using the <a href="https://brave.com">Brave</a> web browser).

</div>

<script>
const satsPerBTC = 100_000_000;
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.coinbase.com/v2/prices/spot?currency=USD");
xhr.onload = function() {
    if(xhr.status == 200) {
        const oneBTCinUSD = parseFloat(JSON.parse(xhr.response).data.amount);
        document.getElementById("usd").innerText = `$${oneBTCinUSD}`;
        const oneCentInSats = satsPerBTC / (oneBTCinUSD * 100);
        document.getElementById("sats-per-cent").innerText = `§${oneCentInSats.toFixed(0)}`;
    }
};
xhr.send();
</script>
