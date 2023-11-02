import {
  FaDiagramProject,
  FaEnvelope,
  FaInstagram,
  FaWhatsapp,
  FaGithub,
  FaHouse,
  FaLinkedinIn,
  FaRenren,
  FaUser,
} from "react-icons/fa6";
import {
  movix,
  myblog,
  movieReview,
  myPortfolio,
  todo,
  usability,

} from "../assets";

export const Socials = [
  {
    id: `whatsapp-${Date.now()}`,
    Icon: FaWhatsapp,
    uri: "https://wa.me/qr/TN6FITTUQUXUP1",
    color: "#1877F2",
  },
  {
    id: `linkedin-${Date.now()}`,
    Icon: FaLinkedinIn,
    uri: "https://www.linkedin.com/in/rohitarya220/",
    color: "#0072b1",
  },
  {
    id: `github-${Date.now()}`,
    Icon: FaGithub,
    uri: "https://github.com/rohitarya220",
    color: "#fff",
  },
  {
    id: `insta-${Date.now()}`,
    Icon: FaInstagram,
    uri: "https://instagram.com/rohit_arya220?igshid=OGQ5ZDc2ODk2ZA==",
    color: "#ff0000",
  },
];

export const Menus = [
  {
    id: `home-${Date.now()}`,
    Icon: FaHouse,
    uri: "#home",
    name: "Home",
  },
  {
    id: `about-${Date.now()}`,
    Icon: FaUser,
    uri: "#about",
    name: "About",
  },
  {
    id: `skills-${Date.now()}`,
    Icon: FaRenren,
    uri: "#skills",
    name: "Skills",
  },
  {
    id: `projects-${Date.now()}`,
    Icon: FaDiagramProject,
    uri: "#projects",
    name: "Projects",
  },
  {
    id: `contact-${Date.now()}`,
    Icon: FaEnvelope,
    uri: "#contact",
    name: "Contact",
  },
];

export const ProjectsData = [
  {
    id: `food-${Date.now()}`,
    name: "Movix",
    imgSrc: movix,
    gitURL: "https://github.com/rohitarya220/movie-Website-movix",
    hostURL: 'https://movieapp-two-rho.vercel.app/',
    about: 'I created a movie website that demonstrates my web development skills. It provides real-time movie data, user ratings, and comments, all in a responsive and visually engaging design.'
  },
  {
    id: `codepen-${Date.now()}`,
    name: "Blog Website",
    imgSrc: myblog,
    gitURL: "https://github.com/rohitarya220/blog-website",
    hostURL: 'https://blog-website-iota-five.vercel.app/',
    about: 'This project showcases a visually appealing and functional blog website created using HTML, CSS, and React. With features like post creation and editing'
  },
  {
    id: `openai-${Date.now()}`,
    name: "Movie Review",
    imgSrc:   movieReview,
    gitURL: "https://github.com/rohitarya220/Filmyduniya-movieWebsite-react",
    hostURL: 'https://filmyduniya.vercel.app/',
    about: 'Filmyduniya-movieWebsite-react is a React-based movie website. It offers movie details, ratings, and more.'
  },
  {
    id: `imageSharing-${Date.now()}`,
    name: "MY Portfolio",
    imgSrc: myPortfolio,
    gitURL: "https://github.com/rohitarya220/my-portfolio",
    hostURL: 'https://my-portfolio-lake-psi.vercel.app/',
    about: '  I have showcased some of my best work. Feel free to browse through and get to know more about my skills and experiences. Your feedback is highly appreciated'
  },
  {
    id: `chatapp-${Date.now()}`,
    name: "To-do-app",
    imgSrc: todo,
    gitURL: "https://github.com/Vetrivel-VPhttps://github.com/rohitarya220/todoApp-reduxToolkit",
    hostURL: 'https://todoapprr.vercel.app/',
    about: 'a task management app built with Redux Toolkit. It lets you easily manage and organize your to-do list with features like task creation, editing, and filtering. '
  },

  {
    id: `pixabayclone-${Date.now()}`,
    name: "Usability clone",
    imgSrc: usability,
    gitURL: "https://github.com/rohitarya220/Usabilityhub-websiteClone",
    hostURL: 'https://rohitwebb.netlify.app/',
    about: 'Usabilityhub-websiteClone. I have recreated a user interface inspired by UsabilityHub.'
  },
  
];
