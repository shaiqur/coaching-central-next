const StatsSection = () => {
  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "5000+", label: "Students Enrolled" },
    { value: "30+", label: "Qualified Teachers" },
    { value: "98%", label: "Success Rate" }
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
