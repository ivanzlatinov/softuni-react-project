import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';


function App() {

  useEffect(() => {
    document.title = 'Travel'
  }, [])

  return (
    <>
       <Navbar />
       <Routes>
        <Route path='/'  />
       </Routes>
    </>
  );
}

export default App;
