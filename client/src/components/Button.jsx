import React from 'react'

const Button = ({shape = 'rounded', variant = 'default', onClick, className, children}) => {

  let style = `
    ${shape === 'rounded' ? 'rounded-[50px] ' : shape === 'rounded-light' ? 'rounded-md ' : ''}
    hover:bg-transparent px-4 sm:px-8 py-1 text-sm md:text-lg border-2 transition duration-300 cursor-pointer
  `

  switch (variant) {
    case 'default':
      style += ' bg-blue-900 border-blue-900 text-white hover:text-blue-900 '
      break;
    case 'dark':
      style += ' bg-white border-white text-gray-800 hover:text-white '
      break;
  }

  return (
      <button onClick={onClick} className={style}>
        {children}
      </button>
  )
}

export default Button