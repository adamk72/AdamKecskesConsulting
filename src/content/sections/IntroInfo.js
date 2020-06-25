import React from 'react';
import SimpleCard from '../../components/SimpleCard';
import { Card, Image } from 'react-bootstrap';

export const CardImage = [
  <Card>
    <Image fluid src={'images/mrs_mcquaries_chair_sydney_australia.jpg'} />
    <Card.Body>
      <Card.Title>Adam Kecskes</Card.Title>
      <Card.Text>
        <span style={{ fontStyle: 'italic' }}>
          My last name is pronounced 'kes-kes'; the 'c' is silent for good luck.
        </span>
      </Card.Text>
    </Card.Body>
  </Card>,
];
export const CardText = [
  <>
    <SimpleCard
      className='top justify'
      body="Hi! I'm Adam Kecskes, and I've done a lot to help companies thrive over the 20 years of my career in technology. Here's how I consider myself; I'm a:"
    />
    <div id='heroProclamation'>
      <SimpleCard className='announce' title='Operational Optimizer' />
      <SimpleCard className='announce' title='Program Orchestrator' />

      <SimpleCard className='announce' title='Customer Advocate' />
    </div>
    <SimpleCard body="... and so much more. Most importantly, I'm here to help your company overcome a range of problems." />
  </>,
];
