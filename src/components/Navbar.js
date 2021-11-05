import {React, useEffect, useRef} from 'react'
import { Link } from "react-router-dom"
import WhiteLogo from "../media/white_logo.png";
import data from "../pages/data"
import anime from "animejs/lib/anime.es.js";


function Navbar() {
    const links = data.header[0].links;
  console.log(links)
  
  const animationRef = useRef(null)
  useEffect(() => {
    let tl = anime.timeline({
      easing: "easeOutExpo",
      duration: 1000
    });

    tl.add({
      targets: "li",
      translateY: -10,
      delay: anime.stagger(50, { start: 500 }),
      direction:"alternate"
    })
    
    animationRef.current = tl;

    let animation = anime({
      targets:".lot",
      opacity: 0.8,
      direction: "alternate",
      loop: true,
      easing: "easeInOutSine",
    })

    animationRef.current = animation.play();

    
    var buttonEl = document.querySelectorAll("li");

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
      animateButton(el, 1.1, 800, 400);
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
  }, [])
  
  return (
    
      <header>
        <div className="banner darker-background">
            <Link to="/">
                <img src={WhiteLogo} className="header_logo" alt="LOT"></img>
            </Link>
            <h1 className="white-font">
                A little from you, a <i className="lot">LOT</i> for the world!
            </h1>
            <nav>
                <ul>
                    {links.map((link) => {
                        if (link.name === "gallery") {
                            return (
                              <li>
                                <div className="dropdown">
                                  {link.link}
                                  <div className="dropdown-content">
                                    {link.sublinks.map((sublink) => {
                                      return sublink.link;
                                    })}
                                  </div>
                                </div>
                              </li>
                            );
                        }    
                        return (
                            <li>
                                {link.link}
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
      </header>
    );
}

export default Navbar
