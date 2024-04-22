import { Container, Badge } from "react-bootstrap";
import "./presentation.css"


export function Presentation() {
    return (
        <section id="presentation">
            <div className="middle-page">
                <Container className="custom-container md-5 shadow rounded border text-sm">
                    <h1 className="display-1 text-">Welcome to <Badge className="custom-badge bg-danger" variant="danger">Salutis</Badge></h1>
                    <p className="lead text-danger text-md m-2">Healthcare excellence for you and your family</p>
                </Container>
            </div>
        </section>


    )
}