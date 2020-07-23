import React from 'react';
import PropTypes from 'prop-types';
import { Row, Container } from 'react-bootstrap';
import SocialList from '../components/SocialList';

const MainTitle = ({ mobile }) => (
  <Container className='mainTitle'>
    <Row Row className='justify-content-center header title top-item' as='h1' >
      Adam Kecskes
    </Row >
    <Row className='justify-content-center header sub-title' as='h4'>
      Ethical &amp; Effective Operations
    </Row>
    <Row className='justify-content-center header bottom-item'>
      <SocialList />
    </Row>
  </Container >
);

MainTitle.propTypes = {
  mobile: PropTypes.bool,
};

export default MainTitle;
