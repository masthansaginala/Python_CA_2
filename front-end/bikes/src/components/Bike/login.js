import React, { useState } from 'react'
import { BIKE_IMAGE } from '../../constants';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [isSignUpForm, setIsSignUpForm] = useState(false);

    const handleChangeForm = () => {
        setIsSignUpForm(!isSignUpForm);
    }

    const handleAuthenticating = (event) => {
        event.preventDefault();
        navigate("/bikeList");
    }

    return (
        <div>
            <img
                alt="bike-home"
                className='bike-bg-img'
                src={BIKE_IMAGE}
            />
            <form className='login-main-container'>
                <h3 className='login-heading'>
                    {isSignUpForm ? 'Sign Up' : "Login"}
                </h3>
                <input
                    className='login-input-fields email-field'
                    type='text'
                    placeholder='User Name'
                />
                {isSignUpForm && <input
                    className='login-input-fields email-field'
                    type='text'
                    placeholder='Email Address'
                />}
                <input
                    className='login-input-fields password-field'
                    type='password'
                    placeholder='Password'
                />
                {isSignUpForm && (
                    <input
                        className='login-input-fields password-field'
                        type='password'
                        placeholder='Confirm Password'
                    />
                )}
                <button
                    className='login-input-fields login-button'
                    onClick={handleAuthenticating}
                >
                    {isSignUpForm ? 'Sign Up' : 'Login'}
                </button>
                <div className='do-not-have-account'
                    onClick={handleChangeForm}
                >
                    {!isSignUpForm ? "Don't have an account ? Signup" : "Have an account ? Login"}
                </div>
            </form>
        </div>
    )
}

export default Login