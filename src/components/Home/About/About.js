import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import about from '../../../Images/banner/Sajek3.jpg'
const About = () => {
    return (
        <div className="container my-5 p-5 w-75 shadow">
            <div className="row d-flex">
                <div className="col-lg-6 col-md-12 mt-5 text-start">
                    <h2>About <span  style={{color:'orange'}}>Travel</span><span style={{color:'#5356ad'}}>Hero</span></h2>
                    <p>TravelHero is of the largest travel companies serving both commercial and residential clients. Our dedicated staff has the expertise to handle a project of any complexity.</p>
                    <Link to="/login">
                            <Button style={{backgroundColor:'#5356ad'}} >Get Started</Button>
                    </Link>
                </div>
                <div className="col-lg-6 col-md-12 border border-light border-3">
                    <img src={about} alt="" className="img-fluid"/>
                </div>          
            </div>
        </div>
    );
};

export default About;