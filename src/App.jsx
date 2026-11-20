import "./App.css";
import AboutMe from "./Components/aboutMe.jsx";
import ContactMe from "./Components/contactMe.jsx";
import DrivesMe from "./Components/drivesMe.jsx";
import ExperienceEducation from "./Components/ExperienceEducation.jsx";
import Footer from "./Components/footer.jsx";
import HeroSection from "./Components/heroSection.jsx";
import Navbar from "./Components/navBar.jsx";
import PointerEffects from "./Components/PointerEffects.jsx";
import Projects from "./Components/RecentProject.jsx";
import Skills from "./Components/skills.jsx";

export default function App() {
  return (
    <>
      <a href="#home" className="skip-link">Skip to content</a>
      <Navbar />
      <main>
        <HeroSection />
        <Projects />
        <AboutMe />
        <Skills />
        <ExperienceEducation />
        <DrivesMe />
        <ContactMe />
      </main>
      <Footer />
      <PointerEffects />
    </>
  );
}
