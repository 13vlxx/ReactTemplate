import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-page">
      <h1>Error 404. File not found</h1>
      <NavLink to="/">
        <p>Go back home</p>
      </NavLink>
    </div>
  );
};

export default Error;
