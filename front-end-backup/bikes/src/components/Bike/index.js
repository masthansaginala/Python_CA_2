import React from 'react';
import { BIKE_IMAGE } from '../../constants';
import "./index.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate("/login");
    }

    return (
        <div>
            <img
                alt="bike-home"
                className='bike-bg-img'
                src={BIKE_IMAGE}
            />
            <button
                className='get-started'
                onClick={handleGetStarted}
            >
                Get started
            </button>
        </div>
    )
}
