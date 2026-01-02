"use client";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Instagram, Youtube, Facebook, MessageCircle } from "lucide-react";
import { Loader2 } from "lucide-react";

const ContactSection = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Your Google Form POST URL:
  const GOOGLE_FORM_ACTION =
    "https://docs.google.com/forms/d/e/1FAIpQLSfUaiWXT7J09DEtCFEaS7tRVpxaQI9fjeIL4-m-iHv4JHo4pA/formResponse";

  // Your Entry IDs:
  const ENTRY_NAME = "entry.2009766924";
  const ENTRY_EMAIL = "entry.2122048059";
  const ENTRY_PHONE = "entry.1828386970";
  const ENTRY_SUBJECT = "entry.1152766095";
  const ENTRY_MESSAGE = "entry.523223197";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    fetch(GOOGLE_FORM_ACTION, {
      method: "POST",
      body: data,
      mode: "no-cors",
    }).then(() => {
      setLoading(false);
      setSuccess(true);
      form.reset();
      setTimeout(() => setSuccess(false), 4000);
    });
  };
  const contactInfoItems = [
    {
      icon: "map",
      title: "Address",
      content: [" Bazar Road Zero Mile Araria, Near Electronic Bazar(LG Showroom),854311,Araria, Bihar,India"],
    },
    {
      icon: "phone",
      title: "Phone",
      content: ["+91 9304233660 (Admissions)", "+91 7274853381 (General Inquiries)"],
    },
    {
      icon: "mail",
      title: "Email",
      content: ["gyannestacademy2026@gmail.com"],
    },
    {
      icon: "clock",
      title: "Working Hours",
      content: ["Monday - Saturday: 6:00 AM - 8:00 PM", "Sunday: Closed"],
    },
  ];

  const socialLinks = [
    {
      platform: "instagram",
      color: "bg-pink-600 hover:bg-pink-700",
      link: "https://instagram.com/gyannest_academy?igsh=MXY2MzB2dDhqOXBpYg%3D%3D&utm_source=qr"
    },
    {
      platform: "facebook",
      color: "bg-blue-600 hover:bg-blue-700",
      link: "https://facebook.com/share/1ARcqwS1h9/?mibextid=wwXIfr"
    },
    {
      platform: "youtube",
      color: "bg-red-600 hover:bg-red-700",
      link: "https://www.youtube.com/@GyanNestAcademy"
    }
  ];
  

  const iconMap: Record<string, React.ReactNode> = {
    map: <MapPin size={20} />,
    phone: <Phone size={20} />,
    mail: <Mail size={20} />,
    clock: <Clock size={20} />,
  };

  const socialIconMap: Record<string, React.ReactNode> = {
    instagram: <Instagram size={20} />,
    youtube: <Youtube size={20} />,
    facebook: <Facebook size={20} />,
  };

  return (
    <>
      {/* MAIN CONTACT SECTION */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* HEADER */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Get In Touch With Us
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg">
              Have questions or ready to enroll? We&apos;re here to help.
            </p>
          </div>

          {/* GRID */}
          <div className="flex flex-col lg:flex-row gap-12">

  {/* LEFT COLUMN */}
  <div className="flex-1 flex flex-col h-full">

    {/* Contact Info Box */}
    <div className="bg-neutral-lightest p-8 rounded-xl shadow-md border border-gray-200 flex-1">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">
        Contact Information
      </h3>

      <div className="space-y-8">
        {contactInfoItems.map((item, i) => (
          <div key={i} className="flex">
            <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center shadow-md mr-4">
              {iconMap[item.icon]}
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-800">{item.title}</h4>
              {item.content.map((line, idx) => (
                <p key={idx} className="text-gray-600">{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Social Links */}
      <div className="mt-8">
        <h4 className="text-lg font-semibold text-gray-800 mb-3">
          Follow Us
        </h4>

        <div className="flex space-x-4">
          {socialLinks.map((social, i) => (
            <a
              key={i}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${social.color} text-white w-10 h-10 rounded-full flex items-center justify-center shadow hover:scale-110 transition-transform`}
            >
              {socialIconMap[social.platform]}
            </a>
          ))}
        </div>
      </div>

    </div>

    {/* MAP BOX */}
    

  </div>

  {/* RIGHT COLUMN */}
  <div className="flex-1 flex flex-col h-full">

    {/* Form Box */}
    <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200 flex-1">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>

      <form onSubmit={handleSubmit} className="space-y-6 flex flex-col flex-1">

        {/* Name */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Full Name</label>
          <input
            name={ENTRY_NAME}
            required
            placeholder="Enter your full name"
            className="w-full p-3 border rounded-lg"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Email</label>
          <input
            name={ENTRY_EMAIL}
            type="email"
            required
            placeholder="Enter your email"
            className="w-full p-3 border rounded-lg"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
          <input
            name={ENTRY_PHONE}
            type="tel"
            required
            placeholder="Enter your phone number"
            className="w-full p-3 border rounded-lg"
          />
        </div>

        {/* Subject */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Subject</label>
          <select
            name={ENTRY_SUBJECT}
            required
            className="w-full p-3 border rounded-lg"
          >
            <option value="">Select a subject</option>
            <option value="Admissions">Admissions Inquiry</option>
            <option value="Course Information">Course Information</option>
            <option value="Fees">Fee Structure</option>
            <option value="Faculty">Faculty Information</option>
            <option value="Join As Faculty">Join As a Faculty</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Message */}
        <div className="flex-1">
          <label className="block text-gray-700 font-medium mb-1">Message</label>
          <textarea
            name={ENTRY_MESSAGE}
            required
            rows={4}
            placeholder="Write your message here..."
            className="w-full p-3 border rounded-lg h-full"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="bg-primary text-white w-full py-3 rounded-lg font-medium hover:bg-primary-dark transition flex justify-center"
        >
          {loading ? (
            <span className="flex items-center">
              <Loader2 className="animate-spin mr-2" /> Sending...
            </span>
          ) : (
            "Send Message"
          )}
        </button>

        {success && (
          <p className="text-green-600 text-center font-medium">
            ✔ Message sent successfully!
          </p>
        )}
      </form>
    </div>

  </div>

</div>
<div className="mt-6">
      <div className="bg-gray-200 rounded-xl h-64 overflow-hidden shadow-md border">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2728.716620299316!2d87.47016099999999!3d26.121261999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDA3JzE2LjUiTiA4N8KwMjgnMTIuNiJF!5e1!3m2!1sen!2sin!4v1747912921822!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          className="w-full h-full"
          title="Excellence Academy Location"
        ></iframe>
      </div>
    </div>
        </div>
      </section>

      {/* FLOATING WHATSAPP BUTTON ONLY */}
      <a
        href="https://wa.me/919911058679"
        target="_blank"
        rel="noopener noreferrer"
        className="
          fixed bottom-6 right-6 
          bg-green-500 hover:bg-green-600 
          text-white w-16 h-16 
          rounded-full shadow-2xl 
          flex items-center justify-center
          transition-transform duration-300 
          hover:scale-110 z-50
        "
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={32} />
      </a>
    </>
  );
};

export default ContactSection;
