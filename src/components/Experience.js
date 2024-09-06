import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase } from 'react-icons/fa';

const experiences = [
  { year: "2020", description: "Started as a Junior Developer at Company X." },
  { year: "2021", description: "Promoted to Mid-level Developer at Company Y." },
  { year: "2022", description: "Senior Developer at Company Z." },
];

const Experience = () => {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-semibold mb-6">Past Experiences</h2>
      <VerticalTimeline>
        {experiences.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{
              background: '#212936', // Semi-transparent background
              backdropFilter: 'blur(10px)', // Apply blur for glassmorphism
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
              border: '1px solid rgba(255, 255, 255, 0.3)', // Border to match glassmorphism effect
              color: '#fff' // Text color for contrast
            }}
            contentArrowStyle={{ borderRight: '7px solid rgba(255, 255, 255, 0.3)' }}
            date={exp.year}
            iconStyle={{
              background: '#212936', // Glassy icon background
              backdropFilter: 'blur(10px)',
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              color: '#fff' // Icon color
            }}
            icon={<FaBriefcase />}
          >
            <h3 className="text-xl font-semibold">{exp.year}</h3>
            <p>{exp.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
