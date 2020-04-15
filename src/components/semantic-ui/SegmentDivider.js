import React from 'react';
import { Divider } from 'semantic-ui-react';

const SegmentDivider = ({ children = '...', margin = '2em, 0em' }) => {
  return (
    <Divider
      as='h4'
      className='header'
      horizontal
      style={{ margin, textTransform: 'uppercase' }}
    >
      {children}
    </Divider>
  );
};

export default SegmentDivider;
