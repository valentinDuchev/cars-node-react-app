import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";
import styles from "../Contacts/ContactsInfo.module.css";
import ContactsForm from '../Contacts/ContactsForm';
import "../Contacts/ContactsInfo.module.css";

export default function ContactsInfo() {
    return (
        <Container>
            <Row className={styles.contactsRow}>
                <Col className={styles.contactsCol}>
                    <span className={styles.location}><i class="fa-solid fa-location-dot"></i></span>
                    <p>КЪДЕ СЕ НАМИРАМЕ</p>
                    <p><b>Владислав Варненчик 18, Варна</b></p>
                </Col>
                <Col className={styles.contactsCol}>
                    <span className={styles.phone}><i class="fa-solid fa-mobile-screen-button"></i></span>
                    <p>ТЕЛЕФОН</p>
                    <p><b>088 361 8445</b></p>
                </Col>
                <Col className={styles.contactsCol}>
                    <span className={styles.mail}><i class="fa-solid fa-envelope"></i></span>
                    <p>E-MAIL</p>
                    <p><b>apexrental@gmail.com</b></p>
                </Col>
                <Col className={styles.contactsCol}>
                    <span className={styles.workingTime}><i class="fa-solid fa-clock"></i></span>
                    <p>РАБОТНО ВРЕМЕ</p>
                    <p><b>Понеделник - Петък <br/>от 9:00 до 20:00 </b></p><br/>
                    <p><b>Събота <br/>от 9:00 до 19:00 </b></p>
                </Col>
            </Row>
            <Row className={styles.secondRow}>
                <Col>
                    <h3>Вижте къде сме на картата:</h3>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2908.1121416197316!2d27.908256615483378!3d43.20713717913919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a4538aa3c04083%3A0xe501ffb3ecd18d82!2z0LHRg9C7LiDigJ7QktC70LDQtNC40YHQu9Cw0LIg0JLQsNGA0L3QtdC90YfQuNC64oCcIDE4LCA5MDAwINCS0LDRgNC90LAg0KbQtdC90YLRitGALCDQktCw0YDQvdCw!5e0!3m2!1sbg!2sbg!4v1682819449109!5m2!1sbg!2sbg" title='location' width="500" height="350" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </Col>
                <Col>
                    <h3>Свържете се с нас: </h3> <br/>
                    <ContactsForm/>
                </Col>
            </Row>
        </Container>
    );
}