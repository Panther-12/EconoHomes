import './App.css';
import Placeholder from './Placeholder';
import FeaturedHouse from './globomantics/FeaturedHouse';
import Header from './globomantics/Header';
import Houses from './globomantics/Houses';
import HousesFilter from './globomantics/HousesFilter';
import FilterCountries from './globomantics/FilterCountries';
import HouseFromQuery from './globomantics/HouseFromQuery';
import { useEffect } from "react";
import { useState, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from  "react-router-dom";
// Memoiazation allows caching of data

function App() {
  const[allHouses, setAllHouses] = useState([])
  // Array empty the function will only run the first time the component
  // is rendered.
  // Add asynchronous functions to the hook 
  useEffect(()=>{
    const getHouses = async () =>{
      const res = await fetch('/houses.json')
      const houses = await res.json()
      setAllHouses(houses)
    }
    getHouses()
  }, [])

  // The function is called when the houses state changes and loads the featured
  // house to cache. Subsequent changes result in this value being loaded from cache
  let featuredHouse = useMemo(()=>{
    if(allHouses.length){
      const randomIndex = Math.floor(Math.random()*allHouses.length)
      return allHouses[randomIndex]
    }
  },[allHouses])

// Partial matching in routes can be fixed with exact paths
  return (
    <Router>
        <div className="container">
          <Header/>
          <FilterCountries houses={allHouses}/>
        </div>
        <Routes>
          <Route exact path="/" element={<FeaturedHouse house={featuredHouse}/>}/>
          <Route exact path="/house/:id" element={<HouseFromQuery houses={allHouses}/>}/>
          <Route exact path="/about"/>
          <Route exact path="/searchresults/:country" element={<HousesFilter houses={allHouses}/>}/>
        </Routes>
    </Router>
  );
}

export default App;
