import React from 'react';
import SimpleCard from './SimpleCard';
import { List } from 'semantic-ui-react';

import { Grid, Segment } from 'semantic-ui-react';

const Testimonials = (props) => {
  return (
    <Segment basic style={{ padding: '3em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <SimpleCard title='What I Offer:' />
          </Grid.Column>

          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <List relaxed size='huge'>
              <List.Item>Server &amp; Client Software Development</List.Item>
              <List.Item>Product Lifecycle Management </List.Item>
              <List.Item>Information Archiecture</List.Item>
              <List.Item>Knowledge Management</List.Item>
              <List.Item>Program Management</List.Item>
              <List.Item>Process Improvement</List.Item>
              <List.Item>Optimizing Operations</List.Item>
              <List.Item>UX/UI Design Implementation</List.Item>
              <List.Item>Technical Staffing</List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default Testimonials;
