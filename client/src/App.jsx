import React from "react"
import { Routes, Route } from "react-router-dom"
import Mainpage from "./pages/Mainpage"
import Form from "./pages/Form"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import bgImageUrl from './images/working-bg.webp'
import ScrollToTop from "./components/ScrollToTop"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <>
      {/* Background Image Layer */}
      <div
        className="fixed inset-0 bg-fixed bg-cover bg-center bg-no-repeat opacity-50"
        style={{
          backgroundImage: `url(${bgImageUrl})`,
          zIndex: -1,
        }}
      ></div>
      <ToastContainer position="top-right" autoClose={3000} />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/form" element={<Form />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
