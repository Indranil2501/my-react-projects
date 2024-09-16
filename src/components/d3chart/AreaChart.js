import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const AreaChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const data = [
      { x: "Linedown", values: [0, 10, 5] },
      { x: "P1", values: [7, 3, 4] },
      { x: "P2", values: [5, 1, 0] },
      { x: "P3", values: [6, 9, 2] },
    ];

    const colors = ["#ff8c00", "#6b486b", "#a05d56"];
    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const width = 1200 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    // Clear previous chart
    d3.select(chartRef.current).selectAll("*").remove();

    // Create SVG
    const svg = d3
      .select(chartRef.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Create scales
    const xScale = d3
      .scalePoint()
      .domain(data.map((d) => d.x))
      .range([0, width]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data.flatMap((d) => d.values))])
      .range([height, 0]);

    // Create axes
    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

    svg.append("g").attr("transform", `translate(0,${height})`).call(xAxis);
    svg.append("g").call(yAxis);

    // Labels
    svg
      .append("text")
      .attr("x", width / 2)
      .attr("y", height + margin.bottom)
      .style("text-anchor", "middle")
      .text("Commits");

    svg
      .append("text")
      .attr("x", -(height / 2))
      .attr("y", -margin.left + 10)
      .attr("transform", "rotate(-90)")
      .style("text-anchor", "middle")
      .text("Shortages");

    // Create area generator
    const area = d3
      .area()
      .x((d, i) => xScale(data[i].x))
      .y0(height)
      .y1((d) => yScale(d));

    // Draw areas for each set of values
    data[0].values.forEach((_, i) => {
      svg
        .append("path")
        .datum(data.map((d) => d.values[i]))
        .attr("fill", colors[i])
        .attr("d", area);
    });
  }, []);

  return <div ref={chartRef}></div>;
};

export default AreaChart;
