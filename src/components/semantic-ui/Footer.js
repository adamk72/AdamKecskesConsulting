import React from 'react';

import {
  Icon,
  Grid,
  Header,
  Segment,
  Container,
  List,
  Button,
} from 'semantic-ui-react';
import Copyright from '../../apis/Copyright';

const Footer = (props) => {
  return (
    <Segment basic vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided stackable>
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as='h4' content='Contact' />
              <List horizontal>
                <List.Item>
                  <Button
                    as='a'
                    href='mailto://adam@kecskes.net?subject=Business%20Inquiry%20from%20Website'
                    compact
                    inverted
                  >
                    <Icon name='mail' /> Email
                  </Button>
                </List.Item>
                <List.Item>
                  <Button
                    as='a'
                    href='https://github.com/adamk72'
                    compact
                    inverted
                  >
                    <Icon name='github' /> GitHub
                  </Button>
                </List.Item>
                <List.Item>
                  <Button
                    as='a'
                    href='https://linkedin.com/in/adamkecskes/'
                    compact
                    inverted
                  >
                    <Icon name='linkedin' />
                    LinkedIn
                  </Button>
                </List.Item>
                <List.Item>
                  <Button as='a' href='tel://512-662-2969' compact inverted>
                    <Icon name='phone' /> 512-662-2969
                  </Button>
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={4}>
              <Header as='h4' content='Services' />
              <List link>
                <List.Item as='a'>Operational Evaluations</List.Item>
                <List.Item as='a'>Process Improvement</List.Item>
                <List.Item as='a'>Software Architecture Reviews</List.Item>
                <List.Item as='a'>Entropy Detection &amp; Management</List.Item>
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
  );
};

export default Footer;
