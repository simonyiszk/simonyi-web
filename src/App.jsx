import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Groups from "./components/Groups";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Groups />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
