import React, { useState } from "react";

const Card = props => {
  return (
    <div className="Card">
      <h2>{props.name}</h2>
      <p>{props.species[0]}</p>
      <p>{props.weight}</p>
    </div>
  );
};

export default Card;
