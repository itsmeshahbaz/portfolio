import React from 'react'
import Intro from './Intro'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import Projects from './Projects'

function Home() {
  return (
    <div>
      <Intro />
{/* section */}
<section >
  <div class="container px-5 py-24 mx-auto mb-30 flex flex-wrap">
    <div class="lg:w-2/3 mx-auto">
      <div class="flex flex-wrap w-full  py-32 px-10 relative mb-4">
        <img alt="gallery" class="w-200 object-cover h-full object-center block opacity-90 absolute inset-0" src="../imgs/img10.jpeg"/>
        <div class="text-center relative z-10 w-full">
          <h2 class="text-2xl font-medium title-font text-white mb-2">My Team Members</h2>
          <p class="leading-relaxed text-white">All Team Members with Team Leader</p>
        </div>
      </div>
    </div>
  </div>
</section>
<Projects />
<FloatingWhatsApp 
phoneNumber='+923194573046'
accountName='M. Shahbaz'
avatar='../imgs/img6.jpeg'
chatMessage='Hi! How are you'
statusMessage='Availible 24/7'
darkMode={true}
/> 
    </div>
  )
}

export default Home
