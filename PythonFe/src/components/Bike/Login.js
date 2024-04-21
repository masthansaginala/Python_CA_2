import React, { useEffect, useRef, useState } from 'react'
import { BIKE_IMAGE } from '../../constants';
import { useNavigate } from "react-router-dom";
import { validateData } from '../../utils/validate';
import { useDispatch } from 'react-redux';
import { addUser } from '../../utils/userSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isSignUpForm, setIsSignUpForm] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const userId = JSON.parse(localStorage.getItem('userId'));

    useEffect(() => {
        if(userId){
            navigate("/bikeList");
        }
    }, [])

    const email = useRef(null);
    const password = useRef(null);
    const confirmPassword = useRef(null);
    const userName = useRef(null);


    const handleChangeForm = () => {
        setIsSignUpForm(!isSignUpForm);
        setErrorMessage(null);
    }

    const handleAuthenticating = async (event) => {
        event.preventDefault();

        const formUserDetails = {
            isSignUpForm: isSignUpForm,
            userName: userName.current.value,
            password: password.current.value,
        }

        if (isSignUpForm) {
            formUserDetails["email"] = email.current.value;
            formUserDetails["confirmPassword"] = confirmPassword.current.value;
        }

        console.log("formUserDetails", formUserDetails);

        let haveErrorMessage = validateData(formUserDetails.email, formUserDetails.password, formUserDetails);

        console.log("errorMessage", haveErrorMessage);
        setErrorMessage(haveErrorMessage);

        if (haveErrorMessage) return;

        const updatedFormData = {
            username: formUserDetails.userName,
            password: formUserDetails.password 
        }

        if (isSignUpForm) {
            updatedFormData["email"] = email.current.value;
            updatedFormData["password2"] = confirmPassword.current.value;
        }
        
        let apiURL;
        const options = {
            method: 'POST',
            body: JSON.stringify(updatedFormData),
            headers: {
                'Content-Type': 'application/json',
            }
        }

        if (isSignUpForm) {
            apiURL = "http://127.0.0.1:8000/register/";
        }
        else {
            apiURL = "http://127.0.0.1:8000/login/";
        }

        try {
            const response = await fetch(apiURL, options);
            const data = await response.json();


            if (response.status === 200 || response.status === 201) {
                dispatch(addUser(data));
                localStorage.setItem('userId', data.user_id);
                localStorage.setItem('userName', data.username);
                navigate("/bikeList");
                toast("Successfully logged in");
            }
            else if(response.status === 400) {
                toast("Entered details were already exist please try with deifferent names and email");
            }

        }
        catch (err) {
            dispatch(addUser(updatedFormData));
            toast("Oops! Cannot login or sign up please try again");
            // navigate("/bikeList");
        }

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
                    ref={userName}
                />
                {isSignUpForm && (
                    <input
                        className='login-input-fields email-field'
                        type='email'
                        placeholder='Email Address'
                        ref={email}
                    />
                )}
                <input
                    className='login-input-fields password-field'
                    type='password'
                    placeholder='Password'
                    ref={password}
                />
                {isSignUpForm && (
                    <input
                        className='login-input-fields password-field'
                        type='password'
                        placeholder='Confirm Password'
                        ref={confirmPassword}
                    />
                )}

                <p className="error-msg">
                    {errorMessage}
                </p>

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
            <ToastContainer />
        </div>
    )
}

export default Login