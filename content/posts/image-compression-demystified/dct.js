var scale = 16;
var width = 256/scale; // 16
var height = 256/scale; // 16
var imgData = new Uint8Array(16 * 16);

var dct1 = document.getElementById("dct1");
var dct2 = document.getElementById("dct2");
var ctx1 = dct1.getContext("2d");
var ctx2 = dct2.getContext("2d");

function remove(set, point) {
}

function drawPixel(ctx,x,y,color) {
    ctx.fillStyle = color;
    ctx.rect(x * scale, y * scale, scale, scale);
    ctx.fill();
}

function redraw(ctx) {
    // clear canvas
    ctx.canvas.width = ctx.canvas.width;

    for(var x = 0; x < 16; x++) {
        for(var y = 0; y < 16; y++) {
            if(imgData[x + y*16] == 1) {
                drawPixel(ctx1,x,y,"black");
                console.log("pixel at (" + x + "," + y + ") is black");
            } else {
            }
        }
    }
}

function handleClick1(e) {
    var x = Math.floor(e.offsetX / scale);
    var y = Math.floor(e.offsetY / scale);

    if(imgData[x + y*16] == 0) {
        imgData[x + y*16] = 1;
        console.log("(" + x + "," + y + ")");
    } else {
        imgData[x + y*16] = 0;
    }
    redraw(ctx1);
    console.log(imgData);
}

// xs is an array of image data, 16x16 in this file
function dct(xs) {

}

dct1.addEventListener('click', handleClick1);

redraw(ctx1, dct1);

