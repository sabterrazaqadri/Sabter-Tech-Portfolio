import HeroSection from "./Components/Herosection";
import AboutMeSection from "./Components/Aboutme";
import SkillsSection from "./Components/Skills";
import ProjectsSection from "./Components/ProjectsSection";
import ContactSection from "./Components/Contact";
import Footer from "./Components/Footer";

export default function Homepage() {
  return (
    <div>
      <HeroSection />
      <AboutMeSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
