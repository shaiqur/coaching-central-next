//import shadaburImage from "@assets/WhatsApp Image 2025-05-20 at 2.42.11 PM.jpeg";
//import shadaburImage2 from "@assets/WhatsApp Image 2025-05-20 at 2.42.11 PM.jpeg";
//import shadaburImage3 from "@assets/WhatsApp Image 2025-05-20 at 2.42.11 PM.jpeg";
import Image from "next/image";
import image1 from "../../../public/assets/image3.jpeg";
import image2 from "../../../public/assets/image3.jpeg";
import image3 from "../../../public/assets/image3.jpeg";
import image4 from "../../../public/assets/image3.jpeg";

const HeroSection = () => {
  return (
    <section id="home" className="relative bg-[#87CEEB] text-[#0C3559]">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
              Your Path to <span>Academic Excellence</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-lg">
              Specialized coaching for 7th-10th academics, NEET, and JEE preparation with our expert faculty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#courses" 
                className="btn bg-accent hover:bg-accent-dark text-white px-8 py-3 rounded-full font-semibold text-center transition-colors duration-300"
              >
                Explore Courses
              </a>
              <a 
                href="#contact" 
                className="btn bg-white hover:bg-gray-100 text-primary px-8 py-3 rounded-full font-semibold text-center transition-colors duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-10">
            <div className="grid grid-cols-2 gap-4">
              {/* Students learning in classroom */}
              <Image
                src={image1}
                alt="..."
                width={500}
                height={500}
                className="rounded-xl shadow-lg object-cover"
              />
              {/* Engaged student in class */}
              <Image
                src={image2}
                alt="..."
                width={500}
                height={500}
                className="rounded-xl shadow-lg object-cover"
              />
              {/* Science lab practical session */}
              <Image
                  src={image3}
                  alt="..."
                  width={500}
                  height={500}
                  className="rounded-xl shadow-lg object-cover"
                />
              {/* Teacher explaining concepts */}
              <Image
                  src={image4}
                  alt="..."
                  width={500}
                  height={500}
                  className="rounded-xl shadow-lg object-cover"
                />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" fill="#ffffff">
          <path d="M0,96L120,85.3C240,75,480,53,720,53.3C960,53,1200,75,1320,85.3L1440,96L1440,100L1320,100C1200,100,960,100,720,100C480,100,240,100,120,100L0,100Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
