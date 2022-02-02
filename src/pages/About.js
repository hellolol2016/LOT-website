import { React, useEffect, useRef } from "react";
import Helmet from "react-helmet";

import cn from "../media/connect.png";
import wk from "../media/how_projects_work.png";

import data from "./data";

import anime from "animejs";

function About() {
  const animationRef = useRef(null);
  useEffect(() => {
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
      <Helmet>
        <title>About</title>
      </Helmet>
      <div class="background3 parallax"></div>
      <div class="body1 white-background">
        <div class="row">
          <div class="one-half">
            <h2 class="thick-header">The LOT Process</h2>
            <p class="small-p">
              We are a student run foundation working around OC, aiming to level
              the playing field for all members of the community. <br />
              <br />
              Through our connections to various organizations, we hope to
              provide a chance for everyone to explore their passion regardless
              of their background.
            </p>
          </div>
          <div class="one-half">
            <img class="how" src={wk} alt="how we run projects"></img>
          </div>
        </div>
      </div>

      <div class="body2 white-background">
        <h2 class="thick-header">Mission and Vision</h2>
        <div class="row">
          <div class="one-half">
            <img src={cn} alt="connecting the community"></img>
          </div>
          <div class="one-half">
            <p class="small-p">
              Our mission is to empower and inspire the community to do good by
              utilizing the skills of compassionate students. Here at Laugh Out
              Together Foundation, we believe every member of our community is
              unique in their own way, and we strive to bring out the best of
              our community.
            </p>
            <br></br> <div class="small-line"></div> <br></br>
            <p class="small-p">
              We believe that everyone, no matter their age and status, has an
              unique passion that can impact the community. Through
              unconventional volunteer projects, we hope to create a platform
              that showcases the unique skills and talents of our community.
            </p>
          </div>
        </div>
      </div>
      <div class="background4 parallax"></div>

      <div class="body3 white-background">
        <div class="column team">
          <h2 class="thick-header">Our Team</h2>
          <div class="row team">
            {/* <div class="one-fourth"><img src="../media/team/jack-chen.jpg"><p>Jack Chen<br> <span class="subtitle">President</span></p></div> */}
            {data.team.map((member) => {
              return (
                <div className="one-fourth">
                  <img src={member.img} alt={member.name}></img>
                  <p>{member.name}</p>
                  <span className="subtitle">{member.role}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
