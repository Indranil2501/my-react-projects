import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const BarChart = () => {
  const chartId = 'barChart';
  const svgRef = useRef();

  useEffect(() => {
    const data = [
      { category: 'Linedown', values: [0, 10, 5] },
      { category: 'P1', values: [7, 3, 4] },
      { category: 'P2', values: [5, 1, 0] },
      { category: 'P3', values: [6, 9, 2] },
    ];

    const colors = ['#4CAF50', '#FF5722', '#3F51B5'];

    const width = window.screen.width - document.getElementById(chartId).clientWidth;
    const height = 300;
    const margin = { top: 30, right: 30, bottom: 50, left: 60 };

    const svg = d3.select(svgRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // X axis
    const x0 = d3.scaleBand()
      .domain(data.map(d => d.category))
      .range([0, width])
      .padding(0.2);

    const x1 = d3.scaleBand()
      .domain(d3.range(data[0].values.length))
      .range([0, x0.bandwidth()])
      .padding(0.05);

    svg.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x0));

    // Y axis
    const y = d3.scaleLinear()
      .domain([0, d3.max(data.flatMap(d => d.values))])
      .nice()
      .range([height, 0]);

    svg.append('g')
      .call(d3.axisLeft(y));

    // Bars
    svg.append('g')
      .selectAll('g')
      .data(data)
      .enter()
      .append('g')
      .attr('transform', d => `translate(${x0(d.category)}, 0)`)
      .selectAll('rect')
      .data(d => d.values.map((value, index) => ({ value, index })))
      .enter()
      .append('rect')
      .attr('x', d => x1(d.index))
      .attr('y', d => y(d.value))
      .attr('width', x1.bandwidth())
      .attr('height', d => height - y(d.value))
      .attr('fill', d => colors[d.index]);

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
    <svg id={chartId} ref={svgRef}></svg>
  );
};

export default BarChart;
