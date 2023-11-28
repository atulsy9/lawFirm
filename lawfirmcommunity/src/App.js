import "./App.css";
import About from "./components/About";
import AreaOfPratices from "./components/AreaOfPratices";
import HeroSection from "./components/HeroSection";
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
    </div>
  );
}

export default App;
