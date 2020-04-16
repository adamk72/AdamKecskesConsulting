import React from 'react';
import { Divider } from 'semantic-ui-react';
const INIT_CHILD = String.fromCharCode(8943); // centered horizontal ellipsis

const SegmentDivider = ({ children = INIT_CHILD, margin = '2em, 0em' }) => {
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
