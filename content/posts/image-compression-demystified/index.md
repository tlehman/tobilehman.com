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

This can be decomposed into R,G and B components:

{{<img "img/decompose_rgb.png">}}

What we want is a way to decompose the image into brightness and color
components, that way we can use the fact that the eyes are more sensitive 
to brightness differences to compress this information. Specifically, 
we can shrink the color components since the eyes will have a hard time 
noticing.

There is a way to do this already, it's called YUV color space. The Y is 
the brightness component, called the **luma** and the U,V components are the 
color components, collectively called the **chroma**.

The way to calculate the YUV values from the RGB values is given by these 
equations:

$$Y = k_r R + k_g G + k_b B $$
$$U = R - Y$$
$$V = B - Y$$

Since human eyes are less sensitive to the chroma (U and V), we can simply 
shrink each one by 1/2 along the width and height dimensions, that compresses 
the image by a factor of 2.

We can visualize it like this:

{{<img "img/decompose_yuv.png">}}

Then imagine we take U and V, and then scale them back up, they will have lost 
3/4 of their information after scaling back up, so that the total information 
left will be 1 + 1/4 + 1/4 = 2 times less than what we started with.

