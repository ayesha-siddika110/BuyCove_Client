import React from 'react';
import img from '../../../assets/Slider/banner.png'

const Banner = ({ heading, subHeading }) => {
    return (
        <div
            style={{
                backgroundImage: `url(${img})`,
                height: "350px",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
        >
            <div className='md:w-[50%] w-[80%] h-full flex flex-col justify-center m-auto'>
                <p className='text-orange-600 text-4xl uppercase'>| {heading}</p>
                <p className='text-base-300 uppercase pt-3 tracking-[5px]'>{subHeading}</p>
            </div>

        </div>
    );
};

export default Banner;