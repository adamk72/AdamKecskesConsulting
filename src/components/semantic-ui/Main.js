import React from 'react';
import SimpleCard from './SimpleCard';

import { List, Icon, Segment, Container } from 'semantic-ui-react';
import SegmentDivider from './SegmentDivider';

const Main = (props) => {
  return (
    <Segment basic style={{ padding: '3.5em 0em' }} vertical>
      <Container text>
        <SimpleCard
          className='top'
          title='What I Offer to Your Company'
          body="I'm a natural problem solver; instead of putting up with the status quo, I'm always asking 'What improvements can I make?' As such, I've moved up to Director and VP positions at various companies because that is were I can provide the greatest level of service. However, I'm not afraid to dig into code, databases, or documentation when necessary. I see it as essential for truly understanding what my team is going through."
        ></SimpleCard>

        <SegmentDivider margin='3em 0em'>
          &hellip;With a Wide Range of Experiences
        </SegmentDivider>

        <SimpleCard
          title='I Wear Multiple Hats'
          body="I've worked for 3 large cap companies and 3 startup companies. I've had to wear a lot of hats and put my finger in a lot of cookie jars."
        ></SimpleCard>
        <List relaxed size='huge'>
          <List.Item>
            {' '}
            <Icon name='right triangle' />
            Server &amp; Client Software Development
          </List.Item>
          <List.Item>
            {' '}
            <Icon name='right triangle' />
            UX/UI Design Implementation
          </List.Item>
          <List.Item>
            {' '}
            <Icon name='right triangle' />
            Product Lifecycle Managment{' '}
          </List.Item>
          <List.Item>
            {' '}
            <Icon name='right triangle' />
            Optimizing Operations
          </List.Item>
          <List.Item>
            {' '}
            <Icon name='right triangle' />
            Program Management
          </List.Item>
          <List.Item>
            {' '}
            <Icon name='right triangle' />
            Process Improvement
          </List.Item>

          <List.Item>
            {' '}
            <Icon name='right triangle' />
            Technical Staffing
          </List.Item>
        </List>
      </Container>
    </Segment>
  );
};

export default Main;
