import React from 'react';
import Image from 'react-bootstrap/Image';

const CircularSegment = ({ image }) => {
  return (
    <React.Fragment>
      <div
        style={{
          borderRadius: '50%',
          width: '300px',
          height: '300px',
          backgroundColor: 'black',
          textAlign: 'center',
        }}
      >
        <Image
          src={image}
          width='225'
          height='auto'
          style={{ marginTop: '36px' }}
        />
      </div>
    </React.Fragment>
  );
};
export default CircularSegment;
