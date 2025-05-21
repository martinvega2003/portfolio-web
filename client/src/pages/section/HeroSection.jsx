import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTheme } from '../../context/ThemeModeContext';
import { useLanguage } from '../../context/LanguageContext';
import { FaCopy } from "react-icons/fa";
import heroImg from "../../images/hero-image-v2.png";
import trees from "../../images/black-trees.png";
import clouds from "../../images/clouds.png";

const HeroSection = () => {
  const { darkMode } = useTheme();
  const { language } = useLanguage();

  const [copied, setCopied] = useState(false);
  const myEmail = "martinvega2003.02@gmail.com"
  
  const handleCopy = () => {
    navigator.clipboard.writeText(myEmail);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div
      className='w-full h-fit py-40 md:pb-96 overflow-hidden relative bg-gradient-to-b from-blue-400 to-blue-300 dark:bg-gradient-to-b dark:from-black dark:to-gray-800'
    >
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
      <motion.div 
        className="w-full px-3 sm:px-20 relative"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="w-full flex flex-col md:flex-row justify-start items-center">
          <div className="w-full md:w-1/2 text-center md:text-left mb-9 md:mb-0">
            {/* Email Section */}
            <motion.div 
              className="flex items-center gap-2 justify-center md:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <span className="text-sm md:text-md text-gray-100 font-semibold">
                {myEmail}
              </span>
              <button
                onClick={handleCopy}
                className="text-gray-100 hover:text-blue-800 transition-colors cursor-pointer"
                title="Copy Email"
              >
                <FaCopy />
              </button>
            </motion.div>
            {copied && (
              <span className="text-xs text-green-400 mt-1 block">
                {language === "en" ? "Copied!" : "Copiado!"}
              </span>
            )}

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-extrabold leading-tight mt-4 relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              {language === "en" ? (
                <>
                  Bring{" "}
                  <span
                    className={
                      darkMode
                        ? "text-blue-400"
                        : "text-blue-800"
                    }
                  >
                    Your Ideas
                  </span>{" "}
                  To Life
                </>
              ) : (
                <>
                  Haz{" "}
                  <span
                    className={
                      darkMode
                        ? "text-blue-400"
                        : "text-blue-800"
                    }
                  >
                    Tus Ideas
                  </span>{" "}
                  Realidad
                </>
              )}
            </motion.h1>

            <motion.p
              className='mt-4 text-md lg:text-xl text-gray-50 dark:text-white'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              {language === "en"
                ? "I build React apps with modern technologies like Tailwind CSS and PostgreSQL, delivering on time."
                : "Creo aplicaciones React con tecnologías modernas como Tailwind CSS y PostgreSQL, entregando a tiempo."}
            </motion.p>

            <motion.div 
              className="relative z-20 w-full flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center md:justify-start items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <Link 
                to="/form"
                className='mt-8 w-64 py-3 text-sm md:text-md text-center text-blue-800 dark:text-black bg-white hover:bg-transparent hover:text-white border-white font-semibold border-2 shadow-lg hover:scale-110 transition duration-200'
              >
                {language === "en" ? "Work Together" : "Trabajemos"}
              </Link>
              <a 
                href="#projects"
                className='sm:mt-8 w-64 py-3 text-sm md:text-md text-center font-semibold border-2 shadow-lg hover:scale-110 transition duration-200 text-white bg-transparent hover:bg-white hover:text-blue-800 border-white'
              >
                {language === "en" ? "See My Work" : "Ver Mi Trabajo"}
              </a>
            </motion.div>
          </div>

          <motion.div 
            className="w-full md:w-1/2 flex justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <img src={heroImg} alt="Laptops Images" />
          </motion.div>
        </div>
        {darkMode && (
          <img
            className="absolute z-10 -bottom-40 md:-bottom-96 left-0 right-0 min-w-full h-auto"
            src={trees}
            alt=""
          />
        )}
        {!darkMode && (
          <img
            className="absolute z-10 -bottom-40 md:-bottom-96 left-0 right-0 min-w-full h-auto"
            src={clouds}
            alt=""
          />
        )}
      </motion.div>
    </div>
  )
}

export default HeroSection