import React from 'react';
import SimpleCard from '../components/SimpleCard';
import { Container, Row, Col } from 'react-bootstrap';
import CircularSegment from '../components/CircularSegment';
const TeamSection = (props) => {
  return (
    <Container>
      <Row>
        <Col className='mobile hidden'>
          <CircularSegment image='images/teamwork.png' />
        </Col>
        <Col>
          <SimpleCard className='top' title='We Are Better Together'>
            <p>
              The best teams I’ve lead or worked for have been the ones where we
              had mutual respect for one another and engaged in our work with
              transparency and humility.
            </p>
            <p>
              In teams that I manage, I rely heavily on the expertise and
              fact-oriented opinions of each person to make better overall
              decisions. I distinctly enjoy learning about the innovative
              solutions that my teams come up with.
            </p>
            <p>
              And when it comes to leadership, I stick to principles that
              respect each person; you don't know why they did X, Y, or Z unless
              you ask them. Principles such as:
            </p>
            <ul>
              <li>Transparency &amp; Honesty</li>
              <li>Safety both in the environment and in failure</li>
              <li>
                Recognize leadership and provide opportunities for improvement
              </li>
            </ul>
          </SimpleCard>
        </Col>
      </Row>
    </Container>
  );
};

export default TeamSection;
