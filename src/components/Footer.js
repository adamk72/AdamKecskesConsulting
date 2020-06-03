import React from 'react';
import SocialList from './SocialList';

import { Grid, Header, Segment, Container, List } from 'semantic-ui-react';
import Copyright from '../apis/Copyright';

const Footer = (props) => {
  return (
    <React.Fragment>
      <div id='footer'>
        <Segment basic vertical style={{ padding: '5em 0em' }}>
          <Container>
            <Grid divided stackable>
              <Grid.Row>
                <Grid.Column width={8}>
                  <Header as='h4' content='Contact' />
                  <SocialList />
                </Grid.Column>
                <Grid.Column width={4}>
                  <Header as='h4' content='Services' />
                  <List link>
                    <List.Item as='a'>Operational Evaluations</List.Item>
                    <List.Item as='a'>Process Improvement</List.Item>
                    <List.Item as='a'>Software Architecture Reviews</List.Item>
                    <List.Item as='a'>
                      Entropy Detection &amp; Management
                    </List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={4}>
                  <Header as='h4' content='Other' />
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
                    <a
                      href='https://creativemarket.com/eucalyp'
                      title='Eucalyp'
                    >
                      Eucalyp
                    </a>{' '}
                    from{' '}
                    <a href='https://www.flaticon.com/' title='Flaticon'>
                      www.flaticon.com
                    </a>{' '}
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </div>
    </React.Fragment>
  );
};

export default Footer;
