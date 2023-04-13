import "./Catalog.css";
import { CardItem } from "./CardItem/CardItem";
import { useEffect } from "react";

export const Catalog = ({ 
    trips 
}) => {

  useEffect(() => {
    document.title = "Catalog";
  }, []);


  return (
    <div className="catalog-background">
      <div className="title-container">
        <h1 className="catalog-title">Our offers</h1>
      </div>
      <div className="all-trips">
      
        {trips.map(x => <CardItem key={x._id} {...x} />)}
      </div>
    </div>
  );
};
