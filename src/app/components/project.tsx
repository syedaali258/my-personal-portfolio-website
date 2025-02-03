import React from 'react'
import Image from 'next/image'

const Project = () => {
  return (
    <div id="project">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              My Projects
            </h1>
          </div>
          <div className="flex flex-wrap -m-5 -mt-9">
            {/* Project 1 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer flex flex-col">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  alt="gallery"
                  className="object-cover w-full h-56"
                  src="/project1.jpg" // Ensure image is in the public folder
                  width={500}
                  height={500}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Count Town Timer project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    COUNTDOWN TIMER
                  </h1>
                  <p className="leading-relaxed text-blue-500 hover:underline line-clamp-2">
                    &quot;A next.js and Typescript powered website to track time with an interactive countdown feature&quot;
                  </p>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer flex flex-col">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  alt="gallery"
                  className="object-cover w-full h-56"
                  src="/project-2.jpg"
                  width={500}
                  height={500}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Static Interactive Resume Builder
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Resume Builder
                  </h1>
                  <p className="leading-relaxed text-blue-500 hover:underline">
                    &quot;A Typescript based interactive resume built with HTML and CSS, allowing users to showcase their skills dynamically&quot;
                  </p>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer flex flex-col">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  alt="gallery"
                  className="object-cover w-full h-56"
                  src="/project3.jpg"
                  width={500}
                  height={500}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    My Todo List App
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Todo List App
                  </h1>
                  <p className="leading-relaxed text-blue-500 hover:underline">
                    &quot;A react and typescript based app for managing and organizing your tasks efficiently.&quot;
                  </p>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer flex flex-col">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  alt="gallery"
                  className="object-cover w-full h-56"
                  src="/project4.jpg"
                  width={500}
                  height={500}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Currency Converter Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Currency Converter
                  </h1>
                  <p className="leading-relaxed text-blue-500 hover:underline">
                    &quot;A simple HTML and Typescript powered tool for converting currencies with real-time rates&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
