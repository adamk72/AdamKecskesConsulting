import React from 'react';
import Card from 'react-bootstrap/Card';

const SimpleCard = ({ indent, title, body, className = null, children }) => {
  return (
    <Card
      className={className ? className + ' simplecard' : 'simplecard'}
      style={{ textIndent: indent ? indent : null }}
    >
      <h3>{title}</h3>
      <p style={{ textIndent: indent ? indent : null }}>{body}</p>
      {children}
    </Card>
  );
};

export default SimpleCard;
