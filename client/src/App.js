import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import * as tripService from './services/tripService';

import { Home } from './components/Home/Home';
import { Navbar } from './components/Navbar/Navbar';
import { Login } from './components/Login/Login';
import { Footer } from './components/Footer/Footer';
import { Register } from './components/Register/Register';
import { NotFound } from './components/NotFound/NotFound'; 
import { About } from './components/About/About';
import { Create } from './components/Create/Create';
import { Catalog } from './components/Catalog/Catalog';



function App() {

  useEffect(() => {
    document.title = 'Travel'
  }, [])

   const [trips, setTrips] = useState([]);
   
   useEffect(() => {
     tripService.getAll()
     .then(result => {
      console.log(result)
      setTrips(result);
     })
   }, [])

  return (
    <>
       <Navbar />
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/catalog' element={<Catalog trips={trips} />} />
        <Route path='/about' element={<About />} />
        <Route path='/create-trip' element={<Create />} />
        <Route path='/login' element={ <Login />} /> 
        <Route path='/register' element={<Register />} />
        <Route path='/*' element={<NotFound />} />
        </Routes> 
        <Footer />
       
    </>
  );
}

export default App;
