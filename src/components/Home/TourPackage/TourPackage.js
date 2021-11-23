import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TourPackage = (props) => {
    const { _id, title, price,duration, description, img } = props.tour;
    return (
        <div>
             <Col>
                <Card style={{height:'500px'}} className="border-light shadow text-start">
                    <Card.Img variant="top" src={img} style={{height:'250px'}} className="img-fluid img-style"/>
                    <Card.Body>
                        <Card.Title>{title.slice(0,25)}</Card.Title>
                        <Card.Text>{description.slice(0,80)}</Card.Text>
                        <Card.Text className="fw-bold">{duration}</Card.Text>
                        <Card.Text>Price: BDT {price}</Card.Text>
                        <Link to={`/booking/${_id}`}>
                            <Button style={{backgroundColor:'#5356ad'}} >Book Now</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default TourPackage;