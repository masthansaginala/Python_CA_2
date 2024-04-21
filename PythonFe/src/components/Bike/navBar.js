import React, { useId, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

const NavBar = () => {
    const [showProfile, setShowProfile] = useState(false);
    const navigate = useNavigate();

    const userId = JSON.parse(localStorage.getItem('userId'));

    const loggedinUser = useSelector(state => state.user.userDetails)

    const userName = localStorage.getItem('userName');

    const profilePicLetter = userName[0];

    // const profilePicLetter = loggedinUser.username[0].toUpperCase();

    // console.log("logged in user",loggedinUser);
    // console.log("Profile pic letter",profilePicLetter);

    const handleViewProfile = () => {
        setShowProfile(!showProfile);
    }

    const handleTeamDeatils = () => {
        navigate(`/team`);
        // navigate(`/user/${loggedinUser.user_id}`);
    }

    const handleHome = () => {
        navigate("/bikeList");
    }

    const handleUserLogout = () => {
        localStorage.clear();
        navigate("/login");
    }

    const handleEnquiries = () => {
        navigate(`/enquirires/${userId}`)
    }

    return (
        <div className='navbar bg-base-100'>
            <div className='logo-img' onClick={handleHome}>
                Home
            </div>
            <div className='profile-container'>
                <div className='profile-div'>
                    <div className='profile-pic-name'>
                        <span className='user-name'>{userName}</span>
                        <div className='profile-letter' onClick={handleViewProfile}>{profilePicLetter}</div>
                    </div>
                    {showProfile && (
                        <div className='options-div'>
                            <div className='view-profile' onClick={handleTeamDeatils}>View Team</div>
                            <div className='view-profile' onClick={handleEnquiries}>Your enquiries</div>
                            <div className='view-profile' onClick={handleUserLogout}>Logout</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default NavBar