// src/constants/index.js
import logo from '../assets/logo.png'


export const navLinks = [
    {
      id: "home",
      title: "Home",
      path: "/"
    },
    {
      id: "about",
      title: "About",
      path: "/about"
    },
    {
      id: "projects",
      title: "Projects",
      path: "/projects"
    },
    {
      id: "skills",
      title: "Skills",
      path: "/skills"
    },
    {
      id: "contact",
      title: "Contact",
      path: "/contact"
    },

 
  ];
  
  export const projects = [
    {
      id: 1,
      title: "E-commerce Website",
      description: "A full-stack e-commerce platform with payment integration",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: {logo},
      source: "https://github.com/username/ecommerce",
      demo: "https://ecommerce-demo.com"
    },
    {
      id: 2,
      title: "INCO  The Collabration App",
      description: "A productivity app for managing daily tasks",
      tags: ["React", "Firebase", "Tailwind CSS"],
      image: "https://via.placeholder.com/400x200?text=Task+App",
      source: "https://github.com/username/task-app",
      demo: null
    }
  ];
  