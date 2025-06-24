import React from 'react';

function Education() {
  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-300 hover:underline transition-all duration-300">
          Education
        </h1>
      </div>

      <ul className="timeline timeline-vertical timeline-snap-icon max-md:timeline-compact">
        {/* Bachelor's */}
        <li>
          <div className="timeline-middle">
            <Icon />
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic text-sm text-gray-100">2022 - 2026</time>
            <div className="text-xl font-bold text-white">Bachelor in Computer Science</div>
            <div className="text-blue-100 font-medium">Afro-Asian Institute</div>
            <p className="text-justify mt-2 text-white max-w-sm md:max-w-md lg:max-w-lg mx-auto md:mx-0">
              I completed a Bachelor's degree in Computer Science, gaining strong knowledge in programming,
              databases, and software development. I developed skills in problem-solving, logical thinking, and
              modern technologies used in the IT industry.
            </p>
          </div>
          <hr />
        </li>

        {/* Intermediate */}
        <li>
          <hr />
          <div className="timeline-middle">
            <Icon />
          </div>
          <div className="timeline-end md:mb-10">
            <time className="font-mono italic text-sm text-gray-100">2020 - 2022</time>
            <div className="text-xl font-bold text-white">Intermediate FSc (Pre-Engineering)</div>
            <div className="text-blue-100 font-medium">Aspire Group of Colleges</div>
            <p className="text-justify mt-2 text-white max-w-sm md:max-w-md lg:max-w-lg mx-auto md:mx-0">
              Completed pre-engineering education focused on mathematics, physics, and chemistry, laying a strong
              foundation for technical and engineering studies. Built analytical thinking and problem-solving skills.
            </p>
          </div>
          <hr />
        </li>
      </ul>
    </section>
  );
}

// Reusable SVG Icon Component
const Icon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-blue-600">
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
      clipRule="evenodd"
    />
  </svg>
);

export default Education;