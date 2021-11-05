import {React} from "react";
import data from "../pages/data"
function Footer() {

    let socials = data.socials[0].links;
    console.log(socials);
    return (
      <footer className="darker-background">
        <h2 class="white-font">
          Feel free to contact us, we'd love to hear from you!
        </h2>
        <ul>
          {socials.map((social) => {
            const { icon, url } = social;
            return (
              <li key={social.name}>
                <a className="social-link" rel="noreferrer" target="_blank" href={url}>
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
      </footer>
    );
}

export default Footer;
