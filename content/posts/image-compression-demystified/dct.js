const scale = 16;
const width = 256/scale; // 16
const height = 256/scale; // 16
var imgData = new Uint8Array(16 * 16);
var imgDataDCT = new Uint8Array(16 * 16);
const N = imgData.length;
const max = 255; // max value of DCT pixel

var dct1 = document.getElementById("dct1");
var dct2 = document.getElementById("dct2");
var ctx1 = dct1.getContext("2d");
var ctx2 = dct2.getContext("2d");

function remove(set, point) {
}

function drawPixel(ctx,x,y,data) {
    var v = max - data[x + y*16];
    var color = "rgb(" + v + "," + v + "," + v + ")";
    ctx.fillStyle = color;
    ctx.fillRect(x * scale, y * scale, scale, scale);
}

function redraw(ctx) {
    // clear canvas
    ctx.canvas.width = ctx.canvas.width;

    for(var x = 0; x < 16; x++) {
        for(var y = 0; y < 16; y++) {
            if(imgData[x + y*16] == max) {
                drawPixel(ctx1,x,y,imgData);
            }
            drawPixel(ctx2,x,y,imgDataDCT);
        }
    }
}

function handleClick1(e) {
    var x = Math.floor(e.offsetX / scale);
    var y = Math.floor(e.offsetY / scale);

    if(imgData[x + y*16] == 0) {
        imgData[x + y*16] = max;
        console.log("(" + x + "," + y + ")");
    } else {
        imgData[x + y*16] = 0;
    }
    redraw(ctx1);
    dct();
}

// xs is an array of image data, 16x16 in this file
function dct() {
    for(var k = 0; k < N; k++) {
        var xk = 0;
        for(var n = 0; n < N; n++) {
            xk += imgData[n] * Math.cos((Math.PI/N) * (n + 0.5) * k);
        }
        imgDataDCT[k] = xk;
    }
    console.log("input = " + imgData);
    console.log("dct = " + imgDataDCT);
}

dct1.addEventListener('click', handleClick1);

redraw(ctx1, dct1);

