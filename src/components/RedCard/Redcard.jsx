import { Col, Container, Row } from "react-bootstrap";
import "./redcard.css"
//eslint-disable-next-line react/prop-types
export function CardRed({id,photo,title,text}) {
  return (
    <section id={id}>
        <Container fluid className="custom-container3">
        <Row>

            <Col className="custom-col p-6" sm={7}>
            <h1 className="display-5 text-center ">{title}</h1>
            <p className="lead p-2">{text}</p>
            </Col>

            <Col className="p-6" sm={5}>
            {photo}
            </Col>
          
        </Row>
       
    </Container>
    </section>
    
 
   
  );
}

