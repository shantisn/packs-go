import React from 'react';
import Flex from './Flex';

import { MdKeyboardArrowDown } from "react-icons/md";

const InputCard = ({icon1,para1, para2}) => {
  return (
    <div>
       <Flex className='gap-x-2 items-center'>
        {icon1}
      
        <p className='text-base text-four font-bold font-nun'>{para1}</p>
        <MdKeyboardArrowDown className='text-secondary'/>
       </Flex>
        <p className='text-base text-third font-normal font-nun pt-2 pl-6'>{para2}</p>
      
    </div>
  );
}

export default InputCard
