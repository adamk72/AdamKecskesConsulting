import React from 'react';
import SimpleCard from './SimpleCard';

import { Button, Segment, Container, Divider } from 'semantic-ui-react';

const Main = (props) => {
  return (
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <SimpleCard
          className='top'
          title='Breaking The Grid, Grabs Your Attention'
          body='Instead of focusing on content creation and hard work, we have learned
        how to master the art of doing nothing by providing massive amounts of
        whitespace and generic content that can seem massive, monolithic and
        worth your attention.'
        >
          <Button as='a' size='large'>
            Read More
          </Button>
        </SimpleCard>

        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <a href='http://kecskes.net'>Case Studies</a>
        </Divider>
        <SimpleCard
          title='Did We Tell You About Our Bananas?'
          body="Yes I know you probably disregarded the earlier boasts as non-sequitur
        filler content, but it's really true. It took years of gene splicing
        and combinatory DNA research, but our bananas can really dance."
        >
          <Button as='a' size='large'>
            I'm Still Quite Interested
          </Button>
        </SimpleCard>
      </Container>
    </Segment>
  );
};

export default Main;
