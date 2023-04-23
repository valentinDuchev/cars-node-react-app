import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function Header() {
    return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand>
            
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" bg="light">
            <Nav.Link>Начало</Nav.Link>
            <Nav.Link>За нас</Nav.Link>
            <Nav.Link>Меню</Nav.Link>
            <Nav.Link>Контакти</Nav.Link>
            <Nav.Link>Резервация</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}