import React, { useState } from 'react'
import NavBar from './navBar'
import { useDispatch, useSelector } from "react-redux";
import { addUser } from '../../utils/userSlice';
import { toggleModel } from '../../utils/modelSlice';

const BikeDetails = () => {
    const dispatch = useDispatch();
    const [showModel, setShowModel] = useState(false);

    const handleEnquiry = () => {
        dispatch(toggleModel())
        // setShowModel(!);
    }

    return (
        <div className='bike-details-container'>
            <NavBar />
            <div className='bike-details'>
                <h3 className='bike-name-heading'>Bike Details</h3>
                <button onClick={handleEnquiry}>Enquiry</button>
            </div>
        </div>

    )
}

export default BikeDetails