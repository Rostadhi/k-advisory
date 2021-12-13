import React from 'react';
import Image from 'next/image';

export default function MiningItem() {
    return (
        <div className="flex flex-row py-16 justify-center">
            <div className="w-4/12 text-left">
                <h3 className="text-blue-700 text-2xl font-semibold">Mining</h3>
                <p className="text-lg leading-7 pt-6">Telecomunication is one of our expertise, we have accumulated the best practices for the respective industries. Our consultants are knowledgeable of the markets and environment in the respective industries and provide the optimum services through their extensive experience. The benefit of ever functioning in the real sector has enrich us in finding solutions for our patrons.</p>
                <div className="flex gap-4 mt-14">
                    <a className="border border-gray-300 text-black hover:border-blue-700 hover:text-white hover:bg-blue-700 rounded-md transition p-3 font-semibold text-lg inline-block">See Details</a>
                    <a href="https://www.k-advisory.co.id/" className="border border-gray-300 text-black hover:border-blue-700 hover:text-white hover:bg-blue-700 rounded-md transition p-3 font-semibold text-lg inline-block">Contact Us</a>
                </div>
            </div>
            <Image src="/mining.png" width="300" height="300" />
        </div>
    );
};