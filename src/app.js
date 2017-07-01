var w = 1000;
var h = 500;

var canvas = d3.select(".container").append("svg")
  .attr("width", w)
  .attr("height", h);

d3.json("/myData.json", function (data) {
  console.log(data)


  d3.select("h4").text(data.name);
})