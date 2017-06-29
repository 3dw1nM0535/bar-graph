var width = 500;
var height = 500;
var data = [1, 2, 3, 4, 5];

var svg = d3.select("body").append("svg")
  .attr("width", width)
  .attr("height", height)

var scale = d3.scale.linear().domain([1, 5]).range([0, 500]);

svg.selectAll("rect")
  .data(data)
  .enter().append("rect")
    .attr("x", scale)
    .attr("y", 50)
    .attr("width", 50)
    .attr("height", 50);