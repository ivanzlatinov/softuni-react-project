import '../../App.css';
import { Cards } from './Cards';
import { useEffect } from 'react';
import { HeroSection } from './HeroSection';
import { useTripContext } from '../../contexts/TripContext';

export const Home = ({

}) => {
    useEffect(() => {
        document.title = 'Travel Oasis'
      }, [])

      const { trips } = useTripContext();

    return (
        <>
         <HeroSection  />
         <Cards  trips={trips} />
        </>
    );
}