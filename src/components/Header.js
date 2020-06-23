import React from 'react';

const Header = ({ children }) => {
  return (
    <div id='header'>
      <div style={{ padding: '2em 0em' }}>{children}</div>
    </div>
  );
};

export default Header;
