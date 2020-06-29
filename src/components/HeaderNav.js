import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export default function HeaderNav({ isMobile }) {
  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand href='/'>Adam Kecskes</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <LinkContainer to='/'>
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/about'>
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/work'>
            <Nav.Link>Work</Nav.Link>
          </LinkContainer>
          <NavDropdown title='Case Studies' id='basic-nav-dropdown'>
            <LinkContainer to='/thespreadsheet'>
              <NavDropdown.Item href='/thespreadsheet'>
                The Spreadsheet
              </NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to='/automatingreporting'>
              <NavDropdown.Item href='/automatingreporting'>
                Automated Reporting
              </NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Divider />
            <LinkContainer to='/theproductlifecycle'>
              <NavDropdown.Item href='/theproductlifecycle'>
                The Product Lifecycle
              </NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
