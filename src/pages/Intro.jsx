import React from 'react';

function Intro() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  text-white">
      <section className="text-gray-600 body-font flex justify-center items-center w-full">
        <div className="container mx-auto flex px-2 py-24 flex-col items-center text-center">
          {/* Profile Image */}
          <img 
            src="../imgs/img6.jpeg"
            alt="Profile"
            className="w-40 h-40 rounded-full mb-8 border-5 hover:border-amber-600 transform-border border-amber-400 shadow-lg"
          />

          {/* Text Content */}
          <div className="md:w-2/3">
            <h1 className="text-8xl text-amber-400 mb-4">Hi!</h1>
            <h2 className="title-font sm:text-4xl mb-4 font-medium text-amber-200">
              IT's Me M. Shahbaz<br className="hidden lg:inline-block" />
              Web Developer
            </h2>
            <p className="text-neutral-300 px-2">
              Passionate Web Developer specializing in creating responsive, user-friendly websites and applications.
              Proficient in HTML, CSS, JavaScript, and modern frameworks like React.
              Committed to delivering clean, efficient code and seamless digital experiences
            </p>
          </div>
          <div className='py-5'>
          <button className='h-10 w-40 border-amber-400 bg-amber-600 hover:bg-amber-400 hover:text-black text-white rounded-4xl'> <a href="../cv.pdf" download={'../cv.pdf'}>Download CV</a></button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Intro;
