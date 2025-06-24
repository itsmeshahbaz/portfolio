import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from 'react-icons/fa';

function Capabilities() {
  const services = [
    {
      name: 'HTML5',
      icon: <FaHtml5 className="text-orange-600 text-5xl" />,
      color: 'bg-orange-100',
    },
    {
      name: 'CSS3',
      icon: <FaCss3Alt className="text-blue-600 text-5xl" />,
      color: 'bg-blue-100',
    },
    {
      name: 'JavaScript',
      icon: <FaJsSquare className="text-yellow-500 text-5xl" />,
      color: 'bg-yellow-100',
    },
    {
      name: 'React.js',
      icon: <FaReact className="text-cyan-500 text-5xl" />,
      color: 'bg-cyan-100',
    },
  ];

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-20">
      <div className="text-center mb-14">
        <h2 className="text-4xl sm:text-5xl font-bold cursor-pointer text-amber-100 hover:underline transition-all duration-300">
          Services
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col items-center text-center p-8 rounded-full ${service.color} shadow-md hover:shadow-xl transition duration-300`}
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">{service.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Capabilities;

