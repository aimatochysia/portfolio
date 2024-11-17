import React, { useState } from 'react';

const publications = [
  {
    title: "Pending Publication - Ai Usage in Methodological Finding of Chest X-Ray Abnormalities and Respiratory Disease",
    link: "https://docs.google.com/document/d/1ldRoRRxRz9ph8bmy1dLY7EQV_0L_nKH3SaLkskXBSEQ/edit?usp=sharing",
    image: "https://github.com/aimatochysia/portfolio/raw/main/public/publications_preview/1.png"
  },
  {
    title: "Data Article - Aerial images and water quality dataset for fishpond's condition monitoring",
    link: "https://doi.org/10.1016/j.dib.2023.110009",
    image: "https://github.com/aimatochysia/portfolio/raw/main/public/publications_preview/2.png"
  },
  {
    title: "Conference Paper - Investigation on Correlation of Water Quality Data with Aerial Images",
    link: "https://doi.org/10.1109/ICDXA61007.2024.10470473",
    image: "https://github.com/aimatochysia/portfolio/raw/main/public/publications_preview/3.png"
  },
];

const Publications = () => {
  const [activeImage, setActiveImage] = useState(null);

  const openImage = (image) => setActiveImage(image);
  const closeImage = () => setActiveImage(null);

  return (
    <div className="mb-16">
      <h2 id="publications" className="text-3xl font-semibold mb-6">Publications</h2>
      <ul className="space-y-4">
        {publications.map((pub, index) => (
          <li
            key={index}
            className="px-4 py-2 border border-white/80 rounded-lg shadow-lg glassmorphism transform hover:scale-105 transition-transform duration-300 flex items-center gap-4"
          >
            {pub.image && (
              <img
                src={pub.image}
                alt={`${pub.title} Thumbnail`}
                className="w-32 h-32 object-cover rounded cursor-pointer"
                onClick={() => openImage(pub.image)}
              />
            )}
            <a href={pub.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
              {pub.title}
            </a>
          </li>
        ))}
      </ul>

      {activeImage && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-md flex justify-center items-center z-50"
          onClick={closeImage}
        >
          <img
            src={activeImage}
            alt="Zoomed Preview"
            className="max-w-full max-h-full rounded shadow-lg cursor-pointer"
            onClick={closeImage}
          />
        </div>
      )}
    </div>
  );
};

export default Publications;
