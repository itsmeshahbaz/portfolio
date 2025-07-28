import React from 'react';
// import bgImage from '../imgs/img6.jpeg'; // optional usage if needed for wave section

function Intro() {
  return (
    <div className="relative overflow-hidden min-h-screen text-white">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0" />

      {/* Main content */}
      <section className="relative z-10 flex justify-center items-center w-full min-h-screen">
        <div className="container mx-auto flex px-4 py-24 flex-col items-center text-center">
          {/* Profile Image */}
          <img
            src="../imgs/img6.jpeg"
            alt="Profile"
            className="w-40 h-40 rounded-full mb-8 border-4 border-amber-500 hover:border-amber-600 shadow-2xl transition duration-300"
          />

          {/* Text Content */}
          <div className="md:w-2/3">
            <h1 className="text-6xl sm:text-7xl font-extrabold text-amber-400 mb-2">Hi!</h1>
            <h2 className="text-2xl sm:text-4xl font-semibold text-amber-300 mb-6">
              It's Me M. Shahbaz<br className="hidden sm:block" />
              <span className="text-white">Web Developer</span>
            </h2>
            <p className="text-gray-300 text-lg px-4 leading-relaxed">
              Passionate Web Developer specializing in responsive, user-friendly websites and apps.
              Skilled in HTML, CSS, JavaScript, and modern frameworks like React.
              Focused on clean code and seamless user experiences.
            </p>
          </div>

          {/* Button */}
          <div className="mt-8">
            <a
              href="../cv.pdf"
              download="M.Shahbaz-CV.pdf"
              className="inline-block px-6 py-3 bg-amber-500 hover:bg-amber-400 text-black font-semibold rounded-full shadow-md transition duration-300"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>

      </div>
  );
}

export default Intro;
