import React, { useEffect, useRef, useState } from 'react'
import NavBar from './navBar'
import BikeCard from './bikeCard'
import { bikes } from './utils'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const BikeList = () => {
    const navigate = useNavigate();
    const [bikeList, setBikeList] = useState([]);
    const [searchKey, setSearchKey] = useState('');
    const userId = JSON.parse(localStorage.getItem('userId'));

    const search = useRef();

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

    const onSearchChange = (event) => {
        setSearchKey(event.target.value);
    }

    const submitSearch = async() => {
        let apiURL = `http://127.0.0.1:8000/bikes/search?search=${searchKey}`;
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }

        try {
            const response = await fetch(apiURL, options);
            const data = await response.json();


            if (response.status ) {
                setBikeList(data);
            }

        }
        catch (err) {
            toast("Oops! Cannot search, please try again.");
        }
    }

    return (
        <div className='bike-list-main-container'>
            <NavBar />
            <div>
                <input
                    className='search-field'
                    type='search'
                    placeholder='Bike name'
                    onChange={onSearchChange}
                    value={searchKey}
                />
                <button className='search-btn' onClick={submitSearch}>Search</button>
            </div>
            <div className='bikelist-container'>
                {/* {bikes.length > 0 && bikes.map((bike) => { */}
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