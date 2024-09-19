import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase } from 'react-icons/fa';

const experienceGroups = [
  [
    {
      year: "February 2024 - Now",
      description: "Academic Events Manager, at HIMTI Binus University",
      extraDescription: "Responsible for organizing and managing academic events under the association.",
      icon: "https://github.com/aimatochysia/portfolio/raw/main/public/experiences_icons/himti.png",
    },
    {
      year: "February 2023 - January 2024",
      description: "Programming Class Division, at HIMTI Binus University",
      extraDescription: "Member of the programming class initiation committee and tutorials for students and outsider.",
      icon: "https://github.com/aimatochysia/portfolio/raw/main/public/experiences_icons/himti.png",
    },
  ],
  [
    {
      year: "February 2024 - Now",
      description: "Regional Treasurer, at Nippon Club Binus University",
      extraDescription: "Managed club's budget, financial activities, and writing monthly report on the financial situation.",
      icon: "https://github.com/aimatochysia/portfolio/raw/main/public/experiences_icons/nippon.png",
    },
    {
      year: "February 2023 - January 2024",
      description: "Support Division, at Nippon Club Binus University",
      extraDescription: "Provided logistical and operational support to club activities.",
      icon: "https://github.com/aimatochysia/portfolio/raw/main/public/experiences_icons/nippon.png",
    },
  ],
  [
    {
      year: "June 2023 - May 2024",
      description: "Research Assistant, Binus University",
      extraDescription: "Assisted in data cleaning of Aerial images and water quality dataset for fishpond's condition monitoring data article paper (https://doi.org/10.1016/j.dib.2023.110009) and submission to ICDXA conference proceedings (https://ieeexplore.ieee.org/document/10470473/).",
      icon: "https://github.com/aimatochysia/portfolio/raw/main/public/experiences_icons/binus.png",
    },
    {
      year: "May 2023 - April 2024",
      description: "Website Manager, Binus University",
      extraDescription: "Managed and updated the Indonesian Entrepreneurship Study Program Association website (apski.net), a consortium of entrepreneurship-focused universities.",
      icon: "https://github.com/aimatochysia/portfolio/raw/main/public/experiences_icons/binus.png",
    },
  ]
];

const processDescriptionWithLinks = (text) => {
  const bracketRegex = /\((.*?)\)/g;

  return text.split(bracketRegex).map((part, index) => {
    if (index % 2 !== 0) {
      if (part.includes('.')) {
        const href = part.startsWith('http') ? part : `https://${part}`;
        return (
          <span key={index}>
            (
            <a href={href} className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">
              {part}
            </a>)
          </span>
        );
      } else {
        return <span key={index}>({part})</span>;
      }
    }
    return <span key={index}>{part}</span>;
  });
};

const Experience = () => {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-semibold mb-6">Past Experiences</h2>
      {experienceGroups.map((experienceList, groupIndex) => (
        <div key={groupIndex} className="mb-10">
          <VerticalTimeline>
            {experienceList.map((exp, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: 'rgba(33, 41, 54, 0.2)',
                  backdropFilter: 'blur(10px)', 
                  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  color: '#fff'
                }}
                contentArrowStyle={{ borderRight: '7px solid rgba(255, 255, 255, 0.3)' }}
                date={exp.year}
                iconStyle={{
                  background: 'rgba(33, 41, 54, 0.2)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  color: '#fff'
                }}
                icon={exp.icon ? <img src={exp.icon} alt="icon" style={{ width: '100%', height: '100%', borderRadius: '50%' }} /> : <FaBriefcase />}
              >
                <h3 className="text-xl font-semibold">{exp.year}</h3>
                <p>
                  <strong>{exp.description.split(',')[0]}</strong>
                  {exp.description.includes(',') && exp.description.substring(exp.description.indexOf(','))}
                </p>
                {exp.extraDescription && (
                  <p className="text-sm  mt-2">
                    {processDescriptionWithLinks(exp.extraDescription)}
                  </p>
                )}
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
          {groupIndex < experienceGroups.length - 1 && <hr className="border-dotted border-t border-white-800 mt-8 mb-8" />}
        </div>
      ))}
    </div>
  );
};

export default Experience;
