import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './TripDetails.css';
import * as tripService from '../../services/tripService';

export const TripDetails = () =>  {

    useEffect(() => {
        document.title = "Details";
      }, []);

    const { tripId } = useParams();
    const [trip, setTrip] = useState({});
   
    useEffect(() => {
    tripService.getOne(tripId)
    .then(result => {
      setTrip(result)
    })
    }, [tripId])

    
return (
    <div className="details-container">
    <div className="details-box">
        <div className="details-images">
            <div className="details-img-holder active">
                <img src={trip.imgUrl} />
            </div>
            
        </div>
        <div className="details-basic-info">
            <h1 className='details-destination'>{trip.destination}</h1>
           
            <span>Price: {trip.price}$ </span>
            <p>Offer is for : {trip.people} people</p>
            <div className="details-options">
                <Link href="#">Book trip</Link>
            </div>
        </div>
        <div className="details-description">
            <p> Phone for contact: {trip.phone} </p>
            <p>{trip.description}</p>
            
        </div>
        <div className="details-phone">
            
        </div>
    </div>
</div>
);

}