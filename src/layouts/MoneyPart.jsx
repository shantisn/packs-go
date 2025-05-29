import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import CommonHeading from '../components/CommonHeading'
import CommonPara from'../components/CommonPara'
import { TbSquareRounded, TbSquareRoundedFilled } from 'react-icons/tb'
import MoneyimgOne from'../assets/MoneyimgOne.png'
import MoneyimgTwo from'../assets/MoneyimgTwo.png'
import MoneyimgThree from'../assets/MoneyimgThree.png'
import Image from'../components/Image'
import { IoIosArrowUp } from 'react-icons/io'


import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
const MoneyPart = () => {
  return (
    <section className='px-4 py-10 md:py-[100px]'>
        <Container>
            <Flex className='md:!flex !block'>
          <div className='md:w-2/4'>
          <CommonHeading className=' text-center md:text-10  md:w-[450px]  text-third front-pop front-semibold' text='100% Money back Guarantee If you Cancel'/>
          <CommonPara className='text-center text-base md:pt-5 pb-10   md:w-[420px] text-third front-pop front-normal' text='We Promises in this case. We still want
           to refund your money when you cancel order'/>
           <div className=' px-4 md:w-[400px] bg-[#a7c8df] py-2 md:p-5 rounded-[5px]'>
            <Flex className='gap-x-3 items-center '>
            <TbSquareRoundedFilled className='text-secondary ' />
                <p className='md:text-lg text-primary front-pop front-medium'>Friendly, Quick, Easy</p>
                <IoIosArrowUp className='text-secondary'  />
                </Flex>
                <p className='text-third md:text-base front-pop front-normal pt-[10px] pb-5 md:w-[300px]'>Business messaging that feels just like the messenger apps you and your customers 
                use every day.</p>

           </div>
           <div className='leading-4'>
           <Flex className='gap-x-[9px] items-center pt-5 '>
            <TbSquareRounded  className='text-sm md: text-secondary ' />
                <p className='md:text-lg text-primary front-pop front-medium '>Fast Response Answer </p>
                <MdOutlineKeyboardArrowDown  className='text-secondary'  />
                </Flex>
           <Flex className='gap-x-[9px] items-center py-[25px] '>
            <TbSquareRounded  className='text-sm md: text-secondary ' />
                <p className='md:text-lg text-primary front-pop front-medium'>Money Back Guarantee</p>
                <MdOutlineKeyboardArrowDown  className='text-secondary'  />
                </Flex>
           </div>
          </div>
          <div className='md:w-2/4 relative'>
         {/* <Flex className='items-center'> */}
         <Image className='' src={MoneyimgTwo}/>
         <Image className='absolute h-[100px] right-[150px] top-36' src={MoneyimgThree}/>

         {/* </Flex> */}
          <Image className='bottom-[-185px]  right-0 absolute  md:bottom-[-40px] md:right-[22px]' src={MoneyimgOne}/>
          <div className='bg-white  py-1 px-1 md:py-3 md:px-6 rounded-[8px] shadow-md absolute bottom-[-50px] md:bottom-[105px] left-[100px] md:left-[43px]'>Hi, Can you help me? 😔</div>
          <div className='bg-white py-1 px-1 md:py-3 md:px-6 rounded-[8px] shadow-md absolute  bottom-[-100px] md:bottom-[40px] left-[90px] md:left-[70px]'>Can I get my money back</div>
          <div className='bg-white py-1 px-0 md:py-3 md:px-6 rounded-[8px] shadow-md absolute bottom-[-180px] md:bottom-[-30px] left-[50px]'>Thanks for your help!! 😍😍😍😍</div>
          </div>
            </Flex>

        </Container>

    </section>
  )
}

export default MoneyPart