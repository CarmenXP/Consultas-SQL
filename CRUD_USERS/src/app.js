const express = require('express')
const app = express()
const PORT = 8000

app.use(express.json())

app.get('/', (req, res) =>{
    res.status(200).json({
        message: 'Funcionando'
    })
})

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})