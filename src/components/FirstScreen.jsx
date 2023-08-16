import { Col, Container, Image, Nav, Row } from "react-bootstrap";
export default function FirstScreen() {
  return (
    <section className="background-first-view">
      <Container className="first-view-container">
        <Row>
          <Col>
            <Nav>
              <Nav.Item>
                <Nav.Link
                  href="https://www.amazon.com.br/arte-guerra-treze-capítulos-completos/dp/8581303897/ref=asc_df_8581303897/?tag=googleshopp00-20&linkCode=df0&hvadid=379727491147&hvpos=&hvnetw=g&hvrand=3083906985626035522&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1031556&hvtargid=pla-420031236674&psc=1"
                  className="nav"
                  target="_blank"
                >
                  Comprar
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#sobre" eventKey="link-1" className="nav">
                  Sobre
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#autor" eventKey="link-1" className="nav">
                  Autor
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col sm={{ span: 1, offset: 5 }} xs={{ span: 1, offset: 4 }}>
            <Image src="../images/arrowDown.gif" className="arrow-down" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
