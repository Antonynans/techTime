import HeroSection1 from "./components/HeroSection1";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/utils/ScrollToTop";
import "./styles/global.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Navbar />
      <div>
        <HeroSection1 />
      </div>
    </BrowserRouter>
  );
}

export default App;
