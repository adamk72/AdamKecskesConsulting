import React from 'react';
import SimpleCard from '../components/SimpleCard';

import { List, Icon, Segment, Container, Grid, Image } from 'semantic-ui-react';

import SegmentDivider from '../components/SegmentDivider';
import CircularSegment from '../components/CircularSegment';
import { __remotepath__ } from '../config';

const domains = [
  { key: 1, text: 'Server & Client Agile Software Development' },
  { key: 3, text: 'UX/UI Design Implementation' },
  { key: 2, text: 'Product Lifecycle Origination' },
  { key: 10, text: 'Knowledge Management' },
  { key: 9, text: 'Information Archiecture' },
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
                <Image src={__remotepath__ + 'images/computer.png'} alt='' />
              </CircularSegment>
            </Grid.Column>
            <Grid.Column width={10}>
              <SimpleCard className='top' title='I Ask a Lot of Questions'>
                <p>
                  I'm a troubleshooter; instead of putting up with the status
                  quo, I'm always asking, 'What improvements can we make to make
                  our efforts a little easier?
                </p>
                <p>
                  I also maintain a customer-centric worldview. The question I
                  ask myself is, "Which solutions benefit the most of us, and
                  still respect all of us?"
                </p>
                <p>
                  As such, I've moved up to Director and VP positions at various
                  companies because that is where I can provide the greatest
                  level of service. However, I'm not afraid to dig into code,
                  databases, or documentation when necessary. Often times it's
                  looking into the details that reveal issues &mdash; and
                  solutions &mdash; which will best impact the entire
                  organization.
                </p>
              </SimpleCard>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column>
              <SegmentDivider margin='3em 0em'>
                &hellip;With a Wide Range of Experiences&hellip;
              </SegmentDivider>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column width={10}>
              <SimpleCard title='I Can Fill Many Roles' body=''>
                <p>
                  I've worked for 3 large cap companies and 3 startup companies
                  <br />
                  all at various stages of maturity,&nbsp;&nbsp;giving me a
                  broad scope
                  <br />
                  of business opportunites to learn from.
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
                <Image src={__remotepath__ + 'images/flow.png'} alt='' />
              </CircularSegment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column>
              <SegmentDivider margin='3em 0em'>
                &hellip;and I play well with others.
              </SegmentDivider>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column width={6} className='mobile hidden'>
              <CircularSegment radius={256}>
                <Image src={__remotepath__ + 'images/teamwork.png'} alt='' />
              </CircularSegment>
            </Grid.Column>
            <Grid.Column width={10}>
              <SimpleCard className='top' title='We Are Better Together'>
                <p>
                  The best teams I’ve lead or worked for have been the ones
                  where we had mutual respect for one another and engaged in our
                  work with transparency and humility.
                </p>
                <p>
                  In teams that I manage, I rely heavily on the expertise and
                  fact-oriented opinions of each person to make better overall
                  decisions. I distinctly enjoy learning about the innovative
                  solutions that my teams come up with.
                </p>
                <p>
                  And when it comes to leadership, I stick to principles that
                  respect each person; you don't know why they did X, Y, or Z
                  unless you ask them. Principles such as:
                  <ul>
                    <li>Transparency &amp; Honesty</li>
                    <li>Safety both in the environment and in failure</li>
                    <li>
                      Recognize leadership and provide opportunities for
                      improvement
                    </li>
                  </ul>
                </p>
              </SimpleCard>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};

export default Main;
