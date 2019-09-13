import React, { useState, useEffect } from "react";
import PersonCard from "./PersonCard";
import axios from "axios";

export default function CardGrid() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(res => {
        //console.log("This is the response", res);
        const data = res.data.results;
        //console.log("This is the array of people", data);
        setPeople(data);
      })
      .catch(e => {
        console.log("Couldn't get data due to", e);
      });
  }, []);

  return (
    <div className="card-container">
      {people.map(person => {
        return (
          <PersonCard
            key={person.name}
            films={person.films}
            name={person.name}
            species={person.species}
            weight={person.mass}
          />
        );
      })}
    </div>
  );
}
