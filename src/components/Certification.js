import React, { useState, useEffect } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion, AnimatePresence } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';

const certificationGroups = [
  [
    {
      year: "September 2023",
      description: "Sololearn SQL Lang",
      icon: process.env.PUBLIC_URL + "/certification/SQL.jpg",
    },
    {
      year: "February 2023",
      description: "Sololearn CSS Lang",
      icon: process.env.PUBLIC_URL + "/certification/CSS.jpg",
    },
    {
      year: "November 2022",
      description: "Sololearn HTML",
      icon: process.env.PUBLIC_URL + "/certification/HTML.jpg",
    },
    {
      year: "November 2022",
      description: "Sololearn C Lang",
      icon: process.env.PUBLIC_URL + "/certification/C.jpg",
    },
  ],
];

const Certification = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedCert]);

  const handleImageClick = (cert) => {
    setSelectedCert(cert);
  };

  const handleOverlayClick = () => {
    setSelectedCert(null);
  };

  return (
    <div className="mb-16">
      <style>{`
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
                visible={true}
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
                    <img src={cert.icon} alt="icon" className="w-20 h-20 rounded-lg cursor-pointer hover:scale-105 transition-transform duration-200" onClick={() => handleImageClick(cert)} />
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

      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleOverlayClick}
          >
            <motion.div 
              className="w-[80vw] h-[80vh] flex items-center justify-center"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <img 
                src={selectedCert.icon} 
                alt="Certificate" 
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl cursor-pointer" 
                onClick={handleOverlayClick}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Certification;
