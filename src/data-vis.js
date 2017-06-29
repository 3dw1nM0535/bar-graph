const width = 700;
const height = 500;

const svg = d3.select("body").append("svg")
  .attr("width", width)
  .attr("height", height)
  .append("g")
    .attr("transform", "translate(50, 0)");

const dataset = [
                  [ 34,     78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,   411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,    333 ],
                  [ 78,    320 ],
                  [ 21,   123 ]
                ];
    
    const padding = 60;
    
    const xScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[0])])
                     .range([0, width - padding]);
    
    const yScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[1])])
                     .range([height - padding, 0]);
    
    
    
    svg.selectAll("circle")
       .data(dataset)
       .enter()
       .append("circle")
       .attr("cx", (d) => xScale(d[0]))
       .attr("cy",(d) => yScale(d[1]))
       .attr("r", (d) => 5);
    
    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) =>  (d[0] + "," + d[1]))
       .attr("x", (d) => xScale(d[0] + 10))
       .attr("y", (d) => yScale(d[1]))
    
    const xAxis = d3.axisBottom(xScale);
    
    svg.append("g")
       .attr("transform", "translate(0," + (height - padding) + ")")
       .call(xAxis);
    
    // Add your code below this line
    
    const yAxis = d3.axisLeft(yScale);
    
    svg.append("g")
      .attr("transform", "translate((width - padding), 0")
       .call(yAxis);
    