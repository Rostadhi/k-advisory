import React from 'react';
import Image from 'next/image'

export default function FeatureSection() {
    return (
        <section id="features" className="py-28 bg-gray-50">
            <div className="container mx-auto">
                <h2 className="text-black text-4xl font-semibold text-center">Our Expertise</h2>
                <div className="mt-20 grid grid-flow-row grid-cols-2 gap-x-28 gap-y-10">
                    <div className="text-center">
                        <Image src="/LOGO K-Advisory 3.svg" width="120" height="120" />
                        <h4 className="text-black text-center text-lg font-semibold pb-8">Industry Expertise</h4>
                        <p className="text-black text-center text-base font-normal tracking-wider leading-7">K-Advisory Consulting’s Industry Solutions</p>
                    </div>
                    <div className="text-center">
                        <Image src="/LOGO K-Advisory 3.svg" width="120" height="120" />
                        <h4 className="text-black text-center text-lg font-semibold pb-8">Service Line Expertise</h4>
                        <p className="text-black text-center text-base font-normal tracking-wider leading-7">K-Advisory Consulting’s Service Line</p>
                    </div>
                </div>
            </div>
        </section>
    )
}