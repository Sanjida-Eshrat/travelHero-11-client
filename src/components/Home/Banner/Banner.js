import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../Images/banner/banner1.jpg';
import banner2 from '../../../Images/banner/Sajek2.jpg';
import banner3 from '../../../Images/banner/banner5.jpg';

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        height="550px"
                        alt="First slide"
                    />
                    {/* <Carousel.Caption  className="text-start">
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        height="550px"
                        alt="Second slide"
                    />

                    {/* <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        height="550px"
                        alt="Third slide"
                    />

                    {/* <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;