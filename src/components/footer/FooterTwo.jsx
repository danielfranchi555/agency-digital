import React from 'react'
import logo from '../../../public/logo.svg'
import Image from 'next/image'

const FooterTwo = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-6 mt-10  w-[90%] mx-auto md:flex md:flex-row md:justify-between md:py-5 '>
      <Image
      src={logo}
      width='auto'
      height='auto'
      className='w-[120px]'
      />
      <ul className='flex flex-col items-center justify-center gap-5 md:flex md:flex-row'>
        <li className='md:text-sm'>Support</li>
        <li  className='md:text-sm'>Privacy Policy</li>
        <li className='md:text-sm'>Terms and Conditions</li>
      </ul>
      <span>@ 2020 Enver, All right reserved </span>
    </div>
  )
}

export default FooterTwo
