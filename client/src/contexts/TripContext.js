import { useEffect, useState, createContext, useContext } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { tripServiceFactory } from '../services/tripService';


const TripContext = createContext();


export const TripProvider = ({
    children
}) => {
    const navigate = useNavigate();
    const [trips, setTrips] = useState([]);
    const tripService = tripServiceFactory(); 
    
    useEffect(() => {
        tripService.getAll()
        .then(result => {
         setTrips(result);
        })
      }, []);
   
    

    const createTripSubmit = async (data) => {
        const newTrip = await tripService.create(data);
          
        setTrips(state => [...state, newTrip])      
       
         navigate('/catalog');
       };
    
      
     const getTrip = (tripId) => {
        return trips.find(trip => trip._id === tripId)
     }
        
        const onTripEditSubmit = async (values) => {
          const result = await tripService.edit(values._id, values);
    
          setTrips(state => state.map(x => x._id === values._id ? result : x))
    
          navigate(`/catalog/${values._id}`);
        } 

        const deleteTrip = (tripId) => {
            setTrips(state => state.filter(trip => trip._id !== tripId))
        }
    
    const contextValues = {
        trips,
        createTripSubmit ,
        onTripEditSubmit,
        getTrip,
        deleteTrip


    }

    return (
        <TripContext.Provider value={contextValues}>
            {children}
        </TripContext.Provider>
    )
};

export const useTripContext = () => {
    const context = useContext(TripContext);

    return context
}