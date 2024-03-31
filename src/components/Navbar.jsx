import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div className="">
             <img src={Logo} alt="Logo" className='w-[50px]'/>
        </div>

        {/** menu */}
        <ul className='hidden md:flex'>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
      

        {/** hamburger menu */}
        <div className="hidden">
            <FaBars />
        </div>


        {/** mobile menu */}
        <div className="hidden">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </div>


        {/** social icons */}
        <div className="hidden">

        </div>

        
        



    </div>
  )
}

export default Navbar