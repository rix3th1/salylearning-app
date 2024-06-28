import Link from "next/link";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function Footer() {
  return (
    <footer className="bg-white py-4 mt-auto">
      <Container className="px-5">
        <Row className="align-items-center justify-content-between flex-column flex-sm-row">
          <Col md="auto">
            <div className="small m-0">
              SALY&copy; Todos los derechos reservados{" "}
              {new Date().getFullYear()}
            </div>
          </Col>
          <Col md="auto">
            <Link className="small" href="#">
              Privacidad
            </Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
