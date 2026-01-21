import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const publications = [
  {
    title: "Pending Publication - Ai Usage in Methodological Finding of Chest X-Ray Abnormalities and Respiratory Disease",
    link: "https://docs.google.com/document/d/1ldRoRRxRz9ph8bmy1dLY7EQV_0L_nKH3SaLkskXBSEQ/edit?usp=sharing",
    image: process.env.PUBLIC_URL + "/publications_preview/1.png"
  },
  {
    title: "Data Article - Aerial images and water quality dataset for fishpond's condition monitoring",
    link: "https://doi.org/10.1016/j.dib.2023.110009",
    image: process.env.PUBLIC_URL + "/publications_preview/2.png"
  },
  {
    title: "Conference Paper - Investigation on Correlation of Water Quality Data with Aerial Images",
    link: "https://doi.org/10.1109/ICDXA61007.2024.10470473",
    image: process.env.PUBLIC_URL + "/publications_preview/3.png"
  },
];

const Publications = () => {
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    if (activeImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeImage]);

  const openImage = (image) => setActiveImage(image);
  const closeImage = () => setActiveImage(null);

  return (
    <div className="mb-16">
      <h2 id="publications" className="text-3xl font-semibold mb-6">Publications</h2>
      <ul className="space-y-4">
        {publications.map((pub, index) => (
          <motion.li
            key={index}
            className="px-4 py-2 border border-white/80 rounded-lg shadow-lg glassmorphism flex items-center gap-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            {pub.image && (
              <motion.img
                src={pub.image}
                alt={`${pub.title} Thumbnail`}
                className="w-32 h-32 object-cover rounded cursor-pointer"
                onClick={() => openImage(pub.image)}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
            )}
            <a href={pub.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
              {pub.title}
            </a>
          </motion.li>
        ))}
      </ul>

      <AnimatePresence>
        {activeImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeImage}
          >
            <motion.img
              src={activeImage}
              alt="Zoomed Preview"
              className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-2xl cursor-pointer"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={closeImage}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Publications;
