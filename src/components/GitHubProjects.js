import React, { useState, useEffect } from 'react'
import * as d3 from 'd3'

const githubProjects = [
  {
    title: 'Q-SafeVault',
    description:
      'Post-quantum zero-trust, self-hostable password manager backed by TPM (if supported) and HSM (enterprise). Uses only FIPS/NIST recommended algorithms. Cross-platform: Linux, macOS, iOS, Android, Windows.',
    link: 'https://github.com/aimatochysia/qsafevault'
  },
  {
    title: 'FicBatch - Archive of Our Own Batch Mobile Downloader and Reader',
    description:
      'Mobile app for downloading multiple and reading Archive of Our Own fanfictions on mobile devices',
    link: 'https://github.com/aimatochysia/FicBatch'
  },
  {
    title: 'Indonesian Stock Screener',
    description:
      'Screen Indonesian stocks based on SMAs, volatility, and volumes that update daily automatically',
    link: 'https://github.com/aimatochysia/stock-screener'
  },
  {
    title: 'Wallpaper Engine Coding Wallpaper',
    description:
      "Wallpaper engine's wallpaper with coding background, available with several language selections. With this daily live subscribers gain below:",
    link: 'https://github.com/aimatochysia/Wallpaper-Engine-Code-Clock',
    graph: true
  },
  {
    title: 'Pinoted',
    description:
      'Pinoted is a note-taking application that allows you to create sticky notes that stay on your screen.',
    link: 'https://github.com/aimatochysia/pinoted'
  },
  {
    title: 'Web Color Picker',
    description:
      'A simple color picker chrome extension for getting color RGB / HEX code fast',
    link: 'https://github.com/aimatochysia/color-picker-extension'
  },
]

const GitHubProjects = () => {
  const [subscriberData, setSubscriberData] = useState([])

  useEffect(() => {
    d3.csv(
      'https://raw.githubusercontent.com/aimatochysia/steam-workshop-subscriber-count/main/subscriber_count.csv'
    )
      .then(data => {
        const filteredData = data
          .map(row => +row['3238355078'])
          .filter(value => !isNaN(value))
        const gains = filteredData.map((value, index) =>
          index === 0 ? 0 : value - filteredData[index - 1]
        )
        setSubscriberData(gains)
      })
      .catch(error => {
        console.warn('Could not load subscriber data:', error)
        // Set some sample data as fallback
        setSubscriberData([5, 12, 8, 15, 10, 18, 7, 20, 14, 9])
      })
  }, [])

  const renderGraph = data => {
    if (data.length === 0) return null
    const width = 200
    const height = 100
    const margin = { top: 20, right: 10, bottom: 30, left: 30 }
    const xScale = d3
      .scaleLinear()
      .domain([1, data.length])
      .range([margin.left, width - margin.right])
    const yScale = d3
      .scaleLinear()
      .domain([d3.min(data), d3.max(data)])
      .range([height - margin.bottom, margin.top])
    const lineGenerator = d3
      .line()
      .x((d, i) => xScale(i + 1))
      .y(d => yScale(d))
      .curve(d3.curveMonotoneX)

    const lineData = lineGenerator(data)
    const xTickValues = d3.range(1, data.length + 1, Math.ceil(data.length / 5))
    const yTickValues = yScale.ticks(5)

    return (
      <svg width={width} height={height}>
        <g>
          <line
            x1={margin.left}
            y1={height - margin.bottom}
            x2={width - margin.right}
            y2={height - margin.bottom}
            stroke='#e0e0e0'
          />
          <line
            x1={margin.left}
            y1={margin.top}
            x2={margin.left}
            y2={height - margin.bottom}
            stroke='#e0e0e0'
          />
          {yTickValues.map(tick => (
            <g key={tick} transform={`translate(0,${yScale(tick)})`}>
              <line
                x1={margin.left}
                x2={width - margin.right}
                stroke='#e0e0e0'
              />
              <text
                x={margin.left - 5}
                y={5}
                textAnchor='end'
                fill='#ccc'
                fontSize='10'
              >
                {tick}
              </text>
            </g>
          ))}
          {xTickValues.map(tick => (
            <g key={tick} transform={`translate(${xScale(tick)},0)`}>
              <line
                y1={height - margin.bottom}
                y2={height - margin.bottom + 5}
                stroke='#e0e0e0'
              />
              <text
                y={height - margin.bottom + 15}
                x={0}
                textAnchor='middle'
                fill='#ccc'
                fontSize='10'
              >
                {tick}
              </text>
            </g>
          ))}
        </g>
        <path d={lineData} fill='none' stroke='#f00' strokeWidth='2' />
        <g>
          {data.map((d, i) => (
            <circle
              key={i}
              cx={xScale(i + 1)}
              cy={yScale(d)}
              r='3'
              fill='#f00'
            />
          ))}
        </g>
        <text
          x={width / 2}
          y={height - 5}
          textAnchor='middle'
          fill='#ccc'
          fontSize='10'
        >
          Day by day
        </text>
        <text
          transform={`translate(5, ${height / 2}) rotate(-90)`}
          textAnchor='middle'
          fill='#ccc'
          fontSize='10'
        >
          Daily Gain
        </text>
      </svg>
    )
  }

  return (
    <div className='mb-16'>
      <h2 id='projects' className='text-3xl font-semibold mb-6'>
        GitHub Projects
      </h2>
      <div className='flex flex-wrap -mx-4'>
        {githubProjects.map((project, index) => (
          <div key={index} className='w-full md:w-1/3 px-4 mb-8'>
            <div
              className='p-4 backdrop-blur-lg border border-white/30 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 flex flex-col h-full'
              style={{
                backdropFilter: 'blur(7px)',
                color: '#ffffff',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
                borderRadius: '12px'
              }}
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-32 object-cover rounded mb-4'
                />
              )}
              <h3 className='text-2xl font-semibold mb-2'>{project.title}</h3>
              <p className='text-gray-400 mb-4 flex-grow'>
                {project.description}
              </p>
              {project.graph && renderGraph(subscriberData)}
              <a
                href={project.link}
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-500 hover:underline mt-auto'
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GitHubProjects
