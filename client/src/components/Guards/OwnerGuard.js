import { useContext } from "react";
import { useTripContext } from "../../contexts/TripContext"
import { Navigate, Outlet, useParams  } from 'react-router-dom'
import { AuthContext } from "../../contexts/AuthContext";

export const Owner = () => {
    const { getTrip } = useTripContext();
    const { tripId } = useParams();
    const { userId } = useContext(AuthContext);
    const currentTrip = getTrip(tripId);

    if(currentTrip && currentTrip._ownerId !== userId ){
        return <Navigate to={`/catalog/${tripId}`} />
    }

    return <Outlet />
}