import React, { useEffect, useState } from "react";
import "./Home.css";
import Workouts from "../Workouts/Workouts";
const Home = () => {
  const [workouts, setWorkouts] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setWorkouts(data));
  }, []);
  return (
    <div className="home-container">
      <div className="">
        <h2>Select today's exercise</h2>
        <Workouts workouts={workouts}></Workouts>
      </div>
      <div>
        <h2>this is for info</h2>
        <div>
          <img src="" alt="" />
        </div>
        <div className="name-info">
          <p>Name</p>
          <p>
            <small> Dhaka,Bangladesh</small>
          </p>
        </div>
        <div className="personal-info">
          <p>50kg</p>
          <p>5.1 inch</p>
          <p>50 years</p>
        </div>
        <p>Add a Break</p>
        <div className="btn-container">
          <button className="break-btn">10s</button>
          <button className="break-btn">20s</button>
          <button className="break-btn">30s</button>
          <button className="break-btn">40s</button>
          <button className="break-btn">50s</button>
        </div>
        <div>
          <p>WorkOut Details</p>
          <div className="workout">
            <p>Workout time</p>
          </div>
          <div className="break">
            <p>Break Time</p>
          </div>
          <div>
            <button className="complete-btn">Activity completed</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
