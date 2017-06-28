var width = 500;
var height = 500;

var data = [10, 20, 30, 40 ,50, 60 ,70, 80, 70];

var scale = d3.scale.linear()
  .domain([0, 70])
  .range([0, 500]);

var canvas = d3.select("body").append("svg")
  .attr("width", width)
  .attr("height", height);

canvas.selectAll("rect")
  .data(data)
  .enter()
    .append("rect")
    .attr("x", scale)
    .attr("y", 50)
    .attr("width", 50)
    .attr("height", 50)
    .attr("fill", "ForestGreen");

