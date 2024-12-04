import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div id="about">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          {/* Image section */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 mx-auto">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src="/profile.jpg" 
              width={300}
              height={300}
            />
          </div>

          {/* Text section */}
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              About Me
            </h1>
            <p className="mb-5 leading-relaxed">
              I’m a passionate IT professional with a strong academic foundation, having completed my Bachelor’s degree in [commerce] from [karachi University]. After graduation, I took a deep dive into the IT field, and I am dedicated to staying up-to-date with the latest advancements in technology, which fuels my drive for continuous learning and problem-solving.

              With a keen eye for detail and a collaborative mindset, I focus on delivering high-quality work that meets both client and user needs. My journey so far has been driven by my curiosity and a commitment to making a meaningful impact in the world of technology.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
