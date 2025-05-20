import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { ExtraDataSection } from "./ExtraDataSection";
import professionalPic from "../../images/professional-pic.jpeg"

const AboutMeSection = () => {
  const { language } = useLanguage();

  return (
    <div
      id="about"
      className='relative z-10 pt-20 overflow-hidden bg-white dark:bg-black text-gray-900 dark:text-gray-100'
    >
      <ExtraDataSection />

      <div className="w-full flex flex-col items-center">
        {/* About Me Text Section */}
        <motion.div
          className='w-fit mx-3 sm:mx-12 flex flex-col items-center md:items-start md:flex-row-reverse md:justify-around my-12 bg-transparent dark:bg-gray-800 rounded-4xl shadow-2xl dark:shadow-[0_10px_30px_10px_rgba(139,92,246,0.6)]'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >

          <div
            className="relative z-10 w-full md:w-3/5 p-8 rounded-3xl mb-6 md:mb-12 lg:mb-20"
          >
            {/* Header Section with Name */}
            <motion.div
              className="text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <p className='w-full py-1 mb-2 text-gray-700 dark:text-gray-300 font-extralight italic text-sm border-b-2'>
                {language === "en" ? "Let me introduce myself" : "Permíteme presentarme"}
              </p>
              <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white'>
                {language === "en" ? "Hi, I'm Martin Vega" : "Hola, soy Martin Vega"}
              </h1>
            </motion.div>
            <div
              className='w-full mt-5 text-gray-700 dark:text-gray-200 text-md leading-relaxed'
            >
              <p>
                {language === "en" 
                  ? "I'm a passionate web developer and computer science student, specializing in building modern, efficient, and high-performance web solutions that cater to various needs."
                  : "Soy un desarrollador web apasionado y estudiante de informática, enfocado en la creación de soluciones web modernas, eficientes y de alto rendimiento para satisfacer diversas necesidades."
                }
              </p>
              <p className="mt-3">
                {language === "en"
                  ? "I focus on delivering custom, secure, and fast web applications that provide exceptional user experiences. Whether it's a personal project, a web application, or anything in between, my goal is to bring your vision to life with cutting-edge technology and clean code."
                  : "Me enfoco en entregar aplicaciones web personalizadas, seguras y rápidas que ofrezcan experiencias de usuario excepcionales. Ya sea un proyecto personal, una aplicación web o cualquier cosa intermedia, mi objetivo es hacer realidad tu visión con tecnología de vanguardia y código limpio."
                }
              </p>
            </div>
          </div>
          {/* Image or Avatar */}
          <motion.div
            className="w-full md:w-2/5 h-auto flex justify-center mt-6 md:mt-0 overflow-hidden"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <img
              src={professionalPic || "https://via.placeholder.com/200"}
              alt="Martin Vega"
              className='relative z-10 w-full h-auto rounded-l-4xl'
            />
          </motion.div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className='dark:relative dark:z-10 min-w-full py-24 text-center bg-gray-800 dark:bg-gray-950 text-white'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            {language === "en"
              ? "Skills & Tech"
              : "Habilidades y Tecnología"}
          </h2>
          <div className="flex flex-wrap justify-center mt-8 gap-8">
            {/* Skill Badges */}
            {[
              { name: "HTML", color: "bg-orange-500 text-white" },
              { name: "CSS", color: "bg-blue-500 text-white" },
              { name: "JavaScript", color: "bg-yellow-500 text-white" },
              { name: "React", color: "bg-blue-600 text-white" },
              { name: "PostgreSQL", color: "bg-green-600 text-white" },
              { name: "Node.js / Express", color: "bg-white text-gray-800" },
            ].map((skill, index) => (
              <motion.div
                key={index}
                className={`relative z-10 px-6 py-3 rounded-lg ${skill.color} text-xl font-medium transition duration-300 hover:scale-115 cursor-pointer`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.3 }}
              >
                {skill.name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMeSection;