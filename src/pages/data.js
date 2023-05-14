import podcastIcon from "../media/projects/podcast_icon.png";
import lotshowIcon from "../media/projects/lotshow_icon.jpg"
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
            name: "The LOT Show",
            link: <Link to="/project/lotshow">The LOT Show</Link>,
          },
          
          {
            name: "Esports Tournament",
            link: <Link to="/project/esports">Esports Tournament</Link>,
          },

          {
            name: "Project Schoology",
            link: <Link to="/project/schoology">Project Schoology</Link>,
          },
          {
            name: "The LOT Blog",
            link: <Link to="/project/blog">The LOT Blog</Link>,
          },
          // {
          //   name: "Mental LOTLine",
          //   link: <Link to="/project/lotline">Mental LOTLine</Link>,             Boss wants it off the navbar if im not wrong
          // },
          // {
          //   name: "Workshop Tutorial",
          //   link: <Link to="/project/wkspttrl">Workshop Tutorial</Link>,
          // },
          
          // {
          //   name: "LOTTech",
          //   link: <Link to="/project/lottech  ">LOTTech</Link>
          // },
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
        name: "The LOT Show",
        id: "lotshow",
        img: lotshowIcon,
      },
      {
        name: null,
        id: null,
        img: null,
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
        name: "The Mental LOTLine",
        id: "lotline",
        img: podcastIcon,
      },
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
    upcoming: [
      {
        name: "LOT Tech",
        id: "lottech",
        img: lottechIcon,
      },
      {
        name: "Tutoring Project",
        id: "tutoring",
        img: undefined,
      },
    ]
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
        url: "https://www.youtube.com/channel/UC5mPknkbUlmVXcvPJm7Ofwg",
      }
    ],
  },
];

const team = [
  {
    name: "Jack Chen",
    role: "President",
    img: jc,
    bio: "Hello world! I am Jack and I am the co-founder and President at LOT. I am currently a sophomore at NYU majoring in computer science. I founded LOT with the hope to create educational opportunities for anyone in our local community regardless of their socioeconomic background, because education matters and education inspires. One fun fact about me, I like to prove people wrong, such as those who have doubted the legitimacy and mission of this foundation. Go LOT!",
  },
  {
    name: "Brian Cheng",
    role: "Vice President",
    img: bc,
    bio: "Hi! I'm Brian Cheng, Vice President of LOT. I've been with LOT for about 2 years now since the summer of 2020. I'm currently a senior at Pitzer College in Claremont, CA where I'm a Psychology major on the pre-med track. My main passion is mental health. When I'm not working on LOT related matters I like to play with my cats, watch anime, and play tennis! I've been able to meet lots of new people since joining LOT, and being able to directly impact the community I live in has been a true blessing. Being given a chance to help those who are under-served is a privilege and that's why I jumped on this opportunity as soon as I was given it!",
  },
  {
    name: "Andrew Chen",
    role: "Chief Operating Officer",
    img: ac,
    bio: "Heyooo!! My name is Zitong (zee-tawn) and I go by andrew when I feel like it. I helped co-found LOT during the covid quarantine with my bro jack. Currently, I am the head of operations, which is a fancy way of saying I do nothing and yell at other ppl. I am MIT 2027 bound, 4.0 unweighted and 1600 sat cus im just better like that lol (joke). In my off time, one of my burning passions is to energetically left click at pixels on my screen (currently trying to turn purple pixels green). One fun fact about me is that I think mini bios written by the people themselves for the sake of “introduction” are rly rly cringe. Make sure to laugh out TOGETHER and byeeee!!!",
  },
  {
    name: "Dennis Wang",
    role: "Chief Financial Officer",
    img: dw,
    bio: null,
  },
  {
    name: "Brandon Xu",
    role: "Secretary",
    img: bx,
    bio: "Hey, I’m Brandon, the Secretary of LOT. I’ve been with LOT for about 2 years now, and I’m currently a senior at Arnold O. Beckman Highschool. I’m looking to be a computer science major in college, and LOT gives me an opportunity to give back to the community which has let me reach these opportunities.",
  },
  {
    name: "Darsh Verma",
    role: "Public Relations Director",
    img: dv,
    bio: "Guten Tag! I'm Darsh, Chief Publicity here at LOT. I've been with LOT for 2 years now. Born and raised in Germany, I've grown up liking sausages (die Wurst) a lot, it's one of my favorite foods! I'm a senior at University High School in Irvine right now, and am looking to pursue a history major when in college. I like to play ping pong in my free time, and I was also the local city champion, back in my hometown in Berlin. Being with LOT has taught me a LOT of essential life skills that I use in my everyday life.",
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
    bio: "Hiya! I’m Amanda, Director of Social Media at LOT and high school senior at University High School in Irvine, California. I love pandas, my favorite classes in school were AP Psychology and Chemistry, and I want to be premed in college. Over summer, however, I’ve done a lot of exploring: I’ve tried out web development through Girls Who Code’s Summer Immersion Program and started to bike more with my dad around Irvine. I also became more passionate about feminism and used my beginner skills in web development to start a feminist activist website. Web development makes me feel like an omnipotent creator! And feminism empowers me and broadens my perspective. So, combining both, I get to learn more and share my knowledge. In my free time, I play Valorant, read, and watch anime. At LOT, I design graphics and thumbnails, post to our social media platforms, and run the social media team. I’ve stuck with LOT for almost two years because I believe in its inspiring mission and have so much faith in the people I get to make an impact with.",
  },
  {
    name: "Matthew Lin",
    role: "Director of Fundraising",
    img: ml,
    bio: "I'm a Junior attending Northwood High School in Irvine, California. In my free time I like to paint/draw. I believe in LOT's mission because I've personally seen a lot of students struggle with their education due to factors outside of their control, and feel that LOT would improve many lives. I applied for Director of Fundraising because of my background in Business/Finance and hope to use fundraising as a tool for LOT to grow as an organization.",
  },
  {
    name: "Arda Tasci",
    role: "Director of Technology",
    img: null,
    bio: null,
  },
  {
    name: "Madison Lee",
    role: "Director of Campus Operations",
    img: md,
    bio: "Hello! I’m Madison, the Director of Campus Operations of LOT. I’m a third-year at UCLA, majoring in sociology and minoring in mathematics for teaching and education studies. Being with LOT gives me an opportunity to use my passion for education to help others and leave an impact on the community. In my free time, I enjoy swimming, crocheting, and other crafty activities.",
  },
  {
    name: "Alex Kimm",
    role: "Director of Members Relations",
    img: ak,
    bio: null,
  },
  {
    name: "Preethi Rao",
    role: "Director of Project Development",
    img: pr,
    bio: null,
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
    type:"misc",
    pid: "blog",
    title: "The LOT Blog",
    text: null,
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
    type: "misc",
    pid: "lotshow",
    title: "The LOT Show",
    text: (
      <p class="medium-p">
        The spiritual Successor to the Mental LOTline (Rest In Peace), the LOT Show covers a variety of topics and issues young adults face in today's society. #BreakTheStigma
      </p>
    )
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
