var w = 1000;
var h = 500;

var canvas = d3.select(".container").append("svg")
  .attr("width", w)
  .attr("height", h)

var rect = canvas.append("rect")
  .attr("width", w)
  .attr("height", h)