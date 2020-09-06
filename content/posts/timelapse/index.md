+++
title = "Timelapse"
date = 2020-09-05T21:01:22-07:00
tags = ["programming", "time", "video", "long-now", "diy"]
+++

I have a fascination with time. Two years ago, our family planted a tree in our back yard. A few months 
prior, my dad and I built an overhang that provides shade. 

{{<img "img/overhang.jpg">}}

I used a pillar supporting the overhang to 
point this [timelapse camera](https://www.amazon.com/gp/product/B01FJZQONW/) at the tree. I bought that 
camera because of it's low battery usage, and how it uses standard JPEGS on a standard SD card. That gives 
me raw material to compress a large amount of time into a nice video.

Trees are reminders of different time scales. They are our ambassadors to the [Long Now](/posts/long-now/).
The raw emotion of seeing two years fly by in a few seconds is a good approximation of the experience of 
seeing your child grow up. It's a good reminder of the finitness of your life. It's call to action to do those 
things you have been putting off. Time is finite. It's the only thing that can't be manufactured.

Now to the technical stuff, I wrote [this code](https://github.com/tlehman/timelapse-cam) to extract jpegs 
from the timelapse camera's SD card. It uses the jpeg's [EXIF metadata](https://en.wikipedia.org/wiki/Exif) to 
get the `created_at` date from the file. After copying the files to a temporary directory, it uses `ffmpeg` to 
turn the jpegs into frames of a video.

Here is a sample from October 2018 to September 2020:
<video controls width="100%"><source src="/posts/timelapse/timelapse-tree.mp4" type="video/mp4" /></video>

The music is by Hans Zimmer, it was edited in iMovie for iOS, and I couldn't be happier with the result. It conveys 
the feeling of growth, change, and rebirth.

I always appreciate feedback on my code, or videos, or posts. Mail your comments to <a href="mailto:mail@tobilehman.com">mail@tobilehman.com</a>

