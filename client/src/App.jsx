import React from "react"
import { ThemeModeProvider } from "./context/ThemeModeContext.jsx"
import { LanguageProvider } from "./context/LanguageContext.jsx"
import Button from "./components/Button.jsx"

function App() {

  return (
    <LanguageProvider>
      <ThemeModeProvider>
        <div className='text-5xl text-amber-300 dark:text-amber-700 dark:bg-gray-800'>App</div>
        <Button />
      </ThemeModeProvider>
    </LanguageProvider>
  )
}

export default App
