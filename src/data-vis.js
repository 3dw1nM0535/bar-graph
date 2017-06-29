var width = 500;
var height = 500;
var data = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

var svg = d3.select("body").append("svg")
  .attr("width", width)
  .attr("height", height)

var bars = svg.selectAll("rect").data(data);

bars.enter().append("rect").attr("height", 50);

bars
  .attr("width", function(d) { return d * 10; })
  .attr("y", function(d, i) { return i * 100; });

bars.exit().remove();