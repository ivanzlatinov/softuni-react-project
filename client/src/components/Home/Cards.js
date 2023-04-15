import { CardItem } from "../Catalog/CardItem/CardItem";

import './Cards.css';

export const Cards = ({
  trips
}) => {
    return (
      <div className="cards">
        <h1>Check out these destinations!</h1>
        <div className="cards-container">
            <div className="cards-wrapper">
                <ul className="cards-items" id="upper">
                {trips.slice(0,3).map(x => <CardItem key={x._id} {...x} />)}

                </ul>

                <ul className='cards-items' id="lower">
            
                {trips.slice(3,5).map(x => <CardItem key={x._id} {...x} />)}
          </ul>
            </div>
        </div>
      </div>
    );
}