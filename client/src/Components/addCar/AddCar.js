export default function AddCar({ addCar, onInputChange }) {
	return (
		<div className="flex flex-col">
			<div className=" font-mono car-card bg-gray-200 text-center m-2	 p-2 self-center	max-w-2xl rounded-3xl">
				<h1 className="text-1xl p-2"> Add your new car Ricardo </h1>
				<div className="max-width-sm text-sm text-center p-2 m-2 flex flex-col">
					<label>tipo:</label>
					<input name="tipo" onChange={onInputChange} type="text" />
					<label>marca:</label>
					<input name="marca" onChange={onInputChange} type="text" />
					<label>modelo:</label>
					<input name="modelo" onChange={onInputChange} type="text" />
					<label>combustivel:</label>
					<input name="combustivel" onChange={onInputChange} type="text" />
					<label>numero da placa:</label>
					<input name="placa" onChange={onInputChange} type="text" />
					<label>numero da placa anterior:</label>
					<input name="cor" onChange={onInputChange} type="text" />
					<label>chassi:</label>
					<input name="placaAnterior" onChange={onInputChange} type="text" />
					<label>cor predominante:</label>
					<input name="chassi" onChange={onInputChange} type="text" />
					<label>ano de fabricacao:</label>
					<input name="anoFabricacao" onChange={onInputChange} type="text" />
					<label>ano modelo:</label>
					<input name="anoModelo" onChange={onInputChange} type="text" />
					<label>categoria:</label>
					<input name="categoria" onChange={onInputChange} type="text" />
					<label>ipva:</label>
					<input name="ipva" onChange={onInputChange} type="text" />
					<button className='self-center w-min bg-white border-black rounded-md border-2 mt-4 p-2' onClick={addCar}> add </button>
				</div>
			</div>
		</div>
	)
}