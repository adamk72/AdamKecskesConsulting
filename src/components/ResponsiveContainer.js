import PropTypes from 'prop-types';
import React from 'react';

import DesktopContainer from './DesktopContainer';
import MobileContainer from './MobileContainer';
import Footer from './Footer';
import FooterContent from '../content/FooterContent';

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>
      {children}
      <Footer>
        <FooterContent />
      </Footer>
    </DesktopContainer>
    <MobileContainer>
      {children}
      <Footer>
        <FooterContent />
      </Footer>
    </MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
};

export default ResponsiveContainer;
