import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Button from '../components/button'
import Image from '../components/Image'
import BannerOne from '../assets/BannerTwo.png'
import BannerTwo from '../assets/BannerOne.png'
import InputCard from '../components/InputCard'
import { IoIosSearch } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import { BsFillPeopleFill } from "react-icons/bs";

const Banner = () => {
  return (
    <section className='bg-slate-200 py-[150px] relative'>
      <div> <Image className='absolute top-[450px] right-[284px] w-[30%] z-10' src={BannerOne}/></div>
      <div> <Image className='absolute top-[336px] right-[10px] w-[40%]  z-10' src={BannerTwo}/></div>
        <Container>
        <Flex>
        <div className='w-1/2'>
        <h1 className='w-[550px] text-[65px] text-primary font-semibold font-pop leading-[80px]'>StartExploring to 
            Find Inner Peace 
             by Traveling</h1>
           <p className=' w-[500px] text-base text-third font-normal font-pop pt-8 pb-10 '>Lost yourself with Vacation and Travel into the place that you never visit before. We have thousand places in our database for you.</p>
          <Button className='mb-10' text='Discover Now'/>

         <div className='w-[865px] bg-white rounded-tr-[10px] rounded-b-[10px] absolute top-[600px] left-[100px] z-50'>
          
          <Flex className='py-7 px-6 gap-x-[70px]'>
          <InputCard para1='Loacation' para2='Enter your Location' icon1={ <IoLocationOutline className='text-secondary' />}/>
          <InputCard para1='Date' para2=' When you start?' icon1={<CiCalendarDate  className='text-secondary'/>}/>
          <InputCard para1='People' para2='How many people'icon1={ <BsFillPeopleFill  className='text-secondary'/>}/>
         
          <button className='p-[30px] bg-secondary rounded-[10px]'><IoIosSearch className='text-white text-xl' /></button>
          </Flex>
         

         </div>
        
         </div>
      
       
       
        </Flex>
       
        </Container>
    </section>
  )
}

export default Banner