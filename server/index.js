import express from "express";
const app = express();
import cors from "cors";
import { Cars } from "./db.js";
import mongoose from "mongoose";

app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
	let cars;
	try {
		cars = await Cars.find();
	} catch (error) {
		console.error(error)
	}
	res.send(cars)
})

app.post('/create', async (req, res) => {
	const tipo = req.body.tipo
	const marca = req.body.marca
	const modelo = req.body.modelo
	const combustivel = req.body.combustivel
	const placa = req.body.placa
	const cor = req.body.cor
	const placaAnterior = req.body.placaAnterior
	const chassi = req.body.chassi
	const anoFabricacao = req.body.anoFabricacao
	const anoModelo = req.body.anoModelo
	const categoria = req.body.categoria
	const ipva = req.body.ipva

	try {
		const schema = new mongoose.Schema({
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
		});

		const car = new Cars();
		car.tipo = tipo;
		car.marca = marca;
		car.modelo = modelo
		car.combustivel = combustivel
		car.placa = placa
		car.cor = cor
		car.placaAnterior = placaAnterior
		car.chassi = chassi
		car.anoFabricacao = anoFabricacao
		car.anoModelo = anoModelo
		car.categoria = categoria
		car.ipva = ipva

		await car.save();

		res.send(car)
	} catch (error) {
		console.error(error)
	}
})

app.listen(3001, () => {
	console.log("server running @@")
});