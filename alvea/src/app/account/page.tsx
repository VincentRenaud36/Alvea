import Image from 'next/image'
import React from 'react'
import Header from "../components/Header";

export default function Home() {
    const isLoggedIn = true;
  return (
    
    <div>
        <Header isLoggedIn={isLoggedIn} />
        <div className='max-w-7xl mx-auto mt-24'>
            <div className='flex items-center justify-between mb-10'>
                <div className='flex'>
                    <Image
                        src="/Images/imageprofil.png"
                        alt="Avatar"
                        width={60}
                        height={60}
                        className="rounded-full"
                        />
                        <div className='ml-4 text-xl'>
                            <p className='font-semibold'>Robert Dubois</p>
                            <p>Responsable magasin</p>
                        </div>
                </div>
                <button className='bg-bittersweet text-white px-5 py-2 rounded-full text-md font-semibold'>Contacter</button>
            </div>
            <div>
                <h2 className='relative text-[1.5rem] font-semibold inline-block'>
                    <span className='relative z-10'>Disponibilité</span>
                    <span className='absolute bottom-1 -left-2 w-full h-3 bg-acquamarine -z-10'></span>
                </h2>
                <div className='flex gap-4 mt-2 font-medium'>
                    <p className='text-jelly-bean'>Semaine</p>
                    <p className='text-jelly-bean'>Week-end</p>
                    <p className='text-gray-400'>Vacances scolaires</p>
                </div>
                <hr className='my-6' />
                <div className='flex justify-between'>
                    <div className=' bg-gray-200 p-4 rounded-2xl flex items-center'>
                        <p className='flex-1 text-center'>Choisissez un fichier ou glissez-le ici</p>
                    </div>
                    <div className=''>
                        <h3 className='text-2xl font-semibold'>Présentation</h3>
                        <p>Je m’appelle Robert Dubois, j’ai 47 ans, et je suis responsable de magasin au Comptoir de Mathilde, une enseigne spécialisée dans les gourmandises artisanales. Mon rôle consiste à gérer l’ensemble des opérations du magasin : de l’organisation des équipes à la gestion des stocks, en passant par l’accueil et le conseil auprès des clients.
                            Je veille également à ce que nos produits, comme les chocolats, confiseries et autres délices, soient mis en valeur pour offrir une expérience unique à chaque visiteur. Ce métier me passionne parce qu’il allie le contact humain, la gestion et l’amour des produits authentiques.</p>
                    </div>
                </div>
                <div className='mt-20'>
                    <h2 className='relative text-[1.5rem] font-semibold inline-block'>
                        <span className='relative z-10'>Mon Expérience</span>
                        <span className='absolute bottom-1 -left-2 w-full h-3 bg-texas-rose -z-10'></span>
                    </h2>
                    {/* <button className='border-2 rounded-md w-full py-10'>
                        <p className='bg-texas-rose px-2 inline-block rounded-full text-white text-2xl mb-4'>+</p>
                        <p>Ajouter une expérience</p>
                    </button> */}

                    <div className='mt-6 border-2 rounded-md p-4'>
                        <p className='text-xl font-semibold'>Le Comptoir de Mathilde, Toulon</p>
                        <p className='font-semibold text-[#141F2F] opacity-80'>Responsable de magasin</p>
                        <p className='text-gray-400 -mt-1 text-sm'>Septembre 2015 - Présent</p>
                        <p className='mt-2 font-medium'>En tant que responsable, je supervise une équipe de six personnes, gère les approvisionnements, organise les plannings et veille à l’atteinte des objectifs de vente. Mon rôle inclut également la mise en place de stratégies pour améliorer l’expérience client, en valorisant les produits locaux et artisanaux qui font la renommée de l’enseigne.</p>
                    </div>
                </div>
                <div className='mt-20'>
                    <h2 className='relative text-[1.5rem] font-semibold inline-block'>
                        <span className='relative z-10'>Planifiez votre rencontre</span>
                        <span className='absolute bottom-1 -left-2 w-full h-3 bg-bittersweet -z-10'></span>
                    </h2>
                </div>
            </div>
        </div>
    </div>
  )
}