import React from 'react';
import Container from '../components/Container';
import Flex from '../components/Flex';
import Image from '../components/Image';
import FooterUl from '../components/Footerul';
import logo1 from'../assets/logo1.png'
import { FaFacebook } from 'react-icons/fa';
import { IoLogoLinkedin } from 'react-icons/io';
import { FaTwitter } from 'react-icons/fa6';
import { FaPinterest } from 'react-icons/fa';



const Footer = () => {
  return (
    <section className='pt-20 pb-[130px]'>
      <Container>
        <Flex>
            <div className='w-6/12'>
            <Image src={logo1}/>
            <ul className='flex gap-x-[30px] py-[30px]'>
                <li><FaFacebook className='text-4xl text-blue-500' /></li>
                <li><IoLogoLinkedin className='text-4xl text-blue-500' /></li>
                <li><FaTwitter className='text-4xl text-blue-500'/></li>
                <li><FaPinterest className='text-4xl text-red-600' /></li>
            </ul>
            <ul className='list-none font-pop font-normal text-base text-third flex flex-col gap-y-1.5'>
              <li>Business number : +12 12489877</li>
              <li>Doctor 3131 Drive, LA, California</li>
              <li>Complaints/Enqures: pack&go@gmail.com</li>
            </ul>
            </div>
            <div className='w-2/12'>
            <FooterUl headingSix='Tour' liOne='Thailand' liOneRef='/thailand' liTwo='Vietnam' liTwoRef='/vietnam'liTree='korea'liTreeRef='/korea' liFour='Mexico' liFourRef='/Mexico'liFive='Italy' liFiveRef='/Italy' />
            </div>
            <div className='w-2/12'>
            <FooterUl headingSix='Suport' liOne='Acount' liTwo='Legal' liTree='Contact' liFour='Mexico' liFive='Italy'/>
            </div>
            <div className='w-2/12'>
            <FooterUl headingSix='Useful Pages' liOne='Deals' liTwo='Facts' liTree='Why chose Us' liFour='Subscribe' />
            </div>
            
        </Flex>
      </Container>
     
    </section>
  );
}

export default Footer;
