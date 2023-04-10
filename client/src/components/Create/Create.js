import { useEffect } from "react";
import "./Create.css";

export const Create = () => {
  useEffect(() => {
    document.title = "Host a trip";
  }, []);

  return (
    
    <div className="background">
      <div className="wrapper">
      <div className="title">HOST A TRIP</div>

      <form className="form">

        <div className="inputfield">
          <label htmlFor="destination">Destination</label>
          <input type="text" id="destination" name="destination" className="input" />
        </div>

        <div className="inputfield">
          <label htmlFor="price">Price</label>
          <input type="text" id="price" name="price" className="input" />
        </div>

        <div className="inputfield">
          <label htmlFor="people">Number of people</label>
          <input type="number" id="people" name="people" className="input" />
        </div>

        <div className="inputfield">
          <label htmlFor="imgUrl">Image URL</label>
          <input type="text" id="imgUrl" name="imgUrl" className="input" />
        </div>

        <div className="inputfield">
          <label htmlFor="description">Description</label>
          <textarea className="textarea" id="description" name="description"></textarea>
        </div>
        
        <div className="inputfield">
          <label htmlFor="phone">Phone for contact</label>
          <input type="text" id="phone" name="phone" className="input" />
        </div>

        <div className="inputfield">
          <input type="submit" value="Create" className="btn" />
        </div>
      </form>
    </div>
    </div>
  );
};
