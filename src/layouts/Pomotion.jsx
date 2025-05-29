import React from 'react';
import  Container from '../components/Container';
import  Flex from '../components/Flex';
import Image from '../components/Image';
import PomotionimgTwo from'../assets/PomotionimgTwo.png'
import PomotionimgOne from'../assets/PomotionimgOne.png'
import CommonHeading from '../components/CommonHeading';
import CommonPara from '../components/CommonPara';
import PomotionLi from '../components/PomotionLi';
const Pomotion = () => {
  return (
    <section className='mx-2 my-10 md:pt-16 md:pb-[100px] '>
    <Container>
   <Flex className=' md:!flex !block'>
 
  <div className='md:w-1/2 relative z-20'><Image className='' src={PomotionimgTwo}/>
  <Image className='top-[250px] right-1 absolute md:bottom-[-190px]  md:right-[20px] z-50'src={PomotionimgOne}/>
   </div>
  <div className='pt-[250px] md:w-1/2 px-[50px]'>
  <CommonHeading className=' md:w-[450px]'text='Always give you promo on every Month / Event'/>
  <CommonPara className='md:w-[360px] py-5' text='We make sure give you a lot of promo every motnh or event based on calendar. If you want, just Subscribe on Newsletter.'/>
  <Flex className=' gap-y-2 flex-wrap gap-x-7 gap md:gap-y-4'>
  <PomotionLi text='25% for New Members'/>
  <PomotionLi text='Cancelled refund 100%'/>
  <PomotionLi text='Up 50% on your birthday'/>
  <PomotionLi text='Reward for 1000% Points'/>
  <PomotionLi text='Cashback 10% via OVO'/>

  </Flex>
  </div>
   </Flex>
    </Container>
  </section>
  );
}

export default Pomotion;
