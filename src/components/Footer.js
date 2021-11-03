import React from "react";
import data from "../pages/data"
function Footer() {
    let socials = data.socials[0].links;
    console.log(socials);
    return (
      <section>
            {socials.map((social) => {
                return (
                    <a href={social.url}><img className="social-icon" src={social.icon} alt={social.name}/></a>
                )
        })}
      </section>
    );
}

export default Footer;
