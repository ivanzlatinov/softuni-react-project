import { useContext } from "react"
import { Navigate, Outlet,  } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"


export const PublicGuard = () => {
    

    const { isAuthenticated} = useContext(AuthContext)


    if(isAuthenticated) {
        return <Navigate to='/home'/>
    }
   

    return <Outlet />
}