import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import {NavLink} from 'react-router-dom'

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar light className="bg-light" expand="md">
        <NavbarBrand to="/">Covid Visualiser</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink className="nav-link" to="/home">India</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/state-wise">State Wise</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/about">About</NavLink>
            </NavItem>
            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Documentation
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  one
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  two
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  three
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Nav>
          <NavbarText>For Educational Purposes Only</NavbarText>
        </Collapse>
        
      </Navbar>
    </div>
  );
}

export default Header;
