var ex1 = document.getElementById("example-1");
var exz1 = document.getElementById("example-z1");

ex1.onclick = function(e) {
  var re = Math.round(untransform(e.offsetX) * 10)/10;
  var im = Math.round(-untransform(e.offsetY) * 10)/10;
  var pointBlue = {x: re, y: im};
  ex1.dataset.pointBlue = JSON.stringify(pointBlue);
  exz1.innerText = pointToComplex(pointBlue);
  renderPlot2D(this);
}

var exAdd = document.getElementById("example-add");
var exBlue = document.getElementById("ex-add-blue"); // the constant point
var exRed = document.getElementById("ex-add-red"); // the configurable point
var exPurple = document.getElementById("ex-add-purple"); // the sum

exAdd.onclick = function(e) {
  var re = Math.round(untransform(e.offsetX) * 10)/10;
  var im = Math.round(-untransform(e.offsetY) * 10)/10;
  var a = {x: re, y: im}; // blue
  var b = JSON.parse(exAdd.dataset.pointRed);
  var c = add(a, b); // red + blue = purple
  exAdd.dataset.pointBlue = JSON.stringify(a);
  exAdd.dataset.pointPurple = JSON.stringify(c);
  exBlue.innerText = "a = " + pointToComplex(a);
  exPurple.innerText = "c = a + b = " + pointToComplex(c);
  // Check if challenge has been solved
  if(a.x == -0.5 && a.y == 1) {
    var challenge = document.getElementById("challenge-1");
    challenge.innerHTML = "<div style='background-color: green; color: white'>Nice work, what an awesome square!</div>"
  }
  renderPlot2D(this);
} 