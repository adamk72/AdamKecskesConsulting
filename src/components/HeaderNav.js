import React from 'react';
// import { Dropdown } from 'react-bootstrap';
// import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export default function HeaderNav({ isMobile }) {
  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand href='/'>Adam Kecskes</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href='/work'>CV</Nav.Link>
          <Nav.Link href='/optimization'>Work</Nav.Link>
          <NavDropdown title='Case Studies' id='basic-nav-dropdown'>
            <NavDropdown.Item href='/thespreadsheet'>
              The Spreadsheet
            </NavDropdown.Item>
            <NavDropdown.Item href='/automatingreporting'>
              Automated Reporting
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href='/theproductlifecycle'>
              The Product Lifecycle
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
