import './App.css';

import { CSSReset, theme, ThemeProvider } from '@chakra-ui/core';
import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import About from './components/About';
import Event from './components/Event';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Groups from './components/Groups';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';

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
        <Router>
          <Header />
          <div style={{ minHeight: "100vh" }}>
            <Switch>
              <Route exact path="/events">
                <Event></Event>
              </Route>
              <Route path="/">
                <Hero />
                <About />
                <Services />
                <Groups />
                <Gallery />
              </Route>
              <Redirect from="*" to="/"></Redirect>
            </Switch>
          </div>
        </Router>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
