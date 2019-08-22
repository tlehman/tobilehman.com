/** Get all canvas objects by class name (e.g. 'plot-1d', 'plot-2d', ...) and render them.
 */
function render() {
    var articles = document.getElementsByTagName("article");
    
    if(articles.length > 0 && articles[0].offsetWidth) {
	renderPlots1D(articles[0].offsetWidth);
    } else {
	renderPlots1D(200);
    }
}

/** Render 1D plots
 */
function renderPlots1D(canvasWidth) {
    var arrowHeight = 8;
    var plots = document.getElementsByClassName("plot-1d");
    for(var i = 0; i < plots.length; i++) {
        canvas = plots[i];
        var ctx = canvas.getContext("2d");
        var w = canvas.width = canvasWidth;
        var h = canvas.height = 50;
        
        var min = parseInt(canvas.dataset.min);
        var max = parseInt(canvas.dataset.max);
        var points = canvas.dataset.points;
        
        // Draw the Real line
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 2;
        ctx.beginPath();
        // Main line
        ctx.moveTo(0, h/2);
        ctx.lineTo(w, h/2);
        // Right arrow tip
        ctx.lineTo(w-arrowHeight, h/2-arrowHeight);
        ctx.lineTo(w, h/2);
        ctx.lineTo(w-arrowHeight, h/2+arrowHeight);
	ctx.lineTo(w, h/2);
	// Left arrow tip
	ctx.lineTo(0, h/2);
        ctx.lineTo(0+arrowHeight, h/2-arrowHeight);
        ctx.lineTo(0, h/2);
	ctx.lineTo(0+arrowHeight, h/2+arrowHeight);
	ctx.lineTo(0, h/2);

	// draw tick marks
	var zero = w / 2;
	for(var r = min; r < max; r++) {
	    // r is the abstract real number, but rx is the pixel location in the canvas
	    var rx = (r - min + 0.5) * (w / (max - min));
	    ctx.lineTo(rx, h/2);
	    ctx.lineTo(rx, h/2 + arrowHeight);
	    ctx.lineTo(rx, h/2 - arrowHeight);
	    ctx.lineTo(rx, h/2);
	    ctx.font = '15px serif';
	    ctx.fillText(r, rx, h/2 + arrowHeight + 16);
	    
	}
	ctx.lineTo(0, h/2);

        ctx.stroke();

	// Add event listener to canvas element
	var drawPoint = function(p) {
	    var ctx = canvas.getContext("2d");
	    ctx.beginPath();
	    ctx.strokeStyle = '#FF0000';
	    var radius = arrowHeight/2;
	    var rx = p.offsetX;
	    ctx.arc(rx, h/2, radius, 0, 2*Math.PI, false);
	    ctx.stroke();

	    r = (rx - zero) / (w / (max - min)) - 0.5;

	    // update the x0 span
	    var x0 = document.getElementById("x0");
	    x0.innerText = "$$x = " + r + "$$";
	    MathJax.Hub.Typeset(x0);
	};
	canvas.onclick = function(p) { render(); drawPoint(p); }
	canvas.onmouseover = function(p) { render(); drawPoint(p); }
    }
}


window.requestAnimationFrame(render);
window.onresize = function() {
    render();
}
