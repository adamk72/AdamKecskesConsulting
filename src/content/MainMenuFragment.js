import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default function MainDropdownFragment({ isMobile }) {
  return (
    <Dropdown>
      <LinkContainer to='/'>
        <Dropdown.Item className='mainDropdownItem'>Home</Dropdown.Item>
      </LinkContainer>
      <LinkContainer to='/optimization'>
        <Dropdown.Item className='mainDropdownItem'>Optimization</Dropdown.Item>
      </LinkContainer>
      <LinkContainer to='/work'>
        <Dropdown.Item className='mainDropdownItem'>Abridged CV</Dropdown.Item>
      </LinkContainer>
      {/* <Dropdown className='link item mainDropdownItem' text='Case Studies'>
        <Dropdown.Dropdown>
          <Dropdown.Item to='/thespreadsheet'>
            The Spreadsheet
          </Dropdown.Item>

          <Dropdown.Item  to='/automatingreporting'>
            Automating the Reporting
          </Dropdown.Item>

          <Dropdown.Item  to='/theproductlifecycle'>
            The Product Lifecycle
          </Dropdown.Item>
        </Dropdown.Dropdown>
      </Dropdown> */}
    </Dropdown>
  );
}
