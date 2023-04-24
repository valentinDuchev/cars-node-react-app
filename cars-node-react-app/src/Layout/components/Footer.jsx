import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import styles from '../css/Footer.module.css';
import '../css/all.min.css';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase text-dark fw-bold mb-4'>
                <MDBIcon icon="car" className="me-3" />
                Apex
              </h6>
              <p>Имаме широка гама от автомобили за наем и предлагаме различни пакети за наемане на автомобили за кратки и дълги периоди от време.</p>
              <p>
                <MDBIcon icon="home" className="me-2"  />
                ул.Владислав Варненчик 18, Варна
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-2" />
                apexrental@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-2" />
                +359 88 361 8445
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase text-dark fw-bold mb-4'>Информация</h6>
              <p>
                <a href='/about' className='text-reset'>
                  За нас
                </a>
              </p>
              <p>
                <a href='/cars' className='text-reset'>
                  Автомобили
                </a>
              </p>
              <p>
              <a href='/contacts' className='text-reset'>
                  Контакти
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase text-dark fw-bold mb-4'>Работно време</h6>
              <p>
                Понеделник-Петък: 9:00 - 20:00 
              </p>
              <p>
                Събота: 9:00 - 19:00
              </p>
              <p>
                Неделя: почивен ден
              </p>
            </MDBCol>

            <MDBCol md="3" lg="3" xl="3" className='mx-auto mb-4'>
            <h6 className='text-uppercase text-dark fw-bold mb-4 d-flex justify-content-center'>Абониране</h6>
            <p>Абонирайте се и получавайте последните новини</p>
            <form>
                <div className="form-group">
                <input type="email" className="form-control" placeholder="Въведете имейл" /><br/>
                </div>
                <div className="d-flex justify-content-center"> 
                <button type="submit" className="btn btn-primary">Изпрати</button>
                </div>
            </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      
      <section className='d-flex justify-content-center border-bottom text-center text-dark p-3'>
          <a href='https://github.com/valentinDuchev/cars-node-react-app' target="blank" className='me-4 text-reset justify-content-center'>
            <MDBIcon fab icon="github" size="2x" />
          </a>
      </section>
    </MDBFooter>
  );
}