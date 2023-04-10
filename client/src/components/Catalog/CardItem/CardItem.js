import { Link } from 'react-router-dom'


export const CardItem = ({
  _id,
  imgUrl,
  title,
}) => {
    return (
    <>
         <li className='cards-item'>
           <div className='cards-item-link' >
            <figure className='cards-item-pic-wrap' >
             <img src={imgUrl} alt='Travel Img' className='cards-item-img' />
            </figure>
            <div className='cards-item-info'>
                <h5 className='cards-item-text>'>{title}</h5>
                <Link to={`/catalog/${_id}`} className='details-btn'>Details</Link>
            </div>
           </div>
         </li>
    </>  
    );

}