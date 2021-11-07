import { React, useRef, useEffect } from 'react'


import fP from "../media/fingerprint.png"
import dn from "../media/donate.png";
import jn from "../media/join.png";
import ic from "../media/whitecirclelot.png";

import ReactDOM from "react-dom";

import { Helmet } from "react-helmet"
import { Link } from 'react-router-dom';



function Home() {

    return (
      <>
        <Helmet>
          <link rel="icon" href={ic}></link>
          <title>Home</title>
        </Helmet>

        <div className="background1 parallax"></div>

        <div className="body1 white-background slightly-transparent">
          <h2 className="thick-header black-font">Who are we?</h2>
          <p className="black-font big-p">
            We're a student run non-profit foundation dedicated to inspiring
            others to use their talents for a positive change within the Orange
            County community.
            
          </p>

          <Link to="/about" className="red-background white-font about">
            About Us
          </Link>
        </div>

        <div className="body2 white-background">
          <h2 className="thick-header black-font">What makes us different?</h2>
          <div className="row">
            <div className="image-container">
              <img className="fingerprint" src={fP} alt="fingerprint"></img>
            </div>

            <div className="text-container">
              <p className="black-font small-p">
                There are a TON of nonprofits committed to a similar mission as
                us, so the inevitable question comes up: what makes us
                different?
                <br></br>
                We only approve of and execute projects that strongly appeal to
                our youth community. For example, one of our consistent projects
                is a monthly mental podcast, in which our hosts are dedicated to
                the betterment of mental health in our society.
              </p>
            </div>
          </div>
        </div>
        <div className="background2 parallax"></div>
        <div className="body3 white-background">
          <h2 className="thick-header black-font">We can use your help!</h2>
          <div className="row">
            <div className="one-half">
              <img src={dn} alt="donate here!"></img>
              <h2 className="thin-header">Donate</h2>
              <p className="medium-p">
                Support our organization by donating to us! Your funds will go
                directly to the projects that we're running. This can range from
                tech support for people in retirement homes to teaching youth
                coding skills.
              </p>
            </div>
            <div className="one-half">
              <img alt="join us!" src={jn}></img>
              <h2 className="thin-header">Join</h2>
              <p className="medium-p">
                If you’re interested in supporting our cause, consider joining
                us! We welcome anyone that believes they can make a positive
                impact. Open the form in a new tab by clicking here!
              </p>
            </div>
          </div>
        </div>
      </>
    );
}

export default Home
