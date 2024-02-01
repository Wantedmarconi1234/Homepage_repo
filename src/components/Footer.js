import React from 'react'
import HeroImage4 from "../images/image-about-dark.jpg"
import HeroImage5 from "../images/image-about-light.jpg"

function Footer() {
  return (
    <div className='grid grid-cols-3 md:flex md:flex-col'>
      <div>
        <img src={HeroImage4} alt="" />
      </div>
      <div className='py-10 px-8'>
        <h1 className='about-section text-[12px] py-3 uppercase font-bold'>About our furniture</h1>
        <p className='text-xs text-[#a1a1a1]'>Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything- in between. Product specialists are available to help you create your dream space</p>
      </div>
      <div>
        <img src={HeroImage5} alt="" />
      </div>
    </div>
  )
}

export default Footer