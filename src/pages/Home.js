import React from "react";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div>
      <Navigation />
      <h1>Bienvenue {":)"}</h1>
      <p>vous pouvez commencer à coder</p>
    </div>
  );
};

export default Home;
