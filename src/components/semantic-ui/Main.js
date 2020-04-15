import React from 'react';
import SimpleCard from './SimpleCard';

import { Button, Segment, Container, Divider } from 'semantic-ui-react';
import SegmentDivider from './SegmentDivider';

const Main = (props) => {
  return (
    <Segment basic style={{ padding: '3.5em 0em' }} vertical>
      <Container text>
        <SimpleCard
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

        <SegmentDivider margin='3em 0em'>
          <a href='http://kecskes.net'>Case Studies</a>
        </SegmentDivider>

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
