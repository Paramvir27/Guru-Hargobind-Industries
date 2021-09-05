import React from "react";
import { CONTENT } from "./content";
import "./style.css";

const HomePage = () => {
  const { heading } = CONTENT;
  return (
    <div>
      <h1>{heading}</h1>
    </div>
  );
};

export default HomePage;
