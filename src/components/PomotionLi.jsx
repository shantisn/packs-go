import React from 'react'
import Flex from './Flex'
import { GoCheck } from "react-icons/go";
const PomotionLi = ({text, className}) => {
  return (
    <div><Flex className=' gap-x-[10px] items-center'>
    <GoCheck className='text-[#007F5F]' /><li className={`list-none text-base text-third font-pop font-normal ${className}`}>{text}</li>
    </Flex></div>
  )
}

export default PomotionLi