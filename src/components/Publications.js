import React from 'react';

const publications = [
  { title: "Understanding React Hooks", link: "https://example.com/article1" },
  { title: "Mastering Tailwind CSS", link: "https://example.com/article2" },
];

const Publications = () => {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-semibold mb-6">Publications</h2>
      <ul className="space-y-4">
        {publications.map((pub, index) => (
          <li key={index} className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-lg glassmorphism transform hover:scale-105 transition-transform duration-300">
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
