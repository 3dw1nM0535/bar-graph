const w = 1000;
const h = 700;

const canvas = d3
  .select(".container")
  .append("svg")
  .attr("width", w)
  .attr("height", h);

d3.json("/myData.json", function(data) {
  const dataset = data.data.map(function(d) {
    return d;
  });

  const tip = d3.tip()
    .attr("class", "tooltip")
    .offset([-10, 0])
    .html((d) => { return "<strong>GDP: </strong><span>$ " + d[1] + " Bilion</span><br /><strong>Time:</strong><span>" + new Date(d[0]) + "</span>"; })

  const xScale = d3
    .scaleLinear()
    .range([0, w])
    .domain(d3.extent(dataset, d => new Date(d[0]).getFullYear()));
  const yScale = d3
    .scaleLinear()
    .range([0, h])
    .domain(d3.extent(dataset, d => d[1]));

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
