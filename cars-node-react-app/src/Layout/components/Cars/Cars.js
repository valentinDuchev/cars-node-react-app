import '../../css/App.css';
import CarCard from '../Card';
import { useEffect, useState } from 'react';
import styles from './Cars.module.css'

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function Cars() {

  const [cars, setcars] = useState([])

  const [show, setShow] = useState(false);

  const [brand, setBrand] = useState('')
  const [type, setType] = useState('')
  const [carClass, setCarClass] = useState('')
  const [transmission, setTransmission] = useState('')
  const [price, setPrice] = useState('')




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

  const onFormSubmit = (e) => {
    e.preventDefault()

    console.log('yes')
    setShow(false)

    let newCars = []


    if (brand !== '') {
      for (let i = 0; i < cars.length; i++) {
        if (cars[i].brand.toLowerCase() === brand.toLowerCase()) {
          newCars.push(cars[i])
        }
        setcars(newCars)
        console.log(newCars)
      }
    }

    if (type !== '' && brand !== '') {
      console.log(type)
      console.log(newCars)
      for (let i = 0; i < newCars.length; i++) {
        if (newCars[i].typeCar.toLowerCase() !== type.toLowerCase()) {
          newCars.splice(i, 1)
        }
        setcars(newCars)
        console.log(newCars)
      }
    } else if (type !== '' && brand === '') {
      for (let i = 0; i < cars.length; i++) {
        if (cars[i].typeCar.toLowerCase() === type.toLowerCase()) {
          newCars.push(cars[i])
        }
        setcars(newCars)
        console.log(newCars)
      }
    }

    if (transmission !== '' && brand !== '') {
      console.log(type)
      console.log(newCars)
      for (let i = 0; i < newCars.length; i++) {
        if (newCars[i].transmission.toLowerCase() !== transmission.toLowerCase()) {
          newCars.splice(i, 1)
        }
        setcars(newCars)
        console.log(newCars)
      }
    } else if (transmission !== '' && brand === '') {
      for (let i = 0; i < cars.length; i++) {
        if (cars[i].transmission.toLowerCase() === transmission.toLowerCase()) {
          newCars.push(cars[i])
        }
        setcars(newCars)
        console.log(newCars)
      }
    }

    if (carClass !== '' && brand !== '') {
      console.log(type)
      console.log(newCars)
      for (let i = 0; i < newCars.length; i++) {
        if (newCars[i].carClass.toLowerCase() !== carClass.toLowerCase()) {
          newCars.splice(i, 1)
        }
        setcars(newCars)
        console.log(newCars)
      }
    } else if (carClass !== '' && brand === '') {
      for (let i = 0; i < cars.length; i++) {
        if (cars[i].carClass.toLowerCase() === carClass.toLowerCase()) {
          newCars.push(cars[i])
        }
        setcars(newCars)
        console.log(newCars)
      }
    }

    if (brand !== '' && price !== '') {
      if (price === '25-50') {
        for (let i = 0; i < newCars.length; i++) {
          if (newCars[i].pricePerDay > 51) {
            newCars.splice(i, 1)
          }
          setcars(newCars)
          console.log(newCars)
        }
      } else if (price === '51-75') {
        for (let i = 0; i < newCars.length; i++) {
          if (newCars[i].pricePerDay < 51 || newCars[i].pricePerDay > 75) {
            newCars.splice(i, 1)
          }
          setcars(newCars)
          console.log(newCars)
        }
      } else if (price === '76-100') {
        for (let i = 0; i < newCars.length; i++) {
          if (newCars[i].pricePerDay < 76 || newCars[i].pricePerDay > 100) {
            newCars.splice(i, 1)
          }
          setcars(newCars)
          console.log(newCars)
        }

      } else if (price === '101-150') {
        for (let i = 0; i < newCars.length; i++) {
          if (newCars[i].pricePerDay < 101 || newCars[i].pricePerDay > 150) {
            newCars.splice(i, 1)
          }
          setcars(newCars)
          console.log(newCars)
        }
      } else if (price === '151+') {
        for (let i = 0; i < newCars.length; i++) {
          if (newCars[i].pricePerDay < 151) {
            newCars.splice(i, 1)
          }
          setcars(newCars)
          console.log(newCars)
        }
      }


    } else if (brand === '' && price !== '') {
      if (price === '25-50') {
        for (let i = 0; i < cars.length; i++) {
          if (Number(cars[i].pricePerDay) < 51) {
            newCars.push(cars[i])
          }
          setcars(newCars)
          console.log(newCars)
        }
      } else if (price === '51-75') {
        for (let i = 0; i < cars.length; i++) {
          if (Number(cars[i].pricePerDay) > 51 && Number(cars[i].pricePerDay) < 75) {
            newCars.push(cars[i])
          }
          setcars(newCars)
          console.log(newCars)
        }
      } else if (price === '76-100') {
        for (let i = 0; i < cars.length; i++) {
          if (Number(cars[i].pricePerDay) > 76 && Number(cars[i].pricePerDay) < 100) {
            cars.splice(cars[i])
          }
          setcars(newCars)
          console.log(newCars)
        }

      } else if (price === '101-150') {
        for (let i = 0; i < cars.length; i++) {
          if (Number(cars[i].pricePerDay) > 101 && Number(cars[i].pricePerDay) < 150) {
            newCars.push(cars[i])
          }
          setcars(newCars)
          console.log(newCars)
        }
      } else if (price === '151+') {
        for (let i = 0; i < cars.length; i++) {
          if (Number(cars[i].pricePerDay) > 151) {
            newCars.push(cars[i])
          }
          setcars(newCars)
          console.log(newCars)
        }
      }
    }

  }

  const resetFilters = () => {

    setBrand('')
    setType('')
    setTransmission('')
    setCarClass('')
    setPrice('')

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
  }

  return (
    <div>

      <button onClick={handleShow}>Сортирай</button>

      <button onClick={resetFilters}>Изчисти филтрите</button>

      <div className={styles.carsDiv}>


        {cars.length > 0 ? cars.map((car) =>

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

        ) : <h1>No cars in database!</h1>}
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Filter</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}>

          <div style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}>

            <form id="modalForm" onSubmit={onFormSubmit}>

              <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                <select data-placeholder="Make" className="chzn-select" tabIndex="2" id="make" onChange={(e) => setBrand(e.target.value)} value={brand} >
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
                  <option value="MERCEDES">MERCEDES-BENZ</option>
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
                  <option value="VW">VOLKSWAGEN</option>
                  <option value="VOLVO">VOLVO</option>
                </select>
              </div>

              <div style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} >
                <select data-placeholder="Type" className="chzn-select" tabIndex="2" id="type" onChange={(e) => setType(e.target.value)} value={type}>
                  <option value="">Тип</option>
                  <option value="Sedan">Седан</option>
                  <option value="Hatchback">Хечбек</option>
                  <option value="Combi">Комби</option>
                </select>
              </div>

              <div style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} >
                <select data-placeholder="Type" className="chzn-select" tabIndex="2" id="class" onChange={(e) => setCarClass(e.target.value)} value={carClass}>
                  <option value="">Клас</option>
                  <option value="Muscle">Американски "Muscle" Автомобил</option>
                  <option value="Luxury">Висок клас</option>
                  <option value="Middle">Среден клас</option>
                  <option value="Low">Нисък клас</option>
                </select>
              </div>

              <div style={{ marginLeft: 'auto', marginRight: 'auto' }} >
                <select data-placeholder="Type" className="chzn-select" tabIndex="2" id="transmission" onChange={(e) => setTransmission(e.target.value)} value={transmission}>
                  <option value="">Трансмисия</option>
                  <option value="Automatic">Автоматична</option>
                  <option value="Manual">Ръчна</option>
                </select>
              </div>

              <div style={{ marginLeft: 'auto', marginRight: 'auto' }} >
                <select data-placeholder="Type" className="chzn-select" tabIndex="2" id="price" name="price" onChange={(e) => setPrice(e.target.value)} value={price}>
                  <option value="">Цена /на ден/</option>
                  <option value="25-50">25-50 лв</option>
                  <option value="51-75">51-75 лв</option>
                  <option value="76-100">76-100 лв</option>
                  <option value="101-150">101-150 лв</option>
                  <option value="151+">151+ лв</option>
                </select>
              </div>

            </form>

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