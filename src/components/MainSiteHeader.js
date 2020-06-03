import React from 'react';
import PropTypes from 'prop-types';
import { Container, Header } from 'semantic-ui-react';
import SocialList from './SocialList';
/* eslint-disable react/no-multi-comp */
/* Heads up! MainSiteHeader uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const MainSiteHeader = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='Adam Kecskes'
      style={{
        fontSize: mobile ? '2em' : '4em',
        marginTop: mobile ? '0.5em' : '1em',
      }}
    />
    <Header
      as='h4'
      content='Specializing in No-Code &amp; Low-code Operations Optimization'
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.13em' : '.25em',
      }}
    />
    <Header>
      <SocialList inverted='true' />
    </Header>
  </Container>
);

MainSiteHeader.propTypes = {
  mobile: PropTypes.bool,
};

export default MainSiteHeader;
