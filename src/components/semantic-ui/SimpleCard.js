import React from 'react';

import { Header } from 'semantic-ui-react';

const SimpleCard = ({ title, body, className, children }) => {
  return (
    <div className={className + ' simplecard'}>
      <Header as='h3'>{title}</Header>
      <p>{body}</p>
      {children}
    </div>
  );
};

export default SimpleCard;
