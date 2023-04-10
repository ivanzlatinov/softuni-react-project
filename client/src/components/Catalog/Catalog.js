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
        <CardItem
          imgUrl="images/img-9.jpg"
          title="Explore the hidden waterfall inside the Amazon Jungle"
          path="/catalog"
        />

        <CardItem
          imgUrl="images/img-2.jpg"
          title="Travel through the islands of Bali in a private cruise"
          path="/catalog"
        />

        {trips.map(x => <CardItem key={x._id} {...x} />)}
      </div>
    </div>
  );
};
