var width = 500;
var height = 500;

var data = [10, 20, 30, 40 ,50, 60 ,70, 80, 70];

var scale = d3.scale.linear()
  .domain([0, 70])
  .range([0, 500]);

var canvas = d3.select("body").append("svg")
  .attr("width", width)
  .attr("height", height);

function render(data, color) {
  //Bind data
  var rect = canvas.selectAll("rect").data(data);

  //Enter Phase
  rect.enter().append("rect")
    .attr("y", 50)
    .attr("width", 50)
    .attr("height", 50);

  //Updata Phase
  rect.attr("x", scale).attr("fill", color);

  //Exit Phase
  rect.exit().remove();
  
}

