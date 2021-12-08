import {React, useEffect, useRef} from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Home from "./pages/Home"
import About from "./pages/About"
import Donate from "./pages/Donate"
import Involve from "./pages/Involve"
import Error from "./pages/Error"
import Project from "./pages/Project.js"
import Gallery from "./pages/Gallery"
import lotIcon from '../src/media/whitecirclelot.png'
import { Helmet } from "react-helmet"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import anime from "animejs"

function App() {
  return (
    <Router>
      <Helmet>
        <meta charset="UTF-8"></meta>
        <meta name="description" content="The LOT Foundation website"></meta>
        <meta name="keywords" content="HTML, CSS, JavaScript"></meta>
        <meta property="og:title" content="Laugh Out Together" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://laughouttogether.org" />
        <meta property="og:image" content={lotIcon} />
        <meta property="og:description" content="The LOT Foundation website" />
        <meta name="theme-color" content="#ff6b6b" />

        <meta name="twitter:card" content="summary_large_image"></meta>
        <link rel="icon" href={lotIcon} type="image/x-icon" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Helmet>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/donate">
          <Donate />
        </Route>
        <Route exact path="/involve">
          <Involve />
        </Route>
        <Route exact path="/gallery">
          <Gallery />
        </Route>
        <Route exact path="/project/:id">
          <Project />
        </Route>
        <Route exact path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
