import { Container, Row } from "react-bootstrap";
export default function Footer() {
  return (
    <section className="footer">
      <Container>
        <Row className="text-center">
          <p className="text-footer pt-4">
            Projeto pessoal feito por{" "}
            <a href="linkedin.com/in/rafaelm0reira/">Rafael Moreira ©</a>
          </p>
        </Row>
      </Container>
    </section>
  );
}
