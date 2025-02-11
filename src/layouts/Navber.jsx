
import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from'../components/Image'
import LogoImage from'../assets/logo1.png'
import List  from '../components/List'
import Button from '../components/button'
import {Link} from 'react-router-dom'

const Navber = () => {
  return (
    <nav className='py-12' >

 <Container>
    <Flex className='items-center'>
        <div className='w-2/12'> <Image src={LogoImage}/></div>
        <div className='w-8/12'>
        <ul className='flex gap-x-10 justify-center'>
          
           
           <Link to ='/'> <List liText='Home'/></Link>
           <Link to ='/tours'> <List liText='Tours'/></Link>
           <Link to ='/booking'> <List liText='Booking'/></Link>
           <Link to ='/pages'> <List liText='Pages'/></Link>
           <Link to ='/features'> <List liText='Features'/></Link>
           <Link to ='/blogs'> <List liText='Blogs'/></Link>
           </ul>
        </div>
        <div className='w-2/12 text-right'>
        <Link to ='/pages'><Button text='Book Now'/></Link>
        </div>
    </Flex>
 </Container>

    </nav>
  )
}

export default Navber