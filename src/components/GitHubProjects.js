import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';

const githubProjects = [
  {
    title: "Indonesian Stock Screener",
    description: "Screen Indonesian stocks based on SMAs, volatility, and volumes that update daily automatically",
    link: "https://github.com/aimatochysia/stock-downloader",
  },
  {
    title: "Discord Active Apps RPC",
    description: "Show off currently active apps that also selects appropriate GIF / logo for the banner on Discord",
    link: "https://github.com/aimatochysia/discord-rpc",
  },
  {
    title: "Wallpaper Engine Coding Wallpaper",
    description: "Wallpaper engine's wallpaper with coding background, available with several language selections. With this daily live subscriber below:",
    link: "https://github.com/aimatochysia/Wallpaper-Engine-Code-Clock",
    graph: true,
  },
  {
    title: "Fullstack Indonesian Ship Watch Webapp",
    description: "A mockup of Indonesian Ship Watch utilizing Global Fishing Watch API, with postgreSQL user database complete with secure login and signup form",
    link: "https://github.com/aimatochysia/Illegal-Maritime-Activities-System",
  },
  {
    title: "Logitech's K380 Working Fn Lock",
    description: "Working Fn lock to change between media keys and function keys on Logitech K380",
    link: "https://github.com/aimatochysia/K380-Fn-Lock",
  },
  {
    title: "Web Color Picker",
    description: "A simple color picker chrome extension for getting color RGB / HEX code fast",
    link: "https://github.com/aimatochysia/color-picker-extension",
  },
];

const GitHubProjects = () => {
  const [subscriberData, setSubscriberData] = useState([]);

  useEffect(() => {
    d3.csv(
      'https://raw.githubusercontent.com/aimatochysia/steam-workshop-subscriber-count/main/subscriber_count.csv'
    ).then((data) => {
      const filteredData = data.map((row) => +row['3238355078']).filter((value) => !isNaN(value));
      setSubscriberData(filteredData);
    });
  }, []);

  const renderGraph = (data) => {
    if (data.length === 0) return null;

    const width = 200;
    const height = 100;
    const margin = { top: 20, right: 10, bottom: 30, left: 30 };

    const xScale = d3.scaleLinear().domain([1, data.length]).range([margin.left, width - margin.right]);
    const yScale = d3.scaleLinear().domain([0, d3.max(data)]).range([height - margin.bottom, margin.top]);

    const lineGenerator = d3
      .line()
      .x((d, i) => xScale(i + 1))
      .y((d) => yScale(d))
      .curve(d3.curveMonotoneX);

    const lineData = lineGenerator(data);

    return (
      <svg width={width} height={height}>
        <g>
          <line x1={margin.left} y1={height - margin.bottom} x2={width - margin.right} y2={height - margin.bottom} stroke="#e0e0e0" />
          <line x1={margin.left} y1={margin.top} x2={margin.left} y2={height - margin.bottom} stroke="#e0e0e0" />
          {yScale.ticks(5).map((tick) => (
            <g key={tick} transform={`translate(0,${yScale(tick)})`}>
              <line x1={margin.left} x2={margin.left + 5} stroke="#e0e0e0" />
              <text x={margin.left - 5} y={5} textAnchor="end" fill="#ccc" fontSize="10">
                {tick}
              </text>
            </g>
          ))}
          {xScale.ticks(data.length).map((tick) => (
            <g key={tick} transform={`translate(${xScale(tick)},0)`}>
              <line y1={height - margin.bottom} y2={height - margin.bottom + 5} stroke="#e0e0e0" />
              <text y={height - margin.bottom + 15} x={0} textAnchor="middle" fill="#ccc" fontSize="10">
                {tick}
              </text>
            </g>
          ))}
        </g>
        <path d={lineData} fill="none" stroke="#00f" strokeWidth="2" />
        <g>
          {data.map((d, i) => (
            <circle key={i} cx={xScale(i + 1)} cy={yScale(d)} r="3" fill="#f00" />
          ))}
        </g>
        <text x={width / 2} y={height - 5} textAnchor="middle" fill="#ccc" fontSize="10">Day by Day</text>
        <text transform={`translate(5, ${height / 2}) rotate(-90)`} textAnchor="middle" fill="#ccc" fontSize="10">Subscribers</text>
      </svg>
    );
  };

  return (
    <div className="mb-16">
      <h2 id="projects" className="text-3xl font-semibold mb-6">GitHub Projects</h2>
      <div className="flex flex-wrap -mx-4">
        {githubProjects.map((project, index) => (
          <div key={index} className="w-full md:w-1/3 px-4 mb-8">
            <div
              className="p-4 backdrop-blur-lg border border-white/30 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 flex flex-col h-full"
              style={{
                backdropFilter: 'blur(7px)',
                color: '#ffffff',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
                borderRadius: '12px',
              }}
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-32 object-cover rounded mb-4"
                />
              )}
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
              {project.graph && renderGraph(subscriberData)}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-auto"
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GitHubProjects;
