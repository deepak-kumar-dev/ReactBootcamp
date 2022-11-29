import React from "react";
import Card from "./Card";
import data from "./data.json";
import "./style.css";

function index() {
  return (
    <main>
      <div className="header">
        <h1>Brainy Fools</h1>
      </div>
      <div className="card-container">
        {data.map((d) => {
          return <Card {...d} key={"card-" + d.id} />;
        })}
      </div>
    </main>
  );
}

export default index;
