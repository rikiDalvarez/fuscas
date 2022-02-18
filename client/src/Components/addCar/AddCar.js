import { useState } from "react"
import Axios from "axios";

export default function AddCar() {
	const [tipo, setTipo] = useState('');
	const [marca, setMarca] = useState('');
	const [modelo, setModelo] = useState('');
	const [combustivel, setCombustivel] = useState('');
	// const [placa, setPlaca] = useState('');
	// const [cor, setCor] = useState('');
	// const [placaAnterior, setPlacaAnterior] = useState('');
	// const [chassi, setChassi] = useState('');
	// const [anoFabricacao, setAnoFabricacao] = useState('');
	// const [anoModelo, setAnoModelo] = useState('');
	// const [categoria, setCategoria] = useState('');
	// const [ipva, setIpva] = useState('');

	const addCar = () => {
		Axios.post("http://localhost:3001/create", {
			tipo: tipo,
			marca: marca,
			modelo: modelo,
			combustivel: combustivel
		}).then(() => {
			console.log("@@ success");
		})
	}

	
	const displayInfo = () => {
		console.log(tipo + marca + modelo + combustivel)
	}
	

	/* 
	make input smaller
	on click input type on the middle
	*/

	return (
		<div className="flex flex-col">
			<div className=" font-mono car-card bg-gray-200 text-center m-8 p-2 self-center	max-w-2xl rounded-3xl">
				<h1 className="text-3xl p-2"> Add your new car Ricardo </h1>
				<div className="max-width-sm text-xl text-center p-2 m-2 flex flex-col">
					<label>tipo:</label>
					<input onChange={(event) => {setTipo(event.target.value)}} type="text" />
					<label>marca:</label>	
					<input onChange={(event) => {setMarca(event.target.value)}} type="text" />
					<label>modelo:</label>
					<input onChange={(event) => {setModelo(event.target.value)}} type="text" />
					<label>combustivel:</label>	
					<input onChange={(event) => {setCombustivel(event.target.value)}} type="text" />
					{/* <label>numero da placa:</label>	
					<input onChange={(event) => {setPlaca(event.target.value)}} type="number" />
					<label>numero da placa anterior:</label>
					<input onChange={(event) => {setPlacaAnterior(event.target.value)}} type="number" />
					<label>chassi:</label>
					<input onChange={(event) => {setChassi(event.target.value)}} type="text" />
					<label>cor predominante:</label>
					<input onChange={(event) => {setCor(event.target.value)}} type="text" />
					<label>ano de fabricacao:</label>	
					<input onChange={(event) => {setAnoFabricacao(event.target.value)}} type="number" />
					<label>ano modelo:</label>
					<input onChange={(event) => {setAnoModelo(event.target.value)}} type="number" />
					<label>categoria:</label>	
					<input onChange={(event) => {setCategoria(event.target.value)}} type="text" />
					<label>ipva:</label>
					<input onChange={(event) => { setIpva(event.target.value) }} type="boolean" /> */}
					<button className='self-center w-min bg-white border-black rounded-md border-2 mt-4 p-2' onClick={addCar}> add </button>
				</div>
			</div>
		</div>
	)
}