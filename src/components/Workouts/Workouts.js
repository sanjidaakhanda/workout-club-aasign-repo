import React from "react";
import Workout from "../Workout/Workout";
import "./Workouts.css";
const Workouts = ({ workouts }) => {
  return (
    <div className="card-container">
      {workouts.map((w) => (
        <Workout workout={w} key={w.id}></Workout>
      ))}
    </div>
  );
};

export default Workouts;
