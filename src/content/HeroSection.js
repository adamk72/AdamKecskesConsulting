import React from 'react';
import PropTypes from 'prop-types';
import { Row, Container } from 'react-bootstrap';
import SocialList from '../components/SocialList';

const HeroSection = ({ mobile }) => (
  <Container className='heroSection'>
    <Row className='justify-content-md-center header title top-item' as='h1'>
      Adam Kecskes
    </Row>
    <Row className='justify-content-md-center header sub-title' as='h4'>
      Specializing in No-Code &amp; Low-code Operations
    </Row>
    <Row className='justify-content-md-center header bottom-item'>
      <SocialList />
    </Row>
  </Container>
);

HeroSection.propTypes = {
  mobile: PropTypes.bool,
};

export default HeroSection;
