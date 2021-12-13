import NavBar from '../components/section/NavBar';
import Hero from '../components/section/Hero';
import AboutSection from '../components/section/AboutSection';
import VisionSection from '../components/section/VisionSection';
import FeatureSection from '../components/section/FeatureSection';
import ProjectSection from '../components/section/ProjectSection';
import ProductSection from '../components/section/ProductSection';
import ContactSection from '../components/section/ContactSection';
import Footer from '../components/section/Footer';

export default function Home() {
  return (
    <div >
      <NavBar />
      <Hero />
      <AboutSection />
      <VisionSection />
      <FeatureSection />
      <ProductSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </div>
  );
};