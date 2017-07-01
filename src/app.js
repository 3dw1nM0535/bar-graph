var w = 1000;
var h = 500;

var canvas = d3.select(".container").append("svg")
  .attr("width", w)
  .attr("height", h);

d3.json("/myData.json", function (data) {
  console.log(data)

  d3.select("h4").text(data.name);
  d3.select(".container").append("p").text(data.description);

  var toolTip = d3.select(".container").append("div").attr("class", "toolTip");
  var yScale = d3.scaleLinear().domain([0, d3.max(data.data, (d) => d[1])]).range([0, h]);
  var xAxisScale = d3.scaleLinear().domain([d3.extent(data.data, (d) => new Date(d[0]).getFullYear())]).range([0, w - 100]);
  var yAxisScale = d3.scaleLinear().domain([0, d3.max(data.data, (d) => d[1])]).range([h - 50, 0]);
})