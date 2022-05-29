import { React, useEffect, useRef } from 'react'
import anime from 'animejs';
import data from './data'
import donatebtn  from "../media/donate-btn.png";
import { Link } from 'react-router-dom';
function Donate() {
  console.log(data.donations)
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
        <div class="background5 parallax"></div>
        <div class="body1 white-background donate">
          <h2 className="thick-header">Donate</h2>
          <p class="medium-p">
            Support our cause in helping other organizations, and using the
            skills of our peers to do good in the world! If you would like to
            learn more about us{" "}
            <Link to="/about" className="span-link">
              go here
            </Link>
            . Your donation will help us host higher quality projects, help us
            fundraise more money for other organizations, and help us provide{" "}
            <span>more for the community</span>.
          </p>
          <div class="donation-list">
            <form
              action="https://www.paypal.com/donate"
              method="post"
              target="_blank"
            >
              <input
                type="hidden"
                name="hosted_button_id"
                value="UMHGP4HKLHN4L"
              />
              <input
                type="image"
                src={donatebtn}
                border="0"
                name="submit"
                title="PayPal - The safer, easier way to pay online!"
                alt="Donate with PayPal button"
                className="donate-btn"
              />
              <img
                alt=""
                border="0"
                src="https://www.paypal.com/en_US/i/scr/pixel.gif"
                width="1"
                height="1"
              />
            </form>

            {/* <ul className="one-time">
              <h2 className="bold">One-time Donations</h2>
              {data.donations.map((donation) => {
                if (donation.sub == false) {
                  return (
                    <a href={donation.link} className="donate-button">
                      <div>{donation.name}</div>
                    </a>
                  );
                }
              })}
            </ul>
            <ul className="monthly">
              <h2 className="bold">Monthly Donations</h2>
              {data.donations.map((donation) => {
                if (donation.sub == true) {
                  return (
                    <a href={donation.link} className="donate-button">
                      <div>{donation.name}</div>
                    </a>
                  );
                }
              })}
            </ul> */}
          </div>
          <h3>Or</h3>
          <a
            href="https://buy.stripe.com/7sIaFD2gw8jDglWaEH"
            className="donate-button"
          >
            <div>Quick Donate (9.99/month)</div>
          </a>
        </div>
      </>
    );
}

export default Donate
