import React from 'react'
import Image from 'next/image'
import imageHero from '../../../public/image-hero.svg'
import arrow from '../../../public/arrow.svg'

const Hero = () => {
    return (
        <div id='about' className='md:grid md:grid-cols-2 '>
            <section className='flex flex-col gap-10 mt-10   md:flex md:flex-col md:justify-center md:mt-0 md:gap-5  '>
                <div className='flex flex-col gap-3  '>
                    <h1 className='text-4xl text-start font-bold lg:text-7xl '>
                        Build Your
                    </h1>
                    <h2 className='text-4xl text-start font-bold lg:text-7xl'>Awesome </h2>
                    <h3 className='text-4xl text-start font-bold lg:text-7xl'>Platform</h3>
                </div>

                <p className='font-extralight lg:text-lg	'>Enver studio is a digital studio that offers
                    several services such as UI/UX Design to developers, we will provide the best service for those of you who use our services.
                </p>
                <div className='bg-[#5454D4] max-w-fit px-3 py-1 flex items-center gap-1 text-sm lg:px-4 lg:py-2'>
                    <a href="" className='lg:text-1xl'>Our Services</a>
                    <Image
                        src={arrow}
                        width={30}
                        height="auto"
                        alt='arrow-icon'
                    />
                </div>
            </section>


            <section className=''>
                <Image
                    src={imageHero}
                    width={100}
                    height="auto"
                    className='w-full'
                    alt='image-hero'
                />
            </section>

        </div>
    )
}

export default Hero
