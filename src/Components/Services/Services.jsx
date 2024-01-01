import React from 'react'
import iconOne from '../../../public/icon-1.svg'
import iconTwo from '../../../public/icon-2.svg'
import iconThree from '../../../public/icon-3.svg'
import iconFour from '../../../public/icon-4.svg'
import iconFive from '../../../public/icon-5.svg'
import iconSix from '../../../public/icon-6.svg'
import Image from 'next/image'

const Services = () => {
    return (
        <article id='services' className='mt-10 lg:mt-10'>
            <h3 className='text-3xl font-bold md:text-center m'>The service We Provide For You</h3>
            <section className=' w-full flex flex-col gap-5 md:grid md:grid-cols-3 lg:gap-10 mt-10  '>
                <div className='px-5 py-4 flex flex-col justify-center items-center gap-5  lg:px-20 '>
                    <Image
                        src={iconOne}
                        widht='auto'
                        classname='w-[20px]'
                    />
                    <span className='text-2xl md:text-[20px]   font-normal'>Development</span>
                    <p className='text-center md:text-sm font-extralight '>Create a platform with the best and coolest quality from us.</p>
                </div>
                <div className='px-5 py-4 flex flex-col justify-center items-center gap-5 lg:px-20 '>
                    <Image
                        src={iconTwo}
                        widht='auto'
                        classname='w-[20px]'
                    />
                    <span className='text-2xl md:text-[20px] font-normal'>UI/UX Designer</span>
                    <p className='text-center md:text-sm font-extralight'>We provide UI/UX Design services, and of course with the best quality</p>
                </div>
                <div className='px-5 py-4 flex flex-col justify-center items-center gap-5 lg:px-20 '>
                    <Image
                        src={iconThree}
                        widht='auto'
                        classname='w-[20px]'
                    />
                    <span className='text-2xl md:text-[20px] font-normal '>Graphik Designer</span>
                    <p className='text-center md:text-sm font-extralight'>We provide Graphic Design services, with the best designers</p>
                </div>
                <div className='px-5 py-4 flex flex-col justify-center items-center gap-5 lg:px-20 '>
                    <Image
                        src={iconFour}
                        widht='auto'
                        classname='w-[20px]'
                    />
                    <span className='text-2xl md:text-[20px] font-normal'>Motion Graphik</span>
                    <p className='text-center md:text-sm font-extralight'>Create a platform with the best and coolest quality from us.</p>
                </div>
                <div className='px-5 py-4 flex flex-col justify-center items-center gap-5 lg:px-20 '>
                    <Image
                        src={iconFive}
                        widht='auto'
                        classname='w-[20px]'
                    />
                    <span className='text-2xl md:text-[20px] font-normal'>Photography</span>
                    <p className='text-center md:text-sm font-extralight'>We provide Photography services, and of course with the best quality</p>
                </div>
                <div className='px-5 py-4 flex flex-col justify-center items-center gap-5 lg:px-20 '>
                    <Image
                        src={iconSix}
                        widht='auto'
                        classname='w-[20px]'
                    />
                    <span className='text-2xl md:text-[20px] font-normal'>Videography</span>
                    <p className='text-center md:text-sm font-extralight'>Create a platform with the best and coolest quality from us.</p>
                </div>
            </section>
        </article>

    )
}

export default Services
