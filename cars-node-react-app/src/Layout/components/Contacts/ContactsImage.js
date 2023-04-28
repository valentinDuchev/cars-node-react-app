import React from "react";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../Contacts/ContactsImage.module.css";
import "../Contacts/ContactsImage.module.css";
import background from '../../images/contacts.jpg';


export default function ContactsImage() {
    return(
        <Container className={styles.contactsImage}>
            <div className={styles.overlay}></div>
            <img className ={styles.background} src = {background} alt="background" />
            <h2 className={styles.contactUs}>Свържете се с нас</h2>
        </Container>
    );
}