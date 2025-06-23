import React from 'react';

function Skills() {
  const technicianSkills = [
    "Maintained office PCs, networks and mobile devices",
    "Established, repaired and optimized networks by installing wiring, cabling and devices",
    "Skilled in assembling, installing, and maintaining CCTV systems",
    "Proficient in configuring cameras, troubleshooting issues, and system checks",
    "Explained technical concepts to non-technical individuals",
    "Performed preventive maintenance on hardware to reduce failures"
  ];

  const frontendSkills = [
    "Developing responsive interfaces using React.js and Tailwind CSS",
    "Consuming RESTful APIs and integrating with front-end components",
    "Implementing reusable UI components for scalability",
    "Optimizing performance through lazy loading and memoization",
    "Managing state using React Hooks and Context API",
    "Version control using Git and GitHub for collaboration"
  ];

  return (
    <section className="w-full  py-12 px-4 sm:px-6 lg:px-20">
      <div className="text-center mb-14">
        <h1 className="text-4xl sm:text-5xl font-bold text-white hover:underline transition duration-300">
          Skills
        </h1>
      </div>

      {/* I.T Technician Section */}
      <div className="max-w-6xl mx-auto mb-10">
        <div className="bg-cyan-900 rounded-2xl shadow-lg border px-6 py-8 transition hover:scale-[1.02] duration-300">
          <h2 className="text-2xl font-semibold text-white mb-4">I.T Technician</h2>
          <ul className="list-disc list-inside space-y-2 text-white">
            {technicianSkills.map((skill, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2 text-blue-500 mt-1">✓</span>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Frontend Developer Section */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-cyan-900 rounded-2xl shadow-lg border px-6 py-8 transition hover:scale-[1.02] duration-300">
          <h2 className="text-2xl font-semibold text-white mb-4">Frontend Developer</h2>
          <ul className="list-disc list-inside space-y-2 text-white">
            {frontendSkills.map((skill, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2 text-blue-500 mt-1">✓</span>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
