const express = require('express')

const app = express();

app.get('/me', (req, res) =>{
   console.log(req.method) 
   res.status(200).json({
    name: 'Carmen Xocua Posadas ',
    age: 35,
    country: 'México'
    })
})

app.post('/metas', (req, res) =>{
    console.log(req.method) 
    res.status(200).json({
        hobbie1: 'Patinar',
        hobbie2: 'Senderismo',
        hobbie3: 'Ver cine de arte'
    })

 })

 app.patch('/metas', (req, res)=>{
    console.log(req.method)
    res.status(200).json({
        meta1: 'Terminar el bootcamp',
        meta2: 'Hacer proyectos para mi portafolio',
        meta3: 'Conseguir un empleo'
    })
 })

 app.put('/business', (req, res) =>{
    console.log(req.method) 
    res.status(200).json({
        empresa1: '',
        empresa2: 'Globant'
    })
 })

app.listen(9000, ()=>{
    console.log("servidor corriendo en el puerto 9000")
})