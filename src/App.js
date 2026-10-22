import "./App.css";
import Navbar from "./Components/navBar.jsx";
import HeroSection from "./Components/heroSection.jsx";
import AboutMe from "./Components/aboutMe.jsx";
import DrivesMe from "./Components/drivesMe.jsx";
import Skills from "./Components/skills.jsx";
import Projects from "./Components/RecentProject.jsx";
import ContactMe from "./Components/contactMe.jsx";
import Footer from "./Components/footer.jsx";

function App() {

  return (
    <main className="w-auto h-auto overflow-x-hidden md:h-[8500px] lg:h-[8900px] bg-cyan-900">
      {/* Navbar */}
      <Navbar/>
      
      {/* Hero section  */}
      <HeroSection/>

      {/* About Me */}
      <AboutMe/>

      {/* DrivesMe */}
      <DrivesMe/>

      {/* skills */}
      <Skills/>

      {/* projects */}
      <Projects/>

      {/* contactMe */}
      <ContactMe/>

      {/* Footer */}
      <Footer/>
    </main>
  );
}

export default App;
