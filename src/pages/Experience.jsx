import React from 'react';

function Experience() {
  const experiences = [
    {
      title: 'Frontend Developer',
      company: 'Tideoversity Training and Educational Institute',
      duration: 'June, 2025 - Present',
      description:
        'Building responsive user interfaces with React.js, integrating REST APIs, and maintaining modern web applications with performance optimizations.',
    },
    {
      title: 'I.T Technician',
      company: 'Afro-Asian Institute',
      duration: 'Jan, 2024 - Apr, 2025',
      description:
        'Hands-on experience in IT Networking with a solid foundation in technical support, built through coursework, projects, and internships. Quick to apply theoretical knowledge in practical settings.',
    },
  ];

  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-white hover:underline transition-all duration-300">
          Experience
        </h1>
      </div>

      <div className="max-w-3xl mx-auto space-y-10 border-l-4 border-blue-500 pl-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-cyan-700 relative shadow-md rounded-lg p-6 border border-gray-400"
          >
            <div className="absolute -left-3 top-6 bg-blue-500 p-1.5 rounded-full">
              <Icon />
            </div>
            <time className="text-sm italic text-white">{exp.duration}</time>
            <h3 className="text-xl font-bold text-white mt-1">{exp.title}</h3>
            <p className="text-white font-medium">{exp.company}</p>
            <p className="text-white text-justify mt-3">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// Reusable Icon Component
const Icon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 20 20"
    className="h-4 w-4 text-white"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
      clipRule="evenodd"
    />
  </svg>
);

export default Experience;
