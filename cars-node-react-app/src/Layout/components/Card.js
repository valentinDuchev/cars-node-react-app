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
                    {props.doors} Doors,
                    {props.seats} Seats,
                    { }
                    {props.extras.map((extra) => extra + ', ')}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Class: {props.carClass}</ListGroup.Item>
                <ListGroup.Item>Type: {props.typeCar}</ListGroup.Item>
                <ListGroup.Item>Transmission: {props.transmission}</ListGroup.Item>
                <ListGroup.Item>Price: ${props.pricePerDay}/Day</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Card.Link as={Link} to={`http://localhost:3000/car/${props.id}`}>Book that car</Card.Link>
            </Card.Body>
        </Card>
    );
}

export default CarCard;