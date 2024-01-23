import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const navigate = useNavigate();//faster

  // const handleClick = () => {
  //   window.location.href = "/about";
  // };
  return (
    <div className="home-page">
      <h1>Welcome to this website!</h1>

      <p>Hey this is shashwath 👋</p>

      <button onClick={() => navigate("/about")}>Learn More</button>
    </div>
  );
};

export default HomePage;
