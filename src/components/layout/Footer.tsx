// src/components/layout/Footer.tsx
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Courses", href: "#courses" },
    { label: "Faculty", href: "#teachers" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  const programs = [
    { label: "School Program (7-10th)", href: "#courses" },
    { label: "NEET Preparation", href: "#courses" },
    { label: "JEE Main/Advanced", href: "#courses" },
    { label: "Foundation Courses", href: "#courses" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6" id="footer">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">
              GyanNest Academy
            </h3>
            <p className="text-gray-400 mb-4">
              Shaping the future of students with personalized attention, expert
              faculty, and holistic development.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Programs
            </h4>
            <ul className="space-y-2">
              {programs.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact snippet */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Contact
            </h4>
            <p className="text-gray-400">
              Bazar Road Zero Mile Araria, Near Electronic Bazar(LG Showroom).<br />Pin:854311,Araria, Bihar,India
            </p>
            <p className="mt-3 text-gray-400">
              Phone: <span className="font-medium text-white">+91 9304233660</span>
            </p>
            <p className="mt-1 text-gray-400">
              Email:{" "}
              <a
                href="mailto:shadabur.rahman@gyannestacademy.com"
                className="text-primary hover:text-primary-dark"
              >
                shadabur.rahman@gyannestacademy.com
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-4 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {currentYear} GyanNest Academy. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
