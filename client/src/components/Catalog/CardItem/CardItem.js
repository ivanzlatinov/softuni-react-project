import { Link } from 'react-router-dom'


export const CardItem = ({
  imgUrl,
  title,
}) => {
    return (
    <>
         <li className='cards-item'>
           <Link className='cards-item-link' to='/catalog'>
            <figure className='cards-item-pic-wrap' >
             <img src={imgUrl} alt='Travel Img' className='cards-item-img' />
            </figure>
            <div className='cards-item-info'>
                <h5 className='cards-item-text>'>{title}</h5>
                <Link className='details-btn'>Details</Link>
            </div>
           </Link>
         </li>
    </>  
    );

}