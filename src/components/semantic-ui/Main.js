import React from 'react';
import SimpleCard from './SimpleCard';

import { List, Icon, Segment, Container, Grid, Image } from 'semantic-ui-react';

import SegmentDivider from './SegmentDivider';
import CircularSegment from './CircularSegment';

const domains = [
  'Server & Client Agile Software Development',
  'Product Lifecycle Originination',
  'UX/UI Design Implementation',
  'Optimizing Operations',
  'Program Management',
  'Process Improvement',
  'Quality Assurance',
  'Technical Staffing',
];

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
              <SimpleCard className='top' title='I Ask a Lot of Questions'>
                <p>
                  I'm a troublesooter; instead of putting up with the status
                  quo, I'm always asking, 'What improvements can we make to make
                  our efforts a little easier?
                  <br />
                  <br />
                  As such, I've moved up to Director and VP positions at various
                  companies because that is were I can provide the greatest
                  level of service. However, I'm not afraid to dig into code,
                  databases, or documentation when necessary. Often times it's
                  looking into the details that reveal issues &mdash; and
                  solutions &mdash; which will impact the entire organization.
                </p>
              </SimpleCard>
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
              <List relaxed size='huge' style={{ marginLeft: '50px' }}>
                {domains.map((domain) => {
                  return (
                    <List.Item>
                      {' '}
                      <Icon name='chevron right' />
                      {domain}
                    </List.Item>
                  );
                })}
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
