"use client";

import Image from "next/image";
import React from "react";

export default function Carousel() {
  const mentors = [
    { id: 1, name: "Annette Black", role: "Dog Trainer", image: "/Images/imageprofil.png" },
    { id: 2, name: "Robert Green", role: "Life Coach", image: "/Images/imageprofil.png" },
    { id: 3, name: "Marie Durant", role: "Business Mentor", image: "/Images/imageprofil.png" },
    { id: 4, name: "John Smith", role: "Career Advisor", image: "/Images/imageprofil.png" },
    { id: 5, name: "Sophie Martin", role: "Tech Mentor", image: "/Images/imageprofil.png" },
  ];

  return (
    <div className="bg-white py-16">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Pourquoi se limiter à un <span className="bg-acquamarine">seul mentor</span> quand vous en avez des <span className="bg-texas-rose">centaines</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur. Aliquam tellus maecenas sit libero mauris mauris pellentesque ut. Gravida vestibulum.
            </p>
        </div>
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 grid-flow-col items-start">
          {mentors.map((mentor, index) => (
            <div
              key={mentor.id}
              className={`
                rounded-xl overflow-hidden
                ${index === 1 || index === 3 ? 'mt-10' : ''}
                ${index === 2 ? 'mt-20' : ''}
              `}
            >
            <Image
                src={mentor.image}
                alt={`Photo de ${mentor.name}`}
                width={344}
                height={344}
                className="object-cover w-[21.5rem] h-[21.5rem]"
            />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}