import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './components/pages/Home';
import { Navbar } from './components/Navbar';
import { Login } from './components/pages/Login';
import { Footer } from './components/Footer';
import { Register } from './components/pages/Register';
import { NotFound } from './components/pages/NotFound'; 



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
        <Route path='/about' element={<h1>About</h1>} />
        <Route path='/create' element={<h1>create</h1>} />
        <Route path='/login' element={ <Login />} /> 
        <Route path='/register' element={<Register />} />
        <Route path='/*' element={<NotFound />} />
        </Routes> 
        <Footer />
       
    </>
  );
}

export default App;
