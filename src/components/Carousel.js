import React,{useState} from 'react'
import Navbar from './Navbar'
import { HeroImage } from './HeroImage'
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";


function Carousel() {
const [currentslide, setCurrentSlide] = useState(0)

const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % HeroImage.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? HeroImage.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className='relative w-screen h-screen grid grid-cols-2 md:grid md:grid-rows-2 md:grid-cols-1 md:h-[100%] '>
       <div className='w-fit h-full md:w-[100%]'>
            <Navbar/>
            <img src={HeroImage[currentslide].images} 
            alt=""
            />
        </div>
       <div className='grid relative place-content-center px-16'>
            <div className=''>
                <h1 className='py-3 text-4xl font-semibold transition-opacity duration-1000 md:text-2xl'>{HeroImage[currentslide].title}</h1>
                <p className='text-sm py-3 text-[#a1a1a1] transition-opacity duration-1000'>{HeroImage[currentslide].message}</p>
            </div>
            <div className='flex items-center'>
                <h1 className='shop_now font-semibold text-sm text-[#454545] transition-opacity duration-1000'>SHOP NOW</h1>
                <FaLongArrowAltRight size={30}/>
            </div>
            <div className='flex content-end items-center justify-around absolute bottom-0 left-0 md:left-[67%] md:top-[-56px] w-[33%] h-14 bg-black md:-top-[10]'>
                <FaChevronLeft 
                    color='#ffffff' 
                    size={25} 
                    onClick={prevSlide} 
                    className='transition-opacity duration-1000 hover:opacity-75 cursor-pointer'
                />
                <FaChevronRight 
                    color='#ffffff' 
                    size={25} 
                    onClick={nextSlide}
                    className='transition-opacity duration-1000 hover:opacity-75 cursor-pointer'
                />  
            </div>
        </div>
    </div>
  )
}

export default Carousel;