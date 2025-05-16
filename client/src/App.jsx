import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ThemeModeProvider } from "./context/ThemeModeContext"
import { LanguageProvider } from "./context/LanguageContext"
import Mainpage from "./pages/Mainpage"
import Navbar from "./components/Navbar"

function App() {

  return (
      <LanguageProvider>
        <ThemeModeProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Mainpage />} />
            </Routes>
          </BrowserRouter>
        </ThemeModeProvider>
      </LanguageProvider>
  )
}

export default App
