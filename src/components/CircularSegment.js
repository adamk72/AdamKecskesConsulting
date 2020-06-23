import React from 'react';

import Image from 'react-bootstrap/Image';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';
import { FaBlackTie } from 'react-icons/fa';

const CircularSegment = ({ image }) => {
  return (
    <React.Fragment>
      <div
        style={{
          display: 'block',
          borderRadius: '50%',
          width: '300px',
          height: '300px',
          backgroundColor: 'black',
          textAlign: 'center',
        }}
      >
        <Image
          fluid
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
