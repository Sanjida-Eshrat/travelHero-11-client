import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import TourPackage from '../TourPackage/TourPackage';

const TourPackages = () => {
    const [tours, setTours] = useState([])
    useEffect(() => {
       // fetch('packages.json')
        fetch('https://bloodcurdling-spider-17696.herokuapp.com/tours')
            .then(res => res.json())
            .then(data => setTours(data));
    }, [])
    return (
        <div className="mt-5 pb-4 container-fluid">
            <h2 className="text-center py-4">Our Best Travel Package</h2>
                { tours.length === 0 ? 
                 <Spinner animation="border"/>
                  :
                    <Row xs={1} md={3} className="g-3 mt-3">
                    {
                        tours.map(tour => <TourPackage
                            key={tour.id}
                            tour={tour}
                        ></TourPackage>)
                    }
                    </Row> 
                } 
        </div>
    );
};

export default TourPackages;