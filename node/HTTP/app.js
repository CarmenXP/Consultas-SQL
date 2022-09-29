const express = require('express')

const app = express();
/*
Teoría
***********Verbos HTTP: ********
GET -> obtener toda la data
POST -> crear algo
PUT -> actualización, requiere tod la info 
PATCH -> actualización, solo una parte en específica 
DELETE -> eliminar
*********STATUS***************************
100 ->respuestas informativas, raros de ver
200 -> status éxitosos
300 -> Redirecciones
400 -> Si hay un error pero no muy específico, error que comete el usuario
500 -> error por parte del servidor
****************HEADERS***************
de tipo de datos
de identificación 
*/

app.get('/', (req, res) =>{
   console.log(req.method) 
   res.status(200).json({message: 'Hola mundo desde json '})
})

app.post('/', (req, res) =>{
    console.log(req.method) 
    res.status(200).json({message: 'Hola, haciendo post',
    verb: req.method
    })

 })

 app.put('/', (req, res) =>{
    console.log(req.method) 
    res.status(200).json({message: 'Hola, haciendo put ',
    verb: req.method
    })
 })

app.listen(8000, ()=>{
    console.log("servidor corriendo en el puerto 8000")
})