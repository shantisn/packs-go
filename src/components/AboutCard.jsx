import React from 'react'
import Image from'./Image'
const AboutCard = ({cardTitle,cardText,src}) => {
  return (
    <div className='w-[275px] px-9 py-[62px] bg-white hover:bg-secondary hover:text-white duration-300 rounded-[17px] '>
        <Image src={src}/>
        <h4 className='text-[40px] text-primary font-semibold font-pop pt-5'>{cardTitle}</h4>
        <p className='text-base text-primary font-normal font-pop'>{cardText}</p>
        
    </div>
  )
}

export default AboutCard