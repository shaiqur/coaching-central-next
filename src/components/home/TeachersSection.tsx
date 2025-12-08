"use client";

import Image from "next/image";
import { Mail, Linkedin, Star } from "lucide-react";

interface TeacherType {
  id: number;
  name: string;
  position: string;
  image: any;
  description: string;
  rating: number;
}

import teacher1 from "../../../public/teachers/teacher1.jpg";
import teacher2 from "../../../public/teachers/teacher2.jpg";
import teacher3 from "../../../public/teachers/teacher3.jpg";
import teacher4 from "../../../public/teachers/teacher4.jpg";

const TeachersSection = () => {
  const teachers: TeacherType[] = [
    {
      id: 1,
      name: "Shadabur Rahman",
      position: "Mathematics | BE Computer Science",
      image: teacher1,
      description:
        "2+ years of teaching experience with expertise in mathematics. Passionate about developing problem-solving skills in students.",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Dr. Rajesh Sharma",
      position: "Physics | IIT Delhi",
      image: teacher2,
      description:
        "15+ years of teaching experience with expertise in mechanics and electromagnetism.",
      rating: 4.9,
    },
    {
      id: 3,
      name: "Dr. Priya Gupta",
      position: "Biology | AIIMS",
      image: teacher3,
      description:
        "NEET expert with 12+ years of teaching experience, specializing in human physiology.",
      rating: 4.8,
    },
    {
      id: 4,
      name: "Prof. Anil Verma",
      position: "Mathematics | IIT Kanpur",
      image: teacher4,
      description:
        "Mathematics expert for JEE Advanced with special focus on calculus and algebra.",
      rating: 4.9,
    },
  ];

  return (
    <section id="teachers" className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Meet Our Expert Faculty
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Learn from experienced educators dedicated to your academic success.
          </p>
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teachers.map((teacher) => (
            <div
              key={teacher.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all overflow-hidden"
            >
              {/* Teacher Image */}
              <div className="relative w-full h-64">
                <Image
                  src={teacher.image}
                  alt={teacher.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw,
                         (max-width: 1200px) 50vw,
                         25vw"
                />
              </div>

              {/* Teacher Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{teacher.name}</h3>
                <p className="text-primary font-medium mb-3">{teacher.position}</p>
                <p className="text-gray-600 mb-4">{teacher.description}</p>

                <div className="flex justify-between items-center">
                  {/* Social Icons */}
                  <div className="flex space-x-3">
                    <a
                      href="#"
                      className="text-gray-500 hover:text-primary transition-colors"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-primary transition-colors"
                    >
                      <Mail size={20} />
                    </a>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center text-yellow-500">
                    <Star size={18} fill="gold" className="text-yellow-500" />
                    <span className="text-gray-700 ml-1">{teacher.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="#contact"
            className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full font-medium transition-colors duration-300"
          >
            Join Our Faculty
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeachersSection;
