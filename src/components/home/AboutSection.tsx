const AboutSection = () => {
  const features = [
    {
      icon: "fas fa-chalkboard-teacher",
      title: "Expert Faculty",
      description: "Our teachers are subject matter experts with years of experience in their respective fields and proven teaching methodologies."
    },
    {
      icon: "fas fa-book-open",
      title: "Comprehensive Curriculum",
      description: "Our meticulously designed curriculum covers all aspects of academics and competitive exam preparation with regular updates."
    },
    {
      icon: "fas fa-laptop",
      title: "Well-Planned Facilities",
      description: "Well-designed classrooms, a dedicated library space, and a comfortable study environment that supports focused and effective learning at GyanNest Academy."
    }
  ];

  return (
    <section id="about" className="py-16 bg-neutral-lightest">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About GyanNest Academy</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">Discover our journey, mission, and commitment to educational excellence</p>
        </div>
        
        <div className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div className="flex items-start">
              <div className="mr-4 text-secondary text-2xl">
                <i className="fas fa-lightbulb"></i>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Our Vision</h4>
                <p className="text-gray-600">To be the leading educational institute known for academic excellence and holistic development.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-4 text-secondary text-2xl">
                <i className="fas fa-bullseye"></i>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Our Mission</h4>
                <p className="text-gray-600">To empower students with knowledge, skills, and confidence to excel in academics and beyond.</p>
              </div>
            </div>
          </div>
            
          <div className="flex justify-center mt-8">
            <a 
              href="#courses" 
              className="btn inline-block bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full font-medium transition-colors duration-300"
            >
              Discover Our Programs <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
        
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl text-primary mb-4">
                  <i className={feature.icon}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
