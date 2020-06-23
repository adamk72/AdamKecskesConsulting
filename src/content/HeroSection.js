import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import SocialList from '../components/SocialList';

const HeroSection = ({ mobile }) => (
  <Container>
    <h1
      style={{
        fontSize: mobile ? '2em' : '4em',
        marginTop: mobile ? '0.5em' : '1em',
      }}
    >
      Adam Kecskes
    </h1>

    <h4
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.13em' : '.25em',
      }}
    >
      Specializing in No-Code &amp; Low-code Operations
    </h4>
    <h3>
      <SocialList />
    </h3>
  </Container>
);

HeroSection.propTypes = {
  mobile: PropTypes.bool,
};

export default HeroSection;
