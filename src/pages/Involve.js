import {React, useEffect, useRef} from 'react'
import Helmet from "react-helmet";
import anime from 'animejs';
import { BsMailbox, BsFillPersonCheckFill } from "react-icons/bs";


function Involve() {
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
          <title>Get Involved</title>
        </Helmet>
        <div className="background8 parallax"></div>
        <div className="body1 white-background slightly-transparent">
          <h2 className="thick-header black-font">Get Involved!</h2>
          <p className="black-font big-p">
            If you're currently a highschooler in Orange County and want to make
            a positive impact in your community while being rewarded with hours,
            you can apply to be a part of our organization with the Google Form
            below. (Note that we are currently giving online hours)
          </p>
          <a
            href="https://bit.ly/2XWXX58"
            target="_blank"
            className="red-background white-font about"
            rel="noreferrer"
          >
            <BsFillPersonCheckFill className="icon" fontSize="50" />
          </a>
        </div>

        <div className="body2 white-background slightly-transparent involve">
          <h2 className="thick-header black-font">Monthly Newsletter</h2>
          <p className="black-font big-p">
            We have a monthly newsletter! Want to keep up with what LOT is up
            to? Sign up for our monthly emails with the form below!
          </p>
          <a
            className="button red-background white-font"
            href="https://forms.gle/RhyKEr9kkL1mSgUGA"
            target="_blank"
            rel="noreferrer"
          >
            <BsMailbox className="icon" fontSize="50" />
          </a>
        </div>
      </>
    );
}

export default Involve
