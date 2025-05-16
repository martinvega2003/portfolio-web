import React from 'react'
import { useTheme } from '../context/ThemeModeContext';

const Button = () => {

  const { darkMode, setDarkMode } = useTheme();

  return (
      <button onClick={() => setDarkMode(!darkMode)}>Button</button>
  )
}

export default Button