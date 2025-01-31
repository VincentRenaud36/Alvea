"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function VideoPodcast() {
    const mentors = [
        { id: 1, name: "Annette Black", role: "Dog Trainer", image: "/Images/meuf.png" },
        { id: 2, name: "Robert Green", role: "Life Coach", image: "/Images/meuf.png" },
        { id: 3, name: "Marie Durant", role: "Business Mentor", image: "/Images/meuf.png" },
        { id: 4, name: "Marie Durant", role: "Business Mentor", image: "/Images/meuf.png" },
        { id: 5, name: "Marie Durant", role: "Business Mentor", image: "/Images/meuf.png" },
        { id: 6, name: "Marie Durant", role: "Business Mentor", image: "/Images/meuf.png" },
        { id: 7, name: "Marie Durant", role: "Business Mentor", image: "/Images/meuf.png" },
        { id: 8, name: "Marie Durant", role: "Business Mentor", image: "/Images/meuf.png" },
        { id: 9, name: "Marie Durant", role: "Business Mentor", image: "/Images/meuf.png" },
    ];

    const column1 = mentors.slice(0, 3);
    const column2 = mentors.slice(3, 6);
    const column3 = mentors.slice(6, 9);

    return (
        <div className="bg-white py-16 flex flex-col items-center">
            <div className='text-center px-4'>
                <h2 className='text-3xl md:text-4xl font-bold'>Accédez à des centaines de vidéos et podcasts de professionnels</h2>
                <Link href="/discover"><button className='bg-bittersweet text-white px-8 py-5 rounded-xl text-md md:text-xl font-bold mt-8'>Découvrir</button></Link>
            </div>
            <div className="max-w-6xl mx-auto flex justify-center px-4 sm:px-6 lg:px-8">
                <div className="hidden sm:flex gap-6">
                    {/* Colonne 1 */}
                    <div className="flex flex-col items-center">
                        {column1.map((mentor) => (
                            <div key={mentor.id} className="relative rounded-lg overflow-hidden">
                                <Image
                                    src={mentor.image}
                                    alt={`Photo de ${mentor.name}`}
                                    width={400}
                                    height={587}
                                    className="object-cover w-[330px] h-[587px] rounded-lg"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Colonne 2 */}
                    <div className="flex flex-col items-center mt-20">
                        {column2.map((mentor) => (
                            <div key={mentor.id} className="relative rounded-lg overflow-hidden">
                                <Image
                                    src={mentor.image}
                                    alt={`Photo de ${mentor.name}`}
                                    width={400}
                                    height={400}
                                    className="object-cover w-[330px] h-[587px] rounded-lg"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Colonne 3 */}
                    <div className="flex flex-col items-center mt-40">
                        {column3.map((mentor) => (
                            <div key={mentor.id} className="relative rounded-lg overflow-hidden">
                                <Image
                                    src={mentor.image}
                                    alt={`Photo de ${mentor.name}`}
                                    width={400}
                                    height={400}
                                    className="object-cover w-[330px] h-[587px] rounded-lg"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoPodcast;