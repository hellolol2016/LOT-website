import podcastIcon from "../media/projects/podcast_icon.png";
import lottechIcon from "../media/projects/lottech_icon.png";
import esportsIcon from "../media/projects/lotesportlogo.png";
import schoologyIcon from "../media/projects/scoo_logo_black.png"

import emailIcon from "../media/socials/email.png"
import igIcon from "../media/socials/insta.png"
import ytIcon from "../media/socials/youtube.png";
import tIcon from "../media/socials/twitch.png";
import twIcon from "../media/socials/twitter.png";

// eslint-disable-next-line import/no-anonymous-default-export
const gallery = [
  {
    page: "gallery",
    ongoing: [
      {
        name: "The Mental LOTLine",
        id: "lotline",
        img: podcastIcon,
      },
      {
        name: "LOT Tech",
        id: "lottech",
        img: lottechIcon,
      },
    ],
    quotes: [
      {
        word: "Exceptional",
        name: "Dillon (dillonp) P.",
      },
      {
        word: "Funsies",
        name: "Andres (Ravdrew) G.",
      },
    ],
    completed: [
      {
        name: "Esports Tournament",
        id: "esports",
        img: esportsIcon,
      },
      {
        name: "Project Schoology",
        id: "schoology",
        img: schoologyIcon,
      },
    ],
  }
];

const home = [
  {
    page: "home",
    header: "Who are we?",
    text: "We're a student run non-profit foundation dedicated to inspiring others to use their talents for a positive change within the Orange County community.",
    url: "/about",
  }
]

const socials = [
    {
    page: "footer",
    links: [
      {
        name: "email",
        icon: emailIcon,
        url: "https://mail.google.com/mail/?view=cm&fs=1&to=LaughOutTogether@gmail.com",
      },
      {
        name: "instagram",
        icon: igIcon,
        url: "https://www.instagram.com/LOT_Foundation/",
      },
      {
        name: "youtube",
        icon: ytIcon,
        url: "https://tinyurl.com/LOTyoutube",
      },
      {
        name: "twitch",
        icon: tIcon,
        url: "https://www.twitch.tv/lot_foundation",
      },
      {
        name: "twitter",
        icon: twIcon,
        url: "https://twitter.com/LOT_Foundation/",
      },
    ],
  }
]

const exp = { socials, home, gallery }
export default exp