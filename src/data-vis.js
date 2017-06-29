var width = 500;
var height = 500;

var svg = d3.select("body").append("svg")
  .attr("width", width)
  .attr("height", height)

d3.json("/myData.json", function(data) {

  const data_Items = [12, 31, 22, 17, 25, 18, 29, 14, 9, 23, 43, 5, 1, 21];
  //Binding data
  const rects = svg.selectAll("rect").data(data_Items);
  //Enter
  rects.enter().append("rect")
    .attr("y", 0)
    .attr("width", 25)
    .attr("fill", "crimson");

  rects
    .attr("height", function(d) { return d * 3; })
    .attr("x", function(d, i) { return i * 50; });
    


});