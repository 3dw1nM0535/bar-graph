var width = 500;
var height = 500;

var svg = d3.select("body").append("svg")
  .attr("width", width)
  .attr("height", height)

d3.json("/myData.json", function(data) {
  var data_item = data.data.map(function(d) { return d[1]; });
  var data_Dates = data.data.map(function(d) { return d[0]; });
});