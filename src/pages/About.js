import { React, useEffect, useRef, useState } from "react";
import Helmet from "react-helmet";

import cn from "../media/connect.png";
import wk from "../media/how_projects_work.png";

import data from "./data";

import anime from "animejs";

import Modal from "react-modal";
Modal.setAppElement(document.getElementById('root'));

function About() {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const customStyles = {
    content: {
      top: '35%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      width: '60%',
      transform: 'translate(-40%, -10%)',
    },
  }
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

    function toggleModal() {
      setModalIsOpen(modalIsOpen)
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
            First and foremost, our mission is to provide educational resources to level the playing field. We take into account every facet of education, ranging from socioeconomic status to individual talents that every person has. Here at Laugh Out Together Foundation, we believe that every member of our community is unique in their own way, and we strive to use this one-of-a-kindness to initiate projects that suit the skills of each member.

            </p>
            <br></br> <div class="small-line"></div> <br></br>
            <p class="small-p">
            As our name suggests, we envision a world where everyone can showcase the best of themselves, and our community can truly “laugh out together”. Today, due to factors such as paywalls and the simple lack of classroom supplies often deter students from being able to take their education seriously. And unfortunately, with a society that seems to be setting a definition for what is useful and who can be useful, we rarely take the initiative to provide equal opportunities for everyone. With this stagnation, many are left behind.
<br></br><br></br>
The Laugh Out Together foundation is here to change this status quo. We believe that everyone, no matter their age or status, has a unique set of skills that education can uncover. Through unconventional volunteer projects, we hope to create a platform that showcases the unique skills and help others also achieve success through education. With the platform we create, we strive to create resources to empower individuals in combating their physical, economic, and mental challenges one step at a time.

            </p>
            
          </div>
        </div>
        <h1 class="cursive-h2" >A little from you, a LOT for the World!</h1>
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
                 
                  <img 
                  src={member.img} 
                  alt={member.name} 
                  onClick={()=> { 
                    setModalData(member); 
                    setModalIsOpen(true);
                    }
                    }></img>
                  
                  <p>{member.name}</p>
                  <span className="subtitle">{member.role}</span>
               
        
                </div>
                
                );
            })}

          </div>
          
          
            
        </div>
      </div>
      

      
      {modalIsOpen && <div className="modalBackground" style={{position:"fixed",height:"200px",width:"300px",background:"purple", display:"block"}}>
      <div className="modalInner">
      <h1>{modalData?.name}</h1>
      <p>{modalData?.role}</p> 
                  <div>
                    <button onClick={() => setModalIsOpen(false)}>X</button>
                  </div>
      </div>
    </div>}
      
    </>
    
  );
  
}

export default About;
