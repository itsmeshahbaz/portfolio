import React from 'react'
import Edcation from '../component/Edcation'
import Skills from './Skills'
import Intro from './Intro'
import Experience from './Experience'
function About() {
  return (
    <div >
      <Intro />
      <div>
        <section class=" text-black body-font ">
  <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <div class="text-center lg:w-2/3 w-full">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">The purpose of learning is growth, and our minds, unlike our bodies, can continue growing as we continue to live</h1>
      <p class="mb-8 leading-relaxed text-blue-200">I'm a skilled software developer with experience in JavaScript, and expertise in frameworks like React, Node.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!</p>
      
    </div>
  </div>
</section>
      </div>
      <Edcation />
      <Skills />
      <Experience />
    </div>
  )
}

export default About
