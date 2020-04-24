import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

export default function MainMenuFragment({ isMobile }) {
  return (
    <React.Fragment>
      <Menu.Item as={Link} to='/' className='mainMenuItem'>
        Home
      </Menu.Item>
      {/* <Menu.Item as={Link} to='/portfolio' className='mainMenuItem'>
        Code Portfolio
      </Menu.Item> */}
      <Menu.Item as={Link} to='/optimization' className='mainMenuItem'>
        Optimization
      </Menu.Item>
      <Menu.Item as={Link} to='/work' className='mainMenuItem'>
        Abridged CV
      </Menu.Item>
      {/* {!isMobile ? (
        <Menu.Item position='right'>
          <Button as='a' inverted>
            Log In
          </Button>
          <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
            Sign Up
          </Button>
        </Menu.Item>
      ) : (
        <React.Fragment>
          <Menu.Item as={Link} to='/portfolio' className='mainMenuItem'>
            Log In
          </Menu.Item>
          <Menu.Item as={Link} to='/work' className='mainMenuItem'>
            Sign Up
          </Menu.Item>
        </React.Fragment>
      )} */}
    </React.Fragment>
  );
}
