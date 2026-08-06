import 'dotenv/config'
import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (_,  res) => {
    res.send('Hola, estamos aprendiendo expreess con la ficha 3407184')
});
app.listen(port, () => {
    console.log(`Servidor en funcionamiento en el puerto: ${port}`)
});

app.get("/Datos_personales", (req, res) => {
 res.json({"Datos personales":{"name" : "Sebastian", "Apellido" : "Loaiza", "Lista de telefonos": {
    "phone 1": "3242709797",
    "phone 2": "3129187705"
    }},
    "Datos programa":{
        "name" : "ADSO", "Tipo programa" : "Analisis y Desarrollo de software", "ficha":"3407184"
    }})
});