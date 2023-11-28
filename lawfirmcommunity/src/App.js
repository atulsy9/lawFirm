import "./App.css";
import About from "./components/About";
import AreaOfPratices from "./components/AreaOfPratices";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import HappyClients from "./components/HappyClients";
import HeroSection from "./components/HeroSection";
import Subscribe from "./components/Subscribe";
import Team from "./components/Team";
import WhyChooseus from "./components/WhyChooseus";

function App() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <HeroSection />
      <About />
      <WhyChooseus />
      <AreaOfPratices />
      <HappyClients />
      <Team />
      <FAQSection />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
