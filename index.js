import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Info from "./Menu_Icon/Info";
import Help from "./Menu_Icon/Help";
import Footer from "./Menu_Icon/Footer";
import Hobbies from "./Menu_Icon/Hobbies";

function App() {
  return (
    <div className="card">
      <Info />
      <div className="container">
        <Help />
        <Hobbies />
      </div>
      <Footer />
    </div>
  );
}

ReactDOM.render(<App/>,document.getElementById("root"));