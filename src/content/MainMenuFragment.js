import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Dropdown } from 'semantic-ui-react';

export default function MainMenuFragment({ isMobile }) {
  return (
    <React.Fragment>
      <Menu.Item as={Link} to='/' className='mainMenuItem'>
        Home
      </Menu.Item>

      <Menu.Item as={Link} to='/optimization' className='mainMenuItem'>
        Optimization
      </Menu.Item>
      <Menu.Item as={Link} to='/work' className='mainMenuItem'>
        Abridged CV
      </Menu.Item>
      <Dropdown
        pointing
        className='link item mainDropdownItem'
        text='Case Studies'
      >
        <Dropdown.Menu>
          <Dropdown.Item as={Link} to='/thespreadsheet'>
            The Spreadsheet
          </Dropdown.Item>

          <Dropdown.Item as={Link} to='/automatingreporting'>
            Automating the Reporting
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

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
