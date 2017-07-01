var w = 1000;
var h = 500;

var canvas = d3.select(".container").append("svg")
  .attr("width", w)
  .attr("height", h);

d3.json("/myData.json", function (data) {

  d3.select("h4").text(data.name);
  d3.select(".container").append("p").text(data.description);

  var toolTip = d3.select("body").append("div").attr("id", "toolTip");
  var yScale = d3.scaleLinear().domain([0, d3.max(data.data, (d) => d[1])]).range([0, h - 100]);
  var xAxisScale = d3.scaleLinear().domain([1947, 2015]).range([0, w]);
  var yAxisScale = d3.scaleLinear().domain([0, d3.max(data.data, (d) => d[1])]).range([h - 100, 0]);
  var colorScale = d3.scaleLinear().domain([0, d3.max(data.data, (d) => d[1])]).range(["#ff1a1a", "#000000"]);

  //Binding data
  var rects = canvas.append("g").attr("transform", "translate(50, 50)").selectAll("rect").data(data.data);

  //Enter
  rects.enter().append("rect")
    .attr("width", (w - 50)/data.data.length)
    .attr("height", (d) => yScale(d[1]))
    .attr("y", (d) => h - 100 - yScale(d[1]))
    .attr("fill", (d) => colorScale(d[1]))
    .attr("x", (d, i) => i * (w - 50)/data.data.length);

  rects.on('mouseover', (d) => {
		d3.select(this).attr('fill','#DBC9C9');
		toolTip.html("<p>"+new Date(d[0])+"</p>"+"<p>"+"$"+d[1]+"Billion"+"</p>")
					.style('left',d3.event.pageX-8+'px')
					.style('top',d3.event.pageY-80+'px')
					.style('display','block');
  });

  rects.on("mouseout", (d) => { 
    d3.select(this).attr("fill", (d) => colorScale(d[1]));
    toolTip.style("display", "none");
  });

  canvas.append("g")
    .attr("transform", "translate(50, 50)")
    .call(d3.axisLeft(yAxisScale));

  canvas.append("g")
    .attr("transform", "translate(50, "+(h - 45)+")")
    .call(d3.axisBottom(xAxisScale).tickFormat(d3.format("d")));

});