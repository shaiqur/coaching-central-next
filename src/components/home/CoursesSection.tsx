"use client";

import { useState } from "react";
import Image from "next/image";

// Import images from /public/assets (rename as needed)
import shadaburImage1 from "/public/assets/image1.jpg";
import shadaburImage2 from "/public/assets/image2.jpg";
import shadaburImage3 from "/public/assets/image2.jpg";

interface CourseType {
  id: number;
  type: string;
  title: string;
  image: any;
  badge: {
    text: string;
    color: string;
  };
  duration: string;
  description: string;
  features: string[];
}

const CoursesSection = () => {
  const [activeTab, setActiveTab] = useState<string>("all");

  const handleTabChange = (target: string) => {
    setActiveTab(target);
  };

  const courses: CourseType[] = [
    {
      id: 1,
      type: "school",
      title: "Comprehensive School Program",
      image: shadaburImage1,
      badge: { text: "Grades 7-10", color: "blue" },
      duration: "1 Years",
      description:
        "Thorough coverage of school curriculum with additional focus on building strong fundamentals across all subjects.",
      features: [
        "All Core Subjects Coverage",
        "Regular Tests & Assessments",
        "Doubt Clearing Sessions",
      ],
    },
    {
      id: 2,
      type: "11-12",
      title: "Class 11th-12th Program",
      image: shadaburImage2,
      badge: { text: "Coming Soon", color: "purple" },
      duration: "1-2 Years",
      description:
        "Comprehensive higher secondary education program covering all subjects with focus on board exam preparation and foundations for competitive exams.",
      features: [
        "Complete Board Syllabus Coverage",
        "Foundation for Competitive Exams",
        "Regular Assessments & Practice",
      ],
    },
    {
      id: 3,
      type: "jee",
      title: "JEE (Main & Advanced) Program",
      image: shadaburImage3,
      badge: { text: "Coming Soon", color: "green" },
      duration: "1 Years",
      description:
        "Specialized preparation for JEE with focus on Physics, Chemistry, and Mathematics to secure top engineering colleges.",
      features: [
        "Concept-based Learning",
        "Mock Tests & Previous Papers",
        "Problem-solving Techniques",
      ],
    },
    {
      id: 4,
      type: "neet",
      title: "NEET Preparation Program",
      image: shadaburImage2,
      badge: { text: "Coming Soon", color: "red" },
      duration: "1 Years",
      description:
        "Comprehensive preparation for NEET focusing on Biology, Physics, and Chemistry to secure admissions in top medical colleges.",
      features: [
        "In-depth Subject Coverage",
        "Regular Test Series",
        "Specialized Biology Focus",
      ],
    },
    {
      id: 5,
      type: "jee",
      title: "JEE Crash Course",
      image: shadaburImage1,
      badge: { text: "Coming Soon", color: "green" },
      duration: "6 Months",
      description:
        "Intensive short-term program for students who need focused preparation before JEE exams with targeted approach.",
      features: [
        "Topic-wise Revision",
        "Intensive Test Series",
        "Exam Pattern Familiarization",
      ],
    },
    {
      id: 6,
      type: "neet",
      title: "NEET Crash Course",
      image: shadaburImage1,
      badge: { text: "Coming Soon", color: "red" },
      duration: "6 Months",
      description:
        "Fast-track preparation for NEET aspirants focusing on high-yield topics, practice tests, and exam strategies.",
      features: [
        "Quick Revision Modules",
        "Exam Strategy Sessions",
        "Daily Practice Tests",
      ],
    },
  ];

  const filteredCourses =
    activeTab === "all"
      ? courses
      : courses.filter((course) => course.type === activeTab);

  const getBadgeClass = (color: string) => {
    switch (color) {
      case "blue":
        return "bg-blue-100 text-blue-600";
      case "green":
        return "bg-green-100 text-green-600";
      case "red":
        return "bg-red-100 text-red-600";
      case "purple":
        return "bg-purple-100 text-purple-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <section id="courses" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Academic Programs
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Comprehensive courses designed to help students excel in academics
            and competitive exams
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              { key: "all", label: "All Courses" },
              { key: "school", label: "School Academics (6-10th)" },
              { key: "11-12", label: "Classes 11th-12th" },
              { key: "jee", label: "JEE Preparation" },
              { key: "neet", label: "NEET Preparation" },
            ].map((tab) => (
              <button
                key={tab.key}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  activeTab === tab.key
                    ? "bg-primary text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                onClick={() => handleTabChange(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Course Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 overflow-hidden relative group">
                  <Image
                    src={course.image}
                    alt={course.title}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    fill
                  />

                  {(course.type === "11-12" ||
                    course.type === "jee" ||
                    course.type === "neet") && (
                    <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white text-xl font-bold">
                        Coming Soon
                      </span>
                    </div>
                  )}

                  {course.type === "school" && (
                    <div className="absolute bottom-0 left-0 right-0 bg-green-600 py-1 text-white text-center">
                      <span className="text-sm font-bold">
                        Admissions Going On
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span
                      className={`${getBadgeClass(
                        course.badge.color
                      )} text-xs font-semibold px-3 py-1 rounded-full`}
                    >
                      {course.badge.text}
                    </span>

                    <span className="text-gray-600 text-sm">
                      ⏱ {course.duration}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {course.title}
                  </h3>

                  <p className="text-gray-600 mb-4">{course.description}</p>

                  <div className="mb-4 space-y-2">
                    {course.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <span className="text-green-600 mr-2">✔</span>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="block text-center bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-full font-medium transition-colors"
                  >
                    Inquire Now
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
