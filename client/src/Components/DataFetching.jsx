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
			<div className="flex flex-row bg-red-400 m-2 rounded-lg border-8 ">
				{
					carStore.map(car => (
						<div className=" max-w-xs rounded overflow-hidden shadow-lg my-2" key={car.id}>
							<img class= "w-full " src={require('../Images/VW-Fusca.jpeg')} alt= {car.id}/>
							<h2 className="m-2">{car.tipo}</h2>
							<h1 className="m-2">{car.modelo}</h1>
							<h2 className="m-2">{car.marca}</h2>
						</div>
					))
				}
			</div>

	)
}

export default DataFetching;