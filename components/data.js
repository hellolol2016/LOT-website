import podcastIcon from "../public/media/projects/podcast_icon.png";
import lottechIcon from "../public/media/projects/lottech_icon.png";
import esportsIcon from "../public/media/projects/lotesportlogo.png";
import schoologyIcon from "../public/media/projects/scoo_logo_black.png"

import jc from "../public/media/team/jack-chen.jpg";
import bc from "../public/media/team/brian-cheng.jpeg";
import ac from "../public/media/team/andrew-chen.jpg";
import dw from "../public/media/team/dennis-wang.png";
import bx from "../public/media/team/brandon-xu.jpg";
import dv from "../public/media/team/darsh-verma.png";
import co from "../public/media/team/charles-ou-yang.png";

import schoologyPhoto from "../public/media/projects/orangewood.png"


import {
  AiOutlineMail,
  AiFillYoutube,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

import { ImTwitch } from "react-icons/im";

import Link  from "next/link";


// eslint-disable-next-line import/no-anonymous-default-export
const header = [
  {
    links: [
      {
        name: "gallery",
        link: <Link href="/gallery">Project Gallery</Link>,
        sublinks: [
          {
            name: "Project Schoology",
            link: <Link href="/project/schoology">Project Schoology</Link>,
          },
          {
            name: "Esports Tournament",
            link: <Link href="/project/esports">Esports Tournament</Link>,
          },
          {
            name: "Mental LOTLine",
            link: <Link href="/project/lotline">Mental LOTLine</Link>,
          },
          {
            name: "Workshop Tutorial",
            link: <Link href="/project/wkspttrl">Workshop Tutorial</Link>,
          },
        ],
      },
      {
        name: "involve",
        link: <Link href="/involve">Get Involved</Link>
      },
      {
        name: "donate",
        link: <Link href="/donate">Donate</Link>,
      },
      {
        name: "about",
        link: <Link href="/about">About Us</Link>,
      },
      {
        name: "home",
        link: <Link href="/" >Home</Link>,
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

const projects = [
  {
    type: "img-art",
    pid: "schoology",
    title: "Project Schoology",
    text: <p class="medium-p">Quite possibly our most ambitious endeavor yet, our Project Schoology was a major fundraising project for school supplies that we donated to the Orangewood Family and Children Center in Orange city.<br></br><br></br>Through constant park visits to parks around Irvine and Tustin, we were able to raise over <b class="red-font">$1,040</b> and we later bought supplies and delivered them to Orangewood! Along the way, we also had much fun with each other and were able to get out our message of community benefiting everyone around us.</p>,
    image: schoologyPhoto,
    subtitle:
      "A handful of our members on drop-off day at Orangewood, August 17th, 2021",
    yt: "#",
  },
  {
    type: "vid-art",
    pid: "esports",
    title: "Esports Tournament",
    text: <p class="medium-p">We’re not going to lie, many of us at LOT are gamers. In fact, many games hold a close place to our hearts. In order to show our love for video games, have some fun, and publicize ourselves as well, we’ve made it our objective to hold an annual LOT eSports Tournament and inviting teams from all over to compete. <br></br>We recently held our second annual tournament, and we’ve had so much fun all around playing Valorant, League of Legends, and chess! Look out for the signup for next year's!</p>,
    image: "#",
    subtitle: "",
    yt: "https://www.youtube.com/embed/sokcAmxoiTE",
  },
  {
    type: "vid-art",
    pid: "lotline",
    title: "Mental Health Podcast",
    text: <p class="medium-p">As young adults, students, teenagers, and other nouns, we here at the LOT Foundation are critically aware of the struggles and issues that people like us face on a normal basis. Join us on this ongoing effort as we interview different guests on a variety of topics relating to mental health and wellbeing!<br></br>We’ve covered how to deal with pressure in sports, how to live life with a positive mindset, dealing with stress, and much, MUCH more!</p>,
    image: "#",
    subtitle: "",
    yt: "https://www.youtube.com/embed/vxCNCmHlaSI",
  },
  {
    type: "vid-art",
    pid: "wkspttrl",
    title: "Workshop Tutorial",
    text: <p class="medium-p">Some people’s talents may not fit in with our other projects, which is why we created the Workshop Tutorial. This project allows anyone to express their talents in an educational way. We handpick people that have proved themselves to be truly passionate about their skills, to ensure the quality of the workshop tutorials.<br></br>This project will, in the future, evolve into LOT Tech, where we go to children’s centers and retirement homes to teach others the in’s and out’s of modern technology.</p>,
    image: "#",
    subtitle: "",
    yt: "https://www.youtube.com/embed/95HjV7rIrOU",
  },
];

const donations = [
  {
    sub: false,
    name: "$19.99 Donation",
    link: "https://buy.stripe.com/00g7trg7m0Rb2v6cMM",
  },
  {
    sub: false,
    name: "$39.99 Donation",
    link: "https://buy.stripe.com/cN24hf2gwarL4De001",
  },
  {
    sub: true,
    name: "$4.99 Monthly Donation",
    link: "https://buy.stripe.com/dR63db6wM57r3zabIK",
  },
  {
    sub: true,
    name: "$9.99 Monthly Donation",
    link: "https://buy.stripe.com/7sIaFD2gw8jDglWaEH",
  },
];

const exp = { socials, home, gallery, header, team, projects, donations }
export default exp