import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router-dom";
import axios from "axios"
import { toast } from "react-toastify";

const Form = () => {

  const api = import.meta.env.VITE_API_URL;
  
  const { language } = useLanguage();

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.name && formData.email && formData.message) {
        await axios.post(`${api}/api/contact`, formData);
        toast.success(language === "en" ? "Message sent!" : "Mensaje enviado!")
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.warning(language === "en" ? "Please fill all fields." : "Por favor, completa todos los campos.");
      }
    } catch (error) {
      toast.error(language === 'en' ? "Failed to send message. Please try again." : "Error al enviar el mensaje. Por favor, vuelva a intentarlo.");
    }
  };

  const content = {
    en: {
      title: "Get In Touch",
      description: "Have a question or want to work together? Fill out the form below and I'll get back to you as soon as possible.",
    },
    es: {
      title: "Ponte en contacto",
      description: "¿Tienes una pregunta o quieres trabajar juntos? Completa el formulario a continuación y te responderé lo antes posible.",
    }
  };

  const { title, description } = content[language];

  return (
    <div className='bg-white/80 dark:bg-gray-800/90 relative py-36 md:py-44 px-3 sm:px-12 md:px-20 w-full h-full flex flex-col items-center justify-center'>
      <div className="absolute z-10 inset-0 opacity-40">
        {Array.from({ length: 25 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-[2px] h-[2px] rounded-full bg-white"
            style={{ top: `${Math.random() * 100}vh`, left: `${Math.random() * 100}vw` }}
            animate={{ y: [0, -10, 0], transition: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
          />
        ))}
      </div>
      <motion.div
        className="mb-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className='w-full text-sm italic font-extralight pb-[2px] pl-2 mb-4 text-blue-900 dark:text-gray-200 border-b-2 border-blue-900'>
          {language === 'en' ? "Send Your Message" : "Envia Tu Mensaje"}
        </p>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-800 dark:text-white mb-4'>
          {title}
        </h1>
        <p className='text-md leading-relaxed text-gray-700 dark:text-gray-200'>{description}</p>
        <motion.form 
          onSubmit={handleSubmit} 
          className="relative z-10 w-full mt-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        >
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            placeholder={language === "en" ? "Your Name" : "Tu Nombre"} 
            className='w-full bg-transparent p-2 mb-3 rounded-lg dark:text-white border-gray-800 dark:border-gray-300 focus:border-blue-900 dark:focus:border-purple-500 focus:shadow-[0_0_8px_2px] dark:focus:shadow-[0_0_8px_2px] focus:shadow-blue-900 dark:focus:shadow-blue-600 border-2 transition-all duration-300 placeholder:text-gray-400 outline-none'
          />
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            placeholder="Email" 
            className='w-full bg-transparent p-2 mb-3 rounded-lg dark:text-white border-gray-800 dark:border-gray-300 focus:border-blue-900 dark:focus:border-purple-500 focus:shadow-[0_0_8px_2px] dark:focus:shadow-[0_0_8px_2px] focus:shadow-blue-900 dark:focus:shadow-blue-600 border-2 transition-all duration-300 placeholder:text-gray-400 outline-none'
          />
          <textarea 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            placeholder={language === "en" ? "Your Message" : "Tu Mensaje"} 
            className='w-full h-28 sm:h-36 md:h-52 bg-transparent p-2 mb-3 rounded-lg dark:text-white border-gray-800 dark:border-gray-300 focus:border-blue-900 dark:focus:border-purple-500 focus:shadow-[0_0_8px_2px] dark:focus:shadow-[0_0_8px_2px] focus:shadow-blue-900 dark:focus:shadow-blue-600 border-2 transition-all duration-300 placeholder:text-gray-400 outline-none'
          ></textarea>
        </motion.form>
        <div className="relative z-20 w-full p-2 flex items-center justify-between gap-3">
          <Link 
            to="/" 
            className='w-fit sm:w-1/3 bg-black dark:bg-white text-white dark:text-black hover:text-black dark:hover:text-white border-2 border-black dark:border-white text-center hover:bg-transparent p-2 rounded-lg transition duration-300'
          >
            {language === "en" ? "Go Back" : "Volver Atras"}
          </Link>
          <button 
            className="w-fit sm:w-1/3 bg-blue-900 dark:bg-cyan-300 hover:bg-transparent text-white dark:text-gray-800 hover:text-blue-900 dark:hover:text-cyan-300 p-2 border-2 border-blue-900 dark:border-cyan-300 rounded-lg cursor-pointer transition duration-300"
            onClick={handleSubmit}
          >
            {language === "en" ? "Send Message" : "Enviar Mensaje"}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Form;