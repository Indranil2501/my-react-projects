import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

// Functional React component that renders a stacked bar chart using D3.js
const StackedBarChart = () => {
    // Reference to the SVG element, allows D3 to access the DOM
    const svgRef = useRef();

    // Sample dataset containing titles and different categories of values
    const data = [
        { Title: "Past Due", Linedown: "12", P1: "1", P2: "8" },
        { Title: "Today", Linedown: "7", P1: "0", P2: "0" },
        { Title: "Next Day", Linedown: "0", P1: "7", P2: "0" },
        { Title: "2+ Days", Linedown: "0", P1: "9", P2: "13" },
        { Title: "Open", Linedown: "4", P1: "0", P2: "7" },
    ];

    // Color mapping for the different categories in the stacked bars
    const colors = {
        Linedown: "#f36d6c",
        P1: "#f3b408",
        P2: "#cccc42",
    };

    // Runs after every render and sets up the chart using D3.js
    useEffect(() => {
        // Select the SVG element referenced by svgRef and set up dimensions
        const svg = d3.select(svgRef.current);
        const width = 600;
        const height = 400;
        const margin = { top: 50, right: 30, bottom: 100, left: 50 };

        // Clears any previous content in the SVG to avoid overlapping on re-render
        svg.selectAll("*").remove();

        // Create a tooltip that appears on hover
        const tooltip = d3
            .select("body")
            .append("div")
            .style("position", "absolute")
            .style("background-color", "white")
            .style("border", "1px solid black")
            .style("padding", "5px")
            .style("display", "none");

        // Find the maximum value in the dataset for the y-axis scale
        const maxTotal = d3.max(data, (d) => +d.Linedown + +d.P1 + +d.P2);

        // X-axis scale, mapping the titles to equally spaced positions
        const xScale = d3
            .scaleBand()
            .domain(data.map((d) => d.Title))  // Titles as categories
            .range([margin.left, width - margin.right])
            .padding(0.2);

        // Y-axis scale, mapping data values to pixel positions
        const yScale = d3
            .scaleLinear()
            .domain([0, maxTotal * 1.1])  // Domain based on the data values
            .range([height - margin.bottom, margin.top]);

        // Stack generator for stacking the different categories (Linedown, P1, P2)
        const stackGenerator = d3.stack().keys(["Linedown", "P1", "P2"]);
        const stackedData = stackGenerator(data);  // Transform the data for stacking

        // Add gridlines for the chart, helps visually separate data values
        svg.append("g")
            .attr("class", "grid")
            .attr("transform", `translate(${margin.left}, 0)`)
            .call(
                d3.axisLeft(yScale)
                    .ticks(5)
                    .tickSize(-width + margin.left + margin.right)
                    .tickFormat("")
            )
            .selectAll("line")
            .attr("stroke", "#e0e0e0");

        // Add X-axis with titles at the bottom of the chart
        svg.append("g")
            .attr("transform", `translate(0,${height - margin.bottom})`)
            .call(d3.axisBottom(xScale));

        // Add Y-axis with numerical ticks on the left of the chart
        svg.append("g")
            .attr("transform", `translate(${margin.left},0)`)
            .call(d3.axisLeft(yScale).ticks(5));

        // Create a group for each stacked category (Linedown, P1, P2)
        const barsGroup = svg.selectAll(".layer")
            .data(stackedData)
            .enter()
            .append("g")
            .attr("class", (d) => `bar-group ${d.key}`)  // Class based on category
            .attr("fill", (d) => colors[d.key]);  // Color of the category

        // Add rectangular bars to each group, representing the stacked data
        const bars = barsGroup.selectAll("rect")
            .data((d) => d)  // Each segment of the stack
            .enter()
            .append("rect")
            .attr("x", (d) => xScale(d.data.Title))  // Horizontal position
            .attr("y", (d) => yScale(d[1]))  // Top position of the bar
            .attr("height", (d) => yScale(d[0]) - yScale(d[1]))  // Height of the segment
            .attr("width", xScale.bandwidth())  // Width of each bar
            // Tooltip display logic on mouseover
            .on("mouseover", function (event, d) {
                tooltip
                    .style("display", "block")
                    .html(`${d.data.Title}: ${d[1] - d[0]}`)  // Display value
                    .style("left", event.pageX + "px")
                    .style("top", event.pageY - 28 + "px");
                d3.select(this).attr("opacity", 0.8);  // Highlight bar
            })
            .on("mouseout", function () {
                tooltip.style("display", "none");  // Hide tooltip
                d3.select(this).attr("opacity", 1);  // Reset opacity
            });

        // Append text labels inside the bars to show the values
        barsGroup.selectAll("text")
            .data((d) => d)
            .enter()
            .append("text")
            .attr("x", (d) => xScale(d.data.Title) + xScale.bandwidth() / 2)  // Center horizontally
            .attr("y", (d) => yScale(d[1]) + (yScale(d[0]) - yScale(d[1])) / 2)  // Center vertically
            .attr("text-anchor", "middle")
            .style("fill", "#000")
            .style("font-size", "12px")
            .text((d) => (d[1] - d[0] > 0 ? d[1] - d[0] : ""));  // Only show text if value > 0

        // Add chart title (X-axis label) at the bottom center
        svg.append("text")
            .attr("text-anchor", "middle")
            .attr("x", width / 2)
            .attr("y", height - 10)
            .text("Commits");

        // Add Y-axis label rotated 90 degrees
        svg.append("text")
            .attr("text-anchor", "middle")
            .attr("x", -(height / 2))
            .attr("y", 15)
            .attr("transform", "rotate(-90)")
            .text("Shortages");

        // Create a legend with colors corresponding to each category
        const legendXOffset = (width - Object.keys(colors).length * 100) / 2;
        const legend = svg.selectAll(".legend")
            .data(Object.keys(colors))
            .enter()
            .append("g")
            .attr("class", "legend")
            .attr("transform", (d, i) => `translate(${i * 100 + legendXOffset}, ${height - 60})`)
            // Highlight the bars of the category on hover
            .on("mouseover", (event, key) => {
                svg.selectAll(".bar-group").each(function () {
                    const barGroup = d3.select(this);
                    barGroup.selectAll("rect")
                        .attr("opacity", function (d) {
                            return barGroup.attr("class").includes(key) ? 1 : 0.1;
                        });
                });
            })
            // Reset all bars on mouseout
            .on("mouseout", () => {
                bars.attr("opacity", 1);
            });

        // Add colored rectangles for the legend
        legend.append("rect")
            .attr("x", 0)
            .attr("y", 0)
            .attr("width", 20)
            .attr("height", 20)
            .attr("fill", (d) => colors[d]);

        // Add text labels for the legend
        legend.append("text")
            .attr("x", 30)
            .attr("y", 15)
            .text((d) => d);
    }, [data]);  // Effect runs whenever `data` changes

    // Return the SVG element where the chart will be rendered
    return (
        <div>
            <svg ref={svgRef} width={600} height={400}></svg>
        </div>
    );
};

export default StackedBarChart;
