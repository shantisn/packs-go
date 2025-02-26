import React from 'react'
import Image from'./Image'
import Flex from'./Flex'
import { IoLocationOutline } from "react-icons/io5";
const SlpaceCard = ({image,titale, icon, text}) => {
  return (
    <div className='w-[300px]  bg-white hover:shadow-md duration:500 p-5 rounded-[14px]'>
     <div className='w-[250px] h-[150px] rounded-[14px] relative '>
     <Image className='w-full rounded-[14px] ' src={image}/>
     <a className='absolute z-50 top-5 right-5 w-10 h-10 bg-white text-xl text-red-500 rounded-[50%] flex justify-center items-center' href="">{icon}</a>
     </div>
     <h4 className='text-2xl text-primary font-pop  font-medium pt-5'>{titale}</h4>
     <p className='text-base text-third font-pop  font-normal py-5'>Consectetur adipiscing elit, sed do eiusmod tempor incididunt 
      ut labore et dolore magna aliqua minim veniam</p>
      
        <h5 className='text-xl  flex items-center text-third font-pop font-medium '><IoLocationOutline /><span className='text-base text-primary font-pop pl-2 font-normal'>{text}</span></h5>
     
    </div>
  )
}

export default SlpaceCard