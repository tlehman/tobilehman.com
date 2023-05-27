+++
title = "Piano  ♪"
date = 2020-01-21T19:37:48-08:00
tags = ["music", "programming", "hobby", "audio"]
+++
 
To start the decade off right, I decided to learn the piano. I am paying for lessons from [Ethan Maier](https://www.ethanmaier.com/about), he's excellent, I've been enjoying learning from him and practicing.

Since I only have a piano at home, I wanted to make one that I could use on the go. Here is the simplest way I could think of to make a portable piano program:

There is an standard for simple web graphics called [SVG](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics), which lets you define custom shapes that show up in any web browser. For example, here's a rectangle that looks like a piano key:

``` xml
<rect width="50" height="200" x="0" fill="white" stroke="black" ></rect>
```

which renders as:

<div style="width: 100%; scroll-direction: horizontal; overflow-x: auto">
<svg width="400" height="200">
<rect width="50" height="200" x="0" fill="white" stroke="black" ></rect>
</svg>
</div>

If you look at all the attributes like `x`, `fill`, `width`, you can probably guess how to draw the rest of the piano keys. Starting with the eight keys in an octave, and the five flat keys (the ones that are usually black):

``` xml
<svg width="400" height="200">
  <rect x="0"   fill="white" stroke="black" width="50" height="200"></rect>
  <rect x="50" fill="white" stroke="black" width="50" height="200"></rect>
  <rect x="100" fill="white" stroke="black" width="50" height="200"></rect>
  <rect x="150" fill="white" stroke="black" width="50" height="200"></rect>
  <rect x="200" fill="white" stroke="black" width="50" height="200"></rect>
  <rect x="250" fill="white" stroke="black" width="50" height="200"></rect>
  <rect x="300" fill="white" stroke="black" width="50" height="200"></rect>

  <!-- flat keys -->
  <rect x="37" y="0" fill="black" width="25" height="112"></rect>
  <rect x="87" y="0" fill="black" width="25" height="112"></rect>
  <rect x="137" y="0" fill="black" width="25" height="112"></rect>

  <rect x="237" y="0" fill="black" width="25" height="112"></rect>
  <rect x="287" y="0" fill="black" width="25" height="112"></rect>
</svg>
```

which renders as this beautiful piano:

<div style="width: 100%; scroll-direction: horizontal; overflow-x: auto">
<svg width="400" height="200">
  <rect x="0"   fill="white" stroke="black" width="50" height="200"></rect>
  <rect x="50" fill="white" stroke="black" width="50" height="200"></rect>
  <rect x="100" fill="white" stroke="black" width="50" height="200"></rect>
  <rect x="150" fill="white" stroke="black" width="50" height="200"></rect>
  <rect x="200" fill="white" stroke="black" width="50" height="200"></rect>
  <rect x="250" fill="white" stroke="black" width="50" height="200"></rect>
  <rect x="300" fill="white" stroke="black" width="50" height="200"></rect>
  <rect x="37" y="0" fill="black" width="25" height="112"></rect>
  <rect x="87" y="0" fill="black" width="25" height="112"></rect>
  <rect x="137" y="0" fill="black" width="25" height="112"></rect>
  <rect x="237" y="0" fill="black" width="25" height="112"></rect>
  <rect x="287" y="0" fill="black" width="25" height="112"></rect>
</svg>
</div>

All we need now is some sound! 

To start, we need an `AudioContext`, which is part of the [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API).
``` javascript
var audioContext = new (window.AudioContext || window.webkitAudioContext);
```

Then we need a gain node, which represents a change in volume, we want this node to connect to our `AudioContext` and make some noise.
``` javascript
var masterGainNode = audioContext.createGain();
masterGainNode.connect(audioContext.destination);
```

The function `playTone(freq)`, defined below, will use the `AudioContext` to create an oscillator.

``` javascript
function playTone(freq) {
  var osc = audioContext.createOscillator();
  osc.connect(masterGainNode);
  sineTerms = new Float32Array([0, 0, 1, 0, 1]);
  cosineTerms = new Float32Array(sineTerms.length);
  customWaveform = audioContext.createPeriodicWave(cosineTerms, sineTerms);
  osc.setPeriodicWave(customWaveform);
  osc.frequency.value = freq;
  osc.start();
  return osc;
}
```

Putting it all together, let's play a C note, this one is at 523.251 Hz:

<script>
var audioContext = new (window.AudioContext || window.webkitAudioContext);
var masterGainNode = audioContext.createGain();
masterGainNode.connect(audioContext.destination);
function playTone(freq) {
  var osc = audioContext.createOscillator();
  osc.connect(masterGainNode);
  sineTerms = new Float32Array([0, 0, 1, 0, 1]);
  cosineTerms = new Float32Array(sineTerms.length);
  customWaveform = audioContext.createPeriodicWave(cosineTerms, sineTerms);
  osc.setPeriodicWave(customWaveform);
  osc.frequency.value = freq;
  osc.start();
  setTimeout(function() {
    osc.stop();
  }, 500);
  return osc;
}
</script>

<input type="button" onClick="playTone(523.251130601197269)" value="Play C note"></input>

We can wire this up to the SVG piano above by setting each key it's unique frequency:

``` xml
<svg width="400" height="200">
  <!-- F note --><rect x="0" onClick="playTone(349.2282)" fill="white" stroke="black" width="50" height="200"></rect>
  <!-- G note --><rect x="50" onClick="playTone(391.9954)" fill="white" stroke="black" width="50" height="200"></rect>
  <!-- A note --><rect x="100" onClick="playTone(440.0000)" fill="white" stroke="black" width="50" height="200"></rect>
  <!-- B note --><rect x="150" onClick="playTone(493.8833)" fill="white" stroke="black" width="50" height="200"></rect>
  <!-- C note --><rect x="200" onClick="playTone(523.2511)" fill="white" stroke="black" width="50" height="200"></rect>
  <!-- D note --><rect x="250" onClick="playTone(587.3295)" fill="white" stroke="black" width="50" height="200"></rect>
  <!-- E note --><rect x="300" onClick="playTone(659.2551)" fill="white" stroke="black" width="50" height="200"></rect>
  <!-- F# note --><rect x="37" onClick="playTone(369.9944)" y="0" fill="black" width="25" height="112"></rect>
  <!-- G# note --><rect x="87" onClick="playTone(415.3046)" y="0" fill="black" width="25" height="112"></rect>
  <!-- A# note --><rect x="137" onClick="playTone(466.16376)" y="0" fill="black" width="25" height="112"></rect>
  <!-- C# note --><rect x="237" onClick="playTone(554.3652)" y="0" fill="black" width="25" height="112"></rect>
  <!-- D# note --><rect x="287" onClick="playTone(622.2539)" y="0" fill="black" width="25" height="112"></rect>
</svg>
```

## The end result

It doesn't sound as glorious as the real thing, but that's because it's just a simple sine wave oscillator playing each tone. As I learn more about audio, I'll improve this. For now, we will have this humble web-piano:

<div style="width: 100%; scroll-direction: horizontal; overflow-x: auto">
<svg width="400" height="200">
  <!-- F note --><rect x="0" onClick="playTone(349.2282)" fill="white" stroke="black" width="50" height="200"></rect>
  <!-- G note --><rect x="50" onClick="playTone(391.9954)" fill="white" stroke="black" width="50" height="200"></rect>
  <!-- A note --><rect x="100" onClick="playTone(440.0000)" fill="white" stroke="black" width="50" height="200"></rect>
  <!-- B note --><rect x="150" onClick="playTone(493.8833)" fill="white" stroke="black" width="50" height="200"></rect>
  <!-- C note --><rect x="200" onClick="playTone(523.2511)" fill="white" stroke="black" width="50" height="200"></rect>
  <!-- D note --><rect x="250" onClick="playTone(587.3295)" fill="white" stroke="black" width="50" height="200"></rect>
  <!-- E note --><rect x="300" onClick="playTone(659.2551)" fill="white" stroke="black" width="50" height="200"></rect>
  <!-- F# note --><rect x="37" onClick="playTone(369.9944)" y="0" fill="black" width="25" height="112"></rect>
  <!-- G# note --><rect x="87" onClick="playTone(415.3046)" y="0" fill="black" width="25" height="112"></rect>
  <!-- A# note --><rect x="137" onClick="playTone(466.16376)" y="0" fill="black" width="25" height="112"></rect>
  <!-- C# note --><rect x="237" onClick="playTone(554.3652)" y="0" fill="black" width="25" height="112"></rect>
  <!-- D# note --><rect x="287" onClick="playTone(622.2539)" y="0" fill="black" width="25" height="112"></rect>
</svg>
</div>

The only thing I love more than learning new things is synthesizing new things, this has been really fun to write, code and play, and I hope you enjoyed reading it!

(These note frequencies are borrowed from this great [Mozilla tutorial](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Simple_synth))
