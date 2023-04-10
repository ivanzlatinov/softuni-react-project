import { Link } from 'react-router-dom'


export const CardItem = (props) => {
    return (
    <>
         <li className='cards-item'>
           <Link className='cards-item-link' to={props.path}>
            <figure className='cards-item-pic-wrap' >
             <img src={props.src} alt='Travel Img' className='cards-item-img' />
            </figure>
            <div className='cards-item-info'>
                <h5 className='cards-item-text>'>{props.text}</h5>
            </div>
           </Link>
         </li>
    </>  
    );

}