import React from 'react';
import Container from '../components/Container';
import CommonHeading from '../components/CommonHeading';
import CommonPara from '../components/CommonPara';
const Subscribe = () => {
  return (
    <section className='pt-[150px] pb-[180px] bg-secondary my-[100px]'>
    <Container>
    <CommonHeading className='text-white w-[580px] text-center mx-auto leading-[50px]'
     text='Subscribe To Get The Latest News About Us'/>
     <CommonPara className='w-[500px] text-[#e1f7a6] w-[500px] font-pop font-normal text-base text-center mx-auto py-8'
      text='We Recommended you to subscribe to our newspaperm,

      enter your email below to get daily update about us.'/>
    
    <div className='w-[665px] bg-white mx-auto relative rounded-[5px] p-[50px] '><h5 className='text-base text-[#9D9D9D] font-normal font-pop absolute right-[480px] top-[38px]'>Enter your email address</h5>
      <button className='p-[20px] w-[150px] bg-secondary  absolute rounded-[10px] text-[#FFFFFF] top-[18px] right-[20px] text-base font-pop font-semibold'>subscribe</button>
         </div>  
    </Container>
    </section>
  );
}

export default Subscribe;

