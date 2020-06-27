import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

const TwoColumnSection = ({ leftSide = [], rightSide = [], id = null }) => {
  return (
    <>
      <Container id={id}>
        <Row className='section'>
          <Col>
            {Array.prototype.map.call(leftSide, (item, index) => {
              return <div key={index}>{item}</div>;
            })}
          </Col>
          <Col>
            {Array.prototype.map.call(rightSide, (item, index) => {
              return <div key={index}>{item}</div>;
            })}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TwoColumnSection;
