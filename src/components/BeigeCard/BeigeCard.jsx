import { Col, Container, Row } from "react-bootstrap";
import "./beigeCard.css"

// eslint-disable-next-line react/prop-types
export function CardBeige({id,photo,title,text}) {
  return (
       <section id={id}>
        <Container fluid className="custom-container2 text-md-start">
        <Row>
        <Col className="p-6" sm={5}>
            {photo}
            </Col>

            <Col className="custom-col p-6  " sm={7}>
            <h1 className="display-5 text-center ">{title}</h1>
            <div className="lead p-2 ">{text}</div>
            </Col>
        </Row>
       
    </Container>
    </section>
     
      
   
  );
}