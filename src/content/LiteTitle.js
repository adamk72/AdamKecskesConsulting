import React from 'react';
import PropTypes from 'prop-types';
import { Row, Container, Col } from 'react-bootstrap';
import SocialList from '../components/SocialList';

const LiteTitle = ({ mobile }) => (
  <Container className='liteTitle'>
    <Row>
      <Col className='header title top-item col-sm'>
        <h1>Adam Kecskes</h1>
      </Col>
      <Col className='header bottom-item col-sm'>
        <SocialList />
      </Col>
    </Row>
  </Container>
);

LiteTitle.propTypes = {
  mobile: PropTypes.bool,
};

export default LiteTitle;
