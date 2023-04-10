import { CardItem } from "../Catalog/CardItem/CardItem";
import './Cards.css';

export const Cards = () => {
    return (
      <div className="cards">
        <h1>Check out these destinations!</h1>
        <div className="cards-container">
            <div className="cards-wrapper">
                <ul className="cards-items">
                    <CardItem 
                    imgUrl="images/img-9.jpg"
                    description="Explore the hidden waterfall inside the Amazon Jungle"
                    path="/catalog"
                    />

                    <CardItem 
                    imgUrl="images/img-2.jpg"
                    description="Travel through the islands of Bali in a private cruise"
                    path="/catalog"
                    />

                </ul>

                <ul className='cards-items'>
            
            <CardItem
              imgUrl='images/img-4.jpg'
              description='Experience Football on Top of the Himilayan Mountains'
              path='/catalog'
            />
            <CardItem
              imgUrl='images/img-8.jpg'
              description='Ride through the Sahara Desert on a guided camel tour'
              path='/catalog'
            />
          </ul>
            </div>
        </div>
      </div>
    );
}