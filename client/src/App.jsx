import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ThemeModeProvider } from "./context/ThemeModeContext"
import { LanguageProvider } from "./context/LanguageContext"
import Mainpage from "./pages/Mainpage"
import Form from "./pages/Form"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import bgImageUrl from './images/working-bg.webp'
import ScrollToTop from "./components/ScrollToTop"

function App() {

  return (
      <LanguageProvider>
        <ThemeModeProvider>
          <BrowserRouter>
            {/* Background Image Layer */}
            <div
              className="fixed inset-0 bg-fixed bg-cover bg-center bg-no-repeat opacity-50"
              style={{
                backgroundImage: `url(${bgImageUrl})`,
                zIndex: -1,
                //backgroundAttachment: "scroll", // Ensures smooth scrolling
              }}
            ></div>
            <ScrollToTop />
            <Navbar />
            <Routes>
              <Route path="/" element={<Mainpage />} />
              <Route path="/form" element={<Form />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </ThemeModeProvider>
      </LanguageProvider>
  )
}

export default App
