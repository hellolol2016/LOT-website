import {React, useEffect, useRef} from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

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
        <meta charset="UTF-8" />
        <meta name="description" content="The LOT Foundation website"/>
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta property="og:title" content="Laugh Out Together" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://laughouttogether.org" />
        <meta property="og:image" content={lotIcon} />
        <meta property="og:description" content="The LOT Foundation website" />
        <meta name="theme-color" content="#ff6b6b" />

        <meta name="twitter:card" content="summary_large_image"/>
        <link rel="icon" href={lotIcon} type="image/x-icon" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <title>LOT Foundation</title>
      </Helmet>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}>
        </Route>
        <Route exact path="/about" element={<About/>}>
        </Route>
        <Route exact path="/donate" element={<Donate/>}>
        </Route>
        <Route exact path="/involve" element={<Involve/>}>
        </Route>
        <Route exact path="/gallery" element={<Gallery/>}>
        </Route>
        <Route exact path="/project/:id" element={<Project/>}>
        </Route>
        <Route exact path="*" element={<Error/>}>
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
