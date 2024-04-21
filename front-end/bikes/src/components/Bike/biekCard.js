import { Link } from 'react-router-dom';
import { BIKE_IMAGE } from '../../constants';

const BikeCard = ({bike}) => {
    return (
        <Link className='bike-card-container' to={/bikeDetails/${bike.id}}>
            <img className='bike-card-image' src={BIKE_IMAGE} alt="bike-img" />
            <h3 className='bike-card-heading'>{bike.name}</h3>
        </Link>
    )
}