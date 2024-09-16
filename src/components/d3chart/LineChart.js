import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const LineChart = () => {
  const svgRef = useRef();

  useEffect(() => {
    const data = [
      { category: 'Linedown', values: [0, 10, 5] },
      { category: 'P1', values: [7, 3, 4] },
      { category: 'P2', values: [5, 1, 0] },
      { category: 'P3', values: [6, 9, 2] },
    ];

    const colors = ['#4CAF50', '#FF5722', '#3F51B5'];
    const categories = ['Linedown', 'P1', 'P2', 'P3'];
    
    const width = 500;
    const height = 300;
    const margin = { top: 30, right: 30, bottom: 50, left: 60 };

    const svg = d3.select(svgRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // X axis (categories)
    const x = d3.scalePoint()
      .domain(categories)
      .range([0, width]);

    svg.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x));

    // Y axis (values)
    const y = d3.scaleLinear()
      .domain([0, d3.max(data.flatMap(d => d.values))])
      .nice()
      .range([height, 0]);

    svg.append('g')
      .call(d3.axisLeft(y));

    // Line generator for each value index (0, 1, 2)
    const lineGenerator = d3.line()
      .x((d, i) => x(categories[i]))
      .y(d => y(d))
      .curve(d3.curveMonotoneX); // Makes the line smoother

    // Add lines for each value set
    data[0].values.forEach((_, index) => {
      const valuesForLine = data.map(d => d.values[index]);

      svg.append('path')
        .datum(valuesForLine)
        .attr('fill', 'none')
        .attr('stroke', colors[index])
        .attr('stroke-width', 2)
        .attr('d', lineGenerator);
    });

    // Add circles on data points
    data.forEach((d, i) => {
      d.values.forEach((value, index) => {
        svg.append('circle')
          .attr('cx', x(d.category))
          .attr('cy', y(value))
          .attr('r', 4)
          .attr('fill', colors[index]);
      });
    });

    // X axis label
    svg.append('text')
      .attr('text-anchor', 'end')
      .attr('x', width / 2 + margin.left)
      .attr('y', height + margin.top + 20)
      .text('Commits');

    // Y axis label
    svg.append('text')
      .attr('text-anchor', 'end')
      .attr('transform', 'rotate(-90)')
      .attr('y', -margin.left + 15)
      .attr('x', -height / 2)
      .text('Shortages');
  }, []);

  return (
    <svg ref={svgRef}></svg>
  );
};

export default LineChart;
