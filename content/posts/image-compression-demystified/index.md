+++
title = "Image Compression Demystified"
date = 2018-11-12T19:27:47-08:00
tags = ["compression", "deep-dive"]
+++

Something amazing happens every time you snap a picture on your phone, 
light travels in through a lense into an array of sensors, triggering 
electric signals that get processed by a computer and stored as a list 
of pixels.

When you have an list of pixels, that can take up a lot of space. It is 
always possible to compress that down to at least 1/6th of the original 
size. 

## Why red/green/blue?
The pixels on most screens emit three different colors: 
{{<red "red">}}, {{<green "green">}} and {{<blue "blue">}}. The reason 
those colors where chosen is that human color perception is enabled 
by [cone cells](https://en.wikipedia.org/wiki/Cone_cell), with cells 
that respond to red, green and blue light.

Another reason red, green and blue were chosen as the primary colors 
for screens is that those colors can be readily made with liquid crystal 
or LEDs.

Human cone cells are sensitive to color, but 
[rod cells](https://en.wikipedia.org/wiki/Rod_cell) are sensitive to 
brightness. And it turns out that rod cells are more sensitive, so 
humans can see changes in brightness with much higher resolution than 
changes in color. This is the first fact we will use to start compressing 
an image.

This will be our starting image:

{{<img "img/scene0.jpg">}}

