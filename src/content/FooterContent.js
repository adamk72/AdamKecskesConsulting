import React from 'react';
import Copyright from '../apis/Copyright';
import SocialList from './SocialList';
import { Container, ListGroup, Row, Col } from 'react-bootstrap';
const FooterContent = () => {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col>
            <h4>Contact</h4>
            <SocialList />
          </Col>
          <Col>
            <h4>Services</h4>
            <ListGroup>
              <ListGroup.Item as='a'>Operational Evaluations</ListGroup.Item>
              <ListGroup.Item as='a'>Process Improvement</ListGroup.Item>
              <ListGroup.Item as='a'>
                Software Architecture Reviews
              </ListGroup.Item>
              <ListGroup.Item as='a'>
                Entropy Detection &amp; Management
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <h4>Other</h4>
            <Copyright />

            <div style={{ marginTop: '10px' }}>
              Icons made by{' '}
              <a
                href='https://www.flaticon.com/authors/freepik'
                title='Freepik'
              >
                Freepik
              </a>{' '}
              &amp;{' '}
              <a href='https://creativemarket.com/eucalyp' title='Eucalyp'>
                Eucalyp
              </a>{' '}
              from{' '}
              <a href='https://www.flaticon.com/' title='Flaticon'>
                www.flaticon.com
              </a>{' '}
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};
export default FooterContent;
