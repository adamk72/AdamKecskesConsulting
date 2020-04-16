import React from 'react';
import PropTypes from 'prop-types';
import { Container, Header } from 'semantic-ui-react';
/* eslint-disable react/no-multi-comp */
/* Heads up! MainSiteHeader uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const MainSiteHeader = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='Adam Kecskes Consulting'
      style={{
        fontSize: mobile ? '2em' : '4em',
        marginTop: mobile ? '0.5em' : '1em',
      }}
    />
    <Header
      as='h2'
      content='Software, Systems, &amp; Service'
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1em',
      }}
    />
  </Container>
);

MainSiteHeader.propTypes = {
  mobile: PropTypes.bool,
};

export default MainSiteHeader;
