import React from 'react';
import Image from 'next/image'

export default function VisionSection() {
    return (
        <section id="vision" className="py-28 bg-gray-50">
            <div className="container mx-auto flex justify-between">
            <Image src="/LOGO K-Advisory 3.png" width="500" height="500" className="w-7/12" />
                <div className="flex flex-col w-5/12 justify-center">
                    <h2 className="text-black text-4xl font-semibold">Our Vision</h2>
                    <p className="text-black text-xl font-light tracking-wider pt-10 pb-4">A Boutique Of Financial Advisor</p>
                    <h3 className="text-black text-4xl font-semibold tracking-wider pt-10 pb-4">Our Mission</h3>
                    <p className="text-black text-xl font-light tracking-wider pt-10 pb-4">A Boutique Of Financial Advisor</p>
                </div>
            </div>
        </section>
    )
}