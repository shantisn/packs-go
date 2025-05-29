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
    <section className='bg-slate-200  pt-[70px] pb-[150px] md:py-[150px] relative'>
      <div><Image className='hidden md:block absolute top-[450px] right-[290px] w-[30%] z-10' src={BannerOne}/></div>
      <div><Image className='absolute top-[120px]  right-[0px] md:top-[336px] md:right-[10px] w-[40%]  z-10 sm:top-[175px] sm:w-[30%] sm:left-[224px]' src={BannerTwo}/></div>
        <Container>
        <Flex clasName='!block'>
        <div className='w-1/2 px-3'>
        <h1 className=' text-3xl w-[250px]  md:text-[65px] md:w-[550px] text-primary font-semibold font-pop leading-[50px] md:leading-[80px]'>StartExploring to 
            Find Inner Peace by Traveling</h1>
           <p className='w-[230px] md:w-[500px] text-base text-third font-normal font-pop   pt-8 pb-10 '>Lost yourself with Vacation and Travel into the place that you never visit before. We have thousand places in our database for you.</p>
           <Button className='mb-10  py-3 px-4'  text='Discover Now'/>

         <div className=' md:w-[865px]  bg-white rounded-tr-[10px] rounded-b-[10px] absolute top-[470px] md:top-[600px] md:left-[100px] mr-1 z-50'>
          
          <Flex className='py-6 md:py-7 md:px-6 md:gap-x-[70px] '>
          <InputCard para1='Loacation' para2='Enter your Location' icon1={ <IoLocationOutline className='text-secondary'/>}/>
          <InputCard para1='Date' para2=' When you start?' icon1={<CiCalendarDate  className='text-secondary'/>}/>
          <InputCard para1='People' para2='How many people'icon1={ <BsFillPeopleFill  className='text-secondary'/>}/>
         
          <button className='px-[20px] py-[15px] mr-2  md:p-[30px] bg-secondary rounded-[10px]'><IoIosSearch className='text-white text-xl' /></button>
          </Flex>
         

         </div>
        
         </div>
      
       
       
        </Flex>
       
        </Container>
    </section>
  )
}

export default Banner