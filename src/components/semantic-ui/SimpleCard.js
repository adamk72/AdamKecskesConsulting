import React from 'react';

import { Header } from 'semantic-ui-react';

const SimpleCard = ({
  indent,
  title,
  body,
  className,
  children,
  marker = null,
}) => {
  return (
    <div
      className={className + ' simplecard'}
      style={{ textIndent: indent ? indent : null }}
    >
      <Header as='h3'>
        {console.log(marker)}
        <span
          style={{
            fontFamily: marker ? 'Montserrat Alternates' : null,
            fontSize: marker ? '1.5em' : null,
          }}
        >
          {title}
        </span>
      </Header>
      <p style={{ textIndent: indent ? indent : null }}>{body}</p>
      {children}
    </div>
  );
};

export default SimpleCard;
