import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default function MainDropdownFragment({ isMobile }) {
  return (
    <Dropdown>
      <LinkContainer to='/'>
        <Dropdown.Item as={Link} className='mainDropdownItem'>
          Home
        </Dropdown.Item>
      </LinkContainer>
      <LinkContainer to='/optimization'>
        <Dropdown.Item
          as={Link}
          to='/optimization'
          className='mainDropdownItem'
        >
          Optimization
        </Dropdown.Item>
      </LinkContainer>
      <LinkContainer to='/work'>
        <Dropdown.Item as={Link} className='mainDropdownItem'>
          Abridged CV
        </Dropdown.Item>
      </LinkContainer>
      {/* <Dropdown className='link item mainDropdownItem' text='Case Studies'>
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
      </Dropdown> */}
    </Dropdown>
  );
}
