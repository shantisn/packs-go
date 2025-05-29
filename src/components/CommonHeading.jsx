import React from 'react';

const CommonHeading = ({text,className}) => {
  return (
    <h3 className={`md:text-[40px] text-primary font-semibold font-pop ${className}`}> {text}</h3>
  );
}

export default CommonHeading
