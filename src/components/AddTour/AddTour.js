import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddTour.css';

const AddTour = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
       // console.log(data);
        axios.post('https://bloodcurdling-spider-17696.herokuapp.com/tours',data)
            .then(res => {
                if(res.data.insertedId){
                    alert('Added successfully');
                    reset();
                }
            })
    }
    return (
        <div className=" container w-50 mt-5 p-2 mb-4 mx-auto">
            <h1 className="pt-3">Add a <span style={{color:'orange'}}>Tour</span>  Package</h1>
 
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("title", { required: true, maxLength: 20 })} placeholder="Name" className="p-2 m-2 w-75"/>
                <br />
                <input {...register("description")} placeholder="Description" className="p-2 m-2 w-75"/>
                <br />
                <input  {...register("price")} placeholder="Price" className="p-2 m-2 w-75"/>
                <br />
                <input  {...register("duration")} type="number" placeholder="Duration" className="p-2 m-2 w-75"/>
                <br />
                <input {...register("img")} type="url" placeholder="Image url"  className="p-2 m-2 w-75"/>
                <br />
                <input type="submit" value="Add Tour" className="btn text-white fw-bold w-50" style={{backgroundColor:'#5356ad'}}/>
            </form>
        </div>
    );
};

export default AddTour;