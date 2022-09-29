import React, { useEffect, useState } from "react";
import "./Home.css";
import Workouts from "../Workouts/Workouts";
import Workout from "../Workout/Workout";
import { ToastContainer, toast } from "react-toastify";
const Home = () => {
  const [workouts, setWorkouts] = useState([]);
  const [cart, setCart] = useState([]);
  const [second, setSecond] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setWorkouts(data));
  }, []);
  const handleBreak = (seecond) => {};

  const handleActivity = () => {
    toast("Completed");
  };
  const handleAddToCart = (time) => {
    const totalTime = [...cart, time];
    setCart(totalTime);
  };
  return (
    <div className="home-container">
      <div className="">
        <h2>Select today's exercise</h2>
        <Workouts
          workouts={workouts}
          cart={cart}
          setCart={setCart}
          handleAddToCart={handleAddToCart}
        ></Workouts>
      </div>
      <div>
        <h2> Sanjida Akhanda</h2>

        <div className="name-info">
          <p>Massachusetts,USA</p>
        </div>
        <div className="personal-info">
          <p>50kg</p>
          <p>5.1 inch</p>
          <p>33 years</p>
        </div>
        <p>Add a Break</p>

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
          </div>
          <div className="break">
            <p>Break Time</p>
          </div>
          <div>
            <button onClick={handleActivity} className="complete-btn">
              Activity completed
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>

      <div>
        <div className="container">
          <p className="blog"> Question-1.How does react work?</p>

          <p>
            Answer-ReactJS is one of the most popular JavaScript libraries for
            mobile and web application development.
          </p>
          <p className="blog">Question-2.Difference between props and state?</p>
          <p>
            Answer-Main difference is props- props get passed to the
            component.and State-whereas state is managed within the component.{" "}
          </p>
          <p className="blog">Question-3. How UseEffect works? </p>
          <p>
            Answer-UseEffect do tasks like updating the DOM, fetching data from
            API end-points, setting up subscriptions or timers, etc can be lead
            to unwarranted side-effects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
