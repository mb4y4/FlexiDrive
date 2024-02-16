import React from 'react'

function Hero() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
        <div>
            <h2 className='text-[40px] md:text-[60px] font-bold'>Premium Car Leasing  Made Easy</h2>
            <h2 className='mt-5 text-gray-500 mb-8 leading-loose'>
                Rent a car with confidence, knowing you’re in control of your vehicle. 
                Our flexible leasing options allow you to drive the car you want, for as long as you want.
          </h2>
          <button className='p-2 mt-5 bg-blue-500 text-white px-4 rounded-full hover:scale-105 transition duration-200 ease-in-out'>
                Explore Cars
          </button>
        </div>
        <div>
            <img src="/hero2.jpg" alt="hero" height={200} width={500} className='w-full object-cover rounded-lg align-center' />
        </div>
    </div>
  )
}

export default Hero