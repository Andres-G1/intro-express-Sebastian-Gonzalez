const app = express();
const port = 3000;

// Creas y exportas la constante en el mismo archivo
export const saludo = 'Hola, estamos aprendiendo express con la ficha 3407184';

app.get("/", (_, res) => {
    res.send(saludo); // La utilizas aquí directamente
});

app.listen(port, () => {
    console.log(`Servidor en funcionamiento en el puerto: ${port}`);
});