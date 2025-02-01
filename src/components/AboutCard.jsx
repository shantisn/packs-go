import React from 'react'
import Image from'./Image'

const AboutCard = ({cardTitle,cardText,src}) => {
  return (
    <div className=' group w-[275px] px-9 py-[62px] bg-white hover:bg-secondary  duration-500 rounded-[17px] '>
       <div className='w-[74px] h-[78px] flex justify-center items-center bg-[#7d87841a] group-hover:bg-white duration:500 rounded-[14px]'>{src}</div>
        <h4 className='text-[40px] text-black font-semibold group-hover:text-white font-pop pt-5'>{cardTitle}</h4>
        <p className='text-base text-black font-normal group-hover:text-white font-pop'>{cardText}</p>
        
    </div>
  )
}

export default AboutCard