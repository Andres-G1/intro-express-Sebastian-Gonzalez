import express from 'express';
import 'dotenv/config'
import bodyParser from "body-parser" /*importacion modulo*/

const app = express();
const port = process.env.PORT || 3000;

// config body-parser
app.use(express.json())
app.use(express.urlencoded({extended: true}))

export const saludo = 'Hola, estamos aprendiendo express con la ficha 3407184';

app.get("/", (_, res) => {
    res.send(saludo);
});

app.get("/products", (req, res) =>{
    res.send(`<h1>Products list</h1>
        <ol>
        <li>Tv</li>
        <li>Phone</li>
        <li>printer</li>
        </ol>`
    )
})

app.listen(port, () => {
    console.log(`Servidor en funcionamiento en el puerto: ${port}`);
});

/*
http://localhost:3030
npm install
npm install dotenv
npm run dev
*/