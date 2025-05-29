import React from 'react'
import Container from '../components/Container'
import CommonHeading from '../components/CommonHeading'
import CommonPara from '../components/CommonPara'
import Flex from '../components/Flex'
import Button from '../components/button'
const Destination = () => {
  return (
    <section className=' px-1 mt-40 md:mt-5'>
    <Container>
     <CommonHeading className='mx-16 md:mx-0'text='Explore Top Destination'/>
     <CommonPara className=' mx-8 md:w-[400px] md:text-base text-[#FFFFFF] font-pop font-normal pb-[30px]' text='We are self-service data analytics software that lets you create visually appealing data visualizations 
     and insightful dashboards in minutes.'/>
     <Flex className='space-x-1.5'>
     <Button className='text-xs md:px-9 md:py-4' text='Popular Destination'/>
     <Button className='text-xs md:px-9 md:py-4' text='Destination For Art & Culture'/>
     <Button className='text-xs md:px-9 md:py-4' text='Destination For Outdoor Adventer'/>
     <Button className='text-xs md:px-9 md:py-4' text='Mountain'/>
     <Button className='text-xs md:px-9 md:py-4' text='Beach Destination'/>
     </Flex>
    </Container>
    </section>
  )
}

export default Destination