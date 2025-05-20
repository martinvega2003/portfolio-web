import imgOne from "../images/project-manager-thumbnail.png"
import imgTwo from "../images/software-website-thumbnail.png"
import imgThree from "../images/redux-to-do-app-thumbnail.png"
import { SiReact, SiTailwindcss, SiExpress, SiPostgresql, SiRedux } from "react-icons/si";
import { FaLaptopCode, FaTasks } from "react-icons/fa";
import { BsCalendarCheck } from "react-icons/bs";

export const projectsData = [
  {
    id: 1,
    number: "I",
    icon: BsCalendarCheck,
    title: {
      en: "Project Manager",
      es: "Gestor de Proyectos",
    },
    image: imgOne || "https://via.placeholder.com/300",
    description: {
      en: 'A robust project management platform enabling users to create accounts, manage teams, and oversee projects with ease. Features include team member sub-accounts, project and task creation, calendar scheduling, and seamless assignment of responsibilities for efficient collaboration.',
      es: 'Una plataforma de gestión de proyectos robusta que permite a los usuarios crear cuentas, gestionar equipos y supervisar proyectos fácilmente. Incluye subcuentas para miembros del equipo, creación de proyectos y tareas, programación en calendario y asignación eficiente de responsabilidades para una colaboración fluida.',
    },
    linkToCode: "https://github.com/martinvega2003/devops-task-manager",
    linkToDeployment: "https://project-manager-frontend-peach.vercel.app/login",
    technologies: [
      { name: "React", color: "text-cyan-300", icon: SiReact },
      { name: "TailwindCSS", color: "text-blue-500", icon: SiTailwindcss },
      { name: "Express.js", color: "text-yellow-300", icon: SiExpress },
      { name: "PostgreSQL", color: "text-green-400", icon: SiPostgresql },
    ],
  },
  {
    id: 2,
    number: "II",
    icon: FaLaptopCode,
    title: {
      en: "Software Website",
      es: "Pagina Web de Software",
    },
    image: imgTwo || "https://via.placeholder.com/300",
    description: {
      en: "A modern website offering custom software solutions tailored for healthcare businesses. Showcases services, expertise, and a commitment to delivering innovative digital products that streamline operations and enhance client satisfaction.",
      es: "Un sitio web moderno que ofrece soluciones de software personalizadas para empresas del sector salud. Presenta servicios, experiencia y un compromiso con la entrega de productos digitales innovadores que optimizan operaciones y mejoran la satisfacción del cliente.",
    },
    linkToCode: "https://github.com/martinvega2003/custom-healthcare-software-agency-website",
    linkToDeployment: "https://custom-software-website-frontend.vercel.app",
    technologies: [
      { name: "React", color: "text-cyan-300", icon: SiReact },
      { name: "TailwindCSS", color: "text-blue-500", icon: SiTailwindcss },
      { name: "Express.js", color: "text-yellow-300", icon: SiExpress },
      { name: "PostgreSQL", color: "text-green-400", icon: SiPostgresql },
    ],
  },
  {
    id: 3,
    number: "III",
    icon: FaTasks,
    title: {
      en: "To-do App w/Redux",
      es: "Lista de tareas con Redux",
    },
    image: imgThree || "https://via.placeholder.com/300",
    description: {
      en: "A simple yet effective to-do application built with Redux for state management. Allows users to add, complete, and organize tasks, providing a practical environment to boost productivity and practice modern React development techniques.",
      es: "Una aplicación de tareas sencilla pero efectiva, desarrollada con Redux para la gestión de estado. Permite a los usuarios agregar, completar y organizar tareas, ofreciendo un entorno práctico para aumentar la productividad y practicar técnicas modernas de desarrollo con React.",
    },
    linkToCode: "https://github.com/martinvega2003/redux-toolkit",
    linkToDeployment: "https://redux-toolkit-to-do-app-five.vercel.app",
    technologies: [
      { name: "React", color: "text-cyan-300", icon: SiReact },
      { name: "TailwindCSS", color: "text-blue-500", icon: SiTailwindcss },
      { name: "Redux-toolkit", color: "text-purple-500", icon: SiRedux },
    ],
  },
];
