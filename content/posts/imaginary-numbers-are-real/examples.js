var ex1 = document.getElementById("example-1");

ex1.onclick = function(e) {
  var re = untransform(e.offsetX).toString();
  var im = untransform(e.offsetY).toString();
  ex1.dataset.point = re + " + " + im + "i";
}
