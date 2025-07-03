'use client';
import React from 'react';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio built with React.js and Tailwind CSS.',
    link: 'https://whoseshahbaz.vercel.app/',
  },
  {
    title: 'pointlinestudios',
    description: 'A full-stack shopping website with React and Node.js.',
    link: 'https://pointlinestudio.com/',
  },
  {
    title: 'Leathercraftss',
    description: 'A real-time chat application using Socket.io and React.',
    link: 'https://leathercraftss.com/',
  },
  {
    title: 'Meal Mate',
    description: 'A full-stack catering website with React',
    link: 'https://mealmatepk.vercel.app/',
  },
];

function Projects() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-20 ">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white hover:text-green-600">Projects</h2>
        <p className="text-white mt-2 text-2xl">Some of the projects I have worked on recently.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-cyan-900 rounded-2xl shadow-md p-6 transition hover:shadow-amber-300"
          >
            <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
            <p className="text-gray-200 mt-2 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:underline"
            >
              Visit Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
