
import React from 'react'
import { Link } from 'react-router-dom'

const TeamCard = ({id, designation, email, phoneNumber}) => {
    console.log("id",id);
  return (
    <Link style={{ textDecoration: 'none', color: '#a6adba' }} className='user-details' to={`/team/${id}`}>
       {/* {teamDetails?.image &&  <div className='user-profile-letter'>
                <img className='user-empty-img' src={teamDetails.image} alt='user-img'/>
            </div>} */}
        {/* <h3 className='user-name-heading'>Ganesh V</h3>
        <span className='other-user-details'><b>Designation :</b>  Associate developer</span>
        <span className='other-user-details'><b>Email :</b>  ganesh123@gmail.com</span>
        <span className='other-user-details'><b>Phone No. :</b>  6303620942</span> */}
        {/* <h3 className='user-name-heading'>{userDetails.first_name + userDetails.last_name}</h3> */}
        {designation && <span className='other-user-details'><b>Designation :</b>  {designation}</span>}
        {email && <span className='other-user-details'><b>Email :</b>  {email}</span>}
        {phoneNumber && <span className='other-user-details'><b>Phone No. :</b>  {phoneNumber}</span>}
      </Link>
  )
}

export default TeamCard
