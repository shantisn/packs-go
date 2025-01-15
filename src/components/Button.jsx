import React from 'react'

const Button=({text,className}) => {
  return (
     <button className={`text-white text-base font-pop font-semibold bg-secondary
     px-9 py-4 rounded-2xl hover:bg-transparent hover:border-secondary hover:text-black  border border:transparent  duration-500 ${className}`}>{text}</button>
  )
}

export default Button 