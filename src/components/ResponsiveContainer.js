import PropTypes from 'prop-types';
import React from 'react';

import Footer from './Footer';
import FooterContent from '../content/FooterContent';

import Container from 'react-bootstrap/Container';

const ResponsiveContainer = ({ children }) => (
  <div>
    <Container>
      {children}
      <Footer>
        <FooterContent />
      </Footer>
    </Container>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
};

export default ResponsiveContainer;
