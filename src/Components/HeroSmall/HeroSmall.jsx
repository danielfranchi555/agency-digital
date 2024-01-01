import React from 'react'
import image from '../../../public/heroSmall.png'
import Image from 'next/image'
const HeroSmall = () => {
    return (
        <div className='flex flex-col py-20 gap-10 md:mt-20'>
            <div className='flex flex-col gap-5 md:grid md:grid-cols-2  w-full '>
                <h2 className='font-bold text-3xl md:text-3xl lg:text-5xl'>Why Enver Is The Best Choice?</h2>
                <p className='font-extralight text-1xl '>Watch this one minute video so you understand why you should use our services!</p>
            </div>
                <Image
                    src={image}
                    className='w-full md:w-[100%]'
                    alt='image'
                />
        </div>

    )
}

export default HeroSmall
