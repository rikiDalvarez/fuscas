import React, {useState, useEffect} from "react"
import axios from "axios"


const apiURL = "http://localhost:3001/cars";

function DataFetching() {

	const [carStore, setCarStore] = useState([]);
	useEffect(() => {
		axios.get(apiURL)
			.then(res => {console.log(res)
			setCarStore(res.data)})
		.catch(err => console.log(err))
	},[])
	return (
			<ul className="flex flex-col bg-red-400 m-2 rounded-lg border-8 ">
				{
					carStore.map(car => (
						<li className=" m-2 rounded-lg rounded-lg bg-stone-300 max-h-10" key={car.id}>
							<h1 className="m-2">{car.modelo}</h1>
						</li>
					))
				}
			</ul>

	)
}

export default DataFetching;