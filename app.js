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
    
    const order = req.query.order || "Sin orden" //http://localhost:3030/products?order=ASCENDENTE&page=20
    const page = req.query.page || "Sin pagina"
    res.send(`<h1>Products in order ${order} in the page ${page}</h1> 
        <ol>
        <li>Tv</li>
        <li>Celphone</li>
        <li>printer</li>
        </ol>`
    )
})

app.get("/products/:name/:id/:price", (req, res) =>{
    const product = req.params.name
    const id_pro = req.params.id
    const price_pro = req.params.price
    res.send(`<h1>Product information</h1>
        <ol>
        <li>Product: ${product}</li>
        <li>Id: ${id_pro}</li>
        <li>Price: ${price_pro}</li>
        </ol>`)
})

app.get("/saludo/:name", (req, res) => {
    const name = req.params.name 
    res.send(`Hello ${name}`)
})

app.get("/category/:Category/:id", (req, res) =>{
    const category_pro = req.params.Category 
    const id_category = req.params.id
    res.send(`<h1>Category Products</h1>
        <ol>
        <li>Category: ${category_pro}</li>
        <li>Id: ${id_category}</li>
        </ol>`) 
})

app.get("/article", (req, res) =>{
    res.json({"name" : "Sebastian", "lastname" : "Gonzalez"})
})

app.listen(port, () => {
    console.log(`Servidor en funcionamiento en el puerto: ${port}`);
});

/*
http://localhost:3030
npm install
npm install dotenv
npm run dev
Git log == Para ver el historial de cambios"
Git log --oneline == Para ver el historial de cambios en una sola linea"
Git checkout codigo ==para cambiar a un commit especifico"
http://localhost:3030/products?order=ASCENDENTE&page=20
*/