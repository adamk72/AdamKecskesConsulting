import PropTypes from 'prop-types';
import React from 'react';

import DesktopContainer from './DesktopContainer';
import MobileContainer from './MobileContainer';
import Footer from './Footer';

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>
      {children}
      <Footer />
    </DesktopContainer>
    <MobileContainer>
      {children}
      <Footer />
    </MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
};

export default ResponsiveContainer;
