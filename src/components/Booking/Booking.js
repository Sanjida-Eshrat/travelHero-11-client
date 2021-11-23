import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Booking = () => {
    const { tourId } = useParams();
    const [tour, setTour] = useState({});
    const { user } = useAuth();
    const history = useHistory();
    const redirect_uri = '/myBooking';
    const {
        register, 
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
    useEffect(() =>{
        fetch(`https://bloodcurdling-spider-17696.herokuapp.com/tours/${tourId}`)
        .then(res => res.json())
        .then(data => setTour(data));
    },[]);

    const onSubmit = (data) => {
        data.status= "Pending";
        fetch('https://bloodcurdling-spider-17696.herokuapp.com/bookingTour', {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) =>{
              alert("Booked Successfully!");
              reset();
              history.push(redirect_uri);
        });
    };

    return (
        <div className="container">
            <Row xs={1} md={2} className="g-3 mt-3 p-5">
                <Col>
                    <Card style={{height:'600px'}} className="border-light shadow text-center w-100">
                        <Card.Img variant="top" src={tour.img} style={{height:'200px'}} className="img-fluid img-style"/>
                        <Card.Body>
                            <Card.Title style={{color:'#5356ad'}}>{tour.title}</Card.Title>
                            <Card.Text>{tour.description}</Card.Text>
                            <Card.Text className="fw-bold">{tour.duration}</Card.Text>
                            <Card.Text className="fw-bold">BDT {tour.price}/Per Person</Card.Text>
                        </Card.Body>
                    </Card>
                </Col> 
                <Col>
                <div className="w-100 mx-auto py-2 mb-5 shadow">
                    <div className="border-0  justify-content-center align-items-center">
                        <h2 style={{color:'#5356ad'}} className="p-3">Booking Form</h2>
                        <div className="mx-auto">
                           <form onSubmit={handleSubmit(onSubmit)}>
                                {
                                   tour?.title &&  <input
                                   {...register("title")}
                                   defaultValue={tour?.title}
                                   placeholder="Title"
                                   className="p-2 m-2 w-75 border border-secondary rounded"
                                   />
                                }
                               <br />
                               <input
                                {...register("name")}
                                defaultValue={user.displayName}
                                placeholder="Name"
                                className="p-2 m-2 w-75 border border-secondary rounded"
                                />
                               <br />
                               <input
                                {...register("email")}
                                defaultValue={user.email}
                                placeholder="Email"
                                className="p-2 m-2 w-75 border border-secondary rounded"
                                />
                               <br />
                               <input
                               {...register("date", { required: true })}
                               type="date"
                               className="p-2 m-2 w-75 border border-secondary rounded"
                               />
                                <br/>
                                <input
                                   {...register("duration")}
                                   type="number"
                                   placeholder="Duration"
                                   className="p-2 m-2 w-75 border border-secondary rounded"
                                />
                                <br/>
                               <select {...register("gender")} className="p-2 m-2 w-75 border border-secondary rounded">
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                              </select>
                              <br/>
                              <input
                              {...register("city", { required: true })}
                              placeholder="City"
                              className="p-2 m-2 w-75 border border-secondary rounded"
                              />
                              <br />
                              {errors.exampleRequired && <span>This field is required</span>}
                              <input type="submit" value="Confirm Booking" className="btn w-75 border border-primary text-white fw-bold rounded m-3" style={{backgroundColor:'#5356ad'}} />
                            </form>
                        </div>
                    </div>
                </div>
                </Col> 
            </Row> 
        </div>
    );
};

export default Booking;