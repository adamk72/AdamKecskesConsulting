import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';

export default function MainDropdownFragment({ isMobile }) {
  return (
    <React.Fragment>
      <Dropdown.Item as={Link} to='/' className='mainDropdownItem'>
        Home
      </Dropdown.Item>

      <Dropdown.Item as={Link} to='/optimization' className='mainDropdownItem'>
        Optimization
      </Dropdown.Item>
      <Dropdown.Item as={Link} to='/work' className='mainDropdownItem'>
        Abridged CV
      </Dropdown.Item>
      <Dropdown
        pointing
        className='link item mainDropdownItem'
        text='Case Studies'
      >
        <Dropdown.Dropdown>
          <Dropdown.Item as={Link} to='/thespreadsheet'>
            The Spreadsheet
          </Dropdown.Item>

          <Dropdown.Item as={Link} to='/automatingreporting'>
            Automating the Reporting
          </Dropdown.Item>

          <Dropdown.Item as={Link} to='/theproductlifecycle'>
            The Product Lifecycle
          </Dropdown.Item>
        </Dropdown.Dropdown>
      </Dropdown>
    </React.Fragment>
  );
}
