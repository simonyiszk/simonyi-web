import React from "react";
import { theme, ThemeProvider, CSSReset } from "@chakra-ui/core";

import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Groups from "./components/Groups";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
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
