import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home/Home';
import { Navbar } from './components/Navbar/Navbar';
import { Login } from './components/Login/Login';
import { Footer } from './components/Footer/Footer';
import { Register } from './components/Register/Register';
import { NotFound } from './components/NotFound/NotFound'; 
import { About } from './components/About/About';



function App() {

  useEffect(() => {
    document.title = 'Travel'
  }, [])

  return (
    <>
       <Navbar />
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/catalog' element={<h1>catalog</h1>} />
        <Route path='/about' element={<About />} />
        <Route path='/create-trip' element={<h1>create</h1>} />
        <Route path='/login' element={ <Login />} /> 
        <Route path='/register' element={<Register />} />
        <Route path='/*' element={<NotFound />} />
        </Routes> 
        <Footer />
       
    </>
  );
}

export default App;
