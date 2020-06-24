import React from 'react';
// const INIT_CHILD = String.fromCharCode(8943); // centered horizontal ellipsis

const SectionDivider = (props) => {
  return (
    <div>
      <h6 className='sectionDivider horizontal'>{props.content}</h6>
    </div>
  );
};

export default SectionDivider;
