import React from 'react'
import Container from '../components/Container'
import CommonHeading from '../components/CommonHeading'
import CommonPara from '../components/CommonPara'
import Flex from '../components/Flex'
import Button from '../components/button'
const Destination = () => {
  return (
    <section className='mt-5'>
    <Container>
     <CommonHeading text='Explore Top Destination'/>
     <CommonPara className='w-[400px] text-base text-[#FFFFFF] font-pop font-normal pb-[30px]' text='We are self-service data analytics software that lets you create visually appealing data visualizations 
     and insightful dashboards in minutes.'/>
     <Flex className='space-x-1.5'>
     <Button  text='Popular Destination'/>
     <Button  text='Destination For Art & Culture'/>
     <Button  text='Destination For Outdoor Adventer'/>
     <Button  text='Mountain'/>
     <Button  text='Beach Destination'/>
     </Flex>
    </Container>
    </section>
  )
}

export default Destination