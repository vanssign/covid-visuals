import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';
import {NavLink} from 'react-router-dom'

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar dark className="bg-dark" expand="xs">
        <NavbarBrand to="/">CoVisuals</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink className="nav-link" to="/home">India</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/news/0">News</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/about">About</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        
      </Navbar>
    </div>
  );
}

export default Header;
