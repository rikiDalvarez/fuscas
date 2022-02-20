import Car from "../car/Car"
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export default function Cars() {

	let [carStore, setCarStore] = useState([{}])
	
	const apiURL = "http://localhost:3001/cars";

			const fetchData = async () => {
				const response = await axios.get(apiURL);
				setCarStore(response);
				console.log(response);
			}

	useEffect(() => {
		fetchData();
 });

	return (
		<div>	{carStore && carStore.map((car) => {
			return (
				<div>
					<h1>{ car.tipo}</h1>
				</div>
			)
		})}
			{/* <Car></Car> */}
		</div>
	)
}