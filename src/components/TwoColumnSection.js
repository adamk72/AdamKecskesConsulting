import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
/*
Requires that the caller pass to each side an object of the form:
{ 
  type: [image|<any thing else>]
  body: <array>
}

The function will evalute any 'image' values and if the screen size is small enough,
set the respective column to 'display: none'
*/
const TwoColumnSection = ({ leftSide = {}, rightSide = {}, id = null }) => {
  return (
    <>
      <Container id={id}>
        <Row className='section'>
          <Col
            className={
              leftSide.type === 'hideOnMobile'
                ? 'col-sm d-none d-md-inline'
                : 'col-sm'
            }
          >
            {Array.prototype.map.call(leftSide.body, (item, index) => {
              return <div key={index}>{item}</div>;
            })}
          </Col>

          <Col
            sm
            className={
              rightSide.type === 'hideOnMobile'
                ? 'col-sm d-none d-md-inline'
                : 'col-sm'
            }
          >
            {Array.prototype.map.call(rightSide.body, (item, index) => {
              return <div key={index}>{item}</div>;
            })}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TwoColumnSection;
