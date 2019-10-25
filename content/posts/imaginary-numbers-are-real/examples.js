var ex1 = document.getElementById("example-1");
var exz1 = document.getElementById("example-z1");

ex1.onclick = function(e) {
  var re = Math.round(untransform(e.offsetX) * 10)/10;
  var im = Math.round(-untransform(e.offsetY) * 10)/10;
  var z = re + " + " + im + "i";
  ex1.dataset.point = z;
  exz1.innerText = z;
  renderPlot2D(this);
}
