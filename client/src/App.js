import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './components/pages/Home';
import { Navbar } from './components/Navbar';


function App() {

  useEffect(() => {
    document.title = 'Travel'
  }, [])

  return (
    <>
       <Navbar />
       <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/catalog' element={<h1>catalog</h1>} />
        <Route path='/about' element={<h1>About</h1>} />
        <Route path='/create' element={<h1>create</h1>} />
        <Route path='/login' element={<h1>login</h1>} />
        <Route path='/register' element={<h1>Register</h1>} />
        <Route path='/*' element={<h1>404page</h1>} />
       </Routes>
    </>
  );
}

export default App;
