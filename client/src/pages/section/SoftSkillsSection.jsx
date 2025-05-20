import React from "react";
import { FaUsers, FaBook, FaLightbulb, FaComments, FaChartLine, FaClock } from 'react-icons/fa';
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeModeContext";

const SoftSkillsSection = () => {
  const { language } = useLanguage();
  const { darkMode } = useTheme();

  const content = {
    en: {
      title: "Soft Skills",
      description:
        "My goal is to contribute effectively, collaborate with teams, and continuously improve. This is what I commit myself to deliver to you as an employee:",
      skills: [
        {
          title: "Team Collaboration",
          description:
            "I actively focus in engaging with team members, communicate clearly, and contribute to a positive and productive work environment.",
          icon: <FaUsers size={40} />,
        },
        {
          title: "Adaptability & Continuous Learning",
          description:
            "I am committed to learning new technologies and quickly adapting to changing project requirements and work environments.",
          icon: <FaBook size={40} />,
        },
        {
          title: "Problem-Solving",
          description:
            "I approach challenges with creativity and logic, focusing myself on efficient solutions that enhance productivity and project success.",
          icon: <FaLightbulb size={40} />,
        },
        {
          title: "Communication Skills",
          description:
            "I always look for clear communication of ideas and active listening, ensuring effective collaboration and understanding within the team.",
          icon: <FaComments size={40} />,
        },
        {
          title: "Proactive & Self-Motivated",
          description:
            "I take initiative and stay motivated to contribute to team goals and improve processes without requiring constant supervision.",
          icon: <FaChartLine size={40} />,
        },
        {
          title: "Time Management",
          description:
            "I prioritize tasks efficiently, meeting deadlines while maintaining high-quality deliverables.",
          icon: <FaClock size={40} />,
        },
      ],
    },
    es: {
      title: "Habilidades Blandas",
      description:
        "Mi objetivo es contribuir eficazmente, colaborar con equipos y mejorar continuamente. Esto es lo que me comprometo a entregarte como empleado:",
      skills: [
        {
          title: "Colaboración en Equipo",
          description:
            "Me enfoco en involucrarme activamente con los miembros del equipo, me comunico con claridad y contribuyo a un entorno de trabajo positivo y productivo.",
          icon: <FaUsers size={40} />,
        },
        {
          title: "Adaptabilidad y Aprendizaje Continuo",
          description:
            "Estoy comprometido a aprender nuevas tecnologías y adaptarme rápidamente a los cambios en los requisitos del proyecto y entornos laborales.",
          icon: <FaBook size={40} />,
        },
        {
          title: "Resolución de Problemas",
          description:
            "Enfrento los desafíos con creatividad y lógica, enfocandome en idear soluciones eficientes que mejoran la productividad y el éxito del proyecto.",
          icon: <FaLightbulb size={40} />,
        },
        {
          title: "Habilidades de Comunicación",
          description:
            "Siempre busco comunicar mis ideas de manera clara y escucho activamente, garantizando una colaboración y entendimiento efectivos dentro del equipo.",
          icon: <FaComments size={40} />,
        },
        {
          title: "Proactividad y Motivación",
          description:
            "Tomo la iniciativa y me motivo para contribuir a los objetivos del equipo y mejorar procesos sin requerir supervisión constante.",
          icon: <FaChartLine size={40} />,
        },
        {
          title: "Gestión del Tiempo",
          description:
            "Priorizo tareas de manera eficiente, cumpliendo plazos mientras mantengo entregables de alta calidad.",
          icon: <FaClock size={40} />,
        },
      ],
    },
  };
  

  const { title, description, skills } = content[language];

  return (
    <div className='relative py-24 bg-white dark:bg-gray-800 text-gray-800 dark:text-white'>
      <div className="absolute inset-0">
        <div className='relative z-10 h-1/3 md:h-2/4 w-full bg-white dark:bg-transparent' />
        <div className='h-1/3 md:h-1/4 w-full bg-blue-200 dark:bg-blue-950' />
        <div className='h-1/3 md:h-1/4 w-full bg-blue-300 dark:bg-blue-950' />
        {/* Background Animations */}
        {!darkMode && (
          <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
            <div className="stars"></div>
            <div className="twinkling"></div>
            <div className="airplane"></div>
            <div className="balloon"></div>
            <div className="clouds"></div>
          </div>
        )}
        {darkMode && (
          <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
            <div className="stars"></div>
            <div className="twinkling"></div>
            <div className="shooting-star"></div>
            <div className="planet"></div>
            <div className="ufo"></div>
          </div>
        )}
      </div>
      <div className="relative max-w-6xl mx-auto px-6 text-center z-10 flex flex-col items-center">
        <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-blue-900 dark:text-white mb-6'>{title}</h2>
        <p className='w-3/5 text-md text-gray-600 dark:text-gray-200 mb-12'>{description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white h-full p-6 border border-gray-300 shadow-sm transition duration-300 transform cursor-pointer group
              hover:scale-105 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-900"
            >
              <div
                className="mb-4 flex justify-center text-blue-900 
                group-hover:text-white transition-colors duration-300"
              >
                {skill.icon}
              </div>
              <h3
                className="text-xl font-semibold text-blue-900 mb-4 
                group-hover:text-white transition-colors duration-300"
              >
                {skill.title}
              </h3>
              <p
                className="text-md text-gray-700 group-hover:text-white 
                transition-colors duration-300"
              >
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SoftSkillsSection;