"use client";

import Image from "next/image";
import React from "react";
{/*import { useQuery } from '@apollo/client';
import { GET_DATA } from '@/lib/queries';*/}

export default function Carousel() {

    {/*const { loading, error, data } = useQuery(GET_DATA);

    if (loading) return <p>Chargement...</p>;
    if (error) return <p>Erreur : {error.message}</p>;

console.log(data);*/}

  const mentors = [
    { id: 1, name: "Annette Black", role: "Dog Trainer", image: "/Images/1.PNG" },
    { id: 2, name: "Robert Green", role: "Life Coach", image: "/Images/2.PNG" },
    { id: 3, name: "Marie Durant", role: "Business Mentor", image: "/Images/3.PNG" },
    { id: 4, name: "John Smith", role: "Career Advisor", image: "/Images/4.PNG" },
    { id: 5, name: "Sophie Martin", role: "Tech Mentor", image: "/Images/5.PNG" },
  ];

  return (
    <div className="bg-white py-16 flex flex-col items-center">
      <div className="text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Pourquoi se limiter à un <span className="bg-acquamarine px-2">seul mentor</span> quand vous en avez des <span className="bg-texas-rose px-2">centaines</span>
        </h2>
      </div>
      <div className="w-full mt-4 px-4 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-start">
          {mentors.map((mentor, index) => (
            <div
              key={mentor.id}
              className={`rounded-xl overflow-hidden flex justify-center ${index === 1 || index === 3 ? 'mt-10' : ''} ${index === 2 ? 'mt-20' : ''} sm:block hidden`}
            >
              <Image
                src={mentor.image}
                alt={`Photo de ${mentor.name}`}
                width={250}
                height={250}
                className="object-cover w-52 h-52 sm:w-60 sm:h-60 rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}