'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../../../public/logo.svg'
import sort from '../../../public/Sort.svg'

const Ul = () => {
  return (
    <>
      <ul className='hidden md:flex  md:gap-10'>
        <li> <a href="/">Home</a></li>
        <li> <a href="#services">Services</a></li>
        <li> <a href="#proyects">Our Proyect</a></li>
        <li> <a href="#about">About us </a></li>
      </ul>
    </>
  )
}

const UlMobile = () => {
  return (
    <>
      <ul className=' flex flex-col gap-2 px-5 py-2 md:hidden ' >
      <li> <a href="/">Home</a></li>
        <li> <a href="#services">Services</a></li>
        <li> <a href="#proyects">Our Proyect</a></li>
        <li> <a href="#about">About us </a></li>
      </ul>
    </>
  )
}


const Navbar = () => {

  const [toggle, setToggle] = useState(false)

  const toggleNaV = () => {
    setToggle(!toggle)
    console.log('toggle');
  }

  return (
    <>
      <nav className='md:w-[95%]  lg:w-[90%] lg:px-0 mx-auto flex justify-between px-5 py-3 md:justify-between md:items-center'>
        <div>
          <Image
            src={logo}
            width={100}
            height="auto"
            alt='logo'
          />
        </div>
        <Image
          src={sort}
          width={24}
          height="auto"
          className='md:hidden'
          onClick={toggleNaV}
          alt='icon'
        />
        <Ul />
        <a href="" className='hidden md:block md:border md:px-5 md:py-2 md:rounded-md '> Contact Us</a>
      </nav>
      {toggle && <UlMobile />}

    </>

  )
}

export default Navbar
