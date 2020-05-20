import React from 'react';
import SimpleCard from './SimpleCard';

import { List, Icon, Segment, Container, Grid, Image } from 'semantic-ui-react';

import SegmentDivider from './SegmentDivider';
import CircularSegment from './CircularSegment';
import { __remotepath__ } from '../config';

const domains = [
  { key: 1, text: 'Server & Client Agile Software Development' },
  { key: 2, text: 'Product Lifecycle Originination' },
  { key: 3, text: 'UX/UI Design Implementation' },
  { key: 4, text: 'Optimizing Operations' },
  { key: 5, text: 'Program Management' },
  { key: 6, text: 'Process Improvement' },
  { key: 7, text: 'Quality Assurance' },
  { key: 8, text: 'Technical Staffing' },
];

const Main = (props) => {
  return (
    <Segment basic style={{ padding: '3.5em 0em' }} vertical>
      <Container>
        <Grid verticalAlign='middle'>
          <Grid.Row centered>
            <Grid.Column width={6} className='mobile hidden'>
              <CircularSegment radius={256}>
                <Image src={__remotepath__ + '/images/computer.png'} alt='' />
              </CircularSegment>
            </Grid.Column>
            <Grid.Column width={10}>
              <SimpleCard className='top' title='I Ask a Lot of Questions'>
                <p>
                  <p>
                    I'm a troubleshooter; instead of putting up with the status
                    quo, I'm always asking, 'What improvements can we make to
                    make our efforts a little easier?
                  </p>
                  <p>
                    I also maintain a customer-centeric worldview. The question
                    I ask myself is, "Which solutions benefit the most of us,
                    and still respect all of us? "
                  </p>
                  <p>
                    As such, I've moved up to Director and VP positions at
                    various companies because that is were I can provide the
                    greatest level of service. However, I'm not afraid to dig
                    into code, databases, or documentation when necessary. Often
                    times it's looking into the details that reveal issues
                    &mdash; and solutions &mdash; which will best impact the
                    entire organization.
                  </p>
                </p>
              </SimpleCard>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column>
              <SegmentDivider margin='3em 0em'>
                &hellip;With a Wide Range of Experiences
              </SegmentDivider>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column width={10}>
              <SimpleCard title='And I Can Fill Many Roles' body=''>
                <p>
                  I've worked for 3 large cap companies and 3 startup companies
                  <br />
                  all at various stages of maturity,&nbsp;&nbsp;giving me a
                  broad scope
                  <br />
                  business opportunites to learn from.
                  <br />
                  <br />
                  Some of the domains I've worked in:
                </p>
              </SimpleCard>
              <List className='announce' relaxed size='huge'>
                {domains.map((domain) => {
                  return (
                    <List.Item key={domain.key}>
                      {' '}
                      <Icon name='chevron right' />
                      {domain.text}
                    </List.Item>
                  );
                })}
              </List>
            </Grid.Column>
            <Grid.Column width={2} className='mobile hidden'></Grid.Column>
            <Grid.Column width={4} className='mobile hidden'>
              <CircularSegment radius={256}>
                <Image src={__remotepath__ + '/images/flow.png'} alt='' />
              </CircularSegment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};

export default Main;
