import React from 'react';
import Container from '../components/Container';
import CommonHeading from '../components/CommonHeading';
import CommonPara from '../components/CommonPara'
import TravelCard from '../components/TravelCard';
import  Icon1 from '../assets/TravelIcon1.png'
import Icon2 from '../assets/TravelIcon2.png'
import Icon3 from '../assets/TravelIcon3.png'
import Icon4 from '../assets/TravelIcon4.png'
import Icon5 from '../assets/TravelIcon5.png'
import Icon6 from '../assets/TravelIcon6.png'
import Flex from '../components/Flex';

const Travel = () => {
  return (
    <section className='py-[150px]'>
      <Container>
     <CommonHeading className=" text-center" text='Travel Benefit For User'/>
     <CommonPara className="w-[550px] text-center mx-auto pt-5 pb-[112px]" text='We are self-service data analytics software that lets you create visually appealing data visualizations and insightful dashboards in minutes.'/>
      <Flex className='flex-wrap gap-[30px]'>
      <TravelCard cardtitle='Cheap than Other' cardtext='Travelya is cheaper than other travel agency.'
      src={Icon1}/>
     <TravelCard cardtitle='Secure Payment' cardtext='You can pay your book without doubt again..'
      src={Icon2}/>
     <TravelCard cardtitle='Easy To Book' cardtext='Follow flow, Click, Pay. Wait just wait e-ticket..'
      src={Icon3}/>
     <TravelCard cardtitle='24/7 Support' cardtext='We’re ready help you anytime and anywhere you are...'
      src={Icon4}/>
     <TravelCard cardtitle='Best Offers' cardtext='Inform you about all best offers for all destination...'
      src={Icon5}/>
     <TravelCard cardtitle='Fast Refund' cardtext='If you canceled. We can refund your money 1*12...'
      src={Icon6}/>
      </Flex>
      </Container>
    </section>
  );
}

export default Travel
