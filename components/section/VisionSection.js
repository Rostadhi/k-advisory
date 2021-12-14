import React from 'react';
import Image from 'next/image'
import { FaHouzz } from "react-icons/fa";
import { GrFacebook, GrMail, GrInstagram } from "react-icons/gr";
export default function VisionSection() {
    return (
        <section id="credential" className="py-0 bg-blue-50">
            <div className="border-t-8 border-dominant relative">
          <div id="featuredWork" className="h-20 absolute bottom-0"></div>
          <div className="w-full px-5 md:px-0 md:w-5/6 lg:w-4/6 xl:w-4/6 py-8 mx-auto">
            <h3 className="text-2xl lg:text-4xl staatliches text-black my-5 mb-8 text-center">
              Our Credential
              <div className="w-20 h-1 bg-dominant mx-auto mt-2"></div>
            </h3>
            <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-3 gap-12 my-20">
              <div className="group flex">
                <div className="flex pt-10">
                        <GrFacebook className="w-8 h-8  ml-3 border-lightgray-3 bg-lightgray-2 justify-center items-center text-blue flex hover:bg-dominant hover:border-transparent hover:text-white" />
                    </div>
                <div className="flex-1 ml-8">
                  <h4 className="text-black font-bold catamaran text-lg lg:text-xl">
                    Construction Consultant
                  </h4>
                  <p className="text-black-2 mt-3">
                    Vestibulum eu libero volutpat, portas quam, tempus sem.
                    Donec sodales quam id lorem lobortis, vitae interdum nisl.
                  </p>
                </div>
              </div>
              <div className="group flex">
                <div className="bg-dominant w-10 h-10 lg:w-16 lg:h-16 rounded-full flex justify-center items-center text-lg lg:text-2xl text-white border-2 border-transparent group-hover:bg-transparent group-hover:text-dominant group-hover:border-dominant">
                  <FaHouzz />
                </div>
                <div className="flex-1 ml-8">
                  <h4 className="text-black font-bold catamaran text-lg lg:text-xl">
                    Architectural Design
                  </h4>
                  <p className="text-black-2 mt-3">
                    Vestibulum eu libero volutpat, portas quam, tempus sem.
                    Donec sodales quam id lorem lobortis, vitae interdum nisl.
                  </p>
                </div>
              </div>
              <div className="group flex">
                <div className="bg-dominant w-10 h-10 lg:w-16 lg:h-16 rounded-full flex justify-center items-center text-lg lg:text-2xl text-white border-2 border-transparent group-hover:bg-transparent group-hover:text-dominant group-hover:border-dominant">
                  <FaHouzz  />
                </div>
                <div className="flex-1 ml-8">
                  <h4 className="text-black font-bold catamaran text-lg lg:text-xl">
                    Electrical System
                  </h4>
                  <p className="text-black-2 mt-3">
                    Vestibulum eu libero volutpat, portas quam, tempus sem.
                    Donec sodales quam id lorem lobortis, vitae interdum nisl.
                  </p>
                </div>
              </div>
              <div className="group flex">
                <div className="bg-dominant w-10 h-10 lg:w-16 lg:h-16 rounded-full flex justify-center items-center text-lg lg:text-2xl text-white border-2 border-transparent group-hover:bg-transparent group-hover:text-dominant group-hover:border-dominant">
                  <FaHouzz  />
                </div>
                <div className="flex-1 ml-8">
                  <h4 className="text-black font-bold catamaran text-lg lg:text-xl">
                    General Contracting
                  </h4>
                  <p className="text-black-2 mt-3">
                    Vestibulum eu libero volutpat, portas quam, tempus sem.
                    Donec sodales quam id lorem lobortis, vitae interdum nisl.
                  </p>
                </div>
              </div>
              <div className="group flex">
                <div className="bg-dominant w-10 h-10 lg:w-16 lg:h-16 rounded-full flex justify-center items-center text-lg lg:text-2xl text-white border-2 border-transparent group-hover:bg-transparent group-hover:text-dominant group-hover:border-dominant">
                  <FaHouzz  />
                </div>
                <div className="flex-1 ml-8">
                  <h4 className="text-black font-bold catamaran text-lg lg:text-xl">
                    Reconstruction Services
                  </h4>
                  <p className="text-black-2 mt-3">
                    Vestibulum eu libero volutpat, portas quam, tempus sem.
                    Donec sodales quam id lorem lobortis, vitae interdum nisl.
                  </p>
                </div>
              </div>
              <div className="group flex">
                <div className="bg-dominant w-10 h-10 lg:w-16 lg:h-16 rounded-full flex justify-center items-center text-lg lg:text-2xl text-white border-2 border-transparent group-hover:bg-transparent group-hover:text-dominant group-hover:border-dominant">
                  <FaHouzz  />
                </div>
                <div className="flex-1 ml-8">
                  <h4 className="text-black font-bold catamaran text-lg lg:text-xl">
                    Plumbilg Services
                  </h4>
                  <p className="text-black-2 mt-3">
                    Vestibulum eu libero volutpat, portas quam, tempus sem.
                    Donec sodales quam id lorem lobortis, vitae interdum nisl.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
    )
}