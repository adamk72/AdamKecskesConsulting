import React from 'react';
// const INIT_CHILD = String.fromCharCode(8943); // centered horizontal ellipsis

const SectionDivider = ({ content = '\u2026' }) => {
  return (
    <div>
      <h6 className='sectionDivider horizontal'>{content}</h6>
    </div>
  );
};

export default SectionDivider;
