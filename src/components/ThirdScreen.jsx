import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
export default function ThirdScreen() {
  return (
    <section className="background-second-view">
      <Container>
        <Row
          className="justify-content-center pt-5"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <Image
            src="../images/Sun-Tzu_CN-1.png"
            className="sun-tzu-image"
            id="autor"
          />
        </Row>
        <Row
          className="text-center"
          data-aos="flip-right"
          data-aos-duration="2000"
        >
          <h2 className="title pt-3">Autor</h2>
          <p className="text-sun-tzu">
            Sun Tzu (544-496 a.C.) foi um general, estrategista de guerra e
            filósofo chinês, a quem é atribuída a obra “A Arte da Guerra”, um
            tratado filosófico-militar no qual reuniu estratégias e táticas
            militares para vencer o inimigo. Sun Tzu (544-496 a.C.) nasceu na
            China, provavelmente em 544, durante a dinastia Chou (722-476),
            período da história chamado de Primavera e Outono, quando o poder
            real praticamente desapareceu e os grandes principados guerreavam, e
            que ocorreu a divisão da China em vários Estados menores, que viviam
            permanentemente em luta.
          </p>
        </Row>
        <Row
          className="text-center"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h2 className="title pt-3">Frases famosas do livro</h2>
          <Col className="pt-5">
            <Card style={{ width: "16rem" }} className="card">
              <Card.Body>
                <Card.Title>
                  Toda guerra é baseada no engano. Por isso, quando capazes de
                  atacar, devemos parecer incapazes; ao utilizar nossas forças,
                  devemos parecer inativos; quando estamos perto, devemos fazer
                  o inimigo acreditar que estamos longe, quando longe, devemos
                  fazê-lo acreditar que estamos perto.
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="pt-5">
            <Card style={{ width: "16rem" }} className="card">
              <Card.Body>
                <Card.Title>
                  A suprema arte da guerra é derrotar o inimigo sem lutar.
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="pt-5">
            <Card style={{ width: "16rem" }} className="card">
              <Card.Body>
                <Card.Title>
                  Se você conhece o inimigo e conhece a si mesmo, não precisa
                  temer o resultado de cem batalhas. Se você se conhece mas não
                  conhece o inimigo, para cada vitória ganha sofrerá também uma
                  derrota. Se você não conhece nem o inimigo nem a si mesmo,
                  perderá todas as batalhas...
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="pt-5">
            <Card style={{ width: "16rem" }} className="card">
              <Card.Body>
                <Card.Title>
                  Se quisermos que a glória e o sucesso acompanhem nossas armas,
                  jamais devemos perder de vista os seguintes fatores: a
                  doutrina, o tempo, o espaço, o comando, a disciplina.
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="text-center">
          <h2 className="title pt-3">Aprimore seus conhecimentos</h2>
          <Col>
            <a
              href="https://www.amazon.com.br/arte-guerra-treze-capítulos-completos/dp/8581303897/ref=asc_df_8581303897/?tag=googleshopp00-20&linkCode=df0&hvadid=379727491147&hvpos=&hvnetw=g&hvrand=3083906985626035522&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1031556&hvtargid=pla-420031236674&psc=1"
              target="_blank"
            >
              <Button variant="dark" className="mt-5 mb-5 buy-button">
                Compre agora
              </Button>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
