import React from "react";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <div className="navigation">
      <header>
        <div>
          <NavLink to="/">
            <h1 className="animate-charcter">13vlxx ReactTemplate</h1>
          </NavLink>
        </div>
        <nav>
          <ul>
            <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "animate-charcter")}>
              <li>Accueil</li>
            </NavLink>
            <NavLink
              to="/help"
              className={(nav) => (nav.isActive ? "nav-active" : "animate-charcter")}
            >
              <li>Help</li>
            </NavLink>
            <NavLink to="https://github.com/13vlxx" target={"_blank"}>
              <li className="animate-charcter">GitHub</li>
            </NavLink>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navigation;
