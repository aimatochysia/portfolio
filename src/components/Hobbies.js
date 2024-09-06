import React from 'react';

const hobbies = ["Photography", "Traveling", "Reading", "Gaming"];

const Hobbies = () => {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-semibold mb-6">Hobbies</h2>
      <ul className="flex flex-wrap gap-4">
        {hobbies.map((hobby) => (
          <li key={hobby} className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-lg glassmorphism">
            {hobby}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Hobbies;
