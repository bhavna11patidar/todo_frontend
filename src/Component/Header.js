import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mx-auto" navbar>
              <NavItem>
                <Link className="nav-link" to="/add-list">Add Task List</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/view-list">View Task List</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
}