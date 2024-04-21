import React from 'react'
import Modal from './model';
import { useDispatch } from "react-redux";
import { toggleModel } from '../../utils/modelSlice';

const Enquiry = () => {
    const dispatch = useDispatch();

    const handleEnquirySubmit = (event) => {
        event.preventDefault();
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
                />
                <textarea
                    rows={4}
                    className='enquiry-field'
                    type='text'
                    placeholder='Description'
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
            </form>
        </Modal>
    )
}

export default Enquiry;