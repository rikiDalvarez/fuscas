
import mongoose from 'mongoose';

const url = `mongodb+srv://rikidalvarez:37SNMcFSE2zCnmKp@cluster0.mwf73.mongodb.net/Cluster0?retryWrites=true&w=majority`;

mongoose.connect(url)
	.then(() => {
		console.log('Connected to the database ')
	})
	.catch((err) => {
		console.error(`Error connecting to the database. n${err}`);
	});


export const Cars = mongoose.model("cars", new mongoose.Schema({
		tipo : String,
		marca : String,
		modelo : String,
		combustivel : String,
		placa : String,
		cor : String,
		placaAnterior : String,
		chassi : String,
		anoFabricacao : Number,
		anoModelo : Number,
		categoria : String,
		ipva : String
	}))




Cars.find((error, result) => console.log(result ))
		