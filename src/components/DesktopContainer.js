import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MainSiteHeader from './MainSiteHeader';
import getWidth from '../apis/getWidth';
import MainMenuFragment from './MainMenuFragment';
import {
  Container,
  Menu,
  Responsive,
  Visibility,
  Segment,
} from 'semantic-ui-react';

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            id='main-site-header'
            basic
            textAlign='center'
            style={{ minHeight: '700', padding: '1em 0em 3em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <MainMenuFragment />
              </Container>
            </Menu>
            <MainSiteHeader />
          </Segment>
        </Visibility>
        {children}
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
};

export default DesktopContainer;
