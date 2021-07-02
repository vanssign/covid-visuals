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
    <div style={{opacity:1}} className="small-footer">
      <Navbar color="dark" dark expand="xs">
        <NavbarBrand to="/" className="d-none d-md-block">CoVisuals</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
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
            <NavItem >
              {/* <NavLink className="nav-link" to="/predict"> */}
              <div className="nav-link" style={{opacity:0.4}}>
              <i className="fa fa-calculator fa-2x"></i><br/>
              <span className="make-it-small">predict</span>
              </div>
              {/* </NavLink> */}
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
