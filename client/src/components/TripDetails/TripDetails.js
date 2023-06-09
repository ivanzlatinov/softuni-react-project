import { Link, useParams, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import './TripDetails.css';
import { tripServiceFactory } from '../../services/tripService';
import { useService } from '../../hooks/useService';
import { AuthContext } from '../../contexts/AuthContext';
import { useTripContext } from '../../contexts/TripContext';


export const TripDetails = () =>  {

    useEffect(() => {
        document.title = "Details";
      }, []);

    const { deleteTrip } = useTripContext();
    const { userId } = useContext(AuthContext);  
    const { tripId } = useParams();
    const [trip, setTrip] = useState({});
   
    const tripService = useService(tripServiceFactory);
    const navigate = useNavigate();

    
    
   
    useEffect(() => { 
    tripService.getOne(tripId)
    .then(result => {
      setTrip(result)
    })
    }, [tripId])

    const isOwner =  trip._ownerId === userId;

    const onDeleteClick =  async () => {
        //eslint-disable-next-line no-restricted-globals
        

             await tripService.delete(trip._id);
             deleteTrip(trip._id);
             navigate('/catalog');
         

        
    }

return (
    <div className="details-container">
    <div className="details-box">
        <div className="details-images">
            <div className="details-img-holder active">
                <img src={trip.imgUrl} alt='details' />
            </div>
            
        </div>
        <div className="details-basic-info">
            <h1 className='details-destination'>{trip.destination}</h1>
           
            <span>Price: {trip.price}$ </span>
            <p>Offer is for : {trip.people} people</p>
            {isOwner && (
                <div className="details-options">
                  <Link to={`/catalog/${trip._id}/edit`}  className='edit-btn' >Edit</Link>
                <button className='delete-btn' onClick={onDeleteClick}>Delete</button>
            </div>
            )}
           
           
        </div>
        <div className="details-description">
            <p> Contact the host: {trip.phone} </p>
            <p>{trip.description}</p>
            
        </div>
        <div className="details-phone">
            
        </div>
    </div>
</div>
);

}