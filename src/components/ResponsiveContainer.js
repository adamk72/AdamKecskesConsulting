import PropTypes from 'prop-types';
import React from 'react';

import Footer from './Footer';
import Header from './Header';
import FooterContent from '../content/FooterContent';
import MainMenuFragment from '../content/MainMenuFragment';
import Container from 'react-bootstrap/Container';

const ResponsiveContainer = ({ children }) => (
  <Container>
    <Header>
      <MainMenuFragment />
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
