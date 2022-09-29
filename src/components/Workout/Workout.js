import React from "react";
import "./Workout.css";
const Workout = ({ workout, cart, setCart }) => {
  const { img, name, time, age } = workout;
  const handleAddToCart = () => {
    const totalTime = parseFloat(time);
    setCart(totalTime);
  };

  console.log(cart);
  return (
    <div className="card">
      <img className="img-container" src={img} alt="" />
      <p> Name:{name}</p>
      <p> Age:{age}</p>
      <p>Time:{time}</p>
      <button onClick={() => handleAddToCart(time)} className="add-btn">
        Add to cart
      </button>
    </div>
  );
};

export default Workout;
