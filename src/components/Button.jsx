import React from 'react'

const Button=({text,className})=>{
  return (
     <button className={`text-white text-base font-pop font-semibold bg-secondary
     md:px-9 md:py-4 rounded-2xl md:hover:bg-transparent hover:border-secondary md:hover:text-black  md:border md:border:transparent  md:duration-500 ${className}`}> {text}</button>
  )
}

export default Button 