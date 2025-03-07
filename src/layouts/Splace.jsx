
import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import SplaceCard from '../components/SlpaceCard'
import Image1 from '../assets/PopularImage1.png'
import Image2 from '../assets/PopularImage2.png'
import Image3 from '../assets/PopularImage3.png'
import { GiSelfLove } from "react-icons/gi";
import TestiImgOne from'../assets/TestiImgOne.png'




const Splace = () => {
  return (
    <section className='mt-12'>
        <Container>
       
            <Flex className='justify-center'>
            <SplaceCard image={Image1} titale='Lake Thun, Switzerland' icon={<GiSelfLove/>} text='Switzerland'/>
            
            <SplaceCard  image={Image2} titale='Mount Agung, Bali' icon={<GiSelfLove/>} text='Bali'/>
            
            <SplaceCard image={Image3} titale='Lake Venice, Italy'icon={<GiSelfLove/>} text='Italy'/>
            
            </Flex>
            <Image className='w-[20] pt-[30px] mx-auto ' src={TestiImgOne}/>
        
           
        </Container>
    </section>
  )
}

export default Splace