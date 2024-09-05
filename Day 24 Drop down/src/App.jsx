import { useState } from 'react';
import './App.css'
import Dropdown from './components/Dropdown'

const cityData = {
  "New York": ["Manhattan", "Brooklyn", "Queens", "Bronx", "Staten Island"],
  "Los Angeles": ["Hollywood", "Beverly Hills", "Santa Monica", "Venice", "Downtown"],
  "Chicago": ["Lincoln Park", "Hyde Park", "Wicker Park", "River North", "South Loop"],
  "Houston": ["Downtown", "Midtown", "The Heights", "Montrose", "West University"],
  "Miami": ["South Beach", "Brickell", "Wynwood", "Little Havana", "Coral Gables"],
};

function App() {

  const [selectedCity, setSelectedCity] = useState("");
  const [areas, setAreas] = useState([]);

  function handleChange(value){
    setSelectedCity(value);
    setAreas(cityData[value] || []);
  }

  return (
    <>
     <Dropdown cityData={cityData} onChange={handleChange} />
     <Dropdown areas={areas} />
    </>
  )
}

export default App
