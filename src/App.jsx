import React from "react";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { theme, ChakraProvider } from "@chakra-ui/react";

import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Groups from "./components/Groups";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
//import Tankor from "./components/Tankor";
import "./App.css";

const customTheme = {
	...theme,
	breakpoints: ["372px", "768px", "992px", "1200px"],
	colors: {
		...theme.colors,
		simonyi: "#6abd51",
	},
};

function App() {
	/*
  return (
    <ChakraProvider theme={customTheme}>
      <CSSReset />
      <Router>
        <Switch>
          <Route exact path="/">
            <div>
              <Hero />
              <About />
              <Services />
              <Groups />
              <Gallery />
              <Footer />
            </div>
          </Route>
          <Route path="/tankor">
            <Tankor />
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
  */

	return (
		<ChakraProvider theme={customTheme}>
			<main>
				<Hero />
				<About />
				<Services />
				<Groups />
				<Gallery />
				<Footer />
			</main>
		</ChakraProvider>
	);
}

export default App;
