import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ThemeModeProvider } from "./context/ThemeModeContext"
import { LanguageProvider } from "./context/LanguageContext"
import Mainpage from "./pages/Mainpage"

function App() {

  return (
      <LanguageProvider>
        <ThemeModeProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Mainpage />} />
            </Routes>
          </BrowserRouter>
        </ThemeModeProvider>
      </LanguageProvider>
  )
}

export default App
