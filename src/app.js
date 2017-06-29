const w = 700;
const h = 500;

const canvas = d3.select(".container").append("svg")
  .attr("width", w)
  .attr("height", h);

const xScale = d3.scaleLinear().range([0, 700]);
const yScale = d3.scaleLinear().range([0, 700]);

d3.json("/myData.json", function(data) {
  var dataset = data.data.map(function(d) { return d; });
  xScale.domain(d3.extent(dataset, (d) => new Date(d[0]).getFullYear()));
  yScale.domain(d3.extent(dataset, (d) => parseFloat(d[1])));
});
