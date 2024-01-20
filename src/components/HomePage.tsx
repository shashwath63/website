import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <h1>Welcome to this website!</h1>

      <p>Hey this is shashwath 👋</p>

      <button>
        <a href="/about">Learn More</a>
      </button>
    </div>
  );
};

export default HomePage;
