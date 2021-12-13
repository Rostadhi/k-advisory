import React from 'react';
import Image from 'next/image';

export default function ProductItem2() {
    return (
        <div className="flex flex-row py-16 justify-center">
            <div className="w-4/12 text-left">
                <h3 className="text-blue-700 text-2xl font-semibold">Aviation and Logistic</h3>
                <p className="text-lg leading-7 pt-6">Coconut Charcoal Briquette is a compact block charcoal which made from coconut shell charcoal. Our charcoal briquette is made of granular coconut shell charcoal that is crushed charcoal and moulded using a natural binder. As fuel, it is hotter and last longer than ordinary charcoal. It is suitable for household use both indoor and outdoor. Also, it can be used in food industries, for barbecue, stove fuel, metallurgy, etc.</p>
                <div className="flex gap-4 mt-14">
                    <a className="border border-gray-300 text-black hover:border-blue-700 hover:text-white hover:bg-blue-700 rounded-md transition p-3 font-semibold text-lg inline-block">See Details</a>
                    <a href="https://www.k-advisory.co.id/" className="border border-gray-300 text-black hover:border-blue-700 hover:text-white hover:bg-blue-700 rounded-md transition p-3 font-semibold text-lg inline-block">Contact Us</a>
                </div>
            </div>
            <Image src="/vision.png" width="300" height="300" />
        </div>
    );
};