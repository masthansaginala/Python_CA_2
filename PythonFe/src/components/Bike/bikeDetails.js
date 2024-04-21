import React, { useEffect, useState } from 'react'
import NavBar from './navBar'
import { useDispatch } from "react-redux";
import { toggleModel } from '../../utils/modelSlice';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BIKE_IMAGE } from '../../constants';

const BikeDetails = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [bikeDetails, setBikeDetails] = useState();

    const fetchBikeDetails = async() => {
        const apiURL = `http://127.0.0.1:8000/bikes/${id}`;
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }

        try {
            const response = await fetch(apiURL, options);
            const data = await response.json();


            if (response.status === 200) {
                setBikeDetails(data);
            }

        }
        catch (err) {
            toast("Oops! Cannot login or sign up please try again");
        }
    }

    useEffect(() => {
        fetchBikeDetails();
    }, []);

    const handleEnquiry = () => {
        dispatch(toggleModel())
    }

    return (
        <div className='bike-details-container'>
            <NavBar />
            {bikeDetails && <div className='bike-details'>
                {bikeDetails.bike_name && <h3 className='bike-name-heading'>{bikeDetails.bike_name}</h3>}
                {/* <h3 className='bike-name-heading'>Bike name</h3> */}
                <div className='bike-details-attributes'>
                    {bikeDetails.location && <span className='bike-attribute'><b>Location :</b>{bikeDetails.location}</span>}
                    {bikeDetails.bike_model_year && <span className='bike-attribute'><b>Model year:</b>{bikeDetails.bike_model_year}</span>}
                    {bikeDetails.price && <span className='bike-attribute'><b>Price:</b>{bikeDetails.price}</span>}
                    {bikeDetails.no_of_owners && <span className='bike-attribute'><b>No of owners:</b>{bikeDetails.no_of_owners}</span>}
                    {bikeDetails.colour && <span className='bike-attribute'><b>Colour:</b>{bikeDetails.colour}</span>}
                    {bikeDetails.seating_capacity && <span className='bike-attribute'><b>Seating capacity:</b>{bikeDetails.seating_capacity}</span>}
                    {/* <span className='bike-attribute'><b>Location :</b>Location</span>
                    <span className='bike-attribute'><b>Model year:</b>Model year</span>
                    <span className='bike-attribute'><b>Price:</b>Model year</span>
                    <span className='bike-attribute'><b>No of owners:</b>No of owners</span>
                    <span className='bike-attribute'><b>Colour:</b>Colour</span>
                    <span className='bike-attribute'><b>Seating capacity:</b>Seating capacity</span> */}
                </div>
                <div className='bike-detail-img-container'>
                    <img className='bike-detail-img' alt='bike-img-1' src={bikeDetails.bike_image_1} />
                    <img className='bike-detail-img' alt='bike-img-2' src={bikeDetails.bike_image_2} />
                    <img className='bike-detail-img' alt='bike-img-3' src={bikeDetails.bike_image_3} />
                    {/* <img className='bike-detail-img' alt='bike-img-1' src={BIKE_IMAGE} />
                    <img className='bike-detail-img' alt='bike-img-2' src={BIKE_IMAGE} />
                    <img className='bike-detail-img' alt='bike-img-3' src={BIKE_IMAGE} /> */}
                </div>
                <button className='enquiry-btn' onClick={handleEnquiry}>Enquiry</button>
            </div>}
            <ToastContainer />
        </div>

    )
}

export default BikeDetails