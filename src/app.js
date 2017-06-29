const w = 1000;
const h = 700;

d3.json("/myData.json", function(data) {
  const dataset = data.data.map(function(d) {
    return d;
  });

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

  //Bind data
  const rects = canvas.selectAll("rect").data(dataset);

  //Enter
  rects.enter().append("rect").attr("y", 0);

  //Update
  rects
    .attr("x", (d, i) => i * 30)
    .attr("width", d => xScale(d[0]))
    .attr("height", d => yScale(d[1]));
});
