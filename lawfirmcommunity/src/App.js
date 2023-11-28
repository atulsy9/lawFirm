import "./App.css";
import About from "./components/About";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <HeroSection />
      <About />
    </div>
  );
}

export default App;
