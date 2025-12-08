"use client";

import Image from "next/image";
import { Star, StarHalf } from "lucide-react";

interface TestimonialType {
  id: number;
  content: string;
  name: string;
  position: string;
  image: string;
  rating: number;
}

const TestimonialsSection = () => {
  const testimonials: TestimonialType[] = [
    {
      id: 1,
      content:
        "The JEE Advanced program at Excellence Academy completely transformed my approach to problem-solving. The faculty's guidance and rigorous practice sessions helped me secure AIR 342.",
      name: "Aditya Kumar",
      position: "IIT Bombay, Computer Science",
      image:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 5,
    },
    {
      id: 2,
      content:
        "After joining Excellence Academy's NEET program, my understanding of complex biological concepts improved significantly. The regular tests and detailed analysis helped me identify my weaknesses.",
      name: "Meera Patel",
      position: "AIIMS Delhi, MBBS",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 5,
    },
    {
      id: 3,
      content:
        "The school program not only helped me maintain top grades in my class but also built a strong foundation for competitive exams. The teachers make complex topics so easy to understand.",
      name: "Rahul Sharma",
      position: "10th Grade, 98% Score",
      image:
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.5,
    },
  ];

  // Render stars based on rating
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} size={20} className="text-yellow-300 fill-yellow-300" />);
    }

    if (hasHalf) {
      stars.push(<StarHalf key="half" size={20} className="text-yellow-300 fill-yellow-300" />);
    }

    return stars;
  };

  return (
    <section
      id="testimonials"
      className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Students Say</h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-lg opacity-90">
            Hear from our students who have achieved their academic goals with us
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border border-white/20"
            >
              <div className="flex mb-4 text-yellow-300">{renderStars(testimonial.rating)}</div>

              <p className="mb-6 text-white/90 italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center">
                <div className="relative w-12 h-12 mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-full object-cover"
                    fill
                  />
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-white/80 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-10">
          <a
            href="#contact"
            className="inline-block bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-full font-medium transition-colors duration-300"
          >
            Join Our Success Stories
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
