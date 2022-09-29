import React, { useEffect, useState } from "react";
import "./Home.css";
import Workouts from "../Workouts/Workouts";
// import Workout from "../Workout/Workout";
const Home = () => {
  const [workouts, setWorkouts] = useState([]);
  const [cart, setCart] = useState([]);
  const [second, setSecond] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setWorkouts(data));
  }, []);
  const handleBreak = () => {};
  console.log(second);
  return (
    <div className="home-container">
      <div className="">
        <h2>Select today's exercise</h2>
        <Workouts workouts={workouts} cart={cart} setCart={setCart}></Workouts>
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
        {}
        <div onClick={handleBreak()} className="btn-container">
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
            {workouts.map((workout) => workout.time)}
          </div>
          <div className="break">
            <p>Break Time</p>
          </div>
          <div>
            <button className="complete-btn">Activity completed</button>
          </div>
        </div>
      </div>

      <div>
        <div className="container">
          <p>what is react</p>
          <p>
            Answer-react is Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Quia fuga id voluptate dicta consectetur sequi, veniam minus
            nobis. Nemo vero reprehenderit culpa consectetur aliquam, labore
            repellat distinctio eius voluptatibus saepe!
          </p>
          <p>Difference between</p>
          <p>Answer-loremlkj jdjd jsksk kshskd </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
