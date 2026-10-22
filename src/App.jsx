import "./App.css";
import AboutMe from "./Components/aboutMe.jsx";
import ContactMe from "./Components/contactMe.jsx";
import DrivesMe from "./Components/drivesMe.jsx";
import ExperienceEducation from "./Components/ExperienceEducation.jsx";
import Footer from "./Components/footer.jsx";
import HeroSection from "./Components/heroSection.jsx";
import Navbar from "./Components/navBar.jsx";
import Projects from "./Components/RecentProject.jsx";
import Skills from "./Components/skills.jsx";

function App() {
  return (
    <main className="min-h-screen w-full overflow-x-clip bg-[#080b10] text-slate-100">
      <Navbar />
      <HeroSection />
      <Projects />
      <AboutMe />
      <Skills />
      <ExperienceEducation />
      <DrivesMe />
      <ContactMe />
      <Footer />
    </main>
  );
}

export default App;
