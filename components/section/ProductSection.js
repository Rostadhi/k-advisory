import React from 'react';
import {ReactDOM} from 'react-dom';
import Carousel from "react-multi-carousel";
import { ArrowCircleRightIcon, ArrowCircleLeftIcon } from '@heroicons/react/solid';

import ProductItem from '../widget/ProductItem';
import ProductItem1 from '/Users/rostadhiakbar/Documents/Website/k-advisory/k-advisory/components/widget/ProductItem1.js';
import ProductItem2 from '/Users/rostadhiakbar/Documents/Website/k-advisory/k-advisory/components/widget/ProductItem2.js';
import ProductItem3 from '/Users/rostadhiakbar/Documents/Website/k-advisory/k-advisory/components/widget/ProductItem3.js';

import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export default function ProductSection() {
    function CustomLeftArrow({ onClick }) {
        return (
            <button
                onClick={() => onClick()}
                aria-label="Go to previous slide"
                className="absolute left-0 mx-[108px]"
            >
                <ArrowCircleLeftIcon className="h-12 w-12 text-blue-700" />
            </button>
        );
    }

    function CustomRightArrow({ onClick }) {
        return (
            <button
                onClick={() => onClick()}
                aria-label="Go to next slide"
                className="absolute right-0 mx-[108px]"
            >
                <ArrowCircleRightIcon className="h-12 w-12 text-blue-700" />
            </button>
        );
    }

    return (
        <section id="products" className="pt-28 pb-12 bg-gray-50 relative">
            <h2 className="text-black text-4xl font-semibold text-center">Our Industry Expertise</h2>
            <Carousel
                showDots={true}
                responsive={responsive}
                ssr={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={1800}
                customLeftArrow={<CustomLeftArrow />}
                customRightArrow={<CustomRightArrow />}
            >
                <ProductItem />
                <ProductItem1 />
                <ProductItem2 />
                <ProductItem3 />
            </Carousel>
        </section>
    );
};