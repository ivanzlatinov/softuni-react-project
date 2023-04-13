import { useEffect, useState } from "react";

import { useForm } from '../../hooks/useForm';

import "./Create.css";


export const Create = ({
  onCreateTripSubmit
}) => {


  useEffect(() => {
    document.title = "Create page";
  }, []);

  
  const { values, changeHandler, onSubmit } = useForm({
     title: '',
     destination: '',
     price: '',
     people: '',
     imgUrl: '',
     description: '',
     phone: '',
  }, onCreateTripSubmit)


  return (
    
    <div className="background">
      <div className="wrapper">
      <div className="title">HOST A TRIP</div>

      <form  id="create" className="form" method="post" onSubmit={onSubmit}> 

      <div className="inputfield">
          <label htmlFor="title">Title</label>
          <input value={values.title} onChange={changeHandler} type="text" id="title" name="title" className="input" />
        </div>

        <div className="inputfield">
          <label htmlFor="destination">Destination</label>
          <input value={values.destination} onChange={changeHandler} type="text" id="destination" name="destination" className="input" />
        </div>

        <div className="inputfield">
          <label htmlFor="price">Price</label>
          <input value={values.price} onChange={changeHandler} type="number" id="price" name="price" className="input" />
        </div>

        <div className="inputfield">
          <label htmlFor="people">Number of people</label>
          <input value={values.people} onChange={changeHandler} type="number" id="people" name="people" className="input" />
        </div>

        <div className="inputfield">
          <label htmlFor="imgUrl">Image URL</label>
          <input value={values.imgUrl} onChange={changeHandler} type="text" id="imgUrl" name="imgUrl" className="input" />
        </div>

        <div className="inputfield">
          <label htmlFor="description">Description</label>
          <textarea value={values.description} onChange={changeHandler} className="textarea" id="description" name="description"></textarea>
        </div>
        
        <div className="inputfield">
          <label htmlFor="phone">Phone for contact</label>
          <input value={values.phone} onChange={changeHandler} type="number" id="phone" name="phone" className="input" />
        </div>

        <div className="inputfield">
          <input type="submit" value="Create" className="btn" />
        </div>


      </form>
    </div>
    </div>
  );
};
