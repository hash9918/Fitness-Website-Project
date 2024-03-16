import React from 'react'

import bgImg from "../../../assets/home/banner-1.jpg"

function Hero() {
  return (
    <div className='min-h-screen bg-cover ' style={{backgroundImage:`url(${bgImg})`}}>
      <div className='min-h-screen flex justify-start pl-11 items-center text-white bg-black bg-opacity-60 '>
        <div className=' space-y-4 '>
            <p className=' md:text-4xl text-2xl '>We provide </p>
            <h1 className='md:text-7xl text-4xl font-bold'> Best Fitness course Online</h1>
            <div className='md:w-1/2'>
                <p className=''>Welcome to FastFitness, your ultimate destination for fitness enthusiasts! Whether you're a seasoned athlete or just starting your fitness journey, our platform offers everything you need to achieve your health and wellness goals. From personalized workout plans and nutrition guidance to expert tips and community support, we're here to empower you every step of the way. Explore our diverse range of workout routines, discover delicious and nutritious recipes, and connect with like-minded individuals who share your passion for living a healthy lifestyle.</p>
            </div>
            <div className='flex flex-wrap items-center gap-5'>
                <button className='bg-secondary font-bold uppercase px-7 py-3 rounded-lg '>Join Today</button>
                <button className=' font-bold border  uppercase px-7 py-3 hover:bg-secondary rounded-lg'>View course</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
