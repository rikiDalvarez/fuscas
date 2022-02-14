import { useState } from "react"

export default function AddCar() {
	const [tipo, setTipo] = useState('');
	const [marca, setMarca] = useState('');
	const [modelo, setModelo] = useState('');
	const [combustivel, setCombustivel] = useState('');
	const [placa, setPlaca] = useState('');
	const [cor, setCor] = useState('');
	const [placaAnterior, setPlacaAnterior] = useState('');
	const [chassi, setChassi] = useState('');
	const [anoFabricacao, setAnoFabricacao] = useState('');
	const [anoModelo, setAnoModelo] = useState('');
	const [categoria, setCategoria] = useState('');
	const [ipva, setIpva] = useState('');
	
	const displayInfo = () => {
		console.log(tipo + marca + modelo + combustivel + placa)
	}
	

	return (
		<div className="car-card bg-red-500 m-8 p-2">
			<h1 className="text-xl"> Title </h1>
			<img src="../../../public/logo512.png" alt="fusca" />
			<div className="max-width-sm text-xl text-center border-solid border-4 border-stone-500 rounded">
				<label>tipo:</label>
				<input onChange={(event) => {setTipo(event.target.value)}} type="text" />
				<label>marca:</label>	
				<input onChange={(event) => {setMarca(event.target.value)}} type="text" />
				<label>modelo:</label>
				<input onChange={(event) => {setModelo(event.target.value)}} type="text" />
				<label>combustivel:</label>	
				<input onChange={(event) => {setCombustivel(event.target.value)}} type="text" />
				<label>numero da placa:</label>	
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
				<input onChange={(event) => { setIpva(event.target.value) }} type="boolean" />
				<button className='bg-white border-black rounded-md border-2' onClick={displayInfo}> adicionar carro</button>
			</div>
		</div>
	)
}