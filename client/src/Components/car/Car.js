export default function Car() {
	return (
		<div className="car-card bg-red-500 m-8 p-2">
			<h1 className="text-xl"> Title </h1>
			<img src="../../../public/logo512.png" alt="fusca" />
			<div className="max-width-sm text-xl text-center border-solid border-4 border-stone-500 rounded">
				<label>tipo:</label>
				<input type="text" />
				<label>marca:</label>	
				<input type="text" />
				<label>modelo:</label>
				<input type="text" />
				<label>combustivel:</label>	
				<input type="text" />
				<label>numero da placa:</label>	
				<input type="number" />
				<label>numero da placa anterior:</label>
				<input type="number" />
				<label>chassi:</label>
				<input type="text" />
				<label>cor predominante:</label>
				<input type="text" />
				<label>ano de fabricacao:</label>	
				<input type="number" />
				<label>ano modelo:</label>
				<input type="number" />
				<label>categoria:</label>	
				<input type="text" />
				<label>ipva:</label>
				<input type="boolean" />
			</div>
		</div>
	)
}