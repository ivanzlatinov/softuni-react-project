import { useEffect, useState, createContext, useContext } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { tripServiceFactory } from '../services/tripService';


const TripContext = createContext();


export const TripProvider = ({
    children
}) => {
    const navigate = useNavigate();
    const [trips, setTrips] = useState([]);
    const tripService = tripServiceFactory(); //auth.accessToken
    
    useEffect(() => {
        tripService.getAll()
        .then(result => {
         setTrips(result);
        })
      }, []);
   
    

    const onCreateTripSubimt = async (data) => {
        const newTrip = await tripService.create(data);
          
        setTrips(state => [...state, newTrip])      //updated info
       console.log(newTrip);
         navigate('/catalog');
       };
    
      
     
        
        const onTripEditSubmit = async (values) => {
          const result = await tripService.edit(values._id, values);
    
          setTrips(state => state.map(x => x._id === values._id ? result : x))
    
          navigate(`/catalog/${values._id}`);
        } 
    
    const contextValues = {
        trips,
        onCreateTripSubimt ,
        onTripEditSubmit


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