import React from 'react';
import Image from 'react-bootstrap/Image';

const CircularEnclose = ({ image }) => {
  return (
    <React.Fragment>
      <div className='circularEnclose'>
        <Image src={image} width='225' height='auto' />
      </div>
    </React.Fragment>
  );
};
export default CircularEnclose;
