import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';
import { FaBars, FaTimes, FaMoon, FaSun, FaGlobe } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeModeContext';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();
  const { darkMode, setDarkMode } = useTheme(); // Get theme and toggleTheme from context

  const [isExamplesOpen, setIsExamplesOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate()

  return (
    <header className='fixed left-1/2 -translate-x-1/2 top-5 w-[95%] bg-white dark:bg-gray-800 shadow-2xl rounded-xl z-50 transition duration-300'>
      <nav className="relative container mx-auto flex items-center justify-between py-4 px-6">
        <div className='w-fit flex flex-nowrap items-center'>
          {/* Theme Switcher */}
          <button 
            onClick={() => setDarkMode(!darkMode)} 
            className='bg-transparent w-fit text-2xl text-blue-900 dark:text-yellow-300 border-blue-900 dark:border-yellow-300 flex flex-nowrap items-center gap-1 py-1 px-2 ml-2 mr-1 border rounded-lg hover:scale-110 cursor-pointer transition duration-300'
          >
            {!darkMode ? <FaMoon /> : <FaSun />}
          </button>
          <button 
            onClick={toggleLanguage} 
            className='bg-transparent hover:bg-blue-900 dark:hover:bg-blue-600 w-fit text-xl text-gray-800 dark:text-white hover:text-white flex flex-nowrap items-center gap-1 py-[2px] px-2 ml-2 mr-1 border border-gray-800 hover:border-blue-900 dark:border-white dark:hover:border-blue-600 rounded-lg cursor-pointer transition-all duration-300'
          >
            {language === "en" ? "Español" : "English"}
            <FaGlobe className="text-xl" />
          </button>
        </div>  
        <div className='relative w-fit rounded-xl top-0 hidden sm:flex flex-row justify-start items-center space-x-6 transition-all duration-300'>
          <a
            href="/"
            className='relative group text-md md:text-lg transform hover:scale-110 text-gray-800 dark:text-white hover:text-blue-900 dark:hover:text-blue-500 transition duration-300'
          >
            {language === "en" ? "Home" : "Inicio"}
            <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-blue-900 dark:bg-blue-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </a>
          <a
            href="#about"
            className='relative group text-md md:text-lg transform hover:scale-110 text-gray-800 dark:text-white hover:text-blue-900 dark:hover:text-blue-500 transition duration-300'
          >
            {language === "en" ? "About" : "Sobre mi"}
            <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-blue-900 dark:bg-blue-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </a>
          <a
            href='#projects'
            className='relative group cursor-pointer text-md md:text-lg text-gray-800 dark:text-white hover:text-blue-900 dark:hover:text-blue-500 hover:scale-110 transition duration-300'
            onMouseEnter={() => setIsExamplesOpen(true)}
            onMouseLeave={() => setIsExamplesOpen(false)}
          >
            {language === "en" ? "Projects" : "Proyectos"}
            <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-blue-900 dark:bg-blue-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            {isExamplesOpen && (
              <div className='absolute w-[160px] top-full left-0 bg-white dark:bg-gray-800 text-gray-800 dark:text-white text-primary rounded-xl shadow-lg py-2'>
                {projectsData.map(project => (
                  <a
                    key={project.title}
                    href={project.linkToDeployment}
                    className="block px-4 py-2 hover:bg-blue-900 hover:text-white"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {language === "en" ? project.title.en : project.title.es}
                  </a>
                ))}
              </div>
            )}
          </a>
          <Button
            shape='rounded'
            variant={darkMode ? 'dark' : 'default'}
            onClick={() => navigate('/form')}
          >
            {language === "en" ? "Contact Me" : "Contactame"}
          </Button>
        </div>       
        {!isMenuOpen ? (
          <div className='sm:hidden w-fit h-fit text-gray-800 dark:text-white cursor-pointer' onClick={() => setIsMenuOpen(true)}>
            <FaBars size={30} /> 
          </div>
        ) : (
          <div className='sm:hidden w-fit h-fit text-gray-800 dark:text-white cursor-pointer' onClick={() => setIsMenuOpen(false)}>
            <FaTimes size={30} />
          </div>
        )}
      </nav>

{/* Mobile menu */}
<div
  className={`sm:hidden w-full bg-white dark:bg-gray-800 rounded-b-xl shadow-2xl overflow-hidden transition-all duration-300
    ${isMenuOpen ? 'max-h-[500px] py-6' : 'max-h-0 py-0'}`}
  style={{ zIndex: 40 }}
>
  <div className="flex flex-col items-center gap-3">
    <a
      href="/"
      className='relative group text-md md:text-lg transform hover:scale-110 text-gray-800 dark:text-white hover:text-blue-900 dark:hover:text-blue-500 transition duration-300'
    >
      {language === "en" ? "Home" : "Inicio"}
    </a>
    <a
      href="#about"
      className='relative group text-md md:text-lg transform hover:scale-110 text-gray-800 dark:text-white hover:text-blue-900 dark:hover:text-blue-500 transition duration-300'
    >
      {language === "en" ? "About" : "Sobre mi"}
    </a>
    <a
      href='#projects'
      className='relative group cursor-pointer text-md md:text-lg text-gray-800 dark:text-white hover:text-blue-900 dark:hover:text-blue-500 hover:scale-110 transition duration-300'
    >
      {language === "en" ? "Projects" : "Proyectos"}
    </a>
    <Button
      shape='rounded'
      variant={darkMode ? 'dark' : 'default'}
      onClick={() => navigate('/form')}
    >
      {language === "en" ? "Contact Me" : "Contactame"}
    </Button>
  </div>
</div>
    </header>
  );
};

export default Navbar;