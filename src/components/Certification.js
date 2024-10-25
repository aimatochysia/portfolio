import React, { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaCertificate } from 'react-icons/fa';

const certificationGroups = [
//   [
//     {
//       year: "September 2023",
//       description: "AWS Certified Cloud Practitioner",
//       extraDescription: "Earned the foundational cloud certification covering AWS core services and best practices.",
//       icon: "https://github.com/aimatochysia/portfolio/raw/main/public/certifications_icons/aws.png",
//     },
//     {
//       year: "August 2023",
//       description: "Google IT Support Professional Certificate",
//       extraDescription: "Completed a comprehensive course on IT support fundamentals including networking, operating systems, and troubleshooting.",
//       icon: "https://github.com/aimatochysia/portfolio/raw/main/public/certifications_icons/google.png",
//     },
//   ],
//   [
//     {
//       year: "July 2023",
//       description: "Certified Kubernetes Administrator (CKA)",
//       extraDescription: "Demonstrated expertise in Kubernetes cluster management, security, and troubleshooting.",
//       icon: "https://github.com/aimatochysia/portfolio/raw/main/public/certifications_icons/kubernetes.png",
//     },
//     {
//       year: "May 2023",
//       description: "Microsoft Certified: Azure Fundamentals",
//       extraDescription: "Validated knowledge of Microsoft Azure services, solutions, and security.",
//       icon: "https://github.com/aimatochysia/portfolio/raw/main/public/certifications_icons/azure.png",
//     },
//   ],
  [
    {
      year: "September 2023",
      description: "Sololearn SQL Lang",
      icon: "https://github.com/aimatochysia/portfolio/raw/main/public/certification/SQL.jpg",
    },
    {
        year: "February 2023",
        description: "Sololearn CSS Lang",
        icon: "https://github.com/aimatochysia/portfolio/raw/main/public/certification/CSS.jpg",
      },
      {
        year: "November 2022",
        description: "Sololearn HTML",
        icon: "https://github.com/aimatochysia/portfolio/raw/main/public/certification/HTML.jpg",
      },
      {
        year: "November 2022",
        description: "Sololearn C Lang",
        icon: "https://github.com/aimatochysia/portfolio/raw/main/public/certification/C.jpg",
      },

  ],
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

const Certification = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const handleCertClick = (cert) => {
    setSelectedCert(cert);
  };

  const handleOverlayClick = () => {
    setSelectedCert(null);
  };

  return (
    <div className="mb-16">
      <h2 id="certification" className="text-3xl mb-6">Certifications</h2>
      {certificationGroups.map((certificationList, groupIndex) => (
        <div key={groupIndex} className="mb-10">
          <VerticalTimeline>
            {certificationList.map((cert, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work cursor-pointer"
                contentStyle={{
                  background: 'rgba(33, 41, 54, 0.2)',
                  backdropFilter: 'blur(7px)',
                  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  color: '#fff'
                }}
                contentArrowStyle={{ borderRight: '7px solid rgba(255, 255, 255, 0.3)' }}
                date={cert.year}
                iconStyle={{
                  background: 'rgba(33, 41, 54, 0.2)',
                  backdropFilter: 'blur(7px)',
                  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  color: '#fff'
                }}
                icon={
                  cert.icon ? (
                    <img src={cert.icon} alt="icon" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
                  ) : (
                    <FaCertificate />
                  )
                }
                onClick={() => handleCertClick(cert)} // Handle the click event
              >
                <h3 className="text-xl">{cert.year}</h3>
                <p>
                  <strong>{cert.description.split(',')[0]}</strong>
                  {cert.description.includes(',') && cert.description.substring(cert.description.indexOf(','))}
                </p>
                {cert.extraDescription && (
                  <p className="text-sm mt-2">
                    {processDescriptionWithLinks(cert.extraDescription)}
                  </p>
                )}
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
          {groupIndex < certificationGroups.length - 1 && <hr className="border-dotted border-t border-white-800 mt-8 mb-8" />}
        </div>
      ))}

      {/* Overlay for the selected certification */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50" onClick={handleOverlayClick}>
          <div className="bg-white p-6 rounded-lg max-w-md w-full transition-transform transform scale-100 animate-zoom-in">
            <h3 className="text-xl mb-4">{selectedCert.year}</h3>
            <img src={selectedCert.icon} alt="icon" className="w-20 h-20 mb-4 rounded-full" />
            <h4 className="font-semibold">{selectedCert.description}</h4>
            <p className="mt-2">{processDescriptionWithLinks(selectedCert.extraDescription)}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certification;
