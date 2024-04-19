import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./header.css"

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" fixed="top">
    <Container >
      <Navbar.Brand href="#home" className='text-white'>Salutis</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#presentacion">Presentacion</Nav.Link>
          <Nav.Link href="#local">Local</Nav.Link>
          <Nav.Link href="#equipaments">Equipaments</Nav.Link>
          <Nav.Link href="#specialists">Specialists</Nav.Link>
          <Nav.Link href="#coverage">Coverage</Nav.Link>
          
        
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default Header;