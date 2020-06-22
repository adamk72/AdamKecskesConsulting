import React from 'react';
// const INIT_CHILD = String.fromCharCode(8943); // centered horizontal ellipsis

const SegmentDivider = (props) => {
  return (
    <h4 className='header'>
      {/* style={{ margin, textTransform: 'uppercase' }} */}
      {props.content}
    </h4>
  );
};

export default SegmentDivider;
