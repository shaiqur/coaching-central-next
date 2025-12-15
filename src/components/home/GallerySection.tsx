"use client";

import Image from "next/image";

interface GalleryImageType {
  id: number;
  src: any;
  alt: string;
}

import image1 from "../../../public/gallery/campus.png";
import image2 from "../../../public/gallery/campus2.png";
import image3 from "../../../public/gallery/campus3.png";

const GallerySection = () => {
  const galleryImages: GalleryImageType[] = [
    { id: 1, src: image1, alt: "Modern Digital Classroom" },
    { id: 2, src: image2, alt: "Science Laboratory" },
    { id: 3, src: image3, alt: "Library & Study Area" },
    { id: 4, src: image2, alt: "Computer Lab" },
    { id: 5, src: image3, alt: "Student Recreation Area" },
    { id: 6, src: image1, alt: "Campus Exterior" },
  ];

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Campus & Facilities
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-gray-600 text-lg">
            Take a virtual tour of our state-of-the-art facilities designed for optimal learning
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow group"
            >
              {/* aspect-[4/3] ensures a uniform 4:3 box; change to aspect-video or aspect-square if you prefer */}
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={image.id <= 2} // optional: prioritize first images
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
