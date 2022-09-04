import { React, useRef, useEffect } from "react";
import anime from "animejs";

import fP from "../media/fingerprint.png";
import dn from "../media/donate.png";
import jn from "../media/join.png";
import ic from "../media/whitecirclelot.png";

import ReactDOM from "react-dom";

import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function Home() {
  const animationRef = useRef(null);
  useEffect(() => {
    let tl = anime.timeline({
      easing: "easeOutExpo",
      duration: 1000,
    });

    tl.add({
      targets: "li",
      translateY: -10,
      delay: anime.stagger(50, { start: 500 }),
      direction: "alternate",
    });

    animationRef.current = tl;

    let animation = anime({
      targets: ".lot",
      opacity: 0.8,
      direction: "alternate",
      loop: true,
      easing: "easeInOutSine",
    });

    animationRef.current = animation.play();

    var buttonEl = document.querySelectorAll("li, img, a");

    function animateButton(el, scale, duration, elasticity) {
      anime.remove(el);
      animationRef.current = anime({
        targets: el,
        scale: scale,
        duration: duration,
        elasticity: elasticity,
      });
    }

    function enterButton(el) {
      animateButton(el, 1.05, 800, 400);
    }

    function leaveButton(el) {
      animateButton(el, 1.0, 600, 300);
    }

    for (var i = 0; i < buttonEl.length; i++) {
      buttonEl[i].addEventListener(
        "mouseenter",
        function (e) {
          enterButton(e.target);
        },
        false
      );

      buttonEl[i].addEventListener(
        "mouseleave",
        function (e) {
          leaveButton(e.target);
        },
        false
      );
    }
  }, []);

  let createHoverListener = () => {
    let galleryButton = document.querySelector("li");
    let white_background = document.querySelector(".white-background");
    galleryButton.addEventListener("mouseenter", () => {
      console.log("enter");
      white_background.style.zIndex = -1;
    });

    galleryButton.addEventListener("mouseleave", () => {
      console.log("exit");
      white_background.style.zIndex = 11;
    });
  };

  setTimeout(() => {
    createHoverListener();
  }, 1000);

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <div className="background1 parallax"></div>
      <div className="body1 white-background slightly-transparent">
        <h2 className="thick-header black-font">Who are we?</h2>
        <p className="black-font big-p">
        We’re a student-run 501(c)(3) non-profit organization dedicated to level the educational playing field, raising money and awareness to benefit the greater OC community.</p>
        <Link to="about" className="red-background white-font about">
          About Us
        </Link>
      </div>

      <div className="body1 white-background">
        <h2 className="thick-header black-font">What makes us different?</h2>
        <div className="text-container">
            <p className="black-font small-p">
            There are countless nonprofit organizations committed to similar missions as us, which may lead you to ask: what makes LOT different?
            <br></br><br></br>
            Well, let’s just say...a LOT.
            </p>
          </div>
        <div className="row">
          <div className="image-container">
            <img className="fingerprint" src={fP}></img>
          </div>

          <div className="text-container">
            <p className="black-font small-p">
            Our organization primarily runs through the creation and execution of several ongoing and one-time projects. Our criteria for such projects to exist require only the following: a deep passion and talent from our members and an appeal to our youth community. A perfect example of this intersection is our podcast, the Mental LOTLine, whose hosts and showrunners are dedicated to the betterment of mental health in our society. 
              <br></br><br></br>           
              But you might be wondering: who runs these projects?
              <br></br><br></br> 
              Well, it’s our members. As long as each member is interested, dedicated, and has ideas, we are ALWAYS listening for new initiatives. We know that each of our members has talents, abilities, and interests that are often hidden away from the rest of the world, but we give a spotlight for them to not only display their talents, but make the world better in the process.


            </p>
          </div>
        </div>
      </div>
      <div className="background2 parallax"></div>
      <div className="body3 white-background">
        <h2 className="thick-header black-font">We can use your help!</h2>
        <div className="row">
          <div className="one-half">
            <Link to="/donate">
              <img src={dn} alt="donate!"></img>
            </Link>
            <h2 className="thin-header"><b>Donate</b></h2>
            <p className="medium-p">
              Support our organization by donating to us! Your funds will go
              directly to the projects that we're running. This can range from
              tech support for people in retirement homes to teaching youth
              coding skills.
            </p>
          </div>
          <div className="one-half">
            <a rel="noreferrer"  href="https://bit.ly/2XWXX58" target="_blank">
              <img src={jn} alt="join us!"></img>
            </a>
            <h2 className="thin-header"><b>Join</b></h2>
            <p className="medium-p">
              If you’re interested in supporting our cause, consider joining us!
              We welcome anyone that believes they can make a positive impact.
              Open the form in a new tab by clicking here!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
