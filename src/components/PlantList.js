import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  plants = plants.reverse();
  return (
    <ul className="cards">
      {plants.map(p => (
        <PlantCard key={p.id} plant={p}/>
      ))}
    </ul>
  );
}

export default PlantList;
