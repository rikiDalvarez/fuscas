import Car from "../car/Car"
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";



export default function Cars() {
 // 
	let [carStore, setCarStore] = useState([])
	let count = 0;
	const apiURL = "http://localhost:3001/cars";

	const fetchData = async (url,event) => {

		const response = await axios.get(url);
		// setCarStore(response);
		const cars = response.data;
		

		
		console.log({carStore})
		console.log({ cars })
		



		count += 1;
		console.log(count)
		return cars	
	}

	let cars = fetchData(apiURL)

// 	useEffect(() => {
// 		fetchData(apiURL);
// 		console.log("BANG")
//  });

	return (
		<>
			
		<h1>badoo</h1>
		
		</>
		// <div>	{carStore && carStore.map((car) => {
		// 	return (
		// 		<div>
		// 			<h1>{ car.tipo}</h1>
		// 		</div>
		// 	)
		// })}
		// 	{/* <Car></Car> */}
		// </div>
	)
}