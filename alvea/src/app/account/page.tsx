"use client";

import Image from 'next/image'
import React, { useState } from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from 'next/link';


export default function Home() {
    const isLoggedIn = true;
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

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
                    <Link href="/messagerie">
                        <button className='bg-bittersweet text-white px-5 py-2 rounded-full text-md font-semibold'>Contacter</button>
                    </Link>
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
                    <div className='relative bg-gray-200 p-4 rounded-2xl flex items-center cursor-pointer aspect-[9/16] w-[200px] sm:w-[250px] md:w-[300px] lg:w-[700px] overflow-hidden' onClick={openModal}>
                        <Image
                            src="https://img.youtube.com/vi/c6u-I85peig/0.jpg"
                            alt="Miniature de la vidéo"
                            layout="fill"
                            className="object-cover"
                        />
                    </div>
                        <div className=''>
                            <h3 className='text-2xl font-semibold'>Présentation</h3>
                            <p>Je m&apos;appelle Robert Dubois, j&apos;ai 47 ans, et je suis responsable de magasin au Comptoir de Mathilde, une enseigne spécialisée dans les gourmandises artisanales. Mon rôle consiste à gérer l&apos;ensemble des opérations du magasin : de l&apos;organisation des équipes à la gestion des stocks, en passant par l&apos;accueil et le conseil auprès des clients.
                                Je veille également à ce que nos produits, comme les chocolats, confiseries et autres délices, soient mis en valeur pour offrir une expérience unique à chaque visiteur. Ce métier me passionne parce qu&apos;il allie le contact humain, la gestion et l&apos;amour des produits authentiques.</p>
                        </div>
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
                        <p className='mt-2 font-medium'>En tant que responsable, je supervise une équipe de six personnes, gère les approvisionnements, organise les plannings et veille à l&apos;atteinte des objectifs de vente. Mon rôle inclut également la mise en place de stratégies pour améliorer l&apos;expérience client, en valorisant les produits locaux et artisanaux qui font la renommée de l&apos;enseigne.</p>
                    </div>
                </div>
                <div className='mt-20'>
                    <h2 className='relative text-[1.5rem] font-semibold inline-block'>
                        <span className='relative z-10'>Planifiez votre rencontre</span>
                        <span className='absolute bottom-1 -left-2 w-full h-3 bg-bittersweet -z-10'></span>
                    </h2>
                </div>
            </div>
            
            {/* MODAL */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center" onClick={closeModal}>
                    <div className="relative w-[320px] sm:w-[380px] md:w-[420px] lg:w-[500px] bg-black rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
                        {/* Bouton de fermeture */}
                        <button className="absolute top-2 right-2 text-white text-3xl z-10" onClick={closeModal}>✕</button>
                        {/* Contenu de la vidéo */}
                        <div className="yt-wrapper w-full h-full">
                            <div className="yt-frame-container">
                                <iframe
                                    src="https://www.youtube.com/embed/c6u-I85peig?autoplay=1&mute=1&modestbranding=1&controls=0&playsinline=1&rel=0&enablejsapi=1&showinfo=0"
                                    title="YouTube video"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                    className="w-full h-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* CSS */}
            <style jsx global>{`
                @keyframes slideIn {
                    from { transform: translateY(100%); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                .animate-slide-in { animation: slideIn 0.5s ease-out; }
                @media screen and (min-width: 768px) {
                    .yt-wrapper { overflow: hidden; width: 100%; height: 100%; }
                    .yt-frame-container { position: relative; padding-bottom: 177.78%; width: 500%; left: -200%; }
                    .yt-frame-container iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; }
                }
                @media screen and (max-width: 767px) {
                    .yt-wrapper { overflow: hidden; width: 100%; height: 100%; }
                    .yt-frame-container { position: relative; padding-bottom: 177.78%; width: 500%; left: -200%; }
                    .yt-frame-container iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; }
                }
            `}</style>
            <Footer isLoggedIn={isLoggedIn} />
        </div>
    );
}