import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Home from "./pages/Home"
import About from "./pages/About"
import Donate from "./pages/Donate"
import Involve from "./pages/Involve"
import Error from "./pages/Error"
import Project from "./pages/Project"
import Gallery from "./pages/Gallery"


import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/donate">
          <Donate />
        </Route>
        <Route path="/involve">
          <Involve />
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>
        <Route path="/gallery/:id">
          <Project />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
