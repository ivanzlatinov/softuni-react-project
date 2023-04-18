import './MyListings.css';
import { useEffect, useState } from 'react';
import { useService } from '../../hooks/useService';
import { tripServiceFactory } from '../../services/tripService';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';
import { CardItem } from '../Catalog/CardItem/CardItem';


export const MyListings = () => {
     const  [myTrips, setMyTrips] = useState([]);
     const { userId } = useContext(AuthContext);
     const tripService = useService(tripServiceFactory)

     useEffect(() => {
     tripService.getMyListings(userId)
     .then(tripResult => {
        setMyTrips(tripResult)
       
     })
     }, [])

    return (
        <div className="myTrips-background">
        <div className="myTrips-title-container">
            {myTrips.length  ?  <h1 className="myTrips-title">Your Listings:</h1>
            :<h1 className="myTrips-title">No listings yet</h1>
            }
            {myTrips.length > 0 ?(
            <div className="myTrips">
            {myTrips.map(x => <CardItem key={x._id} {...x} />)}
        </div>
         ) :
         null
            }
        
          
            </div>
      </div>
    )
}