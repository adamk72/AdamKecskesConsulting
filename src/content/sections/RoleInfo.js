import React from 'react';
import SimpleCard from '../../components/SimpleCard';
import { Card, Accordion, Button } from 'react-bootstrap';
import CircularEnclose from '../../components/CircularEnclose';
const techDomains = [
  { key: 1, text: 'Server & Client Agile Software Development' },
  { key: 3, text: 'UX/UI Design Implementation' },
  { key: 2, text: 'Product Development Lifecycle' },
  { key: 9, text: 'Information Archiecture' },
  { key: 7, text: 'Quality Assurance' },
];

const pmDomains = [
  { key: 11, text: 'Software Team Management' },
  { key: 8, text: 'Technical Staffing' },
  { key: 4, text: 'Optimizing Operations' },
  { key: 5, text: 'Program Management' },
  { key: 6, text: 'Process Improvement' },
  { key: 10, text: 'Knowledge Management' },
];

export const RoleRightSide = [
  <>
    <SimpleCard title='I Can Fill Many Roles' body='' className='justify'>
      <p>
        I've worked for 3 large cap companies and 3 startup companies all at
        various stages of maturity,&nbsp;&nbsp;giving me a broad scope of
        business opportunites to learn from.
      </p>
      <p>Some of the domains I've worked in:</p>
    </SimpleCard>
    <Accordion defaultActiveKey='0'>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant='link' eventKey='1'>
            Technology
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey='1'>
          <Card.Body>
            <ul>
              {techDomains.map((domain) => {
                return <li>{domain.text}</li>;
              })}
            </ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant='link' eventKey='2'>
            Management
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey='2'>
          <Card.Body>
            <ul>
              {pmDomains.map((domain) => {
                return <li>{domain.text}</li>;
              })}
            </ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
    ,
  </>,
];
export const RoleLeftSide = [
  <>
    <CircularEnclose image='images/flow.png' />
  </>,
];
