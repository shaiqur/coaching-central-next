// src/app/page.tsx
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/back-to-top";

import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import AboutSection from "@/components/home/AboutSection";
import CoursesSection from "@/components/home/CoursesSection";
import TeachersSection from "@/components/home/TeachersSection";
import GallerySection from "@/components/home/GallerySection";
import FaqSection from "@/components/home/FaqSection";
import ContactSection from "@/components/home/ContactSection";
import CtaSection from "@/components/home/CtaSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <CoursesSection />
        <TeachersSection />
        <GallerySection />
        <FaqSection />
        <ContactSection />
        <CtaSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
