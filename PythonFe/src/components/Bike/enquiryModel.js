import React, { useRef } from 'react'
import Modal from './model';
import { useDispatch } from "react-redux";
import { toggleModel } from '../../utils/modelSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Enquiry = () => {
    const dispatch = useDispatch();
    const mobileNumber = useRef();
    const description = useRef();

    const userId = JSON.parse(localStorage.getItem('userId'));

    const handleEnquirySubmit = async(event) => {
        event.preventDefault();

        const formData = {
            mobile_number: mobileNumber.current.value,
            description: description.current.value,
            user: userId
        }

        let apiURL = "http://127.0.0.1:8000/inquiry/";
        const options = {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            }
        }

        try {
            const response = await fetch(apiURL, options);

            if(response.status === 200){
                toast("Successfully stored enquiry details");
            }
            dispatch(toggleModel())

        }
        catch (err) {
            toast("Oops! Cannot store enquiry details");
        }
    }

    const handleEnquiryCancel = () => {
        dispatch(toggleModel());
    }

    return (
        <Modal>
            <form className='enquiry-container'>
                <h3 className='enquiry-heading'>Enquiry</h3>
                <input
                    className='enquiry-field'
                    type='number'
                    placeholder='Mobile number'
                    ref={mobileNumber}
                />
                <textarea
                    rows={4}
                    className='enquiry-field'
                    type='text'
                    placeholder='Description'
                    ref={description}
                />
                <div className='model-button-container'>
                    <button 
                        className='enquiry-submit'
                        onClick={handleEnquiryCancel}
                    >
                        Cancel
                    </button>
                    <button 
                        className='enquiry-submit'
                        onClick={handleEnquirySubmit}
                    >
                        Submit
                    </button>
                </div>
                <ToastContainer />
            </form>
        </Modal>
    )
}

export default Enquiry;