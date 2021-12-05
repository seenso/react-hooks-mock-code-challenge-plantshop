import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

const api_url = "http://localhost:6001/plants";

function PlantPage() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch(api_url)
    .then(r => r.json())
    .then(data => setPlants(data));
  }, []);

  function addPlant(e) {
    e.preventDefault();

    let newPlant = {
          id: plants.length + 1,
          name: e.target.name.value,
          image: e.target.image.value,
          price:e.target.price.value
        }

    // setPlants([...plants, newPlant])

    fetch(api_url, {
      method: "POST",
      "Content-Type": "application/json",
      body: JSON.stringify(newPlant)
    })
    .then(r => r.json())
    .then(data => console.log("Plant POST server message", data))
  }

  function filterPlants(e) {
    setPlants(plants.filter(p => p.name.includes(e.target.value)))
  }

  return (
    <main>
      <NewPlantForm addPlant={addPlant}/>
      <Search filterPlants={filterPlants}/>
      <PlantList plants={plants}/>
    </main>
  );
}

export default PlantPage;
