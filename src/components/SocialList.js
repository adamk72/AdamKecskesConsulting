import React from 'react';
import { List, Button, Icon } from 'semantic-ui-react';

const SocialList = ({ inverted = true, color = null }) => {
  return (
    <React.Fragment>
      <List horizontal>
        <List.Item>
          <Button
            as='a'
            href='mailto://adam@kecskes.net?subject=Business%20Inquiry%20from%20Website'
            compact
            inverted
            color={color}
          >
            <Icon name='mail' /> Email
          </Button>
        </List.Item>
        <List.Item>
          <Button
            as='a'
            href='https://github.com/adamk72'
            compact
            inverted={inverted}
            color={color}
          >
            <Icon name='github' /> GitHub
          </Button>
        </List.Item>
        <List.Item>
          <Button
            as='a'
            href='https://linkedin.com/in/adamkecskes/'
            compact
            inverted={inverted}
            color={color}
          >
            <Icon name='linkedin' />
            LinkedIn
          </Button>
        </List.Item>
        <List.Item>
          <Button
            as='a'
            href='tel://512-662-2969'
            compact
            inverted={inverted}
            color={color}
          >
            <Icon name='phone' /> 512-662-2969
          </Button>
        </List.Item>
      </List>
    </React.Fragment>
  );
};

export default SocialList;
