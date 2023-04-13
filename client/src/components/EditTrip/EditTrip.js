import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useService } from '../../hooks/useService';
import { tripServiceFactory } from '../../services/tripService';
import './EditTrip.css'

export const EditTrip = ({
    onTripEditSubmit,
}) => {
     const { tripId } = useParams();
     const tripService = useService(tripServiceFactory)
    const {values, changeHandler, onSubmit, changeValues} = useForm({
         _id: '',
        title: '',
        destination: '',
        price: '',
        people: '',
        imgUrl: '',
        description: '',
        phone: '',

    }, onTripEditSubmit)

    useEffect(() => {
      tripService.getOne(tripId)
      .then(result => {
       changeValues(result);
   })
    }, [tripId])

    return (
    
        <div className="background">
      <div className="wrapper">
      <div className="title">Edit your trip</div>

      <form  id="create" className="form" method="post" onSubmit={onSubmit} > 

      <div className="inputfield">
          <label htmlFor="title">Title</label>
          <input  
          type="text" 
          id="title" 
          name="title" 
          className="input"
          required
          value = {values.title}
          onChange={changeHandler}
          />
        </div>

        <div className="inputfield">
          <label htmlFor="destination">Destination</label>
          <input 
           type="text" 
           id="destination" 
           name="destination" 
           className="input"
           required
           value={values.destination}
           onChange={changeHandler}
           />
        </div>

        <div className="inputfield">
          <label htmlFor="price">Price</label>
          <input  
          type="text" 
          id="price" 
          name="price" 
          className="input"
          value={values.price}
          onChange={changeHandler}
          />
        </div>

        <div className="inputfield">
          <label htmlFor="people">Number of people</label>
          <input  
          type="text" 
          id="people" 
          name="people" 
          className="input"
          required
          value={values.people}
          onChange={changeHandler}
          />
        </div>

        <div className="inputfield">
          <label htmlFor="imgUrl">Image URL</label>
          <input 
          type="text" 
          id="imgUrl" 
          name="imgUrl" 
          className="input"
          required
          value={values.imgUrl}
          onChange={changeHandler}
          />
        </div>

        <div className="inputfield">
          <label htmlFor="description">Description</label>
          <textarea   
          className="textarea" 
          id="description" 
          name="description"
          required
          value={values.description}
          onChange={changeHandler}
          ></textarea>
        </div>
        
        <div className="inputfield">
          <label htmlFor="phone">Phone for contact</label>
          <input  
          type="number" 
          id="phone" 
          name="phone" 
          className="input" 
          value={values.phone}
          onChange={changeHandler}
          />
        </div>

        <div className="inputfield">
          <input type="submit" value="Edit" className="btn" />
        </div>


      </form>
    </div>
    </div>


    )
};