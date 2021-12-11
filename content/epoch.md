---
title: "Unix Epoch Time"
date: 2021-12-10T08:50:18-08:00
tags: ["time", "unix", "tools"]
---

Unix Epoch Time is the number of seconds since 1970-01-01 00:00:00 UTC (Coordinated Universal Time zone). This arbitrary moment in time is defined as "the beginning", and this timezone used as the reference. 

The more you work with times, dates, time zones and daylight saving time, the more you will come to appreciate constant points of reference like this.  Below is a tool for working with and understanding dates and times and epoch numbers.

### Two-way epoch converter

<div class="time-container">

Beginning: 
<span class="time">1970-01-01 00:00:00 UTC</span>

Right now: <span class="time" id="now">2021-11-10 19:28:39 UTC</span>

Difference: <span class="time" id="now-epoch">1639164541.801 seconds</span>

Input Epoch: <span class="time"><input class="time-input" type="text" id="input-epoch"></input><span id="input-epoch-unit"></span></span> <span class="time-sidenote">&larr;<i>Paste epoch here</i></span>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;
&#x21AA; <span class="time"><input class="time-input" type="text" id="input-datetime"></input></span></span> <span class="time-sidenote">&larr;<i>Paste datetime here</i></span>

### Common epoch amounts

1 hour <span class="time">3600</span>

1 day  <span class="time">86,400</span>

1 week  <span class="time">604,800</span>

1 year  <span class="time">220,752,000<sup>*</sup></span>

</div>

<script>
    const nowElement = document.getElementById("now");
    const inputEpoch = document.getElementById("input-epoch");
    const inputDatetime = document.getElementById("input-datetime");
    function now() {
        const d = new Date();
        
        const year = d.getUTCFullYear();
        const month = (d.getUTCMonth()+1).toString().padStart(2, '0');
        const day = d.getUTCDate().toString().padStart(2, '0');
        const hours = d.getUTCHours().toString().padStart(2, '0');
        const mins = d.getUTCMinutes().toString().padStart(2, '0');
        const seconds = d.getUTCSeconds().toString().padStart(2, '0');

        return `${year}-${month}-${day} ${hours}:${mins}:${seconds} UTC`;
    }

    setInterval(() => {
        const epoch = ` ${Date.now()/1000.} seconds`;
        const nowEpochElement = document.getElementById("now-epoch");
        nowElement.innerText = now();
        nowEpochElement.innerText = epoch;
    }, 1000);

    function epochUnit(epoch) {
        if(epoch < Math.pow(10, 12)) {
            return "seconds";
        } else {
            return "milliseconds";
        }
    }
    function isValidEpoch(epochString){
        const f = parseFloat(epochString);
        if(isNaN(f)) {
            return false;
        } else {
            return true;
        }
    }
    function formatISO(isoString) {
        return isoString.replace("T", " ").split(".")[0];
    }
    inputEpoch.addEventListener("change", (e) => {
        const inputText = e.target.value;
        const inputEpochUnit = document.getElementById("input-epoch-unit");
        if(isValidEpoch(inputText)) {
            inputEpochUnit.style.color = "black";
            const unit = epochUnit(inputText);
            inputEpochUnit.innerText = unit;
            // Convert epoch to date
            const outputDate = new Date(0);
            var epochUtcSeconds = parseFloat(inputText);
            if(unit === "milliseconds") {
                epochUtcSeconds = epochUtcSeconds/1000.;
            }
            outputDate.setUTCSeconds(epochUtcSeconds);
            inputDatetime.value = formatISO(outputDate.toISOString()) + " UTC";
        } else {
            inputEpochUnit.innerText = "error"
            inputEpochUnit.style.color = "red";
        }
    });
    inputDatetime.addEventListener("change", (e) => {
        inputEpoch.value = Date.parse(e.target.value);
    });

</script>

<style>
    .time-container {
        position: relative;
    }

    .time {
        border-color: lightgray;
        background-color: #eeeeee;
        border-style: solid;
        border-width: 1px;
        padding: 0.2em 1em;
        position: absolute;
        width: 15em;
        left: 6em;
        min-height: 1.9em;
    }
    .time-sidenote {
        position: absolute;
        left: 21em;
    }
    .time-input {
        left: 0.8em;
        position: absolute;
        background: transparent;
        border: ;
        font-family: inherit;
        font-size: inherit;
    }
    #input-epoch {
        width: 7.5em;
    }
    #input-epoch-unit{
        position: absolute;
        left: 8.5em;
    }
    #now-epoch {

    }
</style>
