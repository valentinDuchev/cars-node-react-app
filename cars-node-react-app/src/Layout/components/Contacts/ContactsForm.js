import { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import styles from '../Contacts/ContactsForm.module.css';

export default function ContactsForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [comments, setComments] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const templateParams = {
      firstName,
      lastName,
      email,
      phone,
      comments,
    };

    emailjs.send('service_ajfs478', 'template_4tvrfgp', templateParams, 'FYMcx3OMEr_ndqfRD')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setComments('');
      }, (error) => {
        console.log('FAILED...', error);
      });
  }

  return (
    <Form className={styles.Form} onSubmit={handleSubmit}>
      <Row>
        <Col>
          <Form.Group controlId="formBasicFirstName">
            <Form.Label></Form.Label>
            <Form.Control type="text" name="firstName" value={firstName} onChange={(event) => setFirstName(event.target.value)} placeholder="Име *" required />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formBasicLastName">
            <Form.Label></Form.Label>
            <Form.Control type="text" name="lastName" value={lastName} onChange={(event) => setLastName(event.target.value)} placeholder="Фамилия *" required />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Group controlId="formBasicEmail">
            <Form.Label></Form.Label>
            <Form.Control type="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email *" required />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formBasicPhone">
            <Form.Label></Form.Label>
            <Form.Control type="tel" name="phone" value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="Телефон *" required />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group controlId="formBasicComments">
        <Form.Label></Form.Label>
        <Form.Control as="textarea" name="comments" value={comments} onChange={(event) => setComments(event.target.value)} rows={3} placeholder="Въведете вашите въпроси или коментари" required />
      </Form.Group>
      <Button variant="primary" type="submit">
        Изпрати
      </Button>
    </Form>
  );
} 
