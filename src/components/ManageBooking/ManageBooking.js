import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const ManageBooking = () => {
    const[bookingTours, setBookingTours] =useState([]);
    const {user} = useAuth();

    useEffect(() =>{
        fetch('https://bloodcurdling-spider-17696.herokuapp.com/bookingTour')
        .then(res => res.json())
        .then(data => setBookingTours(data));
    }, []);

    // delete a single booking
    const handleDelete = id =>{
        const confirm = window.confirm('Are you sure to delete booking?');
        if(confirm){
            const url = `https://bloodcurdling-spider-17696.herokuapp.com/bookingTour/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = bookingTours.filter(bookingTour => bookingTour._id !== id);
                setBookingTours(remaining);
            })
        }
    }

    // update a pending status
    const handleUpdate = id =>{
        fetch(`https://bloodcurdling-spider-17696.herokuapp.com/bookingTour/${id}`, {
            method: 'PUT',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(user),
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                alert('Status Updated!');
            }
        })
    }

    return (
        <div>
            <div className="container">
                <h2 className="p-3 text-center">Manage All booking</h2>
                <div className="w-75 mx-auto">
                    <table className="table table-responsive table-hover shadow" >
                        <thead style={{color:'#5356ad'}}>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Tour</th>
                                <th scope="col">Email</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody className="fw-bold">
                            {
                                bookingTours.map(bookingTour =><tr key={bookingTour._id}>
                                    <td>{bookingTour.name}</td>
                                    <td>{bookingTour.title}</td>
                                    <td>{bookingTour.email}</td>
                                    <td>
                                    {
                                        bookingTour?.status==="Pending"?
                                        <button onClick={()=>handleUpdate(bookingTour._id)} className="btn btn-sm text-white btn-warning">Pending</button>
                                        :
                                        <button className="btn btn-sm btn-success">Approved</button>
                                    }
                                    </td>
                                    <td><button className="btn btn-danger btn-sm text-white" onClick={() => handleDelete(bookingTour._id)}>Delete</button></td>
                                  </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageBooking;