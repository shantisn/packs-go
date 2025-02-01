import React from 'react'
import Image from './Image'

const TravelCard = ({cardtitle,cardtext,src,alt}) => {
  return (
    <div className= 'w-[370px]  py-[63px] px-[54px] shadow-2xl rounded-[14px] '>
    <Image src={src} alt={alt}/>
    <h4 className='text-2xl text-primary font-medium font-pop pt-10 pb-5'>{cardtitle}</h4>
    <p className='text-base text-third font-normal font-pop'>{cardtext}</p>

    </div>
  )
}

export default TravelCard