import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';

import { tripServiceFactory } from './services/tripService';
import { authServiceFactory } from './services/authService';
import { AuthContext } from './contexts/AuthContext';


import { Home } from './components/Home/Home';
import { Navbar } from './components/Navbar/Navbar';
import { Login } from './components/Login/Login';
import { Footer } from './components/Footer/Footer';
import { Register } from './components/Register/Register';
import { Logout } from './components/Logout/Logout';
import { NotFound } from './components/NotFound/NotFound'; 
import { About } from './components/About/About';
import { Create } from './components/Create/Create';
import { Catalog } from './components/Catalog/Catalog';
import { TripDetails } from './components/TripDetails/TripDetails';



function App() {
  useEffect(() => {
    document.title = 'Travel'
  }, [])

  const navigate = useNavigate();
   const [trips, setTrips] = useState([]);
   const [auth, setAuth] = useState({});
   const tripService = tripServiceFactory(auth.token);
   const authService = authServiceFactory(auth.token);
   
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

   const onLoginSubmit = async (data) => {
        try {
          const result = await authService.login(data);

          setAuth(result);

          navigate('/');
        } catch (error) {
          //alert user
          console.log('There is a problem')

        }
   };
 
    const onRegisterSubmit = async (values) => {
     const {repass, ...registerData} = values;
     if(repass !== registerData.password) {
      return;
     }
      
     try {
      console.log(registerData);
      const result =  await authService.register(registerData);
      console.log(result) 
      setAuth(result);

      navigate('/');
     } catch (error) {
      console.log('There is a problem')
     }
    }
   
    const onLogout =  async () => {
      await authService.logout();

      setAuth({})
    }


   const context = {
    onLoginSubmit,
    onRegisterSubmit,
    onLogout,
    userId: auth._id,
    token: auth.accessToken,
    userEmail: auth.email,
    isAuthenticated: !!auth.accessToken, // turns truthy value to true
    
   }

  return (
    <AuthContext.Provider value={context}>
    <>
       <Navbar />
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/catalog' element={<Catalog trips={trips} />} />
        <Route path='/about' element={<About />} />
        <Route path='/create-trip' element={<Create onCreateTripSubmit={onCreateTripSubimt} />} />
        <Route path='/login' element={ <Login  />} /> 
        <Route path='/logout' element={ <Logout  />} /> 
        <Route path='/register' element={<Register />} />
        <Route path='/catalog/:tripId' element={<TripDetails />} />
        <Route path='/*' element={<NotFound />} />
        </Routes> 
        <Footer />
       
    </>
    </AuthContext.Provider>
  );
}

export default App;
