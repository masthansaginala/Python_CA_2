import { Link } from 'react-router-dom';
import { BIKE_IMAGE } from '../../constants';

const BikeCard = ({bike}) => {
    return (
        <Link className='bike-card-container' to={`/bikeDetails/${bike.id}`}>
            <img className='bike-card-image' src={bike.bike_image_1} alt="bike-img" />
            <h3 className='bike-card-heading'>{bike.bike_name}</h3>
        </Link>
    )
}

export default BikeCard