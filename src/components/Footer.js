import React from 'react';
import { Segment } from 'semantic-ui-react';

const Footer = ({ children }) => {
  return (
    <React.Fragment>
      <div id='footer'>
        <Segment basic vertical style={{ padding: '5em 0em' }}>
          {children}
        </Segment>
      </div>
    </React.Fragment>
  );
};

export default Footer;
