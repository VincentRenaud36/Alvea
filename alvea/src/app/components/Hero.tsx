"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className='bg-jelly-bean flex items-center justify-center px-4 overflow-x-hidden'>
      <div className='container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 pt-16 md:pt-0'>
        {/* Texte */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-acquamarine text-3xl sm:text-4xl md:text-5xl font-bold animate-fade-in-up max-w-2xl">
            <span className="text-jelly-bean bg-white px-2">Explorez</span>
            <span className="text-white"> votre </span>
            <span className="text-jelly-bean bg-white px-2">avenir</span>
            <span className="text-white"> avec ceux qui l&lsquo;ont déjà </span>
            <span className="text-jelly-bean bg-white px-2">construit</span>
          </h1>
          <Link href="/discover" className="mt-8">
            <button className='bg-bittersweet text-white px-8 py-4 rounded-xl text-lg sm:text-xl font-bold transform hover:scale-105 transition-transform duration-300'>
              Découvrir
            </button>
          </Link>
        </div>

        {/* Image */}
        <div className='w-full md:w-1/2 flex justify-center animate-fade-in'>
          <div className="relative w-[250px] sm:w-[300px] md:w-[350px]">
            <Image 
              src="/Images/meuf.png" 
              alt="Description de l'image" 
              width={350}
              height={350}
              className="object-contain w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>

      <style jsx global>{`
        /* Masquer la scrollbar tout en gardant la fonctionnalité */
        body {
          overflow-y: scroll;
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE and Edge */
        }
        
        body::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
        
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