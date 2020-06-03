import PropTypes from 'prop-types';
import React, { Component } from 'react';
import MainSiteHeader from '../content/MainSiteHeader';
import getWidth from '../apis/getWidth';
import MainMenuFragment from '../content/MainMenuFragment';
import {
  Container,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar,
} from 'semantic-ui-react';
class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation='push'
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <MainMenuFragment mobile />
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            id='main-site-header'
            basic
            textAlign='center'
            style={{ minHeight: 350, padding: '1em 0em' }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name='sidebar' />
                </Menu.Item>
              </Menu>
            </Container>
            <MainSiteHeader mobile />
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
};

export default MobileContainer;
