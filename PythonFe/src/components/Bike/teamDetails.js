import React, { useEffect, useState } from 'react'
import { user_Empty_Image } from '../../constants'
import { useParams } from 'react-router-dom';
import { teams } from './utils';
import TeamCard from './teamCard';
import NavBar from './navBar';

const TeamDetails = () => {
  const { id } = useParams();
  const [teamDetails, setTeamDetails] = useState();

  const fetchUserDetails = async () => {
    const apiURL = `http://127.0.0.1:8000/team/${id}`;
    const options = {
      method: 'GET',
    }

    try {
      const response = await fetch(apiURL, options);
      const data = await response.json();

      setTeamDetails(data);
    }
    catch (err) {

    }
  }

  useEffect(() => {
    fetchUserDetails();
  }, [])

  console.log("id==", id);

  return (
    <div className='team-container'>
      <NavBar />
      <div className='user-details-container'>
        {teams.map(team => {
          return (
            <TeamCard
              key={team.id}
              id={team.id}
              first_name={team.first_name}
              designation={team.designation}
              email={team.email}
              phoneNumber={team.phone_number}
            />
          )
        })}
      </div>
    </div>
  )
}

export default TeamDetails