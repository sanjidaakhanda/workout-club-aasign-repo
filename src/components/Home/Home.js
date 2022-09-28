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
        <div className="break-btn">
          <button>10s</button>
          <button>20s</button>
          <button>30s</button>
          <button>40s</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
