import React from "react";
import "./Workout.css";
const Workout = ({ workout }) => {
  const { img, name, time, age } = workout;
  return (
    <div className="card">
      <img className="img-container" src={img} alt="" />
      <p> Name:{name}</p>
      <p> Age:{age}</p>
      <p>Time:{time}</p>
      <button className="add-btn">Add to cart</button>
    </div>
  );
};

export default Workout;
