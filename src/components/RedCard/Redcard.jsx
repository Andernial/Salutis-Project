import { Col, Container, Row } from "react-bootstrap";
import "./redcard.css"

export function CardRed() {
  return (
    <section id="equipaments">
        <Container fluid className="custom-container3">
        <Row>

            <Col className="custom-col p-6" sm={7}>
            <h1 className="display-5 text-center ">Infra Structure and equipment</h1>
            <p className="lead p-2"> Completa isso com os textos do deivide located at 123 Health avenue, saluts Hospital is a benchmark in healthcare for the population of the region. The institution offers a wide range of medical and surgical services, woth a team of highly qualified and experienced professionals.</p>
            </Col>

            <Col className="p-6" sm={5}>
            <img src="./src\assets\images\hospital.png" alt="hospital" className="img-fluid" />
            </Col>
          
        </Row>
       
    </Container>
    </section>
    
 
   
  );
}

