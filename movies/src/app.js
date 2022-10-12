const express = require('express');
 const db = require('./utils/database')
 const initModels = require('./models/initModels')

const app = express()

const PORT = 9000

app.use(express.json())

db.authenticate()
    .then(() => {console.log('Autenticación correcta')})
    .catch(err => {console.log(err)})

db.sync()
    .then(()=> console.log('base de datos sincronizada'))
    .catch(err => console.log(err))

initModels()

app.get('/', (req, res)=>{
    res.status(200).json({message: 'OK'})
})

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el ${PORT}`)
})