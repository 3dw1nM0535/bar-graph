var width = 500;
var height = 500;

var canvas = d3.select("body").append("svg")
  .attr("width", width)
  .attr("height", height);

var circle = canvas.append("circle")
  .attr("cx", 150)
  .attr("cy", 150)
  .attr("r", 100)
  .attr("fill", "DeepPink");