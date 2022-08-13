export const Car = (props) => {

	console.log(props.car);

	return (
		<div key={props.car._id} className="flex flex-row bg-red-400 m-2 rounded-lg border-8 ">
					<div className=" max-w-xs rounded overflow-hidden shadow-lg my-2">
						{/* <img class= "w-full " src={props.car.selectedFile} alt= {props.car._id}/> */}
						<h2 className="m-2">{props.car.tipo}</h2>
						<h1 className="m-2">{props.car.marca}</h1>
						<h2 className="m-2">{props.car.modelo}</h2>
					</div>
		</div>
	)
}