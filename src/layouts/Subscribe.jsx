import React from 'react';
import Container from '../components/Container';
import CommonHeading from '../components/CommonHeading';
import CommonPara from '../components/CommonPara';
const Subscribe = () => {
  return (
    <section className=' pt-20 md:pt-[150px] pb-14 md:pb-[180px] bg-secondary md:my-[100px]'>
    <Container>
    <CommonHeading className='text-white md:w-[580px] text-center mx-auto leading-[50px]'
     text='Subscribe To Get The Latest News About Us'/>
     <CommonPara className='text-[#abd3e4] md:w-[500px] font-pop font-normal text-base text-center mx-2 md:mx-auto py-8'
      text='We Recommended you to subscribe to our newspaperm,

      enter your email below to get daily update about us.'/>
    
    <div className='md:w-[665px] bg-white mx-2 md:mx-auto relative rounded-[5px] p-8 md:p-[50px] '><h5 className='text-base text-[#9D9D9D] font-normal font-pop absolute right-32 md:right-[480px] top-5 md:top-[38px]'>Enter your email address</h5>
      <button className='p-3 md:p-[20px] md:w-[150px] bg-secondary  absolute rounded-[10px] text-[#FFFFFF] top-2 md:top-[18px] right-[20px] text-base font-pop font-semibold'>subscribe</button>
         </div>  
    </Container>
    </section>
  );
}

export default Subscribe;

