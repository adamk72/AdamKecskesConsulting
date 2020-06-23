import React from 'react';

import Image from 'react-bootstrap/Image';

const CircularSegment = ({ image }) => {
  return (
    <React.Fragment>
      <Image fluid src={image} roundedCircle />
    </React.Fragment>
  );
};
export default CircularSegment;
