const CtaSection = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey to Academic Success?</h2>
          <p className="text-xl mb-8 opacity-90">Join Excellence Academy today and take the first step towards achieving your academic goals.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#contact" 
              className="btn bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-full font-medium transition-colors duration-300"
            >
              Contact Us Now
            </a>
            <a 
              href="#courses" 
              className="btn bg-transparent hover:bg-white hover:text-primary border-2 border-white px-8 py-3 rounded-full font-medium transition-colors duration-300"
            >
              Explore Programs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
