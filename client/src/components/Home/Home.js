import '../../App.css';
import { Cards } from '../util/Cards';
import { useEffect } from 'react';
import { HeroSection } from '../util/HeroSection';

export const Home = () => {
    useEffect(() => {
        document.title = 'Travel'
      }, [])

    return (
        <>
         <HeroSection />
         <Cards />
        </>
    );
}