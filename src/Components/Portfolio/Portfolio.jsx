'use client'
import Image from 'next/image'
import React from 'react'
import ImageOne from '../../../public/image-28.svg'
import ImageTwo from '../../../public/image-29.svg'
import ImageThree from '../../../public/image-30.svg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Portfolio = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <div id='proyects' className='flex flex-col mt-20  lg:h-auto'>
            <h4 className='font-bold text-3xl py-5'>Our Awesome Portfolio</h4>
             <div className='md:hidden  '>
                <Slider className='' {...settings}>
                    <div>
                        <Image
                            src={ImageOne}
                            alt='imagen'
                            width='auto'
                            height='auto'
                            className='w-full'
                        />
                    </div>
                    <div>
                        <Image
                            src={ImageTwo}
                            width='auto'
                            height='auto'
                            alt='imagen'
                            className='w-full'
                        />
                    </div>
                    <div>
                        <Image
                            src={ImageThree}
                            width='auto'
                            height='auto'
                            className='w-full'
                            alt='imagen'
                        />
                    </div>

                </Slider>
            </div> 
            <div  className='hidden md:items-start md:justify-center md:gap-5 md:flex lg:flex lg:items-start lg:justify-center lg:gap-20 lg:mt-10' >
                <div className='md:flex md:w-[220px] lg:flex lg:w-[300px]'>
                    <Image
                        src={ImageOne}
                        alt='imagen'
                        width='auto'
                        height='auto'
                        className='w-full'
                    />
                </div>


                <div className=' md:flex md:w-[220px] md:py-4 lg:py-4 lg:w-[300px] '>
                    <Image
                        src={ImageTwo}
                        width='auto'
                        height='auto'
                        alt='imagen'
                        className='w-full'
                    />
                </div>
                <div className=' md:flex md:w-[220px] md:py-12 lg:py-12 lg:w-[300px]'>
                    <Image
                        src={ImageThree}
                        width='auto'
                        height='auto'
                        alt='imagen'
                        className='w-full'
                    />
                </div>
            </div> 

        </div>
    )
}

export default Portfolio
