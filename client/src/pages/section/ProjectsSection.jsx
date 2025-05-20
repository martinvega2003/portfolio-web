import React from "react";
import { motion } from "framer-motion";
import { projectsData as projects } from "../../data/projectsData";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeModeContext";
import { ProjectCard } from "../../components/ProjectCard";

const ProjectsSection = () => {
  const { language } = useLanguage();
  const { darkMode } = useTheme(); // Get the theme from custom hook

  return (
    <div id="projects" className={`${darkMode ? "bg-black text-white" : "bg-gradient-to-r from-blue-400 to-blue-300 text-white"} pt-48 pb-24 relative`}>
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
      
      <div className="px-6 relative z-10">
        <h2 key={language} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center">
          {language === "en"
            ? "See Some Of My Projects"
            : "Mira Algunos De Mis Proyectos"}
        </h2>

        {/* Timeline & Cards */}
        <div className="mt-12 relative">
          <div className="flex flex-col items-center">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="flex w-full h-fit items-start mb-6 overflow-y-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.5 }}
                transition={{ duration: 0.3, delay: index * 0.01 }}
              >
                {/* Circle and Line */}
                <div className="flex flex-col items-center">
                  {project.number ? (
                    <div 
                      className='h-10 sm:h-20 w-10 sm:w-20 text-md sm:text-3xl bg-white dark:bg-blue-900 text-blue-900 dark:text-white border border-blue-900 font-bold flex items-center justify-center rounded-full shadow-md mb-6'>
                      {project.number}
                    </div>
                  ) : (
                    <div className="w-10 sm:w-20 h-10 sm:h-20"></div>
                  )}
                  {index < projects.length - 1 && (
                    <div 
                      className='h-[500px] w-1 bg-gradient-to-b from-white to-blue-900 dark:from-gray-500 dark:to-gray-800'
                    />
                  )}
                </div>

                {/* Card */}
                <ProjectCard project={project} theme={darkMode ? 'dark' : 'light'} language={language} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;