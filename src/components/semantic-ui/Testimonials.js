import React from 'react';
import SimpleCard from './SimpleCard';

import { Grid, Image, Segment } from 'semantic-ui-react';

const Testimonials = (props) => {
  return (
    <Segment basic style={{ padding: '3em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <SimpleCard
              title='What a Company'
              body='That is what they all say about us'
            />
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <SimpleCard title="I shouldn't have gone with their competitor.">
              <Image avatar src='/images/avatar/large/nan.jpg' />
              <b>Nan</b> Chief Fun Officer Acme Toys
            </SimpleCard>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default Testimonials;
