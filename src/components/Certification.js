import React, { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const certificationGroups = [
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

const Certification = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [isImageEnlarged, setIsImageEnlarged] = useState(false);

  const handleImageClick = (cert) => {
    setSelectedCert(cert);
    setIsImageEnlarged(true);
  };

  const handleOverlayClick = () => {
    setIsImageEnlarged(false);
    setSelectedCert(null);
  };

  return (
    <div className="mb-16">
      <style>{`
        .transition-opacity {
          transition: opacity 0.3s ease-in-out;
        }
        .transition-transform {
          transition: transform 0.5s ease-in-out;
        }
        .scale-0 {
          transform: scale(0);
        }
        .scale-100 {
          transform: scale(1);
        }
        .zoomed-image {
          object-fit: contain; /* Maintain aspect ratio */
          max-width: 100%;
          max-height: 100%;
        }
        /* Hide the vertical timeline element icon */
        .vertical-timeline-element-icon.bounce-in {
          display: none;
        }
      `}</style>
      
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
                onClick={() => handleImageClick(cert)}
              >
                <div className="flex items-start">
                  <div className="mr-4">
                    <img src={cert.icon} alt="icon" className="w-20 h-20 rounded-lg cursor-pointer" onClick={() => handleImageClick(cert)} />
                  </div>
                  <div>
                    <h3 className="text-xl">{cert.year}</h3>
                    <p>
                      <strong>{cert.description.split(',')[0]}</strong>
                      {cert.description.includes(',') && cert.description.substring(cert.description.indexOf(','))}
                    </p>
                  </div>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
          {groupIndex < certificationGroups.length - 1 && <hr className="border-dotted border-t border-white-800 mt-8 mb-8" />}
        </div>
      ))}

      {selectedCert && (
        <div className={`fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 transition-opacity duration-300 ${isImageEnlarged ? 'opacity-100' : 'opacity-0'}`} onClick={handleOverlayClick}>
          <div className={`transition-transform duration-500 ${isImageEnlarged ? 'scale-100' : 'scale-0'} w-[80vw] h-[80vh] flex items-center justify-center`}>
            <img src={selectedCert.icon} alt="icon" className="zoomed-image rounded-lg" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Certification;
