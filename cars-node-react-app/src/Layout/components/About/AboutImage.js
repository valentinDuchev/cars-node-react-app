import React from "react";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../About/AboutImage.module.css";
import "../About/AboutImage.module.css";
import background from '../../images/about.jpg';


export default function AboutImage() {
    return(
        <Container className={styles.AboutImage}>
            <div className={styles.overlay}></div>
            <img className ={styles.background} src = {background} />
            <h2 className={styles.contactUs}>Нашата Мисия</h2>
        </Container>
    );
}