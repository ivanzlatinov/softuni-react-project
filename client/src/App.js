//import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';


import { Routes, Route} from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { TripProvider } from './contexts/TripContext';

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
import { EditTrip } from './components/EditTrip/EditTrip';
import { UserGuard } from './components/Guards/UserGuard';
import { PublicGuard } from './components/Guards/PublicGuard';
import { Owner } from './components/Guards/OwnerGuard';
import { MyListings } from './components/MyListings/MyListings';



function App() {
  

  return (
    <AuthProvider>
      <TripProvider>
    <>
       <Navbar />
        <Routes>
            <Route path='/' element={<Home  />} />
            <Route path='/home' element={<Home  />} />
            <Route path='/catalog' element={<Catalog />} />
            <Route path='/about' element={<About />} />
        <Route element={<UserGuard />}>
            <Route path='/login' element={ <Login  />} /> 
            <Route path='/register' element={<Register />} />
        </Route>
        <Route element={<PublicGuard />}>
            <Route path='/create-trip' element={<Create  />} />
            <Route path='/my-listings' element={<MyListings />} />
            <Route path='/catalog/:tripId' element={<TripDetails />} />
            <Route path='/logout' element={ <Logout  />} /> 
        <Route element={<Owner />} >
             <Route path='/catalog/:tripId/edit' element={<EditTrip />} />
        </Route>
        </Route>
             <Route path='/*' element={<NotFound />} />
        </Routes> 
        <Footer />
       
    </>
    </TripProvider>
    </AuthProvider>
  );
}

export default App;
