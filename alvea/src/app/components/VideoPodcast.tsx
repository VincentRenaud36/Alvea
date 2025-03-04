"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function VideoPodcast() {
    const mentors = [
        { id: 1, name: "Jean Lambert", role: "Vendeur de marron", image: "/Images/1.PNG" },
        { id: 2, name: "Camille Moreau", role: "Couturière", image: "/Images/2.PNG" },
        { id: 3, name: "Ismaël Laurens", role: "Libraire", image: "/Images/3.PNG" },
        { id: 4, name: "Bernard Alban", role: "Vendeur", image: "/Images/4.PNG" },
        { id: 5, name: "Jeanne Alliot", role: "Couturière", image: "/Images/5.PNG" },
        { id: 6, name: "Arthur Fisher", role: "Chocolatier", image: "/Images/6-1.PNG" },
        { id: 7, name: "Pierre Stone", role: "Barista", image: "/Images/6-2.PNG" },
        { id: 8, name: "Marie Durant", role: "Vendeur", image: "/Images/7-1.PNG" },
        { id: 9, name: "Amir Durant", role: "Vendeur", image: "/Images/7-2.PNG" },
    ];

    const column1 = mentors.slice(0, 3);
    const column2 = mentors.slice(3, 6);
    const column3 = mentors.slice(6, 9);

    return (
        <div className="bg-white py-16 flex flex-col items-center mt-24">
            <div className='text-center px-4'>
                <h2 className='text-3xl md:text-4xl font-semibold'>Accédez à des centaines de vidéos <br /> et podcasts de professionnels</h2>
                <Link href="/discover"><button className='bg-bittersweet text-white px-8 py-5 rounded-xl text-md md:text-xl font-bold mt-8'>Découvrir</button></Link>
            </div>
            <div className="max-w-6xl mx-auto flex justify-center px-4 sm:px-6 lg:px-8">
                <div className="hidden sm:flex gap-6">
                    {/* Colonne 1 */}
                    <div className="flex flex-col items-center">
                        {column1.map((mentor) => (
                            <div key={mentor.id} className="relative rounded-lg overflow-hidden mt-4">
                                <Link href="/discover">
                                    <Image
                                        src={mentor.image}
                                        alt={`Photo de ${mentor.name}`}
                                        width={400}
                                        height={587}
                                        className="object-cover w-[330px] h-[587px] rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                                    />
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* Colonne 2 */}
                    <div className="flex flex-col items-center mt-20">
                        {column2.map((mentor) => (
                            <div key={mentor.id} className="relative rounded-lg overflow-hidden mt-4">
                                <Link href="/discover">
                                    <Image
                                        src={mentor.image}
                                        alt={`Photo de ${mentor.name}`}
                                        width={400}
                                        height={400}
                                        className="object-cover w-[330px] h-[587px] rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                                    />
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* Colonne 3 */}
                    <div className="flex flex-col items-center mt-40">
                        {column3.map((mentor) => (
                            <div key={mentor.id} className="relative rounded-lg overflow-hidden mt-4">
                                <Link href="/discover">
                                    <Image
                                        src={mentor.image}
                                        alt={`Photo de ${mentor.name}`}
                                        width={400}
                                        height={400}
                                        className="object-cover w-[330px] h-[587px] rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                                    />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoPodcast;