import React from 'react';
import { Col, Row } from 'react-bootstrap';
import review1 from '../../Images/Review/testimonials-1.jpg';
import review2 from '../../Images/Review/testimonials-2.jpg';
import review3 from '../../Images/Review/testimonials-3.jpg';

const Reviews = () => {
    return (
        <div className="mt-5 pb-4 container">
            <h2 className="text-center py-4">Our Clients Review</h2>
            <Row xs={1} md={3} className="g-2 mt-3">
                <Col>
                    <div className="text-center shadow" height="400px">
                        <img src={review1} width="180" height="180" className="d-inline-block align-top p-3 rounded-circle" alt=""/>
                        <h3 className="text-primary p-1"><i>Erik Voss</i></h3>
                        <blockquote className="p-4 text-secondary"><i>"I booked my Sylhet trip from TravelHero. I had my best travel experience with them."</i></blockquote>
                    
                    </div>
                </Col>
                <Col>
                    <div className="text-center shadow" height="400px">
                        <img src={review2} width="180" height="180" className="d-inline-block align-top p-3 rounded-circle" alt=""/>
                        <h3 className="text-primary p-1"><i>Olivia Jackson</i></h3>
                        <blockquote className="p-4 text-secondary"><i>"I booked my Bandarban trip from TravelHero. I had my best travel experience with them."</i></blockquote>
                    </div>
                </Col>
                <Col>
                    <div className="text-center shadow" height="400px">
                        <img src={review3} width="180" height="180" className="d-inline-block align-top p-3 rounded-circle" alt=""/>
                        <h3 className="text-primary p-1"><i>Nigella Lawson</i></h3>
                        <blockquote className="p-4 text-secondary"><i>"I booked my Cox's bazer trip from TravelHero. I had my best time with them."</i></blockquote>
                    
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Reviews;