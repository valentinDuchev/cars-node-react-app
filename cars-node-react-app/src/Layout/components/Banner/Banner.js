import { Container, Row, Col } from 'react-bootstrap';
import styles from './Banner.module.css';

export default function Banner() {
    return (
    <section className={styles['banner-section']}>
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col className="text-center">
            <h2 className={styles['banner-content__text__h2']}>"Избери комфорта на своята почивка - наеми кола от нас"</h2>
          </Col>
        </Row>
      </Container>
    </section>
  );
}