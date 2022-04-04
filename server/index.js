import express from "express";
const app = express();
import mysql from "mysql";
import cors from "cors";

app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
	user: 'root',
	host: 'localhost',
	password: '',
	database: 'coches_ricardo'
});

	
app.get('/cars', (req, res) => {
	db.query('SELECT * FROM fuscas', (err, result) => {
		if (err) {
			console.log(err);
		}
		console.log("request made")
		res.send(result);	
	})
})


app.post('/create', (req, res) => {
	const tipo = req.body.tipo
	const marca = req.body.marca
	const modelo = req.body.modelo
	const combustivel = req.body.combustivel

	db.query('INSERT INTO fuscas (tipo, marca, modelo, combustivel) VALUES (?,?,?,?)',
		[tipo, marca, modelo, combustivel], (err, result) => {
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