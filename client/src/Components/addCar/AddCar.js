import { useState } from "react";
import AddFiles from "./addFiles"



export default function AddCar({ addCar, onInputChange }) {


	return (
		<div className="flex flex-col">
			<div className=" font-mono car-card bg-gray-200 text-center m-2	 p-2 self-center	max-w-2xl rounded-3xl">
				<h1 className="text-1xl p-2"> Add your new car Ricardo </h1>
				<div className="max-width-sm text-sm text-center p-2 m-2 flex flex-col">
					<AddFiles></AddFiles>
					{/* <div class="tipo flex flex-row m-1">
						<label>photos:</label>
						<input type="file" name="photos" onChange={onInputChange} />
					</div> */}
					<div className="tipo flex flex-row m-1">
						<label>tipo:</label>
						<input name="tipo" onChange={onInputChange} type="text" />
					</div>
					<div className="tipo flex flex-row m-1 ml-0 pl-0">
						<label>marca:</label>
						<input name="marca" onChange={onInputChange} type="text" />
					</div>
					<div className="tipo flex flex-row m-1 ml-0 pl-0">
						<label>modelo:</label>
						<input name="modelo" onChange={onInputChange} type="text" />
					</div>
					<div className="tipo flex flex-row m-1 ml-0 pl-0">
						<label>combustivel:</label>
						<input name="combustivel" onChange={onInputChange} type="text" />
					</div>
					<div className="tipo flex flex-row m-1 ml-0 pl-0">
						<label>numero da placa:</label>
						<input name="placa" onChange={onInputChange} type="text" />
					</div>
					<div className="tipo flex flex-row m-1 ml-0 pl-0">
						<label>placa anterior:</label>
						<input name="placaAnterior" onChange={onInputChange} type="text" />
					</div>
					<div className="tipo flex flex-row m-1 ml-0 pl-0">
						<label>chassi:</label>
						<input name="chassi" onChange={onInputChange} type="text" />
					</div>
					<div className="tipo flex flex-row m-1 ml-0">
						<label>cor predominante:</label>
						<input name="corPredominante" onChange={onInputChange} type="text" />
					</div>
					<div className="tipo flex flex-row m-1 ml-0 pl-0">
						<label>ano de fabricacao:</label>
						<input name="anoFabricacao" onChange={onInputChange} type="text" />
					</div>
					<div className="tipo flex flex-row m-1 ml-0 pl-0">
						<label>ano modelo:</label>
						<input name="anoModelo" onChange={onInputChange} type="text" />
					</div>
					<div className="tipo flex flex-row m-1 ml-0 pl-0">
						<label>categoria:</label>
						<input name="categoria" onChange={onInputChange} type="text" />
					</div>
					<div className="tipo flex flex-row m-1 ml-0 pl-0">
						<label>ipva:</label>
						<input name="ipva" onChange={onInputChange} type="text" />
					</div>
					<button className='self-center w-min bg-white border-black rounded-md border-2 mt-4 p-2' onClick={addCar}> add </button>
				</div>
			</div>
		</div>
	)
}