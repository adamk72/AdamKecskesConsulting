import React from 'react';

const Footer = ({ children }) => {
  return (
    <React.Fragment>
      <div id='footer'>
        <div style={{ padding: '5em 0em' }}>{children}</div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
