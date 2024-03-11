import React from "react";
import "./Goodnight.css"; // Import your CSS file for styling

const Goodnight = () => {
  // Function to generate random coordinates for stars
  const getRandomPosition = () => {
    const x = `${Math.random() * 100}%`;
    const y = `${Math.random() * 100}%`;
    return { left: x, top: y };
  };

  // Generate an array of stars
  const numStars = 50; // Number of stars you want
  const stars = Array.from({ length: numStars }).map((_, index) => (
    <div
      key={index}
      className="star"
      style={{
        ...getRandomPosition(), // Apply random positions to each star
        animationDelay: `${Math.random() * 3}s`, // Add random delay for twinkling effect
      }}
    ></div>
  ));

  return (
    <div className="goodnight-container">
      <h1>Goodnight, my love!</h1>
      <p>
        Wishing you the sweetest dreams and the most restful sleep. <br />
        You mean the world to me! my pika 😘
      </p>
      <div className="stars">{stars}</div> {/* Render the stars */}
    </div>
  );
};

export default Goodnight;
