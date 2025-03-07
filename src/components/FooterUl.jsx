import React from 'react'
import {Link} from'react-router-dom'
const FooterUl = ({headingSix, liOne,liOneRef, liTwo,liTwoRef, liTree, liTreeRef, liFour, liFourRef,liFive,liFiveRef }) => {
  return (
    <div>
   <h5 className='font-pop font-semibold text-2xl text-primary'>{headingSix}</h5>
    <ul className='py-7 flex flex-col gap-y-2 font-pop font-normal text-base text-third'>
      <li> <Link to={liOneRef}>{liOne}</Link></li>
      <li><Link to={liTwoRef}>{liTwo}</Link></li>
      <li><Link to={liTreeRef}>{liTree}</Link></li>
      <li><Link to={liFourRef}>{liFour}</Link></li>
      <li><Link to={liFiveRef}>{liFive}</Link></li>
      
    </ul>
    </div>
  )
}

export default FooterUl