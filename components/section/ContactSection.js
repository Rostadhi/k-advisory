import React from 'react';
import Image from 'next/image';
import { ArrowCircleRightIcon, ArrowCircleLeftIcon, ArrowCircleDownIcon } from '@heroicons/react/solid';

import Field from '../widget/Field';

export default function ContactSection() {
    return (
        <section id="contact" className="pt-28 pb-14 bg-sky-900">
            <h2 className="text-white text-4xl font-semibold text-center">Contact Us</h2>
            <div className="container mx-auto flex justify-between items-start py-14">
                <div className="w-5/12 items-start">
                    <h2 className="text-white text-4xl font-bold py-6 tracking-wide">PT. Multicipta Solusi Advisory</h2>
                    <p className="text-white text-xl font-normal leading-loose">SCBD - Equity Tower 49th FI</p>
                    <p className="text-white text-xl font-normal leading-loose">South Jakarta, Greater Area of Jakarta</p>
                    <p className="text-white text-xl font-normal leading-loose">Indonesia</p>
                    <p className="text-white text-xl font-normal leading-loose">Phone : +62 21 29651170</p>
                    <div className="flex pt-10">
                        <ArrowCircleRightIcon className="h-10 w-10 text-white" />
                        <ArrowCircleLeftIcon className="h-10 w-10 text-white" />
                        <ArrowCircleDownIcon className="h-10 w-10 text-white" />
                    </div>
                </div>
                <div className="w-6/12">
                    <form action="">
                        <div className="flex flex-wrap -mx-4">
                            <div className="w-full lg:w-6/12 px-4">
                                <Field label="Name" name="name" type="text" />
                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <Field label="Email" name="email" type="text" />
                            </div>
                        </div>
                        <Field label="Subject" name="subject" type="text" />
                        <Field
                            label="Message"
                            name="message"
                            type="textarea"
                            className="h-40"
                        />
                        <div className="text-left">
                            {/* <Button variant="black">Send</Button> */}
                            <button type="submit" className="bg-green-700 hover:bg-gray-900 text-white font-semibold py-2 px-6 rounded">Halo</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};