import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Header = ({ toggleSidebar }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">TCE Hackathon: React-a-Thon</Navbar.Brand>
        <div className="menu-toggle" onClick={toggleSidebar}>
          <span className="toggle-icon" role="button" aria-label="Toggle Sidebar">
            ☰
          </span>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;