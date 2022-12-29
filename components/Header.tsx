import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from 'reactstrap';

import Image from 'next/image';

const Header = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" dark expand='lg' fixed='top'>
        <NavbarBrand className="me-auto">
            <span className='me-5'></span>
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav style={{'background':'rgba(0,0,0,0.5)'}} navbar>
          <NavItem>
              <NavLink href="#home">    
            
              <Button className='d-lg-block d-none navbar-button mx-3' size='lg' outline color='warning'>Home</Button>
                <span className='d-lg-none d-block text-warning'>Home</span>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#skills">            
              <Button className='d-lg-block d-none navbar-button me-3' size='lg' outline color='warning'>Skills</Button>
              <span className='d-lg-none d-block text-warning'>Skills</span>
              </NavLink>

            </NavItem>
            <NavItem>
              <NavLink href="#awards">
              <Button className='d-lg-block d-none navbar-button me-3' size='lg' outline color='warning'>Awards</Button>
              <span className='d-lg-none d-block text-warning'>Awards</span>
              </NavLink>

            </NavItem>
            <NavItem>
              <NavLink href="#builds">
              <Button className='d-lg-block d-none navbar-button me-3' size='lg' outline color='warning'>Builds</Button>
              <span className='d-lg-none d-block text-warning'>Builds</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://blog.sjyu.xyz" target="_blank">
              <Button className='d-lg-block d-none navbar-button me-3' size='lg' outline color='danger'>Blog</Button>
              <span className='d-lg-none d-block text-danger'>Blog</span>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;