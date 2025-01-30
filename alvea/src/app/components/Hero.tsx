import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className='bg-jelly-bean flex items-center justify-center '>
      <div className='flex flex-col md:flex-row items-center justify-center w-full '>
        <div className="w-full md:w-1/2 text-center md:text-left p-4 mx-auto">
          <h1 className="text-acquamarine text-4xl md:text-5xl font-bold">
            <span className="text-jelly-bean bg-white">Explorez</span>
            <span className=""> votre </span>
            <span className="text-jelly-bean bg-white">avenir</span>
            <span className=""> avec ceux qui l'ont déjà </span>
            <span className="text-jelly-bean bg-white">construit</span>
          </h1>
          <button className='bg-bittersweet text-white px-8 py-5 rounded-xl text-md md:text-xl font-bold mt-8'>Découvrir</button>
        </div>
        <div className='w-full md:w-1/2 flex items-center justify-center'>
          <Image 
              src="/Images/meuf.png" 
              alt="Description de l'image" 
              width={300}
              height={100}
              className="object-cover"  
            />
        </div>
      </div>
    </div>
  )
}