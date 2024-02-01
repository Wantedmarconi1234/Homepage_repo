import React, {useState} from 'react';
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

function Navbar() {
const [toggleNav, setToggleNav] = useState(false)

const handleToggle = () =>{
  setToggleNav( navtoggle => !navtoggle)
}

  return (
  <div className={`absolute text-white w-full flex py-10 items-center ${toggleNav && 'md:bg-white z-0'}`}>
        <MdMenu size={25} className={`lg:hidden md:block md:absolute md:left-5 ${toggleNav ?'md:hidden' : ''}`} onClick={handleToggle}/>
        <h1 className='font-bold px-10 text-xl md:text-center md:w-full'>room</h1>
        <div className={`flex text-sm md:flex md:justify-between md:absolute md:left-[30%] md:top-10 md:text-lg`}>
            <IoMdClose size={25} color='#a1a1a1' className={`lg:hidden ${toggleNav ? 'md:block' : ''} md:absolute md:-left-28`} onClick={handleToggle}/>
            <ul className={`flex items-center md:text-black md:font-bold ${toggleNav ? '' : 'md:hidden'}`}>
              <li>home</li>
              <li className='mx-3 sm:mx-4'>shop</li>
              <li className='mx-3 sm:mx-4'>about</li>
              <li>contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar