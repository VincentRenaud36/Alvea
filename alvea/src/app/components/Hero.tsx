"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className='bg-jelly-bean flex items-center justify-center'>
      <div className='flex flex-col md:flex-row items-center justify-center w-full'>
        <div className="w-full md:w-1/2 text-center md:text-left p-4 mx-auto">
          <h1 className="text-acquamarine text-4xl md:text-5xl font-bold animate-fade-in-up">
            <span className="text-jelly-bean bg-white">Explorez</span>
            <span> votre </span>
            <span className="text-jelly-bean bg-white">avenir</span>
            <span> avec ceux qui l'ont déjà </span>
            <span className="text-jelly-bean bg-white">construit</span>
          </h1>
          <Link href="/discover">
          <button className='bg-bittersweet text-white px-8 py-5 rounded-xl text-md md:text-xl font-bold mt-4 transform hover:scale-105 transition-transform duration-300'>
            Découvrir
          </button></Link>
        </div>
        <div className='w-full md:w-1/2 flex items-center justify-center animate-fade-in'>
          <Image 
            src="/Images/meuf.png" 
            alt="Description de l'image" 
            width={300}
            height={100}
            className="object-cover"  
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translate3d(0, 40px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
    </div>
  )
}