import { Col, Container, Row } from "react-bootstrap";
import "./carousel.css"

export function CardBeige() {
  return (
    <section id="local">
    <Container fluid className="custom-container2">
      
        <Row>

          <Col className="p-6" sm={3}>
            <img src="./src\assets\images\imagem-main.png" alt="professional" className="img-fluid" />
          </Col>

          <Col className="p-6" sm={9}>
            <h1 className="display-5 text-center ">A benchmark in the region</h1>
            <p className="lead p-2"> Completa isso com os textos do deivide located at 123 Health avenue, saluts Hospital is a benchmark in healthcare for the population of the region. The institution offers a wide range of medical and surgical services, woth a team of highly qualified and experienced professionals.</p>
          </Col>

        </Row>
       
    </Container>
    </section >

     
      
   
  );
}

