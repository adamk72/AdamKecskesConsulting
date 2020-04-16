import React from 'react';
import { List, Button, Icon } from 'semantic-ui-react';

const SocialList = () => {
  return (
    <React.Fragment>
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
        <Button as='a' href='https://github.com/adamk72' compact inverted>
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
    </React.Fragment>
  );
};

export default SocialList;
