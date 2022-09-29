import React from "react";
import Workout from "../Workout/Workout";
import "./Workouts.css";
const Workouts = ({ workouts, cart, setCart }) => {
  return (
    <div className="card-container">
      {workouts.map((w) => (
        <Workout workout={w} key={w.id} cart={cart} setCart={setCart}></Workout>
      ))}
    </div>
  );
};

export default Workouts;
