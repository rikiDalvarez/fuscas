import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const dbName = "fuscas";

const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	dbName,
};
const url = process.env.MONGO_DB_URL;

mongoose.connect(url, options)
	.then(() => {
		console.log('Connected to the database ')
	})
	.catch((err) => {
		console.error(`Error connecting to the database. n${err}`);
	});

const details = new mongoose.Schema({
	tipo: String,
	marca: String,
	modelo: String,
	combustivel: String,
	placa: String,
	cor: String,
	placaAnterior: String,
	chassi: String,
	anoFabricacao: String,
	anoModelo: String,
	categoria: String,
	ipva: String
})
export const Cars = mongoose.model("cars", details)

// Cars.find((error, result) => console.log(result))
