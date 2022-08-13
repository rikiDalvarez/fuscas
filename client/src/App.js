import React, {useState, useEffect} from "react"
import AddCar from "./Components/addCar/AddCar";
import { CarsList } from "./Components/cars/CarsList";
// import CarsList from "./Components/CarsList";


function App() {

  const apiURL = "http://localhost:3001/";

  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch(apiURL)
      .then((response) => response.json())
      .then((cars) => {
        setCars(cars);
      });
  }, []);

  return (

      <div className="App">
        <h1 className= "italic font-mono text-8xl text-slate-50 tracking-normal text-center align-middle p-5 bg-gradient-to-r from-red-600 to-gray-700">Fuscas</h1>
      <AddCar />
      <CarsList cars ={cars}></CarsList>
      {/* <Cars></Cars> */}
      </div>
    
  );
}

export default App;
