import React from 'react';
import SimpleCard from '../components/SimpleCard';
import { ListGroup, Container, Row, Col } from 'react-bootstrap';
import CircularSegment from '../components/CircularSegment';
import { FaChevronRight } from 'react-icons/fa';
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
const SolverSection = (props) => {
  return (
    <Container>
      <Row>
        <Col md={8}>
          <SimpleCard title='I Can Fill Many Roles' body=''>
            <p>
              I've worked for 3 large cap companies and 3 startup companies all
              at various stages of maturity,&nbsp;&nbsp;giving me a broad scope
              of business opportunites to learn from.
            </p>
            <p>Some of the domains I've worked in:</p>
          </SimpleCard>
          <Container>
            <Row>
              <Col>
                <ListGroup>
                  {domains.map((domain) => {
                    return (
                      <ListGroup.Item
                        key={domain.key}
                        style={{ borderStyle: 'none' }}
                      >
                        {' '}
                        <FaChevronRight />
                        {domain.text}
                      </ListGroup.Item>
                    );
                  })}
                </ListGroup>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col>
          <CircularSegment image='images/flow.png' />
        </Col>
      </Row>
    </Container>
  );
};

export default SolverSection;
