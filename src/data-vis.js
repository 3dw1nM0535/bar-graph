var width = 500;
var height = 500;

var svg = d3.select("body").append("svg")
  .attr("width", width)
  .attr("height", height)

var scale = d3.scale.linear().domain([1, 5]).range([0, 500]);

function render(data, color) {
  //Bind data phase
  var rects = svg.selectAll("rect").data(data);

  //Enter data phase
  rects.enter().append("rect")
    .attr("y", 50)
    .attr("width", 20)
    .attr("height", 20);

  //Update phase
  rects
    .attr("x", scale)
    .attr("fill", color);

  rect.exit().remove();
}

setTimeout( function() { render([1, 2, 2.5], "ForestGreen"); }, 1000);
setTimeout( function() { render([1, 2, 3, 4, 5], "DeepPink"); }, 2000);
setTimeout( function() { render([1, 2], "DarkSlateGrey"); }, 3000);
setTimeout( function() { render([3, 4, 5], "Magenta"); }, 4000);
setTimeout( function() { render([4, 5], "Crimson"); }, 5000);