import React from 'react';

function Featur() {
  const items = [
    {
      title: 'Fast Performance',
      description: 'Optimized for speed and responsiveness using React and Tailwind.',
      icon: '⚡'
    },
    {
      title: 'Responsive Design',
      description: 'Mobile-first layout that adapts across all devices.',
      icon: '📱'
    },
    {
      title: 'Modern UI',
      description: 'Styled with Tailwind CSS for a sleek and modern look.',
      icon: '🎨'
    },
    {
      title: 'Reusable Components',
      description: 'Built with reusable components for easy maintenance.',
      icon: '♻️'
    },
    {
      title: 'Clean Code',
      description: 'Written in clean, readable JSX with best practices.',
      icon: '🧹'
    },
  ];

  return (
    <section className=" py-12 px-4 sm:px-6 lg:px-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-cyan-400 cursor-pointer">Our Features</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {items.map((item, index) => (
          <div key={index} className=" p-6 rounded-2xl shadow-amber-200 hover:shadow-lg transition-all text-center flex flex-col items-center">
            <div className="text-4xl mb-4 cursor-pointer">{item.icon}</div>
            <h2 className="text-xl font-semibold text-emerald-200 mb-2 cursor-pointer">{item.title}</h2>
            <p className="text-emerald-300 cursor-pointer">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Featur;
