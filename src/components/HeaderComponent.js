import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar light className="bg-light" expand="md">
        <NavbarBrand to="/">covid-Visualiser</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink to="">India</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="">State-Wise</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="">About</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
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
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>for educational purposes only</NavbarText>
        </Collapse>
        
      </Navbar>
    </div>
  );
}

export default Header;
