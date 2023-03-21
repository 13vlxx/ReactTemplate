import React from "react";
import Navigation from "../components/Navigation";

const About = () => {
  return (
    <div className="help-page">
      <Navigation />
      <main>
        <div className="Help-list">
          <h1 className="animate-h1">Help</h1>
          <ol>
            <li>
              1{")"} <span>git clone </span>
              <a
                className="animate-text"
                target={"_blank"}
                href="https://github.com/13vlxx/ReactTemplate"
              >
                "https://github.com/13vlxx/ReactTemplate"
              </a>
              <span> </span>
              <span>on your terminal</span>
            </li>
            <li>2{")"} "npm i" in your directory terminal for install node modules</li>
            <li>3{")"} "npm start" to start a react server on port 3000</li>
          </ol>
        </div>
      </main>
    </div>
  );
};

export default About;
