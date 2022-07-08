import podcastIcon from "../media/projects/podcast_icon.png";
import lottechIcon from "../media/projects/lottech_icon.png";
import esportsIcon from "../media/projects/lotesportlogo.png";
import schoologyIcon from "../media/projects/scoo_logo_black.png";

import jc from "../media/team/jack-chen-new.jpeg";
import bc from "../media/team/brian-cheng.jpeg";
import ac from "../media/team/andrew-chen.jpg";
import dw from "../media/team/dennis-wang.png";
import bx from "../media/team/brandon-xu.png";
import md from "../media/team/madison.png";
import dv from "../media/team/darsh-verma.png";
import co from "../media/team/charles-ou-yang.png";
import ak from "../media/team/alex_kimm.JPG";
import an from "../media/team/amanda.png";
import pr from "../media/team/preethi_rao.png";
import ml from "../media/team/matthewlin.jpg";
import schoologyPhoto from "../media/projects/orangewood.png";
import cat from "../media/team/CUTE_CAT.gif";

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
            link: <Link to="/project/schoology">Project Schoology</Link>,
          },
          {
            name: "Esports Tournament",
            link: <Link to="/project/esports">Esports Tournament</Link>,
          },
          {
            name: "Mental LOTLine",
            link: <Link to="/project/lotline">Mental LOTLine</Link>,
          },
          {
            name: "Workshop Tutorial",
            link: <Link to="/project/wkspttrl">Workshop Tutorial</Link>,
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
  },
];

const home = [
  {
    page: "home",
    header: "Who are we?",
    text: "We're a student run non-profit foundation dedicated to inspiring others to use their talents for a positive change within the Orange County community.",
    url: "/about",
  },
];

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
    img: jc,
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
    img: bx,
  },
  {
    name: "Darsh Verma",
    role: "Public Relations Director",
    img: dv,
  },
  // { REST IN PEACE
  //   name: "Charles Ou-Yang",
  //   role: "Advisor",
  //   img: co,
  // },
  {
    name: "Amanda Nguyen",
    role: "Director Of Social Media",
    img: an,
  },
  {
    name: "Matthew Lin",
    role: "Director of Fundraising",
    img: ml,
  },
  {
    name: "Arda Tasci",
    role: "Director of Technology",
    img: null,
  },
  {
    name: "Madison Lee",
    role: "Director of Campus Operations",
    img: md,
  },
  {
    name: "Alex Kimm",
    role: "Director of Members Relations",
    img: ak,
  },
  {
    name: "Preethi Rao",
    role: "Director of Project Development",
    img: pr,
  },
];
//
const projects = [
  {
    type: "misc",
    pid: "schoology",
    title: "Project Schoology",
    text: (
      <p class="medium-p">
        Quite possibly our most ambitious endeavor yet, our Project Schoology
        was a major fundraising project for school supplies that we donated to
        the Orangewood Family and Children Center in Orange city.<br></br>
        <br></br>Through constant park visits to parks around Irvine and Tustin,
        we were able to raise over <b class="red-font">$1,040</b> and we later
        bought supplies and delivered them to Orangewood! Along the way, we also
        had much fun with each other and were able to get out our message of
        community benefiting everyone around us.
      </p>
    ),
    image: schoologyPhoto,
    subtitle:
      "A handful of our members on drop-off day at Orangewood, August 17th, 2021",
    yt: "",
  },
  {
    type: "vid-art",
    pid: "esports",
    title: "Esports Tournament",
    text: (
      <p class="medium-p">
        We’re not going to lie, many of us at LOT are gamers. In fact, many
        games hold a close place to our hearts. In order to show our love for
        video games, have some fun, and publicize ourselves as well, we’ve made
        it our objective to hold an annual LOT eSports Tournament and inviting
        teams from all over to compete. <br></br>We recently held our second
        annual tournament, and we’ve had so much fun all around playing
        Valorant, League of Legends, and chess! Look out for the signup for next
        year's!
      </p>
    ),
    image: "#",
    subtitle: "",
    yt: "https://www.youtube.com/embed/sokcAmxoiTE",
  },
  {
    type: "misc",
    pid: "lotline",
    title: "Mental Health Podcast",
    text: (
      <p class="medium-p">
        As young adults, students, teenagers, and other nouns, we here at the
        LOT Foundation are critically aware of the struggles and issues that
        people like us face on a normal basis. Join us on this ongoing effort as
        we interview different guests on a variety of topics relating to mental
        health and wellbeing!<br></br>We’ve covered how to deal with pressure in
        sports, how to live life with a positive mindset, dealing with stress,
        and much, MUCH more!
      </p>
    ),
    image: "#",
    subtitle: "",
    yt: "https://www.youtube.com/embed/vxCNCmHlaSI",
  },
  {
    type: "vid-art",
    pid: "wksp",
    title: "Career Workshop",
    text: (
      <p class="medium-p">
        
      </p>
    ),
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

const exp = { socials, home, gallery, header, team, projects, donations };
export default exp;
