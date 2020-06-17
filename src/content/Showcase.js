import React from 'react';
import SimpleCard from '../components/SimpleCard';
import { __remotepath__ } from '../config';

import { Card, Grid, Image, Segment } from 'semantic-ui-react';

const Showcase = (props) => {
  return (
    <Segment basic id='showcase' style={{ padding: '4em 4em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column floated='left' width={8}>
            <Card centered raised className='largeCard'>
              <Image
                src={
                  __remotepath__ +
                  'images/mrs_mcquaries_chair_sydney_australia.jpg'
                }
                wrapped
                fluid
                rounded
                size='medium'
                ui={false}
              />
              <Card.Content>
                <Card.Header>Adam Kecskes</Card.Header>
                <Card.Description>
                  <span style={{ fontStyle: 'italic' }}>
                    My last name is pronounced 'kes-kes'; the 'c' is silent for
                    good luck.
                  </span>
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column width={8}>
            <SimpleCard
              className='top'
              body="Hi! I'm Adam Kecskes, and I've done a lot to help companies thrive over the 20 years of my career in technology. Here's how I consider myself; I'm a:"
            />
            <SimpleCard className='announce' title='Operational Optimizer' />
            <SimpleCard className='announce' title='Program Orchestrator' />

            <SimpleCard className='announce' title='Customer Advocate' />
            <SimpleCard body="... and so much more. Most importantly, I'm here to help your company overcome a range of problems." />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default Showcase;
