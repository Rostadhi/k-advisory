import React from 'react';
import Image from 'next/image'

export default function FeatureSection() {
    return (
        <section id="features" className="py-28 bg-gray-50">
            <div className="container mx-auto">
                <h2 className="text-black text-4xl font-semibold text-center">Our Expertise</h2>
                <div className="mt-40 grid grid-flow-row grid-cols-2 gap-x-28 gap-y-10">
                    <div className="text-center pb-5">
                        <Image src="/industry.png" width="2000" height="1200" />
                        <h4 className="text-black text-center text-3xl font-bold pb-5">Industry Expertise</h4>
                        <p className="text-black text-center text-base font-normal tracking-wider leading-7">K-Advisory Consulting’s Industry Solutions</p>
                    </div>
                    <div className="text-center pb-5">
                        <Image src="/service.png" width="2000" height="1200" />
                        <h4 className="text-black text-center text-3xl font-bold pb-5">Service Line Expertise</h4>
                        <p className="text-black text-center text-base font-normal tracking-wider leading-7">K-Advisory Consulting’s Service Line</p>
                    </div>
                </div>
            </div>
        </section>
    )
}