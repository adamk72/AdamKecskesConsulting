import React from 'react';
import SimpleCard from '../components/semantic-ui/SimpleCard';

function Copyright() {
  return (
    <SimpleCard>
      Copyright © Adam Kecskes {new Date().getFullYear()}
      {'.'}
    </SimpleCard>
  );
}

export default Copyright;
