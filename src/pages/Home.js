import React from "react";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="home-page">
      <Navigation />
      <main>
        <div className="Hello">
          <h1 className="animate-text">Bienvenue {":)"}</h1>
          <p className="animate-text">vous pouvez commencer à coder</p>
        </div>
      </main>
    </div>
  );
};

export default Home;
