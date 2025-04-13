import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [foodPlaces, setFoodPlaces] = useState([]);
  const [foodFilters, setFoodFilters] = useState({
    type: "",
    maxCost: "",
    foodType: "",
    dineIn: "",
    takeaway: "",
  });

  useEffect(() => {
    fetchFoods();
  }, []);

  const fetchFoods = async (filterParams = {}) => {
    try {
      const query = new URLSearchParams(filterParams).toString();
      const response = await axios.get(`http://localhost:5000/api/foods?${query}`);
      setFoodPlaces(response.data);
    } catch (error) {
      console.error("Error fetching food places:", error);
    }
  };

  const handleFoodFilterChange = (e) => {
    setFoodFilters({ ...foodFilters, [e.target.name]: e.target.value });
  };

  const applyFoodFilters = () => {
    fetchFoods(foodFilters);
  };

  return (
    <div className="container">
      <h1>Food Places</h1>

      {/* Food Filter Section */}
      <div className="filter-container">
        <select name="type" onChange={handleFoodFilterChange}>
          <option value="">All Types</option>
          <option value="restaurant">Restaurant</option>
          <option value="cafe">Café</option>
          <option value="dhaba">Dhaba</option>
          <option value="local">Local Food</option>
        </select>

        <input
          type="number"
          name="maxCost"
          placeholder="Max Cost"
          onChange={handleFoodFilterChange}
        />

        <select name="foodType" onChange={handleFoodFilterChange}>
          <option value="">All</option>
          <option value="veg">Veg</option>
          <option value="non-veg">Non-Veg</option>
          <option value="veg and non-veg">Veg & Non-Veg</option>
        </select>

        <select name="dineIn" onChange={handleFoodFilterChange}>
          <option value="">Dine In?</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>

        <select name="takeaway" onChange={handleFoodFilterChange}>
          <option value="">Takeaway?</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>

        <button onClick={applyFoodFilters}>Apply Food Filters</button>
      </div>

      {/* Food Cards */}
      <div className="grid">
        {foodPlaces.length === 0 ? (
          <p className="grid1">No food data available.</p>
        ) : (
          foodPlaces.map((place) => (
            <div key={place._id} className="card">
              <img
                src={`http://localhost:5000/uploads/${place.image}`}
                alt={place.name}
                className="place-image"
              />
              <h3>{place.name}</h3>
              <p><strong>Location:</strong> {place.location}</p>
              <p><strong>Type:</strong> {place.type}</p>
              <p><strong>Cost:</strong> ₹{place.cost}</p>
              <p><strong>Cuisine:</strong> {place.cuisine}</p>
              <p><strong>Specialty:</strong> {place.specialty}</p>
              <p><strong>Food Type:</strong> {place.foodType}</p>
              <p><strong>Dine In:</strong> {place.dineIn ? "Yes" : "No"}</p>
              <p><strong>Takeaway:</strong> {place.takeaway ? "Yes" : "No"}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
