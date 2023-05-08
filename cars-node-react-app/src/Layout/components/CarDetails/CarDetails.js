import { Navigate, useParams } from "react-router"
import { Dropdown, Form } from 'react-bootstrap';

import { useNavigate } from "react-router-dom";


import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import styles from './CarDetails.module.css'
import { useEffect, useState } from "react";




export const CarDetails = () => {

    const [car, setCar] = useState('')

    const { id } = useParams()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [number, setNumber] = useState('')
    const [age, setAge] = useState('')
    const [pickUpDate, setPickupDate] = useState('')
    const [dropOffDate, setDropoffDate] = useState('')

    const [data, setData] = useState({})

    const [show, setShow] = useState(false);

    const navigate = useNavigate()

    const handleClose = () => {
        setShow(false);

        navigate('/')

    }




    useEffect(() => {
        try {
            fetch(`http://localhost:3001/api/car/${id}`, {
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })
                .then((response) => response.json())
                .then((data) => {
                    setCar(data.result)
                })
                .catch((err) => {
                    console.log(err.message);
                });
        } catch (err) {
            console.log(err)
        }

    }, [number, firstName, lastName, age, pickUpDate, dropOffDate, data])

    const onFormSubmit = () => {


        const difference = (Math.abs(new Date(dropOffDate) - new Date(pickUpDate)))

        const days = (Math.ceil(difference / (1000 * 3600 * 24)))

        // console.log(new Date(pickUpDate).getTime())

        const data = {
            firstName,
            lastName,
            pickUpDate,
            dropOffDate,
            age,
            number,
            carId: car._id,
            days,
            price: Number(days) * Number(car.pricePerDay)
        }

        setData(data)

        try {
            fetch('http://localhost:3001/api/reservation', {
                method: 'POST',
                body: JSON.stringify({
                    firstName,
                    lastName,
                    pickupDate: pickUpDate,
                    dropOffDate,
                    age,
                    number,
                    carId: car._id,
                    days,
                    price: Number(days) * Number(car.pricePerDay)
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    setShow(true)

                })
                .catch((err) => {
                    console.log(err.message);
                });
        } catch (err) {
            console.log(err)
        }
        console.log(data)
    }



    return (
        <div>
            <h1>{car.brand} {car.model}</h1>
            <img src={car.image} />



            <div style={{ marginLeft: 'auto', marginRight: 'auto', width: '70%' }}>
                <div className="row" style={{ display: 'grid', gridTemplateColumns: '50% 50%' }}>
                    {/* <div className="col-md-4"> */}
                    <Form.Group controlId="dob">
                        <Form.Label>Дата на наемане</Form.Label>
                        <Form.Control
                            type="date"
                            name="pickUpDate"
                            placeholder="01/01/2023"
                            onChange={(e) => setPickupDate(e.target.value)}
                        />
                    </Form.Group>


                    <Form.Group controlId="dob">
                        <Form.Label>Дата на връщане</Form.Label>
                        <Form.Control
                            type="date"
                            name="dropOffDate"
                            placeholder="01/01/2023"
                            onChange={(e) => setDropoffDate(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="dob">
                        <Form.Label>Име</Form.Label>
                        <Form.Control type="text" name="firstName" placeholder="Peter" onChange={(e) => setFirstName(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="dob">
                        <Form.Label>Фамилия</Form.Label>
                        <Form.Control type="text" name="lastName" placeholder="Petrov" onChange={(e) => setLastName(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="dob">
                        <Form.Label>Телефон</Form.Label>
                        <Form.Control type="number" name="lastName" placeholder="0000000000" onChange={(e) => setNumber(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="dob">
                        <Form.Label>Възраст</Form.Label>
                        <Form.Control type="number" name="lastName" placeholder="22" onChange={(e) => setAge(e.target.value)}
                        />
                    </Form.Group>

                    <br /><br /><br />


                </div>

                <Form.Group controlId="dob" style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto' }}>
                    <Form.Control
                        onClick={() => onFormSubmit()}
                        type="submit" name="submit" value="Резервирай" style={{ backgroundColor: 'RGB(186, 186, 186)' }} />
                </Form.Group>
            </div>

            <br />
            <h3>! Можете да вземете автомобилът от офисът ни в гр.Варна, улица Джеймс Баучер 5 !</h3>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Благодарим за резервацията, {firstName}!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Цената за автомобилът за периода на резервацията ( {data.days} ) e {data.price}.00 лв.</Modal.Body>
                <Modal.Body>Можете да заплатите цената в деня на взимане на автомобила с карта или в брой в нашия офис във Варна.</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Обратно на заглавна страница
                    </Button>
                </Modal.Footer>
            </Modal>






        </div >
    )
}