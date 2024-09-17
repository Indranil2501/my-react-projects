import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const StackedBarChart = () => {
    const svgRef = useRef(); // Reference to the SVG element where the chart will be rendered

    // Sample data for the stacked bar chart
    const data = [
        { Title: "Past Due", Linedown: "12", P1: "1", P2: "8" },
        { Title: "Today", Linedown: "7", P1: "0", P2: "0" },
        { Title: "Next Day", Linedown: "0", P1: "7", P2: "0" },
        { Title: "2+ Days", Linedown: "0", P1: "9", P2: "13" },
        { Title: "Open", Linedown: "4", P1: "0", P2: "7" },
    ];

    // Colors for each stack (Linedown, P1, P2)
    const colors = {
        Linedown: "#f36d6c",
        P1: "#f3b408",
        P2: "#cccc42",
    };

    useEffect(() => {
        const svg = d3.select(svgRef.current);
        const width = 600;
        const height = 400;
        const margin = { top: 50, right: 30, bottom: 100, left: 50 };

        svg.selectAll("*").remove(); // Clear previous chart

        const tooltip = d3
            .select("body")
            .append("div")
            .style("position", "absolute")
            .style("background-color", "white")
            .style("border", "1px solid black")
            .style("padding", "5px")
            .style("display", "none");

        const maxTotal = d3.max(data, (d) => +d.Linedown + +d.P1 + +d.P2);

        const xScale = d3
            .scaleBand()
            .domain(data.map((d) => d.Title))
            .range([margin.left, width - margin.right])
            .padding(0.2);

        const yScale = d3
            .scaleLinear()
            .domain([0, maxTotal * 1.1])
            .range([height - margin.bottom, margin.top]);

        const stackGenerator = d3.stack().keys(["Linedown", "P1", "P2"]);
        const stackedData = stackGenerator(data);

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

        svg.append("g")
            .attr("transform", `translate(0,${height - margin.bottom})`)
            .call(d3.axisBottom(xScale));

        svg.append("g")
            .attr("transform", `translate(${margin.left},0)`)
            .call(d3.axisLeft(yScale).ticks(5));

        const barsGroup = svg.selectAll(".layer")
            .data(stackedData)
            .enter()
            .append("g")
            .attr("class", (d) => `bar-group ${d.key}`)  // Add class for each group
            .attr("fill", (d) => colors[d.key]);

        const bars = barsGroup.selectAll("rect")
            .data((d) => d)
            .enter()
            .append("rect")
            .attr("x", (d) => xScale(d.data.Title))
            .attr("y", (d) => yScale(d[1]))
            .attr("height", (d) => yScale(d[0]) - yScale(d[1]))
            .attr("width", xScale.bandwidth())
            .on("mouseover", function (event, d) {
                tooltip
                    .style("display", "block")
                    .html(`${d.data.Title}: ${d[1] - d[0]}`)
                    .style("left", event.pageX + "px")
                    .style("top", event.pageY - 28 + "px");
                d3.select(this).attr("opacity", 0.8);
            })
            .on("mouseout", function () {
                tooltip.style("display", "none");
                d3.select(this).attr("opacity", 1);
            });

        svg.append("text")
            .attr("text-anchor", "middle")
            .attr("x", width / 2)
            .attr("y", height - 10)
            .text("Commits");

        svg.append("text")
            .attr("text-anchor", "middle")
            .attr("x", -(height / 2))
            .attr("y", 15)
            .attr("transform", "rotate(-90)")
            .text("Shortages");

        // Create the legend
        const legendXOffset = (width - Object.keys(colors).length * 100) / 2;
        const legend = svg.selectAll(".legend")
            .data(Object.keys(colors))
            .enter()
            .append("g")
            .attr("class", "legend")
            .attr("transform", (d, i) => `translate(${i * 100 + legendXOffset}, ${height - 60})`)
            .on("mouseover", (event, key) => {
                // On mouseover, highlight bars of the same key and blur others
                svg.selectAll(".bar-group").each(function () {
                    const barGroup = d3.select(this);
                    barGroup.selectAll("rect")
                        .attr("opacity", function (d) {
                            // Highlight bars of the same key, blur others
                            return barGroup.attr("class").includes(key) ? 1 : 0.1;
                        });
                });
            })
            .on("mouseout", () => {
                // Reset opacity on mouseout
                bars.attr("opacity", 1);
            });

        legend.append("rect")
            .attr("x", 0)
            .attr("y", 0)
            .attr("width", 20)
            .attr("height", 20)
            .attr("fill", (d) => colors[d]);

        legend.append("text")
            .attr("x", 30)
            .attr("y", 15)
            .text((d) => d);
    }, [data]); // Re-run effect when `data` changes

    // Render the SVG in the component
    return (
        <div>
            <svg ref={svgRef} width={600} height={400}></svg>
        </div>
    );
};

export default StackedBarChart;
