import React from 'react';
import SimpleCard from '../components/SimpleCard';
import { Container, Row, Col } from 'react-bootstrap';
import CircularSegment from '../components/CircularSegment';
const SolverSection = (props) => {
  return (
    <Container>
      <Row>
        <Col className='mobile hidden'>
          <CircularSegment image='images/computer.png' />
        </Col>
        <Col>
          <SimpleCard className='top' title='I Ask a Lot of Questions'>
            <p>
              I'm a troubleshooter; instead of putting up with the status quo,
              I'm always asking, 'What improvements can we make to make our
              efforts a little easier?
            </p>
            <p>
              I also maintain a customer-centric worldview. The question I ask
              myself is, "Which solutions benefit the most of us, and still
              respect all of us?"
            </p>
            <p>
              As such, I've moved up to Director and VP positions at various
              companies because that is where I can provide the greatest level
              of service. However, I'm not afraid to dig into code, databases,
              or documentation when necessary. Often times it's looking into the
              details that reveal issues &mdash; and solutions &mdash; which
              will best impact the entire organization.
            </p>
          </SimpleCard>
        </Col>
      </Row>
    </Container>
  );
};

export default SolverSection;