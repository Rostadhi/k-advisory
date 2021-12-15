import React from 'react';
import Image from 'next/image'
import Link from 'next/link';

export default function ProjectSection() {
    return (
        <section id="service" className="py-28 bg-gray-50">
            
            <div className="bg-grey-50 relative">
          <div id="about" className="h-20 absolute bottom-0"></div>
          <div className="w-full px-5 md:px-0 md:w-5/6 lg:w-4/6 xl:w-4/6 py-8 mx-auto">
            <h3 className="text-2xl lg:text-4xl staatliches text-black my-5 mb-8 text-center">
              Service Line Expertise
              <div className="w-20 h-1 bg-dominant mt-2"></div>
            </h3>
            <div className="grid grid-flow-row grid-cols-2 lg:grid-cols-5 gap-5 my-20">
              <div className="h-44 md:h-96 lg:h-52 xl:h-64 2xl:h-96 bg-black-2 relative group">
                <div className="block h-full w-full relative">
                  <Image
                    src="/1.jpg"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
                <div className="absolute top-0 left-0 right-0 h-full bg-sky-900 bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300"></div>
                <div className="absolute top-0 left-0 right-0 h-full opacity-0 group-hover:opacity-100 transition-all duration-1000 flex flex-col justify-center items-center">
                  <span className="catamaran font-bold text-white text-lg lg:text-xl text-center p-2">
                    Transactional Service
                  </span>
                  <span className="zilla-slab text-dominant">Mergers and Acquisition Solution</span>
                </div>
              </div>
              <div className="h-44 md:h-96 lg:h-52 xl:h-64 2xl:h-96 bg-black-2 relative group">
                <div className="block h-full w-full relative">
                  <Image
                    src="/2.jpg"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
                <div className="absolute top-0 left-0 right-0 h-full bg-sky-900 bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300"></div>
                <div className="absolute top-0 left-0 right-0 h-full opacity-0 group-hover:opacity-100 transition-all duration-1000 flex flex-col justify-center items-center">
                  <span className="catamaran font-bold text-white text-lg lg:text-xl text-center p-2">
                    Corporate Finance
                  </span>
                  <span className="zilla-slab text-dominant">Pre IPO</span>
                </div>
              </div>
              <div className="h-44 md:h-96 lg:h-52 xl:h-64 2xl:h-96 bg-black-2 relative group">
                <div className="block h-full w-full relative">
                  <Image
                    src="/3.jpg"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
                <div className="absolute top-0 left-0 right-0 h-full bg-sky-900 bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300"></div>
                <div className="absolute top-0 left-0 right-0 h-full opacity-0 group-hover:opacity-100 transition-all duration-1000 flex flex-col justify-center items-center">
                  <span className="catamaran font-bold text-white text-lg lg:text-xl text-center p-2">
                    Capital Budgeting
                  </span>
                  <span className="zilla-slab text-dominant">Strategic Planning</span>
                </div>
              </div>
              <div className="h-44 md:h-96 lg:h-52 xl:h-64 2xl:h-96 bg-black-2 relative group">
                <div className="block h-full w-full relative">
                  <Image
                    src="/4.jpg"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
                <div className="absolute top-0 left-0 right-0 h-full bg-sky-900 bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300"></div>
                <div className="absolute top-0 left-0 right-0 h-full opacity-0 group-hover:opacity-100 transition-all duration-1000 flex flex-col justify-center items-center">
                  <span className="catamaran font-bold text-white text-lg lg:text-xl text-center p-2">
                    Business Process Solution
                  </span>
                  <span className="zilla-slab text-dominant">Construction</span>
                </div>
              </div>
              <div className="h-44 md:h-96 lg:h-52 xl:h-64 2xl:h-96 bg-black-2 relative group">
                <div className="block h-full w-full relative">
                  <Image
                    src="/4.jpg"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
                <div className="absolute top-0 left-0 right-0 h-full bg-sky-900 bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300"></div>
                <div className="absolute top-0 left-0 right-0 h-full opacity-0 group-hover:opacity-100 transition-all duration-1000 flex flex-col justify-center items-center">
                  <span className="catamaran font-bold text-white text-lg lg:text-xl text-center p-2">
                    Management Exposure
                  </span>
                  <span className="zilla-slab text-dominant">Feasibility Study</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
    )
}