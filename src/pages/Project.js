import {React, useRef, useEffect} from "react";
import { useParams, Link } from "react-router-dom";
import data from "./data";
import anime from 'animejs'
function Project() {

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

    
    var buttonEl = document.querySelectorAll("li, img");

    async function animateButton(el, scale, duration, elasticity) {
      anime.remove(el);
      animationRef.current = anime({
        targets: el,
        scale: scale,
        duration: duration,
        elasticity: elasticity,
      });
    }

    async function enterButton(el) {
      animateButton(el, 1.1, 800, 400);
    }

    async function leaveButton(el) {
      animateButton(el, 1.0, 600, 300);
    }

    for (var i = 0; i < buttonEl.length; i++) {
      buttonEl[i].addEventListener(
        "mouseenter",
        async function (e) {
          enterButton(e.target);
        },
        false
      );

      buttonEl[i].addEventListener(
        "mouseleave",
        async function (e) {
          leaveButton(e.target);
        },
        false
      );
    }
  }, [])




  const { id } = useParams();
  let projects = data.projects;
  let selected = null;
  let type, pid, title, text, subtitle, yt, image = "";
  projects.map((project) => {
    if(project.pid == id){
      selected = project;
      type = project.type;
      pid = project.pid;
      title = project.title;
      text = project.text;
      subtitle = project.subtitle;
      yt = project.yt;
      image = project.image;
      console.log(image)
    }
    });
    if(type == "vid-art"){
      console.log("vid-art")
      return(
        <>
          <div class="body1">
              <h2 class="thick-header">{title}</h2>
              <div class="row">
                  <div class="one-half">
                      {text}
                  </div>
                  <div class="one-half">
                      <iframe width="560" height="315" src={yt} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
              </div>
          </div>
        </>
      )
      } else {
        console.log("img art")
        return (
          <>
            <div class="body1">
                <h2 class="thick-header">{title}</h2>
                <div class="row">
                    <div class="one-half">
                        <img src={image}></img>
                        <p>{subtitle}</p>
                    </div>
                    <div class="one-half">
                        {text}
                    </div>
                </div>
                
            </div>
          </>
        )
      }
      console.log(type, pid, title, text, subtitle, yt, image)
  if(selected == null){
    return(
      <>
        <h1>Sorry, no project avaliable</h1>
      </>
    )
  }
}

export default Project;
