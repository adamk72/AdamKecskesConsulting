import PropTypes from 'prop-types';
import React from 'react';

import Footer from './Footer';
import Header from './Header';
import FooterContent from '../content/FooterContent';
import Container from 'react-bootstrap/Container';
import HeaderNav from './HeaderNav';

const ResponsiveContainer = ({ children }) => (
  <Container>
    <Header>
      <HeaderNav />
    </Header>
    {children}
    <Footer>
      <FooterContent />
    </Footer>
  </Container>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
};

export default ResponsiveContainer;
