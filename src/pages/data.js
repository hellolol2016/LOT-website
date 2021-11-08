import podcastIcon from "../media/projects/podcast_icon.png";
import lottechIcon from "../media/projects/lottech_icon.png";
import esportsIcon from "../media/projects/lotesportlogo.png";
import schoologyIcon from "../media/projects/scoo_logo_black.png"

import jc from "../media/team/jack-chen.jpg";
import bc from "../media/team/brian-cheng.jpeg";
import ac from "../media/team/andrew-chen.jpg";
import dw from "../media/team/dennis-wang.png";
import bx from "../media/team/brandon-xu.jpg";
import dv from "../media/team/darsh-verma.png";
import co from "../media/team/charles-ou-yang.png";

import {
  AiOutlineMail,
  AiFillYoutube,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

import { ImTwitch } from "react-icons/im";

import { Link } from "react-router-dom";


// eslint-disable-next-line import/no-anonymous-default-export
const header = [
  {
    links: [
      {
        name: "gallery",
        link: <Link to="/gallery">Project Gallery</Link>,
        sublinks: [
          {
            name: "Project Schoology",
            link: <Link to="/gallery/id:schoology">Project Schoology</Link>,
          },
          {
            name: "Esports Tournament",
            link: <Link to="/gallery/id:esports">Esports Tournament</Link>,
          },
          {
            name: "Mental LOTLine",
            link: <Link to="/gallery/id:lotline">Mental LOTLine</Link>,
          },
          {
            name: "Workshop Tutorial",
            link: <Link to="/gallery/id:schoology">Workshop Tutorial</Link>,
          },
        ],
      },
      {
        name: "involve",
        link: <Link to="/involve">Get Involved</Link>,
      },
      {
        name: "donate",
        link: <Link to="/donate">Donate</Link>,
      },
      {
        name: "about",
        link: <Link to="/about">About Us</Link>,
      },
      {
        name: "home",
        link: <Link to="/">Home</Link>,
      },
    ],
  },
];

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
        icon: <AiOutlineMail size={50} />,
        url: "https://mail.google.com/mail/?view=cm&fs=1&to=LaughOutTogether@gmail.com",
      },
      {
        name: "instagram",
        icon: <AiOutlineInstagram size={50} />,
        url: "https://www.instagram.com/LOT_Foundation/",
      },
      {
        name: "youtube",
        icon: <AiFillYoutube size={50} />,
        url: "https://tinyurl.com/LOTyoutube",
      },
      {
        name: "twitch",
        icon: <ImTwitch size={50} />,
        url: "https://www.twitch.tv/lot_foundation",
      },
      {
        name: "twitter",
        icon: <AiOutlineTwitter size={50} />,
        url: "https://twitter.com/LOT_Foundation/",
      },
    ],
  },
];

const team = [
  {
    name: "Jack Chen",
    role: "President",
    img: jc
  },
  {
    name: "Brian Cheng",
    role: "Vice President",
    img: bc,
  },
  {
    name: "Andrew Chen",
    role: "Chief Operating Officer",
    img: ac,
  },
  {
    name: "Dennis Wang",
    role: "Chief Financial Officer",
    img: dw,
  },
  {
    name: "Brandon Xu",
    role: "Secretary",
    img: bx
  },
  {
    name: "Darsh Verma",
    role: "Public Relations Director",
    img: dv,
  },
  {
    name: "Charles Ou-Yang",
    role: "Advisor",
    img: co,
  },
];

const exp = { socials, home, gallery, header, team }
export default exp