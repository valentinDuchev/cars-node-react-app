import '../../css/App.css';
import CarCard from '../Card';
import { useEffect, useState } from 'react';
import styles from './Cars.module.css'

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function Cars() {

  const [cars, setcars] = useState([])

  const [show, setShow] = useState(false);



  useEffect(() => {

    try {
      fetch(`http://localhost:3005/api/allCars`, {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      })
        .then((response) => response.json())
        .then((data) => {
          setcars(data.result)
        })
        .catch((err) => {
          console.log(err.message);
        });
    } catch (err) {
      console.log(err)
    }

  }, [])

  const handleClose = () => {
    setShow(false)
  }

  const handleShow = () => {
    setShow(true)
  }


  return (
    <div>

      <button onClick={handleShow}>Sort Cars</button>

      <div className={styles.carsDiv}>


        {cars && cars.map((car) =>

          <CarCard

            key={car._id}

            brand={car.brand}
            carClass={car.carClass}
            doors={car.doors}
            extras={car.extras}
            image={car.image}
            model={car.model}
            pricePerDay={car.pricePerDay}
            seats={car.seats}
            transmission={car.transmission}
            typeCar={car.typeCar}
            id={car._id}
          />

        )}
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Filter</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto'   }}>

          <div style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto'  }}>

            <div style={{ marginLeft: 'auto', marginRight: 'auto'  }}>
              <select data-placeholder="Make" class="chzn-select" tabindex="2" id="make" >
                <option value="">Марка</option>
                <option value="ACURA">ACURA</option>
                <option value="ASTON MARTIN">ASTON MARTIN</option>
                <option value="AUDI">AUDI</option>
                <option value="BENTLEY">BENTLEY</option>
                <option value="BMW">BMW</option>
                <option value="BUICK">BUICK</option>
                <option value="CADILLAC">CADILLAC</option>
                <option value="CHEVROLET">CHEVROLET</option>
                <option value="CHRYSLER">CHRYSLER</option>
                <option value="DODGE">DODGE</option>
                <option value="FERRARI">FERRARI</option>
                <option value="FORD">FORD</option>
                <option value="GMC">GMC</option>
                <option value="HONDA">HONDA</option>
                <option value="HUMMER">HUMMER</option>
                <option value="HYUNDAI">HYUNDAI</option>
                <option value="INFINITI">INFINITI</option>
                <option value="ISUZU">ISUZU</option>
                <option value="JAGUAR">JAGUAR</option>
                <option value="JEEP">JEEP</option>
                <option value="KIA">KIA</option>
                <option value="LAMBORGHINI">LAMBORGHINI</option>
                <option value="LAND ROVER">LAND ROVER</option>
                <option value="LEXUS">LEXUS</option>
                <option value="LINCOLN">LINCOLN</option>
                <option value="LOTUS">LOTUS</option>
                <option value="MASERATI">MASERATI</option>
                <option value="MAYBACH">MAYBACH</option>
                <option value="MAZDA">MAZDA</option>
                <option value="MERCEDES-BENZ">MERCEDES-BENZ</option>
                <option value="MERCURY">MERCURY</option>
                <option value="MINI">MINI</option>
                <option value="MITSUBISHI">MITSUBISHI</option>
                <option value="NISSAN">NISSAN</option>
                <option value="PONTIAC">PONTIAC</option>
                <option value="PORSCHE">PORSCHE</option>
                <option value="ROLLS-ROYCE">ROLLS-ROYCE</option>
                <option value="SAAB">SAAB</option>
                <option value="SATURN">SATURN</option>
                <option value="SUBARU">SUBARU</option>
                <option value="SUZUKI">SUZUKI</option>
                <option value="TOYOTA">TOYOTA</option>
                <option value="VOLKSWAGEN">VOLKSWAGEN</option>
                <option value="VOLVO">VOLVO</option>
              </select>
            </div>

            <div style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'  }}>
              <select data-placeholder="Type" class="chzn-select" tabindex="2" id="type" >
                <option value="">Тип</option>
                <option value="Sedan">Седан</option>
                <option value="Hatchback">Хечбек</option>
                <option value="Combi">Комби</option>
              </select>
            </div>

            <div style={{ display: 'block',marginLeft: 'auto', marginRight: 'auto'  }}> 
              <select data-placeholder="Type" class="chzn-select" tabindex="2" id="type" >
                <option value="">Клас</option>
                <option value="Muscle">Muscle Car</option>
                <option value="Luxury">Luxury</option>
                <option value="Middle">Middle</option>
                <option value="Low">Low</option>
              </select>
            </div>

            <div style={{ marginLeft: 'auto', marginRight: 'auto'  }}>
              <select data-placeholder="Type" class="chzn-select" tabindex="2" id="type" >
                <option value="">Трансмисия</option>
                <option value="Muscle">Автоматична</option>
                <option value="Luxury">Ръчна</option>
              </select>
            </div>

            <div style={{ marginLeft: 'auto', marginRight: 'auto'  }}>
              <select data-placeholder="Type" class="chzn-select" tabindex="2" id="type" >
                <option value="">Цена /на ден/</option>
                <option value="Muscle">25-50</option>
                <option value="Luxury">51-75</option>
                <option value="Middle">76-100</option>
                <option value="Low">101-150</option>
                <option value="Low">150+</option>
              </select>
            </div>

          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" form='modalForm' type='submit'>
            Save Changes

          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Cars;