import "./third.css"
import { Col, Container, Row } from "react-bootstrap";

export function ThirdPage(){
    return(
        <Container fluid className="my-5 text-dark" >
        <section id="presentacion">

           
        <Row className="custom-section justify-content-center">
            
            <Col sm={4} md={3} lg={5}>
                <div className="main-image">
                    <img src="src/assets/images/hospital.png" alt="imagem header" />
                </div>
            </Col>
            <Col sm={8} md={6} lg={6}>
                <div className="main-text">
                    <h1 className="display-1 text-dark">Olá mundo</h1>
                    <h2 className="display-5 text-dark">Texto que será o subtitulo</h2>
                    <p className="lead ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat eleifend lacus, nec varius justo laoreet id. Integer ut mi sed libero pharetra lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam posuere mauris id leo ultrices, eu dictum dolor sagittis. Nulla vel aliquet tortor. Maecenas nec odio sapien. Morbi rutrum augue nec sapien commodo, sed cursus mauris tincidunt. Cras non luctus purus, quis fermentum leo. Duis laoreet felis at urna auctor, vitae ultricies justo blandit. Vestibulum et ex arcu. Aliquam tincidunt tristique sollicitudin. Suspendisse tincidunt vitae dolor intexto aleatorio que vai cobrir essa parte embaixo do titulo maior</p>
                </div>
            </Col>

        </Row>
        </section>
    </Container>
    )
}