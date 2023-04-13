import { useContext } from "react";
import { Link } from 'react-router-dom';
import { AuthContext } from "../../../contexts/AuthContext";


export const CardItem = ({
  _id,
  imgUrl,
  title,
}) => {
const { isAuthenticated }  = useContext(AuthContext);

    return (
    <>
         <li className='cards-item'>
           <div className='cards-item-link' >
            <figure className='cards-item-pic-wrap' >
             <img src={imgUrl} alt='Travel Img' className='cards-item-img' />
            </figure>
            <div className='cards-item-info'>
                <h5 className='cards-item-text>'>{title}</h5>
                {isAuthenticated ? 
                <Link to={`/catalog/${_id}`} className='details-btn'>Details</Link>
                :
                <Link to='/login' className='details-btn'>Details</Link>
              }
                
            </div>
           </div>
         </li>
    </>  
    );

}