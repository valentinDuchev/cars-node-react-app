import '../../css/App.css';
import CarCard from '../Card';
import { useEffect, useState } from 'react';
import styles from './Cars.module.css'


function Cars() {

  const [cars, setcars] = useState([])


  useEffect(() => {

    try {
      fetch(`http://localhost:3001/api/allCars`, {
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


  return (
    <div>

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
    </div>
  );
}

export default Cars;