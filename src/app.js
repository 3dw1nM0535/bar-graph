const w = 700;
const h = 500;

const canvas = d3.select(".container").append("svg")
  .attr("width", w)
  .attr("height", h);



d3.json("/myData.json", function(data) {
  const dataset = data.data.map(function(d) { return d; });

  const xScale = d3.scaleLinear().range([0, 700]).domain(d3.extent(dataset, (d) => new Date(d[0]).getFullYear()));
  const yScale = d3.scaleLinear().range([0, 700]).domain(d3.extent(dataset, (d) => parseFloat(d[1])));
});
