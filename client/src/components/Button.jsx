import React, { useContext } from 'react'
import { ThemeModeContext } from '../context/ThemeModeContext'

const Button = () => {

  const { darkMode, setDarkMode } = useContext(ThemeModeContext);

  return (
      <button onClick={() => setDarkMode(!darkMode)}>Button</button>
  )
}

export default Button