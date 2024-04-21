import React from 'react'
import NavBar from './navBar'
import BikeCard from './bikeCard'
import { bikes } from './utils'

const BikeList = () => {
  return (
    <div className='bike-list-main-container'>
        <NavBar />
        <div className='bikelist-container'>
            {bikes.map((bike)=>{
                return(
                    <BikeCard 
                        bike = {bike}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default BikeList