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
                    <iframe src="https://www.google.com/maps/place/%D0%B1%D1%83%D0%BB.+%E2%80%9E%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D1%81%D0%BB%D0%B0%D0%B2+%D0%92%D0%B0%D1%80%D0%BD%D0%B5%D0%BD%D1%87%D0%B8%D0%BA%E2%80%9C+18,+9000+%D0%92%D0%B0%D1%80%D0%BD%D0%B0+%D0%A6%D0%B5%D0%BD%D1%82%D1%8A%D1%80,+%D0%92%D0%B0%D1%80%D0%BD%D0%B0/@43.2071372,27.9082566,17z/data=!4m16!1m9!3m8!1s0x40a4538aa3c04083:0xe501ffb3ecd18d82!2z0LHRg9C7LiDigJ7QktC70LDQtNC40YHQu9Cw0LIg0JLQsNGA0L3QtdC90YfQuNC64oCcIDE4LCA5MDAwINCS0LDRgNC90LAg0KbQtdC90YLRitGALCDQktCw0YDQvdCw!3b1!8m2!3d43.2071372!4d27.9104453!10e5!16s%2Fg%2F11c28wr23z!3m5!1s0x40a4538aa3c04083:0xe501ffb3ecd18d82!8m2!3d43.2071372!4d27.9104453!16s%2Fg%2F11c28wr23z" title='location' width="500" height="350" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </Col>
                <Col>
                    <h3>Свържете се с нас: </h3> <br/>
                    <ContactsForm/>
                </Col>
            </Row>
        </Container>
    );
}