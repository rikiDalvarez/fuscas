import React, { useState, useEffect } from "react"
import AddCar from "./Components/addCar/AddCar";
import { CarsList } from "./Components/cars/CarsList";

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

  const [carProperties, setCarProperties] = useState({
    tipo: "",
    marca: "",
    modelo: "",
    combustivel: "",
    placa: "",
    cor: "",
    placaAnterior: "",
    chassi: "",
    anoFabricacao: "",
    anoModelo: "",
    categoria: "",
    ipva: ""
  })
  const addCar = async () => {
    const respuesta = await fetch("http://localhost:3001/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(carProperties)
    })
    const data = await respuesta.json();
    setCars([...cars, data]);
  }

  const onInputChange = e => {
    const { name, value } = e.target
    setCarProperties(prev => ({
      ...prev, [name]: value
    }))
  }

  return (

    <div className="">
      <h1 className=" italic font-mono text-6xl text-slate-50 tracking-normal text-center align-middle p-5 bg-gradient-to-r from-red-600 to-gray-700">Fuscas</h1>
      <div className="flex">
        <AddCar className="w-1/3" addCar={addCar} onInputChange={onInputChange} />
        <div className="flex flex-col w-2/3">
          <CarsList className="" cars={cars}></CarsList>
        </div>
      </div>
    </div>
  );
}

export default App;
