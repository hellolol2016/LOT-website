import {React, useRef, useEffect} from "react";
import { useParams, Link } from "react-router-dom";
import data from "./data";
import anime from 'animejs'
import { Helmet } from "react-helmet";
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
//when done completely remove ifs
    switch(pid) {
      case "schoology":
        console.log(type)
        return (
          <>
          <Helmet>
            <title>{title}</title>
          </Helmet>
          <div class="body1">
              <h2 class="thick-header">{title}</h2>
              <div class="row">
                <div class="one-half">
                  <img src={image} ></img>
                  <p>{subtitle}</p>
                </div>
                <div class="one-half">{text}</div>
              </div>
            </div>
      
            <h3 class="thick-header">{"Videos"}</h3>
            <div class="row">
              <div class="one-half"><p>Project Schoology was our <b class="red-font">12-week</b> fundraising initiative to raise money in order to buy school supplies to donate to a local shelter called the <b class="red-font">Orangewood Children and Family Center (OCFC)</b>. Our mission was to alleviate the stress that the Back-to-school season may have on kids who cannot afford school supplies and who have less access to opportunities and resources to do well academically. Our project accomplished this mission by providing school supplies directly to a local children's shelter, which we believe had a huge impact on the children at the shelter by relieving them of the stress and worries of not being able to afford school supplies, which perhaps allowed them to focus more of their time on something else during the summer like developing their interests or spending time with friends.</p></div>
              <div class="one-half">
                <iframe
                  width="560"
                  height="315"
                  src={"https://youtube.com/embed/dB3R70TMog8"}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              
            </div>
          </div>
            <div class="row">
              <div class="one-half"><p><b class="red-font">Over 20 members of LOT</b> volunteered to set up stations at various parks in Irvine and Tustin, engaging in face-to-face conversations with members of the community to encourage them to contribute to our initiative by donating to our project or simply spending time to learn more about the needs of underprivileged students and our project’s mission. Our initiative was split into different task forces, each with a distinct role. Task forces included the Letter task force, Stations task force, Merch task force, and Gala/Outreach task force. The Letter task force drafted letters to the <b class="red-font">Orangewood Shelter</b> and to the community to spread the news or update the community on progress made throughout our project. The Stations task force was comprised of volunteers that set up the stations for park visits. The Merch task force helped create LOT merch, including LOT T-shirts, for volunteers to wear at volunteering events. The Gala and Outreach task force dealt with planning an end-of-project gala to recap our accomplishments and reaching out to different businesses and organizations, including local restaurants, about potential partnerships.</p></div>
              <div class="one-half">
                <iframe
                  width="560"
                  height="315"
                  src={"https://youtube.com/embed/S93KIGZxwW0"}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </>
        );
      // case "lotline":
      //   console.log("vid-art")
      //     return (
      //       <>
      //         <Helmet>
      //           <title>{title}</title>
      //         </Helmet>
      //           <h2 class="thick-header">{title}</h2>
      //           <h3 class="body1">{"THIS PODCAST IS NOT INTENDED TO BE A SUBSTITUTE FOR MEDICAL TREATMENT OR THERAPY. ALWAYS SEEK THE ADVICE OF YOUR HEALTH CARE PROVIDER WITH ANY QUESTIONS YOU MAY HAVE REGARDING ANY HEALTH CONDITIONS"}</h3>
      //           {/* //EPISODE 7 */}
      //           <h2>Episode 7</h2>
      //         <div class="body1">
      //           <div class="row">
      //             <div class="one-half">{"Have you ever felt guilty horking down junk food? Are you envious of models with perfect bodies you see on the covers of magazines? Does watching the numbers on a scale go up fill you with dread? We’ve all been there. If you've wondered to yourself: how does something as fundamental as food impact our mental health? Well lucky for you, food & diet is the subject of the seventh episode of The Mental LOTLine! Joining us this episode, we have Dr. Rachel O’Desky, a Certified Eating Disorders Specialist, doctor in psychology, owner of her own therapeutic service (link found below), and helper to hundreds all across America! In the midst of the holiday season, please remember that not everyone can comfortably eat as comfortably as many of us do; these people out there that just need someone to reassure them of their body image, so be that person by sharing our podcast with them! "}</div>
      //             <div class="one-half">
      //               <iframe
      //                 width="560"
      //                 height="315"
      //                 src={"https://www.youtube.com/embed/CH6HUTVc_uw"}
      //                 title="YouTube video player"
      //                 frameborder="0"
      //                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      //                 allowfullscreen
      //               ></iframe>
      //             </div>
      //           </div>
      //           {/* //EPISODE 6 */}
      //           <h2>Episode 6</h2>
      //           <div class="row">
      //             <div class="one-half">{"You see fellow students that suck on “pens” at school. Your friend offers you a joint because it's 'cool'. It's 10 PM and you hear the infamous line, “Let’s just play 1 more game”, and suddenly, it’s 2 AM in the morning. What do these situations have in common? As different as they may be, they all show the effects of addiction. We’ve all been told from a young age that drug addictions are bad for our bodies, but in reality there are many types of addictions as well as a plethora of mental effects that often are completely ignored. To shed some light on this, the sixth episode of the Mental LOTLine, covers everything mental about addictions! Joining us this episode, we have Mr. Ross Phillips, a Licensed Marriage and Family Therapist, medical assistant, Addictions Treatment Counselor, and Master of Clinical Psychology who has even built his own therapeutic service! Insert a sentence here about something regarding the idea around the topic of this episode. "}</div>
      //             <div class="one-half">
      //               <iframe
      //                 width="560"
      //                 height="315"
      //                 src={"https://youtube.com/embed/7fi7gklXuoM"}
      //                 title="YouTube video player"
      //                 frameborder="0"
      //                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      //                 allowfullscreen
      //               ></iframe>
      //             </div>
      //           </div>

      //           {/* //EPISODE 5 */}
      //           <h2>Episode 5</h2>
      //           <div class="row">
      //             <div class="one-half">{"Constantly feel the need to nap during the day? No matter what you try, you just can’t keep your eyes open in history class? Always grumpy, and never in a good mood? It’s simple, you need more sleep! And lucky for you, sleep is what we will be discussing all about in this fifth episode of the Mental LOTLine. Joining us this episode, we have Ms. Emily Mayot, who is a Licensed Clinical Social Worker, and has even built her own therapeutic service! Research shows that teenagers should be getting around 8-10 hours of sleep EVERY night, but here at LOT Foundation, we know the realistic numbers are far less than that. However, from getting less grumpy to even retaining more information in your classes, an efficient amount of sleep can help you in all aspects of your daily life! "}</div>
      //             <div class="one-half">
      //               <iframe
      //                 width="560"
      //                 height="315"
      //                 src={"https://youtube.com/embed/-DHW5b0UaQ0"}
      //                 title="YouTube video player"
      //                 frameborder="0"
      //                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      //                 allowfullscreen
      //               ></iframe>
      //             </div>
      //           </div>
              
      //           {/* EPISODE 4 */}
      //           <h2>Episode 4</h2>
      //           <div class="row">
      //             <div class="one-half">{"Is the glass half full or half empty? Avoiding one problem, and six more just pop around the corner? How are your friends so much better than you in everything? Positive and Growth Mindset may just help with that, as it is what we are discussing all about in this fourth episode of the Mental LOTLine. Joining us this episode, we have Dr. Elizabeth A. Willems, who has her own Intercultural Psychological Services, putting her doctorate degree in Psychology to good work, helping people around the globe. We know that schools may have drilled the thoughts of “positive & growth mindset” into a boring and annoying topic, but when truly understood, this mindset can help you in all walks of life!  "}</div>
      //             <div class="one-half">
      //               <iframe
      //                 width="560"
      //                 height="315"
      //                 src={yt}
      //                 title="YouTube video player"
      //                 frameborder="0"
      //                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      //                 allowfullscreen
      //               ></iframe>
      //             </div>
      //           </div>
      //         {/* //EPISODE 3 */}
      //         <h2>Episode 3</h2>
      //           <div class="row">
      //             <div class="one-half">{"Constantly cracking under the pressure in important sporting events? Frustrated with yourself, but all your coach does is yell at you? Having trouble juggling both sports and the rest of your life? As many of us at the LOT Foundation are athletes, we are all familiar with the gladiator mindset that often prevents us from seeking help. In this third episode of the Mental LOTLine, we are discussing all about sports! Joining us this episode, we have Dr. Brandon Smith, who is not only a Sport Psychology Consultant putting his PhD in Sports and Performance Psychology to work, but also a Fitness & Athletic trainer that works to provide the best athletic service in Orange County. "}</div>
      //             <div class="one-half">
      //               <iframe
      //                 width="560"
      //                 height="315"
      //                 src={"https://youtube.com/embed/_g3VkLNwYT4"}
      //                 title="YouTube video player"
      //                 frameborder="0"
      //                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      //                 allowfullscreen
      //               ></iframe>
      //             </div>
      //           </div>
              
              
      //         {/* //EPISODE 2 */}
      //         <h2>Episode 2</h2>
      //           <div class="row">
      //             <div class="one-half">{"So, your friend can get straight A’s but you can’t? They can play three instruments, why can’t you? We all know the tough, and degrading feeling of being compared to others in society, and constantly listening to how far better they are than us. We feel like we are going to be left behind in this rat race that we are all partaking in. Well, in this second episode of the Mental LOTLine, we are directly addressing those questions for you, and discussing the importance of having self-compassion as well. Joining us for this episode, we have Karla Sanchez, a licensed clinical social worker from Sacramento. "}</div>
      //             <div class="one-half">
      //               <iframe
      //                 width="560"
      //                 height="315"
      //                 src={"https://youtube.com/embed/SOrMjY-OWGU"}
      //                 title="YouTube video player"
      //                 frameborder="0"
      //                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      //                 allowfullscreen
      //               ></iframe>
      //             </div>
      //           </div>
      //         {/* //EPISODE 1 */}
              
      //         <h2>Episode 1</h2>
      //           <div class="row">
      //             <div class="one-half">{"Stressed out from a project deadline? Perhaps from an exam coming up? Well, it might be time for you to take a break and listen to that little guy inside your head. Here at LOT Foundation, we are all high schoolers and we all know the suffocating feeling of stress and anxiety in our everyday lives. So in the premiere episode of our mental health podcast, the Mental LOTLine, we will be talking all about stress and anxiety. Joining us for this episode, we have Kayla Walkemeyer, a rehabilitation specialist from the Mental Health Association of Orange County. "}</div>
      //             <div class="one-half">
      //               <iframe
      //                 width="560"
      //                 height="315"
      //                 src={"https://youtube.com/embed/Z1YabhwccfA"}
      //                 title="YouTube video player"
      //                 frameborder="0"
      //                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      //                 allowfullscreen
      //               ></iframe>
      //             </div>
      //           </div>
             
      //         {/* //EPISODE 0 */}
      //         <h2>Episode 0</h2>
      //           <div class="row">
      //             <div class="one-half">{"It's the beginning of our exciting adventure together! In our premiere episode of the Mental LOTLine, we will be taking a look at the basics and goals of our project, as well as giving you a brief introduction to our wonderful anchors: Tracy, Akshita, and Sydney!! "}</div>
      //             <div class="one-half">
      //               <iframe
      //                 width="560"
      //                 height="315"
      //                 src={"https://youtube.com/embed/8UtEdsLNexg"}
      //                 title="YouTube video player"
      //                 frameborder="0"
      //                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      //                 allowfullscreen
      //               ></iframe>
      //             </div>
      //           </div>
      //          </div>
      //       </>
      //     );
        // case "blog":
        //   return (
        //     <>
        //     <Helmet>
        //       <title>{title}</title>
        //     </Helmet>
        //     <div class="body1">
        //         <h2 class="thick-header">{title}</h2>
        //         <div class="row">
        //           <div class="one-half">
        //             <img src={image} ></img>
        //             <p>{subtitle}</p>
        //           </div>
        //           <div class="one-half">{text}</div>
        //         </div>
        //       </div>
        
        //       <h3 class="thick-header">{"Videos"}</h3>
        //       <div class="row">
        //         <div class="one-half"><p>Project Schoology was our <b class="red-font">12-week</b> fundraising initiative to raise money in order to buy school supplies to donate to a local shelter called the <b class="red-font">Orangewood Children and Family Center (OCFC)</b>. Our mission was to alleviate the stress that the Back-to-school season may have on kids who cannot afford school supplies and who have less access to opportunities and resources to do well academically. Our project accomplished this mission by providing school supplies directly to a local children's shelter, which we believe had a huge impact on the children at the shelter by relieving them of the stress and worries of not being able to afford school supplies, which perhaps allowed them to focus more of their time on something else during the summer like developing their interests or spending time with friends.</p></div>
        //         <div class="one-half">
        //           <iframe
        //             width="560"
        //             height="315"
        //             src={"https://youtube.com/embed/dB3R70TMog8"}
        //             title="YouTube video player"
        //             frameborder="0"
        //             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        //             allowfullscreen
        //           ></iframe>
                
        //       </div>
        //     </div>
        //       <div class="row">
        //         <div class="one-half"><p><b class="red-font">Over 20 members of LOT</b> volunteered to set up stations at various parks in Irvine and Tustin, engaging in face-to-face conversations with members of the community to encourage them to contribute to our initiative by donating to our project or simply spending time to learn more about the needs of underprivileged students and our project’s mission. Our initiative was split into different task forces, each with a distinct role. Task forces included the Letter task force, Stations task force, Merch task force, and Gala/Outreach task force. The Letter task force drafted letters to the <b class="red-font">Orangewood Shelter</b> and to the community to spread the news or update the community on progress made throughout our project. The Stations task force was comprised of volunteers that set up the stations for park visits. The Merch task force helped create LOT merch, including LOT T-shirts, for volunteers to wear at volunteering events. The Gala and Outreach task force dealt with planning an end-of-project gala to recap our accomplishments and reaching out to different businesses and organizations, including local restaurants, about potential partnerships.</p></div>
        //         <div class="one-half">
        //           <iframe
        //             width="560"
        //             height="315"
        //             src={"https://youtube.com/embed/S93KIGZxwW0"}
        //             title="YouTube video player"
        //             frameborder="0"
        //             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        //             allowfullscreen
        //           ></iframe>
        //         </div>
        //       </div>
        //     </>
        //   );
          
    }
    if(type == "vid-art"){
      console.log("vid-art")
      return (
        <>
          <Helmet>
            <title>{title}</title>
          </Helmet>
          <div class="body1">
            <h2 class="thick-header">{title}</h2>
            <div class="row">
              <div class="one-half">{text}</div>
              <div class="one-half">
                <iframe
                  width="560"
                  height="315"
                  src={yt}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </>
      );
      } 
      // As we extend our project line we probably can't remain on the 1 img / 1 vid program eventually we will probably have to create seperate/unique pages
      if(type == "misc"){
        if(pid == "schoology"){
        console.log(type)
        return (
          <>
          <Helmet>
            <title>{title}</title>
          </Helmet>
          <div class="body1">
              <h2 class="thick-header">{title}</h2>
              <div class="row">
                <div class="one-half">
                  <img src={image} ></img>
                  <p>{subtitle}</p>
                </div>
                <div class="one-half">{text}</div>
              </div>
            </div>
      
            <h3 class="thick-header">{"Videos"}</h3>
            <div class="row">
              <div class="one-half"><p>Project Schoology was our <b class="red-font">12-week</b> fundraising initiative to raise money in order to buy school supplies to donate to a local shelter called the <b class="red-font">Orangewood Children and Family Center (OCFC)</b>. Our mission was to alleviate the stress that the Back-to-school season may have on kids who cannot afford school supplies and who have less access to opportunities and resources to do well academically. Our project accomplished this mission by providing school supplies directly to a local children's shelter, which we believe had a huge impact on the children at the shelter by relieving them of the stress and worries of not being able to afford school supplies, which perhaps allowed them to focus more of their time on something else during the summer like developing their interests or spending time with friends.</p></div>
              <div class="one-half">
                <iframe
                  width="560"
                  height="315"
                  src={"https://youtube.com/embed/dB3R70TMog8"}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              
            </div>
          </div>
            <div class="row">
              <div class="one-half"><p><b class="red-font">Over 20 members of LOT</b> volunteered to set up stations at various parks in Irvine and Tustin, engaging in face-to-face conversations with members of the community to encourage them to contribute to our initiative by donating to our project or simply spending time to learn more about the needs of underprivileged students and our project’s mission. Our initiative was split into different task forces, each with a distinct role. Task forces included the Letter task force, Stations task force, Merch task force, and Gala/Outreach task force. The Letter task force drafted letters to the <b class="red-font">Orangewood Shelter</b> and to the community to spread the news or update the community on progress made throughout our project. The Stations task force was comprised of volunteers that set up the stations for park visits. The Merch task force helped create LOT merch, including LOT T-shirts, for volunteers to wear at volunteering events. The Gala and Outreach task force dealt with planning an end-of-project gala to recap our accomplishments and reaching out to different businesses and organizations, including local restaurants, about potential partnerships.</p></div>
              <div class="one-half">
                <iframe
                  width="560"
                  height="315"
                  src={"https://youtube.com/embed/S93KIGZxwW0"}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </>
        );
      }
        else if(pid == "blog"){
          console.log("vid-art")
          return (
            <>
              <Helmet>
                <title>{title}</title>
              </Helmet>
              <div class="body3" style={{fontSize: "18px", lineHeight: "1.5"}}>
                <h1>The LOT Blog</h1>
                <h3>Your One-Stop Guide to All Terms Relating to College Applications</h3>
                <p>As a high school junior, it can be daunting to grapple with the fact that you’re already applying to college. It only seems more daunting when colleges throw around terms as if they already expect you to know how to apply. Here at LOT, we understand the struggle on a personal level. The writer writing this article (hey that’s me!) didn’t know what some terms meant until after he finished all of his college applications. Without further ado, here’s some of the most common terms you’ll here!</p>
                <h3>Early Decision / Early Action / Regular Decision</h3>
                <p>These three are some of the most common terms thrown around, and for good reason. Early Decision (often shortened as ED), Early Action (EA), and Regular Decision (RD) essentially refer to at what <b>time</b> in the application season that you apply to a college.</p>
                <br></br>
                <p>ED and EA are, as their names suggests, earlier than RD. Typically these applications are submitted around early to mid-November.</p>
                <br></br>
                <p>For ED, results usually come out around mid-December, and is <b>binding</b>, meaning if you were accepted through ED, you <b>have to</b> attend that school. <b>NEVER apply to more than one school ED because if you get accepted to both, they will both find out and you won’t be allowed to go to either.</b></p>
                <br></br>
                <p>For EA, results can come out anywhere from mid-December to mid January, but you’re not obligated to attend that school and you can still also apply for RD.</p>             
                
                <p>RD applications can be due anywhere from the first week of January to early February (but it’s usually sometime in January) and results come out at the end of March to early April.</p>             
                
                <p>Some of the pros of applying early include the following:</p>
                <ul>
                  <li>{'\u2022'} Colleges won’t have to look at your first semester senior grades, which depending on your previous years’ grades, can be a good or bad thing.</li>
                  <li>{'\u2022'} If you’re accepted through ED (or honestly, even EA), you’re set.</li>
                  <li>{'\u2022'} Some schools’ early acceptance rates are early higher than their regular decisions.</li>
                </ul>
                <br></br>
                <p>Some of the pros of applying regular include the following:</p>
                <ul>
                  <li>{'\u2022'} Greater time to flesh out your application (about a month and a half).</li>
                  <li>{'\u2022'} You get opportunities like interviews, more essays, and you can compare financial aid offers from different schools before you make a decision (this includes EA too).</li>
                </ul>      
                <br></br>
                <p>Whichever option you choose, <b>make a schedule and start as early as possible.</b> I cannot stress how important this is. You will save yourself a lot of pain and suffering if you just start writing essays the summer before your senior year.</p>  
                <h3>Rolling Admissions / EA I / EA II</h3>
                <p>These terms kind of all go together. Every school has a different application cycle: some might do ED → EA → RD, others might do EA → RD, and some might do ED → RD (these are just some possibilities).</p>
                <br></br>
                <p>However, some schools have what are called “rolling admissions”, which means that there isn’t exactly a specified time where applications are due (obviously, except for the very end of the application cycle), and instead they look at applications as they are submitted.</p>
                <p>Additionally, schools may have an EA I and EA II, which are essentially the same thing as a normal EA, except they happen at two different points in time and if you aren’t deferred (the next point talks about deferrals), you can apply again.</p>
                <h3>Accepted / Rejected / Deferred</h3>
                <p>You know what an acceptance is (you can go to that school! yay!). A rejection has some ambiguity to it that you might not expect so read closely: if you applied EA and receive a rejection, then you can’t apply to that school again in the next cycle, they won’t ever review your application again, and you have no chance of going to that school. Yikes. If you applied EA and receive a “deferral”, then it means that the school didn’t accept you, but also didn’t reject you, so you’re free to apply again in the next round of admissions.</p>              
                <br></br>
                <h3>Single-Choice</h3>
                <p>Essentially, if you apply to a school through ED, it is “single-choice”, since you cannot apply to anywhere else. I’ve only ever seen this for once school, but it is possible that some schools will call its EA “single-choice”, which makes no sense since you aren’t obligated to go to a school through EA. Ultimately, you can still apply to multiple EA even if that school calls its EA “single-choice”.</p>
              </div>
            </>
          );

        }
 
        
        else if(pid == "lotline"){
          console.log("vid-art")
          return (
            <>
              <Helmet>
                <title>{title}</title>
              </Helmet>
                <h2 class="thick-header">{title}</h2>
                <h3 class="body1">{"THIS PODCAST IS NOT INTENDED TO BE A SUBSTITUTE FOR MEDICAL TREATMENT OR THERAPY. ALWAYS SEEK THE ADVICE OF YOUR HEALTH CARE PROVIDER WITH ANY QUESTIONS YOU MAY HAVE REGARDING ANY HEALTH CONDITIONS"}</h3>
                {/* //EPISODE 7 */}
                <h2>Episode 7</h2>
              <div class="body1">
                <div class="row">
                  <div class="one-half">{"Have you ever felt guilty horking down junk food? Are you envious of models with perfect bodies you see on the covers of magazines? Does watching the numbers on a scale go up fill you with dread? We’ve all been there. If you've wondered to yourself: how does something as fundamental as food impact our mental health? Well lucky for you, food & diet is the subject of the seventh episode of The Mental LOTLine! Joining us this episode, we have Dr. Rachel O’Desky, a Certified Eating Disorders Specialist, doctor in psychology, owner of her own therapeutic service (link found below), and helper to hundreds all across America! In the midst of the holiday season, please remember that not everyone can comfortably eat as comfortably as many of us do; these people out there that just need someone to reassure them of their body image, so be that person by sharing our podcast with them! "}</div>
                  <div class="one-half">
                    <iframe
                      width="560"
                      height="315"
                      src={"https://www.youtube.com/embed/CH6HUTVc_uw"}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
                {/* //EPISODE 6 */}
                <h2>Episode 6</h2>
                <div class="row">
                  <div class="one-half">{"You see fellow students that suck on “pens” at school. Your friend offers you a joint because it's 'cool'. It's 10 PM and you hear the infamous line, “Let’s just play 1 more game”, and suddenly, it’s 2 AM in the morning. What do these situations have in common? As different as they may be, they all show the effects of addiction. We’ve all been told from a young age that drug addictions are bad for our bodies, but in reality there are many types of addictions as well as a plethora of mental effects that often are completely ignored. To shed some light on this, the sixth episode of the Mental LOTLine, covers everything mental about addictions! Joining us this episode, we have Mr. Ross Phillips, a Licensed Marriage and Family Therapist, medical assistant, Addictions Treatment Counselor, and Master of Clinical Psychology who has even built his own therapeutic service! Insert a sentence here about something regarding the idea around the topic of this episode. "}</div>
                  <div class="one-half">
                    <iframe
                      width="560"
                      height="315"
                      src={"https://youtube.com/embed/7fi7gklXuoM"}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>

                {/* //EPISODE 5 */}
                <h2>Episode 5</h2>
                <div class="row">
                  <div class="one-half">{"Constantly feel the need to nap during the day? No matter what you try, you just can’t keep your eyes open in history class? Always grumpy, and never in a good mood? It’s simple, you need more sleep! And lucky for you, sleep is what we will be discussing all about in this fifth episode of the Mental LOTLine. Joining us this episode, we have Ms. Emily Mayot, who is a Licensed Clinical Social Worker, and has even built her own therapeutic service! Research shows that teenagers should be getting around 8-10 hours of sleep EVERY night, but here at LOT Foundation, we know the realistic numbers are far less than that. However, from getting less grumpy to even retaining more information in your classes, an efficient amount of sleep can help you in all aspects of your daily life! "}</div>
                  <div class="one-half">
                    <iframe
                      width="560"
                      height="315"
                      src={"https://youtube.com/embed/-DHW5b0UaQ0"}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              
                {/* EPISODE 4 */}
                <h2>Episode 4</h2>
                <div class="row">
                  <div class="one-half">{"Is the glass half full or half empty? Avoiding one problem, and six more just pop around the corner? How are your friends so much better than you in everything? Positive and Growth Mindset may just help with that, as it is what we are discussing all about in this fourth episode of the Mental LOTLine. Joining us this episode, we have Dr. Elizabeth A. Willems, who has her own Intercultural Psychological Services, putting her doctorate degree in Psychology to good work, helping people around the globe. We know that schools may have drilled the thoughts of “positive & growth mindset” into a boring and annoying topic, but when truly understood, this mindset can help you in all walks of life!  "}</div>
                  <div class="one-half">
                    <iframe
                      width="560"
                      height="315"
                      src={yt}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              {/* //EPISODE 3 */}
              <h2>Episode 3</h2>
                <div class="row">
                  <div class="one-half">{"Constantly cracking under the pressure in important sporting events? Frustrated with yourself, but all your coach does is yell at you? Having trouble juggling both sports and the rest of your life? As many of us at the LOT Foundation are athletes, we are all familiar with the gladiator mindset that often prevents us from seeking help. In this third episode of the Mental LOTLine, we are discussing all about sports! Joining us this episode, we have Dr. Brandon Smith, who is not only a Sport Psychology Consultant putting his PhD in Sports and Performance Psychology to work, but also a Fitness & Athletic trainer that works to provide the best athletic service in Orange County. "}</div>
                  <div class="one-half">
                    <iframe
                      width="560"
                      height="315"
                      src={"https://youtube.com/embed/_g3VkLNwYT4"}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              
              
              {/* //EPISODE 2 */}
              <h2>Episode 2</h2>
                <div class="row">
                  <div class="one-half">{"So, your friend can get straight A’s but you can’t? They can play three instruments, why can’t you? We all know the tough, and degrading feeling of being compared to others in society, and constantly listening to how far better they are than us. We feel like we are going to be left behind in this rat race that we are all partaking in. Well, in this second episode of the Mental LOTLine, we are directly addressing those questions for you, and discussing the importance of having self-compassion as well. Joining us for this episode, we have Karla Sanchez, a licensed clinical social worker from Sacramento. "}</div>
                  <div class="one-half">
                    <iframe
                      width="560"
                      height="315"
                      src={"https://youtube.com/embed/SOrMjY-OWGU"}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              {/* //EPISODE 1 */}
              
              <h2>Episode 1</h2>
                <div class="row">
                  <div class="one-half">{"Stressed out from a project deadline? Perhaps from an exam coming up? Well, it might be time for you to take a break and listen to that little guy inside your head. Here at LOT Foundation, we are all high schoolers and we all know the suffocating feeling of stress and anxiety in our everyday lives. So in the premiere episode of our mental health podcast, the Mental LOTLine, we will be talking all about stress and anxiety. Joining us for this episode, we have Kayla Walkemeyer, a rehabilitation specialist from the Mental Health Association of Orange County. "}</div>
                  <div class="one-half">
                    <iframe
                      width="560"
                      height="315"
                      src={"https://youtube.com/embed/Z1YabhwccfA"}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
             
              {/* //EPISODE 0 */}
              <h2>Episode 0</h2>
                <div class="row">
                  <div class="one-half">{"It's the beginning of our exciting adventure together! In our premiere episode of the Mental LOTLine, we will be taking a look at the basics and goals of our project, as well as giving you a brief introduction to our wonderful anchors: Tracy, Akshita, and Sydney!! "}</div>
                  <div class="one-half">
                    <iframe
                      width="560"
                      height="315"
                      src={"https://youtube.com/embed/8UtEdsLNexg"}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
               </div>
            </>
          );
          }
           
        else if(pid == "lotshow"){
          console.log("vid-art")
          return (
            <>
              <Helmet>
                <title>{title}</title>
              </Helmet>
                <h2 class="thick-header">{title}</h2>
                <h3 class="body1">{"WELCOME TO THE LAUGH OUT TOGETHER SHOW! We spread awareness on mental health issues amongst teenagers. Let's be honest, we’re all tired of workin’ our butts off just to maintain that B in Math, and then dealing with the infamous 'teenage drama' outside of class. Each episode features teenagers discuss their issues with us and ALSO features a mental health professional here to help us answer all our questions. You’ll have fun, destress, and share a few laughs during your time here! "}</h3>
                <div class="body1">




               {/*EP4*/}
              <h2>Episode 4</h2>
              <div class="row">
              <div class="one-half">{"In this JULY episode in which we are definitely not 2 weeks late for, we are talking about something that many of us experience on a day-to-day basis: PARENTAL & HOMELIFE PRESSURE! We all know those (asian) parents that think it's either Harvard or Homeless, and that mindset could really add some not-needed pressure to our already stressful academic lives. Not only that, if you’re someone that has siblings, comparison between family members’ achievements can just add on to that."}</div>
                  <div class="one-half">
                    <iframe
                      width="560"
                      height="315"
                      src={"https://www.youtube.com/embed/MDTHrkfR9ig"}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  </div>   
              
             
              {/*EP3*/}
              <h2>Episode 3</h2>
              <div class="row">
              <div class="one-half">{"In this JUNE episode (guys don’t check the release date trust me it’s june!!), we talked ALL about a really relatable topic, PEER RELATIONSHIPS!!!!!!!!!! We’ve all had our fair share of good (and maybe bad) friendships, and we all know how those really affected our emotions and self image. Even if you are single as a pringle like our imaginary viewer Robert, this still applies to you cus I’m almost certain you have friends (and if you don’t then dm @ lot_foundation on insta we can be friends :D )"}</div>
                  <div class="one-half">
                    <iframe
                      width="560"
                      height="315"
                      src={"https://www.youtube.com/embed/N6ghD4Ey22A"}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  </div> 
             
                  
             {/*EP2*/}
             <h2>Episode 2</h2>
             <div class="row">
              <div class="one-half">{"That’s right, today we’ll be talking about GIRLS n MENTAL HEALTH!!!! Everyone goes through struggles in their life and place in society, and sometimes girls have it especially hard. And even if that doesn't apply to you, it’s always muy bien to see things from different perspectives!! So no matter who you are, this episode will be just as educational and entertaining for you!!"}</div>
                  <div class="one-half">
                    <iframe
                      width="560"
                      height="315"
                      src={"https://www.youtube.com/embed/ASZELG4UA1c"}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  </div> 
              
                      
             
             
              {/* EP1.5*/}
              <h2>Episode 1.5</h2>
              <div class="row">
              <div class="one-half">{"In part 1, we covered the effects of social media on our mental health with our amazing student guest Harper. But we’re not quite done yet! Joining us to continue guiding our conversation to a more educational standpoint, we have Licensed Clinical Social Worker Mr. Jonathan Aspuria!!! (and the crowd goes wild). Mr. Aspuria is a licensed therapist working in the SoCal area, and is definitely my favorite guest that we have had on the show (also the only guest we have had but that's ok)!!!"}</div>
                  <div class="one-half">
                    <iframe
                      width="560"
                      height="315"
                      src={"https://www.youtube.com/embed/SijPn6JVg0Q"}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  </div>
             
             
          
              {/* EP1*/}
              <h2>Episode 1</h2>
              <div class="row">
              <div class="one-half">{"So what did we talk about during this episode??” Well that’s a great question Robert the imaginary viewer!! This episode, joined along with our amazing anchors Arjun and Akshita, we’re talkin’ about SOCIAL MEDIAAAAAAA!!! Heck yeah those apps that we’re all painfully addicted to. So through talking with our guests, we’ll explore all the nooks and crannies in our minds that have been taken up by our toxic toxic relationships with these apps.  "}</div>
                  <div class="one-half">
                    <iframe
                      width="560"
                      height="315"
                      src={"https://www.youtube.com/embed/LZDnpTPONf0"}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  </div>
              
              
              
              
      
              
                {/* EP0*/}
                <h2>Episode 0</h2>
                <div class="row">
                  <div class="one-half">{"Hey you! Welcome to the zeroeth episode of the GREATEST PODCAST on Earth: The Laugh Out Together Show!! "}</div>
                  <div class="one-half">
                    <iframe
                      width="560"
                      height="315"
                      src={"https://www.youtube.com/embed/QSIMcIYKGQg"}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  </div>
    
               </div>
            </>
          );
          }
      }
          
        else {
        console.log("img art")
        return (
          <>
            <Helmet>
              <title>{title}</title>
            </Helmet>
            <div class="body1">
              <h2 class="thick-header">{title}</h2>
              <div class="row">
                <div class="one-half">
                  <img src={image}></img>
                  <p>{subtitle}</p>
                </div>
                <div class="one-half">{text}</div>
              </div>
            </div>
          </>
        );
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
// Templates: add videos, images, etc without hardcoding 
async function addVideo(link, explanation) {

  return (
    <>
      <Helmet>
        <title></title>
      </Helmet>
      <div class="body1">
        <h2 class="thick-header"></h2>
        <div class="row">
          <div class="one-half"></div>
          <div class="one-half">
            <iframe
              width="560"
              height="315"
              src={null}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );

}
async function addImage(imageSource, imageExplanation,imageTitle, imageSubtitle ) {
  return (
    <>
      <Helmet>
      </Helmet>
      <div class="body1">
        <h2 class="thick-header">{imageTitle}</h2>
        <div class="row">
          <div class="one-half">
            <img src={imageSource}></img>
            <p>{imageSubtitle}</p>
          </div>
          <div class="one-half">{imageExplanation}</div>
        </div>
      </div>
    </>
  )
}