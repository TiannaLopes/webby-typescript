import { BrowserRouter, Route, Switch } from "react-router-dom";

import { NavBar } from "./NavBar";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import Footer from "./components/Footer";
import React from "react";
import HomeContainer from "./components/HomeContainer";
export function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <HomePage />
            <HomeContainer />
            <Footer />
          </Route>
          <Route path="/about">
            {/* calculator component here */}
            {/* game component here */}
            <AboutPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
