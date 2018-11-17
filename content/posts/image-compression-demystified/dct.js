var imgData = [[0,0],[1,2],[3,3]];
var scale = 16;

var dct1 = document.getElementById("dct1");
var dct2 = document.getElementById("dct2");
var ctx1 = dct1.getContext("2d");
var ctx2 = dct2.getContext("2d");

function contains(set, point) {
    for(var i = 0; i < set.length; i++) {
        if(set[i][0] == point[0] && set[i][1] == point[1]) {
            return true;
        }
    }
    return false;
}

function remove(set, point) {
    for(var i = 0; i < set.length; i++) {
        if(set[i][0] == point[0] && set[i][1] == point[1]) {
            if(i == set.length - 1) {
                set.pop();
            } else {
                delete set[i];
                set[i] = set.pop();
            }
        }
    }
}

function drawPixel(ctx,x,y,color) {
    ctx.fillStyle = color;
    ctx.rect(x * scale, y * scale, scale, scale);
    ctx.fill();
}

function redraw(ctx) {
    // clear canvas
    ctx.canvas.width = ctx.canvas.width;

    for(var i = 0; i < imgData.length; i++) {
        var x = imgData[i][0];
        var y = imgData[i][1];
        drawPixel(ctx1,x,y,"black");
    }
}

function handleClick1(e) {
    var x = Math.floor(e.offsetX / scale);
    var y = Math.floor(e.offsetY / scale);

    if(contains(imgData, [x,y])) {
        remove(imgData, [x,y]);
    } else {
        imgData.push([x,y]);
    }
    redraw(ctx1);
    console.log(JSON.stringify(imgData));
}

dct1.addEventListener('click', handleClick1);

redraw(ctx1, dct1);

