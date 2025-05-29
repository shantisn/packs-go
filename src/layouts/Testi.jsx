import React from 'react';
import Container from '../components/Container';
import Image from '../components/Image';
import TestiImage1 from'../assets/TestiImg1.png'
import vactorOne from'../assets/vactorOne.png'
import TestiImg2 from'../assets/TestiImg2.png'
import TestiImg3 from'../assets/TestiImg3.png'
import TestiImg4 from'../assets/TestiImg4.png'
import TestiImg5 from'../assets/TestiImg5.png'
import TestiImgOne from'../assets/TestiImgOne.png'
import CommonPara from '../components/CommonPara';
import Flex from'../components/Flex'
import CommonHeading from '../components/CommonHeading';
const Testi = () => {
  return (
    <section className='md:my-5 '>
       
      <Container>
      <Flex className='md:!flex !block'>
        <div className='md:w-1/2 relative'> <Image className='absolute top-14 md:top-[120px] right-[20px] md:right-[40px]' src={TestiImage1}/>
     <Image className='w-20 md:w-[100px] absolute top-[250px]  md:top-[400px] right-[230px] md:right-[500px]' src={TestiImg2}/>
     <Image className='md:w-[80px] absolute top-44  md:top-[270px] right-[140px]  md:right-[300px]' src={TestiImg3}/>
     <Image className='w-20 md:w-[100px] absolute top-[330px] md:top-[450px] right-[130px] md:right-[300px]' src={TestiImg4}/>
     <Image className='md:w-[70px] absolute top-[250px]  md:top-[400px] right-5 md:right-[50px]' src={TestiImg5}/>
        </div>
        <div className='mx-4 pb-20 md:w-1/2 md:pl-[179px] '> 
        <CommonHeading  className='pt-[450px] md:pt-[264px]  text-primary text-10 font-pop font-semibold' text='Testimonial'/>
        <Image className=' pt-[25px]'  src={vactorOne}/>
        <CommonPara className='  pt-[20px]' text='Since 2014, we’ve helped more than 500,000 people  of all ages enjoy the best outdoor
         experience of their lives. Whether it’s for one day or a t-wo-week vacation'/>
       
            <p className=' text-primary text-xl font-semibold font-pop'>Farah smith - Visitor</p>
            <Image className='w-[20] pt-[18px]' src={TestiImgOne}/>
     
        </div>
       
      </Flex>
      </Container>
    </section>
  );
}

export default Testi;
