import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useService } from '../../hooks/useService';
import { tripServiceFactory } from '../../services/tripService';
import './EditTrip.css'
import { useTripContext } from '../../contexts/TripContext';

//have to leave input field in order to submit
export const EditTrip = ({
    
}) => {
  const { onTripEditSubmit } = useTripContext();
     const { tripId } = useParams();
     const tripService = useService(tripServiceFactory)
     const [isValid, setIsValid] = useState(false)
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

    const [error, setError] = useState({
      title: '',
      destination: '',
      price: '',
      people: '',
      imgUrl: '',
      description: '',
      phone: '',
  
     })

    useEffect(() => {
      tripService.getOne(tripId)
      .then(result => {
       changeValues(result);
   })
    }, [tripId]);

    const validateTitle = (e) => {
      const title = e.target.value;
      let errorMessage = '';
      if(title.length === 0) {
        errorMessage = 'Please give a title.'
      }else if(title.length < 10) {
        errorMessage = 'Title must be atleast 10 characters.' 
      }else if(title.length > 50){
        errorMessage = 'Title should not be longer than 50 characters.' 
      }else {
        setIsValid(true)
      }
  
      setError(state => ({
        ...state,
        title: errorMessage,
      }))
    }
   
    const validateDestination = (e) =>  {
      const destination = e.target.value;
      let errorMessage = '';
      if(destination.length === 0) {
        errorMessage = 'Please give destination name.'
      }else if(destination.length > 50){
       errorMessage = 'Invalid destination'
      }else{
        setIsValid(true)
      }
  
      setError(state => ({
        ...state,
       destination: errorMessage,
      }))
    }
  
    const validatePrice = (e) =>  {
      const price = e.target.value;
      const numberPattern = /^[0-9]+$/;
      let errorMessage = '';
      if(price.length === 0) {
        errorMessage = 'Please enter a price.'
      }else if(numberPattern.test(price) !== true){
       errorMessage = 'Price must be a number.'
      }else{
        setIsValid(true)
      }
      setError(state => ({
        ...state,
       price: errorMessage,
      }))
    }
  
    const validatePeople = (e) =>  {
      const people = e.target.value;
      const numberPattern = /^[0-9]+$/;
      let errorMessage = '';
      if(people.length === 0) {
        errorMessage = 'Please enter a number of people.'
      }else if(numberPattern.test(people) !== true){
       errorMessage = 'People field must be a number.'
      }else{
        setIsValid(true)
      }
      setError(state => ({
        ...state,
        people: errorMessage,
      }))
    }
  
    const validateImgUrl = (e) =>  {
      const imgUrl = e.target.value;
      const Urlpattern = /(https?:\/\/.*\.(?:png|jpg))/;
      let errorMessage = '';
      if(imgUrl.length === 0) {
        errorMessage = 'Please enter Image URL.'
      }else if(Urlpattern.test(imgUrl) !== true){
       errorMessage = 'Please enter a valid Image URL.'
      }else{
        setIsValid(true)
      }
      setError(state => ({
        ...state,
       imgUrl: errorMessage,
      }))
    }
  
    const validateDescription = (e) =>  {
      const description = e.target.value;
      let errorMessage = '';
      if(description.length === 0) {
        errorMessage = 'Please enter a description.'
      }else if(description.length < 25){
       errorMessage = 'Description is too short'
      }else if(description.length > 150){
        errorMessage = 'Description is too long'
       }else{
        setIsValid(true)
      }
      setError(state => ({
        ...state,
        description: errorMessage,
      }))
    }
  
    const validatePhone = (e) =>  {
      const phone = e.target.value;
      let errorMessage = '';
      const numberPattern = /^[0-9]+$/;
      if(phone.length === 0) {
        errorMessage = 'Please enter a phone for contacts.'
      }else if(phone.length === 10){
       errorMessage = 'Phone number length must be 10 digits'
      }else if(numberPattern.test(phone) !== true){
        errorMessage = 'Phone must be a number'
       }else{
        setIsValid(true)
      }
      setError(state => ({
        ...state,
        phone: errorMessage,
      }))
    }

    return (
    
        <div className="background">
      <div className="wrapper">
      <div className="title">Edit your trip</div>

      <form  id="create" className="form" method="post"  > 

      <div className="inputfield">
          <label htmlFor="title">Title</label>
          <input  
          type="text" 
          id="title" 
          name="title" 
          className="input"
          value = {values.title}
          onChange={changeHandler}
          onBlur={validateTitle}
          />
        </div>
        {error.title &&
          <div className="error">{error.title}</div>
        }

        <div className="inputfield">
          <label htmlFor="destination">Destination</label>
          <input 
           type="text" 
           id="destination" 
           name="destination" 
           className="input"
           value={values.destination}
           onChange={changeHandler}
           onBlur={validateDestination}
           />
        </div>
        {error.destination &&
          <div className="error">{error.destination}</div>
        }

        <div className="inputfield">
          <label htmlFor="price">Price</label>
          <input  
          type="text" 
          id="price" 
          name="price" 
          className="input"
          value={values.price}
          onChange={changeHandler}
          onBlur={validatePrice}
          />
        </div>
        {error.price &&
          <div className="error">{error.price}</div>
        }

        <div className="inputfield">
          <label htmlFor="people">Number of people</label>
          <input  
          type="text" 
          id="people" 
          name="people" 
          className="input"
          value={values.people}
          onChange={changeHandler}
          onBlur={validatePeople}
          />
        </div>
        {error.people &&
          <div className="error">{error.people}</div>
        }

        <div className="inputfield">
          <label htmlFor="imgUrl">Image URL</label>
          <input 
          type="text" 
          id="imgUrl" 
          name="imgUrl" 
          className="input"
          value={values.imgUrl}
          onChange={changeHandler}
          onBlur={validateImgUrl}
          />
        </div>
        {error.imgUrl &&
          <div className="error">{error.imgUrl}</div>
        }

        <div className="inputfield">
          <label htmlFor="description">Description</label>
          <textarea   
          className="textarea" 
          id="description" 
          name="description"
          value={values.description}
          onChange={changeHandler}
          onBlur={validateDescription}
          ></textarea>
        </div>
        {error.description &&
          <div className="error">{error.description}</div>
        }
    
        <div className="inputfield">
          <label htmlFor="phone">Phone for contact</label>
          <input  
          type="number" 
          id="phone" 
          name="phone" 
          className="input" 
          value={values.phone}
          onChange={changeHandler}
          onBlur={validatePhone}
          />
        </div>
        {error.phone &&
          <div className="error">{error.phone}</div>
        }
     <fieldset className="fieldset-wrap"  disabled={isValid ? false : true}>
        <div className="inputfield">
          <input type="submit" value="Edit" className="btn" onClick={onSubmit} />
        </div>
        </fieldset>

      </form>
    </div>
    </div>


    )
};