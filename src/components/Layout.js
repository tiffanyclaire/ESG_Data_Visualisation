import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Layout({ children }) {
  return (
    <Container className= 'mb-5'>
      {children}
    </Container>
    
  );
}

export default Layout;