import React from 'react';
import Image from 'next/image'
import Link from 'next/link';

export default function ProjectSection() {
    return (
        <section id="service" className="py-28 bg-gray-50">
            <div className="container mx-auto">
                <h2 className="text-black text-4xl font-semibold text-center">Our Service Line Expertise</h2>
                <div className="mt-20 grid grid-flow-row grid-cols-2 gap-x-28 gap-y-10">
                    <div className="text-center">
                        <Image src="/coconut.png" width="120" height="120" />
                        <h4 className="text-black text-center text-lg font-semibold pb-8">Transactional Service</h4>
                        <Link href="/www.ojk.com">
                            <a
                                className="border border-black text-blue hover:text-blue-700 hover:bg-white rounded-md transition py-2 px-5 mt-5 font-semibold text-lg inline-block"
                            >
                            Click For Details
                            </a>
                        </Link>
                    </div>
                    <div className="text-center">
                        <Image src="/coconut.png" width="120" height="120" />
                        <h4 className="text-black text-center text-lg font-semibold pb-8">Corporate Finance</h4>
                        <p className="text-black text-left text-base font-normal tracking-wider leading-7">Integrity means telling the truth, keeping our word and treating others with fairness and respect. Integrity is one of our most cherished assets. It must not be compromised.</p>
                    </div>
                    <div className="text-center">
                        <Image src="/coconut.png" width="120" height="120" />
                        <h4 className="text-black text-center text-lg font-semibold pb-8">Capital Budgeting</h4>
                        <p className="text-black text-left text-base font-normal tracking-wider leading-7">Integrity means telling the truth, keeping our word and treating others with fairness and respect. Integrity is one of our most cherished assets. It must not be compromised.</p>
                    </div>
                    <div className="text-center">
                        <Image src="/coconut.png" width="120" height="120" />
                        <h4 className="text-black text-center text-lg font-semibold pb-8">Business Process Solution</h4>
                        <p className="text-black text-left text-base font-normal tracking-wider leading-7">Integrity means telling the truth, keeping our word and treating others with fairness and respect. Integrity is one of our most cherished assets. It must not be compromised.</p>
                    </div>
                    <div className="text-center">
                        <Image src="/coconut.png" width="120" height="120" />
                        <h4 className="text-black text-center text-lg font-semibold pb-8">Management Exposure</h4>
                        <p className="text-black text-left text-base font-normal tracking-wider leading-7">Integrity means telling the truth, keeping our word and treating others with fairness and respect. Integrity is one of our most cherished assets. It must not be compromised.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}