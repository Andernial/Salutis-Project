import { Col, Container, Row } from "react-bootstrap";
import "./carousel.css"

// eslint-disable-next-line react/prop-types
export function CardBeige({id,photo,title,text}) {
  return (
    <section id={id}>
    <Container fluid className="custom-container2">
      
        <Row>

          <Col className="p-6" sm={3}>
            {photo}
          </Col>

          <Col className="p-6" sm={9}>
            <h1 className="display-5 text-center ">{title}</h1>
            <p className="lead p-2">{text}</p>
          </Col>

        </Row>
       
    </Container>
    </section >

     
      
   
  );
}