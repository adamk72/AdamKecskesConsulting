import React from 'react';

import { Header } from 'semantic-ui-react';

const SimpleCard = ({
  indent,
  title,
  body,
  className = null,
  children,
  marker = null,
}) => {
  return (
    <div
      className={className ? className + ' simplecard' : 'simplecard'}
      style={{ textIndent: indent ? indent : null }}
    >
      <Header as='h3'>{title}</Header>
      <p style={{ textIndent: indent ? indent : null }}>{body}</p>
      {children}
    </div>
  );
};

export default SimpleCard;
