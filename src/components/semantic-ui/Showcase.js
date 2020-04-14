import React from 'react';
import SimpleCard from './SimpleCard';

import { Grid, Image, Segment } from 'semantic-ui-react';

const Showcase = (props) => {
  return (
    <Segment className='showcase' style={{ padding: '4em 4em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column floated='left' width={6}>
            <Image
              bordered
              rounded
              size='large'
              src='/images/mrs_mcquaries_chair_sydney_australia.jpg'
            />
          </Grid.Column>
          <Grid.Column width={8}>
            <SimpleCard
              className='top'
              title='We Help Companies and Companions'
              body='We can give your company superpowers to do things that they never
            thought possible. Let us delight your customers and empower your
            needs... through pure data analytics.'
            />
            <SimpleCard
              title='We Make Bananas That Can Dance'
              body="Yes that's right, you thought it was the stuff of dreams, but even
              bananas can be bioengineered."
            />
          </Grid.Column>
        </Grid.Row>
        {/* <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button size='huge'>Check Them Out</Button>
          </Grid.Column>
        </Grid.Row> */}
      </Grid>
    </Segment>
  );
};

export default Showcase;
