"use client";

import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavBar() {
  return (
    <Navbar bg="white" expand="lg" className="py-3">
      <Container className="px-5">
        <Navbar.Brand href="/" as={Link}>
          <span className="fw-bolder text-primary">SALY LEARNING</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto mb-2 mb-lg-0 small fw-bolder">
            <Nav.Link href="/" as={Link}>
              Inicio
            </Nav.Link>
            <Nav.Link href="/resume" as={Link}>
              ¿Listos para aprender?
            </Nav.Link>
            <Nav.Link href="/projects" as={Link}>
              ¿Por qué nosotros?
            </Nav.Link>
            <Nav.Link href="/contact" as={Link}>
              Contáctenos
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
