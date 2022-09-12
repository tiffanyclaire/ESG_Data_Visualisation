import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Layout({ children }) {
  return (
    <div className="bg-light">
      <Container className="pb-5">{children}</Container>
    </div>
  );
}

export default Layout;
