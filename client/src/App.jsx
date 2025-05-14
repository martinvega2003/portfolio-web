import React, {useContext} from "react"
import { ThemeModeProvider } from "./context/ThemeModeContext.jsx"
import Button from "./components/Button.jsx"

function App() {

  return (
    <ThemeModeProvider>
      <div className='text-5xl text-amber-300 dark:text-amber-700 dark:bg-gray-800'>App</div>
      <Button />
    </ThemeModeProvider>
  )
}

export default App
