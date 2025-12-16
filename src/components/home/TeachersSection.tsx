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
  linkedin?: string;
  email?: string;
}

import teacher1 from "../../../public/teachers/shadab.png";
import teacher2 from "../../../public/teachers/Ather.jpeg";
import teacher3 from "../../../public/teachers/naved.jpeg";
import teacher4 from "../../../public/teachers/noimage.png";

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
  linkedin: "https://linkedin.com/in/shadabur-rahman-6b7453129",
  email: "mailto:shadabur.rahman@gyannestacademy.com",
    },
    {
      id: 2,
      name: "Ather Naseem",
      position: "Masters in Computer Application",
      image: teacher2,
      description:
        "4+ years of teaching experience with expertise in Mathematics and science.",
      rating: 4.1,
      linkedin: "https://linkedin.com/in/ather-naseem-285852196",
      email: "mailto:athernaseem@gmail.com",
    },
    {
      id: 3,
      name: "Dr. Naved Anjum",
      position: "Biology | Phd in Biochemistry",
      image: teacher3,
      description:
        "6+ years of experience with Expertise in Biology and Chemistry.",
      rating: 4.8,
        linkedin: "https://linkedin.com/in/naved-anjum-1b73a288",
        email: "mailto:shadabur.rahman@gyannestacademy.com",
    },
    {
      id: 4,
      name: "Anil Verma",
      position: "Mathematics | Msc in Mathematics",
      image: teacher4,
      description:
        "Mathematics expert with special focus on calculus and algebra.",
      rating: 4.9,
    },
  ];

  return (
    <section id="teachers" className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Know Some Of Our Expert Faculty
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Learn from experienced educators dedicated to your academic as well as competitive success.
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
              <div className="relative w-full aspect-[3/4]">

                <Image
  src={teacher.image}
  alt={teacher.name}
  fill
  className="object-cover object-top"
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
  {teacher.linkedin && (
    <a
      href={teacher.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-full text-gray-500 hover:text-primary hover:bg-primary/10 transition"
      aria-label="LinkedIn Profile"
    >
      <Linkedin size={20} />
    </a>
  )}

  {teacher.email && (
    <a
      href={teacher.email}
      className="p-2 rounded-full text-gray-500 hover:text-primary hover:bg-primary/10 transition"
      aria-label="Email"
    >
      <Mail size={20} />
    </a>
  )}
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
            Join As Our Faculty
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeachersSection;
