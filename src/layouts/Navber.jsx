
import React, { useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from'../components/Image'
import LogoImage from'../assets/logo1.png'
import List  from '../components/List'
import Button from '../components/button'
import {Link} from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'

const Navber = () => {
   let [show,setShow]=useState(false)
   let handleClick=()=>{
      setShow(!show)
   }
  return (
   <>
   <nav className='py-12 hidden md:block' >

<Container>
   <Flex className='items-center'>
       <div className='w-2/12'><Image src={LogoImage}/></div>
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
   {/* mobile device start */}
   <nav className='p-3 block md:hidden'>
      <Flex className='items-center space justify-between'>
      <Image className='w-[50%] sm:w-[30%]' src={LogoImage}/> 
    <div onClick={handleClick} className='rilative'>
    {
        show ?<ImCross />:<FaBars/>
    }
    </div>
      </Flex>
    {
       show &&   <ul className=' w-full absolute top-[72px] left-0 flex flex-col z-50 bg-purple-500 justify-center items-center md:gap-y-2 md:py-3 sm:gap-y-1 py-1'>
     <Link to='/'>
     <li className='text-white text-base font-pop font-normal'>Home</li>
     </Link>
       <Link to='/tours'>
       <li className='text-white text-base font-pop font-normal'>Tours</li>
       </Link>
       <Link to='/booking'>
       <li className='text-white text-base font-pop font-normal'>Booking</li>
       </Link>
      <Link to='/pages'>
      <li className='text-white text-base font-pop font-normal'>Pages</li>
      </Link>
    <Link to='/features'>
    <li className='text-white text-base font-pop font-normal'>Features</li>
    </Link>
       <Link to='/blogs'>
       <li className='text-white text-base font-pop font-normal'>Blogs</li>
       </Link>
       
      
    </ul>
    }
   </nav>
   {/*mobile device start   */}

   </>
  )
}

export default Navber