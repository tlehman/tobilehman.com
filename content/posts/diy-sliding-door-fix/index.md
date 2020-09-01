+++
title = "DIY Sliding Door Fix"
date = 2020-09-01T07:53:00-07:00
tags = ["diy", "3d-printing", "cad"]
+++

<style>
a[href*='rhino3d.com']::after { background-image: url("https://www.rhino3d.com/favicon.ico") }
</style>

There is something meaningful and fulfilling about the maintenance of a house and family. I wouldn't trade it for anything.

There is one thing though, the screen door. That damn thing keeps popping off. I finally bought a new door recently, it had been working well for a few months, but it failed too! The problem was the screws that keep the springs from collapsing don't hold, so one side collapses and the door eventually pops off the rail again. 

I used this [caliper](https://www.amazon.com/gp/product/B07DFFYCXS/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1) to measure the size of the cavity inside the bottom part of the sliding door. Then I made this 3D model in [Rhinoceros 6](https://www.rhino3d.com/6):


<script src="/js/stl_viewer.min.js"></script>
<div id="stl_cont"></div>
<script>
var stl_cont=document.getElementById("stl_cont");
var stl_props={ models: [ {id:0, filename:"/posts/diy-sliding-door-fix/SlidingDoorStopper.stl", rotationy: 3.1, rotationx: 2.0, rotationz: 0} ] };
var stl_viewer=new StlViewer(stl_cont, stl_props);
</script>

Then I 3D printed that model on an [Ender 3](https://www.amazon.com/gp/product/B07BR3F9N6/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1) printer using PLA plastic:

{{<img "img/IMG_2125.jpg">}}

It fit perfectly into the screen door, with an opening to fasten the screw:


{{<img "img/IMG_2126.jpg">}}

I am happy with how it turned out, a surprising amount of things can be fixed with the right shaped piece of plastic. This 3D printer has been a very useful and fun thing to own, I would recommend the Ender 3 for anyone on the fence about 3D printing.

