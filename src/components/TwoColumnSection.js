import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

const TwoColumnSection = ({ leftSide = [], rightSide = [] }, id = null) => {
  return (
    <>
      <Container id={id} style={{ padding: '4em 4em' }}>
        <Row className='section'>
          <Col>
            {Array.prototype.map.call(leftSide, (item) => {
              return <>{item}</>;
            })}
          </Col>
          <Col>
            {Array.prototype.map.call(rightSide, (item) => {
              return <>{item}</>;
            })}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TwoColumnSection;
