import { Link } from 'react-router-dom';
import './TripDetails.css'

export const TripDetails = () =>  {
return (
    <div className="details-container">
    <div className="details-box">
        <div className="details-images">
            <div className="details-img-holder active">
                <img src="../img/milano.jpg" />
            </div>
            
        </div>
        <div className="details-basic-info">
            <h1 className='details-destination'>Title</h1>
           
            <span>Price: </span>
            <p>Offer is for : N people</p>
            <div className="details-options">
                <Link href="#">Book trip</Link>
            </div>
        </div>
        <div className="details-description">
            <p> Phone for contacts:  </p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus temporibus corporis repudiandae, consectetur nostrum nisi commodi placeat rerum molestias numquam nihil accusantium deleniti! Enim, nesciunt a quis amet hic officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nemo accusantium tempora facere doloremque cum iusto, ut neque, fuga omnis libero laborum ullam. At dolorum qui atque labore illo dignissimos.</p>
            
        </div>
        <div className="details-phone">
            
        </div>
    </div>
</div>
);

}