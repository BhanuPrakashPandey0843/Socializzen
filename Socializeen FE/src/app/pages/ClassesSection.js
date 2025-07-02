"use client";
import React from "react";
import Image from "next/image";

const classes = [
  {
    title: "PAINTING CLASS FOR YOUNG CHILDREN",
    description:
      "Continually deliver robust systems through virtual core competencies. Monotonectally",
    age: "2-5",
    size: "22",
    educator: "4",
    image: "/class1.jpg",
  },
  {
    title: "DANCE CLASS FOR YOUNG CHILDREN",
    description:
      "Continually deliver robust systems through virtual core competencies. Monotonectally",
    age: "2-5",
    size: "22",
    educator: "4",
    image: "/class2.jpg",
  },
  {
    title: "MUSIC CLASS FOR TODDLERS",
    description:
      "Continually deliver robust systems through virtual core competencies. Monotonectally",
    age: "2-5",
    size: "22",
    educator: "4",
    image: "/class3.jpg",
  },
];

export default function ClassesSection() {
  return (
    <section className="relative bg-orange-500 text-white overflow-hidden">
      

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 text-center z-10 relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Classes</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {classes.map((cls, i) => (
            <div key={i} className="bg-white text-black rounded-lg shadow-lg overflow-hidden">
              <Image
                src={cls.image}
                alt={cls.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-left">
                <h4 className="font-bold text-sm uppercase mb-2">{cls.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{cls.description}</p>
                <div className="grid grid-cols-3 text-center border-t pt-4 text-sm text-gray-700">
                  <div>
                    <p className="font-bold text-orange-500">{cls.age}</p>
                    <span>Years old</span>
                  </div>
                  <div>
                    <p className="font-bold text-orange-500">{cls.size}</p>
                    <span>class size</span>
                  </div>
                  <div>
                    <p className="font-bold text-orange-500">{cls.educator}</p>
                    <span>Educator</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    

    </section>
  );
}
