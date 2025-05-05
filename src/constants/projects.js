import logo from "../assets/logo.png"; // Direct import using ES6 syntax
import logo2 from '../assets/logo2.png'

export const projects = [
  {
    id: 1,
    title: "E-commerce Website",
    description: "A full-stack e-commerce platform with payment integration",
    tags: ["React", "HTML" , "CSS"],
    image: logo, // Direct reference to the imported image
    source: "https://github.com/rathoddivy/E-commerce-App-Using-ReactJS",
    demo: "https://github.com/rathoddivy/E-commerce-App-Using-ReactJS"
  },
  {
    id: 2,
    title: "I N C O ( The Collab App )",
    description: "A productivity app for managing daily tasks",
    tags: ["React", "Nodejs", "ExpressJs" , "Html/Css ", "MongoDB", "daisyUI" ,"Tailwind CSS"],
    image: logo2,
    source: "https://github.com/rathoddivy/INCO-The-Collabation-WebApp-",
    demo: "https://github.com/rathoddivy/INCO-The-Collabation-WebApp-"
  }




];