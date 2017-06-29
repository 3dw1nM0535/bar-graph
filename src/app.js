const w = 1000;
const h = 800;

d3.json("/myData.json", function(data) {
  const dataset = data.data;
  
  const xScale = d3
    .scaleLinear()
    .range([0, w])
    .domain(d3.extent(dataset, d => new Date(d[0]).getFullYear()));
  const yScale = d3
    .scaleLinear()
    .range([h, 0])
    .domain(d3.extent(dataset, d => d[1]));

  const canvas = d3
    .select(".container")
    .append("svg")
    .attr("width", w)
    .attr("height", h);

  const bars = canvas.selectAll("rect").data(dataset);

  bars.enter().append("rect").attr("height", 50);

  bars
    .attr("width", d => xScale(d[0]))
    .attr("height", d =>yScale(d[1]));

 
});
