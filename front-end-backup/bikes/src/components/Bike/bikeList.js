
import React, { useEffect, useState } from 'react'
import NavBar from './navbar'
import BikeCard from './bikeCard'
import { bikes } from './utils'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const BikeList = () => {
    const navigate = useNavigate();
    const [bikeList, setBikeList] = useState([]);
    const userId = JSON.parse(localStorage.getItem('userId'));
    const fetchBikesList = async() => {
        const apiURL = "http://127.0.0.1:8000/bikes/";
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }

        try{
            const response = await fetch(apiURL, options);
            const data = await response.json();

            setBikeList(data);
        }
        catch(err){
            toast("Cannot fetch the bike list, please try again!");
        }
    }

    useEffect(() => {
        if(!userId){
            navigate("/login");
        }
        fetchBikesList();
    }, [])


    return (
        <div className='bike-list-main-container'>
            <NavBar />
            <div className='bikelist-container'>
                {bikeList.length > 0 && bikeList.map((bike) => {
                    return (
                        <BikeCard
                            key={bike.id}
                            bike={bike}
                        />
                    )
                })}
            </div>
            <ToastContainer />
        </div>
    )
}

export default BikeList
