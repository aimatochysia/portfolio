import React from 'react';

const publications = [
  { title: "Data Article - Aerial images and water quality dataset for fishpond's condition monitoring", link: "https://doi.org/10.1016/j.dib.2023.110009" },
  { title: "Conference Paper - Investigation on Correlation of Water Quality Data with Aerial Images", link: "https://doi.org/10.1109/ICDXA61007.2024.10470473" },
];

const Publications = () => {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-semibold mb-6">Publications</h2>
      <ul className="space-y-4">
        {publications.map((pub, index) => (
          <li key={index} className="px-4 py-2 border border-white/80 rounded-lg shadow-lg glassmorphism transform hover:scale-105 transition-transform duration-300">
            <a href={pub.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              {pub.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Publications;
