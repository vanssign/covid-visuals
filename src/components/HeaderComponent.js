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
      <Navbar dark expand="xs">
        <NavbarBrand to="/">CoVisuals</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar >
            <NavItem>
              <NavLink className="nav-link" to="/home"><i className="fa fa-bar-chart fa-2x"></i>
              <br/>
              <span className="make-it-small">stats</span></NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" strict to="/news/"><i className="fa fa-newspaper-o fa-2x"></i>
              <br/>
              <span className="make-it-small">news</span></NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/about"><i className="fa fa-info-circle fa-2x"></i><br/>
              <span className="make-it-small">about</span></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
