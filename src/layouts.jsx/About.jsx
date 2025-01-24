import React from 'react';
import Container from '../components/Container';
import Flex from '../components/Flex';
import CommonPara from '../components/CommonPara';
import CommonHeading from '../components/CommonHeading';
import Button from '../components/button';
import { IoMdCheckmark } from "react-icons/io";
import AboutCard from '../components/AboutCard';
import AbCard1 from '../assets/AbCard1.png'

const About = () => {
  return (
    <section className='py-[150px] bg-[#a8a4a4]'>

      <Container>
    <Flex>
        <div className='w-1/2'>
        <CommonHeading className= 'w-[418px]' text='Go Travel, Discover Remember Us'/>
        <CommonPara className= 'w-[516px]' text='We are self-service data analytics software that lets you create visually appealing data visualizations and insightful dashboards in minutes.'/>
  
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
        
       
        <Button className='mt-[30px]' text='Discover Place'/>
        </div>
        <div className='w-1/2'>
        <Flex className='flex-wrap gap-[30px]'>
        <AboutCard src={AbCard1} cardTitle='500K+' cardText='Satisfied Clients'/>
        <AboutCard src={AbCard1} cardTitle='500K+' cardText='Satisfied Clients'/>
        <AboutCard src={AbCard1} cardTitle='500K+' cardText='Satisfied Clients'/>
        <AboutCard src={AbCard1} cardTitle='500K+' cardText='Satisfied Clients'/>
        </Flex>
        </div>

    </Flex>
      </Container>
    </section>
  );
}

export default About
