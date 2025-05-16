import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import CVEnglishPath from "../../data/Martin Vega - Web Developer - CV.pdf"
import CVSpanishPath from "../../data/Martin Vega - Desarrollador Web - CV.pdf"
import professionalPic from "../../images/professional-pic.jpeg"

const CVSection = () => {
  const { language } = useLanguage();

  return (
    <div className='relative z-10 sm:p-6 md:p-0 text-gray-800 dark:text-gray-200 bg-transparent'>
      <div className="absolute inset-0 opacity-40">
        {/* Starry Background */}
        {Array.from({ length: 25 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-[2px] h-[2px] rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
            }}
            animate={{
              y: [0, -10, 0],
              transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          />
        ))}
      </div>

      <div className="flex justify-center md:justify-start items-center md:items-end">
        <div className='bg-white/80 dark:bg-gray-800/90 w-full sm:w-[90%] md:max-w-[80%] lg:max-w-[70%] xl:max-w-[60%] flex flex-col items-start justify-center sm:shadow-2xl sm:rounded-lg border-2 border-primary md:shadow-none md:rounded-none md:border-none'>
          <div className="relative z-20 min-h-screen w-full flex flex-col justify-center items-start bg-transparent py-12 px-6">
            <p className='w-full text-sm italic font-extralight mb-4 text-gray-800 dark:text-gray-200 border-blue-900 dark:border-cyan-300 border-b-2'>{language === 'en' ? "My Curriculum Vitae" : "Mi Curriculum Vitae"}</p>
            <div className="max-w-4xl w-full flex flex-col md:flex-row gap-8">
              {/* Left Section - Profile and Contact Info */}
              <div className="w-full md:w-1/2">         
                <div className="w-full md:w-2/3 aspect-square mb-6">
                  <img
                    src={professionalPic || "https://via.placeholder.com/200"}
                    alt="Martin Vega"
                    className='w-full h-auto border-2 border-gray-800 dark:border-purple-500 rounded-xl'
                  />
                </div>
                <div className='text-blue-900 border-blue-900 dark:text-cyan-300 dark:border-cyan-300 text-xl font-bold border-l-4 pl-4'>{language === "en" ? "Contact Info" : "Contacto"}</div>
                <ul className='text-gray-800 dark:text-white text-md mt-2 space-y-2'>
                  <li>📞 +555 555 555555</li>
                  <li>✉️ martinvega2008.02@gmail.com</li>
                  <li>🌐 placeholder.web</li>
                </ul>
                <div className='text-blue-900 border-blue-900 dark:text-cyan-300 dark:border-cyan-300 text-xl font-bold mt-6 border-l-4 pl-4'>{language === "en" ? "Education" : "Educacion"}</div>
                <ul className='text-gray-800 dark:text-white mt-2 space-y-1 text-md'>
                  <li>{language === "en" ? "Computer Science University" : "Universidad - Ingenieria Informatica"}<br />2022 – {language === "en" ? "today" : "presente"}</li>
                  <li>{language === "en" ? "Senior High School" : "Bachillerato"}<br />2019 – 2021</li>
                  <li>{language === "en" ? "Junior High School" : "Educacion Media"}<br />2016 – 2018</li>
                  <li>{language === "en" ? "Primary School" : "Educacion Basica"}<br />2009 – 2015</li>
                </ul>
                <div className='text-blue-900 dark:text-cyan-300 border-blue-900 dark:border-cyan-300 text-xl font-bold mt-6 border-l-4 pl-4'>{language === "en" ? "Skills" : "Habilidades"}</div>
                <ul className={`text-gray-800 dark:text-white mt-2 space-y-1 text-md`}>
                  <li>{language === "en" ? "Frontend Development - High" : "Desarrollo Frontend - Alto"}</li>
                  <li>{language === "en" ? "Backend Development - Medium" : "Desarrollo Backend - Medio"}</li>
                  <li>{language === "en" ? "Databases - Medium" : "Bases de Datos - Medio"}</li>
                </ul>
              </div>

              {/* Right Section - Profile and Experience */}
              <div className="w-full md:w-1/2">
                <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white'>Martin Vega</h1>
                <h2 className='text-blue-900 dark:text-cyan-300 text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>{language === "en" ? "Web Developer" : "Desarrollador Web"}</h2>
                <p className={`text-gray-800 dark:text-white mt-4 text-md`}>
                  {language === "en" ? 
                    <>
                      Hello, I’m Martin Vega, a web developer looking for his first experience in the field. I have been learning coding since 2020.
                      I consider myself decently practiced with Frontend Development (React & TailwindCSS) and really knowledgeable in backend development and SQL/NoSQL queries (Python, ExpressJS, PostgreSQL).
                    </> :
                    <>
                      Hola! Soy Martin Vega, Desarrollador Web que busca su primera experiencia en el Area. Estoy aprendiendo a escribir coding desde 2020. 
                      Me considero extremadamente competente en desarrollo frontend (React y TailwindCSS) y bastante entendido en el desarrollo backend y querys a base de datos (ExpressJS y PostgreSQL).  
                    </>
                  }
                </p>
                <div className='text-blue-900 dark:text-cyan-300 border-blue-900 dark:border-cyan-300 text-xl font-bold mt-8 border-l-4 pl-4'>{language === "en" ? "Work Experience" : "Experiencia Laboral"}</div>
                <ul className='text-gray-800 dark:text-white mt-4 space-y-4 text-md'>
                  <li>
                    <span className="font-bold">{language === "en" ? "Administrative Role Rieder S.A." : "Rol Administrativo Rieder S.A."}</span><br />
                    <p className='border-blue-900 dark:border-none text-sm italic font-extralight pb-1 border-b-2 w-full'>{language === "en" ? "6 Months in 2021" : "6 Meses en 2021"}</p><br />
                    {language === "en" ? 
                      <>
                        I learnt to work in teams, manage my time, communicate and to administrate the financial aspects of the company.
                      </> :
                      <>
                        Aprendi a trabajar en equipo, comunicarme, manejar mi tiempo y a administrar los aspectos financieros de la compañía.
                      </> 
                    }
                  </li>
                  <li>
                    <span className="font-bold">{language === "en" ? "Administrative Role Confirming +" : "Rol Administrativo Confirming +"}</span><br />
                    <p className='border-blue-900 dark:border-none text-sm italic font-extralight pb-1 border-b-2 w-full'>{language === "en" ? "6 Months in 2024" : "6 Meses en 2024"}</p><br />
                    {language === "en" ? 
                      <>
                        I primarily managed the bills of the company using many software tools while doing this.
                      </> :
                      <>
                        Principalmente administre las facturas de la compañía utilizando diversos softwares.
                      </> 
                    }
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative z-10 w-full py-8 flex items-center justify-between gap-4">
              <a 
                href={CVEnglishPath}
                download={CVEnglishPath}
                className='w-fit sm:w-1/3 bg-black dark:bg-white text-white dark:text-black hover:text-black dark:hover:text-white border-2 border-black dark:border-white text-md text-center hover:bg-transparent py-2 px-4 rounded-lg transition duration-300'
              >
                Download CV In English
              </a>
              <a 
                href={CVSpanishPath}
                download={CVSpanishPath}
                className='w-fit sm:w-1/3 bg-blue-900 dark:bg-cyan-300 text-white dark:text-gray-800 hover:text-blue-900 dark:hover:text-cyan-300 border-blue-900 dark:border-cyan-300 text-md text-center hover:bg-transparent py-2 px-4  border-2 rounded-lg transition duration-300'
              >
                Descargar CV En Español
              </a>
            </div>
          </div>
        </div>
        <div className="w-[15%] hidden lg:block"></div>
      </div>
    </div>
  );
};

export default CVSection;