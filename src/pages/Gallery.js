import {React, useEffect, useRef} from 'react'
import data from "./data"
import dropoff from "../media/projects/dropoff.jpg"
import idek from "../media/projects/idek.JPG"
import { Link } from 'react-router-dom';

import anime from 'animejs';

import hands from "../media/teamwork.png";

function Gallery() {
    let galleryData = data.gallery[0];
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
    return (
      <>
        <div class="background6 parallax"></div>

        <div class="body1 darker-background">
          <h2 class="thick-header white-font">Upcoming Projects</h2>
          <div class="column projects">
            <div class="row">
              {/* <div class="one-fourth">
                        <a href="gallery/mentallotline.html"><img src="../media/projects/podcast_icon.png"></img></a>
                    </div>
                    <div class="one-fourth">
                        <a href="gallery/wkspttrl.html"><img src="../media/projects/workshop icon.png"></img></a>
                    </div> */}
              {galleryData.ongoing.map((project) => {
                const { name, id, img } = project;
                return (
                  <div class="one-fourth">
                    <Link to={`/project/${id}`}>
                        <img src={img} alt={name}></img>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div class="body1 darker-background">
          <h2 class="thick-header white-font">Current Projects Gallery</h2>
          <div class="column projects">
            <div class="row">
              {/* <div class="one-fourth">
                        <a href="gallery/mentallotline.html"><img src="../media/projects/podcast_icon.png"></img></a>
                    </div>
                    <div class="one-fourth">
                        <a href="gallery/wkspttrl.html"><img src="../media/projects/workshop icon.png"></img></a>
                    </div> */}
              {galleryData.ongoing.map((project) => {
                const { name, id, img } = project;
                return (
                  <div class="one-fourth">
                    <Link to={`/project/${id}`}>
                        <img src={img} alt={name}></img>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>



        <div class="background7 parallax"></div>

        <div class="body3 past-projects lighter-background">
          <h2 class="thick-header white-font">Completed Projects</h2>
          <div class="column projects">
            <div class="row">
              {/* <div class="one-fourth">
                        <a href="gallery/esports.html"><img src="../media/projects/lotesportlogo.png"></img></a>
                    </div>
                    <div class="one-fourth">
                        <a href="gallery/schoology.html"><img src="../media/projects/scoo_logo_black.png"></img></a>
                    </div> */}
              {galleryData.completed.map((project) => {
                const { name, id, img } = project;
                return (
                  <div class="one-fourth">
                    <Link to={`/project/${id}`}>
                        <img src={img} alt={name}></img>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div class="body2 darker-background full-width">
          <h2 class="thick-header white-font">Our Projects are...</h2>
          <div class="row">
            <div class="one-half">
              <img src={idek}></img>
              <p class='white-font'>Summer Fundraiser</p>
            </div>

            <div class="one-half">
              <div class="column quotes">
                <h2 class="red-font">"Exceptional"</h2>
                <p class="white-font">-Dillon (dillonp) P.</p>

                <br></br>
                <h2 class="red-font">"Funsies"</h2>
                <p class="white-font">-Andres (Ravdrew) G.</p>
              </div>
            </div>
            <div class="one-half">
              <img src={dropoff}></img>
              <p class="white-font"> Project Schoology Drop-Off Day</p>
            </div>
          </div>
        </div>
      </>
    );
}
// THIS IS MY COMMENT. THERE ARE OTHER COMMENTS LIKE IT, BUT THIS COMMENT IS MINE. MY COMMENT IS MY LIFE. WITHOUT MY COMMENT I AM USELESS. 
export default Gallery
