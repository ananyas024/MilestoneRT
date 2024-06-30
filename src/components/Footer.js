import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';  // Correct import path

const Footer = () => (
  <footer className="bg-dark text-white mt-5 p-4 text-center">
    <Container>
      <Row>
        <Col>
          <p>&copy; 2024 TCE Hackathon: React-a-Thon. All rights reserved.</p>
          <div>
            <a href="https://facebook.com" className="text-white mx-2"><FaFacebook size={30} /></a>
            <a href="https://twitter.com" className="text-white mx-2"><FaTwitter size={30} /></a>
            <a href="https://instagram.com" className="text-white mx-2"><FaInstagram size={30} /></a>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;