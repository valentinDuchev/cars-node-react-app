import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from '../css/Header.module.css';
import { useNavigate } from "react-router-dom";


export default function Header() {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/');
  };

  const navigateToAbout = () => {
    navigate('/about');
  };

  const navigateToCars = () => {
    navigate('/cars');
  };

  const navigateToContacts = () => {
    navigate('/contacts');
  };

    return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand>

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <div className="mx-auto">
          <Nav className="justify-content-center" bg="light">
            <Nav.Link className={styles.link} onClick={navigateToHome}>Начало</Nav.Link>
            <Nav.Link onClick={navigateToAbout}>За нас</Nav.Link>
            <Nav.Link onClick={navigateToCars}>Автомобили</Nav.Link>
            <Nav.Link onClick={navigateToContacts}>Контакти</Nav.Link>
          </Nav>
        </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}