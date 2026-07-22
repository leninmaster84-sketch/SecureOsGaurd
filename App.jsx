import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import DownloadSection from "./components/DownloadSection.jsx";
import InstallationGuide from "./components/InstallationGuide.jsx";
import Documentation from "./components/Documentation.jsx";
import OpenSource from "./components/OpenSource.jsx";
import About from "./components/About.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <DownloadSection />
        <InstallationGuide />
        <Documentation />
        <OpenSource />
        <About />
      </main>
      <Footer />
    </>
  );
}
