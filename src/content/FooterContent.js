import React from 'react';
import Copyright from '../apis/Copyright';
import SocialList from '../components/SocialList';
import { Container, /*ListGroup,*/ Row, Col } from 'react-bootstrap';
const FooterContent = () => {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col md={7}>
            <h4>Contact</h4>
            <SocialList />
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
