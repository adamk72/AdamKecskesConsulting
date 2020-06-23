import React from 'react';
import PropTypes from 'prop-types';
import { Row, Container } from 'react-bootstrap';
import SocialList from '../components/SocialList';

const HeroSection = ({ mobile }) => (
  <Container>
    <Row className='justify-content-md-center'>
      <h1 className='header title'>Adam Kecskes</h1>
      <h4 className='header sub-title'>
        Specializing in No-Code &amp; Low-code Operations
      </h4>
      <SocialList />
    </Row>
  </Container>
);

HeroSection.propTypes = {
  mobile: PropTypes.bool,
};

export default HeroSection;
