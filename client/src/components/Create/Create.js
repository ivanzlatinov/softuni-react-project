import { useEffect, useState } from "react";
import "./Create.css";


export const Create = ({
  onCreateTripSubmit
}) => {


  useEffect(() => {
    document.title = "Create page";
  }, []);

  
  const [values, setValues] = useState({
     title: '',
     destination: '',
     price: '',
     people: '',
     imgUrl: '',
     description: '',
     phone: '',
  })

  const onChangeHandler = (e) => {
    setValues(state => ({...state, [e.target.name]: e.target.value }))
  }

 const onSubmit = (e) => {
  e.preventDefault();

  onCreateTripSubmit(values)
 }

  return (
    
    <div className="background">
      <div className="wrapper">
      <div className="title">HOST A TRIP</div>

      <form  id="create" className="form" onSubmit={onSubmit}> 

      <div className="inputfield">
          <label htmlFor="title">Title</label>
          <input value={values.title} onChange={onChangeHandler} type="text" id="title" name="title" className="input" />
        </div>

        <div className="inputfield">
          <label htmlFor="destination">Destination</label>
          <input value={values.destination} onChange={onChangeHandler} type="text" id="destination" name="destination" className="input" />
        </div>

        <div className="inputfield">
          <label htmlFor="price">Price</label>
          <input value={values.price} onChange={onChangeHandler} type="number" id="price" name="price" className="input" />
        </div>

        <div className="inputfield">
          <label htmlFor="people">Number of people</label>
          <input value={values.people} onChange={onChangeHandler} type="number" id="people" name="people" className="input" />
        </div>

        <div className="inputfield">
          <label htmlFor="imgUrl">Image URL</label>
          <input value={values.imgUrl} onChange={onChangeHandler} type="text" id="imgUrl" name="imgUrl" className="input" />
        </div>

        <div className="inputfield">
          <label htmlFor="description">Description</label>
          <textarea value={values.description} onChange={onChangeHandler} className="textarea" id="description" name="description"></textarea>
        </div>
        
        <div className="inputfield">
          <label htmlFor="phone">Phone for contact</label>
          <input value={values.phone} onChange={onChangeHandler} type="number" id="phone" name="phone" className="input" />
        </div>

        <div className="inputfield">
          <input type="submit" value="Create" className="btn" />
        </div>


      </form>
    </div>
    </div>
  );
};
