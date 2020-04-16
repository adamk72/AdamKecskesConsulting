import React from 'react';

import { Segment } from 'semantic-ui-react';

const CircularSegment = ({ children, radius = 175 }) => {
  return (
    <React.Fragment>
      <Segment circular style={{ width: radius, height: radius }} inverted>
        {children}
      </Segment>
    </React.Fragment>
  );
};
export default CircularSegment;
