import React from 'react'

const FooterUl = ({headingSix, liOne, liTwo, liTree, liFour, liFive }) => {
  return (
    <div>
   <h5 className='font-pop font-semibold text-2xl text-primary'>{headingSix}</h5>
    <ul className='py-7 flex flex-col gap-y-2 font-pop font-normal text-base text-third'>
      <li>{liOne}</li>
      <li>{liTwo}</li>
      <li>{liTree}</li>
      <li>{liFour}</li>
      <li>{liFive}</li>
      
    </ul>
    </div>
  )
}

export default FooterUl