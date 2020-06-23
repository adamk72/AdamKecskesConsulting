import React from 'react';

const Footer = ({ children }) => {
  return (
    <div id='footer'>
      <div style={{ padding: '5em 0em' }}>{children}</div>
    </div>
  );
};

export default Footer;
