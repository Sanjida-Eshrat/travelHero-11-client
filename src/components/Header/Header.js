import React from 'react';
import { Container, Dropdown, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';
import newLogo from '../../Images/newLogo2.jpg';
const Header = () => {
    const {user,logOut} = useAuth();
    return (
        <div className="header">
            <Navbar bg="light" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand className="items">
                    <img
                        src={newLogo}
                        width="35"
                        height="35"
                        className="d-inline-block align-top"
                        alt=""
                    />{' '} 
                    <span style={{color:'orange'}}>Travel</span><span style={{color:'#5356ad'}}>Hero</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                <NavLink to="/home" className="items"><li> Home</li></NavLink>
                    <NavLink to="/about" className="items"><li> About</li></NavLink>
                    <NavLink to="/tours" className="items"><li> Tours</li></NavLink>
                    <NavLink to="/reviews" className="items"><li> Reviews</li></NavLink>
                    {
                        user.email && <span className="text-dark fw-bold ms-3 items">{user.displayName}</span>
                    }
                    {
                        user.email?
                        <Dropdown>
                        <Dropdown.Toggle style={{backgroundColor:'#5356ad'}} id="dropdown-basic" className="text-decoration-none text-white fs-6 ms-3 fw-bold items">
                           Profile
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item ><NavLink to='/myBooking' className="items2">My booking</NavLink></Dropdown.Item>
                            <Dropdown.Item ><NavLink to='/manageBooking' className="items2">Manage all booking</NavLink></Dropdown.Item>
                            <Dropdown.Item ><NavLink to='/addTour' className="items2">Add a new tour</NavLink></Dropdown.Item>
                            <Dropdown.Item  onClick={logOut} className="text-primary fw-bold ps-3">Logout</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                        :
                        <NavLink className="text-decoration-none text-white fs-6 ms-3 fw-bold btn btn-warning btn-sm items" to="/login">Login</NavLink>
                    } 
                </Nav>
                </Navbar.Collapse>   
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;