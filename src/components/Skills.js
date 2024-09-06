import React from 'react';

const skills = [
  { name: "React", proficiency: 90 },
  { name: "JavaScript", proficiency: 85 },
  { name: "CSS", proficiency: 80 },
  { name: "Tailwind CSS", proficiency: 75 },
];

const Skills = () => {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-semibold mb-6">Top Skills</h2>
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name} className="flex items-center space-x-4">
            <span className="w-1/4">{skill.name}</span>
            <div className="w-3/4 bg-gray-300 dark:bg-gray-700 rounded-full h-5 overflow-hidden">
              <div
                className="bg-blue-500 h-full rounded-full glassmorphism transition-all duration-500 ease-out"
                style={{ width: `${skill.proficiency}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
