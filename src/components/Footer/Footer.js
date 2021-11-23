import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
    <div style={{backgroundColor:' #aeb0df'}}>
        {/* <!-- Footer  */}
        <footer
                className="text-center text-lg-start text-white"
                >
            {/* Grid container  */}
            <div className=" p-4 pb-0">
            {/* Section: Links  */}
            <section className="">
                {/*Grid row */}
                <div className="row">
                {/* Grid column  */}
                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                    <h1 className="text-anim"><span style={{color:'orange'}}>Travel</span><span style={{color:'#5356ad'}}>Hero</span></h1>
                        <p>
                            <small>
                                Make memories with TravelHero.
                            </small>
                        </p>
                    </div>
                    {/* Grid column  */}

                    <hr className="w-100  d-md-none" />

                    {/* Grid column  */}
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <p className="text-white">
                            Home
                        </p>
                        <p className="text-white">
                            About
                        </p>
                        <p className="text-white">
                        Tour
                        </p>
                        <p className="text-white">
                        Services
                        </p>
                    </div>
                    {/* Grid column  */}

                    <hr className="w-100 d-md-none" />

                    {/* Grid column  */}
                    <hr className="w-100 d-md-none" />

                    {/* Grid column  */}
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="mb-4 font-weight-bold">Contact</h5>
                        <p><i className="fas fa-home mr-3"></i> Rampura, Dhaka, Bangladesh</p>
                        <p><i className="fas fa-envelope mr-3"></i> travelhero@gmail.com</p>
                        <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                    </div>
                    {/* Grid column  */}

                    {/* Grid column  */}
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="mb-4 font-weight-bold">Follow us</h5>

                        {/* Facebook  */}
                        <a
                        className="btn m-1 text-white"
                        href='#!' style={{backgroundColor: '#3b5998'}}
                        ><i className="fab fa-facebook-f"></i
                        ></a>

                        {/* Twitter  */}
                        <a
                        className="btn m-1 text-white"
                        href='#!' style={{backgroundColor:'#55acee'}}
                        ><i className="fab fa-twitter"></i></a>

                        {/* Google  */}
                        <a
                        className="btn m-1 text-white"
                        href='#!' style={{backgroundColor:'#dd4b39'}}
                        ><i className="fab fa-google"></i
                        ></a>

                        {/* Instagram  */}
                        <a
                        className="btn m-1 text-white"
                           href='#!' style={{backgroundColor:'#ac2bac'}}
                        ><i className="fab fa-instagram"></i></a>
                    </div>
               </div>
                {/*Grid row */}
            </section>
            {/* Section: Links  */}
            </div>
            {/* Grid container  */}
        </footer>
        {/* Footer  */}
        {/* Copyright  */}
        <div className=" text-center p-2 text-white" style={{backgroundColor: '#5356ad'}}>
            © 2021 Copyright: TravelHero         
        </div>
        {/*  Copyright  */}
        
    </div>
    );
};

export default Footer;