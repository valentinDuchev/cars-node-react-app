import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";
import styles from "../About/AboutInfo.module.css";
import "../About/AboutInfo.module.css";
import RestaurantView from '../../images/employee.jpg';

export default function AboutInfo() {
    return (
        <Container>
          <Row className={styles.aboutRow}>
            <Col className={styles.aboutRow}>
              <h3 className={styles.title}>Apex</h3>
              <p className={styles.text}>             
                Нашата компания предлага гъвкави опции за наем на автомобили, включително краткосрочен и дългосрочен наем, както и възможност за наем на автомобили за еднопосочни пътувания. Ние сме ангажирани да предоставяме най-добрите услуги на нашите клиенти, като осигуряваме конкурентни цени, безопасност, удобство и професионализъм във всички аспекти на нашата работа.

                Нашите клиенти могат да резервират автомобил онлайн или да се свържат с нашата клиентска поддръжка за персонализирани решения, включително допълнителни опции като детски столчета, навигационни системи и други.
              </p>
              <p className={styles.text}>Ние работим усилено, за да предложим нашите услуги на максимално количество хора, които пътуват, като осигуряваме безопасен и надежден начин за пътуване. Нашата мисия е да предоставим на нашите клиенти висококачествени автомобили, които да им дадат свободата да пътуват и да открият света, както и да предоставят ненадминато преживяване на пътя. </p>
            </Col>
            <Col className={styles.aboutcol}>
                <img className={styles.restaurantImage} src={RestaurantView} alt="Food"/>
            </Col>
          </Row>
        </Container>
      );
}