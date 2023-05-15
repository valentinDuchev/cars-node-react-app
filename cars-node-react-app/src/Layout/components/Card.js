import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

function CarCard(props) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.brand} {props.model}</Card.Title>
                <Card.Text>
                    {props.doors} Врати,
                    {props.seats} Места,
                    { }
                    {props.extras.map((extra) => extra + ', ')}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Клас: {props.carClass}</ListGroup.Item>
                <ListGroup.Item>Тип: {props.typeCar}</ListGroup.Item>
                <ListGroup.Item>Трансмисия: {props.transmission}</ListGroup.Item>
                <ListGroup.Item>Цена: {props.pricePerDay} лв/Ден</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Card.Link as={Link} to={`http://localhost:3000/car/${props.id}`}>Резервирай този автомобил</Card.Link>
            </Card.Body>
        </Card>
    );
}

export default CarCard;