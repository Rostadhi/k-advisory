import React from 'react';
import Image from 'next/image'

export default function AboutSection() {
    return (
        <section id="about" className="py-28 bg-blue-50 border-t-8">
            
            <div className="container mx-auto flex justify-between">
                <div className="flex flex-col w-5/12 justify-center">
                    <h2 className="text-black text-4xl font-semibold">About</h2>
                    <p className="text-black text-xl font-light tracking-wider pt-10 pb-4">PT Multicipta Solusi Advisori (K – Advisory) uses multi-disciplinary approach that allows us to provide services beyond the common financial advisory services. Through our lines of services, we bring added-value to our clients by identifying, capturing and maximizing opportunity, solving business challenges and help reshaping their business to meet long term growth and 
                    profit.</p>
                    <p className="text-black text-xl font-light tracking-wider">Our team, consisting of multi-disciplinary professionals, will be able to provide inputs from 
                    diverse point of view, judgments, analysis, experience and knowledge. Headed and founded by 
                    a C-level professional, having over 20 years of experiences in the real sector and consultancy, 
                    team up with vibrant young professionals, gathered in a flat organization structure allows K-advisory to nurture innovation and quick respond for Client needs</p>
                </div>
                <Image src="/about.png" width="500" height="500" className="w-7/12" />
            </div>
        </section>
    )
}