import express from 'express';

const app = express();
const port = 3000;

export const saludo = 'Hola, estamos aprendiendo express con la ficha 3407184';

app.get("/", (_, res) => {
    res.send(saludo);
});

app.listen(port, () => {
    console.log(`Servidor en funcionamiento en el puerto: ${port}`);
});