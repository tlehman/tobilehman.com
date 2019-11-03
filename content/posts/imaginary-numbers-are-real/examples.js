var ex1 = document.getElementById("example-1");
var exz1 = document.getElementById("example-z1");

ex1.onclick = function(e) {
  var re = Math.round(untransform(e.offsetX) * 10)/10;
  var im = Math.round(-untransform(e.offsetY) * 10)/10;
  var z = re + " + " + im + "i";
  ex1.dataset.pointBlue = z;
  exz1.innerText = z;
  renderPlot2D(this);
}

var exAdd = document.getElementById("example-add");
var exBlue = document.getElementById("ex-add-blue"); // the constant point
var exRed = document.getElementById("ex-add-red"); // the configurable point
var exPurple = document.getElementById("ex-add-purple"); // the sum

exAdd.onclick = function(e) {
  var re = Math.round(untransform(e.offsetX) * 10)/10;
  var im = Math.round(-untransform(e.offsetY) * 10)/10;
  var a = re + " + " + im + "i";
  var b = exAdd.dataset.pointRed;
  var c = addComplex(a, b); // red + blue = purple
  exAdd.dataset.pointBlue = a;
  exAdd.dataset.pointPurple = c;
  exBlue.innerText = "a = " + a;
  exPurple.innerText = "c = a + b = " + c;
  renderPlot2D(this);
}