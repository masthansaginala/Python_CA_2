import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EnquiryCard from './enquiryCard';
import { enquiries } from './utils';
import NavBar from './navBar';

const EnquiriesList = () => {
    const [enquiryList, setEnquiryList] = useState([]);

    const { id } = useParams();

    const fetchEnquiries = async() => {
        let apiURL = `http://127.0.0.1:8000/getinquiries/?id=${id}`;
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }

        try {
            const response = await fetch(apiURL, options);
            const data = await response.json();


            if (response ) {
                setEnquiryList(data);
            }

        }
        catch (err) {
            toast("Oops! Cannot fetch your enquiries");;
        }
    }

    useEffect(()=>{
        fetchEnquiries();
    },[])

    return (
        <div className='enquiry-container'>
            <NavBar />
            {enquiryList.length > 0 && enquiryList.map((enquiry)=>{
            // {enquiries.map((enquiry)=>{
                return(
                    <EnquiryCard
                        description={enquiry.description}
                    />
                )
            })}
            <ToastContainer />
        </div>
    )
}

export default EnquiriesList