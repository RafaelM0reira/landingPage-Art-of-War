import { Col, Container, Image, Row } from "react-bootstrap";
export default function SecondScreen() {
  return (
    <section className="background-second-view">
      <Container>
        <Row>
          FADE
          <Col
            lg={5}
            md={6}
            sm={12}
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <Image src="../images/livro-1.png" className="book-image" />
          </Col>
          <Col data-aos="fade-left" data-aos-duration="2000">
            <h2 className="title pt-3" id="sobre">
              Sobre
            </h2>
            <p className="text ">
              O que faz de um tratado militar, escrito por volta de 500 a.C.,
              manter-se atual a ponto de ser publicado praticamente no mundo
              todo até os dias de hoje? Você verá que, em A arte da guerra, as
              estratégias transmitidas pelo general chinês Sun Tzu carregam um
              profundo conhecimento da natureza humana. Elas transcendem os
              limites dos campos de batalha e alcançam o contexto das pequenas
              ou grandes lutas cotidianas, sejam em ambientes competitivos -
              como os do mundo corporativo - sejam nos desafios internos, em que
              temos de encarar nossas próprias dificuldades. Se você não conhece
              a si mesmo nem o inimigo, sucumbirá a todas as batalhas. Sun Tzu
            </p>
          </Col>
        </Row>

        <Row>
          <Col
            xxl={{ offset: 1, span: 6 }}
            xl={{ offset: 1, span: 5 }}
            md={{ offset: 1, span: 5 }}
            sm={{ span: 12 }}
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <h2 className="title pt-5">Análise</h2>
            <p className="text ">
              O livro está dividido em 13 capítulos, sendo que cada um tematiza
              diferentes aspectos da estratégia bélica. Neste tratado sobre a
              guerra, o conflito é abordado como uma característica inseparável
              do ser humano. A própria guerra é mencionada como um mal
              necessário, mas um mal que deve ser evitado sempre que possível.
              Um detalhe interessante: A Arte da Guerra foi introduzido no Japão
              por volta de 760 d.C. e rapidamente se tornou popular entre os
              generais japoneses. O livro desempenhou um papel significativo na
              unificação do Japão uma vez que os samurais ficaram conhecidos por
              terem honrado os ensinamentos desta obra. Há relatos também de que
              o imperador francês Napoleão havia estudado os escritos militares
              da Sun e usou-os efetivamente na guerra contra o resto da Europa.
            </p>
          </Col>
          <Col data-aos="fade-down" data-aos-duration="2000">
            <Image src="../images/livro-2.png" className="book-image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
