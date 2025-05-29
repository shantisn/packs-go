import React from 'react';
import Container from '../components/Container';
import Flex from '../components/Flex';
import CommonPara from '../components/CommonPara';
import CommonHeading from '../components/CommonHeading';
import Button from '../components/button';
import { IoMdCheckmark } from "react-icons/io";
import AboutCard from '../components/AboutCard';
import AbCard1 from '../assets/AbCard1.png'
import { HiMiniTrophy } from "react-icons/hi2";
import { MdManageAccounts } from "react-icons/md";
import { ImManWoman } from "react-icons/im";
import { MdAddLocation } from "react-icons/md";

const About = () => {
  return (
    <section className='px-4 py-[50px] md:py-[150px] bg-[#a8a4a4]'>

      <Container>
    <Flex className='md:!flex !block'>
        <div className='md:w-1/2'>
        <CommonHeading className= 'text-[20px] w-[418px]' text='Go Travel, Discover Remember Us'/>
        <CommonPara className= 'md:w-[516px]' text='We are self-service data analytics software that lets you create visually appealing data visualizations and insightful dashboards in minutes.'/>
  
        <Flex className='gap-x-2.5 py-2.5'>
          <IoMdCheckmark  className='text-secondary pt-1 text-2xl'/>
          <CommonPara className='w-[338px]' text='We are self-service data software visually 
             appealing data visualizations'/>
        </Flex>
        <Flex className='gap-x-2.5 py-2.5'>
          <IoMdCheckmark  className='text-secondary pt-1 text-2xl'/>
          <CommonPara className='w-[338px]' text='We are self-service data software visually 
           appealing data visualizations.'/>
        </Flex>
        <Flex className='gap-x-2.5 py-2.5'>
          <IoMdCheckmark  className='text-secondary pt-1 text-2xl'/>
          <CommonPara className='w-[338px]' text='We are self-service data software visually 
           appealing data visualizations.'/>
        </Flex>
        
       
        <Button className='p-4 md:mt-[30px]' text='Discover Place'/>
        </div>
        <div className='pt-12 md:w-1/2'>
        <Flex className='flex-wrap gap-[30px]'>
        <AboutCard src={<MdManageAccounts className=' text-3xl text-[#007F5F]' />} cardTitle='500K+' cardText='Satisfied Clients'/>
        <AboutCard src={<HiMiniTrophy className=' text-3xl text-[#007F5F]' />} cardTitle='250+' cardText='Active Achieve'/>
        <AboutCard src={<ImManWoman className=' text-3xl text-[#007F5F]'/>} cardTitle='15K+' cardText='Active Members'/>
        <AboutCard src={<MdAddLocation className=' text-3xl text-[#007F5F]' />} cardTitle='10K+' cardText='Tour Destinations'/>
        </Flex>
        </div>

    </Flex>
      </Container>
    </section>
  );
}

export default About
