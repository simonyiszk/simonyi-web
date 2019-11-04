import React from "react";
import { theme, ThemeProvider, CSSReset } from "@chakra-ui/core";

import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Groups from "./components/Groups";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import "./App.css";

const customTheme = {
  ...theme,
  breakpoints: ["372px", "768px", "992px", "1200px"],
  colors: {
    ...theme.colors,
    simonyi: "#6abd51"
  }
};

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <div>
        <Hero />
        <About />
        <Services />
        <Groups />
        <Gallery />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
