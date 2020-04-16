import React from 'react';
import SimpleCard from './SimpleCard';

import { List, Icon, Segment, Container, Grid, Image } from 'semantic-ui-react';

import SegmentDivider from './SegmentDivider';
import CircularSegment from './CircularSegment';

const Main = (props) => {
  return (
    <Segment basic style={{ padding: '3.5em 0em' }} vertical>
      <Container basic>
        <Grid verticalAlign='middle'>
          <Grid.Row centered>
            <Grid.Column width={6}>
              <CircularSegment radius={256}>
                <Image src='/images/computer.png' alt='' />
              </CircularSegment>
            </Grid.Column>
            <Grid.Column width={10}>
              <SimpleCard
                className='top'
                title='What I Offer to Your Company'
                body="I'm a natural problem solver; instead of putting up with the status quo, I'm always asking 'What improvements can I make? As such, I've moved up to Director and VP positions at various companies because that is were I can provide the greatest level of service. However, I'm not afraid to dig into code, databases, or documentation when necessary. I see it as essential for truly understanding what my team is going through."
              ></SimpleCard>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column vertical>
              <SegmentDivider margin='3em 0em'>
                &hellip;With a Wide Range of Experiences
              </SegmentDivider>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column width={10} vertical>
              <SimpleCard
                title='I Wear Multiple Hats'
                body="I've worked for 3 large cap companies and 3 startup companies. I've had to wear a lot of hats and put my finger in a lot of cookie jars."
              ></SimpleCard>
              <List relaxed size='huge'>
                <List.Item>
                  {' '}
                  <Icon name='chevron right' />
                  Server &amp; Client Software Development
                </List.Item>
                <List.Item>
                  {' '}
                  <Icon name='chevron right' />
                  UX/UI Design Implementation
                </List.Item>
                <List.Item>
                  {' '}
                  <Icon name='chevron right' />
                  Product Lifecycle Management{' '}
                </List.Item>
                <List.Item>
                  {' '}
                  <Icon name='chevron right' />
                  Optimizing Operations
                </List.Item>
                <List.Item>
                  {' '}
                  <Icon name='chevron right' />
                  Program Management
                </List.Item>
                <List.Item>
                  {' '}
                  <Icon name='chevron right' />
                  Process Improvement
                </List.Item>
                <List.Item>
                  {' '}
                  <Icon name='chevron right' />
                  Technical Staffing
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={2}></Grid.Column>
            <Grid.Column width={4} vertical>
              <CircularSegment radius={256}>
                <Image src='/images/flow.png' alt='' />
              </CircularSegment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};

export default Main;
