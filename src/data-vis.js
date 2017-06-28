var canvas = d3.select("body").append("svg")
  .attr("width", 500)
  .attr("height", 500);

var xScale = d3.scale.linear().range([0, 500]);
var yScale = d3.scale.linear().range([0, 500]);

function render(data) {

  xScale.domain(d3.extent(data, function(d) { return d.sepal_length; }));
  yScale.domain(d3.extent(data, function(d) { return d.petal_length; }));

  //Binding data
  var circles = canvas.selectAll("circle").data(data);

  //Enter phase
  circles.enter().append("circle").attr("r", 15);

  circles
    .attr("cx", function(d) { return xScale(d.sepal_length); })
    .attr("cy", function(d) { return yScale(d.petal_length); });
}

function type(d) {
  d.petal_length = +d.petal_length;
  d.petal_width = +d.petal_width;
  d.sepal_length = +d.sepal_length;
  d.sepal_width = +d.sepal_width;
  return d;
}

d3.csv("/data.csv", type, render);