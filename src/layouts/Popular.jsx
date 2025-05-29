import React from 'react';
import CommonHeading from'../components/CommonHeading'
import Image1 from'../assets/PopularImage1.png'
import Image2 from'../assets/PopularImage2.png'
import Image3 from'../assets/PopularImage3.png'
import Image4 from'../assets/PopularImage4.png'
import Image5 from'../assets/PopularImage5.png'
import CommonPara from '../components/CommonPara'
import  Container from '../components/Container';
import  Flex from'../components/Flex'
import PopularCard from '../components/PopularCard';
const Popular = () => {
  return (
    <section className='w-[150px mt-[px] md:mb-[200px] mb-[100px]'>
        <Container>
        <CommonHeading className=' text-[24px] text-center' text='Popular Destination'/>
        <CommonPara className='text-center mx-auto md:w-[550px] pt-4 pb-[50px]' text='We are self-service data analytics software that lets you create visually appealing data visualizations and 
        insightful dashboards in minutes.'/>
       </Container>
      <Flex className=' justify-center'>
      <PopularCard image={Image1} titale='Lake Thun, Switzerland'/>
      <PopularCard image={Image2} titale='Mount Agung, Bali'/>
      <PopularCard image={Image3} titale='Venice, Italy'/>
      <PopularCard image={Image4} titale='Paris, France'/>
      <PopularCard image={Image5} titale='Santorini, Greece'/>
      </Flex>
      
    </section>
  );
}

export default Popular