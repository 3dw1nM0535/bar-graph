var width = 500;
var height = 500;

var canvas = d3.select("body").append("svg")
  .attr("width", width)
  .attr("height", height)

var xScale = d3.scale.linear().range([0, 500]);
var yScale = d3.scale.linear().range([0, 500]);

function render(data) {
  xScale.domain();
  yScale.domain();

}