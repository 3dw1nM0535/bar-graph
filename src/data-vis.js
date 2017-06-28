var width = 500;
var height = 500;

var canvas = d3.select("body").append("svg")
  .attr("width", width)
  .attr("height", height)

function render(data) {
  //Binding data
  var circles = canvas.selectAll("circle").data(data);

  //Enter Phase
  circles.enter().append("circle").attr("r", 15);

  //Updata Phase
  circles.attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; });

  circles.exit().remove();
};

var objectArray = [
  { x: 100, y: 100 },
  { x: 130, y: 120 },
  { x: 80, y: 180  },
  { x: 180, y: 80  },
  { x: 180, y: 40  }
];

render(objectArray);