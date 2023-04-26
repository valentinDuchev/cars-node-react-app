import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './Header.module.css';
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
    <Navbar expand="lg" className={styles.navbar}>
      <Container>
        <Navbar.Brand>

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <div className="mx-auto">
          <Nav className="justify-content-center" bg="light">
            <Nav.Link onClick={navigateToHome} className={styles.navlink}>Начало</Nav.Link>
            <Nav.Link onClick={navigateToAbout} className={styles.navlink}>За нас</Nav.Link>
            <Nav.Link onClick={navigateToCars} className={styles.navlink}>Автомобили</Nav.Link>
            <Nav.Link onClick={navigateToContacts} className={styles.navlink}>Контакти</Nav.Link>
          </Nav>
        </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}