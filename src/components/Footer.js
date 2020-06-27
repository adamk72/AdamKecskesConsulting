import React from 'react';
import SectionDivider from '../components/SectionDivider';

const Footer = ({ children }) => {
  return (
    <>
      <SectionDivider />
      <div id='footer'>
        <div style={{ padding: '5em 0em' }}>{children}</div>
      </div>
    </>
  );
};

export default Footer;
