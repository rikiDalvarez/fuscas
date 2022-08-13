import React, {useState, useEffect} from "react"
import { Car } from "./Car";

const apiURL = "http://localhost:3001/";

export const CarsList = () => {

	const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch(apiURL)
      .then((response) => response.json())
      .then((cars) => {
        setCars(cars);
        console.log("refrescar")
      });
  }, []);

	return (
		cars.map((car) => <Car car={car} />)
	)
}
