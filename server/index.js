import express from "express";
const app = express();
import mysql from "mysql";

const db = mysql.createConnection({
	user: 'root',
	host: 'localhost',
	password: '',
	database: 'coches_ricardo'
});

app.post('/create', (req, res) => {
	const name = req.body.name
	const tipo = req.body.tipo
	const marca = req.body.marca
	const modelo = req.body.modelo
	const combustivel = req.body.combustivel

	db.query('INSERT INTO fuscas (name, tipo, marca, modelo, combustivel) VALUES (?,?,?,?,?)',
		[name, tipo, marca, modelo, combustivel], (err, result) => {
			if (err) {
				console.log(err)
			} else {
				res.send("@@")
			}
	})
})

app.listen(3001, () => {
	console.log("server running @@")
});